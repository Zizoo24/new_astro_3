# OnlineTranslation.ae — AI Agent Onboarding Guide
## Repository: github.com/Zizoo24/new_astro_3
## Live Site: new-astro-3.vercel.app → onlinetranslation.ae

---

# 🔗 CRUCIAL RAW FILE LINKS

## Core Configuration
```
https://raw.githubusercontent.com/Zizoo24/new_astro_3/main/astro.config.mjs
https://raw.githubusercontent.com/Zizoo24/new_astro_3/main/package.json
https://raw.githubusercontent.com/Zizoo24/new_astro_3/main/tsconfig.json
https://raw.githubusercontent.com/Zizoo24/new_astro_3/main/tailwind.config.mjs
```

## Layouts (Start Here)
```
https://raw.githubusercontent.com/Zizoo24/new_astro_3/main/src/layouts/BaseLayout.astro
https://raw.githubusercontent.com/Zizoo24/new_astro_3/main/src/layouts/ServiceLayout.astro
```

## Key Components
```
https://raw.githubusercontent.com/Zizoo24/new_astro_3/main/src/components/Header-porto.astro
https://raw.githubusercontent.com/Zizoo24/new_astro_3/main/src/components/Footer.astro
https://raw.githubusercontent.com/Zizoo24/new_astro_3/main/src/components/MobileShell.astro
https://raw.githubusercontent.com/Zizoo24/new_astro_3/main/src/components/Sidebar.astro
```

## Main Pages
```
https://raw.githubusercontent.com/Zizoo24/new_astro_3/main/src/pages/index.astro
https://raw.githubusercontent.com/Zizoo24/new_astro_3/main/src/pages/about.astro
https://raw.githubusercontent.com/Zizoo24/new_astro_3/main/src/pages/contact.astro
```

## Data Sources (Navigation & Services)
```
https://raw.githubusercontent.com/Zizoo24/new_astro_3/main/src/data/navigation.ts
https://raw.githubusercontent.com/Zizoo24/new_astro_3/main/src/data/servicesGrid.ts
```

## Styles
```
https://raw.githubusercontent.com/Zizoo24/new_astro_3/main/src/styles/global.css
https://raw.githubusercontent.com/Zizoo24/new_astro_3/main/src/styles/tokens.css
```

## Content Collections (Astro Content)
```
https://raw.githubusercontent.com/Zizoo24/new_astro_3/main/src/content/config.ts
```

---

# 📁 PROJECT STRUCTURE

```
new_astro_3/
├── src/
│   ├── assets/images/          # Optimized images (Astro Image)
│   ├── components/             # Reusable Astro components
│   │   ├── Header-porto.astro  # Main header (coral bar + navy nav)
│   │   ├── Footer.astro        # Site footer
│   │   ├── MobileShell.astro   # Mobile navigation wrapper
│   │   ├── Sidebar.astro       # Slide-out sidebar menu
│   │   ├── SEO.astro           # Advanced SEO meta component
│   │   ├── Schema.astro        # Type-safe structured data
│   │   ├── Breadcrumb.astro    # Breadcrumbs with JSON-LD
│   │   └── ...
│   ├── config/                 # Site configuration
│   │   └── site.ts             # Centralized SEO/brand config
│   ├── data/                   # TypeScript data sources
│   │   ├── navigation.ts       # Nav menu structure (SINGLE SOURCE)
│   │   └── servicesGrid.ts     # Homepage services grid
│   ├── layouts/                # Page layouts
│   │   ├── BaseLayout.astro    # Root layout (head, scripts, noindex)
│   │   └── ServiceLayout.astro # Service page template (auto-schema)
│   ├── lib/                    # Utility functions
│   │   ├── schema-utils.ts     # Schema.org generators
│   │   └── og-template.ts      # OG image configuration
│   ├── pages/                  # File-based routing
│   │   ├── index.astro         # Homepage
│   │   ├── services/           # Service pages
│   │   ├── resources/          # Resource pages
│   │   ├── attestation/        # Attestation service pages
│   │   └── locations/          # Location-specific pages
│   └── styles/                 # CSS architecture
│       ├── global.css          # Main stylesheet (imports all)
│       ├── tokens.css          # CSS custom properties
│       └── sections/           # Section-specific styles
├── public/                     # Static assets (copied as-is)
│   ├── assets/images/          # Non-optimized images
│   └── assets/images/og/       # Generated OG images
├── scripts/                    # Build/utility scripts
│   └── generate-og-images.js   # OG image generator
├── docs/                       # Documentation
│   └── SEO-IMPLEMENTATION-PLAN.md
├── astro.config.mjs            # Astro configuration
├── package.json                # Dependencies
└── vercel.json                 # Vercel deployment config
```

---

# 🎨 TECH STACK

| Layer | Technology |
|-------|------------|
| Framework | Astro 5.16.4 |
| Deployment | Vercel |
| Styling | CSS (custom tokens, @layer architecture) |
| Icons | Font Awesome 6 |
| Images | astro:assets (optimized) |
| Analytics | Vercel Analytics + Speed Insights |
| SEO | Custom components (SEO.astro, Schema.astro) |

---

# 🏗️ ARCHITECTURE PRINCIPLES

## 6-Silo Content Structure
1. **Legal & Corporate** — `/services/legal-translation/`, contracts, court docs
2. **Personal & Civil** — `/services/personal-documents/`, birth certs, marriage
3. **Attestation** — `/attestation/`, MOFA, embassy legalization
4. **Specialized** — `/services/specialized/`, medical, technical, financial
5. **Locations** — `/locations/`, Dubai, Abu Dhabi, area-specific
6. **Resources** — `/resources/`, guides, pricing, FAQs

## Navigation Data Flow
```
src/data/navigation.ts  →  Header-porto.astro
                        →  Sidebar.astro
                        →  MobileShell.astro
                        →  Footer.astro
```
**IMPORTANT**: All navigation changes go through `navigation.ts` — components import from this single source.

## CSS Token System
```css
/* src/styles/tokens.css */
:root {
  --ot-primary: #1a5f7a;      /* Navy blue */
  --ot-coral: #e8491d;        /* Coral accent */
  --ot-gold: #c9a227;         /* Gold accent */
  --surface-base: #ffffff;
  --surface-navy: #0a1628;
  --text-heading: #1a202c;
  --text-body: #334155;
  --text-muted: #64748b;
}
```

---

# 🔴 KNOWN ISSUES (As of Dec 2024)

## Critical
1. ~~**Card badges floating**~~ — FIXED
2. ~~**Header scroll glitch**~~ — FIXED
3. ~~**Duplicate IDs**~~ — FIXED

## High Priority
4. ~~**Missing page 404**~~ — `/resources/moj-vs-certified/` now exists
5. ~~**No MOJ credentials displayed**~~ — FIXED (TrustBar component)
6. ~~**No team/translator info**~~ — FIXED

## Medium
7. **TinaCMS** — REMOVED (site is pure Astro now)
8. ~~**Legacy WordPress 404s**~~ — Redirects configured in vercel.json

## Current Focus
- Content expansion (see CONTENT-EXPANSION-PLAN.md)
- Blog production (15-30 posts/month target)
- OG image generation for key pages

---

# 📋 RECENT COMMITS SUMMARY

**Note**: Fetch latest from `github.com/Zizoo24/new_astro_3/commits/main`

## Recent Development Focus Areas:
- Header component fixes (scroll behavior, button handlers)
- CSS architecture consolidation (@layer methodology)
- Navigation refactoring (single TypeScript source)
- Content creation for service pages
- MOJ credential badge implementation
- Mobile responsiveness improvements

---

# 🎯 BRAND VOICE GUIDELINES

## DO:
- "Boutique concierge" tone — humble, competent, transparent
- Specific UAE terminology (MOJ, MOFA, DLD, DIFC, ADGM)
- Focus on compliance and court acceptance
- Mention WhatsApp-first workflow
- Reference 60-minute standard turnaround

## DON'T:
- "Market leader" or "best in Dubai" claims
- Hype language or superlatives
- Generic translation agency messaging
- Ignore the distinction between MOJ Legal (courts) vs Certified (private)

---

# 🔑 KEY BUSINESS CONTEXT

## Service Tiers
| Service | Price | Use Case |
|---------|-------|----------|
| MOJ Legal Translation | AED 1,400 | Courts, ministries, government |
| Certified Translation | AED 700 | HR, banks, private companies |

## Target Audiences
1. UAE expats needing document translation
2. Law firms and legal professionals
3. Corporate clients (Free zone companies)
4. Immigration consultants
5. Real estate agents (DLD submissions)

## MOJ Translator Credentials
```
License: #701
Name: خالد محمد عبدالوهاب العدل (Khaled Mohamed Abdulwahab Al-Adl)
Languages: Arabic ↔ English
Valid Until: 15/10/2026
Verify: MOJ Hotline 800 333333
```

---

# 🚀 QUICK START FOR NEW AGENT

## 0. Read the Master Blueprint
**MANDATORY:** Read `CLAUDE.md` before making any changes.

## 0.5. For Content Creation
**For creating English or Arabic content:** Read `pipeline/MASTER_WORKFLOW.md`
- This is the unified content creation process
- Prompts, style guides, and checklists are in the `pipeline/` folder
- If keywords not provided, ASK the user for them

## 1. Understand the Structure
Fetch and read these files first:
```
1. astro.config.mjs — Build config
2. src/data/navigation.ts — Site structure
3. src/layouts/BaseLayout.astro — Root template
4. src/pages/index.astro — Homepage implementation
```

## 2. Check Current Issues
```
1. Visit: new-astro-3.vercel.app
2. Test: Header scroll, sidebar button, dark mode
3. Check: /resources/moj-vs-certified/ (should 404)
```

## 3. Common Tasks

### Add a new page:
```
Create: src/pages/[section]/[page-name]/index.astro
Import: ServiceLayout from '../../layouts/ServiceLayout.astro'
Update: src/data/navigation.ts (add to appropriate section)
```

### Fix CSS issues:
```
Check: src/styles/global.css (main entry)
Check: src/styles/tokens.css (variables)
Use: CSS @layer for specificity management
```

### Update navigation:
```
Edit: src/data/navigation.ts ONLY
Components auto-import from this source
```

---

# 📞 DEPLOYMENT

## GitHub → Vercel (Automatic)
1. Push to `main` branch
2. Vercel auto-deploys (~2 minutes)
3. Preview at: new-astro-3.vercel.app

## Manual via GitHub Web (iPhone-friendly)
1. Navigate to file in GitHub
2. Click pencil icon → Edit
3. Make changes
4. Commit with descriptive message
5. Wait for Vercel build

---

# 🔄 VERSION HISTORY

| Date | Change |
|------|--------|
| Dec 2024 | Header fixes, CSS consolidation, audit response |
| Nov 2024 | Navigation refactoring, content collection setup |
| Oct 2024 | Initial Astro 5 migration, Porto theme adaptation |

---

# 📎 RELATED DOCUMENTS

**Primary Reference (MUST READ):**
- `CLAUDE.md` — Master strategic blueprint (brand voice, content rules, SEO)
- `pipeline/MASTER_WORKFLOW.md` — **Unified content creation process (EN + AR)**

**Content Creation:**
- `pipeline/prompts/CONTENT_GENERATION.md` — AI prompt for writing content
- `pipeline/prompts/TRANSLATION.md` — AI prompt for EN→AR translation
- `pipeline/checklists/PRE_PUBLISH.md` — Pre-deployment checklist

**Active Documentation:**
- `SEO-STRATEGY.md` — Current keyword data
- `CONTENT-PLAN.md` — Content calendar
- `SEO_ARABIC_KEYWORDS.md` — Arabic SEO keywords

**Superseded (Do Not Use):**
- `SEO-REPAIR-ROADMAP.md` — Merged into CLAUDE.md Part VIII
- `SEO_FIXES_COMPLETE.md` — Merged into CLAUDE.md Part VIII
- `TINACMS_MIGRATION_PLAN.md` — CMS was removed

---

*Last Updated: January 30, 2026*

---

## 📚 DOCUMENTATION HIERARCHY

| Document | Purpose | Priority |
|----------|---------|----------|
| `CLAUDE.md` | Master strategic blueprint | 🔴 READ FIRST |
| `pipeline/MASTER_WORKFLOW.md` | **Content creation process** | 🔴 FOR CONTENT |
| `AI-AGENT-ONBOARDING.md` | Quick start (this file) | 🟡 Reference |
| `SEO-STRATEGY.md` | Current keyword data | 🟢 SEO |
| `CONTENT-PLAN.md` | Content calendar | 🟢 Planning |
| `SEO_ARABIC_KEYWORDS.md` | Arabic keywords | 🟢 Arabic SEO |
