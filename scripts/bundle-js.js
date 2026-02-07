/**
 * JS Bundle Script — Reduces 6 deferred script requests to 2
 *
 * Bundles:
 *   core.js — Essential scripts (preferences, analytics, main logic)
 *   ui.js   — UI enhancements (navigation, subsection menu, micro-cues)
 */

import { readFile, writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

const SCRIPTS_DIR = 'public/scripts';
const OUT_DIR = 'public/scripts/bundles';

const BUNDLES = {
  'core.js': [
    'preferences.js',
    'analytics.js',
    'main-v2.js',
  ],
  'ui.js': [
    'navigation-v2.js',
    'subsection-menu.js',
    'micro-cues.js',
  ],
};

async function bundleJS() {
  console.log('\n📦 Bundling JS files...\n');

  await mkdir(OUT_DIR, { recursive: true });

  let totalFiles = 0;
  let totalSize = 0;

  for (const [bundleName, files] of Object.entries(BUNDLES)) {
    const parts = [];

    for (const file of files) {
      try {
        const content = await readFile(join(SCRIPTS_DIR, file), 'utf8');
        // Wrap each file in an IIFE to prevent scope leaks
        parts.push(`/* === ${file} === */\n(function(){\n${content}\n})();`);
        totalFiles++;
      } catch (err) {
        console.warn(`  ⚠ Skipping ${file}: ${err.message}`);
      }
    }

    const bundled = parts.join('\n\n');
    const outPath = join(OUT_DIR, bundleName);
    await writeFile(outPath, bundled);

    const sizeKB = (Buffer.byteLength(bundled, 'utf8') / 1024).toFixed(1);
    totalSize += Buffer.byteLength(bundled, 'utf8');
    console.log(`  ✓ ${bundleName} (${files.length} files, ${sizeKB} KB)`);
  }

  const totalKB = (totalSize / 1024).toFixed(1);
  console.log(`\n✅ Created ${Object.keys(BUNDLES).length} bundles from ${totalFiles} files (${totalKB} KB total)\n`);
}

bundleJS().catch(console.error);
