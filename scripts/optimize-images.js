/**
 * Image Optimization Script
 *
 * Converts PNG/JPG images to optimized WebP format using Sharp.
 * Creates WebP versions alongside originals for progressive adoption.
 *
 * Focus areas:
 * 1. Logo images (displayed at 72-160px, served at 200px max)
 * 2. Hero images that don't have WebP versions yet
 * 3. Any image > 100KB without a WebP sibling
 */

import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';

const IMAGE_DIR = 'public/assets/images';

// Logo images — resize to max 200px wide (displayed at 72-160px)
const LOGO_CONFIG = {
  dir: 'public/assets/images/logos',
  maxWidth: 200,
  quality: 85,
};

// General images — keep original dimensions but convert to WebP
const GENERAL_CONFIG = {
  quality: 80,
  minSizeKB: 50, // Only optimize images larger than 50KB
};

async function getImageFiles(dir) {
  const files = [];
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = join(dir, entry.name);
      if (entry.isDirectory()) {
        files.push(...await getImageFiles(fullPath));
      } else if (/\.(png|jpg|jpeg)$/i.test(entry.name)) {
        files.push(fullPath);
      }
    }
  } catch (_err) { /* skip */ }
  return files;
}

async function hasWebP(filePath) {
  const webpPath = filePath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  try {
    await stat(webpPath);
    return true;
  } catch { return false; }
}

async function optimizeLogos() {
  console.log('\n🖼️  Optimizing logo images...\n');
  const files = await getImageFiles(LOGO_CONFIG.dir);
  let saved = 0;

  for (const file of files) {
    const ext = extname(file).toLowerCase();
    if (ext === '.webp') continue;

    const webpPath = file.replace(/\.(png|jpg|jpeg)$/i, '.webp');
    const originalStat = await stat(file);
    const originalKB = (originalStat.size / 1024).toFixed(1);

    try {
      await sharp(file)
        .resize({ width: LOGO_CONFIG.maxWidth, withoutEnlargement: true })
        .webp({ quality: LOGO_CONFIG.quality })
        .toFile(webpPath);

      const newStat = await stat(webpPath);
      const newKB = (newStat.size / 1024).toFixed(1);
      const savings = ((1 - newStat.size / originalStat.size) * 100).toFixed(0);
      console.log(`  ✓ ${basename(file)} → .webp (${originalKB} KB → ${newKB} KB, ${savings}% smaller)`);
      saved += originalStat.size - newStat.size;
    } catch (err) {
      console.error(`  ✗ ${basename(file)}: ${err.message}`);
    }
  }

  return saved;
}

async function optimizeGeneral() {
  console.log('\n🖼️  Optimizing large images without WebP versions...\n');
  const files = await getImageFiles(IMAGE_DIR);
  let saved = 0;
  let count = 0;

  for (const file of files) {
    const ext = extname(file).toLowerCase();
    if (ext === '.webp') continue;

    // Skip logos (handled separately)
    if (file.includes('/logos/')) continue;

    // Skip small files
    const fileStat = await stat(file);
    if (fileStat.size < GENERAL_CONFIG.minSizeKB * 1024) continue;

    // Skip if WebP already exists
    if (await hasWebP(file)) continue;

    const webpPath = file.replace(/\.(png|jpg|jpeg)$/i, '.webp');
    const originalKB = (fileStat.size / 1024).toFixed(1);

    try {
      await sharp(file)
        .webp({ quality: GENERAL_CONFIG.quality })
        .toFile(webpPath);

      const newStat = await stat(webpPath);
      const newKB = (newStat.size / 1024).toFixed(1);
      const savings = ((1 - newStat.size / fileStat.size) * 100).toFixed(0);
      console.log(`  ✓ ${file.replace(IMAGE_DIR + '/', '')} → .webp (${originalKB} KB → ${newKB} KB, ${savings}% smaller)`);
      saved += fileStat.size - newStat.size;
      count++;
    } catch (err) {
      console.error(`  ✗ ${basename(file)}: ${err.message}`);
    }
  }

  console.log(`  Converted ${count} images`);
  return saved;
}

async function main() {
  console.log('📸 Image Optimization\n');

  const logoSaved = await optimizeLogos();
  const generalSaved = await optimizeGeneral();

  const totalSavedMB = ((logoSaved + generalSaved) / (1024 * 1024)).toFixed(1);
  console.log(`\n✅ Total savings: ${totalSavedMB} MB\n`);
  console.log('Next steps:');
  console.log('  1. Update components to use .webp versions');
  console.log('  2. Use <picture> with PNG fallback for older browsers');
  console.log('  3. Delete original PNGs once verified\n');
}

main().catch(console.error);
