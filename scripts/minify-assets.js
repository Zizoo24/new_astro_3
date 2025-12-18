/**
 * Post-build script to minify CSS and JS files in dist/
 *
 * This handles files from public/ that bypass Vite's bundler
 */

import { readdir, readFile, writeFile, stat } from 'fs/promises';
import { join, extname } from 'path';
import { minify as terserMinify } from 'terser';
import postcss from 'postcss';
import cssnano from 'cssnano';

const DIST_DIR = 'dist';
const EXTENSIONS = {
  css: ['.css'],
  js: ['.js']
};

// Directories to process
const ASSET_DIRS = ['styles', 'scripts'];

async function getFiles(dir, extension) {
  const files = [];

  try {
    const entries = await readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = join(dir, entry.name);

      if (entry.isDirectory()) {
        files.push(...await getFiles(fullPath, extension));
      } else if (extension.includes(extname(entry.name).toLowerCase())) {
        files.push(fullPath);
      }
    }
  } catch (err) {
    // Directory doesn't exist, skip
  }

  return files;
}

async function minifyCSS(filePath) {
  try {
    const css = await readFile(filePath, 'utf8');
    const result = await postcss([cssnano({ preset: 'default' })]).process(css, { from: filePath });
    await writeFile(filePath, result.css);

    const originalSize = Buffer.byteLength(css, 'utf8');
    const minifiedSize = Buffer.byteLength(result.css, 'utf8');
    const savings = ((1 - minifiedSize / originalSize) * 100).toFixed(1);

    console.log(`  ✓ ${filePath.replace(DIST_DIR + '/', '')} (${savings}% smaller)`);
    return { original: originalSize, minified: minifiedSize };
  } catch (err) {
    console.error(`  ✗ ${filePath}: ${err.message}`);
    return { original: 0, minified: 0 };
  }
}

async function minifyJS(filePath) {
  try {
    const js = await readFile(filePath, 'utf8');
    const result = await terserMinify(js, {
      compress: {
        drop_console: false, // Keep console.log for debugging if needed
        drop_debugger: true
      },
      mangle: true,
      format: {
        comments: false
      }
    });

    if (result.code) {
      await writeFile(filePath, result.code);

      const originalSize = Buffer.byteLength(js, 'utf8');
      const minifiedSize = Buffer.byteLength(result.code, 'utf8');
      const savings = ((1 - minifiedSize / originalSize) * 100).toFixed(1);

      console.log(`  ✓ ${filePath.replace(DIST_DIR + '/', '')} (${savings}% smaller)`);
      return { original: originalSize, minified: minifiedSize };
    }
    return { original: 0, minified: 0 };
  } catch (err) {
    console.error(`  ✗ ${filePath}: ${err.message}`);
    return { original: 0, minified: 0 };
  }
}

async function main() {
  console.log('\n🗜️  Minifying static assets...\n');

  let totalOriginal = 0;
  let totalMinified = 0;
  let fileCount = 0;

  // Process CSS files
  console.log('CSS files:');
  for (const dir of ASSET_DIRS) {
    const cssFiles = await getFiles(join(DIST_DIR, dir), EXTENSIONS.css);
    for (const file of cssFiles) {
      const result = await minifyCSS(file);
      totalOriginal += result.original;
      totalMinified += result.minified;
      fileCount++;
    }
  }

  // Also check root styles directory
  const rootCssFiles = await getFiles(join(DIST_DIR, 'styles'), EXTENSIONS.css);

  console.log('\nJavaScript files:');
  for (const dir of ASSET_DIRS) {
    const jsFiles = await getFiles(join(DIST_DIR, dir), EXTENSIONS.js);
    for (const file of jsFiles) {
      const result = await minifyJS(file);
      totalOriginal += result.original;
      totalMinified += result.minified;
      fileCount++;
    }
  }

  // Summary
  if (fileCount > 0) {
    const totalSavings = ((1 - totalMinified / totalOriginal) * 100).toFixed(1);
    const savedKB = ((totalOriginal - totalMinified) / 1024).toFixed(1);
    console.log(`\n✅ Minified ${fileCount} files`);
    console.log(`   Saved ${savedKB} KB (${totalSavings}% reduction)\n`);
  } else {
    console.log('\n⚠️  No CSS/JS files found to minify\n');
  }
}

main().catch(console.error);
