/**
 * OnlineTranslation.ae Arabic Navigation Data
 * Porto-style 3-level dropdown structure - Arabic Version
 *
 * Based on Master Strategic Blueprint 6-silo architecture
 * Following ARABIC_WRITING_STYLE_GUIDE.md standards:
 * - Formal "أنتم" form
 * - No superlatives (أفضل، الأول، رائد)
 * - Professional MSA tone
 *
 * URL Pattern: /ar/[english-slug]/
 * All Arabic pages live under /ar/ prefix for cleaner URLs
 */

import type { MainNavItem, NavItem, NavCategory, NavDropdown } from './navigation-porto';

// ===========================================
// ARABIC NAVIGATION DATA
// ===========================================

export const mainNavigationAr: MainNavItem[] = [
  // ─────────────────────────────────────────
  // LEGAL & CORPORATE SILO
  // ─────────────────────────────────────────
  {
    label: 'قانونية',
    href: '/ar/legal-translation-dubai/',
    dropdown: {
      label: 'الترجمة القانونية والشركات',
      href: '/ar/legal-translation-dubai/',
      categories: [
        {
          header: 'الترجمة القانونية',
          items: [
            {
              label: 'مركز الترجمة القانونية',
              href: '/ar/legal-translation-dubai/',
              icon: 'fas fa-gavel',
              description: 'ترجمة قانونية معتمدة من وزارة العدل'
            },
            {
              label: 'العقود',
              href: '/ar/legal/contracts/',
              icon: 'fas fa-file-contract',
              children: [
                { label: 'ترجمة اتفاقية عدم الإفصاح', href: '/ar/legal/contracts/nda/' },
                { label: 'عقد البيع والشراء', href: '/ar/legal/contracts/spa/', badge: 'new' },
                { label: 'ترجمة مذكرة التفاهم', href: '/ar/legal/contracts/mou/' },
                { label: 'عقود الإيجار التجاري', href: '/ar/legal/contracts/lease/' }
              ]
            },
            {
              label: 'وثائق الشركات',
              href: '/ar/legal/corporate/',
              icon: 'fas fa-building',
              children: [
                { label: 'ترجمة عقد التأسيس', href: '/ar/legal/corporate/moa/' },
                { label: 'قرارات مجلس الإدارة', href: '/ar/legal/corporate/resolution/', badge: 'new' },
                { label: 'التوكيل الرسمي', href: '/ar/legal/corporate/poa/' }
              ]
            },
            {
              label: 'وثائق المحاكم',
              href: '/ar/legal/litigation/',
              icon: 'fas fa-balance-scale',
              children: [
                { label: 'أحكام المحاكم', href: '/ar/legal/litigation/verdict/' },
                { label: 'قرارات التحكيم', href: '/ar/legal/litigation/arbitration/' }
              ]
            }
          ]
        },
        {
          header: 'خدمات قانونية متخصصة',
          items: [
            {
              label: 'ترجمة الوصايا',
              href: '/ar/legal/wills/',
              icon: 'fas fa-scroll',
              badge: 'express'
            }
          ]
        }
      ],
      footerLink: {
        label: 'عرض جميع الخدمات القانونية',
        href: '/ar/legal-translation-dubai/'
      }
    }
  },

  // ─────────────────────────────────────────
  // PERSONAL DOCUMENTS SILO
  // ─────────────────────────────────────────
  {
    label: 'الوثائق',
    href: '/ar/personal-documents/',
    dropdown: {
      label: 'الوثائق الشخصية والمدنية',
      href: '/ar/personal-documents/',
      categories: [
        {
          header: 'خدمات الوثائق',
          items: [
            {
              label: 'مركز الوثائق الشخصية',
              href: '/ar/personal-documents/',
              icon: 'fas fa-folder-open',
            },
            {
              label: 'السجلات الحيوية',
              href: '/ar/personal/vital-records/',
              icon: 'fas fa-heart',
              children: [
                { label: 'شهادة الميلاد', href: '/ar/personal/vital-records/birth/', badge: 'popular' },
                { label: 'عقد الزواج', href: '/ar/personal/vital-records/marriage/' },
                { label: 'شهادة الطلاق', href: '/ar/personal/vital-records/divorce/' },
                { label: 'شهادة الوفاة', href: '/ar/personal/vital-records/death/' }
              ]
            },
            {
              label: 'وثائق الهجرة',
              href: '/ar/personal/immigration/',
              icon: 'fas fa-passport',
              children: [
                { label: 'شهادة حسن السيرة', href: '/ar/personal/immigration/pcc/', badge: 'popular' },
                { label: 'كشوفات البنك', href: '/ar/personal/immigration/bank/' },
                { label: 'رخصة القيادة', href: '/ar/personal/immigration/license/' }
              ]
            },
            {
              label: 'الوثائق الأكاديمية',
              href: '/ar/personal/academic/',
              icon: 'fas fa-graduation-cap',
              children: [
                { label: 'الشهادة الجامعية', href: '/ar/personal/academic/degree/' },
                { label: 'كشف الدرجات', href: '/ar/personal/academic/transcripts/' }
              ]
            }
          ]
        }
      ],
      footerLink: {
        label: 'عرض جميع الوثائق الشخصية',
        href: '/ar/personal-documents/'
      }
    }
  },

  // ─────────────────────────────────────────
  // ATTESTATION SILO
  // ─────────────────────────────────────────
  {
    label: 'التصديق',
    href: '/ar/services/attestation/',
    dropdown: {
      label: 'التصديق والتوثيق',
      href: '/ar/services/attestation/',
      categories: [
        {
          header: 'تصديق حسب الدولة',
          items: [
            {
              label: 'مركز التصديق',
              href: '/ar/services/attestation/',
              icon: 'fas fa-stamp',
            },
            {
              label: 'تصديق الشهادات الهندية',
              href: '/ar/services/attestation/india/',
              icon: 'fas fa-flag',
              badge: 'popular'
            },
            {
              label: 'تصديق الوثائق البريطانية',
              href: '/ar/services/attestation/uk/',
              icon: 'fas fa-flag'
            },
            {
              label: 'تصديق الوثائق الأمريكية',
              href: '/ar/services/attestation/us/',
              icon: 'fas fa-flag'
            }
          ]
        },
        {
          header: 'خدمات خاصة',
          items: [
            {
              label: 'وثائق الفيزا الذهبية',
              href: '/ar/services/golden-visa-translation/',
              icon: 'fas fa-star',
              badge: 'hot'
            }
          ]
        }
      ],
      footerLink: {
        label: 'عرض جميع خدمات التصديق',
        href: '/ar/services/attestation/'
      }
    }
  },

  // ─────────────────────────────────────────
  // SPECIALIZED TRANSLATION SILO
  // ─────────────────────────────────────────
  {
    label: 'متخصصة',
    href: '/ar/specialized-translation/',
    dropdown: {
      label: 'خدمات الترجمة المتخصصة',
      href: '/ar/specialized-translation/',
      categories: [
        {
          header: 'خبرة قطاعية',
          items: [
            {
              label: 'مركز الترجمة المتخصصة',
              href: '/ar/specialized-translation/',
              icon: 'fas fa-cogs',
            },
            {
              label: 'الترجمة الطبية',
              href: '/ar/specialized/medical/',
              icon: 'fas fa-heartbeat',
              badge: 'express'
            },
            {
              label: 'الترجمة التقنية',
              href: '/ar/specialized/technical/',
              icon: 'fas fa-tools',
              badge: 'new'
            },
            {
              label: 'ترجمة الضيافة',
              href: '/ar/specialized/hospitality/',
              icon: 'fas fa-concierge-bell',
              badge: 'new'
            },
            {
              label: 'المحتوى الرقمي',
              href: '/ar/specialized/digital/',
              icon: 'fas fa-globe',
              badge: 'new'
            }
          ]
        }
      ],
      footerLink: {
        label: 'عرض جميع الخدمات المتخصصة',
        href: '/ar/specialized-translation/'
      }
    }
  },

  // ─────────────────────────────────────────
  // LOCATIONS SILO
  // ─────────────────────────────────────────
  {
    label: 'المواقع',
    href: '/ar/locations/',
    dropdown: {
      label: 'مواقع الخدمة',
      href: '/ar/locations/',
      categories: [
        {
          header: 'مواقع دبي',
          items: [
            {
              label: 'جميع المواقع',
              href: '/ar/locations/',
              icon: 'fas fa-map-marker-alt',
            },
            {
              label: 'نخلة جميرا',
              href: '/ar/locations/dubai/palm-jumeirah/',
              icon: 'fas fa-palm-tree'
            },
            {
              label: 'أبراج بحيرات جميرا',
              href: '/ar/locations/dubai/jlt/',
              icon: 'fas fa-building'
            },
            {
              label: 'الخليج التجاري',
              href: '/ar/locations/dubai/business-bay/',
              icon: 'fas fa-building'
            },
            {
              label: 'مركز دبي المالي العالمي',
              href: '/ar/locations/dubai/difc/',
              icon: 'fas fa-landmark'
            },
            {
              label: 'دبي مارينا',
              href: '/ar/locations/dubai/marina/',
              icon: 'fas fa-ship',
              badge: 'new'
            }
          ]
        },
        {
          header: 'الإمارات الأخرى',
          items: [
            {
              label: 'أبوظبي',
              href: '/ar/locations/abu-dhabi/',
              icon: 'fas fa-mosque'
            },
            {
              label: 'الشارقة',
              href: '/ar/locations/sharjah/',
              icon: 'fas fa-city'
            }
          ]
        }
      ],
      footerLink: {
        label: 'ابحثوا عن أقرب موقع',
        href: '/ar/locations/'
      }
    }
  },

  // ─────────────────────────────────────────
  // RESOURCES SILO
  // ─────────────────────────────────────────
  {
    label: 'الموارد',
    href: '/ar/resources/',
    dropdown: {
      label: 'الأدلة والموارد',
      href: '/ar/resources/',
      categories: [
        {
          header: 'أدلة مفيدة',
          items: [
            {
              label: 'مركز الموارد',
              href: '/ar/resources/',
              icon: 'fas fa-book-open',
            },
            {
              label: 'المدونة',
              href: '/ar/blog/',
              icon: 'fas fa-rss',
              badge: 'new'
            },
            {
              label: 'دليل الترجمة المعتمدة',
              href: '/ar/resources/moj-vs-certified/',
              icon: 'fas fa-balance-scale',
              children: [
                { label: 'الترجمة الموثقة', href: '/ar/resources/authenticated-translation/' }
              ]
            },
            {
              label: 'دليل الأسعار',
              href: '/ar/resources/pricing-guide/',
              icon: 'fas fa-tags'
            },
            {
              label: 'قائمة الوثائق المطلوبة',
              href: '/ar/resources/document-checklist/',
              icon: 'fas fa-tasks'
            },
            {
              label: 'دليل التصديق',
              href: '/ar/resources/attestation-guide/',
              icon: 'fas fa-clipboard-list'
            },
            {
              label: 'قائمة الفيزا الذهبية',
              href: '/ar/resources/golden-visa-checklist/',
              icon: 'fas fa-check-double',
              badge: 'popular'
            }
          ]
        },
        {
          header: 'الدعم',
          items: [
            {
              label: 'الأسئلة الشائعة',
              href: '/ar/resources/faq/',
              icon: 'fas fa-question-circle'
            },
            {
              label: 'تواصلوا معنا',
              href: '/ar/contact/',
              icon: 'fas fa-envelope'
            }
          ]
        }
      ],
      footerLink: {
        label: 'تصفحوا جميع الموارد',
        href: '/ar/resources/'
      }
    }
  }
];

// ===========================================
// ARABIC SITE CONTACT INFO
// ===========================================

export const siteContactAr = {
  phone: '+971 50 862 0217',
  phoneDisplay: '+971 50 862 0217',
  email: 'info@onlinetranslation.ae',
  whatsapp: 'https://wa.me/971508620217',
  address: 'نخلة جميرا، دبي، الإمارات العربية المتحدة',
};

// ===========================================
// ARABIC UI LABELS
// ===========================================

export const uiLabelsAr = {
  // Header
  topBarHours: 'يومياً: ٨:٠٠ صباحاً - ١٠:٠٠ مساءً',
  search: 'بحث',
  toggleTheme: 'تبديل الوضع الليلي',
  openMenu: 'فتح القائمة',
  closeMenu: 'إغلاق القائمة',
  
  // Footer
  quickLinks: 'روابط سريعة',
  popularServices: 'الخدمات الشائعة',
  contactUs: 'تواصلوا معنا',
  followUs: 'تابعونا',
  copyright: '© ٢٠٢٦ OnlineTranslation.ae. جميع الحقوق محفوظة.',
  privacyPolicy: 'سياسة الخصوصية',
  termsOfService: 'شروط الخدمة',
  
  // Common CTAs (formal أنتم form)
  sendDocuments: 'أرسلوا الوثائق',
  getQuote: 'احصلوا على عرض سعر',
  contactWhatsApp: 'تواصلوا عبر واتساب',
  learnMore: 'اعرفوا المزيد',
  viewAll: 'عرض الكل',
  
  // Badges
  badgeNew: 'جديد',
  badgePopular: 'شائع',
  badgeHot: 'مميز',
  badgeExpress: 'سريع',
  
  // Navigation
  home: 'الرئيسية',
  back: 'رجوع',
  
  // Language
  switchToEnglish: 'English',
  switchToArabic: 'العربية',
};

// ===========================================
// ARABIC FOOTER NAVIGATION
// ===========================================

export const footerNavAr = {
  quickLinks: [
    { label: 'الرئيسية', href: '/ar/' },
    { label: 'الترجمة القانونية', href: '/ar/legal-translation-dubai/' },
    { label: 'الوثائق الشخصية', href: '/ar/personal-documents/' },
    { label: 'التصديق', href: '/ar/services/attestation/' },
    { label: 'من نحن', href: '/ar/about/' },
    { label: 'المواقع', href: '/ar/locations/' },
    { label: 'تواصلوا معنا', href: '/ar/contact/' },
  ],
  
  popularServices: [
    { label: 'ترجمة الفيزا الذهبية', href: '/ar/services/golden-visa-translation/' },
    { label: 'شهادة الميلاد', href: '/ar/personal/vital-records/birth/' },
    { label: 'عقد الزواج', href: '/ar/personal/vital-records/marriage/' },
    { label: 'الشهادة الجامعية', href: '/ar/personal/academic/degree/' },
    { label: 'التوكيل الرسمي', href: '/ar/legal/corporate/poa/' },
    { label: 'تصديق الشهادات الهندية', href: '/ar/services/attestation/india/' },
  ],
  
  legal: [
    { label: 'سياسة الخصوصية', href: '/ar/privacy/' },
    { label: 'شروط الخدمة', href: '/ar/terms/' },
  ],
};

// ===========================================
// URL MAPPING (English <-> Arabic)
// ===========================================

/**
 * Maps English URLs to Arabic URLs
 * Used by language switcher component
 */
export const urlMapEnToAr: Record<string, string> = {
  '/': '/ar/',
  '/legal-translation-dubai/': '/ar/legal-translation-dubai/',
  '/personal-documents/': '/ar/personal-documents/',
  '/services/attestation/': '/ar/services/attestation/',
  '/specialized-translation/': '/ar/specialized-translation/',
  '/locations/': '/ar/locations/',
  '/resources/': '/ar/resources/',
  '/contact/': '/ar/contact/',
  '/about/': '/ar/about/',
  '/blog/': '/ar/blog/',
  // Add more mappings as pages are created
};

/**
 * Get Arabic URL for a given English URL
 * Falls back to /ar/ if no specific mapping exists
 */
export function getArabicUrl(englishUrl: string): string {
  // If already an Arabic URL, return as-is
  if (englishUrl.startsWith('/ar/') || englishUrl.startsWith('/عربي/')) {
    return englishUrl;
  }
  
  // Check for exact mapping
  if (urlMapEnToAr[englishUrl]) {
    return urlMapEnToAr[englishUrl];
  }
  
  // Generate Arabic URL by prepending /ar/
  return '/ar' + (englishUrl.startsWith('/') ? englishUrl : '/' + englishUrl);
}

/**
 * Get English URL for a given Arabic URL
 */
export function getEnglishUrl(arabicUrl: string): string {
  // Handle /عربي/ prefix (legacy)
  if (arabicUrl.startsWith('/عربي/')) {
    return arabicUrl.replace('/عربي/', '/');
  }
  
  // Handle /ar/ prefix
  if (arabicUrl.startsWith('/ar/')) {
    return arabicUrl.replace('/ar/', '/');
  }
  
  // Handle bare /ar
  if (arabicUrl === '/ar') {
    return '/';
  }
  
  return arabicUrl;
}

// ===========================================
// UTILITY FUNCTIONS
// ===========================================

/**
 * Get all Arabic navigation items as flat array
 */
export function getFlatNavItemsAr(): Array<{ label: string; href: string; level: number }> {
  const items: Array<{ label: string; href: string; level: number }> = [];

  mainNavigationAr.forEach(item => {
    if (item.isButton) return;

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
