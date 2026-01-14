#!/usr/bin/env node

/**
 * Comprehensive Link Checker
 *
 * Validates all internal links in the codebase:
 * - navigation.ts
 * - serviceLinks.ts
 * - Vercel redirects
 *
 * Run: node scripts/check-all-links.js
 */

import { readFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

// Colors for console output
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

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

  const urls = files.map(file => {
    let relativePath = file.replace(pagesDir, '');
    let url = relativePath
      .replace(/\\/g, '/')
      .replace(/index\.astro$/, '')
      .replace(/\.astro$/, '/');
    if (!url.startsWith('/')) url = '/' + url;
    if (!url.endsWith('/')) url += '/';
    return url;
  });

  return new Set(urls);
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
          if (redirect.source.includes(':path*')) {
            wildcardBases.push(redirect.source.replace(':path*', ''));
          } else {
            redirectSources.add(redirect.source);
          }
        });
      }
    } catch (_e) {
      console.warn('Warning: Could not parse vercel.json');
    }
  }

  return { redirectSources, wildcardBases };
}

function extractNavigationLinks() {
  const navPath = join(rootDir, 'src/data/navigation.ts');
  if (!existsSync(navPath)) return [];

  const content = readFileSync(navPath, 'utf-8');
  const links = [];
  const hrefRegex = /href:\s*['"]([^'"]+)['"]/g;
  let match;

  while ((match = hrefRegex.exec(content)) !== null) {
    if (match[1].startsWith('/') && !match[1].startsWith('//')) {
      links.push({ url: match[1], source: 'navigation.ts' });
    }
  }

  return links;
}

function extractServiceLinks() {
  const servicePath = join(rootDir, 'src/data/serviceLinks.ts');
  if (!existsSync(servicePath)) return [];

  const content = readFileSync(servicePath, 'utf-8');
  const links = [];
  const urlRegex = /url:\s*['"]([^'"]+)['"]/g;
  let match;

  while ((match = urlRegex.exec(content)) !== null) {
    if (match[1].startsWith('/') && !match[1].startsWith('//')) {
      links.push({ url: match[1], source: 'serviceLinks.ts' });
    }
  }

  return links;
}

function checkLink(link, existingPages, redirectSources, wildcardBases) {
  const normalizedLink = link.endsWith('/') ? link : link + '/';

  if (existingPages.has(normalizedLink)) {
    return { status: 'valid', type: 'page' };
  }

  if (redirectSources.has(link) || redirectSources.has(normalizedLink)) {
    return { status: 'redirect', type: 'redirect' };
  }

  for (const basePath of wildcardBases) {
    if (normalizedLink.startsWith(basePath)) {
      return { status: 'redirect', type: 'wildcard' };
    }
  }

  return { status: 'missing', type: null };
}

function main() {
  console.log('');
  console.log('═══════════════════════════════════════════════════');
  console.log('  Comprehensive Link Checker');
  console.log('═══════════════════════════════════════════════════');
  console.log('');

  // Get existing pages and redirects
  const existingPages = getExistingPages();
  const { redirectSources, wildcardBases } = getRedirects();

  console.log(`${colors.blue}Pages found:${colors.reset} ${existingPages.size}`);
  console.log(`${colors.blue}Redirects:${colors.reset} ${redirectSources.size} + ${wildcardBases.length} wildcards`);
  console.log('');

  // Collect all links
  const allLinks = [];

  const navLinks = extractNavigationLinks();
  console.log(`${colors.blue}navigation.ts:${colors.reset} ${navLinks.length} links`);
  allLinks.push(...navLinks);

  const serviceLinks = extractServiceLinks();
  console.log(`${colors.blue}serviceLinks.ts:${colors.reset} ${serviceLinks.length} links`);
  allLinks.push(...serviceLinks);

  // Deduplicate by URL
  const uniqueLinks = new Map();
  for (const link of allLinks) {
    if (!uniqueLinks.has(link.url)) {
      uniqueLinks.set(link.url, link);
    }
  }

  console.log(`${colors.blue}Total unique:${colors.reset} ${uniqueLinks.size} links`);
  console.log('');
  console.log('Checking links...');
  console.log('');

  // Check all links
  const results = {
    valid: [],
    redirect: [],
    missing: []
  };

  for (const [url, linkInfo] of uniqueLinks) {
    const result = checkLink(url, existingPages, redirectSources, wildcardBases);
    results[result.status].push({ ...linkInfo, ...result });
  }

  // Report results
  console.log('═══════════════════════════════════════════════════');
  console.log('  RESULTS');
  console.log('═══════════════════════════════════════════════════');
  console.log('');

  console.log(`${colors.green}✓ Valid pages:${colors.reset} ${results.valid.length}`);
  console.log(`${colors.yellow}→ Redirected:${colors.reset} ${results.redirect.length}`);
  console.log(`${colors.red}✗ Missing:${colors.reset} ${results.missing.length}`);
  console.log('');

  if (results.redirect.length > 0 && results.redirect.length <= 10) {
    console.log(`${colors.yellow}Redirected links:${colors.reset}`);
    results.redirect.forEach(r => console.log(`  → ${r.url} (${r.source})`));
    console.log('');
  }

  if (results.missing.length > 0) {
    console.log(`${colors.red}MISSING PAGES (will cause 404 errors):${colors.reset}`);
    results.missing.forEach(r => console.log(`  ✗ ${r.url} (${r.source})`));
    console.log('');
    console.log('Actions:');
    console.log('  1. Create the missing pages');
    console.log('  2. Add redirects to vercel.json');
    console.log('  3. Remove references from source files');
    console.log('');
    process.exit(1);
  } else {
    console.log(`${colors.green}✓ All links are valid!${colors.reset}`);
    console.log('');
    process.exit(0);
  }
}

main();
