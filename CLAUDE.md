# CLAUDE.md

> **OnlineTranslation.ae** — Boutique Digital Concierge for Legal Translation
> Partner: Arkan Legal Translation (MOJ License #701) | Version 8.2 | December 27, 2025

---

## Quick Reference

**Before ANY changes, verify:**

1. Check [Critical Facts](#critical-facts) — UAE is NOT a Hague member
2. Follow [Content Creation](#content-creation) — readability + visual relief
3. Use [Brand Voice](#brand-voice) — no hype, no "best in Dubai"
4. Reference [File Locations](#file-reference) — single source of truth

**Key files:**
- `src/config/site.ts` — Site/SEO configuration
- `src/data/navigation.ts` — All navigation (single source)
- `src/components/Schema.astro` — Structured data
- `docs/SEO-IMPLEMENTATION-PLAN.md` — SEO details

---

## Critical Facts

### Hague Apostille Convention

| Country | Member? | Notes |
|---------|---------|-------|
| **UAE** | ❌ NO | Embassy + MOFA attestation required |
| India | ✅ Yes | MEA apostille (since 2005) |
| Pakistan | ❌ No | Full attestation chain |
| Bangladesh | ✅ Yes | Since March 2025 |
| Canada | ✅ Yes | Since January 2024 |
| USA | ✅ Yes | State/Federal apostille |
| UK | ✅ Yes | FCDO apostille |
| Philippines | ✅ Yes | PSA/DFA apostille |

> ⚠️ **NEVER claim UAE is a Hague member.** Most common factual error.

### Business Info

| Field | Value |
|-------|-------|
| MOJ Partner | Arkan Legal Translation (#701) |
| Translator | Khaled Mohamed Abdulwahab Al-Adl |
| License Valid | October 15, 2026 |
| WhatsApp | +971 50 862 0217 |
| Verify | MOJ Hotline 800 333333 |

---

## Brand Position

**Market gap:** Legacy agencies are slow; street shops lack trust.
**Our position:** "Apple Store" of Translation — premium simplicity.

| Differentiator | Description |
|----------------|-------------|
| 60-Minute Promise | Standard docs within 1 hour |
| WhatsApp-First | No emails. Upload, approve, pay via WhatsApp |
| White-Glove Shield | Pre-validate before payment |
| Right-Selling | Tell clients what they actually need |

### Service Tiers

| Service | Price | Use Case |
|---------|-------|----------|
| MOJ Legal | AED 150+ | Courts, ministries, government |
| Certified | AED 150+ | HR, banks, private companies |

**Key:** MOJ required for government. Certified sufficient for private use.

---

## Website Architecture

### 6-Silo Structure

| Silo | URL Pattern | Audience |
|------|-------------|----------|
| Legal & Corporate | `/legal/`, `/legal/contracts/` | Lawyers, PROs |
| Personal & Civil | `/personal/`, `/personal/vital-records/` | Residents |
| Attestation | `/services/attestation/` | International docs |
| Specialized | `/specialized/` | B2B |
| Locations | `/locations/` | Local SEO |
| Resources | `/resources/`, `/blog/` | Informational |

### Key URLs

**Legal:** `/legal/` (hub), `/legal/contracts/nda/`, `/legal/corporate/moa/`, `/legal/litigation/verdict/`, `/legal/wills/`

**Personal:** `/personal/` (hub), `/personal/vital-records/birth/`, `/personal/immigration/pcc/`, `/personal/academic/degree/`

**Specialized:** `/specialized-translation/` (hub), `/specialized/medical/`, `/specialized/medical/dha-dataflow/`

**Locations:** `/locations/dubai/`, `/locations/dubai/difc/`, `/locations/abu-dhabi/`

### Navigation Flow

```
src/data/navigation.ts → Header-porto.astro, Sidebar.astro, MobileShell.astro, Footer.astro
```

> 💡 All navigation changes go through `navigation.ts`.

---

## SEO Infrastructure

### File Structure

```
src/config/site.ts        # Site configuration
src/components/SEO.astro  # Meta component
src/components/Schema.astro # Structured data
src/lib/schema-utils.ts   # Schema generators
layouts/BaseLayout.astro  # Core layout, noindex support
layouts/ServiceLayout.astro # Auto-generates Service/FAQ/HowTo schemas
```

### Schema Usage

```astro
<Schema type="service" data={{ name: "...", description: "..." }} />

<Schema schemas={[
  { type: 'service', data: {...} },
  { type: 'faq', data: { items: [...] } }
]} />
```

### Robots Control

```astro
<BaseLayout noindex={true} />  <!-- Prevents indexing -->
```

**Noindex pages:** `/404/`, `/thank-you/`, `/offline/`

### OG Images

```bash
npm run og:generate  # Generate images to public/assets/images/og/
```

---

## Content Creation

### Page Structure

1. **Hero** — Badge, H1, intro (1-2 sentences), bullets, CTA
2. **Compliance Checklist** — Prerequisites (accordion)
3. **Process** — 4-step timeline
4. **After-Care** — Next steps
5. **Pricing** — Tier cards (no exact prices)
6. **FAQ** — 6-15 schema-optimized Q&A

---

### Readability Rules

| Rule | Limit |
|------|-------|
| Sentence length | Max 25 words, target 15-20 |
| Paragraph length | Max 3-4 sentences |
| Line width | Max 65 characters |
| Lists | Bullets for 3+ items |
| Subheadings | Every 2-3 paragraphs |

**Bad (41 words):**
> "We translate all document types required for UAE government, court, and business use including birth certificates, marriage certificates, divorce decrees, death certificates, academic degrees, transcripts, police clearance certificates, bank statements, driving licenses, contracts, court judgments, and corporate filings."

**Good (3 sentences, avg 14 words):**
> "We translate all documents for UAE government, court, and business use. Personal documents include birth, marriage, divorce, and death certificates. We also handle academic records, police clearance, and corporate filings."

---

### Visual Relief Techniques

Break walls of text using these CSS utilities from `text-breaking.css`:

| Technique | Class | Use Case |
|-----------|-------|----------|
| **Lead Text** | `.lead-text` | Larger intro paragraph below hero |
| **Kicker** | `.kicker` | Uppercase label above headings |
| **Highlight** | `.text-highlight` | Inline emphasis with background |
| **Accent Border** | `.accent-border-left` | Left border for pullquotes |
| **Quick Fact Box** | `<QuickFactBox>` | Sidebar credential display |
| **Icon Bullet List** | `<IconBulletList>` | Styled list with icons |

**Hero Split Pattern** — For dense intros, use two-column layout:
```html
<div class="hero-split">
  <div class="hero-split__content">  <!-- Lead text -->
  <div class="hero-split__aside">    <!-- QuickFactBox -->
</div>
```

---

### Hero Intro Guidelines

| Rule | Target |
|------|--------|
| Length | 1-2 sentences max |
| Characters/line | 45-75 (optimal scanning) |
| Font size | `clamp(1.1rem, 1rem + 0.5vw, 1.25rem)` |
| Line height | 1.6 (not 1.8) |
| Max width | 65ch |
| Text wrap | `text-wrap: balance` |

**Copy Pattern:**
- Lead with value: "Courts accept our translations" not "We provide translations"
- Front-load keywords in first 5 words
- Include entity names (DHA, GDRFA, MOHRE)

> 💡 Centralized styles in `hero-intro-optimized.css`. Remove inline hero styles.

---

### Content Expansion Template

For 600+ word sections, use this H2 structure:

```
## What You Need to Know About [Service]

### The Real Question: [Primary Client Concern]
150-200 words addressing the main worry

### How It Works in the UAE
150-200 words on UAE-specific requirements

### Mistakes That Cause Rejections
100-150 words on what to avoid

### Do You Need Attestation First?
100-150 words on attestation chain

### Realistic Timeline
50-100 words on expectations
```

---

### UAE-Specific Elements

**Government entities:** GDRFA, MOFA, DLD, KHDA, MOHRE, DHA
**Portals:** ICP, GDRFA app, Amer
**Process terms:** Typing centers, attestation chains, MOJ stamp

---

### Content Quality Checklist

- [ ] 600+ words for service pages
- [ ] Sentences under 25 words
- [ ] 3+ UAE entity references
- [ ] No banned vocabulary (see Brand Voice)
- [ ] 8+ internal links
- [ ] Visual relief elements used
- [ ] Hero intro under 2 sentences

---

## Brand Voice

**Persona:** Personal Assistant to a busy executive — polite but not servile, honest, calm.

### 4 Pillars

| Pillar | Description |
|--------|-------------|
| No-Nonsense | Direct, no flowery intros |
| Service Spotlight | Focus on experience, not paper |
| Partner Dynamic | "We" and "You" together |
| Quiet Authority | No exclamation points, no ALL-CAPS |

### Banned Words

❌ "Market Leader" / "Best in Dubai" / "#1" / "State-of-the-Art" / "Revolutionary" / "Unrivaled" / "One-Stop Shop" / Exclamation points

✅ "Dedicated Support" / "Managed Process" / "Personalized" / "Transparent"

---

## UI/UX Standards

### Colors

| Name | Light | Dark | Usage |
|------|-------|------|-------|
| Coral | `#FF1654` | `#ff6b6b` | CTAs |
| Navy | `#0E2B48` | `#243347` | Headers |
| Teal | `#0077b6` | `#7fd1ff` | Links |
| Gold | `#d4a54c` | `#ffe178` | Premium |

Use CSS tokens: `var(--accent-coral)`, not raw hex.

> ⚠️ **NEVER use gray text on navy backgrounds.** Use `var(--text-on-dark)` for dark sections. See `contrast-fixes.css`.

### Typography

| Element | Size | Weight |
|---------|------|--------|
| H1 | 2.5rem | 800 |
| H2 | 2rem | 700 |
| H3 | 1.4rem | 700 |
| Body | 1rem | 400 |

### Mobile

- No floating CTAs
- Bottom Action Bar: WhatsApp, Call, Send Docs
- Fixed bottom, iPhone notch-safe, <768px only

### Accordions

Use `<details>`/`<summary>` elements. Content in DOM at load (not AJAX).

### Performance

| Metric | Target |
|--------|--------|
| FCP | < 1.0s |
| LCP | < 2.0s |
| CLS | < 0.05 |
| Page Size | < 1.5MB |

### Accessibility (WCAG AA)

- Focus rings: 2px solid
- Touch targets: 44px min
- Contrast: 4.5:1
- ARIA labels on buttons/links

---

## File Reference

### Core Config

| File | Purpose |
|------|---------|
| `astro.config.mjs` | Astro config, sitemap |
| `src/config/site.ts` | Site/SEO config |
| `src/data/navigation.ts` | Navigation (single source) |
| `src/data/serviceLinks.ts` | Service relationships |
| `public/robots.txt` | Crawler directives |

### Layouts

| File | Purpose |
|------|---------|
| `BaseLayout.astro` | Root layout, schemas, noindex |
| `ServiceLayout.astro` | Service pages, auto-schema |
| `BlogLayout.astro` | Blog posts |

### Components

| File | Purpose |
|------|---------|
| `SEO.astro` | Meta with validation |
| `Schema.astro` | Structured data |
| `Breadcrumb.astro` | Breadcrumbs + JSON-LD |
| `IconBulletList.astro` | Styled bullet list with icons |
| `KickerHeadline.astro` | Kicker + headline combo |
| `QuickFactBox.astro` | Sidebar credential box |

### Styles (`public/styles/`)

| File | Purpose |
|------|---------|
| `base-architecture.css` | CSS tokens |
| `porto-desktop.css` | Desktop |
| `sticky-mobile.css` | Mobile bar |
| `dark-mode-tokenized.css` | Dark theme |
| `contrast-fixes.css` | A11y fixes |
| `text-breaking.css` | Visual relief utilities |
| `hero-intro-optimized.css` | Hero intro typography |

### Documentation

| File | Purpose |
|------|---------|
| `docs/SEO-IMPLEMENTATION-PLAN.md` | SEO details |
| `AI-AGENT-ONBOARDING.md` | Quick start |
| `TASKS.md` | Task tracking |
| `SEO-ISSUES-DEFERRED.md` | Human decisions needed |

---

## Deferred Issues

See `SEO-ISSUES-DEFERRED.md` for full details:

| Issue | Count |
|-------|-------|
| Long titles (>60 chars) | 53 |
| Low text-to-HTML ratio | 45 |
| Content not optimized | 24 |

---

## Changelog

### v8.2 (Dec 27, 2025)
- Consolidated Content Creation section with visual relief techniques
- Added hero intro guidelines, content expansion template
- Added text-breaking components to file reference

### v8.1 (Dec 27, 2025)
- Added `/specialized/medical/dha-dataflow/`
- Added Hero Subpage Mosaic to all hub pages
- Updated navigation with DHA DataFlow

### v8.0 (Dec 24, 2025)
- Created `src/config/site.ts`, `Schema.astro`, `schema-utils.ts`
- Added noindex support to BaseLayout
- Added OG image generator

### Previous
- Removed TinaCMS
- Added Chatbase, Vercel Analytics
- 70+ SEO fixes
- RelatedServices on 35+ pages
