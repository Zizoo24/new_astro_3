/**
 * OnlineTranslation.ae - Navigation Single Source of Truth
 * =========================================================
 * All navigation links for Header, MobileShell, Footer, and internal linking.
 * Update this file to change navigation across the entire site.
 * 
 * @file src/data/navigation.ts
 */

// ============================================
// Types
// ============================================

export interface NavLink {
  label: string;
  href: string;
  icon?: string;           // FontAwesome class (e.g., 'fas fa-home')
  description?: string;    // For SEO/tooltips
}

export interface NavGroup {
  id: string;              // Unique identifier for accordion/dropdown
  label: string;
  href: string;            // Parent link (e.g., /services/)
  icon?: string;
  children: NavLink[];
  dividers?: number[];     // Indices after which to insert dividers
  headers?: { index: number; label: string }[]; // Section headers
}

export interface SiteContact {
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  email: string;
  address: string;
  hours: string;
}

// ============================================
// Site Contact Information
// ============================================

export const siteContact: SiteContact = {
  phone: '+971508620217',
  phoneDisplay: '+971 50 862 0217',
  whatsapp: 'https://wa.me/971508620217',
  email: 'info@onlinetranslation.ae',
  address: 'Palm Jumeirah, Dubai, UAE',
  hours: 'Daily: 8:00 AM - 10:00 PM'
};

// ============================================
// Social Links
// ============================================

export const socialLinks = [
  { platform: 'whatsapp', url: siteContact.whatsapp, icon: 'fab fa-whatsapp' },
  { platform: 'facebook', url: 'https://www.facebook.com/DXBTranslate/', icon: 'fab fa-facebook-f' },
  { platform: 'instagram', url: 'https://www.instagram.com/onlinetranslation.ae', icon: 'fab fa-instagram' },
  { platform: 'linkedin', url: 'https://www.linkedin.com/company/online-translation-agency-dubai/', icon: 'fab fa-linkedin-in' }
];

// ============================================
// Main Navigation Structure
// ============================================

export const mainNav: (NavLink | NavGroup)[] = [
  {
    label: 'Home',
    href: '/',
    icon: 'fas fa-home'
  },
  {
    id: 'services',
    label: 'Services',
    href: '/services/',
    icon: 'fas fa-file-alt',
    headers: [
      { index: 0, label: 'Translation Services' },
      { index: 5, label: 'Vital Records' },
      { index: 9, label: 'Academic & Immigration' },
      { index: 14, label: 'Legal & Commercial' }
    ],
    dividers: [4, 8, 13],
    children: [
      // Translation Services
      { label: 'Legal Translation', href: '/services/legal-translation/' },
      { label: 'Certificate Translation', href: '/services/certificate-translation/' },
      { label: 'Corporate Translation', href: '/services/corporate-translation/' },
      { label: 'Golden Visa', href: '/services/golden-visa-translation/' },
      { label: 'Attestation & MOFAIC', href: '/services/attestation/' },
      // Vital Records
      { label: 'Birth Certificate', href: '/personal/vital-records/birth/' },
      { label: 'Marriage Certificate', href: '/personal/vital-records/marriage/' },
      { label: 'Death Certificate', href: '/personal/vital-records/death/' },
      { label: 'Divorce Certificate', href: '/personal/vital-records/divorce/' },
      // Academic & Immigration
      { label: 'University Degree', href: '/personal/education/degree/' },
      { label: 'Academic Transcripts', href: '/personal/academic/transcripts/' },
      { label: 'Police Clearance (PCC)', href: '/personal/immigration/pcc/' },
      { label: 'Driving License', href: '/personal/immigration/license/' },
      { label: 'Bank Statements', href: '/personal/immigration/bank/' },
      // Legal & Commercial
      { label: 'Power of Attorney', href: '/legal/corporate/poa/' },
      { label: 'Memorandum of Association', href: '/legal/corporate/moa/' },
      { label: 'NDA Translation', href: '/legal/contracts/nda/' },
      { label: 'Medical Reports', href: '/specialized/medical/' }
    ]
  },
  {
    id: 'locations',
    label: 'Locations',
    href: '/locations/',
    icon: 'fas fa-map-marker-alt',
    children: [
      { label: 'Dubai (All Areas)', href: '/locations/dubai/' },
      { label: 'Palm Jumeirah', href: '/locations/dubai/palm-jumeirah/' },
      { label: 'JLT & DMCC', href: '/locations/dubai/jlt/' },
      { label: 'DIFC', href: '/locations/dubai/difc/' },
      { label: 'Business Bay', href: '/locations/dubai/business-bay/' },
      { label: 'Abu Dhabi', href: '/locations/abu-dhabi/' },
      { label: 'Sharjah', href: '/locations/sharjah/' }
    ]
  },
  {
    id: 'industries',
    label: 'Industries',
    href: '/industries/',
    icon: 'fas fa-building',
    children: [
      { label: 'Legal & Law Firms', href: '/industries/legal/' },
      { label: 'Healthcare', href: '/industries/healthcare/' },
      { label: 'Real Estate', href: '/industries/real-estate/' },
      { label: 'E-Commerce', href: '/industries/e-commerce/' }
    ]
  },
  {
    id: 'resources',
    label: 'Resources',
    href: '/resources/',
    icon: 'fas fa-book',
    children: [
      { label: 'FAQ', href: '/resources/faq/' },
      { label: 'Pricing Guide', href: '/resources/pricing-guide/' },
      { label: 'Document Checklist', href: '/resources/document-checklist/' },
      { label: 'Attestation Guide', href: '/resources/attestation-guide/' },
      { label: 'Golden Visa Checklist', href: '/resources/golden-visa-checklist/' }
    ]
  },
  {
    label: 'About',
    href: '/about/',
    icon: 'fas fa-info-circle'
  }
];

// ============================================
// Mobile-Specific Navigation
// (Restructured for accordion UI)
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
        { label: 'Corporate Translation', href: '/services/corporate-translation/' }
      ]
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
        { label: 'Driving License', href: '/personal/immigration/license/' }
      ]
    },
    {
      id: 'corporate',
      label: 'Corporate Documents',
      href: '/legal/',
      children: [
        { label: 'Power of Attorney', href: '/legal/corporate/poa/' },
        { label: 'Memorandum of Association', href: '/legal/corporate/moa/' },
        { label: 'NDA Translation', href: '/legal/contracts/nda/' }
      ]
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
        { label: 'Sharjah', href: '/locations/sharjah/' }
      ]
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
        { label: 'Golden Visa Checklist', href: '/resources/golden-visa-checklist/' }
      ]
    }
  ],
  
  singleLinks: [
    { label: 'About & Licensing', href: '/about/', icon: 'fas fa-info-circle' },
    { label: 'Contact Us', href: '/contact/', icon: 'fas fa-envelope' }
  ]
};

// ============================================
// Footer Navigation
// ============================================

export const footerNav = {
  quickLinks: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services/' },
    { label: 'Locations', href: '/locations/' },
    { label: 'About & Licensing', href: '/about/' },
    { label: 'FAQ', href: '/resources/faq/' },
    { label: 'Contact', href: '/contact/' }
  ],
  
  services: [
    { label: 'Legal Translation', href: '/services/legal-translation/' },
    { label: 'Golden Visa Translation', href: '/services/golden-visa-translation/' },
    { label: 'Attestation & MOFAIC', href: '/services/attestation/' },
    { label: 'Corporate Translation', href: '/services/corporate-translation/' },
    { label: 'Certificate Translation', href: '/services/certificate-translation/' }
  ],
  
  legal: [
    { label: 'Privacy Policy', href: '/privacy/' },
    { label: 'Terms of Service', href: '/terms/' }
  ]
};

// ============================================
// Search Quick Links
// ============================================

export const searchQuickLinks = [
  { label: 'Golden Visa', href: '/services/golden-visa-translation/' },
  { label: 'Legal Translation', href: '/services/legal-translation/' },
  { label: 'Attestation', href: '/services/attestation/' },
  { label: 'Pricing', href: '/resources/pricing-guide/' }
];

// ============================================
// Service Links (for internal linking in content)
// Backwards-compatible with existing serviceLinks.ts
// ============================================

export const serviceLinks = {
  // Core Services
  legalTranslation: {
    url: '/services/legal-translation/',
    text: 'legal translation',
    full: 'legal translation services'
  },
  certificateTranslation: {
    url: '/services/certificate-translation/',
    text: 'certificate translation',
    full: 'certificate translation services'
  },
  corporateTranslation: {
    url: '/services/corporate-translation/',
    text: 'corporate translation',
    full: 'corporate translation services'
  },
  goldenVisa: {
    url: '/services/golden-visa-translation/',
    text: 'Golden Visa translation',
    full: 'Golden Visa document translation'
  },
  attestation: {
    url: '/services/attestation/',
    text: 'attestation',
    full: 'attestation and MOFAIC services'
  },
  
  // Vital Records
  birthCertificate: {
    url: '/personal/vital-records/birth/',
    text: 'birth certificate translation',
    full: 'birth certificate translation services'
  },
  marriageCertificate: {
    url: '/personal/vital-records/marriage/',
    text: 'marriage certificate translation',
    full: 'marriage certificate translation services'
  },
  divorceCertificate: {
    url: '/personal/vital-records/divorce/',
    text: 'divorce certificate translation',
    full: 'divorce certificate translation services'
  },
  deathCertificate: {
    url: '/personal/vital-records/death/',
    text: 'death certificate translation',
    full: 'death certificate translation services'
  },
  
  // Academic
  degree: {
    url: '/personal/education/degree/',
    text: 'degree translation',
    full: 'degree certificate translation'
  },
  transcripts: {
    url: '/personal/academic/transcripts/',
    text: 'transcript translation',
    full: 'academic transcript translation'
  },
  
  // Immigration
  pcc: {
    url: '/personal/immigration/pcc/',
    text: 'police clearance translation',
    full: 'police clearance certificate (PCC) translation'
  },
  drivingLicense: {
    url: '/personal/immigration/license/',
    text: 'driving license translation',
    full: 'driving license translation services'
  },
  bankStatement: {
    url: '/personal/immigration/bank/',
    text: 'bank statement translation',
    full: 'bank statement translation services'
  },
  
  // Legal Documents
  poa: {
    url: '/legal/corporate/poa/',
    text: 'Power of Attorney translation',
    full: 'Power of Attorney (POA) translation'
  },
  moa: {
    url: '/legal/corporate/moa/',
    text: 'Memorandum of Association translation',
    full: 'Memorandum of Association (MOA) translation'
  },
  nda: {
    url: '/legal/contracts/nda/',
    text: 'NDA translation',
    full: 'Non-Disclosure Agreement translation'
  },
  
  // Locations
  palmJumeirah: {
    url: '/locations/dubai/palm-jumeirah/',
    text: 'Palm Jumeirah',
    full: 'legal translation in Palm Jumeirah'
  },
  difc: {
    url: '/locations/dubai/difc/',
    text: 'DIFC',
    full: 'legal translation in DIFC'
  },
  jlt: {
    url: '/locations/dubai/jlt/',
    text: 'JLT',
    full: 'legal translation in JLT'
  },
  businessBay: {
    url: '/locations/dubai/business-bay/',
    text: 'Business Bay',
    full: 'legal translation in Business Bay'
  },
  abuDhabi: {
    url: '/locations/abu-dhabi/',
    text: 'Abu Dhabi',
    full: 'legal translation in Abu Dhabi'
  },
  sharjah: {
    url: '/locations/sharjah/',
    text: 'Sharjah',
    full: 'legal translation in Sharjah'
  }
};

// ============================================
// Helper Functions
// ============================================

/**
 * Create an anchor tag from a service link key
 */
export const makeLink = (key: keyof typeof serviceLinks, useFullText = false): string => {
  const link = serviceLinks[key];
  const text = useFullText ? link.full : link.text;
  return `<a href="${link.url}">${text}</a>`;
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
 * Check if a NavItem is a NavGroup (has children)
 */
export const isNavGroup = (item: NavLink | NavGroup): item is NavGroup => {
  return 'children' in item && Array.isArray(item.children);
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
// Backwards Compatibility Exports
// ============================================

// For Footer.astro compatibility
export const footerServices = footerNav.services.map(s => ({
  url: s.href,
  text: s.label
}));

// Related services groups (for internal linking)
export const relatedServices = {
  personal: [
    serviceLinks.birthCertificate,
    serviceLinks.marriageCertificate,
    serviceLinks.divorceCertificate,
    serviceLinks.deathCertificate,
    serviceLinks.degree,
    serviceLinks.transcripts,
    serviceLinks.pcc,
    serviceLinks.drivingLicense,
    serviceLinks.bankStatement
  ],
  legal: [
    serviceLinks.legalTranslation,
    serviceLinks.poa,
    serviceLinks.moa,
    serviceLinks.nda
  ],
  corporate: [
    serviceLinks.corporateTranslation,
    serviceLinks.moa,
    serviceLinks.poa,
    serviceLinks.nda
  ],
  immigration: [
    serviceLinks.goldenVisa,
    serviceLinks.pcc,
    serviceLinks.birthCertificate,
    serviceLinks.marriageCertificate,
    serviceLinks.degree
  ]
};
