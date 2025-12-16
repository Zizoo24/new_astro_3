/**
 * OnlineTranslation.ae Navigation Data
 * Porto-style 3-level dropdown structure
 *
 * Based on Master Strategic Blueprint 6-silo architecture
 */

// ===========================================
// TYPE DEFINITIONS
// ===========================================

export interface NavItem {
  label: string;
  href: string;
  icon?: string;           // Font Awesome class
  badge?: 'new' | 'express' | 'popular' | 'hot';
  description?: string;    // For mega menu tooltips
  isHeader?: boolean;      // Section header (non-clickable)
  children?: NavItem[];    // Level 3 flyout items
}

export interface NavCategory {
  header?: string;         // Section header text
  items: NavItem[];
}

export interface NavDropdown {
  label: string;           // Dropdown title
  href: string;            // Link to hub page
  categories: NavCategory[];
  footerLink?: {
    label: string;
    href: string;
  };
}

export interface MainNavItem {
  label: string;
  href: string;
  icon?: string;
  dropdown?: NavDropdown;
  isButton?: boolean;      // For CTA buttons
  buttonClass?: string;
}

// ===========================================
// NAVIGATION DATA
// ===========================================

export const mainNavigation: MainNavItem[] = [
  // ─────────────────────────────────────────
  // LEGAL & CORPORATE SILO
  // ─────────────────────────────────────────
  {
    label: 'Legal',
    href: '/legal-translation-dubai/',
    dropdown: {
      label: 'Legal & Corporate Translation',
      href: '/legal-translation-dubai/',
      categories: [
        {
          header: 'Legal Translation',
          items: [
            {
              label: 'Legal Translation Hub',
              href: '/legal-translation-dubai/',
              icon: 'fas fa-gavel',
              description: 'MOJ-certified legal document translation'
            },
            {
              label: 'Contracts',
              href: '/legal/contracts/',
              icon: 'fas fa-file-contract',
              children: [
                { label: 'NDA Translation', href: '/legal/contracts/nda/' },
                { label: 'Sales Purchase Agreement', href: '/legal/contracts/spa/', badge: 'new' },
                { label: 'MOU Translation', href: '/legal/contracts/mou/' },
                { label: 'Commercial Leases', href: '/legal/contracts/lease/' }
              ]
            },
            {
              label: 'Corporate Documents',
              href: '/legal/corporate/',
              icon: 'fas fa-building',
              children: [
                { label: 'MOA Translation', href: '/legal/corporate/moa/' },
                { label: 'Board Resolutions', href: '/legal/corporate/resolution/', badge: 'new' },
                { label: 'Power of Attorney', href: '/legal/corporate/poa/' }
              ]
            },
            {
              label: 'Court Documents',
              href: '/legal/litigation/',
              icon: 'fas fa-balance-scale',
              children: [
                { label: 'Court Verdicts', href: '/legal/litigation/verdict/' },
                { label: 'Arbitration Awards', href: '/legal/litigation/arbitration/' }
              ]
            }
          ]
        },
        {
          header: 'Specialized Legal',
          items: [
            {
              label: 'Will Translation',
              href: '/legal/wills/',
              icon: 'fas fa-scroll',
              badge: 'express'
            }
          ]
        }
      ],
      footerLink: {
        label: 'View all legal services',
        href: '/legal-translation-dubai/'
      }
    }
  },

  // ─────────────────────────────────────────
  // PERSONAL DOCUMENTS SILO
  // ─────────────────────────────────────────
  {
    label: 'Documents',
    href: '/personal-documents/',
    dropdown: {
      label: 'Personal & Civil Documents',
      href: '/personal-documents/',
      categories: [
        {
          header: 'Vital Records',
          items: [
            {
              label: 'Vital Records',
              href: '/personal/vital-records/',
              icon: 'fas fa-heart',
              children: [
                { label: 'Birth Certificate', href: '/personal/vital-records/birth/', badge: 'popular' },
                { label: 'Marriage Certificate', href: '/personal/vital-records/marriage/' },
                { label: 'Divorce Certificate', href: '/personal/vital-records/divorce/' },
                { label: 'Death Certificate', href: '/personal/vital-records/death/' }
              ]
            }
          ]
        },
        {
          header: 'Immigration Documents',
          items: [
            {
              label: 'Immigration',
              href: '/personal/immigration/',
              icon: 'fas fa-passport',
              children: [
                { label: 'Police Clearance (PCC)', href: '/personal/immigration/pcc/', badge: 'popular' },
                { label: 'Bank Statements', href: '/personal/immigration/bank/' },
                { label: 'Driving License', href: '/personal/immigration/license/' }
              ]
            }
          ]
        },
        {
          header: 'Academic Documents',
          items: [
            {
              label: 'Academic',
              href: '/personal/academic/',
              icon: 'fas fa-graduation-cap',
              children: [
                { label: 'Degree Translation', href: '/personal/academic/degree/' },
                { label: 'Transcripts', href: '/personal/academic/transcripts/' }
              ]
            }
          ]
        }
      ],
      footerLink: {
        label: 'View all personal documents',
        href: '/personal-documents/'
      }
    }
  },

  // ─────────────────────────────────────────
  // ATTESTATION SILO
  // ─────────────────────────────────────────
  {
    label: 'Attestation',
    href: '/services/attestation/',
    dropdown: {
      label: 'Attestation & Legalization',
      href: '/services/attestation/',
      categories: [
        {
          header: 'Country-Specific',
          items: [
            {
              label: 'By Country',
              href: '/services/attestation/',
              icon: 'fas fa-stamp',
              children: [
                { label: 'India Attestation', href: '/services/attestation/india/', badge: 'popular' },
                { label: 'UK Attestation', href: '/services/attestation/uk/' },
                { label: 'US Attestation', href: '/services/attestation/us/' },
                { label: 'Philippines', href: '/services/attestation/philippines/' },
                { label: 'Pakistan', href: '/services/attestation/pakistan/' }
              ]
            }
          ]
        },
        {
          header: 'Special Services',
          items: [
            {
              label: 'Premium',
              href: '/services/golden-visa-translation/',
              icon: 'fas fa-star',
              badge: 'hot',
              children: [
                { label: 'Golden Visa Docs', href: '/services/golden-visa-translation/' },
                { label: 'Embassy Attestation', href: '/services/embassy-attestation/' },
                { label: 'Apostille Service', href: '/services/apostille/' }
              ]
            }
          ]
        }
      ],
      footerLink: {
        label: 'View all attestation services',
        href: '/services/attestation/'
      }
    }
  },

  // ─────────────────────────────────────────
  // SPECIALIZED TRANSLATION SILO
  // ─────────────────────────────────────────
  {
    label: 'Specialized',
    href: '/specialized-translation/',
    dropdown: {
      label: 'Specialized Translation Services',
      href: '/specialized-translation/',
      categories: [
        {
          header: 'Industry Expertise',
          items: [
            {
              label: 'Medical',
              href: '/specialized/medical/',
              icon: 'fas fa-heartbeat',
              badge: 'express',
              children: [
                { label: 'Medical Reports', href: '/specialized/medical/reports/' },
                { label: 'Prescriptions', href: '/specialized/medical/prescriptions/' },
                { label: 'Clinical Trials', href: '/specialized/medical/clinical/' }
              ]
            },
            {
              label: 'Technical',
              href: '/specialized/technical/',
              icon: 'fas fa-tools',
              badge: 'new',
              children: [
                { label: 'Engineering Docs', href: '/specialized/technical/engineering/' },
                { label: 'Manuals', href: '/specialized/technical/manuals/' },
                { label: 'Patents', href: '/specialized/technical/patents/' }
              ]
            },
            {
              label: 'Business',
              href: '/specialized/business/',
              icon: 'fas fa-briefcase',
              children: [
                { label: 'Hospitality', href: '/specialized/hospitality/' },
                { label: 'Digital Content', href: '/specialized/digital/' },
                { label: 'Financial', href: '/specialized/financial/' }
              ]
            }
          ]
        }
      ],
      footerLink: {
        label: 'View all specialized services',
        href: '/specialized-translation/'
      }
    }
  },

  // ─────────────────────────────────────────
  // LOCATIONS SILO
  // ─────────────────────────────────────────
  {
    label: 'Locations',
    href: '/locations/',
    dropdown: {
      label: 'Service Locations',
      href: '/locations/',
      categories: [
        {
          header: 'Dubai',
          items: [
            {
              label: 'Dubai',
              href: '/locations/dubai/',
              icon: 'fas fa-map-marker-alt',
              children: [
                { label: 'Palm Jumeirah', href: '/locations/dubai/palm-jumeirah/' },
                { label: 'JLT', href: '/locations/dubai/jlt/' },
                { label: 'Business Bay', href: '/locations/dubai/business-bay/' },
                { label: 'DIFC', href: '/locations/dubai/difc/' },
                { label: 'Dubai Marina', href: '/locations/dubai/marina/', badge: 'new' },
                { label: 'Deira', href: '/locations/dubai/deira/' }
              ]
            }
          ]
        },
        {
          header: 'Other Emirates',
          items: [
            {
              label: 'Abu Dhabi',
              href: '/locations/abu-dhabi/',
              icon: 'fas fa-mosque',
              children: [
                { label: 'Downtown', href: '/locations/abu-dhabi/downtown/' },
                { label: 'Yas Island', href: '/locations/abu-dhabi/yas/' }
              ]
            },
            {
              label: 'Northern',
              href: '/locations/northern/',
              icon: 'fas fa-city',
              children: [
                { label: 'Sharjah', href: '/locations/sharjah/' },
                { label: 'Ajman', href: '/locations/ajman/' },
                { label: 'RAK', href: '/locations/rak/' }
              ]
            }
          ]
        }
      ],
      footerLink: {
        label: 'Find nearest location',
        href: '/locations/'
      }
    }
  },

  // ─────────────────────────────────────────
  // RESOURCES SILO
  // ─────────────────────────────────────────
  {
    label: 'Resources',
    href: '/resources/',
    dropdown: {
      label: 'Guides & Resources',
      href: '/resources/',
      categories: [
        {
          header: 'Guides',
          items: [
            {
              label: 'Guides',
              href: '/resources/',
              icon: 'fas fa-book-open',
              children: [
                { label: 'MOJ vs Certified', href: '/resources/moj-vs-certified/' },
                { label: 'Pricing Guide', href: '/resources/pricing-guide/' },
                { label: 'Document Checklist', href: '/resources/document-checklist/' },
                { label: 'Attestation Guide', href: '/resources/attestation-guide/' },
                { label: 'Golden Visa Checklist', href: '/resources/golden-visa-checklist/', badge: 'popular' }
              ]
            },
            {
              label: 'Blog',
              href: '/blog/',
              icon: 'fas fa-rss',
              badge: 'new'
            }
          ]
        },
        {
          header: 'Support',
          items: [
            {
              label: 'Help',
              href: '/resources/faq/',
              icon: 'fas fa-question-circle',
              children: [
                { label: 'FAQ', href: '/resources/faq/' },
                { label: 'Contact Us', href: '/contact/' },
                { label: 'Get Quote', href: '/quote/' }
              ]
            }
          ]
        }
      ],
      footerLink: {
        label: 'Browse all resources',
        href: '/resources/'
      }
    }
  }
];

// ===========================================
// UTILITY FUNCTIONS
// ===========================================

/**
 * Get all navigation items as flat array (for sitemap, search, etc.)
 */
export function getFlatNavItems(): Array<{ label: string; href: string; level: number }> {
  const items: Array<{ label: string; href: string; level: number }> = [];

  mainNavigation.forEach(item => {
    if (item.isButton) return; // Skip CTA buttons

    items.push({ label: item.label, href: item.href, level: 1 });

    if (item.dropdown) {
      item.dropdown.categories.forEach(category => {
        category.items.forEach(subItem => {
          items.push({ label: subItem.label, href: subItem.href, level: 2 });

          if (subItem.children) {
            subItem.children.forEach(child => {
              items.push({ label: child.label, href: child.href, level: 3 });
            });
          }
        });
      });
    }
  });

  return items;
}

/**
 * Find navigation item by href
 */
export function findNavItemByHref(href: string): MainNavItem | NavItem | undefined {
  for (const item of mainNavigation) {
    if (item.href === href) return item;

    if (item.dropdown) {
      for (const category of item.dropdown.categories) {
        for (const subItem of category.items) {
          if (subItem.href === href) return subItem;

          if (subItem.children) {
            const child = subItem.children.find(c => c.href === href);
            if (child) return child;
          }
        }
      }
    }
  }
  return undefined;
}

/**
 * Get breadcrumb trail for a given href
 */
export function getBreadcrumbs(href: string): Array<{ label: string; href: string }> {
  const breadcrumbs: Array<{ label: string; href: string }> = [
    { label: 'Home', href: '/' }
  ];

  for (const item of mainNavigation) {
    if (item.isButton) continue;

    if (item.href === href) {
      breadcrumbs.push({ label: item.label, href: item.href });
      return breadcrumbs;
    }

    if (item.dropdown) {
      for (const category of item.dropdown.categories) {
        for (const subItem of category.items) {
          if (subItem.href === href) {
            breadcrumbs.push({ label: item.label, href: item.href });
            breadcrumbs.push({ label: subItem.label, href: subItem.href });
            return breadcrumbs;
          }

          if (subItem.children) {
            const child = subItem.children.find(c => c.href === href);
            if (child) {
              breadcrumbs.push({ label: item.label, href: item.href });
              breadcrumbs.push({ label: subItem.label, href: subItem.href });
              breadcrumbs.push({ label: child.label, href: child.href });
              return breadcrumbs;
            }
          }
        }
      }
    }
  }

  return breadcrumbs;
}
