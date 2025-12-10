import { defineCollection, z } from 'astro:content';

// Define the core collection (home, about pages)
const coreCollection = defineCollection({
  type: 'content',
  schema: z.object({
    pageTitle: z.string(),
    metaDescription: z.string(),
    heroHeading: z.string(),
    heroSubheading: z.string().optional(),
    heroLead: z.string().optional(),
    body: z.string().optional(),
  }),
});

// Define services collection
const servicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z.string(),
    slug: z.string().optional(),
  }),
});

// Define industries collection
const industriesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
});

// Define locations collection
const locationsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
});

// Define specialized collection
const specializedCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

// Export collections
export const collections = {
  'core': coreCollection,
  'services': servicesCollection,
  'industries': industriesCollection,
  'locations': locationsCollection,
  'specialized': specializedCollection,
};
