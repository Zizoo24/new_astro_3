# Strategies for Handling Keystatic Schema Complexity

## The Challenge

Your content has three distinct complexity levels:

| Page | Complexity | Challenge |
|------|------------|-----------|
| `home.md` | High | 10 nested sections, arrays within objects |
| `about.md` | Very High | Discriminated union with 7 section types |
| Collections | Medium | Standard frontmatter + markdown body |

---

## Strategy 1: Pre-Migration Content Snapshot

**Purpose**: Create a safety net before any changes

### Implementation
```bash
# Create timestamped backup
mkdir -p backups/$(date +%Y%m%d)
cp -r src/content backups/$(date +%Y%m%d)/content
cp src/content/config.ts backups/$(date +%Y%m%d)/zod-schemas.ts

# Create JSON snapshots for verification
node -e "
const yaml = require('yaml');
const fs = require('fs');
const home = fs.readFileSync('src/content/core/home.md', 'utf8');
const frontmatter = home.split('---')[1];
fs.writeFileSync('backups/home-snapshot.json', JSON.stringify(yaml.parse(frontmatter), null, 2));
"
```

### Verification Script (Post-Migration)
```typescript
// scripts/verify-content-integrity.ts
import homeSnapshot from '../backups/home-snapshot.json';
import { getEntry } from 'astro:content';

const home = await getEntry('core', 'home');
const keys = Object.keys(homeSnapshot);
const missing = keys.filter(k => !(k in home.data));
if (missing.length) console.error('MISSING FIELDS:', missing);
```

---

## Strategy 2: Field Extraction & Mapping Document

**Purpose**: Explicit 1:1 mapping prevents missed fields

### Homepage Field Inventory (47 fields total)

```
home.md
├── pageTitle                          → fields.text
├── metaDescription                    → fields.text (multiline)
├── hero                               → fields.object
│   ├── titleLine                      → fields.text
│   ├── lead                           → fields.text
│   ├── image                          → fields.image
│   ├── bullets[]                      → fields.array
│   │   ├── icon                       → fields.text
│   │   └── text                       → fields.text
│   ├── primaryCta                     → fields.object
│   │   ├── label                      → fields.text
│   │   └── url                        → fields.url
│   └── secondaryCta                   → fields.object
│       ├── label                      → fields.text
│       └── url                        → fields.url
├── overlapCards[]                     → fields.array
│   ├── icon                           → fields.text
│   ├── title                          → fields.text
│   ├── desc                           → fields.text
│   ├── badge                          → fields.text
│   └── url                            → fields.url
├── iosBlock                           → fields.object
│   ├── label                          → fields.text
│   ├── title                          → fields.text
│   ├── body                           → fields.text (multiline)
│   ├── whatsappLabel                  → fields.text
│   ├── whatsappUrl                    → fields.url
│   ├── imessageLabel                  → fields.text
│   ├── imessageUrl                    → fields.url
│   └── expressCard                    → fields.object
│       ├── title                      → fields.text
│       ├── text                       → fields.text
│       ├── url                        → fields.url
│       └── linkLabel                  → fields.text
├── servicesSection                    → fields.object
│   ├── label                          → fields.text
│   └── title                          → fields.text
├── metrics[]                          → fields.array
│   ├── value                          → fields.text
│   ├── label                          → fields.text
│   └── note                           → fields.text
├── specialistsSection                 → fields.object
│   ├── label                          → fields.text
│   ├── title                          → fields.text
│   └── cards[]                        → fields.array
│       ├── href                       → fields.url
│       ├── icon                       → fields.text
│       ├── title                      → fields.text
│       ├── bullets[]                  → fields.array(fields.text)
│       └── tags[]                     → fields.array(fields.text)
├── faqSection                         → fields.object
│   ├── label                          → fields.text
│   ├── title                          → fields.text
│   └── items[]                        → fields.array
│       ├── question                   → fields.text
│       └── answer                     → fields.text (multiline)
├── ctaBanner                          → fields.object
│   ├── title                          → fields.text
│   ├── body                           → fields.text (multiline)
│   ├── buttonLabel                    → fields.text
│   └── buttonUrl                      → fields.url
└── contactSection                     → fields.object
    ├── label                          → fields.text
    ├── title                          → fields.text
    ├── description                    → fields.text (multiline)
    ├── namePlaceholder                → fields.text
    ├── emailPlaceholder               → fields.text
    ├── phonePlaceholder               → fields.text
    └── messagePlaceholder             → fields.text
```

---

## Strategy 3: Incremental Schema Building

**Purpose**: Build and test in layers to catch issues early

### Build Order (Least → Most Complex)

```
Phase A: Settings (simplest)
├── navigation.json                    [3 fields]

Phase B: Simple Collections
├── blog                               [12 frontmatter fields + body]
├── services                           [10 fields + body]
├── industries                         [8 fields + body]
├── locations                          [12 fields + body]
├── specialized                        [8 fields + body]

Phase C: Core Singletons
├── about.md                           [4 base fields + sections array]
└── home.md                            [10 top-level sections, ~47 fields]
```

### Testing Gate Per Phase
```bash
# After each phase, verify:
npm run dev
# Then manually in browser:
# 1. Can view content in /keystatic admin
# 2. Can edit a field
# 3. Saved changes persist correctly
# 4. Build still works: npm run build
```

---

## Strategy 4: Reusable Field Builders

**Purpose**: DRY schema, consistent UI, fewer typos

### Create `keystatic-fields.ts`

```typescript
// keystatic-fields.ts
import { fields } from '@keystatic/core';

// ============================================
// REUSABLE FIELD FACTORIES
// ============================================

/** CTA button (label + url) - used 6+ times */
export const ctaButton = (labelText = 'CTA Button') => fields.object({
  label: fields.text({ label: 'Button Text' }),
  url: fields.url({ label: 'Button URL' }),
}, { label: labelText });

/** Section header (label + title) - used 5+ times */
export const sectionHeader = () => ({
  label: fields.text({ label: 'Section Label' }),
  title: fields.text({ label: 'Section Title' }),
});

/** FAQ item */
export const faqItem = () => fields.object({
  question: fields.text({ label: 'Question' }),
  answer: fields.text({ label: 'Answer', multiline: true }),
});

/** Specialist card (used in home page) */
export const specialistCard = () => fields.object({
  href: fields.url({ label: 'Link URL' }),
  icon: fields.text({ label: 'Icon Class (e.g., fas fa-gavel)' }),
  title: fields.text({ label: 'Card Title' }),
  bullets: fields.array(
    fields.text({ label: 'Bullet Point' }),
    { label: 'Bullet Points', itemLabel: props => props.value }
  ),
  tags: fields.array(
    fields.text({ label: 'Tag' }),
    { label: 'Tags', itemLabel: props => props.value }
  ),
});

/** Overlap/trust card */
export const overlapCard = () => fields.object({
  icon: fields.text({ label: 'Icon Class' }),
  title: fields.text({ label: 'Title' }),
  desc: fields.text({ label: 'Description' }),
  badge: fields.text({ label: 'Badge Text (optional)' }),
  url: fields.url({ label: 'Link URL' }),
});

/** Metric item */
export const metricItem = () => fields.object({
  value: fields.text({ label: 'Value (e.g., "43+")' }),
  label: fields.text({ label: 'Label' }),
  note: fields.text({ label: 'Note (optional)' }),
});
```

### Use in Main Config
```typescript
// keystatic.config.ts
import { ctaButton, sectionHeader, faqItem, specialistCard } from './keystatic-fields';

// In home singleton:
faqSection: fields.object({
  ...sectionHeader(),
  items: fields.array(faqItem(), {
    label: 'FAQ Items',
    itemLabel: props => props.fields.question.value
  }),
}, { label: 'FAQ Section' }),
```

---

## Strategy 5: Handle About Page Discriminated Union

**Purpose**: Map Zod discriminated union to Keystatic's conditional fields

### The Challenge
About page uses `z.discriminatedUnion('type', [...])` with 7 section types:
- `introWithImage`
- `licensing`
- `authorityLogos`
- `values`
- `mission`
- `languages`
- `history`
- `cta`

### Option A: Conditional Fields (Recommended)

```typescript
// Each section as conditional based on 'type' select
sections: fields.array(
  fields.conditional(
    fields.select({
      label: 'Section Type',
      options: [
        { label: 'Intro with Image', value: 'introWithImage' },
        { label: 'Licensing', value: 'licensing' },
        { label: 'Authority Logos', value: 'authorityLogos' },
        { label: 'Values', value: 'values' },
        { label: 'Mission', value: 'mission' },
        { label: 'Languages', value: 'languages' },
        { label: 'History', value: 'history' },
        { label: 'CTA', value: 'cta' },
      ],
      defaultValue: 'introWithImage',
    }),
    {
      introWithImage: fields.object({
        heading: fields.text({ label: 'Heading' }),
        p1: fields.text({ label: 'Paragraph 1', multiline: true }),
        p2: fields.text({ label: 'Paragraph 2', multiline: true }),
        features: fields.array(
          fields.object({
            label: fields.text({ label: 'Feature Label' }),
            text: fields.text({ label: 'Feature Text' }),
          }),
          { label: 'Features' }
        ),
        image: fields.image({ label: 'Image', directory: 'public/assets/images', publicPath: '/assets/images/' }),
        imageAlt: fields.text({ label: 'Image Alt Text' }),
      }),
      licensing: fields.object({
        sectionLabel: fields.text({ label: 'Section Label' }),
        sectionTitle: fields.text({ label: 'Section Title' }),
        mojLabel: fields.text({ label: 'MOJ Label' }),
        mojTitle: fields.text({ label: 'MOJ Title' }),
        mojSubtitle: fields.text({ label: 'MOJ Subtitle' }),
        note: fields.text({ label: 'Note', multiline: true }),
      }),
      // ... other section types
    }
  ),
  { label: 'Page Sections', itemLabel: props => `${props.discriminant}: ${props.value?.heading || props.value?.sectionTitle || ''}` }
),
```

### Option B: Separate Singletons per Section (Simpler UI)

If conditional fields become unwieldy, split about page into multiple singletons:

```typescript
singletons: {
  aboutHero: singleton({ path: 'src/content/core/about-hero', ... }),
  aboutIntro: singleton({ path: 'src/content/core/about-intro', ... }),
  aboutLicensing: singleton({ path: 'src/content/core/about-licensing', ... }),
  // etc.
}
```

Then reassemble in the Astro page:
```astro
---
const hero = await getEntry('core', 'about-hero');
const intro = await getEntry('core', 'about-intro');
// ...
---
```

**Trade-off**: More files, but simpler admin UI.

---

## Strategy 6: Content Comparison Testing

**Purpose**: Automated verification that all fields survive migration

### Pre-Migration: Extract All Keys
```typescript
// scripts/extract-content-keys.ts
import * as yaml from 'yaml';
import * as fs from 'fs';

function extractKeys(obj: any, prefix = ''): string[] {
  const keys: string[] = [];
  for (const [key, value] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${key}` : key;
    keys.push(path);
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      keys.push(...extractKeys(value, path));
    }
    if (Array.isArray(value) && value.length > 0 && typeof value[0] === 'object') {
      keys.push(...extractKeys(value[0], `${path}[0]`));
    }
  }
  return keys;
}

const home = fs.readFileSync('src/content/core/home.md', 'utf8');
const frontmatter = yaml.parse(home.split('---')[1]);
const keys = extractKeys(frontmatter);
fs.writeFileSync('backups/home-keys.json', JSON.stringify(keys, null, 2));
console.log(`Extracted ${keys.length} field paths from home.md`);
```

### Post-Migration: Verify Keys Match
```typescript
// scripts/verify-keys.ts
const preKeys = require('../backups/home-keys.json');
// ... load post-migration content ...
// Compare and report missing keys
```

---

## Strategy 7: Graceful Degradation for Complex Arrays

**Purpose**: Handle servicesSection.items which is "controlled by src/data/servicesGrid.ts"

### Current State
```yaml
servicesSection:
  label: "Our Services"
  title: "Professional Translation Services Across Six Practice Areas"
  # Items now controlled by src/data/servicesGrid.ts for consistency
```

### Options

**Option A: Keep External Data Source**
Don't migrate `servicesSection.items` to Keystatic. Keep the TypeScript data file for consistency.

```typescript
// In keystatic.config.ts - only expose header fields
servicesSection: fields.object({
  label: fields.text({ label: 'Section Label' }),
  title: fields.text({ label: 'Section Title' }),
  // items intentionally omitted - managed in code
}, { label: 'Services Section (items managed in code)' }),
```

**Option B: Full Migration**
Move items from TypeScript to content file, making everything editable.

```typescript
servicesSection: fields.object({
  label: fields.text({ label: 'Section Label' }),
  title: fields.text({ label: 'Section Title' }),
  items: fields.array(
    fields.object({
      href: fields.url({ label: 'Link' }),
      image: fields.image({ label: 'Image', ... }),
      imageAlt: fields.text({ label: 'Alt Text' }),
      heading: fields.text({ label: 'Heading' }),
      text: fields.text({ label: 'Description', multiline: true }),
    }),
    { label: 'Service Cards' }
  ),
}),
```

---

## Strategy 8: UI Navigation Grouping

**Purpose**: Organize complex admin interface

```typescript
ui: {
  brand: { name: 'OnlineTranslation.ae' },
  navigation: {
    'Core Pages': ['home', 'about'],
    'Content': ['blog', 'services', 'specialized'],
    'Regional': ['locations', 'industries'],
    'Settings': ['navigation'],
  },
},
```

---

## Strategy 9: Item Labels for Arrays

**Purpose**: Make array items identifiable in admin UI

```typescript
// Bad - generic labels
bullets: fields.array(fields.object({ ... }))

// Good - dynamic labels from content
bullets: fields.array(
  fields.object({
    icon: fields.text({ label: 'Icon' }),
    text: fields.text({ label: 'Text' }),
  }),
  {
    label: 'Hero Bullets',
    itemLabel: props => props.fields.text.value || 'New bullet'
  }
)

// For FAQ items
items: fields.array(faqItem(), {
  label: 'FAQ Items',
  itemLabel: props => props.fields.question.value?.slice(0, 50) + '...' || 'New FAQ'
})

// For specialist cards
cards: fields.array(specialistCard(), {
  label: 'Specialist Cards',
  itemLabel: props => props.fields.title.value || 'New card'
})
```

---

## Recommended Execution Order

1. **Create backups** (Strategy 1)
2. **Generate field inventory** (Strategy 2) - print and check off
3. **Build reusable fields** (Strategy 4) - `keystatic-fields.ts`
4. **Phase A**: Settings singleton (simplest)
5. **Phase B**: Blog/services/etc collections
6. **Test Phase A+B** thoroughly
7. **Phase C**: Home singleton with all sections
8. **Phase D**: About singleton with conditional fields
9. **Run verification scripts** (Strategy 6)
10. **Compare JSON snapshots** - any missing fields?

---

## Quick Reference: Field Type Mapping

| Zod Type | Keystatic Field |
|----------|-----------------|
| `z.string()` | `fields.text()` |
| `z.string().optional()` | `fields.text()` (optional by default) |
| `z.string()` (long) | `fields.text({ multiline: true })` |
| `z.enum([...])` | `fields.select({ options: [...] })` |
| `z.boolean()` | `fields.checkbox()` |
| `z.coerce.date()` | `fields.date()` |
| `z.array(z.string())` | `fields.array(fields.text())` |
| `z.array(z.object())` | `fields.array(fields.object())` |
| `z.object()` | `fields.object()` |
| `z.union([])` | `fields.conditional()` |
| Image path string | `fields.image()` |
| URL string | `fields.url()` |

---

## Summary: Zero Data Loss Guarantee

1. ✅ **Backup first** - timestamped snapshot
2. ✅ **Map every field** - printed checklist
3. ✅ **Build incrementally** - test each phase
4. ✅ **Reuse field builders** - consistent patterns
5. ✅ **Verify automatically** - key comparison scripts
6. ✅ **Handle edge cases** - conditional fields for unions
