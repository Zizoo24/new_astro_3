# CLAUDE.md — MANDATORY READING FOR ALL AI AGENTS

```
╔══════════════════════════════════════════════════════════════════════╗
║                                                                      ║
║   🛑  STOP — READ THIS DOCUMENT BEFORE MAKING ANY CHANGES  🛑        ║
║                                                                      ║
║   This is the MASTER STRATEGIC BLUEPRINT for OnlineTranslation.ae   ║
║   All code, content, and design decisions must align with this doc. ║
║                                                                      ║
╚══════════════════════════════════════════════════════════════════════╝
```

---

# QUICK REFERENCE SUMMARY (First 100 Lines)

This summary covers everything you need for most tasks. Detailed sections follow.

## 1. CRITICAL FACTS — Memorize These

| Fact | Value |
|------|-------|
| **UAE Hague Status** | ❌ **NOT A MEMBER** — Never claim UAE accepts apostilles |
| **MOJ License** | #701 (Arkan Legal Translation) |
| **Translator** | Khaled Mohamed Abdulwahab Al-Adl |
| **WhatsApp** | +971 50 862 0217 |
| **Verify License** | MOJ Hotline 800 333333 |

**Hague Convention Quick Reference:**
- UAE, Pakistan: ❌ NO (need Embassy + MOFA attestation)
- India, USA, UK, Canada, Philippines, Bangladesh: ✅ YES (apostille valid)

## 2. BRAND IDENTITY — "The Anti-Agency"

**Position:** Premium boutique concierge, NOT a cheap translation shop.

**Value Props:**
- 60-minute delivery for standard documents
- WhatsApp-first (no email chains)
- Pre-validate documents before payment
- Right-selling (tell clients what they actually need)

**Services:**
- MOJ Legal Translation: AED 150+ (courts, government)
- Certified Translation: AED 150+ (HR, banks, private)

## 3. CONTENT RULES — Follow Every Time

### Readability (MANDATORY)
| Rule | Limit |
|------|-------|
| Sentence length | **Max 25 words** (target 15-20) |
| Paragraph length | Max 3-4 sentences |
| Lists | Use bullets for 3+ items |
| Subheadings | Every 2-3 paragraphs |

### Banned Words (NEVER USE)
- "Market Leader" / "Best in Dubai" / "#1"
- "State-of-the-Art" / "Revolutionary" / "Unrivaled"
- "Best Prices" / "One-Stop Shop"
- Exclamation points (!)

### Use Instead
- "Dedicated Support" / "Managed Process"
- "Attention to Detail" / "Personalized" / "Transparent"

### Writing Voice
- **Polite** but not servile
- **Honest** even when inconvenient
- **Calm** especially when client panics
- No hype, no ALL-CAPS, quiet authority

## 4. PAGE STRUCTURE — Service Pages

1. Hero Section — Badge, H1, intro, bullets, CTA
2. Module A — Compliance Checklist (accordion)
3. Module B — Step-by-Step Process (4 steps)
4. Module C — After-Care Guide
5. Module D — Pricing Tiers (no exact prices)
6. Module E — FAQ (6-15 questions with schema)

**Required:** 8+ internal links, UAE entities (GDRFA, MOFA, DLD, DHA)

## 5. SEO ESSENTIALS

| Element | Requirement |
|---------|-------------|
| Title length | Max 60 characters |
| Description | Max 155 characters |
| FAQ schema | Required on service pages |
| Internal links | 8+ per page |

**Competitive Landscape (Feb 2026):**
- **Al Syed** (translationindubai.com): 350+ English pages, #1-2 "legal translation Dubai", ZERO Arabic pages
- **Alsun** (3 domains): 40-70 Arabic pages, 256+ Google reviews, dominates Arabic SERPs
- **OnlineTranslation.ae**: ~82 Arabic pages (most of any single domain), 4,500+ words/page, comprehensive schema
- **Strategy:** English = own the document journey (authority guides). Arabic = optimize + scale to 120+ pages.
- Arabic content is the primary growth lever. Al Syed is invisible in Arabic. Alsun is beatable.

**Key Files:**
- `src/config/site.ts` — Site configuration
- `src/components/Schema.astro` — Structured data
- `src/layouts/ServiceLayout.astro` — Auto-generates schemas

## 6. UI/UX RULES

**Colors (use CSS tokens):**
- Coral `var(--accent-coral)` — CTAs
- Navy `var(--surface-navy)` — Headers
- Teal — Links
- Gold — Premium indicators

**CRITICAL:** Never use gray text on navy backgrounds. Use `var(--text-on-dark)`.

**Mobile:** No floating CTAs. Use sticky bottom bar with WhatsApp/Call/Send.

## 7. KEY FILES

| Purpose | File |
|---------|------|
| Site config | `src/config/site.ts` |
| Navigation | `src/data/navigation.ts` |
| Service links | `src/data/serviceLinks.ts` |
| Base layout | `src/layouts/BaseLayout.astro` |
| Service layout | `src/layouts/ServiceLayout.astro` |
| Redirects | `vercel.json` |

## 8. RELATED DOCUMENTS

| Document | Purpose |
|----------|---------|
| [`pipeline/MASTER_WORKFLOW.md`](./pipeline/MASTER_WORKFLOW.md) | **Content creation process (EN + AR)** |
| [`SEO-STRATEGY.md`](./SEO-STRATEGY.md) | **Competitive landscape (v3.0)** — Al Syed/Alsun profiles, Arabic content strategy |
| [`CONTENT-PLAN.md`](./CONTENT-PLAN.md) | **Content calendar (v3.0)** — Dual-track EN+AR, 19-week execution plan |
| [`RESEARCH.md`](./RESEARCH.md) | Competitive audit data, operational intelligence, Al Syed deep profile |
| [`SEO-ACTION-PLAN.md`](./SEO-ACTION-PLAN.md) | Tactical plan — backlinks, internal linking, phase verification |
| [`AI-AGENT-ONBOARDING.md`](./AI-AGENT-ONBOARDING.md) | Quick start guide |
| [`SEO_ARABIC_KEYWORDS.md`](./SEO_ARABIC_KEYWORDS.md) | Arabic SEO keywords and formulas |

---

# DETAILED REFERENCE (Full Documentation Below)

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

**Specialized:**
- `/specialized-translation/` — Hub page
- `/specialized/medical/` — Medical hub
- `/specialized/medical/dha-dataflow/` — DHA DataFlow healthcare licensing
- `/specialized/technical/`, `/specialized/hospitality/`, `/specialized/digital/`, `/specialized/financial/`

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

### 4.8 ClickRank AI SEO

**What it does:** ClickRank AI dynamically injects optimized SEO elements (titles, descriptions, schema) via JavaScript at runtime. Google's render queue processes these changes.

**Site ID:** `4ec5887b-e7a8-43e1-a971-567e38ec258c`

**Implementation:**
| Layout | Method | Location |
|--------|--------|----------|
| `BaseLayout.astro` | Deferred loading (performance) | Lines 372-396 |
| `BaseLayoutArabic.astro` | Deferred loading (performance) | Lines 198-215 |

**Both layouts** use the same performance-optimized deferred loading pattern:
```javascript
(function() {
  var clickRankLoaded = false;
  function loadClickRank() {
    if (clickRankLoaded) return;
    clickRankLoaded = true;
    var s = document.createElement("script");
    s.src = "https://js.clickrank.ai/seo/4ec5887b-e7a8-43e1-a971-567e38ec258c/script?" + new Date().getTime();
    s.async = true;
    document.head.appendChild(s);
  }
  ['scroll','click','touchstart','mousemove'].forEach(function(evt){
    window.addEventListener(evt, loadClickRank, {once:true,passive:true});
  });
  setTimeout(loadClickRank, 5000);
})();
```

**How it works:**
1. Your static HTML loads (repo content)
2. ClickRank JS executes on user interaction or after 5 seconds
3. ClickRank fetches optimizations and injects/overwrites SEO elements
4. Google's render queue sees the modified DOM

**Important notes:**
- Changes are runtime only — not permanent in source files
- Repo changes won't remove ClickRank optimizations (it overrides at runtime)
- Do NOT edit the snippet unless changing ClickRank accounts
- CSP headers in `vercel.json` allow `js.clickrank.ai` and `*.clickrank.ai`
- DNS prefetch configured for reduced latency

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

### 7.1.1 CRITICAL: Gray Text on Navy Backgrounds — FORBIDDEN

**⚠️ NEVER use gray or muted text colors on navy backgrounds. This is a mandatory contrast rule.**

| Background | ❌ NEVER Use | ✅ ALWAYS Use |
|------------|--------------|---------------|
| Navy (`--surface-navy`) | `--text-muted`, `--text-secondary`, gray colors | `--text-on-dark`, `--text-on-dark-muted` (min 9:1 contrast) |
| Dark sections (`.bg-dark`) | Any gray text | Bright white or light blue text |
| Hero sections | Muted/subtle colors | High-contrast text with opacity if needed |

**Implementation:**
- Use `var(--text-on-dark)` for primary text on dark backgrounds
- Use `opacity: 0.95` for subtle hierarchy, NOT gray colors
- CSS file `contrast-fixes.css` enforces this globally
- Hero section text must be white/bright, not gray

**Why this matters:** Gray text on navy fails WCAG contrast requirements and creates an inaccessible, hard-to-read experience. The site has enforced CSS rules in `public/styles/contrast-fixes.css` that override gray text on dark sections.

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

### 7.7 RTL (Arabic) Guidelines

**Architecture:** CSS-only approach via `html[lang="ar"]` selectors. Same HTML structure for both languages.

**Key Files:**
- `public/styles/rtl.css` — All RTL overrides
- `src/layouts/BaseLayoutArabic.astro` — Arabic page layout
- `src/components/HeaderUnified.astro` — Single header component for EN/AR

#### 7.7.1 Typography Rules

| Rule | Value | Reason |
|------|-------|--------|
| `letter-spacing` | `0 !important` | Breaks Arabic text rendering |
| `line-height` (body) | `1.8` | Arabic needs more vertical space |
| `line-height` (headings) | `1.6` | Headings need less but still more than English |
| Font family | `var(--font-arabic)` | Noto Sans Arabic with system fallbacks |

**CSS Variables:**
```css
--font-arabic: 'Noto Sans Arabic', 'Geeza Pro', 'Simplified Arabic', 'Tahoma', sans-serif;
--font-arabic-heading: 'Noto Sans Arabic', 'Geeza Pro', 'Traditional Arabic', serif;
```

#### 7.7.2 LTR Islands (Keep Left-to-Right)

These elements must stay LTR even in Arabic context:

| Element | CSS Class | Example |
|---------|-----------|---------|
| Email addresses | `.ltr-content` | info@onlinetranslation.ae |
| Phone numbers | `.phone-number` | +971 50 862 0217 |
| Brand names | `.brand-name` | OnlineTranslation.ae |
| Code/URLs | `[dir="ltr"]` | https://... |
| Form inputs | Auto-applied | Email, phone, URL fields |

#### 7.7.3 Icon Flipping

| Should Flip | Should NOT Flip |
|-------------|-----------------|
| `fa-arrow-right` → RTL reverses | `fa-phone` (universal) |
| `fa-chevron-right` | `fa-envelope` (universal) |
| `fa-long-arrow-right` | `fa-whatsapp` (brand) |
| Directional indicators | `fa-check` (universal) |

**CSS Implementation:**
```css
/* Icons that flip */
html[lang="ar"] .fa-arrow-right:not(.no-flip) { transform: scaleX(-1); }

/* Prevent flip */
<i class="fa-arrow-right no-flip"></i>
```

#### 7.7.4 Form Inputs

**Rule:** Email, phone, and URL inputs stay LTR regardless of page direction.

Already implemented in `rtl.css`:
```css
html[lang="ar"] input[type="email"],
html[lang="ar"] input[type="tel"],
html[lang="ar"] input[type="url"] {
  direction: ltr !important;
  text-align: left !important;
}
```

#### 7.7.5 hreflang Implementation

| Layout | Arabic hreflang |
|--------|-----------------|
| `BaseLayout.astro` | Points to `/ar/` |
| `BaseLayoutArabic.astro` | Uses canonical path |
| `BaseLayoutMultilingual.astro` | Points to `/ar/` |

**Note:** `/عربي/` is a legacy URL that 301 redirects to `/ar/`. All hreflang tags point to `/ar/` (the final indexed URL).

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
| ClickRank AI SEO | `BaseLayout.astro`, `BaseLayoutArabic.astro` | ✅ Complete |

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
| `SEO-STRATEGY.md` | SEO analysis and keyword data | ✅ Active |
| `CONTENT-PLAN.md` | Content calendar and targets | ✅ Active |
| `AI-AGENT-ONBOARDING.md` | Quick start for AI agents | ✅ Active |

---

## **CHANGELOG**

### February 7, 2026 — SEO Strategy Overhaul: Arabic Content Priority (v8.7)

**Al Syed Competitive Analysis:**
- Deep-dive on translationindubai.com: 350+ English pages, #1-2 for "legal translation Dubai", zero Arabic content
- Corrected competitor distinction: Al Syed (English volume) vs Alsun (bilingual multi-domain) are separate strategies
- Added head-to-head comparison table across 11 competitive factors

**Arabic Content Strategy Elevated:**
- Arabic content promoted from Phase 4 afterthought to parallel track from Week 1
- Current inventory: ~82 Arabic pages (already exceeds any single competitor domain)
- Target: 120+ Arabic pages across 19-week dual-track execution plan
- Arabic authority process guides, rejection prevention blogs, neighborhood targeting, location expansion

**Document Updates:**
- `SEO-STRATEGY.md` v3.0: full competitive landscape rewrite with Al Syed profile, Arabic strategy as Part II
- `CONTENT-PLAN.md` v3.0: dual-track EN+AR execution, 17 English + 23 Arabic tasks, Arabic scaling milestones
- `RESEARCH.md`: Al Syed deep profile added, Alsun vs Al Syed comparison table
- `SEO-ACTION-PLAN.md`: updated competitive position table, Phase 4 elevated to parallel
- `CLAUDE.md`: competitive landscape in quick reference, Arabic agent protocol, updated document references

### January 30, 2026 — CSS Unification & Pipeline Improvements (v8.6)

**CSS Unification (Arabic layout now matches English):**
- Fixed broken CSS links in `BaseLayoutArabic.astro` (visibility-fixes.css, visual-relief.css)
- Added 7 missing CSS files to Arabic layout (text-breaking, faq-accordion, responsive-layouts, etc.)
- Ported deferred CSS loading pattern from English layout
- Added noscript fallback for JS-disabled users
- Deferred GTM loading for better performance

**Visual Relief RTL Support (in `rtl.css`):**
- Added RTL overrides for text-breaking.css utilities
- Flipped accent borders, callout blocks, service tags for Arabic
- Fixed margin/padding directions for visual relief components

**Pipeline Improvements (MASTER_WORKFLOW.md v3.2):**
- Documented 14 visual relief CSS utilities with usage examples
- Added section 4.4: Internal Link Placement Strategy
- Added POST-PUBLICATION WORKFLOW section with timelines
- Added content refresh triggers and success metrics
- Updated PRE_PUBLISH.md with visual relief checklist

**Deprecated File Cleanup:**
- Deleted `Header-porto.astro` and `Header-porto-ar.astro` (replaced by HeaderUnified)
- Removed `public/styles/deprecated/` folder (6 unused CSS files, 5,249 lines)

**Content Updates:**
- Fixed attestation page title/meta for CTR improvement (position 7 → 0% CTR)
- Created legal translation Dubai MOJ guide blog post
- Expanded /legal-translation-dubai/ with DIFC/ADGM section (+600 words)

### January 30, 2026 — RTL Typography & Header Unification (v8.5)

**Header Unification:**
- Created `HeaderUnified.astro` — single component for EN/AR (CSS-only RTL handling)
- Updated all layouts to use unified header: `BaseLayout`, `BaseLayoutArabic`, `BaseLayoutMultilingual`
- Added `docs/HEADER_UNIFICATION_PLAN.md` with implementation details

**RTL Typography Fixes (in `rtl.css`):**
- Disabled `letter-spacing` globally for Arabic (breaks text rendering)
- Increased `line-height` to 1.8 for body, 1.6 for headings
- Added system Arabic font fallbacks (`Geeza Pro`, `Simplified Arabic`, `Tahoma`)
- Added CSS variables: `--font-arabic`, `--font-arabic-heading`
- Ensured form inputs (email, phone, URL) stay LTR
- Added icon flipping rules with `.no-flip` escape class

**hreflang Fixes:**
- Standardized all layouts to use `/ar/` (not `/عربي/`) for Arabic hreflang
- `/عربي/` is legacy URL that 301 redirects to `/ar/`

**Font Loading Optimization:**
- Added preload for Arabic font CSS in `BaseLayoutArabic.astro`
- Reduced font weights from 5 (400-800) to 3 (400, 600, 700)
- Added Arabic character subset for smaller download

**Documentation:**
- Added section 7.7: RTL (Arabic) Guidelines to CLAUDE.md
- Updated `pipeline/MASTER_WORKFLOW.md` v3.1 with link verification step

### January 28, 2026 — ClickRank AI Site ID Update & Arabic Deferred Loading (v8.4)

**Changes:**
- Updated ClickRank AI Site ID to `4ec5887b-e7a8-43e1-a971-567e38ec258c`
- Upgraded `BaseLayoutArabic.astro` from eager loading to deferred loading pattern (matches `BaseLayout.astro`)
- Both layouts now use identical interaction-triggered + 5s timeout deferred loading

**Why deferred loading:**
- ClickRank injects SEO meta/schema at runtime; Google WRS processes JS in a second indexing wave
- Deferring avoids blocking the critical rendering path, improving Core Web Vitals (LCP, INP)
- Script loads on first user interaction (scroll/click/touch/mousemove) or after 5s idle

### January 27, 2026 — ClickRank AI SEO Documentation (v8.3)

**Documentation Updates:**
- Added section 4.8: ClickRank AI SEO with full implementation details
- Documented deferred loading pattern for performance optimization
- Added ClickRank to implementation status (section 8.1)

**Technical Details:**
- Implemented in `BaseLayout.astro` (deferred) and `BaseLayoutArabic.astro` (deferred)
- CSP headers configured in `vercel.json`
- DNS prefetch for `js.clickrank.ai`

### January 9, 2026 — SEO Strategy & Content Plan (v8.2)

**New Documents:**
- `SEO-STRATEGY.md` — GSC data analysis, keyword priorities, optimization status
- `CONTENT-PLAN.md` — 4-week content calendar, keyword targets, publishing schedule

**CLAUDE.md Updates:**
- Added Quick Reference Summary (first 100 lines)
- Updated documentation references

### December 27, 2025 — DHA DataFlow & Hub Visual Navigation (v8.1)

**New Page Created:**
- `/specialized/medical/dha-dataflow/` — Complete DHA DataFlow healthcare licensing page

**Hub Pages Enhanced:**
- Added "Hero Subpage Mosaic" visual navigation to all hub pages

**Navigation Updates:**
- Added DHA DataFlow to desktop dropdown, mobile accordion, and hub cards

### December 24, 2025 — SEO Infrastructure (v8.0)

**New Files Created:**
- `src/config/site.ts` — Centralized site configuration
- `src/components/SEO.astro` — Advanced SEO meta component
- `src/components/Schema.astro` — Type-safe structured data
- `src/lib/schema-utils.ts` — Schema.org generators

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

1. ✅ Read the Quick Reference Summary above
2. ✅ Check Part I for factual accuracy (Hague Convention)
3. ✅ Follow Part V readability rules (25 word max sentences)
4. ✅ Use Part VI brand voice (no hype, no "best in Dubai")
5. ✅ Reference Part IX for correct file locations

**For content creation (English or Arabic):**
- **Read `pipeline/MASTER_WORKFLOW.md`** — the unified content process
- Use prompts from `pipeline/prompts/` for AI-assisted writing
- Apply style guide from `pipeline/style-guides/`
- Complete `pipeline/checklists/PRE_PUBLISH.md` before deployment
- If SEO keywords not provided, ASK the user for them

**For Arabic content specifically:**
- **Read `SEO_ARABIC_KEYWORDS.md`** for keyword formulas and placement rules
- Abu Dhabi (أبوظبي) appears BEFORE Dubai (دبي) in all Arabic titles and meta
- Do NOT use أفضل (best) or الأول (first/leading) or رائد (pioneer) in visible content
- Phone numbers, emails, and brand names stay LTR (see Part VII 7.7.2)
- Use `BaseLayoutArabic.astro` for Arabic pages
- Arabic pages must link to OTHER Arabic pages (not only EN↔AR hreflang)
- Arabic content is NOT a translation of English — it needs its own keyword strategy

**For SEO changes:**
- Use components in `src/components/` (SEO.astro, Schema.astro)
- Reference `src/config/site.ts` for configuration
- Check `SEO-STRATEGY.md` (v3.0) for competitive landscape and Arabic strategy
- Check `SEO_ARABIC_KEYWORDS.md` for Arabic keywords
- Check `CONTENT-PLAN.md` (v3.0) for dual-track EN+AR execution plan

**For content changes:**
- Follow Part V structure (Hero → Checklist → Process → After-Care → Pricing → FAQ)
- Check `CONTENT-PLAN.md` for what to write next (both English AND Arabic tracks)
- Include UAE-specific entities (GDRFA, MOFA, DLD, etc.)
- Add 8+ internal links per page
- Include 6-15 FAQ questions
- **NEVER use:** best, top, #1, elite, leading, premier, market leader
- **NEVER mention:** competitor names

**Competitive context (read `SEO-STRATEGY.md` for full details):**
- English generic keywords ("legal translation Dubai") are UNWINNABLE — Al Syed has 350+ pages
- English strategy = authority-specific process guides where zero competitors exist
- Arabic is the primary growth lever — Al Syed has 0 Arabic pages, Alsun has 40-70
- We already have ~82 Arabic pages — optimization and expansion, not starting from scratch

---

*Last Updated: February 7, 2026 — Version 8.7*
