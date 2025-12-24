# CLAUDE.md — MANDATORY READING FOR ALL AI AGENTS

```
╔══════════════════════════════════════════════════════════════════════╗
║                                                                      ║
║   🛑  STOP — READ THIS DOCUMENT BEFORE MAKING ANY CHANGES  🛑        ║
║                                                                      ║
║   This is the MASTER STRATEGIC BLUEPRINT for OnlineTranslation.ae   ║
║   All code, content, and design decisions must align with this doc. ║
║                                                                      ║
║   Failure to consult this document may result in:                   ║
║   • Factual errors (e.g., Hague Convention status)                  ║
║   • Brand voice violations                                          ║
║   • Architectural inconsistencies                                   ║
║   • SEO regressions                                                 ║
║                                                                      ║
╚══════════════════════════════════════════════════════════════════════╝
```

---

# **MASTER STRATEGIC BLUEPRINT: The Digital Concierge Initiative**

**Entity:** OnlineTranslation.ae  
**Model:** Boutique Digital Concierge (Managed Legal Services)  
**Strategic Partner:** Arkan Legal Translation (Fulfillment)  
**Version:** 8.0 (SEO Infrastructure Complete)  
**Last Updated:** December 24, 2025

---

## **DOCUMENT STRUCTURE**

| Part | Title | Purpose |
|------|-------|---------|
| I | Critical Facts | Hague Convention, business info |
| II | Executive Strategy | Brand positioning, value proposition |
| III | Website Architecture | URL structure, silo organization |
| IV | SEO Infrastructure | Schema, metadata, technical implementation |
| V | Content Standards | Page structure, readability rules |
| VI | Brand Codex | Voice, tone, writing guidelines |
| VII | UI/UX Standards | Visual design, accessibility |
| VIII | Implementation Status | Completed work, current state |
| IX | File Reference | Key files and their purposes |

---

## **PART I: CRITICAL FACTS — VERIFY BEFORE WRITING**

These facts MUST be correct in all content. Errors cause legal/trust issues.

### 1.1 Hague Apostille Convention Status

| Country | Hague Member? | Since | Notes |
|---------|---------------|-------|-------|
| **UAE** | ❌ **NO** | N/A | UAE is NOT a Hague member. Foreign documents need Embassy + MOFA attestation. |
| **India** | ✅ YES | July 2005 | MEA apostille replaces embassy chain |
| **Pakistan** | ❌ NO | N/A | Full attestation chain required |
| **Bangladesh** | ✅ YES | March 2025 | Recently joined |
| **Canada** | ✅ YES | January 2024 | Recently joined |
| **USA** | ✅ YES | 1981 | State/Federal apostille |
| **UK** | ✅ YES | 1965 | FCDO apostille |
| **Philippines** | ✅ YES | 2019 | PSA/DFA apostille |

**⚠️ NEVER claim UAE is a Hague member. This is the most common factual error.**

### 1.2 Business Information

| Field | Value |
|-------|-------|
| MOJ-Licensed Partner | Arkan Legal Translation |
| MOJ License | #701 |
| Translator | خالد محمد عبدالوهاب العدل (Khaled Mohamed Abdulwahab Al-Adl) |
| License Valid Until | October 15, 2026 |
| WhatsApp | +971 50 862 0217 |
| Website | onlinetranslation.ae |
| Location | Dubai, UAE (serves all UAE) |
| Verify | MOJ Hotline 800 333333 |

---

## **PART II: EXECUTIVE STRATEGY & IDENTITY**

### 2.1 The Market Gap

The Dubai translation market is polarized:

- **Legacy Agencies (Alsun):** High trust, but slow. Email chains, quote forms.
- **Street Shops (Al Syed):** Fast, but low trust. Cluttered, cheap-looking.

**Our Position:** The "Apple Store" of Translation — premium simplicity.

### 2.2 The "Concierge" Value Proposition

| Differentiator | Description |
|----------------|-------------|
| 60-Minute Promise | Standard documents delivered within 1 hour |
| WhatsApp-First | No emails. Upload, approve, pay via WhatsApp |
| White-Glove Shield | Pre-validate documents before payment |
| Right-Selling | Tell clients what they actually need (MOJ vs Certified) |

### 2.3 Service Tiers

| Service | Starting Price | Use Case |
|---------|----------------|----------|
| MOJ Legal Translation | AED 150+ | Courts, ministries, government |
| Certified Translation | AED 150+ | HR, banks, private companies |

**Key Distinction:** MOJ certification required for government. Certified sufficient for private use. We help clients avoid overpaying.

### 2.4 Legal Framework

- **Operating Model:** Document Clearing & Project Management
- **Disclaimer:** "Services executed by MOJ-Licensed Partners"
- **Partner Role (Arkan):** License, stamp, signature
- **Our Role:** Platform, customer service, logistics

---

## **PART III: WEBSITE ARCHITECTURE**

### 3.1 The 6-Silo Structure

| Silo | URL Pattern | Target Audience |
|------|-------------|-----------------|
| **Legal & Corporate** | `/legal/`, `/legal/contracts/`, `/legal/corporate/` | Lawyers, PROs, CEOs |
| **Personal & Civil** | `/personal/`, `/personal/vital-records/`, `/personal/immigration/` | Residents, Golden Visa applicants |
| **Attestation** | `/services/attestation/` | International document users |
| **Specialized** | `/specialized/` | B2B procurement |
| **Locations** | `/locations/` | Local search traffic |
| **Resources** | `/resources/`, `/blog/` | Informational intent |

### 3.2 Key URL Mappings

**Legal & Corporate:**
- `/legal/` — Hub page
- `/legal/contracts/nda/`, `/legal/contracts/spa/`, `/legal/contracts/mou/`, `/legal/contracts/lease/`
- `/legal/corporate/moa/`, `/legal/corporate/poa/`, `/legal/corporate/resolution/`, `/legal/corporate/license/`
- `/legal/litigation/verdict/`, `/legal/litigation/arbitration/`
- `/legal/wills/`

**Personal & Civil:**
- `/personal/` — Hub page
- `/personal/vital-records/birth/`, `/personal/vital-records/marriage/`, `/personal/vital-records/divorce/`, `/personal/vital-records/death/`
- `/personal/immigration/pcc/`, `/personal/immigration/bank/`, `/personal/immigration/license/`
- `/personal/academic/degree/`, `/personal/academic/transcripts/`

**Locations:**
- `/locations/dubai/`, `/locations/dubai/difc/`, `/locations/dubai/jlt/`, `/locations/dubai/marina/`, `/locations/dubai/palm-jumeirah/`, `/locations/dubai/business-bay/`, `/locations/dubai/downtown/`
- `/locations/abu-dhabi/`, `/locations/sharjah/`

### 3.3 Navigation Data Flow

```
src/data/navigation.ts  →  Header-porto.astro
                        →  Sidebar.astro
                        →  MobileShell.astro
                        →  Footer.astro
```

**IMPORTANT:** All navigation changes go through `navigation.ts` — components import from this single source.

---

## **PART IV: SEO INFRASTRUCTURE**

### 4.1 Architecture Overview

The SEO system is built with type-safe, build-time components. No runtime database queries.

```
src/
├── config/
│   └── site.ts              # Centralized site configuration
├── components/
│   ├── SEO.astro            # Advanced meta component (optional)
│   ├── Schema.astro         # Type-safe structured data
│   └── Breadcrumb.astro     # Breadcrumbs with JSON-LD
├── lib/
│   ├── schema-utils.ts      # Schema.org generators
│   └── og-template.ts       # OG image configuration
└── layouts/
    ├── BaseLayout.astro     # Core layout with noindex support
    └── ServiceLayout.astro  # Service pages with auto-schemas
```

### 4.2 Site Configuration (`src/config/site.ts`)

Centralized configuration replacing WordPress/Rank Math database settings:

```typescript
export const siteConfig = {
  name: 'OnlineTranslation.ae',
  url: 'https://onlinetranslation.ae',
  seo: {
    titleSeparator: ' | ',
    titleTemplate: '%title% | OnlineTranslation.ae',
    limits: { titleMax: 60, descriptionMax: 155 }
  },
  business: { phone, email, address, geo, openingHours },
  translator: { license, name, validUntil }
};
```

### 4.3 Schema Implementation

**BaseLayout.astro** includes:
- `LocalBusiness` schema with `@id` reference
- `WebSite` schema with SearchAction
- `AggregateRating` from Google reviews

**ServiceLayout.astro** auto-generates:
- `Service` schema from page props
- `FAQPage` schema from `faqs` array
- `HowTo` schema from `processSteps` array
- `BreadcrumbList` via Breadcrumb component

**Usage (Schema.astro component):**
```astro
<!-- Single schema -->
<Schema type="service" data={{ name: "...", description: "..." }} />

<!-- Multiple schemas -->
<Schema schemas={[
  { type: 'service', data: {...} },
  { type: 'faq', data: { items: [...] } }
]} />
```

### 4.4 Robots Meta Control

BaseLayout supports per-page indexing control:

```astro
<BaseLayout
  title="Thank You"
  description="..."
  noindex={true}   <!-- Prevents indexing -->
  nofollow={false} <!-- Default: follow links -->
/>
```

**Pages with noindex:**
- `/404/` — Error page
- `/thank-you/` — Form confirmation
- `/offline/` — PWA offline page

### 4.5 Hreflang Implementation

```html
<link rel="alternate" hreflang="en-AE" href="https://onlinetranslation.ae/..." />
<link rel="alternate" hreflang="ar" href="https://onlinetranslation.ae/عربي/" />
<link rel="alternate" hreflang="x-default" href="https://onlinetranslation.ae/..." />
```

### 4.6 Sitemap & Robots

**Sitemap:** Auto-generated via `@astrojs/sitemap` with filtering:
```javascript
sitemap({
  filter: (page) => !page.includes('/404') && !page.includes('/private/')
})
```

**robots.txt:** Located at `/public/robots.txt`
- Allows all crawlers
- Includes blog paths
- References sitemap
- Blocks admin/private paths

### 4.7 OG Image System

**Configuration:** `src/lib/og-template.ts`  
**Generator:** `scripts/generate-og-images.js`  
**Output:** `public/assets/images/og/`

```bash
npm install --save-dev puppeteer  # One-time
npm run og:generate                # Generate images
```

---

## **PART V: CONTENT STANDARDS**

### 5.1 Page Structure (2,000+ Words Target)

Every service page follows this hierarchy:

1. **Hero Section** — Service badge, H1, intro, snapshot bullets, CTA
2. **Module A: Compliance Checklist** — Prerequisites (accordion)
3. **Module B: Step-by-Step Process** — 4-step timeline
4. **Module C: After-Care Guide** — What to do next
5. **Module D: Pricing & Timelines** — Tier cards (no exact prices)
6. **Module E: FAQ** — Schema-optimized Q&A

### 5.2 Readability Rules

**MANDATORY — All content must follow these rules:**

| Rule | Limit |
|------|-------|
| Sentence length | Maximum 25 words, target 15-20 |
| Paragraph length | Maximum 3-4 sentences |
| Lists | Use bullets for 3+ items |
| Subheadings | Every 2-3 paragraphs |

**BAD (41 words):**
> "We translate all document types required for UAE government, court, and business use including birth certificates, marriage certificates, divorce decrees, death certificates, academic degrees, transcripts, police clearance certificates, bank statements, driving licenses, contracts, court judgments, and corporate filings."

**GOOD (3 sentences, avg 14 words):**
> "We translate all documents for UAE government, court, and business use. Personal documents include birth, marriage, divorce, and death certificates. We also handle academic records, police clearance, and corporate filings."

### 5.3 FAQ Answer Structure

- **First sentence:** Direct answer
- **Second sentence:** Key details
- **Third sentence:** CTA or context

### 5.4 UAE-Specific Elements to Include

- Government entities: GDRFA, MOFA, DLD, KHDA, MOHRE, DHA
- Portal names: ICP, GDRFA app, Amer
- Typing center references
- Attestation chain specifics
- Hague Convention status (accurate per Part I)

---

## **PART VI: BRAND CODEX — Voice & Tone**

### 6.1 Core Philosophy: "The Anti-Agency"

We don't sell "Magic Words." We sell **Stress Management**:
- We answer WhatsApp in 2 minutes
- We check files before payment
- We own and fix mistakes immediately

### 6.2 Writing Persona: "The Capable Assistant"

You are a Personal Assistant to a busy executive:
- **Polite** but not servile
- **Honest** even when inconvenient
- **Calm** especially when the client panics

### 6.3 The 4 Pillars of Boutique Style

| Pillar | Description |
|--------|-------------|
| **No-Nonsense** | Direct, no flowery intros |
| **Service Spotlight** | Focus on experience, not paper |
| **Partner Dynamic** | Use "We" and "You" together |
| **Quiet Authority** | No exclamation points, no ALL-CAPS |

### 6.4 Banned Vocabulary

**Never use:**
- "Market Leader" / "Best in Dubai" / "#1"
- "State-of-the-Art" / "Revolutionary"
- "Unrivaled" / "Best Prices"
- "One-Stop Shop"
- Exclamation points (!)

**Use instead:**
- "Dedicated Support" / "Managed Process"
- "Attention to Detail" / "Personalized"
- "Transparent"

### 6.5 Handling Criticism

**Don't say:** "We offer 100% Error-Free Guarantees!"  
**Say:** "We use a double-check system. If an error slips through, we correct it instantly and redeliver at our cost."

---

## **PART VII: UI/UX STANDARDS**

### 7.1 Color Palette

| Name | Light Mode | Dark Mode | Usage |
|------|------------|-----------|-------|
| Coral | `#FF1654` | `#ff6b6b` | CTAs, Accent |
| Navy | `#0E2B48` | `#243347` | Headers, Hero |
| Teal | `#0077b6` | `#7fd1ff` | Links |
| Gold | `#d4a54c` | `#ffe178` | Premium indicators |

**Always use CSS tokens:** `var(--accent-coral)`, not raw hex.

### 7.2 Typography

| Element | Size | Weight |
|---------|------|--------|
| H1 | 2.5rem (40px) | 800 |
| H2 | 2rem (32px) | 700 |
| H3 | 1.4rem (22px) | 700 |
| Body | 1rem (16px) | 400 |

### 7.3 Mobile Architecture

**NO FLOATING CTAs** — They signal desperation and obscure content.

**Instead:** Bottom Action Bar (Sticky Mobile Pattern)
- Fixed to bottom, iPhone notch-safe
- Three actions: WhatsApp, Call, Send Docs
- Shows only on mobile (<768px)

### 7.4 Accordion Implementation

**MANDATORY:** All accordion content must be in DOM at page load.

- Use HTML5 `<details>` and `<summary>` elements
- `name` attribute for exclusive behavior
- Content hidden via CSS, NOT lazy-loaded via AJAX
- Google indexes hidden-but-present content equally

### 7.5 Performance Targets

| Metric | Target |
|--------|--------|
| First Contentful Paint | < 1.0s |
| Largest Contentful Paint | < 2.0s |
| Cumulative Layout Shift | < 0.05 |
| Total Page Size | < 1.5MB |

### 7.6 Accessibility (WCAG AA)

- Visible focus rings (outline: 2px solid)
- Touch targets: 44px × 44px minimum
- Color contrast: 4.5:1 for text
- ARIA labels on all buttons/links
- Skip-to-content link

---

## **PART VIII: IMPLEMENTATION STATUS**

### 8.1 SEO Infrastructure — ✅ COMPLETE

| Component | File | Status |
|-----------|------|--------|
| Site Config | `src/config/site.ts` | ✅ Complete |
| SEO Component | `src/components/SEO.astro` | ✅ Complete |
| Schema Component | `src/components/Schema.astro` | ✅ Complete |
| Schema Utilities | `src/lib/schema-utils.ts` | ✅ Complete |
| OG Template | `src/lib/og-template.ts` | ✅ Complete |
| OG Generator | `scripts/generate-og-images.js` | ✅ Complete |
| Noindex Support | `BaseLayout.astro` | ✅ Complete |
| Breadcrumb Schema | `Breadcrumb.astro` | ✅ Complete |

### 8.2 Schema Implementation — ✅ COMPLETE

| Schema Type | Location | Status |
|-------------|----------|--------|
| LocalBusiness | BaseLayout | ✅ With @id reference |
| WebSite | BaseLayout | ✅ With SearchAction |
| AggregateRating | BaseLayout | ✅ 5.0 stars, 8 reviews |
| ContactPoint | BaseLayout | ✅ Customer service + sales |
| Service | ServiceLayout | ✅ Auto-generated |
| FAQPage | ServiceLayout | ✅ From faqs prop |
| HowTo | ServiceLayout | ✅ From processSteps prop |
| BreadcrumbList | Breadcrumb.astro | ✅ All pages |

### 8.3 Internal Linking — ✅ COMPLETE

| Component | Pages Deployed | Status |
|-----------|----------------|--------|
| RelatedServices | 35+ pages | ✅ Complete |
| CrossSiloLinks | Hub pages | ✅ Complete |
| Breadcrumbs | All service pages | ✅ Complete |

### 8.4 Content Status

| Category | Status |
|----------|--------|
| Thin Content Expansion | ✅ 3 pages expanded |
| Missing Pages Created | ✅ 3 priority pages |
| FAQ Additions | ✅ 2 pages enhanced |
| Blog Infrastructure | ✅ Ready (3 posts published) |

### 8.5 Pages with Noindex

- [x] `/404/`
- [x] `/thank-you/`
- [x] `/offline/`

### 8.6 Deferred Issues (Require Human Decision)

These issues are documented in `SEO-ISSUES-DEFERRED.md` and require manual intervention:

| Issue | Count | Action Needed |
|-------|-------|---------------|
| Long page titles (>60 chars) | 53 | Shorten while preserving keywords |
| Low text-to-HTML ratio | 45 | Add more content |
| Content not optimized | 24 | Keyword research + integration |
| Missing pages | 3 | Create or remove links |
| Duplicate title patterns | 2 | Differentiate location pages |

---

## **PART IX: FILE REFERENCE**

### 9.1 Core Configuration

| File | Purpose |
|------|---------|
| `astro.config.mjs` | Astro configuration, sitemap |
| `src/config/site.ts` | Centralized site/SEO config |
| `src/data/navigation.ts` | Navigation structure (single source) |
| `src/data/serviceLinks.ts` | Service page relationships |
| `public/robots.txt` | Crawler directives |
| `vercel.json` | Deployment config, cache headers |

### 9.2 Layouts

| File | Purpose |
|------|---------|
| `BaseLayout.astro` | Root layout, global schemas, noindex support |
| `ServiceLayout.astro` | Service pages with auto-schema |
| `BlogLayout.astro` | Blog posts with Article schema |
| `CategoryLayout.astro` | Category/hub pages |

### 9.3 SEO Components

| File | Purpose |
|------|---------|
| `SEO.astro` | Advanced meta with validation |
| `Schema.astro` | Type-safe structured data |
| `Breadcrumb.astro` | Breadcrumbs with JSON-LD |

### 9.4 SEO Utilities

| File | Purpose |
|------|---------|
| `src/lib/schema-utils.ts` | Schema.org generators |
| `src/lib/og-template.ts` | OG image configuration |
| `scripts/generate-og-images.js` | Puppeteer OG generator |

### 9.5 Styles (Canonical Location: `public/styles/`)

| File | Purpose |
|------|---------|
| `base-architecture.css` | CSS tokens, foundation |
| `porto-desktop.css` | Desktop styles |
| `sticky-mobile.css` | Mobile bottom bar |
| `dark-mode-tokenized.css` | Dark theme |
| `contrast-fixes.css` | Accessibility fixes |

### 9.6 Documentation

| File | Purpose | Status |
|------|---------|--------|
| `CLAUDE.md` | Master blueprint (this file) | ✅ Primary |
| `docs/SEO-IMPLEMENTATION-PLAN.md` | SEO infrastructure details | ✅ Active |
| `AI-AGENT-ONBOARDING.md` | Quick start for AI agents | ✅ Active |
| `TASKS.md` | Component/UI task tracking | ✅ Active |
| `CONTENT-EXPANSION-PLAN.md` | Content strategy | ✅ Active |
| `SEO-ISSUES-DEFERRED.md` | Issues requiring human decisions | ✅ Active |
| `FEATURE_CATALOG.md` | Migration tracking from HTML | ✅ Reference |
| `COLOR_PALETTE_BLUEPRINT.md` | Design tokens | ✅ Reference |
| `IMAGE_CATALOG.md` | Image asset inventory | ✅ Reference |

### 9.7 Deprecated/Superseded Files

| File | Status | Notes |
|------|--------|-------|
| `SEO-REPAIR-ROADMAP.md` | Superseded | Content in Part VIII |
| `SEO_FIXES_COMPLETE.md` | Superseded | Outdated |
| `SEO-FIXES-PLAN.md` | Superseded | Completed |
| `SEO-TITLE-AUDIT.md` | Superseded | Merged into SEO-ISSUES-DEFERRED.md |
| `READABILITY-OPTIMIZATION-PLAN.md` | Superseded | Rules now in Part V |
| `TINACMS_MIGRATION_PLAN.md` | Deprecated | CMS removed |

---

## **CHANGELOG**

### December 24, 2025 — SEO Infrastructure (v8.0)

**New Files Created:**
- `src/config/site.ts` — Centralized site configuration
- `src/config/index.ts` — Clean exports
- `src/components/SEO.astro` — Advanced SEO meta component
- `src/components/Schema.astro` — Type-safe structured data
- `src/lib/schema-utils.ts` — Schema.org generators
- `src/lib/og-template.ts` — OG image configuration
- `src/lib/index.ts` — Clean exports
- `scripts/generate-og-images.js` — Puppeteer OG generator
- `public/assets/images/og/` — OG image output directory
- `docs/SEO-IMPLEMENTATION-PLAN.md` — Implementation documentation

**Files Modified:**
- `BaseLayout.astro` — Added noindex/nofollow props
- `404.astro` — Added noindex
- `thank-you.astro` — Added noindex
- `offline.astro` — Added noindex
- `eslint.config.mjs` — Added accessibility rules
- `package.json` — Added og:generate script

### December 2025 — Previous Updates

- Removed TinaCMS (pure Astro)
- Added Chatbase pricing assistant
- Added Vercel Analytics
- Fixed Hague Convention errors
- 70+ SEO fixes (titles, descriptions, alt)
- RelatedServices deployed to 35+ pages
- Blog infrastructure complete (3 posts)

---

## **AI AGENT PROTOCOL**

**Before making ANY changes:**

1. ✅ Read this entire document
2. ✅ Check Part I for factual accuracy (Hague Convention)
3. ✅ Follow Part V readability rules (25 word max sentences)
4. ✅ Use Part VI brand voice (no hype, no "best in Dubai")
5. ✅ Reference Part IX for correct file locations

**For SEO changes:**
- Use components in `src/components/` (SEO.astro, Schema.astro)
- Reference `src/config/site.ts` for configuration
- Check `docs/SEO-IMPLEMENTATION-PLAN.md` for details

**For content changes:**
- Follow Part V structure (Hero → Checklist → Process → After-Care → Pricing → FAQ)
- Include UAE-specific entities (GDRFA, MOFA, DLD, etc.)
- Add 8+ internal links per page
- Include 6-15 FAQ questions

---

*Last Updated: December 24, 2025 — Version 8.0*
