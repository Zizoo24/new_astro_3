/**
 * Site Configuration
 * Centralized configuration for SEO, branding, and site-wide settings
 * 
 * This replaces WordPress/Rank Math's database-driven settings with
 * type-safe, version-controlled configuration.
 */

export const siteConfig = {
  // Core Identity
  name: 'OnlineTranslation.ae',
  tagline: 'MOJ-Certified Legal Translation Services in Dubai',
  url: 'https://onlinetranslation.ae',
  
  // SEO Defaults
  seo: {
    titleSeparator: ' | ',
    defaultTitle: 'MOJ-Certified Legal Translation Dubai',
    defaultDescription: 'Professional MOJ-certified legal translation services in Dubai. Court-accepted documents, 60-minute turnaround, WhatsApp-first service.',
    defaultOgImage: '/assets/images/og-image.jpg',
    
    // Title template: use %title% as placeholder
    // Result: "Birth Certificate Translation | OnlineTranslation.ae"
    titleTemplate: '%title% | OnlineTranslation.ae',
    
    // Character limits (Google's recommendations)
    limits: {
      titleMax: 60,
      descriptionMax: 155,
      titleMin: 30,
      descriptionMin: 70,
    },
  },
  
  // Business Information (for Schema.org)
  business: {
    legalName: 'OnlineTranslation.ae',
    type: 'LocalBusiness',
    phone: '+971508620217',
    email: 'info@onlinetranslation.ae',
    whatsapp: '971508620217',
    address: {
      locality: 'Dubai',
      country: 'AE',
      countryName: 'United Arab Emirates',
    },
    geo: {
      latitude: 25.1124,
      longitude: 55.1880,
    },
    openingHours: 'Mo-Su 08:00-22:00',
    priceRange: '$$',
  },
  
  // MOJ Translator Credentials
  translator: {
    license: '#701',
    nameArabic: 'خالد محمد عبدالوهاب العدل',
    nameEnglish: 'Khaled Mohamed Abdulwahab Al-Adl',
    languages: ['Arabic', 'English'],
    validUntil: '2026-10-15',
    verifyHotline: '800 333333',
    linkedin: 'https://www.linkedin.com/in/arabiclinguistkh',
  },

  // MOJ Partner Company (executes translations)
  partner: {
    name: 'Arkan Legal Translation',
    website: 'https://arkanlegaltranslation.ae/learn-abt-arkan/',
    phone: '+971507091633',
    email: 'info@arkanlegaltranslation.ae',
    locations: [
      'The One Tower, Barsha Heights, Dubai',
      'Tower Plaza Hotel, Sheikh Zayed Road, Dubai'
    ],
  },
  
  // Social Media
  social: {
    twitter: '', // Add if available
    facebook: '', // Add if available
    linkedin: '', // Add if available
  },
  
  // Localization
  locales: {
    default: 'en-AE',
    supported: ['en-AE', 'ar'],
  },
  
  // Service Areas (for LocalBusiness schema)
  serviceAreas: [
    { type: 'City', name: 'Dubai' },
    { type: 'City', name: 'Abu Dhabi' },
    { type: 'City', name: 'Sharjah' },
    { type: 'Country', name: 'UAE' },
  ],
  
  // Analytics & Tracking
  analytics: {
    gtmId: 'GTM-N7L2H37W',
    chatbaseId: 'XHyFbKkbLOseA1xEcMAm6',
  },
} as const;

/**
 * Helper function to generate page title with template
 */
export function generateTitle(pageTitle: string): string {
  if (!pageTitle) return siteConfig.seo.defaultTitle;
  
  // If the page title already contains the site name, use as-is
  if (pageTitle.includes(siteConfig.name)) {
    return pageTitle;
  }
  
  return siteConfig.seo.titleTemplate.replace('%title%', pageTitle);
}

/**
 * Helper function to validate title length
 * Returns warning message if title exceeds recommended length
 */
export function validateTitle(title: string): string | null {
  const { titleMax, titleMin } = siteConfig.seo.limits;
  
  if (title.length > titleMax) {
    return `Title is ${title.length} chars (max ${titleMax}). May be truncated in search results.`;
  }
  if (title.length < titleMin) {
    return `Title is ${title.length} chars (min ${titleMin}). Consider adding more descriptive text.`;
  }
  return null;
}

/**
 * Helper function to validate description length
 */
export function validateDescription(description: string): string | null {
  const { descriptionMax, descriptionMin } = siteConfig.seo.limits;
  
  if (description.length > descriptionMax) {
    return `Description is ${description.length} chars (max ${descriptionMax}). May be truncated in search results.`;
  }
  if (description.length < descriptionMin) {
    return `Description is ${description.length} chars (min ${descriptionMin}). Consider adding more detail.`;
  }
  return null;
}

/**
 * Type exports for TypeScript support
 */
export type SiteConfig = typeof siteConfig;
