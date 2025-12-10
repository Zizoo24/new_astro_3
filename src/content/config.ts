// src/content/config.ts
import { defineCollection, z } from 'astro:content';

// ----- About sections schemas -----
const introWithImageSection = z.object({
  type: z.literal('introWithImage'),
  heading: z.string(),
  p1: z.string(),
  p2: z.string().optional(),
  features: z.array(
    z.object({
      label: z.string(),
      text: z.string(),
    })
  ),
  image: z.string(),
  imageAlt: z.string(),
});

const licensingSection = z.object({
  type: z.literal('licensing'),
  sectionLabel: z.string(),
  sectionTitle: z.string(),
  mojLabel: z.string(),
  mojTitle: z.string(),
  mojSubtitle: z.string(),
  note: z.string(),
});

const authorityLogosSection = z.object({
  type: z.literal('authorityLogos'),
  title: z.string(),
});

const valuesSection = z.object({
  type: z.literal('values'),
  sectionLabel: z.string(),
  sectionTitle: z.string(),
  items: z.array(
    z.object({
      title: z.string(),
      text: z.string(),
    })
  ),
});

const ctaSection = z.object({
  type: z.literal('cta'),
  heading: z.string(),
  body: z.string(),
  buttonLabel: z.string(),
  buttonUrl: z.string(),
});

const aboutSection = z.discriminatedUnion('type', [
  introWithImageSection,
  licensingSection,
  authorityLogosSection,
  valuesSection,
  ctaSection,
]);

// ----- Collections -----

// Core pages: home, about, etc.
const core = defineCollection({
  type: 'content',
  schema: z.object({
    // Home-style fields (keep your home page working)
    hero_title: z.string().optional(),
    hero_image: z.string().optional(),

    // Generic SEO + hero
    pageTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    heroHeading: z.string().optional(),
    heroSubheading: z.string().optional(),
    heroLead: z.string().optional(),

    // About modules
    sections: z.array(aboutSection).optional(),

    // Optional fallback markdown
    body: z.string().optional(),
  }),
});

// Services pages
const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
    body: z.string().optional(),
  }),
});

// Industries pages
const industries = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    body: z.string().optional(),
  }),
});

// Locations pages
const locations = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    body: z.string().optional(),
  }),
});

// Specialized pages (e.g. medical)
const specialized = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    body: z.string().optional(),
  }),
});

// Settings: navigation etc.
const settings = defineCollection({
  type: 'data',
  schema: z
    .object({
      logoText: z.string().optional(),
      links: z
        .array(
          z.object({
            label: z.string(),
            href: z.string(),
          })
        )
        .optional(),
      ctaLabel: z.string().optional(),
      ctaHref: z.string().optional(),
    })
    .partial(),
});

export const collections = {
  core,
  services,
  industries,
  locations,
  specialized,
  settings,
};
