/**
 * navigation.ts - Single Source of Truth for All Navigation
 *
 * RESTRUCTURED to match Master Strategic Blueprint (6-Silo Architecture):
 * - Cluster A: Legal & Corporate (/legal-translation-dubai/)
 * - Cluster B: Personal & Civil (/personal-documents/)
 * - Cluster C: Specialized (/specialized-translation/)
 * - Cluster D: Locations (/locations/)
 * - Industries (Good Addition)
 * - Resources (Good Addition)
 *
 * This file controls:
 * - Desktop header dropdown (Header.astro)
 * - Mobile sidebar accordion (MobileShell.astro)
 * - Footer links (Footer.astro)
 *
 * UPDATED: 2024-12-12
 * - Aligned to Master Strategic Blueprint exactly
 * - Fixed location URLs to flat structure per blueprint
 * - Added Industries silo (Good Addition)
 * - Added /services/ Master Services Gateway
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
  { platform: 'whatsapp', url: 'https://wa.me/971508620217', icon: 'fab fa-whatsapp', label: 'WhatsApp' },
  { platform: 'facebook', url: 'https://facebook.com/onlinetranslationae', icon: 'fab fa-facebook', label: 'Facebook' },
  { platform: 'instagram', url: 'https://instagram.com/onlinetranslationae', icon: 'fab fa-instagram', label: 'Instagram' },
  { platform: 'linkedin', url: 'https://linkedin.com/company/onlinetranslationae', icon: 'fab fa-linkedin', label: 'LinkedIn' },
];

// ============================================
// MAIN NAVIGATION - BLUEPRINT 6-SILO STRUCTURE
// ============================================

export const mainNav: (NavLink | NavGroup)[] = [
  { label: 'Home', href: '/' },

  // ========================================
  // CLUSTER A: LEGAL & CORPORATE (High Trust)
  // Hub: /legal-translation-dubai/ (3,000+ words)
  // ========================================
  {
    id: 'legal',
    label: 'Legal Translation',
    href: '/legal-translation-dubai/',
    children: [
      // Hub page
      { label: 'Legal Translation Dubai', href: '/legal-translation-dubai/', badge: 'HUB' },

      // Contracts Hub
      { label: 'Contracts Hub', href: '/legal/contracts/' },
      { label: 'NDA Translation', href: '/legal/contracts/nda/' },
      { label: 'Sales Purchase Agreement', href: '/legal/contracts/spa/' },
      { label: 'MOU Translation', href: '/legal/contracts/mou/' },
      { label: 'Commercial Leases', href: '/legal/contracts/lease/' },

      // Corporate Governance Hub
      { label: 'Corporate Governance', href: '/legal/corporate/' },
      { label: 'Memorandum of Association', href: '/legal/corporate/moa/' },
      { label: 'Board Resolutions', href: '/legal/corporate/resolution/' },
      { label: 'Power of Attorney', href: '/legal/corporate/poa/' },

      // Court Documents Hub
      { label: 'Court Documents', href: '/legal/litigation/' },
      { label: 'Court Verdicts', href: '/legal/litigation/verdict/' },
      { label: 'Arbitration Awards', href: '/legal/litigation/arbitration/' },
    ],
    headers: [
      { index: 0, label: 'Legal Translation Hub' },
      { index: 1, label: 'Contracts' },
      { index: 6, label: 'Corporate Governance' },
      { index: 10, label: 'Court Documents' },
    ],
    dividers: [0, 5, 9],
  },

  // ========================================
  // CLUSTER B: PERSONAL & CIVIL (High Volume)
  // Hub: /personal-documents/ (3,000+ words)
  // ========================================
  {
    id: 'personal',
    label: 'Personal Documents',
    href: '/personal-documents/',
    children: [
      // Hub page
      { label: 'Personal Documents Hub', href: '/personal-documents/', badge: 'HUB' },

      // Vital Records Hub
      { label: 'Vital Records', href: '/personal/vital-records/' },
      { label: 'Birth Certificate', href: '/personal/vital-records/birth/' },
      { label: 'Marriage Certificate', href: '/personal/vital-records/marriage/' },
      { label: 'Divorce Certificate', href: '/personal/vital-records/divorce/' },
      { label: 'Death Certificate', href: '/personal/vital-records/death/' },

      // Visa & Immigration Hub
      { label: 'Visa & Immigration', href: '/personal/immigration/' },
      { label: 'Police Clearance (PCC)', href: '/personal/immigration/pcc/' },
      { label: 'Bank Statements', href: '/personal/immigration/bank/' },
      { label: 'Driving License', href: '/personal/immigration/license/' },

      // Academic Docs Hub
      { label: 'Academic Documents', href: '/personal/academic/' },
      { label: 'University Degree', href: '/personal/academic/degree/' },
      { label: 'School Transcripts', href: '/personal/academic/transcripts/' },
    ],
    headers: [
      { index: 0, label: 'Expat Document Services' },
      { index: 1, label: 'Vital Records' },
      { index: 6, label: 'Visa & Immigration' },
      { index: 10, label: 'Academic' },
    ],
    dividers: [0, 5, 9],
  },

  // ========================================
  // CLUSTER C: SPECIALIZED (Niche B2B)
  // Hub: /specialized-translation/ (2,000+ words)
  // ========================================
  {
    id: 'specialized',
    label: 'Specialized',
    href: '/specialized-translation/',
    children: [
      // Hub page
      { label: 'Specialized Translation', href: '/specialized-translation/', badge: 'HUB' },

      // Industry verticals per blueprint
      { label: 'Medical Reports (DHA/MOH)', href: '/specialized/medical/' },
      { label: 'Technical Manuals (ISO)', href: '/specialized/technical/' },
      { label: 'Menu Translation', href: '/specialized/hospitality/' },
      { label: 'Website Localization', href: '/specialized/digital/' },
    ],
    headers: [
      { index: 0, label: 'Technical Translation' },
      { index: 1, label: 'Industry Verticals' },
    ],
    dividers: [0],
  },

  // ========================================
  // CLUSTER D: LOCATIONS (Geo-targeting)
  // Hub: /locations/ ("Coverage Map")
  // Blueprint: Flat URL structure
  // ========================================
  {
    id: 'locations',
    label: 'Locations',
    href: '/locations/',
    children: [
      { label: 'All Locations', href: '/locations/', badge: 'HUB' },
      { label: 'JLT / DMCC', href: '/locations/jlt/' },
      { label: 'Business Bay', href: '/locations/business-bay/' },
      { label: 'DIFC', href: '/locations/difc/' },
      { label: 'Dubai Marina', href: '/locations/marina/' },
      { label: 'Abu Dhabi', href: '/locations/abu-dhabi/' },
    ],
    headers: [
      { index: 0, label: 'Coverage Map' },
      { index: 1, label: 'Dubai Areas' },
      { index: 5, label: 'Other Emirates' },
    ],
    dividers: [0, 4],
  },

  // ========================================
  // INDUSTRIES SILO (Good Addition)
  // ========================================
  {
    id: 'industries',
    label: 'Industries',
    href: '/industries/',
    children: [
      { label: 'Industries Overview', href: '/industries/', badge: 'HUB' },
      { label: 'Legal Sector', href: '/industries/legal/' },
      { label: 'Healthcare', href: '/industries/healthcare/' },
      { label: 'Real Estate', href: '/industries/real-estate/' },
      { label: 'E-Commerce', href: '/industries/e-commerce/' },
    ],
    headers: [
      { index: 0, label: 'Industry Solutions' },
    ],
    dividers: [],
  },

  // ========================================
  // RESOURCES SILO (Good Addition)
  // ========================================
  {
    id: 'resources',
    label: 'Resources',
    href: '/resources/',
    children: [
      { label: 'Resource Center', href: '/resources/', badge: 'HUB' },
      { label: 'Pricing Guide', href: '/resources/pricing-guide/' },
      { label: 'Document Checklist', href: '/resources/document-checklist/' },
      { label: 'Attestation Guide', href: '/resources/attestation-guide/' },
      { label: 'Golden Visa Checklist', href: '/resources/golden-visa-checklist/' },
      { label: 'FAQ', href: '/resources/faq/' },
    ],
  },

  // ========================================
  // ADDITIONAL REQUIRED PAGES
  // ========================================
  { label: 'Services', href: '/services/' },  // Master Services Gateway
  { label: 'About', href: '/about/' },
];

// ============================================
// MOBILE NAVIGATION - SILO-ALIGNED ACCORDIONS
// ============================================

export const mobileNav = {
  home: { label: 'Home', href: '/', icon: 'fas fa-home' },

  accordions: [
    // CLUSTER A: Legal & Corporate
    {
      id: 'legal',
      label: 'Legal Translation',
      href: '/legal-translation-dubai/',
      children: [
        { label: 'Legal Translation Hub', href: '/legal-translation-dubai/' },
        { label: 'Contracts Hub', href: '/legal/contracts/' },
        { label: 'NDA Translation', href: '/legal/contracts/nda/' },
        { label: 'Sales Purchase Agreement', href: '/legal/contracts/spa/' },
        { label: 'Corporate Governance', href: '/legal/corporate/' },
        { label: 'MOA Translation', href: '/legal/corporate/moa/' },
        { label: 'Board Resolutions', href: '/legal/corporate/resolution/' },
        { label: 'Power of Attorney', href: '/legal/corporate/poa/' },
        { label: 'Court Documents', href: '/legal/litigation/' },
        { label: 'Court Verdicts', href: '/legal/litigation/verdict/' },
        { label: 'Arbitration Awards', href: '/legal/litigation/arbitration/' },
      ],
    },

    // CLUSTER B: Personal & Civil
    {
      id: 'personal',
      label: 'Personal Documents',
      href: '/personal-documents/',
      children: [
        { label: 'Personal Docs Hub', href: '/personal-documents/' },
        { label: 'Vital Records', href: '/personal/vital-records/' },
        { label: 'Birth Certificate', href: '/personal/vital-records/birth/' },
        { label: 'Marriage Certificate', href: '/personal/vital-records/marriage/' },
        { label: 'Divorce Certificate', href: '/personal/vital-records/divorce/' },
        { label: 'Death Certificate', href: '/personal/vital-records/death/' },
        { label: 'Visa & Immigration', href: '/personal/immigration/' },
        { label: 'Police Clearance (PCC)', href: '/personal/immigration/pcc/' },
        { label: 'Bank Statements', href: '/personal/immigration/bank/' },
        { label: 'Driving License', href: '/personal/immigration/license/' },
        { label: 'Academic Documents', href: '/personal/academic/' },
        { label: 'University Degree', href: '/personal/academic/degree/' },
        { label: 'School Transcripts', href: '/personal/academic/transcripts/' },
      ],
    },

    // CLUSTER C: Specialized
    {
      id: 'specialized',
      label: 'Specialized',
      href: '/specialized-translation/',
      children: [
        { label: 'Specialized Hub', href: '/specialized-translation/' },
        { label: 'Medical Reports (DHA/MOH)', href: '/specialized/medical/' },
        { label: 'Technical Manuals (ISO)', href: '/specialized/technical/' },
        { label: 'Menu Translation', href: '/specialized/hospitality/' },
        { label: 'Website Localization', href: '/specialized/digital/' },
      ],
    },

    // CLUSTER D: Locations
    {
      id: 'locations',
      label: 'Locations',
      href: '/locations/',
      children: [
        { label: 'All Locations', href: '/locations/' },
        { label: 'JLT / DMCC', href: '/locations/jlt/' },
        { label: 'Business Bay', href: '/locations/business-bay/' },
        { label: 'DIFC', href: '/locations/difc/' },
        { label: 'Dubai Marina', href: '/locations/marina/' },
        { label: 'Abu Dhabi', href: '/locations/abu-dhabi/' },
      ],
    },

    // Industries Silo (Good Addition)
    {
      id: 'industries',
      label: 'Industries',
      href: '/industries/',
      children: [
        { label: 'Industries Overview', href: '/industries/' },
        { label: 'Legal Sector', href: '/industries/legal/' },
        { label: 'Healthcare', href: '/industries/healthcare/' },
        { label: 'Real Estate', href: '/industries/real-estate/' },
        { label: 'E-Commerce', href: '/industries/e-commerce/' },
      ],
    },

    // Resources Silo (Good Addition)
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
  ],

  singleLinks: [
    { label: 'Services', href: '/services/', icon: 'fas fa-cogs' },
    { label: 'About', href: '/about/', icon: 'fas fa-building' },
    { label: 'Contact Us', href: '/contact/', icon: 'fas fa-envelope' },
  ],
};

// ============================================
// SEARCH QUICK LINKS
// ============================================

export const searchQuickLinks: NavLink[] = [
  { label: 'Legal Translation', href: '/legal-translation-dubai/' },
  { label: 'Birth Certificate', href: '/personal/vital-records/birth/' },
  { label: 'Medical Reports', href: '/specialized/medical/' },
  { label: 'JLT / DMCC', href: '/locations/jlt/' },
  { label: 'Pricing', href: '/resources/pricing-guide/' },
];

// ============================================
// FOOTER NAVIGATION
// ============================================

export const footerNav = {
  quickLinks: [
    { label: 'Home', href: '/' },
    { label: 'Legal Translation', href: '/legal-translation-dubai/' },
    { label: 'Personal Documents', href: '/personal-documents/' },
    { label: 'Specialized', href: '/specialized-translation/' },
    { label: 'Locations', href: '/locations/' },
    { label: 'Industries', href: '/industries/' },
    { label: 'Resources', href: '/resources/' },
    { label: 'Services', href: '/services/' },
    { label: 'About', href: '/about/' },
    { label: 'Contact', href: '/contact/' },
  ],

  services: [
    { label: 'Birth Certificate', href: '/personal/vital-records/birth/' },
    { label: 'Marriage Certificate', href: '/personal/vital-records/marriage/' },
    { label: 'University Degree', href: '/personal/academic/degree/' },
    { label: 'Power of Attorney', href: '/legal/corporate/poa/' },
    { label: 'NDA Translation', href: '/legal/contracts/nda/' },
    { label: 'Medical Reports', href: '/specialized/medical/' },
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

  // Add additional required pages
  links.push('/contact/');
  links.push('/privacy/');
  links.push('/terms/');

  return [...new Set(links)]; // Remove duplicates
};

// ============================================
// BACKWARDS COMPATIBILITY
// For any code still importing from old structure
// ============================================

export const footerServices = footerNav.services.map(s => ({
  url: s.href,
  text: s.label
}));

// ============================================
// PAGE STATUS TRACKER - BLUEPRINT ALIGNMENT
// ✅ = Exists | ❌ = Missing | 🔧 = Needs Update
// ============================================

export const pageStatus = {
  // Hub Pages (Pillars)
  hubs: {
    '/legal-translation-dubai/': '✅',    // Cluster A Hub
    '/personal-documents/': '✅',          // Cluster B Hub
    '/specialized-translation/': '❌',     // Cluster C Hub - PRIORITY
    '/locations/': '✅',                   // Cluster D Hub
    '/industries/': '❌',                  // Industries Hub
    '/resources/': '✅',                   // Resources Hub
    '/services/': '❌',                    // Master Services Gateway
  },

  // Legal Sub-Hubs (Cluster A)
  legalSubHubs: {
    '/legal/contracts/': '❌',             // Contracts Hub
    '/legal/corporate/': '✅',             // Corporate Hub
    '/legal/litigation/': '✅',            // Litigation Hub
  },

  // Personal Sub-Hubs (Cluster B)
  personalSubHubs: {
    '/personal/vital-records/': '❌',      // Vital Records Hub
    '/personal/immigration/': '❌',        // Immigration Hub
    '/personal/academic/': '❌',           // Academic Hub
  },

  // Location Pages (Cluster D) - Blueprint flat URLs
  locations: {
    '/locations/jlt/': '🔧',              // May need redirect from /locations/dubai/jlt/
    '/locations/business-bay/': '🔧',     // May need redirect
    '/locations/difc/': '🔧',             // May need redirect
    '/locations/marina/': '🔧',           // May need redirect
    '/locations/abu-dhabi/': '✅',
  },

  // Additional Required Pages
  additional: {
    '/about/': '✅',
    '/contact/': '✅',
    '/privacy/': '✅',
    '/terms/': '✅',
  },

  // Priority Missing Pages
  priorityMissing: [
    '/specialized-translation/',           // Cluster C Hub
    '/services/',                          // Master Services Gateway
    '/personal/vital-records/',            // Personal sub-hub
    '/personal/immigration/',              // Personal sub-hub
    '/personal/academic/',                 // Personal sub-hub
    '/legal/contracts/',                   // Legal sub-hub
    '/industries/',                        // Industries hub
  ],
};
