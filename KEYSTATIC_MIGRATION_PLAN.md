# Keystatic Migration Plan

## Current State Assessment

| Component | Current | Target | Status |
|-----------|---------|--------|--------|
| Astro version | 5.16.4 | 4.0+ required | ✅ Ready |
| Output mode | `static` | `hybrid` | 🔄 Needs change |
| TinaCMS | Not present | Remove | ✅ Already clean |
| Decap CMS | Not present | Remove | ✅ Already clean |
| React | Not installed | Required | 🔄 Needs install |
| Content collections | 7 with Zod | Map to Keystatic | 🔄 Needs mapping |
| Deployment | Vercel | Vercel | ✅ Supported |

### Existing Collections to Migrate
1. **core** - singletons (home.md, about.md)
2. **services** - collection (2 entries)
3. **industries** - collection (2 entries)
4. **locations** - collection (2 entries)
5. **specialized** - collection (2 entries)
6. **settings** - data collection (navigation.json)
7. **blog** - collection (1 entry)

---

## Phase 1: Pre-Migration Verification

**Objective**: Ensure clean starting point

### Tasks
- [ ] 1.1 Verify no TinaCMS remnants exist
- [ ] 1.2 Verify no Decap/Netlify CMS remnants exist
- [ ] 1.3 Run build to confirm current site works
- [ ] 1.4 Commit any pending changes

### Commands
```bash
# Verify no CMS folders
ls -la tina/ 2>/dev/null || echo "✅ No tina folder"
ls -la public/admin/ 2>/dev/null || echo "✅ No admin folder"

# Run build to verify working state
npm run build
```

### Verification Criteria
- No tina/ directory exists
- No public/admin/ directory exists
- `npm run build` succeeds
- All existing pages render correctly

---

## Phase 2: Install Dependencies

**Objective**: Add Keystatic and React dependencies

### Tasks
- [ ] 2.1 Install React and @astrojs/react
- [ ] 2.2 Install Keystatic packages
- [ ] 2.3 Verify no dependency conflicts

### Commands
```bash
# Install React (Keystatic dependency)
npm install react react-dom @astrojs/react

# Install Keystatic
npm install @keystatic/core @keystatic/astro
```

### Expected package.json additions
```json
{
  "dependencies": {
    "react": "^18.x",
    "react-dom": "^18.x",
    "@astrojs/react": "^3.x",
    "@keystatic/core": "^0.x",
    "@keystatic/astro": "^5.x"
  }
}
```

### Verification Criteria
- `npm install` completes without errors
- No peer dependency warnings for React versions
- `npm ls @keystatic/core` shows installed version

---

## Phase 3: Update Astro Configuration

**Objective**: Enable hybrid rendering and integrate React/Keystatic

### Tasks
- [ ] 3.1 Import React and Keystatic integrations
- [ ] 3.2 Change output mode from `static` to `hybrid`
- [ ] 3.3 Add React integration (must be before Keystatic)
- [ ] 3.4 Add Keystatic integration
- [ ] 3.5 Update sitemap filter to exclude /keystatic

### File: `astro.config.mjs`
```javascript
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';       // NEW
import keystatic from '@keystatic/astro'; // NEW

export default defineConfig({
  site: 'https://onlinetranslation.ae',
  output: 'hybrid',  // CHANGED from 'static'
  trailingSlash: 'always',
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },
  integrations: [
    react(),      // NEW - must be before keystatic
    keystatic(),  // NEW
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      filter: (page) => !page.includes('/404') && !page.includes('/private/') && !page.includes('/keystatic')
    })
  ],
  server: {
    port: 5000,
    host: '0.0.0.0'
  },
  build: {
    assets: 'assets',
    inlineStylesheets: 'auto'
  },
  vite: {
    server: {
      host: '0.0.0.0',
      allowedHosts: ['.replit.dev', '.repl.co', 'localhost'],
      hmr: false
    }
  }
});
```

### Verification Criteria
- `npm run dev` starts without errors
- No TypeScript errors in config
- Hybrid mode warning may appear (expected)

---

## Phase 4: Create Keystatic Configuration

**Objective**: Define content schema matching existing Zod schemas

### Tasks
- [ ] 4.1 Create `keystatic.config.ts` in project root
- [ ] 4.2 Configure storage (local dev, GitHub production)
- [ ] 4.3 Define singletons for core pages (home, about)
- [ ] 4.4 Define singleton for navigation settings
- [ ] 4.5 Define collections (blog, services, industries, locations, specialized)
- [ ] 4.6 Configure UI navigation groupings

### File: `keystatic.config.ts`

#### Storage Configuration
```typescript
storage: process.env.NODE_ENV === 'development'
  ? { kind: 'local' }
  : {
      kind: 'github',
      repo: 'Zizoo24/new_astro_3',
    },
```

#### Singletons to Define
| Singleton | Path | Format |
|-----------|------|--------|
| home | src/content/core/home | yaml (convert from md) |
| about | src/content/core/about | yaml (convert from md) |
| navigation | src/content/settings/navigation | json |

#### Collections to Define
| Collection | Path | Format |
|------------|------|--------|
| blog | src/content/blog/* | md with frontmatter |
| services | src/content/services/* | md with frontmatter |
| industries | src/content/industries/* | md with frontmatter |
| locations | src/content/locations/* | md with frontmatter |
| specialized | src/content/specialized/* | md with frontmatter |

### Key Schema Mappings

**Homepage Hero (complex nested object)**:
```typescript
hero: fields.object({
  titleLine: fields.text({ label: 'Hero Title' }),
  lead: fields.text({ label: 'Hero Lead' }),
  image: fields.image({
    label: 'Hero Image',
    directory: 'public/assets/images/onedrive/hero',
    publicPath: '/assets/images/onedrive/hero/',
  }),
  bullets: fields.array(
    fields.object({
      icon: fields.text({ label: 'Icon Class' }),
      text: fields.text({ label: 'Bullet Text' }),
    }),
    { label: 'Hero Bullets' }
  ),
  // ... CTAs
}, { label: 'Hero Section' }),
```

**Blog Category (enum)**:
```typescript
category: fields.select({
  label: 'Category',
  options: [
    { label: 'Legal Translation', value: 'legal-translation' },
    { label: 'Personal Documents', value: 'personal-documents' },
    // ... all 8 categories from Zod enum
  ],
  defaultValue: 'how-to-guides',
}),
```

### Verification Criteria
- File compiles without TypeScript errors
- Schema covers all existing content fields
- Image paths match existing asset structure

---

## Phase 5: Create Keystatic API Routes

**Objective**: Enable Keystatic admin interface

### Tasks
- [ ] 5.1 Create API handler at `src/pages/keystatic/[...params].ts`
- [ ] 5.2 Create admin shell at `src/pages/keystatic/index.astro`
- [ ] 5.3 Ensure both files have `prerender = false`

### File: `src/pages/keystatic/[...params].ts`
```typescript
import { makeHandler } from '@keystatic/astro/api';
import keystaticConfig from '../../../keystatic.config';

export const all = makeHandler({
  config: keystaticConfig,
});

export const prerender = false;
```

### File: `src/pages/keystatic/index.astro`
```astro
---
export const prerender = false;
---
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Admin | OnlineTranslation.ae</title>
</head>
<body></body>
</html>
```

### Verification Criteria
- Files created in correct location
- No import errors
- `prerender = false` set on both

---

## Phase 6: Update Vercel Configuration

**Objective**: Handle hybrid output and protect admin routes

### Tasks
- [ ] 6.1 Add noindex header for /keystatic routes
- [ ] 6.2 Add rewrite rules for Keystatic paths
- [ ] 6.3 Verify existing redirects still work

### File: `vercel.json` (additions)
```json
{
  "headers": [
    // ... existing headers ...
    {
      "source": "/keystatic/(.*)",
      "headers": [
        { "key": "X-Robots-Tag", "value": "noindex" }
      ]
    }
  ],
  "rewrites": [
    { "source": "/keystatic/:path*", "destination": "/keystatic/:path*" }
  ]
}
```

### Verification Criteria
- JSON remains valid
- Existing redirects unaffected
- Headers properly nested

---

## Phase 7: Content Format Migration (If Needed)

**Objective**: Ensure content files match Keystatic expectations

### Tasks
- [ ] 7.1 Audit home.md frontmatter structure
- [ ] 7.2 Audit about.md frontmatter structure
- [ ] 7.3 Convert files to .yaml if needed by Keystatic singleton config
- [ ] 7.4 Verify blog posts have correct frontmatter
- [ ] 7.5 Verify services/industries/locations have correct frontmatter

### Content File Analysis

**home.md** - Complex nested YAML frontmatter with:
- hero (object with bullets array)
- overlapCards (array)
- iosBlock (object)
- servicesSection (object with items array)
- metrics (array)
- specialistsSection (object with cards array)
- faqSection (object with items array)
- ctaBanner (object)
- contactSection (object)

**about.md** - Simpler structure with:
- pageTitle, metaDescription
- heroHeading, heroSubheading, heroLead
- sections (array of discriminated union types)

### Potential Issues
1. Keystatic may expect .yaml extension for singletons
2. Complex nested arrays need careful field mapping
3. Discriminated unions (aboutSection) may need special handling

### Verification Criteria
- All existing content loads in Keystatic UI
- No data loss during format conversion
- Markdown body content preserved

---

## Phase 8: Local Testing

**Objective**: Verify full admin functionality locally

### Tasks
- [ ] 8.1 Start dev server
- [ ] 8.2 Access /keystatic admin
- [ ] 8.3 Test viewing home page singleton
- [ ] 8.4 Test editing a field and saving
- [ ] 8.5 Test creating a new blog post
- [ ] 8.6 Test image upload
- [ ] 8.7 Verify changes appear in content files
- [ ] 8.8 Run production build

### Commands
```bash
# Start dev server
npm run dev

# Access admin at:
# http://localhost:5000/keystatic

# After testing, verify build still works
npm run build
```

### Test Checklist
| Test | Expected Result |
|------|-----------------|
| Access /keystatic | Admin UI loads |
| View home singleton | All fields populated |
| Edit hero.titleLine | Saves to home.md |
| Create blog post | New .md file created |
| Upload image | File in public/assets |
| Production build | No errors, all pages static except /keystatic |

### Verification Criteria
- Admin UI fully functional
- Content edits persist to files
- Build succeeds
- Static pages work offline

---

## Phase 9: GitHub OAuth Setup (Production)

**Objective**: Enable authenticated editing in production

### Tasks
- [ ] 9.1 Create GitHub OAuth App
- [ ] 9.2 Add environment variables to Vercel
- [ ] 9.3 Generate KEYSTATIC_SECRET
- [ ] 9.4 Update keystatic.config.ts for production

### GitHub OAuth App Settings
| Field | Value |
|-------|-------|
| Application name | OnlineTranslation CMS |
| Homepage URL | https://onlinetranslation.ae |
| Callback URL | https://onlinetranslation.ae/api/keystatic/github/oauth/callback |

### Vercel Environment Variables
```
KEYSTATIC_GITHUB_CLIENT_ID=<from_github>
KEYSTATIC_GITHUB_CLIENT_SECRET=<from_github>
KEYSTATIC_SECRET=<generate_with_openssl>
```

### Generate Secret
```bash
openssl rand -hex 32
```

### Verification Criteria
- OAuth app created in GitHub
- All 3 env vars set in Vercel
- Secret is 32+ characters

---

## Phase 10: Deployment & Verification

**Objective**: Deploy and verify production admin

### Tasks
- [ ] 10.1 Commit all changes
- [ ] 10.2 Push to GitHub
- [ ] 10.3 Verify Vercel build succeeds
- [ ] 10.4 Test production /keystatic access
- [ ] 10.5 Test GitHub OAuth login
- [ ] 10.6 Test editing content in production
- [ ] 10.7 Verify PR creation workflow

### Commands
```bash
# Commit migration
git add .
git commit -m "feat: add Keystatic CMS integration"
git push origin main
```

### Production Test Checklist
| Test | Expected Result |
|------|-----------------|
| Visit /keystatic | Redirects to GitHub OAuth |
| OAuth login | Returns to admin with permissions |
| Edit content | Creates PR in GitHub |
| Merge PR | Triggers Vercel rebuild |
| View site | Changes visible |

### Verification Criteria
- Site builds and deploys
- Admin requires authentication
- Edits create PRs (not direct commits)
- No /keystatic indexed by search engines

---

## Phase 11: Update Package Scripts (Optional)

**Objective**: Add convenience scripts

### Tasks
- [ ] 11.1 Add keystatic dev script
- [ ] 11.2 Update documentation

### package.json additions
```json
{
  "scripts": {
    "keystatic": "keystatic dev"
  }
}
```

---

## Rollback Plan

If migration fails at any phase:

### Quick Rollback
```bash
# Revert to static mode
git checkout HEAD -- astro.config.mjs

# Remove Keystatic packages
npm uninstall @keystatic/core @keystatic/astro @astrojs/react react react-dom

# Delete Keystatic files
rm -f keystatic.config.ts
rm -rf src/pages/keystatic/

# Rebuild
npm run build
```

### Full Rollback
```bash
git reset --hard HEAD~1  # If committed
# or
git stash                # If uncommitted
```

---

## File Changes Summary

### New Files
```
keystatic.config.ts
src/pages/keystatic/[...params].ts
src/pages/keystatic/index.astro
```

### Modified Files
```
astro.config.mjs        # Add react, keystatic, change output
package.json            # New dependencies
vercel.json             # Add keystatic headers/rewrites
```

### Potentially Modified (Content Format)
```
src/content/core/home.md   → home.yaml (if needed)
src/content/core/about.md  → about.yaml (if needed)
```

---

## Timeline Estimate

| Phase | Effort |
|-------|--------|
| Phase 1: Verification | Low |
| Phase 2: Dependencies | Low |
| Phase 3: Astro Config | Low |
| Phase 4: Keystatic Config | High (complex schema) |
| Phase 5: API Routes | Low |
| Phase 6: Vercel Config | Low |
| Phase 7: Content Migration | Medium |
| Phase 8: Local Testing | Medium |
| Phase 9: GitHub OAuth | Low |
| Phase 10: Deployment | Low |
| Phase 11: Scripts | Low |

**Primary complexity**: Phase 4 (Keystatic schema must accurately map the complex nested Zod schemas for homepage)

---

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Schema mismatch | Medium | High | Thorough testing of each field |
| Build failures | Low | Medium | Incremental changes, test often |
| Image path issues | Medium | Low | Test upload early |
| OAuth misconfiguration | Low | Medium | Follow exact callback URL format |
| Vercel hybrid issues | Low | High | Test on Vercel preview first |

---

## Success Criteria

Migration is complete when:
1. ✅ Local dev server runs with /keystatic accessible
2. ✅ All existing content viewable in admin
3. ✅ Edits save correctly to content files
4. ✅ Production build succeeds
5. ✅ Vercel deployment works
6. ✅ GitHub OAuth authenticates correctly
7. ✅ Content edits create PRs in production
8. ✅ /keystatic not indexed by search engines
9. ✅ Existing site functionality unchanged
