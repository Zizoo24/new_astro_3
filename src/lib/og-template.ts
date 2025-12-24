/**
 * OG Image Template Configuration
 * 
 * For static sites, OG images are best generated at build time.
 * This module provides the template configuration and a generator script.
 * 
 * Options for implementation:
 * 1. Manual: Use Figma/Canva with this config
 * 2. Automated: Use the companion generate-og-images.js script
 * 3. On-demand: Switch to hybrid mode and use @vercel/og
 */

import { siteConfig } from '../config/site';

export interface OGImageConfig {
  title: string;
  subtitle?: string;
  type?: 'service' | 'resource' | 'location' | 'blog' | 'default';
}

// Brand colors from tokens.css
export const ogBrandColors = {
  navy: '#0E2B48',
  navyDark: '#0a1628',
  coral: '#FF1654',
  gold: '#c9a227',
  white: '#ffffff',
  lightGray: '#f8f9fa',
} as const;

// Typography settings
export const ogTypography = {
  fontFamily: 'Montserrat, sans-serif',
  titleSize: '64px',
  subtitleSize: '32px',
  footerSize: '24px',
} as const;

// Image dimensions (1200x630 is the recommended OG image size)
export const ogDimensions = {
  width: 1200,
  height: 630,
} as const;

/**
 * Generate HTML template for OG image
 * This can be rendered to PNG using Puppeteer or similar
 */
export function generateOGImageHTML(config: OGImageConfig): string {
  const { title, subtitle, type = 'default' } = config;
  
  // Type-specific accent colors
  const accentColors: Record<string, string> = {
    service: ogBrandColors.coral,
    resource: ogBrandColors.gold,
    location: ogBrandColors.coral,
    blog: ogBrandColors.gold,
    default: ogBrandColors.coral,
  };
  
  const accent = accentColors[type];
  
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&display=swap" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      width: ${ogDimensions.width}px;
      height: ${ogDimensions.height}px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 60px;
      background: linear-gradient(135deg, ${ogBrandColors.navy} 0%, ${ogBrandColors.navyDark} 100%);
      font-family: ${ogTypography.fontFamily};
      color: ${ogBrandColors.white};
    }
    
    .badge {
      display: inline-block;
      background: ${accent};
      color: ${ogBrandColors.white};
      padding: 8px 24px;
      border-radius: 4px;
      font-size: 18px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 24px;
    }
    
    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    
    .title {
      font-size: ${ogTypography.titleSize};
      font-weight: 800;
      line-height: 1.1;
      text-transform: uppercase;
      letter-spacing: 0.02em;
      margin-bottom: 16px;
      max-width: 900px;
    }
    
    .subtitle {
      font-size: ${ogTypography.subtitleSize};
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
    
    .logo {
      font-size: ${ogTypography.footerSize};
      font-weight: 700;
    }
    
    .tagline {
      font-size: 18px;
      color: rgba(255,255,255,0.7);
    }
    
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
  <div class="badge">${type === 'default' ? 'Legal Translation' : type}</div>
  
  <div class="content">
    <h1 class="title">${escapeHtml(title)}</h1>
    ${subtitle ? `<p class="subtitle">${escapeHtml(subtitle)}</p>` : ''}
  </div>
  
  <div class="footer">
    <div>
      <div class="logo">${siteConfig.name}</div>
      <div class="tagline">MOJ-Certified Legal Translation Dubai</div>
    </div>
    <div class="moj-badge">MOJ License #701</div>
  </div>
</body>
</html>
  `.trim();
}

/**
 * Helper to escape HTML entities
 */
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Get OG image path for a given page
 * Returns the expected path where the OG image should be stored
 */
export function getOGImagePath(slug: string): string {
  // Normalize slug
  const normalizedSlug = slug
    .replace(/^\//, '')
    .replace(/\/$/, '')
    .replace(/\//g, '-') || 'home';
  
  return `/assets/images/og/${normalizedSlug}.png`;
}

/**
 * Page configurations for OG image generation
 * Add entries here to generate OG images for specific pages
 */
export const ogImageConfigs: Record<string, OGImageConfig> = {
  '/': {
    title: 'Legal Translation Services Dubai',
    subtitle: 'MOJ-Certified • Court-Accepted',
    type: 'default',
  },
  '/services/legal-translation/': {
    title: 'MOJ Legal Translation',
    subtitle: 'Dubai Courts & Government',
    type: 'service',
  },
  '/services/golden-visa-translation/': {
    title: 'Golden Visa Translation',
    subtitle: 'Complete Document Package',
    type: 'service',
  },
  '/personal/vital-records/birth/': {
    title: 'Birth Certificate Translation',
    subtitle: 'MOJ-Certified for UAE',
    type: 'service',
  },
  '/resources/pricing-guide/': {
    title: 'Translation Pricing Guide',
    subtitle: 'Transparent Costs Explained',
    type: 'resource',
  },
  '/resources/faq/': {
    title: 'Frequently Asked Questions',
    subtitle: 'Legal Translation UAE',
    type: 'resource',
  },
  '/locations/dubai/': {
    title: 'Legal Translation Dubai',
    subtitle: 'All Areas Covered',
    type: 'location',
  },
  // Add more pages as needed
};
