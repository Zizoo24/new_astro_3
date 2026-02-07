---
name: pre-publish
description: Run the full pre-publish checklist before deploying any page. Validates brand voice, facts, SEO, readability, schema, internal links, and Arabic-specific rules. Use before committing any new or edited content page.
argument-hint: "[page-path]"
disable-model-invocation: true
---

# Pre-Publish Quality Gate

Run this checklist against `$ARGUMENTS` before deployment. Read the page first, then validate every section below. Report results as a checklist with pass/fail for each item.

## 1. FACTUAL ACCURACY (Blocks Deployment)

Read the page content and check:

- [ ] **Hague Convention:** If any country's Hague status is mentioned, verify against this table:
  - UAE: **NOT a member** (most common error — never claim UAE accepts apostilles)
  - Pakistan: NOT a member
  - India: YES (since 2005)
  - USA: YES (since 1981)
  - UK: YES (since 1965)
  - Canada: YES (since 2024)
  - Philippines: YES (since 2019)
  - Bangladesh: YES (since March 2025)
- [ ] **Business info:** MOJ License #701, Arkan Legal Translation, Khaled Mohamed Abdulwahab Al-Adl
- [ ] **WhatsApp:** +971 50 862 0217 (exact format)
- [ ] **UAE entities:** Correctly spelled — GDRFA, MOFA, DLD, DHA, KHDA, MOHRE, ICP, DIFC, ADGM, ADJD
- [ ] **No competitor names mentioned** anywhere in content

## 2. BRAND VOICE (Blocks Deployment)

Scan the full page text for:

- [ ] **Banned words:** None of these appear: "best", "top", "#1", "elite", "leading", "premier", "market leader", "state-of-the-art", "revolutionary", "unrivaled", "best prices", "one-stop shop", "cheapest"
- [ ] **Arabic banned words** (for /ar/ pages): أفضل, الأول, رائد
- [ ] **No exclamation points** (!) in body content
- [ ] **No ALL-CAPS emphasis** (use bold instead)
- [ ] **Tone:** Calm, honest, no hype. Read 3 random paragraphs — do they sound like a capable assistant or a used car salesman?

## 3. READABILITY (Blocks Deployment)

Check 5 random paragraphs:

- [ ] **Sentence length:** No sentence exceeds 25 words (target 15-20)
- [ ] **Paragraph length:** No paragraph exceeds 4 sentences
- [ ] **Lists:** Any enumeration of 3+ items uses bullets, not inline commas
- [ ] **Subheadings:** H2/H3 appears every 2-3 paragraphs

## 4. SEO REQUIREMENTS

- [ ] **Title tag:** Present, max 60 characters
- [ ] **Meta description:** Present, max 155 characters
- [ ] **H1:** Exactly one H1 per page, contains primary keyword
- [ ] **Internal links:** Count all internal links — minimum 8 required
- [ ] **FAQ section:** Present with 6-15 questions (service pages require FAQPage schema)
- [ ] **Year reference:** "2026" appears in content or title for freshness signal

## 5. SCHEMA MARKUP

- [ ] **Service pages:** Service schema present (auto via ServiceLayout)
- [ ] **FAQ:** FAQPage schema present if page has FAQ section
- [ ] **Breadcrumb:** BreadcrumbList schema present
- [ ] **No duplicate schemas** of the same type

## 6. ARABIC-SPECIFIC (Only for /ar/ pages)

- [ ] **Title formula:** Follows `[Service] + معتمدة + في + [Location]` or `مكتب + [Service] + في + [Location]`
- [ ] **Abu Dhabi first:** أبوظبي appears before دبي in title and meta
- [ ] **Layout:** Uses `BaseLayoutArabic.astro`
- [ ] **hreflang:** Points to `/ar/` (not `/عربي/`)
- [ ] **LTR elements:** Phone numbers, emails, brand names are LTR
- [ ] **Arabic internal links:** Links point to other Arabic pages (not only English)

## 7. TECHNICAL

- [ ] **Build:** Run `npm run build` — page compiles without errors
- [ ] **Images:** All images have alt text
- [ ] **Links:** No broken internal links

## OUTPUT FORMAT

```
PRE-PUBLISH REPORT: [page-path]
================================
FACTUAL ACCURACY:  [PASS/FAIL] (X/Y checks passed)
BRAND VOICE:       [PASS/FAIL] (X/Y checks passed)
READABILITY:       [PASS/FAIL] (X/Y checks passed)
SEO:               [PASS/FAIL] (X/Y checks passed)
SCHEMA:            [PASS/FAIL] (X/Y checks passed)
ARABIC:            [PASS/FAIL or N/A] (X/Y checks passed)
TECHNICAL:         [PASS/FAIL] (X/Y checks passed)
================================
OVERALL:           [READY TO DEPLOY / NEEDS FIXES]

Issues to fix:
1. [specific issue with line reference]
2. ...
```

If ANY section shows FAIL, the page is NOT ready to deploy. List specific fixes needed.
