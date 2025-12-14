# TinaCMS Migration Plan

## Executive Summary

This document outlines a phased approach to migrate from Netlify CMS (Decap CMS) to TinaCMS while removing all Netlify-related traces from the codebase. The project is an Astro v5 static site deployed on Vercel.

---

## Current State Analysis

### Netlify Components Present
| Component | Location | Purpose |
|-----------|----------|---------|
| Decap CMS v3.1.2 | `/public/admin/config.yml` | CMS configuration (499 lines) |
| CMS Interface | `/public/admin/index.html` | Admin panel entry point |
| Netlify Identity Widget | CDN reference in index.html | Authentication |
| Git-gateway Backend | config.yml | Content sync |

### Content Structure
```
src/content/
├── config.ts          # Zod schemas for collections
├── core/              # Home & About pages (populated)
├── blog/              # 1 blog post
├── services/          # Empty (.gitkeep)
├── industries/        # Empty (.gitkeep)
├── locations/         # Empty (.gitkeep)
└── specialized/       # Missing directory
```

### Deployment Setup
- **Hosting**: Vercel (with 350+ redirects in vercel.json)
- **CMS Auth**: Netlify Identity (git-gateway)
- **CI/CD**: GitHub Actions

---

## Phase 1: Preparation & TinaCMS Setup

### 1.1 Install TinaCMS Dependencies
```bash
npm install tinacms @tinacms/cli
```

### 1.2 Create TinaCMS Configuration
Create `/tina/config.ts` with:
- Schema definitions mirroring existing Astro content collections
- Branch configuration for development/production
- Media management setup pointing to `/public/assets/images`

### 1.3 Create Schema Mappings
Map existing collections from `src/content/config.ts` to TinaCMS schema:

| Astro Collection | TinaCMS Collection | Priority |
|------------------|-------------------|----------|
| core | core | High |
| blog | blog | High |
| services | services | Medium |
| industries | industries | Medium |
| locations | locations | Medium |
| specialized | specialized | Low |
| settings | settings | Low |

### 1.4 Add TinaCMS Scripts to package.json
```json
{
  "scripts": {
    "tina:dev": "tinacms dev -c \"astro dev --port 5000 --host 0.0.0.0\"",
    "tina:build": "tinacms build && astro build",
    "tina:start": "tinacms build && astro dev"
  }
}
```

### Deliverables - Phase 1
- [ ] TinaCMS dependencies installed
- [ ] `/tina/config.ts` created with all collection schemas
- [ ] Package.json updated with Tina scripts
- [ ] Local development verified with `npm run tina:dev`

---

## Phase 2: Content Schema Migration

### 2.1 Core Collection Schema
```typescript
// tina/config.ts
{
  name: "core",
  label: "Core Pages",
  path: "src/content/core",
  format: "md",
  fields: [
    { type: "string", name: "title", label: "Title", required: true },
    { type: "string", name: "type", label: "Page Type" },
    // ... mirror existing Zod schema
  ]
}
```

### 2.2 Blog Collection Schema
```typescript
{
  name: "blog",
  label: "Blog Posts",
  path: "src/content/blog",
  format: "md",
  fields: [
    { type: "string", name: "title", label: "Title", required: true },
    { type: "datetime", name: "pubDate", label: "Publish Date" },
    { type: "image", name: "image", label: "Featured Image" },
    { type: "string", name: "category", label: "Category" },
    { type: "string", name: "tags", label: "Tags", list: true },
    { type: "rich-text", name: "body", label: "Content", isBody: true }
  ]
}
```

### 2.3 Service/Industry/Location Collections
Create dynamic folder collections for each content type matching the existing Zod schemas in `src/content/config.ts`.

### 2.4 Create Missing Directory
```bash
mkdir -p src/content/specialized
```

### Deliverables - Phase 2
- [ ] All 7 collection schemas defined in TinaCMS config
- [ ] Schema validation matches existing Zod schemas
- [ ] Missing `specialized` directory created
- [ ] Test content creation in TinaCMS admin panel

---

## Phase 3: Media Management Configuration

### 3.1 Configure TinaCMS Media Store
```typescript
// tina/config.ts
media: {
  tina: {
    publicFolder: "public",
    mediaRoot: "assets/images"
  }
}
```

### 3.2 Update Image References
Audit and update any hardcoded image paths in:
- `src/content/core/home.md`
- `src/content/core/about.md`
- `src/content/blog/golden-visa-document-requirements-2024.md`

### 3.3 Media Migration Checklist
- [ ] Verify all 85 images in `/public/assets/images/` are accessible
- [ ] Test image upload through TinaCMS
- [ ] Confirm image paths resolve correctly in build

### Deliverables - Phase 3
- [ ] Media configuration complete
- [ ] Image uploads functional
- [ ] Existing content images verified

---

## Phase 4: Authentication Setup

### 4.1 Option A: Tina Cloud (Recommended)
1. Create account at [tina.io](https://tina.io)
2. Connect GitHub repository
3. Configure environment variables:
   ```
   TINA_CLIENT_ID=<from-tina-cloud>
   TINA_TOKEN=<from-tina-cloud>
   ```

### 4.2 Option B: Self-Hosted Authentication
Configure custom auth backend if Tina Cloud is not preferred.

### 4.3 Update Vercel Environment Variables
Add to Vercel project settings:
- `TINA_CLIENT_ID`
- `TINA_TOKEN`
- `TINA_BRANCH` (optional, for branch-based editing)

### Deliverables - Phase 4
- [ ] Tina Cloud account created and connected
- [ ] Environment variables configured locally
- [ ] Environment variables added to Vercel
- [ ] Authentication tested in production build

---

## Phase 5: Remove Netlify Components

### 5.1 Delete Netlify CMS Files
```bash
rm -rf public/admin/
```

Files to remove:
- `/public/admin/config.yml` (499 lines)
- `/public/admin/index.html`

### 5.2 Remove Netlify References
Search and remove any Netlify-related code:
```bash
grep -r "netlify" --include="*.{js,ts,astro,json,md,html}" .
```

Expected locations to clean:
- Any `netlify.toml` (currently not present)
- CDN references to `identity.netlify.com`
- Any `netlify-identity-widget` imports
- Comments referencing Netlify

### 5.3 Update Documentation
- Update README.md (if exists) to reference TinaCMS
- Remove any Netlify-specific documentation

### 5.4 Verify No Netlify Dependencies
```bash
npm ls | grep -i netlify
```

### Deliverables - Phase 5
- [ ] `/public/admin/` directory deleted
- [ ] All Netlify string references removed
- [ ] No Netlify npm packages remain
- [ ] Documentation updated

---

## Phase 6: CI/CD Pipeline Updates

### 6.1 Update GitHub Actions Workflow
Modify `.github/workflows/ci.yml`:

```yaml
# Add Tina build step
- name: Build with TinaCMS
  run: npm run tina:build
  env:
    TINA_CLIENT_ID: ${{ secrets.TINA_CLIENT_ID }}
    TINA_TOKEN: ${{ secrets.TINA_TOKEN }}
```

### 6.2 Add GitHub Secrets
Add to repository secrets:
- `TINA_CLIENT_ID`
- `TINA_TOKEN`

### 6.3 Update Build Command in Vercel
Change build command from:
```
npm run build
```
to:
```
npm run tina:build
```

### Deliverables - Phase 6
- [ ] CI workflow updated
- [ ] GitHub secrets configured
- [ ] Vercel build command updated
- [ ] Successful deployment verified

---

## Phase 7: Testing & Validation

### 7.1 Content Editing Tests
- [ ] Create new blog post via TinaCMS
- [ ] Edit existing home page content
- [ ] Upload and use new image
- [ ] Save and verify Git commit created

### 7.2 Build Verification
- [ ] Run `npm run tina:build` locally
- [ ] Verify all pages render correctly
- [ ] Check no broken image links
- [ ] Validate sitemap generation

### 7.3 Production Deployment Test
- [ ] Push changes to staging branch
- [ ] Verify Vercel preview deployment
- [ ] Test admin access at `/admin/`
- [ ] Confirm authentication works

### 7.4 Regression Testing
- [ ] All existing pages load correctly
- [ ] SEO metadata preserved
- [ ] Arabic pages functional
- [ ] Mobile responsiveness maintained

---

## Phase 8: Cleanup & Documentation

### 8.1 Remove Obsolete Files
- [ ] Delete any backup config files
- [ ] Remove unused npm scripts
- [ ] Clean up any temporary migration files

### 8.2 Update .gitignore
Add TinaCMS-specific ignores:
```
# TinaCMS
.tina/__generated__
```

### 8.3 Create Admin Documentation
Document for content editors:
- How to access TinaCMS admin
- How to create/edit content
- Media upload guidelines
- Publishing workflow

### 8.4 Final Verification
- [ ] All tests passing
- [ ] No console errors
- [ ] Build size acceptable
- [ ] Performance benchmarks met

---

## File Changes Summary

### Files to Create
| File | Purpose |
|------|---------|
| `/tina/config.ts` | TinaCMS schema and configuration |
| `/tina/__generated__/` | Auto-generated (gitignored) |
| `/.env.local` | Local environment variables |

### Files to Modify
| File | Changes |
|------|---------|
| `package.json` | Add TinaCMS dependencies and scripts |
| `.github/workflows/ci.yml` | Update build commands |
| `.gitignore` | Add TinaCMS ignores |
| `astro.config.mjs` | Potentially add TinaCMS integration |

### Files to Delete
| File | Reason |
|------|--------|
| `/public/admin/config.yml` | Replaced by TinaCMS |
| `/public/admin/index.html` | Replaced by TinaCMS |

---

## Risk Mitigation

### Backup Strategy
1. Create backup branch before migration: `git checkout -b backup/pre-tinacms-migration`
2. Export all content to local files
3. Document current admin access credentials

### Rollback Plan
If migration fails:
1. Restore `/public/admin/` from backup branch
2. Revert package.json changes
3. Remove TinaCMS dependencies
4. Restore original build commands

### Known Considerations
- **Media folder path**: Current CMS config points to `/public/images` but actual images in `/public/assets/images`. TinaCMS config should use correct path.
- **Missing specialized directory**: Create before migration
- **Branch editing**: TinaCMS supports branch-based editing which aligns with current GitHub workflow

---

## Implementation Notes

### TinaCMS Advantages Over Netlify CMS
1. **Visual Editing**: Real-time preview while editing
2. **TypeScript Support**: Native TypeScript schema definitions
3. **Better Astro Integration**: First-class Astro support
4. **Active Development**: Regular updates and improvements
5. **Modern UI**: Improved editing experience

### Post-Migration Considerations
- Train content editors on new TinaCMS interface
- Update any external documentation referencing admin panel
- Monitor for any content sync issues in first week

---

## Approval Checklist

Before proceeding with implementation:

- [ ] Review and approve migration plan
- [ ] Confirm Tina Cloud vs self-hosted decision
- [ ] Verify all stakeholders informed
- [ ] Schedule migration window (if production)
- [ ] Ensure backup procedures in place

---

*Plan Version: 1.0*
*Created: December 2024*
*Last Updated: December 2024*
