#!/usr/bin/env node
/**
 * verify-language-mappings.js
 * Verifies that all Arabic pages have English equivalents and vice versa
 * Run after creating new content to ensure language switcher works correctly
 *
 * Usage: node scripts/verify-language-mappings.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pagesDir = path.join(__dirname, '../src/pages');

console.log('Language Mapping Verification');
console.log('=============================\n');

// Collect all page paths
function collectPages(dir, basePath = '') {
  const pages = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const relativePath = path.join(basePath, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      pages.push(...collectPages(fullPath, relativePath));
    } else if (item.endsWith('.astro') && !item.startsWith('_') && !item.startsWith('[')) {
      // Convert file path to URL path
      let urlPath = '/' + relativePath
        .replace(/index\.astro$/, '')
        .replace(/\.astro$/, '/')
        .replace(/\\/g, '/');

      // Normalize trailing slash
      if (!urlPath.endsWith('/')) urlPath += '/';

      pages.push(urlPath);
    }
  }

  return pages;
}

const allPages = collectPages(pagesDir);

// Separate English and Arabic pages
const arabicPages = allPages.filter(p => p.startsWith('/ar/'));
const englishPages = allPages.filter(p => !p.startsWith('/ar/') && !p.startsWith('/عربي/'));

console.log(`Found ${englishPages.length} English pages`);
console.log(`Found ${arabicPages.length} Arabic pages\n`);

// Check for Arabic pages without English equivalents
const arabicWithoutEnglish = [];
for (const arPage of arabicPages) {
  const enEquivalent = arPage.replace('/ar/', '/');
  if (!englishPages.includes(enEquivalent)) {
    arabicWithoutEnglish.push({ arabic: arPage, expectedEnglish: enEquivalent });
  }
}

// Check for English pages without Arabic equivalents (info only)
const englishWithoutArabic = [];
for (const enPage of englishPages) {
  // Skip special pages that don't need Arabic versions
  if (enPage.includes('/blog/') ||
      enPage === '/404/' ||
      enPage === '/thank-you/' ||
      enPage === '/offline/' ||
      enPage === '/sitemap/' ||
      enPage.includes('/bengali/') ||
      enPage.includes('/chinese/') ||
      enPage.includes('/farsi/') ||
      enPage.includes('/french/') ||
      enPage.includes('/hindi/') ||
      enPage.includes('/malayalam/') ||
      enPage.includes('/russian/')) {
    continue;
  }

  const arEquivalent = '/ar' + enPage;
  if (!arabicPages.includes(arEquivalent)) {
    englishWithoutArabic.push({ english: enPage, expectedArabic: arEquivalent });
  }
}

// Report results
if (arabicWithoutEnglish.length > 0) {
  console.log('⚠️  Arabic pages without English equivalents:');
  arabicWithoutEnglish.forEach(({ arabic, expectedEnglish }) => {
    console.log(`   ${arabic} → missing ${expectedEnglish}`);
  });
  console.log('');
}

if (englishWithoutArabic.length > 0) {
  console.log('📝 English pages without Arabic equivalents (localization needed):');
  englishWithoutArabic.slice(0, 20).forEach(({ english }) => {
    console.log(`   ${english}`);
  });
  if (englishWithoutArabic.length > 20) {
    console.log(`   ... and ${englishWithoutArabic.length - 20} more`);
  }
  console.log('');
}

// Summary
console.log('Summary');
console.log('-------');
console.log(`Total pages: ${allPages.length}`);
console.log(`English pages: ${englishPages.length}`);
console.log(`Arabic pages: ${arabicPages.length}`);
console.log(`Coverage: ${((arabicPages.length / englishPages.length) * 100).toFixed(1)}%`);
console.log('');

if (arabicWithoutEnglish.length > 0) {
  console.log('❌ FAIL: Some Arabic pages have no English equivalent');
  console.log('   The language switcher will fail for these pages.');
  process.exit(1);
} else {
  console.log('✅ PASS: All Arabic pages have English equivalents');
}
