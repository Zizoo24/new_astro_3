---
name: fact-checker
description: Validate factual accuracy of content against OnlineTranslation.ae's verified fact database. Checks Hague Convention status, business details, UAE entity names, and legal citations. Use when writing or reviewing any content page.
argument-hint: "[page-path or text to check]"
---

# Fact Checker for OnlineTranslation.ae

Scan `$ARGUMENTS` for factual claims and validate against verified facts below.

## Hague Apostille Convention Status (CRITICAL)

These facts MUST be correct. Errors cause legal/trust issues.

| Country | Hague Member? | Since | Common Error |
|---------|---------------|-------|-------------|
| **UAE** | **NO** | N/A | Claiming UAE accepts apostilles — NEVER do this |
| **Pakistan** | **NO** | N/A | Assuming Pakistan is a member |
| **India** | YES | July 2005 | — |
| **Bangladesh** | YES | March 2025 | Old content may say "No" — recently joined |
| **Canada** | YES | January 2024 | Old content may say "No" — recently joined |
| **USA** | YES | 1981 | — |
| **UK** | YES | 1965 | — |
| **Philippines** | YES | 2019 | — |

**Flag immediately if:**
- Content claims UAE is a Hague member
- Content claims apostille is sufficient for UAE document use
- Country status contradicts the table above
- Bangladesh or Canada shown as non-members (outdated info)

## Business Information

| Fact | Verified Value | Flag If Different |
|------|---------------|-------------------|
| MOJ License | #701 | Any other number |
| Licensed Partner | Arkan Legal Translation | Any other name |
| Translator | Khaled Mohamed Abdulwahab Al-Adl | Misspelling or wrong name |
| License Valid Until | October 15, 2026 | Wrong date |
| WhatsApp | +971 50 862 0217 | Wrong number or format |
| Website | onlinetranslation.ae | Wrong domain |
| Verify Hotline | 800 333333 | Wrong number |

## UAE Entity Names (Correct Spelling)

| Acronym | Full Name | Common Errors |
|---------|-----------|--------------|
| GDRFA | General Directorate of Residency and Foreigners Affairs | "GDRF", "GRFA" |
| MOFA | Ministry of Foreign Affairs | — |
| MOJ | Ministry of Justice | — |
| DLD | Dubai Land Department | — |
| DHA | Dubai Health Authority | — |
| KHDA | Knowledge and Human Development Authority | "KDHA" |
| MOHRE | Ministry of Human Resources and Emiratisation | "MOHR", "MoHRE" |
| ICP | Federal Authority for Identity, Citizenship, Customs and Port Security | "ICA" (old name) |
| DIFC | Dubai International Financial Centre | "DFIC" |
| ADGM | Abu Dhabi Global Market | — |
| ADJD | Abu Dhabi Judicial Department | — |
| MOHESR | Ministry of Higher Education and Scientific Research | "MOHE" |
| RERA | Real Estate Regulatory Agency | — |

## Legal Citations (Verified)

| Citation | Authority | What It Says |
|----------|-----------|-------------|
| Federal Decree Law No. 42 of 2022 | Courts | Arabic required for all court proceedings |
| Federal Decree-Law No. 22/2022 | MOJ | Only MOJ-registered translators may practice |
| ADJD Circular No. 8 of 2023 | ADJD | Translation exemptions for numerical bank statements |
| Dubai Law No. 2 of 2025 | DIFC | DIFC judgment enforcement requires Arabic translation |
| FDL 33/2021 | Labour | Contracts in Arabic or bilingual; Arabic controls in disputes |

**Flag if:** Any legal citation is quoted with wrong year, wrong law number, or wrong provision.

## Document Sequence (CRITICAL)

The correct order is: **Attestation → Translation → Submission**

Flag if content suggests translating BEFORE attestation (translation won't show stamps/stickers).

## Pricing

- MOJ Legal Translation: AED 150+ (starting price)
- Certified Translation: AED 150+ (starting price)
- Never show exact prices on website (use "starting from" language)

## Output

Report as:
```
FACT CHECK: [page/text identifier]
- [PASS] Hague Convention references correct
- [FAIL] Line X: Claims UAE accepts apostilles — UAE is NOT a Hague member
- [PASS] Business information verified
- [WARN] Line X: MOHRE misspelled as "MOHR"
...
RESULT: [X issues found / All clear]
```
