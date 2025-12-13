/**
 * navigation.ts - Single Source of Truth for All Navigation
 * 
 * FIXED VERSION - Corrects path mismatches between navigation and actual files
 * 
 * Changes from original:
 * 1. Personal Documents pillar: /personal-documents/ → /personal/
 * 2. Degree path: /personal/academic/degree/ → /personal/education/degree/
 * 3. Added missing hub pages to pageStatus
 * 
 * SILO STRUCTURE:
 * - Silo 1: Legal & Corporate (/legal-translation-dubai/)
 * - Silo 2: Personal & Civil (/personal/)
 * - Silo 3: Attestation (/services/attestation/)
 * - Silo 4: Specialized (/specialized-translation/)
 * - Silo 5: Locations (/locations/)
 * - Silo 6: Resources (/resources/)
 */

// ============================================
// TYPE DEFINITIONS
// ============================================

export interface NavLink {
  label: string;
  href: string;
  icon?: string;
  badge?: string;
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
// ============================================

export const socialLinks: SocialLink[] = [
  { platform: 'whatsapp', url: 'https://wa.me/971508620217', icon: 'fab fa-whatsapp', label: 'WhatsApp' },
  { platform: 'facebook', url: 'https://facebook.com/onlinetranslationae', icon: 'fab fa-facebook', label: 'Facebook' },
  { platform: 'instagram', url: 'https://instagram.com/onlinetranslationae', icon: 'fab fa-instagram', label: 'Instagram' },
  { platform: 'linkedin', url: 'https://linkedin.com/company/onlinetranslationae', icon: 'fab fa-linkedin', label: 'LinkedIn' },
];

// ============================================
// MAIN NAVIGATION - BLUEPRINT SILO STRUCTURE
// ============================================

export const mainNav: (NavLink | NavGroup)[] = [
  { label: 'Home', href: '/' },
  
  // ========================================
  // SILO 1: LEGAL & CORPORATE (High Trust)
  // Pillar: /legal-translation-dubai/
  // ========================================
  {
    id: 'legal',
    label: 'Legal Translation',
    href: '/legal-translation-dubai/',
    children: [
      { label: 'Legal Translation Dubai', href: '/legal-translation-dubai/', badge: 'HUB' },
      
      // Contracts cluster
      { label: 'Contract Translation', href: '/legal/contracts/' },
      { label: 'NDA Translation', href: '/legal/contracts/nda/' },
      { label: 'SPA (Sale Purchase)', href: '/legal/contracts/spa/' },
      { label: 'MOU Translation', href: '/legal/contracts/mou/' },
      { label: 'Lease Contracts', href: '/legal/contracts/lease/' },
      
      // Corporate cluster
      { label: 'Corporate Documents', href: '/legal/corporate/' },
      { label: 'MOA Translation', href: '/legal/corporate/moa/' },
      { label: 'Board Resolutions', href: '/legal/corporate/resolution/' },
      { label: 'Power of Attorney', href: '/legal/corporate/poa/' },
      
      // Litigation cluster
      { label: 'Court Documents', href: '/legal/litigation/' },
      { label: 'Court Verdicts', href: '/legal/litigation/verdict/' },
      { label: 'Arbitration Awards', href: '/legal/litigation/arbitration/' },
      { label: 'Will Translation', href: '/legal/wills/' },
    ],
    headers: [
      { index: 0, label: 'Legal Translation Hub' },
      { index: 1, label: 'Contracts' },
      { index: 6, label: 'Corporate' },
      { index: 10, label: 'Court & Litigation' },
    ],
    dividers: [0, 5, 9],
  },
  
  // ========================================
  // SILO 2: PERSONAL & CIVIL (High Volume)
  // Pillar: /personal/ (FIXED from /personal-documents/)
  // ========================================
  {
    id: 'personal',
    label: 'Personal Documents',
    href: '/personal/',  // FIXED: Changed from /personal-documents/
    children: [
      { label: 'Personal Documents Hub', href: '/personal/', badge: 'HUB' },
      
      // Vital Records cluster
      { label: 'Vital Records', href: '/personal/vital-records/' },
      { label: 'Birth Certificate', href: '/personal/vital-records/birth/' },
      { label: 'Marriage Certificate', href: '/personal/vital-records/marriage/' },
      { label: 'Divorce Certificate', href: '/personal/vital-records/divorce/' },
      { label: 'Death Certificate', href: '/personal/vital-records/death/' },
      
      // Immigration cluster
      { label: 'Visa & Immigration', href: '/personal/immigration/' },
      { label: 'Police Clearance (PCC)', href: '/personal/immigration/pcc/' },
      { label: 'Bank Statements', href: '/personal/immigration/bank/' },
      { label: 'Driving License', href: '/personal/immigration/license/' },
      
      // Academic cluster
      { label: 'Academic Documents', href: '/personal/academic/' },
      { label: 'University Degree', href: '/personal/education/degree/' },  // KEPT: Matches actual file
      { label: 'Transcripts', href: '/personal/academic/transcripts/' },
    ],
    headers: [
      { index: 0, label: 'Expat Document Services' },
      { index: 1, label: 'Vital Records' },
      { index: 6, label: 'Immigration' },
      { index: 10, label: 'Academic' },
    ],
    dividers: [0, 5, 9],
  },
  
  // ========================================
  // SILO 3: ATTESTATION (Country-specific)
  // Pillar: /services/attestation/
  // ========================================
  {
    id: 'attestation',
    label: 'Attestation',
    href: '/services/attestation/',
    children: [
      { label: 'Attestation Guide', href: '/services/attestation/', badge: 'HUB' },
      
      // Country-specific
      { label: '🇮🇳 India Attestation', href: '/services/attestation/india/' },
      { label: '🇬🇧 UK Attestation', href: '/services/attestation/uk/' },
      { label: '🇺🇸 US Attestation', href: '/services/attestation/us/' },
      { label: '🇵🇭 Philippines', href: '/services/attestation/philippines/' },
      { label: '🇵🇰 Pakistan', href: '/services/attestation/pakistan/' },
      
      // Process types
      { label: 'MOFA Attestation', href: '/services/attestation/mofa/' },
      { label: 'Embassy Legalization', href: '/services/attestation/embassy/' },
      { label: 'Apostille Services', href: '/services/attestation/apostille/' },
    ],
    headers: [
      { index: 0, label: 'Attestation Services' },
      { index: 1, label: 'By Country' },
      { index: 6, label: 'By Process' },
    ],
    dividers: [0, 5],
  },
  
  // ========================================
  // SILO 4: SPECIALIZED (Niche B2B)
  // Pillar: /specialized-translation/
  // ========================================
  {
    id: 'specialized',
    label: 'Specialized',
    href: '/specialized-translation/',
    children: [
      { label: 'Specialized Services', href: '/specialized-translation/', badge: 'HUB' },
      
      // Industry verticals
      { label: 'Medical Reports', href: '/specialized/medical/' },
      { label: 'Technical Manuals', href: '/specialized/technical/' },
      { label: 'Menu Translation', href: '/specialized/hospitality/' },
      { label: 'Website Localization', href: '/specialized/digital/' },
      
      // High-value packages
      { label: 'Golden Visa Package', href: '/services/golden-visa-translation/', badge: 'POPULAR' },
    ],
    headers: [
      { index: 0, label: 'Technical Translation' },
      { index: 1, label: 'Industry Verticals' },
      { index: 5, label: 'Packages' },
    ],
    dividers: [0, 4],
  },
  
  // ========================================
  // SILO 5: LOCATIONS (Geo-targeting)
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
      { label: 'Dubai Marina', href: '/locations/dubai/marina/' },
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
  // SILO 6: RESOURCES (Support Content)
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
// MOBILE NAVIGATION
// ============================================

export const mobileNav = {
  home: { label: 'Home', href: '/', icon: 'fas fa-home' },
  
  accordions: [
    {
      id: 'legal',
      label: 'Legal Translation',
      href: '/legal-translation-dubai/',
      children: [
        { label: 'Legal Translation Hub', href: '/legal-translation-dubai/' },
        { label: 'Contract Translation', href: '/legal/contracts/' },
        { label: 'NDA Translation', href: '/legal/contracts/nda/' },
        { label: 'MOA Translation', href: '/legal/corporate/moa/' },
        { label: 'Power of Attorney', href: '/legal/corporate/poa/' },
        { label: 'Court Documents', href: '/legal/litigation/' },
        { label: 'Will Translation', href: '/legal/wills/' },
      ],
    },
    {
      id: 'personal',
      label: 'Personal Documents',
      href: '/personal/',  // FIXED
      children: [
        { label: 'Personal Docs Hub', href: '/personal/' },
        { label: 'Birth Certificate', href: '/personal/vital-records/birth/' },
        { label: 'Marriage Certificate', href: '/personal/vital-records/marriage/' },
        { label: 'University Degree', href: '/personal/education/degree/' },
        { label: 'Police Clearance', href: '/personal/immigration/pcc/' },
        { label: 'Bank Statement', href: '/personal/immigration/bank/' },
        { label: 'Driving License', href: '/personal/immigration/license/' },
      ],
    },
    {
      id: 'attestation',
      label: 'Attestation Services',
      href: '/services/attestation/',
      children: [
        { label: 'Attestation Guide', href: '/services/attestation/' },
        { label: 'India Attestation', href: '/services/attestation/india/' },
        { label: 'UK Attestation', href: '/services/attestation/uk/' },
        { label: 'US Attestation', href: '/services/attestation/us/' },
        { label: 'MOFA Attestation', href: '/services/attestation/mofa/' },
      ],
    },
    {
      id: 'specialized',
      label: 'Specialized & Packages',
      href: '/specialized-translation/',
      children: [
        { label: 'Golden Visa Package', href: '/services/golden-visa-translation/' },
        { label: 'Medical Reports', href: '/specialized/medical/' },
        { label: 'Technical Manuals', href: '/specialized/technical/' },
        { label: 'Corporate Translation', href: '/services/corporate-translation/' },
      ],
    },
    {
      id: 'locations',
      label: 'Locations',
      href: '/locations/',
      children: [
        { label: 'Dubai', href: '/locations/dubai/' },
        { label: 'Palm Jumeirah', href: '/locations/dubai/palm-jumeirah/' },
        { label: 'DIFC', href: '/locations/dubai/difc/' },
        { label: 'Abu Dhabi', href: '/locations/abu-dhabi/' },
      ],
    },
    {
      id: 'resources',
      label: 'Resources',
      href: '/resources/',
      children: [
        { label: 'Pricing Guide', href: '/resources/pricing-guide/' },
        { label: 'Document Checklist', href: '/resources/document-checklist/' },
        { label: 'FAQ', href: '/resources/faq/' },
      ],
    },
  ],
  
  singleLinks: [
    { label: 'About & Licensing', href: '/about/', icon: 'fas fa-building' },
    { label: 'Contact Us', href: '/contact/', icon: 'fas fa-envelope' },
  ],
};

// ============================================
// FOOTER NAVIGATION
// ============================================

export const footerNav = {
  quickLinks: [
    { label: 'Home', href: '/' },
    { label: 'Legal Translation', href: '/legal-translation-dubai/' },
    { label: 'Personal Documents', href: '/personal/' },
    { label: 'Attestation', href: '/services/attestation/' },
    { label: 'Locations', href: '/locations/' },
    { label: 'About', href: '/about/' },
    { label: 'Contact', href: '/contact/' },
  ],
  
  popularServices: [
    { label: 'Golden Visa Translation', href: '/services/golden-visa-translation/' },
    { label: 'Birth Certificate', href: '/personal/vital-records/birth/' },
    { label: 'Marriage Certificate', href: '/personal/vital-records/marriage/' },
    { label: 'University Degree', href: '/personal/education/degree/' },
    { label: 'Power of Attorney', href: '/legal/corporate/poa/' },
    { label: 'India Attestation', href: '/services/attestation/india/' },
  ],
  
  legal: [
    { label: 'Privacy Policy', href: '/privacy/' },
    { label: 'Terms of Service', href: '/terms/' },
  ],
};

// ============================================
// HELPER FUNCTIONS
// ============================================

export const isNavGroup = (item: NavLink | NavGroup): item is NavGroup => {
  return 'children' in item && Array.isArray(item.children);
};

export const getNavGroup = (id: string): NavGroup | undefined => {
  return mainNav.find((item): item is NavGroup => 
    'id' in item && item.id === id
  );
};

export const getAllLinks = (): string[] => {
  const links: string[] = [];
  
  mainNav.forEach(item => {
    links.push(item.href);
    if (isNavGroup(item)) {
      item.children.forEach(child => links.push(child.href));
    }
  });
  
  links.push('/contact/');
  
  return [...new Set(links)];
};

// ============================================
// PAGE STATUS TRACKER (UPDATED)
// ============================================

export const pageStatus = {
  pillars: {
    '/legal-translation-dubai/': '✅',
    '/personal/': '✅',
    '/services/attestation/': '✅',
    '/specialized-translation/': '❌',  // NEEDS CREATION
    '/locations/': '✅',
    '/resources/': '✅',
  },
  
  hubs: {
    '/legal/contracts/': '❌',          // NEEDS CREATION
    '/legal/corporate/': '✅',
    '/legal/litigation/': '✅',
    '/personal/vital-records/': '❌',   // NEEDS CREATION
    '/personal/immigration/': '❌',     // NEEDS CREATION
    '/personal/academic/': '❌',        // NEEDS CREATION
  },
  
  missing: [
    // Silo 4 Pillar
    '/specialized-translation/',
    
    // Hub Pages
    '/personal/vital-records/',
    '/personal/immigration/',
    '/personal/academic/',
    '/legal/contracts/',
    
    // Attestation Pages
    '/services/attestation/mofa/',
    '/services/attestation/embassy/',
    '/services/attestation/apostille/',
    '/services/attestation/philippines/',
    '/services/attestation/pakistan/',
    
    // Contract Pages
    '/legal/contracts/spa/',
    '/legal/contracts/mou/',
    '/legal/contracts/lease/',
    
    // Corporate/Litigation Pages
    '/legal/corporate/resolution/',
    '/legal/litigation/verdict/',
    '/legal/litigation/arbitration/',
    
    // Specialized Pages
    '/specialized/technical/',
    '/specialized/hospitality/',
    '/specialized/digital/',
    
    // Location Pages
    '/locations/dubai/marina/',
  ],
};

// ============================================
// SEARCH QUICK LINKS
// ============================================

export const searchQuickLinks: NavLink[] = [
  { label: 'Golden Visa', href: '/services/golden-visa-translation/' },
  { label: 'Birth Certificate', href: '/personal/vital-records/birth/' },
  { label: 'Legal Translation', href: '/legal-translation-dubai/' },
  { label: 'India Attestation', href: '/services/attestation/india/' },
  { label: 'Pricing', href: '/resources/pricing-guide/' },
];
