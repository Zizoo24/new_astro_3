/**
 * navigation.ts - Single Source of Truth for All Navigation
 * 
 * This file controls:
 * - Desktop header dropdown (Header.astro)
 * - Mobile sidebar accordion (MobileShell.astro)
 * - Footer links (Footer.astro)
 * 
 * UPDATED: Added Will Translation + India/UK/US Attestation pages
 */

// ============================================
// TYPE DEFINITIONS
// ============================================

export interface NavLink {
  label: string;
  href: string;
  icon?: string;
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
  { platform: 'whatsapp', url: 'https://wa.me/971508620217', icon: 'whatsapp', label: 'WhatsApp' },
  { platform: 'facebook', url: 'https://facebook.com/onlinetranslationae', icon: 'facebook', label: 'Facebook' },
  { platform: 'instagram', url: 'https://instagram.com/onlinetranslationae', icon: 'instagram', label: 'Instagram' },
  { platform: 'linkedin', url: 'https://linkedin.com/company/onlinetranslationae', icon: 'linkedin', label: 'LinkedIn' },
];

// ============================================
// MAIN NAVIGATION (Desktop Header)
// ============================================

export const mainNav: (NavLink | NavGroup)[] = [
  { label: 'Home', href: '/' },
  {
    id: 'services',
    label: 'Services',
    href: '/services/',
    children: [
      // Translation Services (index 0-4)
      { label: 'Legal Translation', href: '/services/legal-translation/' },
      { label: 'Certificate Translation', href: '/services/certificate-translation/' },
      { label: 'Corporate Translation', href: '/services/corporate-translation/' },
      { label: 'Golden Visa', href: '/services/golden-visa-translation/' },
      { label: 'Attestation & MOFAIC', href: '/services/attestation/' },
      
      // Vital Records (index 5-8)
      { label: 'Birth Certificate', href: '/personal/vital-records/birth/' },
      { label: 'Marriage Certificate', href: '/personal/vital-records/marriage/' },
      { label: 'Death Certificate', href: '/personal/vital-records/death/' },
      { label: 'Divorce Certificate', href: '/personal/vital-records/divorce/' },
      
      // Academic & Immigration (index 9-13)
      { label: 'University Degree', href: '/personal/education/degree/' },
      { label: 'Academic Transcripts', href: '/personal/academic/transcripts/' },
      { label: 'Police Clearance (PCC)', href: '/personal/immigration/pcc/' },
      { label: 'Driving License', href: '/personal/immigration/license/' },
      { label: 'Bank Statements', href: '/personal/immigration/bank/' },
      
      // Legal & Commercial (index 14-18)
      { label: 'Power of Attorney', href: '/legal/corporate/poa/' },
      { label: 'Memorandum of Association', href: '/legal/corporate/moa/' },
      { label: 'NDA Translation', href: '/legal/contracts/nda/' },
      { label: 'Medical Reports', href: '/specialized/medical/' },
      { label: 'Will Translation', href: '/legal/wills/' },  // ← NEW
      
      // Country Attestation (index 19-21)
      { label: 'India Attestation', href: '/services/attestation/india/' },  // ← NEW
      { label: 'UK Attestation', href: '/services/attestation/uk/' },        // ← NEW
      { label: 'US Attestation', href: '/services/attestation/us/' },        // ← NEW
    ],
    headers: [
      { index: 0, label: 'Translation Services' },
      { index: 5, label: 'Vital Records' },
      { index: 9, label: 'Academic & Immigration' },
      { index: 14, label: 'Legal & Commercial' },
      { index: 19, label: 'Country Attestation' },  // ← NEW HEADER
    ],
    dividers: [4, 8, 13, 18],  // Dividers after these indices
  },
  {
    id: 'locations',
    label: 'Locations',
    href: '/locations/',
    children: [
      { label: 'Dubai (All Areas)', href: '/locations/dubai/' },
      { label: 'Palm Jumeirah', href: '/locations/dubai/palm-jumeirah/' },
      { label: 'JLT & DMCC', href: '/locations/dubai/jlt/' },
      { label: 'DIFC', href: '/locations/dubai/difc/' },
      { label: 'Business Bay', href: '/locations/dubai/business-bay/' },
      { label: 'Abu Dhabi', href: '/locations/abu-dhabi/' },
      { label: 'Sharjah', href: '/locations/sharjah/' },
    ],
  },
  {
    id: 'industries',
    label: 'Industries',
    href: '/industries/',
    children: [
      { label: 'Legal & Law Firms', href: '/industries/legal/' },
      { label: 'Healthcare', href: '/industries/healthcare/' },
      { label: 'Real Estate', href: '/industries/real-estate/' },
      { label: 'E-Commerce', href: '/industries/e-commerce/' },
    ],
  },
  {
    id: 'resources',
    label: 'Resources',
    href: '/resources/',
    children: [
      { label: 'FAQ', href: '/resources/faq/' },
      { label: 'Pricing Guide', href: '/resources/pricing-guide/' },
      { label: 'Document Checklist', href: '/resources/document-checklist/' },
      { label: 'Attestation Guide', href: '/resources/attestation-guide/' },
      { label: 'Golden Visa Checklist', href: '/resources/golden-visa-checklist/' },
    ],
  },
  { label: 'About', href: '/about/' },
];

// ============================================
// MOBILE NAVIGATION (Sidebar)
// ============================================

export const mobileNav = {
  home: { label: 'Home', href: '/', icon: 'fas fa-home' },
  accordions: [
    {
      id: 'services',
      label: 'Services',
      href: '/services/',
      children: [
        { label: 'Legal Translation', href: '/services/legal-translation/' },
        { label: 'Golden Visa', href: '/services/golden-visa-translation/' },
        { label: 'Attestation & MOFAIC', href: '/services/attestation/' },
        { label: 'Certificate Translation', href: '/services/certificate-translation/' },
        { label: 'Corporate Translation', href: '/services/corporate-translation/' },
        { label: 'Will Translation', href: '/legal/wills/' },  // ← NEW
      ],
    },
    {
      id: 'personal',
      label: 'Personal Documents',
      href: '/personal/',
      children: [
        { label: 'Birth Certificate', href: '/personal/vital-records/birth/' },
        { label: 'Marriage Certificate', href: '/personal/vital-records/marriage/' },
        { label: 'Death Certificate', href: '/personal/vital-records/death/' },
        { label: 'Divorce Certificate', href: '/personal/vital-records/divorce/' },
        { label: 'University Degree', href: '/personal/education/degree/' },
        { label: 'Academic Transcripts', href: '/personal/academic/transcripts/' },
        { label: 'Police Clearance', href: '/personal/immigration/pcc/' },
        { label: 'Bank Statement', href: '/personal/immigration/bank/' },
        { label: 'Driving License', href: '/personal/immigration/license/' },
      ],
    },
    {
      id: 'corporate',
      label: 'Corporate Documents',
      href: '/legal/',
      children: [
        { label: 'Power of Attorney', href: '/legal/corporate/poa/' },
        { label: 'Memorandum of Association', href: '/legal/corporate/moa/' },
        { label: 'NDA Translation', href: '/legal/contracts/nda/' },
      ],
    },
    {
      id: 'attestation',  // ← NEW ACCORDION
      label: 'Attestation by Country',
      href: '/services/attestation/',
      children: [
        { label: 'India Attestation', href: '/services/attestation/india/' },
        { label: 'UK Attestation', href: '/services/attestation/uk/' },
        { label: 'US Attestation', href: '/services/attestation/us/' },
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
        { label: 'JLT & DMCC', href: '/locations/dubai/jlt/' },
        { label: 'Abu Dhabi', href: '/locations/abu-dhabi/' },
        { label: 'Sharjah', href: '/locations/sharjah/' },
      ],
    },
    {
      id: 'resources',
      label: 'Resources',
      href: '/resources/',
      children: [
        { label: 'FAQ', href: '/resources/faq/' },
        { label: 'Pricing Guide', href: '/resources/pricing-guide/' },
        { label: 'Document Checklist', href: '/resources/document-checklist/' },
        { label: 'Attestation Guide', href: '/resources/attestation-guide/' },
        { label: 'Golden Visa Checklist', href: '/resources/golden-visa-checklist/' },
      ],
    },
  ],
  singleLinks: [
    { label: 'About & Licensing', href: '/about/', icon: 'fas fa-building' },
    { label: 'Contact Us', href: '/contact/', icon: 'fas fa-envelope' },
  ],
};

// ============================================
// SEARCH QUICK LINKS
// ============================================

export const searchQuickLinks: NavLink[] = [
  { label: 'Golden Visa', href: '/services/golden-visa-translation/' },
  { label: 'Legal Translation', href: '/services/legal-translation/' },
  { label: 'Attestation', href: '/services/attestation/' },
  { label: 'Pricing', href: '/resources/pricing-guide/' },
];

// ============================================
// FOOTER NAVIGATION
// ============================================

export const footerNav = {
  quickLinks: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services/' },
    { label: 'Locations', href: '/locations/' },
    { label: 'About & Licensing', href: '/about/' },
    { label: 'FAQ', href: '/resources/faq/' },
    { label: 'Contact', href: '/contact/' },
  ],
  services: [
    { label: 'Legal Translation', href: '/services/legal-translation/' },
    { label: 'Golden Visa Translation', href: '/services/golden-visa-translation/' },
    { label: 'Attestation & MOFAIC', href: '/services/attestation/' },
    { label: 'Corporate Translation', href: '/services/corporate-translation/' },
    { label: 'Certificate Translation', href: '/services/certificate-translation/' },
    { label: 'Will Translation', href: '/legal/wills/' },  // ← NEW
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
// ============================================

// For any code still importing from old serviceLinks.ts
export const footerServices = footerNav.services.map(s => ({
  url: s.href,
  text: s.label
}));