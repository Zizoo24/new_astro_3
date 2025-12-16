# Making Everything Editable in Keystatic

## Current Gap Analysis

The migration plan covers content files (`.md`, `.json`), but the site has significant data in TypeScript files that would **NOT** be editable via Keystatic:

| Data File | Content | Editable? |
|-----------|---------|-----------|
| `src/content/core/home.md` | Homepage sections | ✅ Yes |
| `src/content/core/about.md` | About page sections | ✅ Yes |
| `src/content/blog/*.md` | Blog posts | ✅ Yes |
| `src/content/services/*.md` | Service pages | ✅ Yes |
| `src/content/settings/navigation.json` | Header CTA only | ⚠️ Partial |
| `src/data/servicesGrid.ts` | 6 homepage service cards | ❌ No |
| `src/data/navigation.ts` | All nav menus, footer, contact, socials | ❌ No |
| `src/data/serviceLinks.ts` | 90+ internal links, page relationships | ❌ No |

---

## Option A: Full Migration (Everything Editable)

### 1. Migrate `servicesGrid.ts` → Keystatic Collection

Create a new singleton for homepage services:

```typescript
// In keystatic.config.ts

singletons: {
  homepageServices: singleton({
    label: 'Homepage Services Grid',
    path: 'src/content/settings/services-grid',
    format: { data: 'json' },
    schema: {
      sectionLabel: fields.text({ label: 'Section Label' }),
      sectionTitle: fields.text({ label: 'Section Title' }),
      items: fields.array(
        fields.object({
          key: fields.text({ label: 'Key (internal ID)' }),
          href: fields.url({ label: 'Link URL' }),
          heading: fields.text({ label: 'Heading' }),
          text: fields.text({ label: 'Description', multiline: true }),
          icon: fields.text({ label: 'Icon (FontAwesome name)' }),
          image: fields.image({
            label: 'Card Image',
            directory: 'public/assets/images',
            publicPath: '/assets/images/',
          }),
          imageAlt: fields.text({ label: 'Image Alt Text' }),
          features: fields.array(
            fields.text({ label: 'Feature' }),
            { label: 'Features', itemLabel: props => props.value }
          ),
        }),
        {
          label: 'Service Cards',
          itemLabel: props => props.fields.heading.value || 'New Service'
        }
      ),
    },
  }),
}
```

Then update imports in components:

```typescript
// Before (TypeScript file)
import { mainServices } from '../data/servicesGrid';

// After (JSON content file)
import { getEntry } from 'astro:content';
const servicesGrid = await getEntry('settings', 'services-grid');
const mainServices = servicesGrid.data.items;
```

---

### 2. Migrate `navigation.ts` → Multiple Singletons

#### 2a. Site Contact Info

```typescript
singletons: {
  siteConfig: singleton({
    label: 'Site Configuration',
    path: 'src/content/settings/site-config',
    format: { data: 'json' },
    schema: {
      phone: fields.text({ label: 'Phone Number' }),
      phoneDisplay: fields.text({ label: 'Phone Display Format' }),
      email: fields.text({ label: 'Email Address' }),
      whatsapp: fields.url({ label: 'WhatsApp URL' }),
      address: fields.text({ label: 'Business Address' }),
      socialLinks: fields.array(
        fields.object({
          platform: fields.select({
            label: 'Platform',
            options: [
              { label: 'WhatsApp', value: 'whatsapp' },
              { label: 'Facebook', value: 'facebook' },
              { label: 'Instagram', value: 'instagram' },
              { label: 'LinkedIn', value: 'linkedin' },
              { label: 'Twitter/X', value: 'twitter' },
            ],
            defaultValue: 'whatsapp',
          }),
          url: fields.url({ label: 'Profile URL' }),
          label: fields.text({ label: 'Display Label' }),
        }),
        { label: 'Social Links', itemLabel: props => props.fields.platform.value }
      ),
    },
  }),
}
```

#### 2b. Main Navigation

```typescript
singletons: {
  mainNavigation: singleton({
    label: 'Main Navigation',
    path: 'src/content/settings/main-nav',
    format: { data: 'json' },
    schema: {
      items: fields.array(
        fields.conditional(
          fields.select({
            label: 'Type',
            options: [
              { label: 'Simple Link', value: 'link' },
              { label: 'Dropdown Menu', value: 'group' },
            ],
            defaultValue: 'link',
          }),
          {
            link: fields.object({
              label: fields.text({ label: 'Label' }),
              href: fields.url({ label: 'URL' }),
            }),
            group: fields.object({
              id: fields.text({ label: 'Menu ID' }),
              label: fields.text({ label: 'Menu Label' }),
              href: fields.url({ label: 'Main URL' }),
              children: fields.array(
                fields.object({
                  label: fields.text({ label: 'Link Label' }),
                  href: fields.url({ label: 'Link URL' }),
                  badge: fields.text({ label: 'Badge (optional)' }),
                }),
                { label: 'Menu Links', itemLabel: props => props.fields.label.value }
              ),
            }),
          }
        ),
        { label: 'Navigation Items' }
      ),
    },
  }),
}
```

#### 2c. Footer Navigation

```typescript
singletons: {
  footerNavigation: singleton({
    label: 'Footer Navigation',
    path: 'src/content/settings/footer-nav',
    format: { data: 'json' },
    schema: {
      quickLinks: fields.array(
        fields.object({
          label: fields.text({ label: 'Label' }),
          href: fields.url({ label: 'URL' }),
        }),
        { label: 'Quick Links', itemLabel: props => props.fields.label.value }
      ),
      popularServices: fields.array(
        fields.object({
          label: fields.text({ label: 'Label' }),
          href: fields.url({ label: 'URL' }),
        }),
        { label: 'Popular Services', itemLabel: props => props.fields.label.value }
      ),
      legalLinks: fields.array(
        fields.object({
          label: fields.text({ label: 'Label' }),
          href: fields.url({ label: 'URL' }),
        }),
        { label: 'Legal Links', itemLabel: props => props.fields.label.value }
      ),
    },
  }),
}
```

---

### 3. Migrate `serviceLinks.ts` → Keystatic Collection

This is the most complex migration - 90+ service links with relationships.

#### 3a. Create a Collection for Service Links

```typescript
collections: {
  serviceLinks: collection({
    label: 'Service Links',
    slugField: 'key',
    path: 'src/content/links/*',
    format: { data: 'json' },
    schema: {
      key: fields.slug({ name: { label: 'Key (internal ID)' } }),
      url: fields.url({ label: 'URL Path' }),
      text: fields.text({ label: 'Short Text' }),
      full: fields.text({ label: 'Full Description' }),
      icon: fields.text({ label: 'Icon Class (e.g., fas fa-gavel)' }),
      badge: fields.text({ label: 'Badge (optional)' }),

      // Relationships (references to other service links)
      relationships: fields.object({
        related: fields.array(
          fields.text({ label: 'Related Service Key' }),
          { label: 'Related Services' }
        ),
        prerequisites: fields.array(
          fields.text({ label: 'Prerequisite Key' }),
          { label: 'Prerequisites' }
        ),
        nextSteps: fields.array(
          fields.text({ label: 'Next Step Key' }),
          { label: 'Next Steps' }
        ),
        family: fields.array(
          fields.text({ label: 'Family Key' }),
          { label: 'Same Category' }
        ),
        crossSilo: fields.array(
          fields.text({ label: 'Cross-Silo Key' }),
          { label: 'Cross-Silo Links' }
        ),
        locations: fields.array(
          fields.text({ label: 'Location Key' }),
          { label: 'Location Pages' }
        ),
      }, { label: 'Relationships' }),
    },
  }),
}
```

#### 3b. Helper Function to Load Service Links

```typescript
// src/lib/serviceLinks.ts
import { getCollection } from 'astro:content';

export async function getServiceLinks() {
  const links = await getCollection('links');

  // Build lookup object
  const serviceLinks: Record<string, any> = {};
  const pageRelationships: Record<string, any> = {};

  for (const link of links) {
    serviceLinks[link.data.key] = {
      url: link.data.url,
      text: link.data.text,
      full: link.data.full,
      icon: link.data.icon,
      badge: link.data.badge,
    };

    if (link.data.relationships) {
      pageRelationships[link.data.key] = link.data.relationships;
    }
  }

  return { serviceLinks, pageRelationships };
}
```

---

## Option B: Hybrid Approach (Recommended)

Keep TypeScript files for **developer-managed** data, use Keystatic for **content-managed** data:

### What to Keep in TypeScript
- `navigation.ts` - Navigation structure rarely changes, benefits from type safety
- `serviceLinks.ts` - Complex relationships, better managed by developers

### What to Migrate to Keystatic
- `servicesGrid.ts` → **YES** - Marketing may want to update card text/images
- Homepage content → **YES** - FAQ, hero text, CTAs
- Blog posts → **YES** - Regular content updates
- Service page content → **YES** - Descriptions, FAQs

### Rationale
1. **Navigation** - Structural changes should go through code review
2. **Internal Links** - Adding/changing URLs has SEO implications, should be developer-controlled
3. **Service Cards** - Text/images are marketing content, safe for CMS
4. **Page Content** - All text, FAQs, CTAs should be CMS-editable

---

## Summary: Effort vs Benefit

| Data | Effort to Migrate | Benefit of CMS Access |
|------|-------------------|----------------------|
| `servicesGrid.ts` | Low | High ✅ |
| `navigation.ts` | Medium | Medium |
| `serviceLinks.ts` | High | Low |

### Recommendation

**Phase 1 (Include in migration):**
- All `.md` content files
- `servicesGrid.ts` → JSON singleton

**Phase 2 (Post-launch if needed):**
- Site config (contact info, social links)
- Footer navigation

**Keep in TypeScript:**
- Main navigation structure
- Service links and relationships

---

## Implementation Checklist

### Phase 1 Additions

```
□ Create src/content/settings/services-grid.json
□ Add homepageServices singleton to keystatic.config.ts
□ Update Homepage.astro to load from content collection
□ Remove servicesGrid.ts (or keep as backup)
□ Test homepage renders correctly
```

### Phase 2 (Optional)

```
□ Create src/content/settings/site-config.json
□ Create src/content/settings/footer-nav.json
□ Update Footer.astro to load from content
□ Update Header.astro contact info from content
□ Test all components render correctly
```

---

## File Mapping Summary

### After Full Migration

```
src/content/
├── core/
│   ├── home.yaml         # Homepage sections
│   └── about.yaml        # About page sections
├── blog/                 # Blog posts
├── services/             # Service pages
├── industries/           # Industry pages
├── locations/            # Location pages
├── specialized/          # Specialized service pages
└── settings/
    ├── navigation.json   # Header CTA (current)
    ├── services-grid.json # Homepage service cards (NEW)
    ├── site-config.json  # Contact, social links (NEW)
    ├── footer-nav.json   # Footer links (NEW)
    └── main-nav.json     # Main navigation (NEW, optional)
```

### Still in TypeScript (If Hybrid)

```
src/data/
├── navigation.ts         # Keep - structural, type-safe
└── serviceLinks.ts       # Keep - complex relationships
```
