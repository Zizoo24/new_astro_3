#!/usr/bin/env node

/**
 * Navigation Link Checker
 *
 * Validates that all navigation links in navigation.ts point to existing pages.
 * Run this before build to catch broken internal links.
 *
 * Usage: node scripts/check-nav-links.js
 */

import { readFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

function getAllFiles(dir, files = []) {
  const entries = readdirSync(dir);

  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      getAllFiles(fullPath, files);
    } else if (entry.endsWith('.astro')) {
      files.push(fullPath);
    }
  }

  return files;
}

function getExistingPages() {
  const pagesDir = join(rootDir, 'src/pages');
  const files = getAllFiles(pagesDir);

  // Convert file paths to URL paths
  const urls = files.map(file => {
    // Get relative path from pages dir
    let relativePath = file.replace(pagesDir, '');

    // Convert to URL format
    let url = relativePath
      .replace(/\\/g, '/') // Windows path fix
      .replace(/index\.astro$/, '')
      .replace(/\.astro$/, '/');

    // Ensure leading slash and trailing slash
    if (!url.startsWith('/')) {
      url = '/' + url;
    }
    if (!url.endsWith('/')) {
      url += '/';
    }

    return url;
  });

  return new Set(urls);
}

function extractLinksFromNavigation(content) {
  const links = [];

  // Match href: '/path/' patterns
  const hrefRegex = /href:\s*['"]([^'"]+)['"]/g;
  let match;

  while ((match = hrefRegex.exec(content)) !== null) {
    const href = match[1];
    // Only check internal links (starting with /)
    if (href.startsWith('/') && !href.startsWith('//')) {
      links.push(href);
    }
  }

  return [...new Set(links)]; // Remove duplicates
}

function getRedirects() {
  const vercelJsonPath = join(rootDir, 'vercel.json');
  const redirectSources = new Set();
  const wildcardBases = [];

  if (existsSync(vercelJsonPath)) {
    try {
      const content = readFileSync(vercelJsonPath, 'utf-8');
      const config = JSON.parse(content);

      if (config.redirects) {
        config.redirects.forEach(redirect => {
          // Handle wildcard redirects
          if (redirect.source.includes(':path*')) {
            const basePath = redirect.source.replace(':path*', '');
            wildcardBases.push(basePath);
          } else {
            redirectSources.add(redirect.source);
          }
        });
      }
    } catch (e) {
      console.warn('Warning: Could not parse vercel.json for redirects');
    }
  }

  return { redirectSources, wildcardBases };
}

function main() {
  console.log('Navigation Link Checker');
  console.log('=======================\n');

  // Get existing pages
  const existingPages = getExistingPages();
  console.log(`Found ${existingPages.size} existing pages\n`);

  // Get redirects
  const { redirectSources, wildcardBases } = getRedirects();
  console.log(`Found ${redirectSources.size} redirect sources`);
  console.log(`Found ${wildcardBases.length} wildcard redirects\n`);

  // Read navigation.ts
  const navPath = join(rootDir, 'src/data/navigation.ts');
  if (!existsSync(navPath)) {
    console.error('Error: navigation.ts not found at', navPath);
    process.exit(1);
  }

  const navContent = readFileSync(navPath, 'utf-8');
  const navLinks = extractLinksFromNavigation(navContent);

  console.log(`Found ${navLinks.length} unique navigation links\n`);

  // Check each link
  const missingPages = [];
  const redirectedPages = [];
  const validPages = [];

  for (const link of navLinks) {
    // Normalize the link to have trailing slash
    const normalizedLink = link.endsWith('/') ? link : link + '/';

    if (existingPages.has(normalizedLink)) {
      validPages.push(link);
    } else if (redirectSources.has(link) || redirectSources.has(normalizedLink)) {
      redirectedPages.push(link);
    } else {
      // Check if it's covered by a wildcard redirect
      let isRedirected = false;
      for (const basePath of wildcardBases) {
        if (normalizedLink.startsWith(basePath)) {
          isRedirected = true;
          break;
        }
      }

      if (isRedirected) {
        redirectedPages.push(link);
      } else {
        missingPages.push(link);
      }
    }
  }

  // Report results
  console.log('Results:');
  console.log('--------');
  console.log(`Valid pages: ${validPages.length}`);
  console.log(`Redirected pages: ${redirectedPages.length}`);
  console.log(`Missing pages: ${missingPages.length}`);

  if (redirectedPages.length > 0) {
    console.log('\nRedirected (covered by vercel.json):');
    redirectedPages.forEach(link => console.log(`  - ${link}`));
  }

  if (missingPages.length > 0) {
    console.log('\nMISSING PAGES (will cause 404 errors):');
    missingPages.forEach(link => console.log(`  - ${link}`));
    console.log('\nPlease create these pages or add redirects in vercel.json');
    process.exit(1);
  } else {
    console.log('\nAll navigation links are valid!');
    process.exit(0);
  }
}

main();
