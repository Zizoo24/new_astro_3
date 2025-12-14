# TinaCMS Migration Plan: OnlineTranslation.ae

## Executive Summary

This plan outlines the migration from Decap CMS (Netlify CMS) to TinaCMS for onlinetranslation.ae. The migration removes all Netlify dependencies and establishes TinaCMS as your Git-based headless CMS, deployed on Vercel.

**Current State:**

- ~~Decap CMS v3.1.2 via CDN~~ (REMOVED)
- ~~Netlify Identity Widget for authentication~~ (REMOVED)
- ~~Git Gateway backend (Netlify)~~ (REMOVED)
- ~~Config: `public/admin/config.yml`~~ (REMOVED)
- Schemas: `src/content/config.ts` (Zod-based, 500+ lines)
- Deployed on Vercel (site only, no Netlify dependency)

**Target State:**

- TinaCMS with Tina Cloud (free tier) or self-hosted
- GitHub authentication (no Netlify dependency)
- Config: `tina/config.ts` (TypeScript-native)
- Fully deployed on Vercel

---

## Phase 0: Pre-Migration Preparation (COMPLETED)

**Status:** DONE

### Completed Tasks

- [x] Created migration branch: `claude/plan-tinacms-migration-uh9mU`
- [x] Removed `public/admin/config.yml` (Decap CMS config)
- [x] Removed `public/admin/index.html` (Decap CMS interface)
- [x] Removed Netlify Identity widget from `src/layouts/BaseLayout.astro`
- [x] Removed Netlify Identity widget from `src/layouts/BaseLayoutArabic.astro`
- [x] All Netlify/Decap references eliminated from codebase

---

## Phase 1: TinaCMS Installation

**Duration:** 30-45 minutes
**Risk Level:** Low (isolated to dev branch)

### 1.1 Install TinaCMS

```bash
# From project root
npx @tinacms/cli@latest init

# When prompted:
# - Cloud ID: Press Enter (skip for now)
# - Framework: Other
# - Public assets directory: public
# - TypeScript: Yes
```

This creates:

```
tina/
├── config.ts          # TinaCMS configuration
└── __generated__/     # Auto-generated types (gitignore these)

public/admin/          # Tina's admin UI
```

### 1.2 Update package.json Scripts

```json
{
  "scripts": {
    "dev": "tinacms dev -c 'astro dev --port 5000 --host 0.0.0.0'",
    "build": "tinacms build && astro build",
    "preview": "astro preview --port 5000 --host 0.0.0.0",
    "start": "tinacms dev -c 'astro dev --port 5000 --host 0.0.0.0'"
  }
}
```

### 1.3 Update .gitignore

```gitignore
# TinaCMS
tina/__generated__
.tina/__generated__
```

### 1.4 Verify Installation

```bash
npm run dev
# Navigate to http://localhost:5000/admin/index.html
```

---

## Phase 2: Schema Migration

**Duration:** 2-4 hours
**Risk Level:** Medium (schema compatibility)

### 2.1 Create TinaCMS Collections

Convert existing collections from Decap YAML to TinaCMS TypeScript.

**File:** `tina/config.ts`

```typescript
import { defineConfig, defineSchema } from 'tinacms';

const schema = defineSchema({
  collections: [
    // CORE PAGES (Homepage, About)
    {
      name: 'core',
      label: 'Core Pages',
      path: 'src/content/core',
      format: 'md',
      fields: [
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
              name: 'primaryCta',
              label: 'Primary CTA',
              fields: [
                { type: 'string', name: 'label', label: 'Button Label' },
                { type: 'string', name: 'url', label: 'Button URL' },
              ],
            },
          ],
        },
      ],
    },

    // SERVICES
    {
      name: 'services',
      label: 'Services',
      path: 'src/content/services',
      format: 'md',
      fields: [
        { type: 'string', name: 'title', label: 'Title', required: true },
        { type: 'string', name: 'pageTitle', label: 'Page Title (SEO)' },
        { type: 'string', name: 'metaDescription', label: 'Meta Description', ui: { component: 'textarea' } },
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

    // INDUSTRIES
    {
      name: 'industries',
      label: 'Industries',
      path: 'src/content/industries',
      format: 'md',
      fields: [
        { type: 'string', name: 'title', label: 'Title', required: true },
        { type: 'string', name: 'pageTitle', label: 'Page Title (SEO)' },
        { type: 'string', name: 'metaDescription', label: 'Meta Description', ui: { component: 'textarea' } },
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

    // LOCATIONS
    {
      name: 'locations',
      label: 'Locations',
      path: 'src/content/locations',
      format: 'md',
      fields: [
        { type: 'string', name: 'title', label: 'Title', required: true },
        { type: 'string', name: 'pageTitle', label: 'Page Title (SEO)' },
        { type: 'string', name: 'metaDescription', label: 'Meta Description', ui: { component: 'textarea' } },
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

    // SPECIALIZED SERVICES
    {
      name: 'specialized',
      label: 'Specialized Services',
      path: 'src/content/specialized',
      format: 'md',
      fields: [
        { type: 'string', name: 'title', label: 'Title', required: true },
        { type: 'string', name: 'pageTitle', label: 'Page Title (SEO)' },
        { type: 'string', name: 'metaDescription', label: 'Meta Description', ui: { component: 'textarea' } },
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

    // BLOG
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
          options: [
            'legal-translation',
            'personal-documents',
            'attestation',
            'golden-visa',
            'corporate',
            'industry-insights',
            'how-to-guides',
            'news',
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

    // SETTINGS
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
});

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

  schema,
});
```

### 2.2 Field Type Mapping Reference

| Decap CMS | TinaCMS | Notes |
|-----------|---------|-------|
| `string` | `string` | Direct mapping |
| `text` | `string` + `ui: { component: 'textarea' }` | Use textarea component |
| `markdown` | `rich-text` + `isBody: true` | For body content |
| `image` | `image` | Direct mapping |
| `list` (simple) | `string` + `list: true` | Array of strings |
| `list` (objects) | `object` + `list: true` | Array of objects |
| `object` | `object` | Direct mapping |
| `boolean` | `boolean` | Direct mapping |
| `datetime` | `datetime` | Direct mapping |
| `select` | `string` + `options: []` | Enum values |
| `hidden` | Use `ui: { component: null }` | Or just omit |

---

## Phase 3: Tina Cloud Setup (Production)

**Duration:** 30-45 minutes
**Risk Level:** Low

### 3.1 Create Tina Cloud Account

1. Go to [app.tina.io](https://app.tina.io)
2. Sign up with GitHub
3. Click "Create Project"
4. Select your repository: `Zizoo24/new_astro_3`
5. Copy your **Client ID** and **Token**

### 3.2 Add Environment Variables

**Local Development (`.env`):**

```env
TINA_CLIENT_ID=your-client-id-here
TINA_TOKEN=your-token-here
TINA_PUBLIC_IS_LOCAL=true
```

**Vercel Dashboard:**

1. Go to your project settings
2. Navigate to Environment Variables
3. Add:
   - `TINA_CLIENT_ID` = your-client-id
   - `TINA_TOKEN` = your-token

### 3.3 Decision: Tina Cloud vs Self-Hosted

| Feature | Tina Cloud (Free) | Self-Hosted |
|---------|------------------|-------------|
| **Users** | 2 users | Unlimited |
| **Sites** | 2 sites | Unlimited |
| **Auth** | Built-in | DIY (Auth.js) |
| **Setup** | 10 minutes | 2-4 hours |
| **Database** | Managed | You manage (MongoDB/Vercel KV) |
| **Cost** | Free -> $29/mo+ | Infrastructure only |

**Recommendation:** Start with Tina Cloud Free tier. Migrate to self-hosted later if needed.

---

## Phase 4: Testing & Validation

**Duration:** 1-2 hours
**Risk Level:** Medium

### 4.1 Local Testing Checklist

```bash
npm run dev
```

- [ ] Admin accessible at `/admin/index.html`
- [ ] All collections visible
- [ ] Can create new content
- [ ] Can edit existing content
- [ ] Changes save to local files
- [ ] No console errors
- [ ] Images upload correctly

### 4.2 Content Migration Validation

For each collection, verify:

- [ ] **Core Pages:** Homepage, About load correctly
- [ ] **Services:** All service pages render
- [ ] **Blog:** Posts display with correct dates/categories
- [ ] **Locations:** Map URLs, addresses work
- [ ] **Settings:** Navigation reflects changes

### 4.3 Schema Compatibility Test

Create test entries in each collection via TinaCMS admin:

1. Create entry
2. Check markdown file generated correctly
3. Verify frontmatter matches Astro's content config
4. Ensure page renders without errors

---

## Phase 5: Production Deployment

**Duration:** 30 minutes
**Risk Level:** Medium-High

### 5.1 Pre-Deployment Checklist

- [ ] All tests passing locally
- [ ] Environment variables set in Vercel
- [ ] No Netlify references remain
- [ ] Git branch is clean
- [ ] Tina Cloud project connected

### 5.2 Deploy Process

```bash
# Commit all changes
git add .
git commit -m "feat: migrate from Decap CMS to TinaCMS"

# Push to trigger Vercel build
git push origin feature/tinacms-migration

# Create PR for review (optional)
# Or merge directly to main for production
```

### 5.3 Post-Deployment Verification

1. Visit `https://onlinetranslation.ae/admin/`
2. Login with GitHub
3. Test editing a page
4. Verify changes commit to repository
5. Check build triggers correctly

---

## Phase 6: Cleanup & Documentation

**Duration:** 30 minutes
**Risk Level:** Low

### 6.1 Update Documentation

Update project README with:

- New CMS access URL
- How to run locally with TinaCMS
- Environment variable requirements

### 6.2 Create Specialized Directory

```bash
mkdir -p src/content/specialized
```

---

## Rollback Plan

If issues arise, rollback is simple:

```bash
# Revert to previous commit
git revert HEAD

# Or checkout the backup from git history
git checkout HEAD~1 -- public/admin/

# Remove TinaCMS
rm -rf tina/
npm uninstall tinacms @tinacms/cli

# Restore original scripts in package.json
```

---

## Timeline Summary

| Phase | Duration | Risk | Status |
|-------|----------|------|--------|
| 0. Preparation | 1-2 hours | None | DONE |
| 1. Installation | 30-45 min | Low | TODO |
| 2. Schema Migration | 2-4 hours | Medium | TODO |
| 3. Tina Cloud Setup | 30-45 min | Low | TODO |
| 4. Testing | 1-2 hours | Medium | TODO |
| 5. Deployment | 30 min | Medium-High | TODO |
| 6. Cleanup | 30 min | Low | TODO |

**Total Estimated Time:** 6-10 hours (spread across 2-3 sessions recommended)

---

## Cost Comparison

| Service | Current (Netlify + Decap) | New (TinaCMS) |
|---------|---------------------------|---------------|
| Hosting | Vercel (free) | Vercel (free) |
| CMS Backend | ~~Netlify (free tier)~~ | Tina Cloud (free tier) |
| Auth | ~~Netlify Identity~~ | GitHub (via Tina Cloud) |
| **Total** | **$0/month** | **$0/month** |

**Tina Cloud Free Tier Limits:**

- 2 users
- 2 sites
- Basic features

If you exceed these, Team plan starts at $29/month.

---

## Benefits of Migration

1. **No Netlify Dependency** - Single platform (Vercel) for everything
2. **Better DX** - TypeScript-native configuration
3. **Visual Editing** - Real-time preview (experimental with Astro)
4. **Modern Stack** - Active development, better Astro support
5. **GraphQL API** - Query content programmatically if needed
6. **Git-Based** - All content stays in your repo

---

## Next Steps After Migration

1. **Enable Visual Editing** (experimental) - See Tina docs
2. **Add Custom Components** - Rich text embeds for FAQs, CTAs
3. **Set Up Branch-Based Workflow** - Preview changes before merge
4. **Consider Self-Hosting** - If you need more users/sites

---

## Support Resources

- [TinaCMS Docs](https://tina.io/docs)
- [TinaCMS + Astro Guide](https://tina.io/docs/frameworks/astro)
- [TinaCMS Discord](https://discord.gg/tinacms)
- [GitHub Issues](https://github.com/tinacms/tinacms/issues)

---

*Plan Version: 2.0*
*Created: December 2024*
*Last Updated: December 2024*
*Phase 0 Completed: Netlify/Decap references removed*
