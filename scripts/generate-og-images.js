/**
 * OG Image Generator Script
 * 
 * Generates Open Graph images for key pages using Puppeteer.
 * Run with: node scripts/generate-og-images.js
 * 
 * Prerequisites:
 * npm install --save-dev puppeteer
 * 
 * This script:
 * 1. Reads page configurations from src/lib/og-template.ts
 * 2. Renders each template to HTML
 * 3. Screenshots the HTML to PNG
 * 4. Saves to public/assets/images/og/
 */

import puppeteer from 'puppeteer';
import { mkdir } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = join(__dirname, '..');
const OUTPUT_DIR = join(ROOT_DIR, 'public', 'assets', 'images', 'og');

// Brand colors
const COLORS = {
  navy: '#0E2B48',
  navyDark: '#0a1628',
  coral: '#FF1654',
  gold: '#c9a227',
  white: '#ffffff',
};

// Page configurations
const PAGES = [
  {
    slug: 'home',
    title: 'Legal Translation Services Dubai',
    subtitle: 'MOJ-Certified • Court-Accepted',
    type: 'default',
  },
  {
    slug: 'services-legal-translation',
    title: 'MOJ Legal Translation',
    subtitle: 'Dubai Courts & Government',
    type: 'service',
  },
  {
    slug: 'services-golden-visa-translation',
    title: 'Golden Visa Translation',
    subtitle: 'Complete Document Package',
    type: 'service',
  },
  {
    slug: 'personal-vital-records-birth',
    title: 'Birth Certificate Translation',
    subtitle: 'MOJ-Certified for UAE',
    type: 'service',
  },
  {
    slug: 'personal-vital-records-marriage',
    title: 'Marriage Certificate Translation',
    subtitle: 'MOJ-Certified for UAE',
    type: 'service',
  },
  {
    slug: 'resources-pricing-guide',
    title: 'Translation Pricing Guide',
    subtitle: 'Transparent Costs Explained',
    type: 'resource',
  },
  {
    slug: 'resources-faq',
    title: 'Frequently Asked Questions',
    subtitle: 'Legal Translation UAE',
    type: 'resource',
  },
  {
    slug: 'locations-dubai',
    title: 'Legal Translation Dubai',
    subtitle: 'All Areas Covered',
    type: 'location',
  },
  {
    slug: 'services-attestation',
    title: 'Document Attestation',
    subtitle: 'MOFA & Embassy Services',
    type: 'service',
  },
  {
    slug: 'legal-corporate-poa',
    title: 'Power of Attorney Translation',
    subtitle: 'MOJ-Certified Legal Document',
    type: 'service',
  },
];

/**
 * Generate HTML for OG image
 */
function generateHTML(config) {
  const { title, subtitle, type = 'default' } = config;
  
  const accentColors = {
    service: COLORS.coral,
    resource: COLORS.gold,
    location: COLORS.coral,
    blog: COLORS.gold,
    default: COLORS.coral,
  };
  
  const accent = accentColors[type] || COLORS.coral;
  const typeLabel = type === 'default' ? 'Legal Translation' : type.charAt(0).toUpperCase() + type.slice(1);
  
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    body {
      width: 1200px;
      height: 630px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 60px;
      background: linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.navyDark} 100%);
      font-family: 'Montserrat', sans-serif;
      color: ${COLORS.white};
    }
    
    .badge {
      display: inline-block;
      background: ${accent};
      color: ${COLORS.white};
      padding: 8px 24px;
      border-radius: 4px;
      font-size: 18px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
    
    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    
    .title {
      font-size: 64px;
      font-weight: 800;
      line-height: 1.1;
      text-transform: uppercase;
      letter-spacing: 0.02em;
      margin-bottom: 16px;
      max-width: 900px;
    }
    
    .subtitle {
      font-size: 32px;
      font-weight: 700;
      color: ${accent};
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    
    .footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 2px solid rgba(255,255,255,0.1);
      padding-top: 24px;
    }
    
    .logo { font-size: 24px; font-weight: 700; }
    .tagline { font-size: 18px; color: rgba(255,255,255,0.7); }
    .moj-badge {
      background: rgba(255,255,255,0.1);
      padding: 8px 16px;
      border-radius: 4px;
      font-size: 14px;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="badge">${typeLabel}</div>
  <div class="content">
    <h1 class="title">${title}</h1>
    ${subtitle ? `<p class="subtitle">${subtitle}</p>` : ''}
  </div>
  <div class="footer">
    <div>
      <div class="logo">OnlineTranslation.ae</div>
      <div class="tagline">MOJ-Certified Legal Translation Dubai</div>
    </div>
    <div class="moj-badge">MOJ License #701</div>
  </div>
</body>
</html>`;
}

/**
 * Main generator function
 */
async function generateOGImages() {
  console.log('🖼️  Starting OG Image Generation...\n');
  
  // Ensure output directory exists
  await mkdir(OUTPUT_DIR, { recursive: true });
  
  // Launch browser
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630 });
  
  let generated = 0;
  let failed = 0;
  
  for (const config of PAGES) {
    try {
      const html = generateHTML(config);
      const outputPath = join(OUTPUT_DIR, `${config.slug}.png`);
      
      // Load HTML
      await page.setContent(html, { waitUntil: 'networkidle0' });
      
      // Wait for fonts to load
      await page.evaluate(() => document.fonts.ready);
      
      // Take screenshot
      await page.screenshot({
        path: outputPath,
        type: 'png',
        clip: { x: 0, y: 0, width: 1200, height: 630 },
      });
      
      console.log(`  ✅ Generated: ${config.slug}.png`);
      generated++;
    } catch (error) {
      console.error(`  ❌ Failed: ${config.slug} - ${error.message}`);
      failed++;
    }
  }
  
  await browser.close();
  
  console.log(`\n📊 Results: ${generated} generated, ${failed} failed`);
  console.log(`📁 Output: ${OUTPUT_DIR}`);
}

// Run if called directly
generateOGImages().catch(console.error);
