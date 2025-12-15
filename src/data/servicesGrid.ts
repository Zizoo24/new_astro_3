/**
 * servicesGrid.ts - Single Source of Truth for Main Services Grid
 *
 * This file defines the 6 main service categories displayed across the site.
 * Import from here to ensure consistent URLs, descriptions, and ordering.
 *
 * Updated: 2024-12-15
 */

// ============================================
// TYPE DEFINITIONS
// ============================================

export interface ServiceGridItem {
  // Core identifiers
  key: string;
  href: string;

  // Display text
  heading: string;
  text: string;

  // Visual assets
  icon: string;           // FontAwesome icon name (without 'fa-' prefix)
  image: string;          // Image path for card displays
  imageAlt: string;

  // Extended info for detailed displays
  features?: string[];
}

// ============================================
// MAIN 6 SERVICES - SINGLE SOURCE OF TRUTH
// ============================================

export const mainServices: ServiceGridItem[] = [
  {
    key: 'legal',
    href: '/legal-translation-dubai/',
    heading: 'Legal & Corporate',
    text: 'Contracts, court judgments, corporate governance, powers of attorney, and litigation documents with MOJ certification.',
    icon: 'balance-scale',
    image: '/assets/images/onedrive/tiles/tile-courts.png',
    imageAlt: 'Legal Translation Services',
    features: ['MOJ certification included', 'Court formatting standards', 'Rush processing available'],
  },
  {
    key: 'personal',
    href: '/personal-documents/',
    heading: 'Personal Documents',
    text: 'Birth certificates, marriage certificates, academic credentials, police clearance, and immigration documentation.',
    icon: 'user-friends',
    image: '/assets/images/onedrive/tiles/tile-immigration.png',
    imageAlt: 'Personal Document Translation',
    features: ['GDRFA/ICA formats', 'Name consistency verification', 'Express processing'],
  },
  {
    key: 'attestation',
    href: '/services/attestation/',
    heading: 'Attestation Services',
    text: 'Document attestation for MOFA and government entities. Complete legalization services including secure courier handling.',
    icon: 'stamp',
    image: '/assets/images/onedrive/services/services-4.jpg',
    imageAlt: 'Attestation & MOFAIC',
    features: ['Full chain attestation', 'Secure document handling', 'Status tracking provided'],
  },
  {
    key: 'goldenVisa',
    href: '/services/golden-visa-translation/',
    heading: 'Golden Visa',
    text: 'Complete document packages for UAE Golden Visa applications. Academic, professional, and investment documentation.',
    icon: 'star',
    image: '/assets/images/onedrive/services/services-5.jpg',
    imageAlt: 'Golden Visa Translation',
    features: ['ICP/GDRFA accepted format', 'Full document package review', 'Application guidance included'],
  },
  {
    key: 'specialized',
    href: '/specialized-translation/',
    heading: 'Specialized Translation',
    text: 'Medical reports, technical manuals, financial documents, and website localization for industry-specific requirements.',
    icon: 'cogs',
    image: '/assets/images/onedrive/tiles/tile-corporate.png',
    imageAlt: 'Specialized Translation',
    features: ['Industry expertise', 'Technical terminology', 'Quality assurance'],
  },
  {
    key: 'locations',
    href: '/locations/',
    heading: 'Location Services',
    text: 'On-site collection and delivery across Dubai, Abu Dhabi, and Northern Emirates. Doorstep service for busy professionals.',
    icon: 'map-marker-alt',
    image: '/assets/images/onedrive/locations/palm-jumeirah.png',
    imageAlt: 'Location Services',
    features: ['Same-day collection', 'UAE-wide coverage', 'Doorstep delivery'],
  },
];

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get services formatted for homepage image cards
 */
export const getHomepageServices = () => {
  return mainServices.map(service => ({
    href: service.href,
    image: service.image,
    imageAlt: service.imageAlt,
    heading: service.heading,
    text: service.text,
  }));
};

/**
 * Get services formatted for services hub icon cards
 */
export const getServicesHubCards = () => {
  return mainServices.map(service => ({
    icon: service.icon,
    title: service.heading,
    desc: service.text,
    features: service.features || [],
    href: service.href,
  }));
};

/**
 * Get a single service by key
 */
export const getServiceByKey = (key: string): ServiceGridItem | undefined => {
  return mainServices.find(s => s.key === key);
};

/**
 * Get services excluding specific keys (useful for "related services" sections)
 */
export const getServicesExcluding = (excludeKeys: string[]): ServiceGridItem[] => {
  return mainServices.filter(s => !excludeKeys.includes(s.key));
};

// ============================================
// SECTION DEFAULTS
// ============================================

export const servicesGridDefaults = {
  label: 'Our Services',
  title: 'Professional Translation Services Across Six Practice Areas',
};
