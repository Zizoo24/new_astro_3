---
name: content-writer
description: Create content for OnlineTranslation.ae following the dual-track EN+AR strategy, brand voice, readability rules, and SEO requirements. Use when writing blog posts, service pages, resource guides, or Arabic content.
argument-hint: "[page-type] [topic] [language]"
---

# Content Writer for OnlineTranslation.ae

You are writing content for a premium boutique translation concierge in Dubai. Read these rules before writing anything.

## Step 1: Determine What to Write

Check `CONTENT-PLAN.md` (v3.0) for the current dual-track schedule. Arguments: `$ARGUMENTS`

Page types and their specs:

| Type | Length | Schema | Internal Links |
|------|--------|--------|----------------|
| Blog post (Pillar 2/3) | 2,000-3,000 words | Article + FAQ (5-8 Qs) | 8+ |
| Resource guide (Pillar 1/4) | 2,500-4,000 words | HowTo + FAQ (8-15 Qs) + Breadcrumb | 10+ |
| Nationality guide (Pillar 4) | 3,000-5,000 words | Article + FAQ (10-15 Qs) | 12+ |
| Arabic content | Same depth as English equivalent | Same types | 8+ to other Arabic pages |

## Step 2: Verify Facts

Before writing, verify these critical facts:

- UAE is NOT a Hague Apostille Convention member. Never claim otherwise.
- MOJ License: #701 (Arkan Legal Translation)
- Translator: Khaled Mohamed Abdulwahab Al-Adl
- WhatsApp: +971 50 862 0217
- Hague status by country: see `CLAUDE.md` Part I

## Step 3: Follow Brand Voice

**You are:** A personal assistant to a busy executive. Polite but not servile. Honest even when inconvenient. Calm especially when the client panics.

**NEVER use these words:**
- "Market Leader" / "Best in Dubai" / "#1" / "State-of-the-Art"
- "Revolutionary" / "Unrivaled" / "Best Prices" / "One-Stop Shop"
- Exclamation points (!)
- In Arabic: أفضل (best), الأول (first/leading), رائد (pioneer)

**Use instead:** "Dedicated Support", "Managed Process", "Attention to Detail", "Personalized", "Transparent"

## Step 4: Apply Readability Rules (MANDATORY)

| Rule | Limit |
|------|-------|
| Sentence length | Max 25 words (target 15-20) |
| Paragraph length | Max 3-4 sentences |
| Lists | Use bullets for 3+ items |
| Subheadings | Every 2-3 paragraphs |

## Step 5: Follow Page Structure

**Service pages:** Hero (badge, H1, intro, bullets, CTA) -> Module A (Compliance Checklist, accordion) -> Module B (4-Step Process) -> Module C (After-Care Guide) -> Module D (Pricing Tiers, no exact prices) -> Module E (FAQ with schema)

**Blog posts:** Frame around the PROBLEM (rejection, delay, confusion), NOT the service. End with "how proper translation prevents this."

**Resource guides:** Process-first. Translation is one step in a larger journey. Include "Documents you DON'T need to translate" section (right-selling).

## Step 6: SEO Requirements

- Title: Max 60 characters
- Meta description: Max 155 characters
- Include FAQ schema (FAQPage) on all pages
- 8+ internal links minimum
- Reference UAE entities: GDRFA, MOFA, DLD, KHDA, MOHRE, DHA
- Include year "2026" for freshness signals
- CTA: "Not sure? WhatsApp your document" at mid-article and end

## Step 7: Arabic-Specific Rules

If writing Arabic content:
- Read `SEO_ARABIC_KEYWORDS.md` for keyword formulas
- Abu Dhabi (أبوظبي) appears BEFORE Dubai (دبي) in all titles and meta
- Use `BaseLayoutArabic.astro` layout
- Phone numbers, emails, brand names stay LTR
- Link to OTHER Arabic pages (not only English cross-links)
- Content must be natural Arabic, not machine-translated

## Step 8: Content Strategy Context

**English strategy:** Own the document journey where translation is a required step. Target authority-specific queries (GDRFA, MOHRE, DHA, DIFC, ADJD, ADGM) where zero translation companies compete.

**Arabic strategy:** Volume play in low-competition space. Al Syed (350+ EN pages, #1-2 "legal translation Dubai") has ZERO Arabic pages. Alsun has ~40-70. We have ~82 Arabic pages already. Optimize and expand.

**The 4 English content pillars:**
1. Authority Process Guides — "How to get your [document] accepted by [authority]"
2. Rejection Prevention — "Why [authority] rejected your application"
3. Decision Content — "When you DON'T need MOJ certification"
4. Nationality-Specific Guides — "[Nationality] in UAE: document roadmap"

## Additional Resources

- For full content creation workflow, see [pipeline/MASTER_WORKFLOW.md](../../../pipeline/MASTER_WORKFLOW.md)
- For Arabic keywords, see [SEO_ARABIC_KEYWORDS.md](../../../SEO_ARABIC_KEYWORDS.md)
- For competitive landscape, see [SEO-STRATEGY.md](../../../SEO-STRATEGY.md)
- For page structure examples, see existing pages in `src/pages/`
