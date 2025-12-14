import { defineConfig } from 'tinacms';

// ==================================================
// TINACMS CONFIGURATION
// Mirrors src/content/config.ts Zod schemas
// ==================================================

export default defineConfig({
  branch:
    process.env.TINA_BRANCH ||
    process.env.VERCEL_GIT_COMMIT_REF ||
    process.env.HEAD ||
    'main',

  clientId: process.env.TINA_CLIENT_ID || '',
  token: process.env.TINA_TOKEN || '',

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },

  media: {
    tina: {
      mediaRoot: 'assets/images',
      publicFolder: 'public',
    },
  },

  schema: {
    collections: [
      // ==================================================
      // CORE PAGES (Homepage, About)
      // ==================================================
      {
        name: 'core',
        label: 'Core Pages',
        path: 'src/content/core',
        format: 'md',
        fields: [
          // SEO Fields
          {
            type: 'string',
            name: 'pageTitle',
            label: 'Page Title (SEO)',
            required: true,
          },
          {
            type: 'string',
            name: 'metaDescription',
            label: 'Meta Description',
            ui: { component: 'textarea' },
          },

          // Hero Section (for homepage)
          {
            type: 'object',
            name: 'hero',
            label: 'Hero Section',
            fields: [
              { type: 'string', name: 'titleLine', label: 'Title' },
              { type: 'string', name: 'lead', label: 'Lead Text' },
              { type: 'image', name: 'image', label: 'Hero Image' },
              {
                type: 'object',
                name: 'bullets',
                label: 'Bullet Points',
                list: true,
                fields: [
                  { type: 'string', name: 'icon', label: 'Icon Class' },
                  { type: 'string', name: 'text', label: 'Text' },
                ],
              },
              {
                type: 'object',
                name: 'primaryCta',
                label: 'Primary CTA',
                fields: [
                  { type: 'string', name: 'label', label: 'Button Label' },
                  { type: 'string', name: 'url', label: 'Button URL' },
                ],
              },
              {
                type: 'object',
                name: 'secondaryCta',
                label: 'Secondary CTA',
                fields: [
                  { type: 'string', name: 'label', label: 'Button Label' },
                  { type: 'string', name: 'url', label: 'Button URL' },
                ],
              },
            ],
          },

          // About page hero fields
          { type: 'string', name: 'heroHeading', label: 'Hero Heading (About Page)' },
          { type: 'string', name: 'heroSubheading', label: 'Hero Subheading (About Page)' },
          { type: 'string', name: 'heroLead', label: 'Hero Lead (About Page)', ui: { component: 'textarea' } },

          // Overlap Cards (homepage)
          {
            type: 'object',
            name: 'overlapCards',
            label: 'Trust Cards',
            list: true,
            fields: [
              { type: 'string', name: 'icon', label: 'Icon Class' },
              { type: 'string', name: 'title', label: 'Title' },
              { type: 'string', name: 'desc', label: 'Description' },
              { type: 'string', name: 'badge', label: 'Badge Text' },
              { type: 'string', name: 'url', label: 'Link URL' },
            ],
          },

          // iOS Block (homepage)
          {
            type: 'object',
            name: 'iosBlock',
            label: 'iOS Concierge Block',
            fields: [
              { type: 'string', name: 'label', label: 'Label' },
              { type: 'string', name: 'title', label: 'Title' },
              { type: 'string', name: 'body', label: 'Body', ui: { component: 'textarea' } },
              { type: 'string', name: 'whatsappLabel', label: 'WhatsApp Label' },
              { type: 'string', name: 'whatsappUrl', label: 'WhatsApp URL' },
              { type: 'string', name: 'imessageLabel', label: 'iMessage Label' },
              { type: 'string', name: 'imessageUrl', label: 'iMessage URL' },
              {
                type: 'object',
                name: 'expressCard',
                label: 'Express Card',
                fields: [
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'text', label: 'Text' },
                  { type: 'string', name: 'url', label: 'URL' },
                  { type: 'string', name: 'linkLabel', label: 'Link Label' },
                ],
              },
            ],
          },

          // Services Section (homepage)
          {
            type: 'object',
            name: 'servicesSection',
            label: 'Services Section',
            fields: [
              { type: 'string', name: 'label', label: 'Section Label' },
              { type: 'string', name: 'title', label: 'Section Title' },
              {
                type: 'object',
                name: 'items',
                label: 'Service Items',
                list: true,
                fields: [
                  { type: 'string', name: 'href', label: 'Link URL' },
                  { type: 'image', name: 'image', label: 'Image' },
                  { type: 'string', name: 'imageAlt', label: 'Image Alt Text' },
                  { type: 'string', name: 'heading', label: 'Heading' },
                  { type: 'string', name: 'text', label: 'Description', ui: { component: 'textarea' } },
                ],
              },
            ],
          },

          // Metrics (homepage)
          {
            type: 'object',
            name: 'metrics',
            label: 'Metrics Strip',
            list: true,
            fields: [
              { type: 'string', name: 'value', label: 'Value' },
              { type: 'string', name: 'label', label: 'Label' },
              { type: 'string', name: 'note', label: 'Note' },
            ],
          },

          // Specialists Section (homepage)
          {
            type: 'object',
            name: 'specialistsSection',
            label: 'Specialists Section',
            fields: [
              { type: 'string', name: 'label', label: 'Section Label' },
              { type: 'string', name: 'title', label: 'Section Title' },
              {
                type: 'object',
                name: 'cards',
                label: 'Specialist Cards',
                list: true,
                fields: [
                  { type: 'string', name: 'href', label: 'Link URL' },
                  { type: 'string', name: 'icon', label: 'Icon Class' },
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'bullets', label: 'Bullet Points', list: true },
                  { type: 'string', name: 'tags', label: 'Tags', list: true },
                ],
              },
            ],
          },

          // FAQ Section (homepage)
          {
            type: 'object',
            name: 'faqSection',
            label: 'FAQ Section',
            fields: [
              { type: 'string', name: 'label', label: 'Section Label' },
              { type: 'string', name: 'title', label: 'Section Title' },
              {
                type: 'object',
                name: 'items',
                label: 'FAQ Items',
                list: true,
                fields: [
                  { type: 'string', name: 'question', label: 'Question' },
                  { type: 'string', name: 'answer', label: 'Answer', ui: { component: 'textarea' } },
                ],
              },
            ],
          },

          // CTA Banner (homepage)
          {
            type: 'object',
            name: 'ctaBanner',
            label: 'CTA Banner',
            fields: [
              { type: 'string', name: 'title', label: 'Title' },
              { type: 'string', name: 'body', label: 'Body', ui: { component: 'textarea' } },
              { type: 'string', name: 'buttonLabel', label: 'Button Label' },
              { type: 'string', name: 'buttonUrl', label: 'Button URL' },
            ],
          },

          // Contact Section (homepage)
          {
            type: 'object',
            name: 'contactSection',
            label: 'Contact Section',
            fields: [
              { type: 'string', name: 'label', label: 'Section Label' },
              { type: 'string', name: 'title', label: 'Section Title' },
              { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' } },
              { type: 'string', name: 'namePlaceholder', label: 'Name Placeholder' },
              { type: 'string', name: 'emailPlaceholder', label: 'Email Placeholder' },
              { type: 'string', name: 'phonePlaceholder', label: 'Phone Placeholder' },
              { type: 'string', name: 'messagePlaceholder', label: 'Message Placeholder' },
            ],
          },

          // About page sections
          {
            type: 'object',
            name: 'sections',
            label: 'Page Sections (About)',
            list: true,
            templates: [
              {
                name: 'introWithImage',
                label: 'Intro with Image',
                fields: [
                  { type: 'string', name: 'type', label: 'Type', required: true },
                  { type: 'string', name: 'heading', label: 'Heading' },
                  { type: 'string', name: 'p1', label: 'Paragraph 1', ui: { component: 'textarea' } },
                  { type: 'string', name: 'p2', label: 'Paragraph 2', ui: { component: 'textarea' } },
                  {
                    type: 'object',
                    name: 'features',
                    label: 'Features',
                    list: true,
                    fields: [
                      { type: 'string', name: 'label', label: 'Label' },
                      { type: 'string', name: 'text', label: 'Text' },
                    ],
                  },
                  { type: 'image', name: 'image', label: 'Image' },
                  { type: 'string', name: 'imageAlt', label: 'Image Alt' },
                ],
              },
              {
                name: 'licensing',
                label: 'Licensing Section',
                fields: [
                  { type: 'string', name: 'type', label: 'Type', required: true },
                  { type: 'string', name: 'sectionLabel', label: 'Section Label' },
                  { type: 'string', name: 'sectionTitle', label: 'Section Title' },
                  { type: 'string', name: 'mojLabel', label: 'MOJ Label' },
                  { type: 'string', name: 'mojTitle', label: 'MOJ Title' },
                  { type: 'string', name: 'mojSubtitle', label: 'MOJ Subtitle' },
                  { type: 'string', name: 'note', label: 'Note', ui: { component: 'textarea' } },
                ],
              },
              {
                name: 'authorityLogos',
                label: 'Authority Logos',
                fields: [
                  { type: 'string', name: 'type', label: 'Type', required: true },
                  { type: 'string', name: 'title', label: 'Title' },
                ],
              },
              {
                name: 'values',
                label: 'Values Section',
                fields: [
                  { type: 'string', name: 'type', label: 'Type', required: true },
                  { type: 'string', name: 'sectionLabel', label: 'Section Label' },
                  { type: 'string', name: 'sectionTitle', label: 'Section Title' },
                  {
                    type: 'object',
                    name: 'items',
                    label: 'Value Items',
                    list: true,
                    fields: [
                      { type: 'string', name: 'title', label: 'Title' },
                      { type: 'string', name: 'text', label: 'Text', ui: { component: 'textarea' } },
                    ],
                  },
                ],
              },
              {
                name: 'mission',
                label: 'Mission Section',
                fields: [
                  { type: 'string', name: 'type', label: 'Type', required: true },
                  { type: 'string', name: 'sectionLabel', label: 'Section Label' },
                  { type: 'string', name: 'sectionTitle', label: 'Section Title' },
                  { type: 'string', name: 'statement', label: 'Mission Statement', ui: { component: 'textarea' } },
                  { type: 'string', name: 'vision', label: 'Vision Statement', ui: { component: 'textarea' } },
                ],
              },
              {
                name: 'languages',
                label: 'Languages Section',
                fields: [
                  { type: 'string', name: 'type', label: 'Type', required: true },
                  { type: 'string', name: 'sectionLabel', label: 'Section Label' },
                  { type: 'string', name: 'sectionTitle', label: 'Section Title' },
                  { type: 'string', name: 'intro', label: 'Intro Text', ui: { component: 'textarea' } },
                  {
                    type: 'object',
                    name: 'languages',
                    label: 'Language Groups',
                    list: true,
                    fields: [
                      { type: 'string', name: 'name', label: 'Group Name' },
                      { type: 'string', name: 'pairs', label: 'Language Pairs', list: true },
                    ],
                  },
                ],
              },
              {
                name: 'history',
                label: 'History Timeline',
                fields: [
                  { type: 'string', name: 'type', label: 'Type', required: true },
                  { type: 'string', name: 'sectionLabel', label: 'Section Label' },
                  { type: 'string', name: 'sectionTitle', label: 'Section Title' },
                  {
                    type: 'object',
                    name: 'timeline',
                    label: 'Timeline Events',
                    list: true,
                    fields: [
                      { type: 'string', name: 'year', label: 'Year' },
                      { type: 'string', name: 'title', label: 'Title' },
                      { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' } },
                    ],
                  },
                ],
              },
              {
                name: 'cta',
                label: 'CTA Section',
                fields: [
                  { type: 'string', name: 'type', label: 'Type', required: true },
                  { type: 'string', name: 'heading', label: 'Heading' },
                  { type: 'string', name: 'body', label: 'Body', ui: { component: 'textarea' } },
                  { type: 'string', name: 'buttonLabel', label: 'Button Label' },
                  { type: 'string', name: 'buttonUrl', label: 'Button URL' },
                ],
              },
            ],
          },
        ],
      },

      // ==================================================
      // SERVICES COLLECTION
      // ==================================================
      {
        name: 'services',
        label: 'Services',
        path: 'src/content/services',
        format: 'md',
        fields: [
          { type: 'string', name: 'title', label: 'Title', required: true },
          { type: 'string', name: 'pageTitle', label: 'Page Title (SEO)' },
          { type: 'string', name: 'metaDescription', label: 'Meta Description', ui: { component: 'textarea' } },
          { type: 'string', name: 'slug', label: 'URL Slug' },
          { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' } },
          { type: 'image', name: 'image', label: 'Featured Image' },
          { type: 'string', name: 'heroHeading', label: 'Hero Heading' },
          { type: 'string', name: 'heroSubheading', label: 'Hero Subheading' },
          { type: 'string', name: 'heroLead', label: 'Hero Lead', ui: { component: 'textarea' } },
          { type: 'image', name: 'heroImage', label: 'Hero Image' },
          {
            type: 'object',
            name: 'features',
            label: 'Features',
            list: true,
            fields: [
              { type: 'string', name: 'icon', label: 'Icon Class' },
              { type: 'string', name: 'title', label: 'Title' },
              { type: 'string', name: 'text', label: 'Text', ui: { component: 'textarea' } },
            ],
          },
          {
            type: 'object',
            name: 'faq',
            label: 'FAQ',
            list: true,
            fields: [
              { type: 'string', name: 'question', label: 'Question' },
              { type: 'string', name: 'answer', label: 'Answer', ui: { component: 'textarea' } },
            ],
          },
          { type: 'string', name: 'ctaTitle', label: 'CTA Title' },
          { type: 'string', name: 'ctaBody', label: 'CTA Body', ui: { component: 'textarea' } },
          { type: 'string', name: 'ctaButtonLabel', label: 'CTA Button Label' },
          { type: 'string', name: 'ctaButtonUrl', label: 'CTA Button URL' },
          { type: 'rich-text', name: 'body', label: 'Body Content', isBody: true },
        ],
      },

      // ==================================================
      // INDUSTRIES COLLECTION
      // ==================================================
      {
        name: 'industries',
        label: 'Industries',
        path: 'src/content/industries',
        format: 'md',
        fields: [
          { type: 'string', name: 'title', label: 'Title', required: true },
          { type: 'string', name: 'pageTitle', label: 'Page Title (SEO)' },
          { type: 'string', name: 'metaDescription', label: 'Meta Description', ui: { component: 'textarea' } },
          { type: 'string', name: 'slug', label: 'URL Slug' },
          { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' } },
          { type: 'image', name: 'image', label: 'Featured Image' },
          { type: 'string', name: 'heroHeading', label: 'Hero Heading' },
          { type: 'string', name: 'heroSubheading', label: 'Hero Subheading' },
          {
            type: 'object',
            name: 'features',
            label: 'Features',
            list: true,
            fields: [
              { type: 'string', name: 'icon', label: 'Icon' },
              { type: 'string', name: 'title', label: 'Title' },
              { type: 'string', name: 'text', label: 'Text', ui: { component: 'textarea' } },
            ],
          },
          { type: 'rich-text', name: 'body', label: 'Body Content', isBody: true },
        ],
      },

      // ==================================================
      // LOCATIONS COLLECTION
      // ==================================================
      {
        name: 'locations',
        label: 'Locations',
        path: 'src/content/locations',
        format: 'md',
        fields: [
          { type: 'string', name: 'title', label: 'Title', required: true },
          { type: 'string', name: 'pageTitle', label: 'Page Title (SEO)' },
          { type: 'string', name: 'metaDescription', label: 'Meta Description', ui: { component: 'textarea' } },
          { type: 'string', name: 'slug', label: 'URL Slug' },
          { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' } },
          { type: 'image', name: 'image', label: 'Featured Image' },
          { type: 'string', name: 'heroHeading', label: 'Hero Heading' },
          { type: 'string', name: 'heroSubheading', label: 'Hero Subheading' },
          { type: 'string', name: 'address', label: 'Address', ui: { component: 'textarea' } },
          { type: 'string', name: 'phone', label: 'Phone' },
          { type: 'string', name: 'whatsapp', label: 'WhatsApp' },
          { type: 'string', name: 'mapUrl', label: 'Google Maps URL' },
          {
            type: 'object',
            name: 'features',
            label: 'Features',
            list: true,
            fields: [
              { type: 'string', name: 'icon', label: 'Icon' },
              { type: 'string', name: 'title', label: 'Title' },
              { type: 'string', name: 'text', label: 'Text', ui: { component: 'textarea' } },
            ],
          },
          { type: 'string', name: 'nearbyLandmarks', label: 'Nearby Landmarks', list: true },
          { type: 'rich-text', name: 'body', label: 'Body Content', isBody: true },
        ],
      },

      // ==================================================
      // SPECIALIZED SERVICES COLLECTION
      // ==================================================
      {
        name: 'specialized',
        label: 'Specialized Services',
        path: 'src/content/specialized',
        format: 'md',
        fields: [
          { type: 'string', name: 'title', label: 'Title', required: true },
          { type: 'string', name: 'pageTitle', label: 'Page Title (SEO)' },
          { type: 'string', name: 'metaDescription', label: 'Meta Description', ui: { component: 'textarea' } },
          { type: 'string', name: 'slug', label: 'URL Slug' },
          { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' } },
          { type: 'image', name: 'image', label: 'Featured Image' },
          { type: 'string', name: 'heroHeading', label: 'Hero Heading' },
          { type: 'string', name: 'heroSubheading', label: 'Hero Subheading' },
          {
            type: 'object',
            name: 'features',
            label: 'Features',
            list: true,
            fields: [
              { type: 'string', name: 'icon', label: 'Icon' },
              { type: 'string', name: 'title', label: 'Title' },
              { type: 'string', name: 'text', label: 'Text', ui: { component: 'textarea' } },
            ],
          },
          { type: 'rich-text', name: 'body', label: 'Body Content', isBody: true },
        ],
      },

      // ==================================================
      // BLOG COLLECTION
      // ==================================================
      {
        name: 'blog',
        label: 'Blog Posts',
        path: 'src/content/blog',
        format: 'md',
        fields: [
          { type: 'string', name: 'title', label: 'Title', required: true },
          { type: 'string', name: 'description', label: 'Description', required: true, ui: { component: 'textarea' } },
          { type: 'datetime', name: 'publishDate', label: 'Publish Date', required: true },
          { type: 'datetime', name: 'updatedDate', label: 'Updated Date' },
          {
            type: 'object',
            name: 'author',
            label: 'Author',
            fields: [
              { type: 'string', name: 'name', label: 'Name' },
              { type: 'string', name: 'title', label: 'Title' },
              { type: 'image', name: 'avatar', label: 'Avatar' },
            ],
          },
          {
            type: 'string',
            name: 'category',
            label: 'Category',
            required: true,
            options: [
              { value: 'legal-translation', label: 'Legal Translation' },
              { value: 'personal-documents', label: 'Personal Documents' },
              { value: 'attestation', label: 'Attestation' },
              { value: 'golden-visa', label: 'Golden Visa' },
              { value: 'corporate', label: 'Corporate' },
              { value: 'industry-insights', label: 'Industry Insights' },
              { value: 'how-to-guides', label: 'How-To Guides' },
              { value: 'news', label: 'News' },
            ],
          },
          { type: 'string', name: 'tags', label: 'Tags', list: true },
          { type: 'string', name: 'keywords', label: 'Keywords' },
          { type: 'string', name: 'canonicalUrl', label: 'Canonical URL' },
          { type: 'image', name: 'heroImage', label: 'Hero Image' },
          { type: 'string', name: 'heroImageAlt', label: 'Hero Image Alt' },
          { type: 'boolean', name: 'featured', label: 'Featured' },
          { type: 'boolean', name: 'draft', label: 'Draft' },
          { type: 'string', name: 'relatedServices', label: 'Related Services', list: true },
          { type: 'string', name: 'relatedPosts', label: 'Related Posts', list: true },
          { type: 'rich-text', name: 'body', label: 'Body Content', isBody: true },
        ],
      },

      // ==================================================
      // SETTINGS COLLECTION
      // ==================================================
      {
        name: 'settings',
        label: 'Site Settings',
        path: 'src/content/settings',
        format: 'json',
        fields: [
          { type: 'string', name: 'logoText', label: 'Logo Text' },
          {
            type: 'object',
            name: 'links',
            label: 'Navigation Links',
            list: true,
            fields: [
              { type: 'string', name: 'label', label: 'Label' },
              { type: 'string', name: 'href', label: 'URL' },
            ],
          },
          { type: 'string', name: 'ctaLabel', label: 'CTA Label' },
          { type: 'string', name: 'ctaHref', label: 'CTA URL' },
        ],
      },
    ],
  },
});
