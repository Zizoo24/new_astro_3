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
│   │   └── ...
│   ├── content/                # Astro Content Collections
│   │   ├── config.ts           # Zod schemas for content
│   │   ├── core/               # Core site content (home, about)
│   │   ├── services/           # Service pages content
│   │   └── blog/               # Blog posts
│   ├── data/                   # TypeScript data sources
│   │   ├── navigation.ts       # Nav menu structure (SINGLE SOURCE OF TRUTH)
│   │   └── servicesGrid.ts     # Homepage services grid
│   ├── layouts/                # Page layouts
│   │   ├── BaseLayout.astro    # Root layout (head, scripts)
│   │   └── ServiceLayout.astro # Service page template
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
│   └── assets/images/          # Non-optimized images
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
| Content | Astro Content Collections + Zod |
| Images | astro:assets (optimized) |
| CMS | TinaCMS (in progress) |

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
1. **Card badges floating** — `.service-card-v2` missing `position: relative`
2. **Header scroll glitch** — JS-based spacer height causing reflow
3. **Duplicate IDs** — `#sidebarToggle` in Header + MobileShell

## High Priority
4. **Missing page 404** — `/resources/moj-vs-certified/` in nav but doesn't exist
5. **No MOJ credentials displayed** — Audit criticism
6. **No team/translator info** — "Black box" perception

## Medium
7. **TinaCMS migration incomplete** — Branch sync issues with Tina Cloud
8. **Legacy WordPress 404s** — Old URLs still indexed by Google

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

For detailed implementation guides, search previous conversations for:
- "AUDIT-RESPONSE-PLAN.md" — Trust rehabilitation strategy
- "Header-porto-FIXED-v2.astro" — Scroll glitch fix
- "MojCredentialBadge.astro" — Credential display component
- "TranslatorProfile.astro" — Team section component
- "moj-vs-certified/index.astro" — Missing page content

---

*Last Updated: December 16, 2025*
