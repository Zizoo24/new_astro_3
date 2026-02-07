---
name: arabic-seo
description: Optimize Arabic pages for OnlineTranslation.ae. Handles title tags, meta descriptions, H1 headers, FAQ sections, and internal linking for Arabic /ar/ pages. Use when optimizing existing Arabic pages or creating new Arabic content.
argument-hint: "[page-path or 'batch']"
---

# Arabic SEO Optimizer

Optimize Arabic pages for OnlineTranslation.ae following the Abu Dhabi-first strategy. Target: `$ARGUMENTS`

## Competitive Context

- **Al Syed** (translationindubai.com): 350+ English pages, ZERO Arabic pages. Invisible in Arabic SERPs.
- **Alsun**: 40-70 Arabic pages across 3 domains. Only serious Arabic competitor.
- **OnlineTranslation.ae**: ~82 Arabic pages on a single .ae domain. Already the largest single-domain Arabic translation site.
- **Goal**: Optimize all 82 pages and scale to 120+. Dominate Arabic SERPs.

## Title Tag Formula

Read `SEO_ARABIC_KEYWORDS.md` for the full keyword list. Apply these formulas:

```
Format 1: [Service] + معتمدة + في + [Location] | OnlineTranslation.ae
Format 2: مكتب + [Service] + في + [Location] | OnlineTranslation.ae
```

**Rules:**
- Max 60 characters
- Abu Dhabi (أبوظبي) appears BEFORE Dubai (دبي)
- Never use أفضل (best) in title tags
- Include the service type in Arabic

**Examples:**
- ترجمة قانونية معتمدة في أبوظبي ودبي | OnlineTranslation.ae
- مكتب ترجمة قانونية في أبوظبي | OnlineTranslation.ae

## Meta Description Formula

```
[What we do] + [Key differentiator] + [Location] + [CTA]
```

**Rules:**
- Max 155 characters
- Abu Dhabi before Dubai
- Include a CTA (واتساب for WhatsApp)
- No أفضل (best), الأول (first), رائد (pioneer)

## H1 Optimization

- Match the primary Arabic keyword
- Natural Arabic phrasing (not keyword-stuffed)
- Different from the title tag but related

## FAQ Section Requirements

Every Arabic service page needs an FAQ section with:
- 6-15 questions in natural Arabic
- FAQPage schema markup (JSON-LD)
- First sentence of each answer: direct answer
- Second sentence: key detail
- Third sentence: CTA or context
- Questions should match common Arabic search queries

## Internal Linking Rules

Arabic pages must link to OTHER Arabic pages:
- 8+ internal links minimum per page
- Link to related Arabic service pages, not English equivalents
- Link to Arabic blog posts where relevant
- Link to Arabic location pages for geographic relevance
- Use Arabic anchor text (not English)

## Technical Checklist

For each Arabic page optimized, verify:
- [ ] Title tag follows formula (max 60 chars, Abu Dhabi first)
- [ ] Meta description follows formula (max 155 chars)
- [ ] H1 contains primary Arabic keyword
- [ ] FAQ section with FAQPage schema (6-15 questions)
- [ ] 8+ internal links to other Arabic pages
- [ ] Layout uses `BaseLayoutArabic.astro`
- [ ] hreflang points to /ar/ (not /عربي/)
- [ ] Phone numbers stay LTR
- [ ] Email addresses stay LTR
- [ ] Brand name stays LTR
- [ ] No أفضل / الأول / رائد in visible content

## Page Location

Arabic pages are in `src/pages/ar/`. The directory structure mirrors the English site:
- `src/pages/ar/index.astro` — Arabic homepage
- `src/pages/ar/legal/` — Legal services
- `src/pages/ar/personal/` — Personal services
- `src/pages/ar/services/` — Service pages
- `src/pages/ar/blog/` — Arabic blog
- `src/pages/ar/locations/` — Location pages

## Priority Keywords (from SEO_ARABIC_KEYWORDS.md)

| Keyword | Target Rank |
|---------|-------------|
| ترجمة قانونية (legal translation) | Top 10 |
| مكتب ترجمة قانونية (legal translation office) | Top 5 |
| ترجمة قانونية معتمدة أبوظبي (certified legal translation Abu Dhabi) | Top 5 |
| مكتب ترجمة قانونية في أبوظبي (legal translation office Abu Dhabi) | Top 5 |
| خدمات الترجمة القانونية أبوظبي (legal translation services Abu Dhabi) | Top 10 |

## Batch Mode

If argument is "batch", optimize pages in priority order:
1. Arabic homepage (`/ar/`)
2. Arabic legal translation page
3. Arabic service pages (highest traffic first)
4. Arabic location pages
5. Arabic blog posts
6. Arabic resource guides

For each page: read current title/meta/H1, apply formulas, add FAQ if missing, verify internal links.
