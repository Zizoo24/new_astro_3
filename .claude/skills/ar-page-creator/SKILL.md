---
name: ar-page-creator
description: Create an Arabic page scaffold from an existing English page. Generates the Arabic page structure with proper RTL layout, Arabic SEO metadata, hreflang pairing, and Abu Dhabi-first keyword strategy. Use when parallelizing English content to Arabic.
argument-hint: "[english-page-path]"
disable-model-invocation: true
---

# English → Arabic Page Creator

Create an Arabic version of: `$ARGUMENTS`

This is NOT a translation tool. It creates an Arabic page scaffold with proper structure, SEO metadata, and technical requirements. The actual Arabic content should be written natively, not machine-translated.

## Step 1: Read the English Page

Read the English page at the given path. Extract:
- Title tag
- Meta description
- H1
- Page structure (sections, headings)
- FAQ questions (if any)
- Internal links
- Schema types used
- Layout used

## Step 2: Determine Arabic URL

Map English URL to Arabic equivalent:

| English Path | Arabic Path |
|-------------|------------|
| `/legal/contracts/nda/` | `/ar/legal/contracts/nda/` |
| `/personal/vital-records/birth/` | `/ar/personal/vital-records/birth/` |
| `/resources/attestation-guide/` | `/ar/resources/attestation-guide/` |
| `/blog/some-post/` | `/ar/blog/some-post/` |
| `/locations/dubai/difc/` | `/ar/locations/dubai/difc/` |

The Arabic page mirrors the English URL structure under `/ar/`.

## Step 3: Generate Arabic SEO Metadata

### Title Tag (max 60 chars)
Apply formula from `SEO_ARABIC_KEYWORDS.md`:
```
Format 1: [Service] + معتمدة + في + أبوظبي ودبي | OnlineTranslation.ae
Format 2: مكتب + [Service] + في + أبوظبي | OnlineTranslation.ae
```

**Abu Dhabi (أبوظبي) must appear BEFORE Dubai (دبي).**

### Meta Description (max 155 chars)
```
[What we do] + [Key differentiator] + في أبوظبي ودبي + [CTA with واتساب]
```

### H1
- Primary Arabic keyword in natural phrasing
- Different from title tag but related

## Step 4: Generate Page Scaffold

```astro
---
import BaseLayoutArabic from '../../layouts/BaseLayoutArabic.astro';
// import other components as needed
---

<BaseLayoutArabic
  title="[Arabic title — max 60 chars, Abu Dhabi first]"
  description="[Arabic meta — max 155 chars]"
>
  <!-- Hero Section -->
  <section class="hero">
    <h1>[Arabic H1 with primary keyword]</h1>
    <p>[3-sentence Arabic intro]</p>
    <!-- CTA -->
    <a href="https://wa.me/971508620217" class="cta-button">
      <span dir="ltr">+971 50 862 0217</span> — تواصل عبر واتساب
    </a>
  </section>

  <!-- Content sections mirror English structure -->

  <!-- FAQ Section with Schema -->
  <section class="faq">
    <h2>الأسئلة الشائعة</h2>
    <!-- 6-15 questions in Arabic -->
  </section>

  <!-- FAQPage Schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      // Arabic FAQ schema
    ]
  }
  </script>
</BaseLayoutArabic>
```

## Step 5: Technical Requirements

- [ ] **Layout:** `BaseLayoutArabic.astro` (NOT BaseLayout)
- [ ] **hreflang:** Verify English page points to this Arabic page at `/ar/...`
- [ ] **Direction:** Page inherits `dir="rtl"` from layout
- [ ] **LTR exceptions:** These stay left-to-right:
  - Phone numbers: `<span dir="ltr">+971 50 862 0217</span>`
  - Email: `<span dir="ltr">info@onlinetranslation.ae</span>`
  - Brand name: `<span dir="ltr">OnlineTranslation.ae</span>`
  - URLs
- [ ] **Font:** Uses `var(--font-arabic)` — Noto Sans Arabic with fallbacks
- [ ] **No letter-spacing:** Arabic text must have `letter-spacing: 0`
- [ ] **Line height:** 1.8 for body, 1.6 for headings

## Step 6: Internal Links (Arabic → Arabic)

Generate 8+ internal links to OTHER Arabic pages:
- Related Arabic service pages (not English equivalents)
- Arabic hub pages (`/ar/legal/`, `/ar/personal/`, `/ar/services/`)
- Arabic location pages (`/ar/locations/...`)
- Arabic blog posts (`/ar/blog/...`)
- Arabic attestation pages (`/ar/services/attestation/...`)

Use Arabic anchor text, not English.

## Step 7: Banned Content Check

Before outputting, verify:
- [ ] No أفضل (best) in visible content
- [ ] No الأول (first/leading) in visible content
- [ ] No رائد (pioneer) in visible content
- [ ] No exclamation points
- [ ] Abu Dhabi before Dubai in title and meta
- [ ] Sentence length max 25 words
- [ ] Phone numbers stay LTR

## Output

Complete `.astro` file ready for `src/pages/ar/...` with:
1. Arabic SEO metadata (title, meta, H1)
2. Page structure matching English equivalent
3. FAQ section placeholder with schema
4. Internal links to Arabic pages
5. All technical requirements met
6. Content placeholders marked `<!-- [ARABIC CONTENT: topic description] -->` for human translation
