---
name: brand-voice
description: Lint content against OnlineTranslation.ae brand voice rules. Checks banned words, sentence length, paragraph length, tone, and Arabic equivalents. Use when writing or reviewing any content.
argument-hint: "[page-path or text to check]"
---

# Brand Voice Linter

Scan `$ARGUMENTS` and flag every violation of the brand voice rules.

## Banned Words (Flag Every Instance)

Search the content for these exact words/phrases (case-insensitive). Each occurrence is a violation:

**English banned list:**
- "best" (in promotional context, not comparative "best practice")
- "top" (as superlative, not "top of page")
- "#1" or "number one" or "number 1"
- "elite"
- "leading" (as in "leading provider")
- "premier" or "premiere"
- "market leader"
- "state-of-the-art"
- "revolutionary"
- "unrivaled" or "unrivalled"
- "best prices" or "cheapest" or "lowest prices"
- "one-stop shop" or "one stop shop"
- "world-class"
- "cutting-edge"
- "second to none"
- "guaranteed" (unless describing the actual guarantee policy)

**Arabic banned list** (for /ar/ pages):
- أفضل (best)
- الأول (first/leading)
- رائد (pioneer)
- الأرخص (cheapest)
- لا مثيل (unrivaled)

**Also flag:**
- Any exclamation point (!) in body content
- ALL-CAPS words used for emphasis (use **bold** instead)
- Competitor names (Al Syed, Alsun, CLT, AGATO, Prime Translation, etc.)

## Readability Rules

Check every paragraph:

| Rule | Max | Flag If |
|------|-----|---------|
| Sentence length | 25 words | Any sentence > 25 words |
| Target sentence length | 15-20 words | More than 30% of sentences > 20 words |
| Paragraph length | 4 sentences | Any paragraph > 4 sentences |
| Lists | 3+ items inline | 3+ items written as comma-separated instead of bullets |
| Subheadings | Every 2-3 paragraphs | More than 3 consecutive paragraphs without H2/H3 |

## Tone Check

Read 3 random paragraphs and assess:

**Should sound like:** A personal assistant to a busy executive
- Polite but not servile
- Honest even when inconvenient
- Calm especially when client panics
- Quiet authority (no hype)

**Should NOT sound like:**
- A used car salesman (pushy, overpromising)
- A robot (cold, template-like)
- A beggar (desperate for business)
- A braggart (self-congratulatory)

## Suggested Replacements

| Instead of | Use |
|-----------|-----|
| "Best in Dubai" | "Dedicated support" |
| "Market leader" | "Managed process" |
| "State-of-the-art" | "Attention to detail" |
| "Revolutionary" | "Personalized" |
| "Unrivaled" | "Transparent" |
| "Guaranteed results" | "We use a double-check system. If an error slips through, we correct it instantly and redeliver at our cost." |

## Output Format

```
BRAND VOICE LINT: [page/text identifier]
================================
BANNED WORDS: [count] found
  - Line X: "best" → suggest "dedicated"
  - Line Y: "!" → remove exclamation point

READABILITY: [count] violations
  - Line X: Sentence is 32 words (max 25)
  - Paragraph at line Y: 6 sentences (max 4)

TONE: [OK / NEEDS ADJUSTMENT]
  - [specific feedback if needed]

TOTAL VIOLATIONS: [count]
```
