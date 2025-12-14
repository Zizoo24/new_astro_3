// src/content/config.ts
import { defineCollection, z } from 'astro:content';

// =============================================
// SHARED SCHEMAS (reusable across collections)
// =============================================

const ctaButtonSchema = z.object({
  label: z.string(),
  url: z.string(),
});

const bulletItemSchema = z.object({
  icon: z.string().optional(),
  text: z.string(),
});

// =============================================
// HOMEPAGE SCHEMA (core/home.md)
// =============================================

const heroSchema = z.object({
  titleLine: z.string(),
  lead: z.string(),
  image: z.string(),
  bullets: z.array(bulletItemSchema).optional(),
  primaryCta: ctaButtonSchema.optional(),
  secondaryCta: ctaButtonSchema.optional(),
});

const overlapCardSchema = z.object({
  icon: z.string(),
  title: z.string(),
  desc: z.string(),
  badge: z.string().optional().default(''),
  url: z.string(),
});

const iosBlockSchema = z.object({
  label: z.string(),
  title: z.string(),
  body: z.string(),
  // Support both nested objects and flat properties for backward compatibility
  whatsapp: ctaButtonSchema.optional(),
  whatsappLabel: z.string().optional(),
  whatsappUrl: z.string().optional(),
  imessage: ctaButtonSchema.optional(),
  imessageLabel: z.string().optional(),
  imessageUrl: z.string().optional(),
  expressCard: z.object({
    title: z.string(),
    text: z.string(),
    url: z.string(),
    linkLabel: z.string(),
  }).optional(),
});

const serviceItemSchema = z.object({
  href: z.string(),
  image: z.string(),
  imageAlt: z.string(),
  heading: z.string(),
  text: z.string(),
});

const servicesSectionSchema = z.object({
  label: z.string(),
  title: z.string(),
  items: z.array(serviceItemSchema),
});

const metricSchema = z.object({
  value: z.string(),
  label: z.string(),
  note: z.string().optional(),
});

// Specialist card bullets/tags can be strings or objects
const specialistBulletSchema = z.union([
  z.string(),
  z.object({ bullet: z.string() }),
]);

const specialistTagSchema = z.union([
  z.string(),
  z.object({ tag: z.string() }),
]);

const specialistCardSchema = z.object({
  href: z.string(),
  icon: z.string(),
  title: z.string(),
  bullets: z.array(specialistBulletSchema),
  tags: z.array(specialistTagSchema),
});

const specialistsSectionSchema = z.object({
  label: z.string(),
  title: z.string(),
  cards: z.array(specialistCardSchema),
});

const faqItemSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

const faqSectionSchema = z.object({
  label: z.string(),
  title: z.string(),
  items: z.array(faqItemSchema),
});

const ctaBannerSchema = z.object({
  title: z.string(),
  body: z.string(),
  buttonLabel: z.string(),
  buttonUrl: z.string(),
});

const contactSectionSchema = z.object({
  label: z.string(),
  title: z.string(),
  description: z.string(),
  namePlaceholder: z.string().optional(),
  emailPlaceholder: z.string().optional(),
  phonePlaceholder: z.string().optional(),
  messagePlaceholder: z.string().optional(),
});

// Full homepage schema - STRICT to prevent matching about.md
const homePageSchema = z.object({
  // SEO
  pageTitle: z.string(),
  metaDescription: z.string(),

  // Hero section
  hero: heroSchema.optional(),

  // Trust/overlap cards below hero
  overlapCards: z.array(overlapCardSchema).optional(),

  // iOS-specific concierge block
  iosBlock: iosBlockSchema.optional(),

  // Services grid section
  servicesSection: servicesSectionSchema.optional(),

  // Metrics strip
  metrics: z.array(metricSchema).optional(),

  // Specialists/practice areas section
  specialistsSection: specialistsSectionSchema.optional(),

  // FAQ accordion section
  faqSection: faqSectionSchema.optional(),

  // CTA banner
  ctaBanner: ctaBannerSchema.optional(),

  // Contact form section
  contactSection: contactSectionSchema.optional(),
}).strict(); // STRICT MODE - fails if extra keys like heroHeading exist

// =============================================
// ABOUT PAGE SCHEMA (core/about.md)
// =============================================

const introSection = z.object({
  type: z.literal('intro'),
  heading: z.string(),
  paragraphs: z.array(z.string()),
  features: z.array(z.object({
    label: z.string(),
    text: z.string(),
  })).optional(),
});

const introWithImageSection = z.object({
  type: z.literal('introWithImage'),
  heading: z.string(),
  p1: z.string(),
  p2: z.string().optional(),
  features: z.array(z.object({
    label: z.string(),
    text: z.string(),
  })),
  image: z.string(),
  imageAlt: z.string(),
});

const heroSection = z.object({
  type: z.literal('hero'),
  title: z.string(),
  subtitle: z.string().optional(),
  lead: z.string().optional(),
});

const licensingSection = z.object({
  type: z.literal('licensing'),
  dul: z.object({
    badgeLabel: z.string(),
    badgeTitle: z.string(),
    badgeSubtitle: z.string(),
    linkUrl: z.string(),
  }).optional(),
  moj: z.object({
    badgeLabel: z.string(),
    badgeTitle: z.string(),
    badgeSubtitle: z.string(),
  }).optional(),
  note: z.string().optional(),
  // Legacy flat fields for backward compatibility
  sectionLabel: z.string().optional(),
  sectionTitle: z.string().optional(),
  mojLabel: z.string().optional(),
  mojTitle: z.string().optional(),
  mojSubtitle: z.string().optional(),
});

const authorityStripSection = z.object({
  type: z.literal('authority-strip'),
  title: z.string(),
  items: z.array(z.object({
    logo: z.string(),
    name: z.string(),
  })).optional(),
});

const authorityLogosSection = z.object({
  type: z.literal('authorityLogos'),
  title: z.string(),
});

const valuesSection = z.object({
  type: z.literal('values'),
  label: z.string().optional(),
  title: z.string().optional(),
  sectionLabel: z.string().optional(),
  sectionTitle: z.string().optional(),
  cards: z.array(z.object({
    icon: z.string().optional(),
    title: z.string(),
    text: z.string(),
  })).optional(),
  items: z.array(z.object({
    title: z.string(),
    text: z.string(),
  })).optional(),
});

const ctaSection = z.object({
  type: z.literal('cta'),
  title: z.string().optional(),
  heading: z.string().optional(),
  body: z.string(),
  buttonLabel: z.string(),
  buttonUrl: z.string(),
});

const missionSection = z.object({
  type: z.literal('mission'),
  sectionLabel: z.string(),
  sectionTitle: z.string(),
  statement: z.string(),
  vision: z.string().optional(),
});

const languagesSection = z.object({
  type: z.literal('languages'),
  sectionLabel: z.string(),
  sectionTitle: z.string(),
  intro: z.string(),
  languages: z.array(z.object({
    name: z.string(),
    pairs: z.array(z.string()),
  })),
});

const historySection = z.object({
  type: z.literal('history'),
  sectionLabel: z.string(),
  sectionTitle: z.string(),
  timeline: z.array(z.object({
    year: z.string(),
    title: z.string(),
    description: z.string(),
  })),
});

const aboutSection = z.discriminatedUnion('type', [
  heroSection,
  introSection,
  introWithImageSection,
  licensingSection,
  authorityStripSection,
  authorityLogosSection,
  valuesSection,
  ctaSection,
  missionSection,
  languagesSection,
  historySection,
]);

// About page schema - has heroHeading which home doesn't have
const aboutPageSchema = z.object({
  pageTitle: z.string(),
  metaDescription: z.string(),
  heroHeading: z.string().optional(),
  heroSubheading: z.string().optional(),
  heroLead: z.string().optional(),
  sections: z.array(aboutSection).optional(),
});

// =============================================
// CORE COLLECTION (home + about + future pages)
// =============================================

const core = defineCollection({
  type: 'content',
  schema: z.union([homePageSchema, aboutPageSchema]).or(
    // Fallback for any core page with basic fields
    z.object({
      pageTitle: z.string().optional(),
      metaDescription: z.string().optional(),
      hero_title: z.string().optional(),
      hero_image: z.string().optional(),
      heroHeading: z.string().optional(),
      heroSubheading: z.string().optional(),
      heroLead: z.string().optional(),
      sections: z.array(aboutSection).optional(),
      body: z.string().optional(),
    }).passthrough()
  ),
});

// =============================================
// SERVICES COLLECTION
// =============================================

const services = defineCollection({
  type: 'content',
  schema: z.object({
    // SEO
    pageTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    
    // Basic fields
    title: z.string(),
    slug: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    
    // Hero
    heroHeading: z.string().optional(),
    heroSubheading: z.string().optional(),
    heroLead: z.string().optional(),
    heroImage: z.string().optional(),
    
    // Content sections (future CMS-ification)
    features: z.array(z.object({
      icon: z.string().optional(),
      title: z.string(),
      text: z.string(),
    })).optional(),
    
    faq: z.array(faqItemSchema).optional(),
    
    // CTA
    ctaTitle: z.string().optional(),
    ctaBody: z.string().optional(),
    ctaButtonLabel: z.string().optional(),
    ctaButtonUrl: z.string().optional(),
    
    body: z.string().optional(),
  }),
});

// =============================================
// INDUSTRIES COLLECTION
// =============================================

const industries = defineCollection({
  type: 'content',
  schema: z.object({
    pageTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    title: z.string(),
    slug: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    heroHeading: z.string().optional(),
    heroSubheading: z.string().optional(),
    features: z.array(z.object({
      icon: z.string().optional(),
      title: z.string(),
      text: z.string(),
    })).optional(),
    body: z.string().optional(),
  }),
});

// =============================================
// LOCATIONS COLLECTION
// =============================================

const locations = defineCollection({
  type: 'content',
  schema: z.object({
    pageTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    title: z.string(),
    slug: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    heroHeading: z.string().optional(),
    heroSubheading: z.string().optional(),
    address: z.string().optional(),
    phone: z.string().optional(),
    whatsapp: z.string().optional(),
    mapUrl: z.string().optional(),
    features: z.array(z.object({
      icon: z.string().optional(),
      title: z.string(),
      text: z.string(),
    })).optional(),
    nearbyLandmarks: z.array(z.string()).optional(),
    body: z.string().optional(),
  }),
});

// =============================================
// SPECIALIZED COLLECTION (medical, technical, etc.)
// =============================================

const specialized = defineCollection({
  type: 'content',
  schema: z.object({
    pageTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    title: z.string(),
    slug: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    heroHeading: z.string().optional(),
    heroSubheading: z.string().optional(),
    features: z.array(z.object({
      icon: z.string().optional(),
      title: z.string(),
      text: z.string(),
    })).optional(),
    body: z.string().optional(),
  }),
});

// =============================================
// SETTINGS COLLECTION (navigation, site config)
// =============================================

const settings = defineCollection({
  type: 'data',
  schema: z.object({
    logoText: z.string().optional(),
    links: z.array(z.object({
      label: z.string(),
      href: z.string(),
    })).optional(),
    ctaLabel: z.string().optional(),
    ctaHref: z.string().optional(),
  }).passthrough(),
});

// =============================================
// BLOG COLLECTION
// =============================================

const blogAuthorSchema = z.object({
  name: z.string(),
  title: z.string().optional(),
  avatar: z.string().optional(),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    // Required fields
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),

    // Optional metadata
    updatedDate: z.coerce.date().optional(),
    author: blogAuthorSchema.optional(),

    // Categorization (aligned with silos)
    category: z.enum([
      'legal-translation',
      'personal-documents',
      'attestation',
      'golden-visa',
      'corporate',
      'industry-insights',
      'how-to-guides',
      'news'
    ]),
    tags: z.array(z.string()).optional(),

    // SEO
    keywords: z.string().optional(),
    canonicalUrl: z.string().optional(),

    // Display
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),

    // Related content
    relatedServices: z.array(z.string()).optional(), // pageKeys from serviceLinks
    relatedPosts: z.array(z.string()).optional(), // slugs of related posts
  }),
});

// =============================================
// EXPORT COLLECTIONS
// =============================================

export const collections = {
  core,
  services,
  industries,
  locations,
  specialized,
  settings,
  blog,
};