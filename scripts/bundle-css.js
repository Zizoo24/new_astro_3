/**
 * CSS Bundle Script — Reduces ~26 HTTP requests to 4-5
 *
 * Concatenates CSS files from public/styles/ into optimized bundles.
 * Runs as a prebuild step so PurgeCSS + minification still apply.
 *
 * Bundles:
 *   foundation.css   — Core styles (async-loaded on all pages)
 *   desktop-nav.css  — Desktop navigation (media >= 992px)
 *   components.css   — UI components, utilities, polish (async-loaded)
 *   arabic.css       — RTL overrides (Arabic pages only, async-loaded)
 */

import { readFile, writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

const STYLES_DIR = 'public/styles';
const OUT_DIR = 'public/styles/bundles';

// Bundle definitions — order matters for cascade
const BUNDLES = {
  'foundation.css': [
    'base-architecture.css',
    'porto-desktop.css',
    'services-enhanced.css',
    'document-pages.css',
    'text-breaking.css',
    'hero-unified.css',
  ],
  'desktop-nav.css': [
    'subsection-menu.css',
    'megamenu.css',
    'porto-dropdown-onlinetranslation.css',
    'navigation-glassmorphism.css',
    'desktop-macos.css',
  ],
  'components.css': [
    'sticky-mobile.css',
    'trust-bar.css',
    'dark-section-scoping.css',
    'dark-mode-tokenized.css',
    'en-ui-fixes.css',
    'responsive-layouts.css',
    'footer-redesign.css',
    'faq-accordion.css',
    'micro-cues.css',
    'contrast-fixes.css',
  ],
  'arabic.css': [
    'rtl.css',
    'ar-ui-fixes.css',
  ],
};

async function bundleCSS() {
  console.log('\n📦 Bundling CSS files...\n');

  await mkdir(OUT_DIR, { recursive: true });

  let totalFiles = 0;
  let totalSize = 0;

  for (const [bundleName, files] of Object.entries(BUNDLES)) {
    const parts = [];

    for (const file of files) {
      try {
        const content = await readFile(join(STYLES_DIR, file), 'utf8');
        parts.push(`/* === ${file} === */\n${content}`);
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

bundleCSS().catch(console.error);
