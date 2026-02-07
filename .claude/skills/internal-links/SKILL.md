---
name: internal-links
description: Suggest and generate internal links for OnlineTranslation.ae pages. Reads the service links data and page content to recommend 8-12 relevant internal links with anchor text. Use when creating or auditing pages for internal linking.
argument-hint: "[page-path]"
---

# Internal Link Generator

Generate internal link suggestions for `$ARGUMENTS`. Every page needs 8+ internal links minimum (10+ for resource guides, 12+ for nationality guides).

## Step 1: Read the Page

Read the target page to understand its topic, keywords, and existing internal links. Count current internal links.

## Step 2: Read the Service Links Data

Read `src/data/serviceLinks.ts` for the full relationship map of pages.

## Step 3: Identify Link Opportunities

For each page, suggest links based on these rules:

### Link Categories (aim for mix)

| Category | Count | Example |
|----------|-------|---------|
| Same silo (same parent category) | 2-3 | /legal/contracts/nda/ → /legal/contracts/spa/ |
| Cross-silo (different category) | 2-3 | /legal/contracts/nda/ → /services/legal-translation/ |
| Hub page (parent) | 1 | /legal/contracts/nda/ → /legal/ |
| Resource/blog | 1-2 | Any page → /resources/attestation-guide/ |
| Location page | 1 | Any page → /locations/dubai/difc/ (if relevant) |
| Attestation page | 1 | If document authentication mentioned → /services/attestation/ |

### Anchor Text Rules

- Use descriptive anchor text (not "click here" or "learn more")
- Include the target page's primary keyword naturally
- Vary anchor text — don't repeat the same phrase
- Arabic pages: use Arabic anchor text linking to Arabic pages

### Placement Rules

- **In-content links** (within paragraph text): 5-8 links
- **FAQ answer links**: 1-2 links in FAQ answers
- **"Related services" section**: 2-3 links at bottom
- **Never link to the current page** (self-referencing)
- **Never link to competing pages** in the same keyword cluster

## Step 4: Check Reciprocal Links

For each suggested outbound link, check if the target page links back. If not, suggest adding a reciprocal link on the target page.

## Step 5: Arabic Page Links

For pages in `/ar/`:
- Link to OTHER Arabic pages (not English equivalents)
- Use Arabic anchor text
- Ensure at least 5 links go to `/ar/` pages
- hreflang handles EN↔AR connection (don't duplicate with content links)

## Output Format

```
INTERNAL LINKS: [page-path]
Current links: [count] (need [8/10/12] minimum)
Gap: [count needed]

SUGGESTED LINKS:
1. [anchor text] → [target URL]
   Context: "Place after paragraph about [topic]"
   Type: same-silo

2. [anchor text] → [target URL]
   Context: "In FAQ answer #3"
   Type: cross-silo

...

RECIPROCAL LINKS NEEDED:
- [target page] should link back to [this page]
  Suggested anchor: "[text]"

MARKDOWN READY:
[anchor text 1](/target-url-1/)
[anchor text 2](/target-url-2/)
...
```

## Key Pages to Link To (High Priority)

These pages need the most inbound links:
- `/services/legal-translation/` — Core service page
- `/resources/attestation-guide/` — Already ranking for attestation
- `/services/golden-visa-translation/` — High-value service
- `/specialized/medical/dha-dataflow/` — New authority content
- `/resources/moj-vs-certified/` — Decision content (right-selling)
- `/ar/` — Arabic homepage (from Arabic pages)
