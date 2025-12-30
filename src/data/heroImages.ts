/**
 * Master Hero Image Registry
 * Single source of truth for hero image assignments
 *
 * Created: December 30, 2025
 *
 * Usage:
 *   In any page using ServiceLayout:
 *   heroImage: "city-cyber"  // Use key from HERO_IMAGES
 *
 *   ServiceLayout will auto-resolve to full path with WebP support
 */

export interface HeroImage {
  path: string;
  pathWebp: string;
  alt: string;
  category: 'legal' | 'personal' | 'specialized' | 'location' | 'resource' | 'general';
  keywords: string[];
  sizeKb: number; // Target optimized size
}

/**
 * Primary Hero Image Registry
 * All hero images available for use across the site
 */
export const HERO_IMAGES: Record<string, HeroImage> = {
  'city-cyber': {
    path: '/assets/images/onedrive/hero/city-cyber.png',
    pathWebp: '/assets/images/onedrive/hero/city-cyber.webp',
    alt: 'Modern Dubai cityscape with digital overlay representing professional translation services',
    category: 'location',
    keywords: ['dubai', 'corporate', 'business', 'city', 'locations', 'golden-visa', 'financial', 'hospitality'],
    sizeKb: 240
  },
  'medical-cyber': {
    path: '/assets/images/onedrive/hero/medical-cyber.png',
    pathWebp: '/assets/images/onedrive/hero/medical-cyber.webp',
    alt: 'Medical professional with digital interface representing healthcare translation services',
    category: 'specialized',
    keywords: ['medical', 'healthcare', 'dha', 'health', 'dataflow'],
    sizeKb: 230
  },
  'office-team': {
    path: '/assets/images/onedrive/hero/office-team.png',
    pathWebp: '/assets/images/onedrive/hero/office-team.webp',
    alt: 'Professional team working on document translation in modern office environment',
    category: 'general',
    keywords: ['about', 'team', 'personal', 'resources', 'contact', 'certificate', 'attestation', 'vital-records'],
    sizeKb: 150
  },
  'vis-translation': {
    path: '/assets/images/onedrive/hero/vis-translation.png',
    pathWebp: '/assets/images/onedrive/hero/vis-translation.webp',
    alt: 'Legal documents and scales of justice representing certified legal translation',
    category: 'legal',
    keywords: ['legal', 'court', 'moj', 'certified', 'contracts', 'litigation', 'corporate', 'wills'],
    sizeKb: 250
  },
  'technical-translation': {
    path: '/assets/images/onedrive/hero/technical-translation.png',
    pathWebp: '/assets/images/onedrive/hero/technical-translation.webp',
    alt: 'Engineering blueprints and technical specifications for specialized translation',
    category: 'specialized',
    keywords: ['technical', 'engineering', 'specifications', 'industries'],
    sizeKb: 280
  },
  'cyber-smith': {
    path: '/assets/images/onedrive/hero/cyber-smith.png',
    pathWebp: '/assets/images/onedrive/hero/cyber-smith.webp',
    alt: 'Digital academic environment representing educational document translation',
    category: 'specialized',
    keywords: ['academic', 'education', 'university', 'degrees', 'transcripts', 'digital', 'blog'],
    sizeKb: 200
  },
  'ot-man': {
    path: '/assets/images/onedrive/hero/ot-man.png',
    pathWebp: '/assets/images/onedrive/hero/ot-man.webp',
    alt: 'Professional translator working with multilingual documents',
    category: 'general',
    keywords: ['translator', 'professional', 'bio', 'credentials'],
    sizeKb: 180
  },
  // Location-specific images
  'palm-jumeirah': {
    path: '/assets/images/onedrive/locations/palm-jumeirah.png',
    pathWebp: '/assets/images/onedrive/locations/palm-jumeirah.webp',
    alt: 'Palm Jumeirah aerial view for Dubai translation services',
    category: 'location',
    keywords: ['palm', 'jumeirah'],
    sizeKb: 200
  },
  'sharjah': {
    path: '/assets/images/onedrive/locations/sharjah.png',
    pathWebp: '/assets/images/onedrive/locations/sharjah.webp',
    alt: 'Sharjah cityscape for local translation services',
    category: 'location',
    keywords: ['sharjah', 'tenancy'],
    sizeKb: 200
  },
  // Attestation-specific image
  'authenticated': {
    path: '/assets/images/resources/authenticated-translation-hero.jpg',
    pathWebp: '/assets/images/resources/authenticated-translation-hero.webp',
    alt: 'Authenticated and attested documents with official stamps',
    category: 'resource',
    keywords: ['attestation', 'authenticated', 'mofa', 'embassy', 'apostille'],
    sizeKb: 250
  }
};

/**
 * Page-specific hero image mappings
 * Explicit overrides for specific page URLs
 */
export const PAGE_HERO_MAP: Record<string, string> = {
  // ===== Homepage =====
  '/': 'city-cyber',

  // ===== Legal Silo =====
  '/legal-translation-dubai/': 'vis-translation',
  '/legal/': 'vis-translation',
  '/legal/contracts/': 'vis-translation',
  '/legal/contracts/nda/': 'vis-translation',
  '/legal/contracts/spa/': 'vis-translation',
  '/legal/contracts/mou/': 'vis-translation',
  '/legal/contracts/lease/': 'vis-translation',
  '/legal/corporate/': 'vis-translation',
  '/legal/corporate/poa/': 'vis-translation',
  '/legal/corporate/moa/': 'vis-translation',
  '/legal/corporate/resolution/': 'vis-translation',
  '/legal/corporate/license/': 'vis-translation',
  '/legal/litigation/': 'vis-translation',
  '/legal/litigation/verdict/': 'vis-translation',
  '/legal/litigation/arbitration/': 'vis-translation',
  '/legal/wills/': 'vis-translation',

  // ===== Personal Silo =====
  '/personal-documents/': 'office-team',
  '/personal/': 'office-team',
  '/personal/vital-records/': 'office-team',
  '/personal/vital-records/birth/': 'office-team',
  '/personal/vital-records/marriage/': 'office-team',
  '/personal/vital-records/divorce/': 'office-team',
  '/personal/vital-records/death/': 'office-team',
  '/personal/immigration/': 'city-cyber',
  '/personal/immigration/pcc/': 'city-cyber',
  '/personal/immigration/bank/': 'city-cyber',
  '/personal/immigration/license/': 'city-cyber',
  '/personal/academic/': 'cyber-smith',
  '/personal/academic/degree/': 'cyber-smith',
  '/personal/academic/transcripts/': 'cyber-smith',

  // ===== Specialized Silo =====
  '/specialized-translation/': 'technical-translation',
  '/specialized/medical/': 'medical-cyber',
  '/specialized/medical/dha-dataflow/': 'medical-cyber',
  '/specialized/technical/': 'technical-translation',
  '/specialized/financial/': 'city-cyber',
  '/specialized/hospitality/': 'city-cyber',
  '/specialized/digital/': 'cyber-smith',

  // ===== Services Silo =====
  '/services/': 'city-cyber',
  '/services/legal-translation/': 'vis-translation',
  '/services/corporate-translation/': 'technical-translation',
  '/services/certificate-translation/': 'office-team',
  '/services/golden-visa-translation/': 'city-cyber',
  '/services/title-deed-translation-dubai/': 'city-cyber',

  // ===== Attestation Pages =====
  '/services/attestation/': 'authenticated',
  '/services/attestation/apostille/': 'authenticated',
  '/services/attestation/embassy/': 'authenticated',
  '/services/attestation/mofa/': 'authenticated',
  '/services/attestation/india/': 'authenticated',
  '/services/attestation/pakistan/': 'authenticated',
  '/services/attestation/us/': 'authenticated',
  '/services/attestation/uk/': 'authenticated',
  '/services/attestation/canada/': 'authenticated',
  '/services/attestation/philippines/': 'authenticated',

  // ===== Location Silo =====
  '/locations/': 'city-cyber',
  '/locations/dubai/': 'city-cyber',
  '/locations/dubai/difc/': 'city-cyber',
  '/locations/dubai/business-bay/': 'city-cyber',
  '/locations/dubai/jlt/': 'city-cyber',
  '/locations/dubai/marina/': 'city-cyber',
  '/locations/dubai/downtown/': 'city-cyber',
  '/locations/dubai/palm-jumeirah/': 'palm-jumeirah',
  '/locations/abu-dhabi/': 'city-cyber',
  '/locations/sharjah/': 'sharjah',
  '/locations/sharjah/tenancy-translation/': 'sharjah',

  // ===== Resources Silo =====
  '/resources/': 'office-team',
  '/resources/faq/': 'office-team',
  '/resources/turnaround-times/': 'office-team',
  '/resources/authenticated-translation/': 'authenticated',
  '/resources/moj-vs-certified/': 'vis-translation',
  '/resources/attestation-guide/': 'authenticated',
  '/resources/document-checklist/': 'office-team',
  '/resources/pricing-guide/': 'office-team',
  '/resources/golden-visa-checklist/': 'city-cyber',
  '/resources/us-citizens-dubai-guide/': 'city-cyber',
  '/resources/case-studies/': 'office-team',
  '/resources/case-studies/urgent-family-visa/': 'office-team',
  '/resources/case-studies/rejected-document-rescue/': 'office-team',
  '/resources/case-studies/dha-dataflow-deadline/': 'medical-cyber',

  // ===== Industries Silo =====
  '/industries/': 'technical-translation',
  '/industries/legal/': 'vis-translation',
  '/industries/healthcare/': 'medical-cyber',
  '/industries/e-commerce/': 'cyber-smith',
  '/industries/real-estate/': 'city-cyber',

  // ===== About/Contact =====
  '/about/': 'office-team',
  '/about/translator/': 'ot-man',
  '/about/credentials/': 'office-team',
  '/about/reviews/': 'office-team',
  '/contact/': 'office-team',

  // ===== Blog =====
  '/blog/': 'cyber-smith',

  // ===== Language Pages =====
  '/bengali/': 'city-cyber',
  '/chinese/': 'city-cyber',
  '/farsi/': 'city-cyber',
  '/french/': 'city-cyber',
  '/hindi/': 'city-cyber',
  '/malayalam/': 'city-cyber',
  '/russian/': 'city-cyber',
  '/tagalog/': 'city-cyber',
  '/urdu/': 'city-cyber',
  '/عربي/': 'city-cyber'
};

/**
 * Get hero image data by key
 */
export function getHeroImageByKey(key: string): HeroImage | null {
  return HERO_IMAGES[key] || null;
}

/**
 * Get hero image path for a page URL
 * Returns the full image path, preferring WebP if available
 */
export function getHeroImagePath(pathname: string, preferWebp = true): string | null {
  const key = PAGE_HERO_MAP[pathname];
  if (!key) return null;

  const image = HERO_IMAGES[key];
  if (!image) return null;

  return preferWebp ? image.pathWebp : image.path;
}

/**
 * Resolve hero image from key or path
 * Handles both key-based references and direct paths
 */
export function resolveHeroImage(heroImageInput: string): {
  path: string;
  pathWebp: string;
  alt: string;
} | null {
  // If it starts with / or http, it's a direct path
  if (heroImageInput.startsWith('/') || heroImageInput.startsWith('http')) {
    return {
      path: heroImageInput,
      pathWebp: heroImageInput.replace(/\.(jpg|jpeg|png)$/i, '.webp'),
      alt: 'Hero image'
    };
  }

  // Otherwise, treat as registry key
  const image = HERO_IMAGES[heroImageInput];
  if (!image) return null;

  return {
    path: image.path,
    pathWebp: image.pathWebp,
    alt: image.alt
  };
}

/**
 * Get hero image by category and keywords match
 * Useful for auto-assignment based on page content
 */
export function getHeroImageByMatch(
  category: HeroImage['category'],
  keywords: string[] = []
): HeroImage | null {
  const normalizedKeywords = keywords.map(kw => kw.toLowerCase());

  // First try exact category + keyword match
  for (const [, image] of Object.entries(HERO_IMAGES)) {
    if (image.category === category) {
      const hasKeywordMatch = normalizedKeywords.some(kw =>
        image.keywords.includes(kw)
      );
      if (hasKeywordMatch) {
        return image;
      }
    }
  }

  // Fallback to category match only
  for (const [, image] of Object.entries(HERO_IMAGES)) {
    if (image.category === category) {
      return image;
    }
  }

  return null;
}
