#!/usr/bin/env node
/**
 * Convert Hero Images to WebP
 *
 * Converts all PNG hero images to optimized WebP format for better LCP performance.
 * WebP typically provides 25-35% smaller file sizes with equivalent quality.
 *
 * Usage: node scripts/convert-hero-to-webp.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const HERO_DIR = path.join(__dirname, '../public/assets/images/onedrive/hero');
const QUALITY = 85; // WebP quality (80-90 is ideal for photos)

async function convertToWebP() {
  console.log('🖼️  Converting hero images to WebP...\n');

  const files = fs.readdirSync(HERO_DIR).filter(f => f.endsWith('.png'));

  let totalOriginal = 0;
  let totalWebP = 0;

  for (const file of files) {
    const inputPath = path.join(HERO_DIR, file);
    const outputPath = path.join(HERO_DIR, file.replace('.png', '.webp'));

    const originalStats = fs.statSync(inputPath);
    totalOriginal += originalStats.size;

    await sharp(inputPath)
      .webp({ quality: QUALITY, effort: 6 })
      .toFile(outputPath);

    const webpStats = fs.statSync(outputPath);
    totalWebP += webpStats.size;

    const savings = ((1 - webpStats.size / originalStats.size) * 100).toFixed(1);
    console.log(`  ✅ ${file}`);
    console.log(`     PNG: ${(originalStats.size / 1024).toFixed(0)} KB → WebP: ${(webpStats.size / 1024).toFixed(0)} KB (${savings}% smaller)`);
  }

  console.log('\n📊 Summary:');
  console.log(`   Total PNG:  ${(totalOriginal / 1024).toFixed(0)} KB`);
  console.log(`   Total WebP: ${(totalWebP / 1024).toFixed(0)} KB`);
  console.log(`   Savings:    ${((1 - totalWebP / totalOriginal) * 100).toFixed(1)}%`);
  console.log('\n✨ Done! WebP images created alongside PNG originals.');
}

convertToWebP().catch(console.error);
