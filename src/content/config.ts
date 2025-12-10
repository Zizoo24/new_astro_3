// src/content/config.ts
import { defineCollection, z } from 'astro:content';

/**
 * Reusable section schema for the About page (and other core pages later if you want).
 * This is a discriminated union on "type" so each section has its own shape.
 */
const sectionSchema = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('introWithImage'),
    heading: z.string(),
    p1: z.string(),
    p2: z.string().optional(),
    features: z
      .array(
        z.object({
          label: z.string(),
          text: z.string(),
        })
      )
      .default([]),
    image: z.string(),
    imageAlt: z.string(),
  }),

  z.object({
    type: z.literal('licensing'),
    sectionLabel: z.string(),
    sectionTitle: z.string(),
    mojLabel: z.string(),
    mojTitle: z.string(),
    mojSubtitle: z.string(),
    note: z.string(),
  }),

  z.object({
    type: z.literal('authorityLogos'),
    title: z.string(),
  }),

  z.object({
    type: z.literal('values'),
    sectionLabel: z.string(),
    sectionTitle: z.string(),
    items: z
      .array(
        z.object({
          title: z.string(),
          text: z.string(),
        })
      )
      .default([]),
  }),

  z.object({
    type: z.literal('cta'),
    heading: z.string(),
    body: z.string(),
    buttonLabel: z.string(),
    buttonUrl: z.string(),
  }),
]);

/**
 * CORE collection
 * - Used for: home.md, about.md, and any other “core” pages.
 * - Many fields are optional so home/about can coexist under the same schema.
 */
const core = defineCollection({
  type: 'content',
  schema: z.object({
    // About-style SEO fields
    pageTitle: z.string().optional(),
    metaDescription: z.string().optional(),

    // Hero fields (used by About, can also be used by Home)
    heroHeading: z.string().optional(),
    heroSubheading: z.string().optional(),
    heroLead: z.string().optional(),

    // Old home fields (from CMS: hero_title / hero_image)
    hero_title: z.string().optional(),
    hero_image: z.string().optional(),

    // Modular sections (About page, and possibly others)
    sections: z.array(sectionSchema).default([]).optional(),
  }),
});

/**
 * SERVICES collection
 * - Folder: src/content/services
 * - Fields aligned with Netlify CMS:
 *   Title (required), Hero Image (optional), Body (markdown)
 */
const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
    body: z.string().optional(),
  }),
});

/**
 * INDUSTRIES collection
 * - Folder: src/content/industries
 * - Simple text pages: title + markdown body.
 */
const industries = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    body: z.string().optional(),
  }),
});

/**
 * LOCATIONS collection
 * - Folder: src/content/locations
 * - Simple text pages: city name (title) + body.
 */
const locations = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    body: z.string().optional(),
  }),
});

/**
 * SPECIALIZED collection
 * - Folder: src/content/specialized
 * - For things like medical.md etc.
 * - "title" is required (this resolves your earlier error about medical.md missing title).
 */
const specialized = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // You can add more fields here if you want:
    // slug, summary, image, etc.
    summary: z.string().optional(),
    body: z.string().optional(),
  }),
});

export const collections = {
  core,
  services,
  industries,
  locations,
  specialized,
};
