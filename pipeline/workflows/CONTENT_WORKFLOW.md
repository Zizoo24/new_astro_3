# Content Creation Workflow

## OnlineTranslation.ae — Unified Process for English & Arabic

---

## Overview

This document provides a step-by-step workflow for creating content in both English and Arabic. Follow these steps in order.

---

## Phase 1: Planning

### 1.1 Define the Page

| Question | Answer Required |
|----------|-----------------|
| What is this page about? | Service, location, resource, or blog |
| Primary keyword (EN)? | From SEO-STRATEGY.md |
| Primary keyword (AR)? | From SEO_ARABIC_KEYWORDS.md |
| Target audience? | PRO, expat, business, individual |
| Funnel stage? | Awareness, consideration, decision |

### 1.2 Check Prerequisites

Before creating content, verify:

- [ ] English page exists (if creating Arabic version)
- [ ] URL structure determined (`/ar/` prefix for Arabic)
- [ ] Navigation data exists in `navigation-ar.ts`
- [ ] Parent/hub page exists for internal linking
- [ ] Keywords researched and documented

### 1.3 Page Structure Template

Every service page follows this structure:

```
1. Hero Section
   - Badge/category label
   - H1 with primary keyword
   - 2-3 sentence intro
   - 3-5 bullet points
   - CTA button

2. Module A: Compliance Checklist
   - Prerequisites
   - Required documents
   - Accordion format

3. Module B: Process Steps
   - 4-step timeline
   - Visual indicators

4. Module C: After-Care Guide
   - What happens next
   - Additional services

5. Module D: Pricing Tiers
   - Standard/Express/Premium
   - No exact prices

6. Module E: FAQ
   - 6-15 questions
   - Schema markup included
```

---

## Phase 2: Content Generation

### 2.1 For English Content

Use the prompt in `prompts/CONTENT_GENERATION.md` with these inputs:

```xml
<task>
Create [PAGE TYPE] content for [TOPIC]
</task>

<context>
Primary keyword: [KEYWORD]
Secondary keywords: [LIST]
Target audience: [AUDIENCE]
Word count target: [2000+ for services]
</context>

<constraints>
- Follow CLAUDE.md brand voice
- No superlatives (best, #1, leading)
- Max 25 words per sentence
- Include 8+ internal links
- Mention UAE entities (GDRFA, MOFA, etc.)
</constraints>
```

### 2.2 For Arabic Content

**Option A: Translate from English**

Use `prompts/TRANSLATION.md` with the English source.

**Option B: Create Fresh Arabic Content**

Use `prompts/CONTENT_GENERATION.md` with Arabic-specific inputs:

```xml
<task>
Create Arabic [PAGE TYPE] content for [TOPIC]
</task>

<context>
Primary keyword (AR): [ARABIC KEYWORD]
Geographic focus: Abu Dhabi first, then Dubai, then UAE
Tone: Professional MSA, formal أنتم form
</context>

<constraints>
- Follow ARABIC_STYLE.md rules
- No superlatives (أفضل، الأول، رائد)
- Mention وزارة العدل for credibility
- Include أبوظبي prominently
</constraints>
```

---

## Phase 3: Localization (Arabic Only)

### 3.1 Language Quality Check

Before proceeding, verify:

- [ ] Modern Standard Arabic (MSA), not colloquial
- [ ] Formal أنتم addressing throughout
- [ ] No machine translation artifacts
- [ ] Natural flow when read aloud
- [ ] Correct Arabic punctuation (،  ؟  ؛)

### 3.2 Cultural Adaptation

Adapt content for UAE/Gulf audience:

| English Concept | Arabic Adaptation |
|-----------------|-------------------|
| "Fast service" | في غضون ٦٠ دقيقة (specific time) |
| "Trusted" | معتمدة من وزارة العدل (verifiable) |
| "Contact us" | تواصلوا معنا (formal plural) |
| Phone numbers | Keep Western numerals, LTR span |
| Prices | Use Arabic-Indic numerals (١٥٠ درهم) |

### 3.3 SEO Keyword Integration

From `SEO_ARABIC_KEYWORDS.md`, integrate:

| Placement | Keyword Type |
|-----------|--------------|
| Title tag | Title terms (60 char max) |
| Meta description | Description terms (155 char max) |
| H1 | Primary keyword |
| H2s | Secondary keywords |
| Body | Long-tail variations |

---

## Phase 4: Technical Implementation

### 4.1 File Creation

**English page:**
```
src/pages/[category]/[page-name].astro
```

**Arabic page:**
```
src/pages/ar/[page-name].astro
```

### 4.2 Component Selection

| Type | English | Arabic |
|------|---------|--------|
| Layout | `BaseLayout.astro` | `BaseLayoutArabic.astro` |
| Header | `Header-porto.astro` | `Header-porto-ar.astro` |
| Footer | `Footer.astro` | `FooterArabic.astro` |
| Mobile Nav | `MobileShell.astro` | `MobileShellArabic.astro` |

### 4.3 Required HTML Attributes (Arabic)

```html
<html lang="ar" dir="rtl">
```

### 4.4 URL Mapping Update

Add to `src/data/navigation-ar.ts`:

```typescript
export const urlMapEnToAr: Record<string, string> = {
  '/new-page/': '/ar/new-page/',
  // ... existing mappings
};
```

### 4.5 Hreflang Tags

Both English and Arabic pages must include:

```html
<!-- English page -->
<link rel="alternate" hreflang="en-AE" href="https://onlinetranslation.ae/page/" />
<link rel="alternate" hreflang="ar" href="https://onlinetranslation.ae/ar/page/" />
<link rel="alternate" hreflang="x-default" href="https://onlinetranslation.ae/page/" />

<!-- Arabic page -->
<link rel="alternate" hreflang="ar" href="https://onlinetranslation.ae/ar/page/" />
<link rel="alternate" hreflang="en-AE" href="https://onlinetranslation.ae/page/" />
<link rel="alternate" hreflang="x-default" href="https://onlinetranslation.ae/page/" />
```

---

## Phase 5: Internal Linking

### 5.1 Minimum Requirements

| Requirement | Count |
|-------------|-------|
| Internal links per page | 8+ minimum |
| Same-silo links | 3-4 |
| Cross-silo links | 2-3 |
| Resource links | 1-2 |

### 5.2 Link Anchor Text

- **DO:** Descriptive text matching target page topic
- **DON'T:** "Click here", "Learn more", "Read more"

### 5.3 Arabic Internal Links

All internal links in Arabic pages must use `/ar/` prefix:

```html
<!-- Wrong -->
<a href="/contact/">تواصلوا معنا</a>

<!-- Correct -->
<a href="/ar/contact/">تواصلوا معنا</a>
```

---

## Phase 6: Quality Assurance

### 6.1 Content Review

- [ ] All content follows brand voice
- [ ] No banned vocabulary used
- [ ] Hague Convention facts accurate
- [ ] UAE entity names correct
- [ ] Sentence length under 25 words

### 6.2 SEO Review

- [ ] Title under 60 characters
- [ ] Meta description under 155 characters
- [ ] H1 includes primary keyword
- [ ] FAQ schema implemented
- [ ] Internal links functional

### 6.3 Technical Review

- [ ] Page renders correctly
- [ ] Mobile responsive
- [ ] Images have alt text
- [ ] Forms functional
- [ ] No console errors

### 6.4 Arabic-Specific Review (use `checklists/QA_ARABIC.md`)

- [ ] RTL layout correct
- [ ] Language switcher works
- [ ] Phone numbers display LTR
- [ ] Arabic fonts loading
- [ ] Accordions/carousels work RTL

---

## Phase 7: Deployment

### 7.1 Pre-Deployment

```bash
# Build locally
npm run build

# Check for errors
npm run preview
```

### 7.2 Commit Message Format

```
Add [language] [page-type]: [page-name]

- Primary keyword: [keyword]
- Includes: FAQ schema, internal linking
- Arabic: [yes/no]
```

### 7.3 Post-Deployment

- [ ] Verify page accessible at production URL
- [ ] Check Google Search Console for crawl errors
- [ ] Test language switcher from live site
- [ ] Submit URL for indexing if needed

---

## Quick Reference: File Locations

| Purpose | English | Arabic |
|---------|---------|--------|
| Pages | `src/pages/` | `src/pages/ar/` |
| Layout | `src/layouts/BaseLayout.astro` | `src/layouts/BaseLayoutArabic.astro` |
| Navigation | `src/data/navigation-porto.ts` | `src/data/navigation-ar.ts` |
| Styles | `public/styles/*.css` | `public/styles/rtl.css` |

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| RTL not applying | Check `<html lang="ar" dir="rtl">` |
| Arabic text displaying LTR | Ensure `dir="rtl"` on container |
| Phone numbers reversed | Wrap in `<span dir="ltr">` |
| Flex items wrong order | Add `flex-direction: row-reverse` |
| Language switcher broken | Check URL mapping in `navigation-ar.ts` |

---

*Last updated: January 30, 2026*
