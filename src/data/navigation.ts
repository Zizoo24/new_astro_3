/**
 * navigation.ts - Single Source of Truth for All Navigation
 * 
 * RESTRUCTURED to match Blueprint Silo Architecture:
 * - Silo 1: Legal & Corporate (High Trust)
 * - Silo 2: Personal & Civil (High Volume)
 * - Silo 3: Attestation (Country-specific)
 * - Silo 4: Specialized (Niche B2B)
 * - Silo 5: Locations (Geo-targeting)
 * - Silo 6: Resources (Support content)
 * 
 * This file controls:
 * - Desktop header dropdown (Header.astro)
 * - Mobile sidebar accordion (MobileShell.astro)
 * - Footer links (Footer.astro)
 * 
 * UPDATED: 2024-12-11
 * - Fixed social icon classes (fab fa-xxx format)
 * - Added /personal-documents/ pillar page
 * - Restructured to blueprint silo architecture
 */

// ============================================
// TYPE DEFINITIONS
// ============================================

export interface NavLink {
  label: string;
  href: string;
  icon?: string;
  badge?: string;  // "NEW", "POPULAR", etc.
}

export interface NavGroup {
  id: string;
  label: string;
  href: string;
  children: NavLink[];
  headers?: { index: number; label: string }[];
  dividers?: number[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}

// ============================================
// SITE CONTACT INFO
// ============================================

export const siteContact = {
  phone: '+971 50 862 0217',
  phoneDisplay: '+971 50 862 0217',
  email: 'info@onlinetranslation.ae',
  whatsapp: 'https://wa.me/971508620217',
  address: 'Palm Jumeirah, Dubai, UAE',
};

// ============================================
// SOCIAL LINKS
// Fixed: Full Font Awesome class (fab fa-xxx)
// ============================================

export const socialLinks: SocialLink[] = [
  { platform: 'whatsapp', url: 'https://wa.me/971508620217', icon: 'fa-brands fa-whatsapp', label: 'WhatsApp' },
  { platform: 'facebook', url: 'https://facebook.com/onlinetranslationae', icon: 'fa-brands fa-facebook-f', label: 'Facebook' },
  { platform: 'instagram', url: 'https://instagram.com/onlinetranslationae', icon: 'fa-brands fa-instagram', label: 'Instagram' },
  { platform: 'linkedin', url: 'https://linkedin.com/company/onlinetranslationae', icon: 'fa-brands fa-linkedin-in', label: 'LinkedIn' },
];

// ============================================
// MAIN NAVIGATION - BLUEPRINT SILO STRUCTURE
// ============================================

export const mainNav: (NavLink | NavGroup)[] = [
  { label: 'Home', href: '/' },

  // ========================================
  // SERVICES - All verified existing pages
  // ========================================
  {
    id: 'services',
    label: 'Services',
    href: '/services/',
    children: [
      { label: 'All Services', href: '/services/', badge: 'HUB' },
      { label: 'Legal Translation', href: '/legal-translation-dubai/' },
      { label: 'Certificate Translation', href: '/services/certificate-translation/' },
      { label: 'Corporate Translation', href: '/services/corporate-translation/' },
      { label: 'Golden Visa Translation', href: '/services/golden-visa-translation/', badge: 'POPULAR' },
      { label: 'Medical Translation', href: '/specialized/medical/' },
    ],
    headers: [
      { index: 0, label: 'Translation Services' },
    ],
  },

  // ========================================
  // DOCUMENTS - Personal & Legal docs
  // ========================================
  {
    id: 'documents',
    label: 'Documents',
    href: '/personal-documents/',
    children: [
      // Personal Documents
      { label: 'Personal Documents', href: '/personal-documents/', badge: 'HUB' },
      { label: 'Birth Certificate', href: '/personal/vital-records/birth/' },
      { label: 'Marriage Certificate', href: '/personal/vital-records/marriage/' },
      { label: 'Divorce Certificate', href: '/personal/vital-records/divorce/' },
      { label: 'Death Certificate', href: '/personal/vital-records/death/' },
      { label: 'University Degree', href: '/personal/education/degree/' },
      { label: 'Transcripts', href: '/personal/academic/transcripts/' },
      { label: 'Police Clearance', href: '/personal/immigration/pcc/' },
      { label: 'Bank Statement', href: '/personal/immigration/bank/' },
      { label: 'Driving License', href: '/personal/immigration/license/' },
      // Legal Documents
      { label: 'Contract Translation', href: '/legal/contracts/' },
      { label: 'NDA Translation', href: '/legal/contracts/nda/' },
      { label: 'Corporate Documents', href: '/legal/corporate/' },
      { label: 'MOA Translation', href: '/legal/corporate/moa/' },
      { label: 'Power of Attorney', href: '/legal/corporate/poa/' },
      { label: 'Court Documents', href: '/legal/litigation/' },
      { label: 'Will Translation', href: '/legal/wills/' },
    ],
    headers: [
      { index: 0, label: 'Personal Documents' },
      { index: 10, label: 'Legal Documents' },
    ],
    dividers: [9],
  },

  // ========================================
  // ATTESTATION - Verified pages only
  // ========================================
  {
    id: 'attestation',
    label: 'Attestation',
    href: '/services/attestation/',
    children: [
      { label: 'Attestation Services', href: '/services/attestation/', badge: 'HUB' },
      { label: 'India Attestation', href: '/services/attestation/india/' },
      { label: 'UK Attestation', href: '/services/attestation/uk/' },
      { label: 'US Attestation', href: '/services/attestation/us/' },
    ],
    headers: [
      { index: 0, label: 'Attestation & Legalization' },
    ],
  },

  // ========================================
  // LOCATIONS - Verified pages only
  // ========================================
  {
    id: 'locations',
    label: 'Locations',
    href: '/locations/',
    children: [
      { label: 'All Locations', href: '/locations/' },
      { label: 'Dubai', href: '/locations/dubai/' },
      { label: 'Palm Jumeirah', href: '/locations/dubai/palm-jumeirah/' },
      { label: 'DIFC', href: '/locations/dubai/difc/' },
      { label: 'JLT & DMCC', href: '/locations/dubai/jlt/' },
      { label: 'Business Bay', href: '/locations/dubai/business-bay/' },
      { label: 'Abu Dhabi', href: '/locations/abu-dhabi/' },
      { label: 'Sharjah', href: '/locations/sharjah/' },
    ],
    headers: [
      { index: 1, label: 'Dubai' },
      { index: 7, label: 'Other Emirates' },
    ],
    dividers: [0, 6],
  },

  // ========================================
  // INDUSTRIES
  // ========================================
  {
    id: 'industries',
    label: 'Industries',
    href: '/industries/',
    children: [
      { label: 'All Industries', href: '/industries/' },
      { label: 'Legal', href: '/industries/legal/' },
      { label: 'Healthcare', href: '/industries/healthcare/' },
      { label: 'Real Estate', href: '/industries/real-estate/' },
      { label: 'E-Commerce', href: '/industries/e-commerce/' },
    ],
  },

  // ========================================
  // RESOURCES - Verified pages only
  // ========================================
  {
    id: 'resources',
    label: 'Resources',
    href: '/resources/',
    children: [
      { label: 'Resource Center', href: '/resources/' },
      { label: 'Pricing Guide', href: '/resources/pricing-guide/' },
      { label: 'Document Checklist', href: '/resources/document-checklist/' },
      { label: 'Attestation Guide', href: '/resources/attestation-guide/' },
      { label: 'Golden Visa Checklist', href: '/resources/golden-visa-checklist/' },
      { label: 'FAQ', href: '/resources/faq/' },
    ],
  },

  { label: 'About', href: '/about/' },
];

// ============================================
// MOBILE NAVIGATION - SILO-ALIGNED ACCORDIONS
// ============================================

export const mobileNav = {
  home: { label: 'Home', href: '/', icon: 'fa-solid fa-home' },

  accordions: [
    // Services
    {
      id: 'services',
      label: 'Services',
      href: '/services/',
      children: [
        { label: 'All Services', href: '/services/' },
        { label: 'Legal Translation', href: '/legal-translation-dubai/' },
        { label: 'Certificate Translation', href: '/services/certificate-translation/' },
        { label: 'Corporate Translation', href: '/services/corporate-translation/' },
        { label: 'Golden Visa Package', href: '/services/golden-visa-translation/' },
        { label: 'Medical Translation', href: '/specialized/medical/' },
      ],
    },

    // Documents
    {
      id: 'documents',
      label: 'Documents',
      href: '/personal-documents/',
      children: [
        { label: 'Personal Documents', href: '/personal-documents/' },
        { label: 'Birth Certificate', href: '/personal/vital-records/birth/' },
        { label: 'Marriage Certificate', href: '/personal/vital-records/marriage/' },
        { label: 'University Degree', href: '/personal/education/degree/' },
        { label: 'Police Clearance', href: '/personal/immigration/pcc/' },
        { label: 'Contract Translation', href: '/legal/contracts/' },
        { label: 'Power of Attorney', href: '/legal/corporate/poa/' },
      ],
    },

    // Attestation
    {
      id: 'attestation',
      label: 'Attestation',
      href: '/services/attestation/',
      children: [
        { label: 'Attestation Services', href: '/services/attestation/' },
        { label: 'India Attestation', href: '/services/attestation/india/' },
        { label: 'UK Attestation', href: '/services/attestation/uk/' },
        { label: 'US Attestation', href: '/services/attestation/us/' },
      ],
    },

    // Locations
    {
      id: 'locations',
      label: 'Locations',
      href: '/locations/',
      children: [
        { label: 'All Locations', href: '/locations/' },
        { label: 'Dubai', href: '/locations/dubai/' },
        { label: 'Palm Jumeirah', href: '/locations/dubai/palm-jumeirah/' },
        { label: 'DIFC', href: '/locations/dubai/difc/' },
        { label: 'Abu Dhabi', href: '/locations/abu-dhabi/' },
        { label: 'Sharjah', href: '/locations/sharjah/' },
      ],
    },

    // Industries
    {
      id: 'industries',
      label: 'Industries',
      href: '/industries/',
      children: [
        { label: 'All Industries', href: '/industries/' },
        { label: 'Legal', href: '/industries/legal/' },
        { label: 'Healthcare', href: '/industries/healthcare/' },
        { label: 'Real Estate', href: '/industries/real-estate/' },
      ],
    },

    // Resources
    {
      id: 'resources',
      label: 'Resources',
      href: '/resources/',
      children: [
        { label: 'Resource Center', href: '/resources/' },
        { label: 'Pricing Guide', href: '/resources/pricing-guide/' },
        { label: 'Document Checklist', href: '/resources/document-checklist/' },
        { label: 'FAQ', href: '/resources/faq/' },
      ],
    },
  ],

  singleLinks: [
    { label: 'About', href: '/about/', icon: 'fa-solid fa-building' },
    { label: 'Contact', href: '/contact/', icon: 'fa-solid fa-envelope' },
  ],
};

// ============================================
// SEARCH QUICK LINKS
// ============================================

export const searchQuickLinks: NavLink[] = [
  { label: 'Golden Visa', href: '/services/golden-visa-translation/' },
  { label: 'Legal Translation', href: '/legal-translation-dubai/' },
  { label: 'Birth Certificate', href: '/personal/vital-records/birth/' },
  { label: 'India Attestation', href: '/services/attestation/india/' },
  { label: 'Pricing Guide', href: '/resources/pricing-guide/' },
];

// ============================================
// FOOTER NAVIGATION
// ============================================

export const footerNav = {
  quickLinks: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services/' },
    { label: 'Documents', href: '/personal-documents/' },
    { label: 'Attestation', href: '/services/attestation/' },
    { label: 'Locations', href: '/locations/' },
    { label: 'About', href: '/about/' },
    { label: 'Contact', href: '/contact/' },
  ],

  popularServices: [
    { label: 'Golden Visa Translation', href: '/services/golden-visa-translation/' },
    { label: 'Legal Translation', href: '/legal-translation-dubai/' },
    { label: 'Birth Certificate', href: '/personal/vital-records/birth/' },
    { label: 'Marriage Certificate', href: '/personal/vital-records/marriage/' },
    { label: 'India Attestation', href: '/services/attestation/india/' },
    { label: 'Corporate Translation', href: '/services/corporate-translation/' },
  ],

  legal: [
    { label: 'Privacy Policy', href: '/privacy/' },
    { label: 'Terms of Service', href: '/terms/' },
  ],
};

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Check if a NavItem is a NavGroup (has children)
 */
export const isNavGroup = (item: NavLink | NavGroup): item is NavGroup => {
  return 'children' in item && Array.isArray(item.children);
};

/**
 * Get a nav group by ID
 */
export const getNavGroup = (id: string): NavGroup | undefined => {
  return mainNav.find((item): item is NavGroup => 
    'id' in item && item.id === id
  );
};

/**
 * Get all links for sitemap generation
 */
export const getAllLinks = (): string[] => {
  const links: string[] = [];
  
  mainNav.forEach(item => {
    links.push(item.href);
    if (isNavGroup(item)) {
      item.children.forEach(child => links.push(child.href));
    }
  });
  
  // Add contact page
  links.push('/contact/');
  
  return [...new Set(links)]; // Remove duplicates
};

// ============================================
// BACKWARDS COMPATIBILITY
// For any code still importing from old structure
// ============================================

export const footerServices = footerNav.popularServices.map(s => ({
  url: s.href,
  text: s.label
}));

// ============================================
// PAGE STATUS NOTES
// All nav links above verified to exist as of update
// ============================================
