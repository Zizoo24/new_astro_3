/**
 * heroImages.ts - Master Hero Image Registry
 * Single source of truth for all hero image assignments
 * 
 * USAGE:
 * In ServiceLayout pages: heroImage: "city-cyber"
 * The system will auto-resolve to the full WebP path with JPG fallback
 * 
 * CREATED: 2024-12-30
 * STATUS: Phase 0 - Foundation
 */

interface HeroImage {
  path: string;
  pathWebp?: string;
  pathJpgFallback?: string;
  alt: string;
  category: 'legal' | 'personal' | 'specialized' | 'location' | 'resource' | 'general';
  keywords: string[];
  optimized: boolean;
  webp: boolean;
  sizeKB: number;
}

/**
 * HERO IMAGE REGISTRY
 * All hero images with metadata for smart assignment
 *
 * SEO-OPTIMIZED NAMING CONVENTION:
 * - Primary keys use SEO-friendly terms
 * - "authenticated-translation" - for legal/certified translation pages
 * - "translation-of-degree-certificates" - for academic credential pages
 */
export const HERO_IMAGES: Record<string, HeroImage> = {
  // ===== SEO-OPTIMIZED PRIMARY KEYS =====

  // "authenticated translation" - Primary SEO term for legal translation
  'authenticated-translation': {
    path: '/assets/images/onedrive/hero/vis-translation.png',
    pathWebp: '/assets/images/onedrive/hero/vis-translation.webp',
    alt: 'Authenticated translation services in Dubai - MOJ certified legal document translation',
    category: 'legal',
    keywords: ['authenticated translation', 'certified translation', 'legal translation', 'moj certified', 'court documents'],
    optimized: true,
    webp: true,
    sizeKB: 265
  },

  // "translation of degree certificates" - Primary SEO term for academic translation
  'translation-of-degree-certificates': {
    path: '/assets/images/onedrive/hero/cyber-smith.png',
    pathWebp: '/assets/images/onedrive/hero/cyber-smith.webp',
    alt: 'Translation of degree certificates in Dubai - Academic credential translation for UAE employment',
    category: 'specialized',
    keywords: ['translation of degree certificates', 'academic translation', 'degree translation', 'university certificate', 'mohre'],
    optimized: true,
    webp: true,
    sizeKB: 261
  },

  // ===== ORIGINAL KEYS (aliases) =====

  'city-cyber': {
    path: '/assets/images/onedrive/hero/city-cyber.png',
    pathWebp: '/assets/images/onedrive/hero/city-cyber.webp',
    pathJpgFallback: '/assets/images/hero-city.jpg',
    alt: 'Modern Dubai cityscape with digital overlay representing professional translation services in the UAE',
    category: 'location',
    keywords: ['dubai', 'corporate', 'business', 'city', 'locations', 'uae'],
    optimized: true,
    webp: true,
    sizeKB: 212
  },
  
  'medical-cyber': {
    path: '/assets/images/onedrive/hero/medical-cyber.png',
    pathWebp: '/assets/images/onedrive/hero/medical-cyber.webp',
    alt: 'Medical professional with digital interface representing healthcare translation services for DHA and MOH',
    category: 'specialized',
    keywords: ['medical', 'healthcare', 'dha', 'health', 'doctor', 'hospital'],
    optimized: true,
    webp: true,
    sizeKB: 240
  },
  
  'office-team': {
    path: '/assets/images/onedrive/hero/office-team.png',
    pathWebp: '/assets/images/onedrive/hero/office-team.webp',
    alt: 'Professional translation team working on certified documents in modern Dubai office',
    category: 'general',
    keywords: ['about', 'team', 'personal', 'resources', 'office', 'professional'],
    optimized: true,
    webp: true,
    sizeKB: 101
  },
  
  'vis-translation': {
    path: '/assets/images/onedrive/hero/vis-translation.png',
    pathWebp: '/assets/images/onedrive/hero/vis-translation.webp',
    alt: 'Legal documents and scales of justice representing MOJ certified legal translation services',
    category: 'legal',
    keywords: ['legal', 'court', 'moj', 'certified', 'contract', 'litigation'],
    optimized: true,
    webp: true,
    sizeKB: 265
  },
  
  'technical-translation': {
    path: '/assets/images/onedrive/hero/technical-translation.png',
    pathWebp: '/assets/images/onedrive/hero/technical-translation.webp',
    alt: 'Engineering blueprints and technical specifications for specialized technical translation',
    category: 'specialized',
    keywords: ['technical', 'engineering', 'specifications', 'manual', 'industrial'],
    optimized: true,
    webp: true,
    sizeKB: 226
  },
  
  'cyber-smith': {
    path: '/assets/images/onedrive/hero/cyber-smith.png',
    pathWebp: '/assets/images/onedrive/hero/cyber-smith.webp',
    alt: 'Digital academic environment representing educational document and degree translation',
    category: 'specialized',
    keywords: ['academic', 'education', 'university', 'degrees', 'transcript'],
    optimized: true,
    webp: true,
    sizeKB: 261
  },
  
  'ot-man': {
    path: '/assets/images/onedrive/hero/ot-man.png',
    pathWebp: '/assets/images/onedrive/hero/ot-man.webp',
    alt: 'Professional certified translator working with multilingual legal documents',
    category: 'general',
    keywords: ['translator', 'professional', 'bio', 'expert', 'multilingual'],
    optimized: true,
    webp: true,
    sizeKB: 133
  },
  
  // Legacy/fallback images (already in use)
  'hero-city': {
    path: '/assets/images/hero-city.jpg',
    alt: 'Dubai skyline representing translation services across the UAE',
    category: 'location',
    keywords: ['dubai', 'city', 'skyline', 'uae'],
    optimized: true,
    webp: false,
    sizeKB: 245
  },
  
  'hero-team': {
    path: '/assets/images/hero-team.jpg',
    alt: 'Translation team in Dubai office providing certified document services',
    category: 'general',
    keywords: ['team', 'office', 'professional'],
    optimized: true,
    webp: false,
    sizeKB: 176
  },
};

/**
 * PAGE-SPECIFIC HERO IMAGE MAPPINGS
 * Explicit assignments for critical pages
 */
export const PAGE_HERO_MAP: Record<string, string> = {
  // Homepage
  '/': 'city-cyber',

  // About section
  '/about/': 'office-team',
  '/about/translator/': 'ot-man',
  '/about/credentials/': 'office-team',
  '/about/reviews/': 'office-team',

  // Legal & Corporate Silo - Using SEO-optimized "authenticated-translation" key
  '/legal-translation-dubai/': 'authenticated-translation',
  '/legal/contracts/': 'authenticated-translation',
  '/legal/contracts/nda/': 'authenticated-translation',
  '/legal/contracts/spa/': 'authenticated-translation',
  '/legal/contracts/mou/': 'authenticated-translation',
  '/legal/contracts/lease/': 'authenticated-translation',
  '/legal/corporate/': 'authenticated-translation',
  '/legal/corporate/moa/': 'authenticated-translation',
  '/legal/corporate/resolution/': 'authenticated-translation',
  '/legal/corporate/poa/': 'authenticated-translation',
  '/legal/corporate/license/': 'authenticated-translation',
  '/legal/litigation/': 'authenticated-translation',
  '/legal/litigation/verdict/': 'authenticated-translation',
  '/legal/litigation/arbitration/': 'authenticated-translation',
  '/legal/wills/': 'authenticated-translation',
  '/services/legal-translation/': 'authenticated-translation',

  // Personal & Civil Silo
  '/personal-documents/': 'office-team',
  '/personal/vital-records/': 'office-team',
  '/personal/vital-records/birth/': 'office-team',
  '/personal/vital-records/marriage/': 'office-team',
  '/personal/vital-records/divorce/': 'office-team',
  '/personal/vital-records/death/': 'office-team',
  '/personal/immigration/': 'office-team',
  '/personal/immigration/pcc/': 'office-team',
  '/personal/immigration/bank/': 'office-team',
  '/personal/immigration/license/': 'office-team',
  // Academic pages - Using SEO-optimized "translation-of-degree-certificates" key
  '/personal/academic/': 'translation-of-degree-certificates',
  '/personal/academic/degree/': 'translation-of-degree-certificates',
  '/personal/academic/transcripts/': 'translation-of-degree-certificates',
  
  // Attestation Silo
  '/services/attestation/': 'office-team',
  '/services/attestation/india/': 'office-team',
  '/services/attestation/uk/': 'office-team',
  '/services/attestation/us/': 'office-team',
  '/services/attestation/philippines/': 'office-team',
  '/services/attestation/pakistan/': 'office-team',
  '/services/attestation/canada/': 'office-team',
  '/services/attestation/mofa/': 'office-team',
  '/services/attestation/embassy/': 'office-team',
  '/services/attestation/apostille/': 'office-team',
  
  // Specialized Silo
  '/specialized-translation/': 'technical-translation',
  '/specialized/medical/': 'medical-cyber',
  '/specialized/medical/dha-dataflow/': 'medical-cyber',
  '/specialized/technical/': 'technical-translation',
  '/specialized/hospitality/': 'city-cyber',
  '/specialized/digital/': 'cyber-smith',
  '/specialized/financial/': 'city-cyber',
  
  // Special Services
  '/services/golden-visa-translation/': 'office-team',
  '/services/certificate-translation/': 'office-team',
  '/services/corporate-translation/': 'city-cyber',
  
  // Locations Silo
  '/locations/': 'city-cyber',
  '/locations/dubai/': 'city-cyber',
  '/locations/dubai/palm-jumeirah/': 'city-cyber',
  '/locations/dubai/difc/': 'city-cyber',
  '/locations/dubai/jlt/': 'city-cyber',
  '/locations/dubai/business-bay/': 'city-cyber',
  '/locations/dubai/downtown/': 'city-cyber',
  '/locations/dubai/marina/': 'city-cyber',
  '/locations/abu-dhabi/': 'city-cyber',
  '/locations/sharjah/': 'city-cyber',
  
  // Resources Silo
  '/resources/': 'office-team',
  '/resources/moj-vs-certified/': 'vis-translation',
  '/resources/authenticated-translation/': 'office-team',
  '/resources/pricing-guide/': 'office-team',
  '/resources/document-checklist/': 'office-team',
  '/resources/attestation-guide/': 'office-team',
  '/resources/golden-visa-checklist/': 'office-team',
  '/resources/faq/': 'office-team',
  '/resources/turnaround-times/': 'office-team',
  '/resources/case-studies/': 'office-team',
  
  // Language Pages
  '/hindi/': 'office-team',
  '/urdu/': 'office-team',
  '/tagalog/': 'office-team',
  '/malayalam/': 'office-team',
  '/bengali/': 'office-team',
  '/chinese/': 'office-team',
  '/russian/': 'office-team',
  '/french/': 'office-team',
  '/farsi/': 'office-team',
  
  // Industry Pages
  '/industries/': 'city-cyber',
  '/industries/legal/': 'vis-translation',
  '/industries/healthcare/': 'medical-cyber',
  '/industries/real-estate/': 'city-cyber',
  '/industries/e-commerce/': 'cyber-smith',
  
  // Contact
  '/contact/': 'office-team',
};

/**
 * Helper: Get hero image data by key
 */
export function getHeroImage(key: string): HeroImage | null {
  return HERO_IMAGES[key] || null;
}

/**
 * Helper: Get optimized image path (WebP if available, PNG fallback)
 * Accepts either a key from HERO_IMAGES or a full path to an image
 */
export function getOptimizedHeroPath(keyOrPath: string): { webp?: string; fallback: string; alt: string } | null {
  // First, try direct key lookup
  const image = HERO_IMAGES[keyOrPath];
  if (image) {
    return {
      webp: image.pathWebp,
      fallback: image.path,
      alt: image.alt
    };
  }

  // If it's a path (starts with /), find the matching image by path
  if (keyOrPath.startsWith('/')) {
    const matchingEntry = Object.entries(HERO_IMAGES).find(([_, img]) => img.path === keyOrPath);
    if (matchingEntry) {
      const [_, matchedImage] = matchingEntry;
      return {
        webp: matchedImage.pathWebp,
        fallback: matchedImage.path,
        alt: matchedImage.alt
      };
    }

    // If no match in registry, try to generate WebP path from PNG/JPG path
    if (keyOrPath.endsWith('.png') || keyOrPath.endsWith('.jpg') || keyOrPath.endsWith('.jpeg')) {
      const webpPath = keyOrPath.replace(/\.(png|jpg|jpeg)$/, '.webp');
      return {
        webp: webpPath,
        fallback: keyOrPath,
        alt: 'Hero image'
      };
    }
  }

  return null;
}

/**
 * Helper: Get optimized image path for a page URL
 */
export function getHeroImagePathsForPage(pathname: string): { webp?: string; fallback: string; alt: string } | null {
  const imageKey = PAGE_HERO_MAP[pathname];
  if (!imageKey) return null;

  return getOptimizedHeroPath(imageKey);
}

/**
 * Helper: Get hero image for current page URL
 * Falls back to category-based matching if no explicit mapping
 */
export function getHeroImageForPage(pathname: string, category?: string): HeroImage | null {
  // Try explicit page mapping first
  const imageKey = PAGE_HERO_MAP[pathname];
  if (imageKey) {
    return HERO_IMAGES[imageKey];
  }
  
  // Fallback to category-based matching
  if (category) {
    const matches = Object.values(HERO_IMAGES).filter(img => img.category === category);
    return matches.length > 0 ? matches[0] : null;
  }
  
  // Default fallback
  return HERO_IMAGES['office-team'];
}

/**
 * Helper: Check if image needs optimization
 */
export function needsOptimization(key: string): boolean {
  const image = HERO_IMAGES[key];
  return image ? !image.optimized || !image.webp : false;
}

/**
 * Helper: Get all images that need optimization
 */
export function getUnoptimizedImages(): Array<{ key: string; image: HeroImage }> {
  return Object.entries(HERO_IMAGES)
    .filter(([_, img]) => !img.optimized || !img.webp)
    .map(([key, image]) => ({ key, image }));
}

/**
 * Helper: Get optimization stats
 */
export function getOptimizationStats() {
  const total = Object.keys(HERO_IMAGES).length;
  const optimized = Object.values(HERO_IMAGES).filter(img => img.optimized && img.webp).length;
  const totalSize = Object.values(HERO_IMAGES).reduce((sum, img) => sum + img.sizeKB, 0);
  const targetSize = Object.values(HERO_IMAGES).reduce((sum, img) => {
    if (img.optimized) return sum + img.sizeKB;
    // Target: ~35% of original for WebP
    return sum + (img.sizeKB * 0.35);
  }, 0);
  
  return {
    total,
    optimized,
    pending: total - optimized,
    currentSizeMB: (totalSize / 1024).toFixed(2),
    targetSizeMB: (targetSize / 1024).toFixed(2),
    savingsMB: ((totalSize - targetSize) / 1024).toFixed(2),
    percentageReduction: (((totalSize - targetSize) / totalSize) * 100).toFixed(1)
  };
}

// Export stats for monitoring
export const optimizationStats = getOptimizationStats();
