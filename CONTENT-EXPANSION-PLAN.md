# Content Expansion Plan: 600+ Word Client-Focused Sections

## Objective

Add a comprehensive content section (under H2: "What You Need to Know") to each service page containing:
- 600+ words of genuine, practical content
- UAE-specific information (GDRFA, MOFA, DLD, KHDA, etc.)
- Real client concerns and questions answered
- Honest guidance without marketing fluff
- Schema-ready content for SEO

---

## Content Structure Template

Each page gets a new section with this structure:

```html
<section class="section bg-light">
  <div class="container">
    <h2>What You Need to Know About [Service]</h2>

    <!-- Client Concern 1 -->
    <h3>The Real Question: [Primary Client Concern]</h3>
    <p>150-200 words addressing the main worry...</p>

    <!-- UAE-Specific Process -->
    <h3>How It Works in the UAE</h3>
    <p>150-200 words on UAE-specific requirements...</p>

    <!-- Common Mistakes -->
    <h3>Mistakes That Cause Rejections</h3>
    <p>100-150 words on what to avoid...</p>

    <!-- Attestation Context (where applicable) -->
    <h3>Do You Need Attestation First?</h3>
    <p>100-150 words on attestation chain...</p>

    <!-- Timeline Expectations -->
    <h3>Realistic Timeline</h3>
    <p>50-100 words on what to expect...</p>
  </div>
</section>
```

---

## Phase 1: High-Traffic Personal Documents (Priority)

### 1.1 Birth Certificate (`/personal/vital-records/birth/`)
**Client Concerns:**
- Will GDRFA accept this for my child's visa?
- My child's name spelling differs between documents
- Do I need attestation from my home country?
- Can I use this for school enrollment?

**UAE-Specific Content:**
- GDRFA dependent visa requirements
- KHDA school enrollment process
- Name matching between passport and certificate
- Attestation chain for different countries

### 1.2 Marriage Certificate (`/personal/vital-records/marriage/`)
**Client Concerns:**
- Spouse visa sponsorship requirements
- Name change after marriage
- Religious vs civil marriage certificates
- Foreign marriage recognition in UAE

**UAE-Specific Content:**
- GDRFA spouse visa process
- Bank account joint holder requirements
- Health insurance family coverage
- Property co-ownership at DLD

### 1.3 Degree Certificate (`/personal/academic/degree/`)
**Client Concerns:**
- Will my degree be recognized for employment?
- Golden Visa qualification requirements
- Professional licensing (DHA, RERA, etc.)
- Equivalency certificate process

**UAE-Specific Content:**
- MOHRE work permit requirements
- Golden Visa education criteria
- Professional licensing bodies
- Attestation chain specifics

### 1.4 Police Clearance Certificate (`/personal/immigration/pcc/`)
**Client Concerns:**
- Which countries' PCCs do I need?
- How long is my PCC valid?
- What if I have a minor offense?
- Employment vs visa requirements

**UAE-Specific Content:**
- GDRFA requirements by visa type
- Employer requirements (MOHRE)
- Golden Visa PCC requirements
- Professional licensing needs

### 1.5 Bank Statements (`/personal/immigration/bank/`)
**Client Concerns:**
- How many months of statements?
- Which accounts count?
- Minimum balance requirements
- Foreign bank account statements

**UAE-Specific Content:**
- Golden Visa financial requirements
- GDRFA salary proof requirements
- Business owner documentation
- Investment visa proof

### 1.6 Driving License (`/personal/immigration/license/`)
**Client Concerns:**
- Can I convert my license to UAE?
- Which countries qualify for direct conversion?
- Eye test and file opening process
- International Driving Permit validity

**UAE-Specific Content:**
- RTA direct conversion countries
- File opening requirements
- Typing center process
- License categories in UAE

---

## Phase 2: Legal/Corporate Documents

### 2.1 Power of Attorney (`/legal/corporate/poa/`)
- General vs Special POA differences
- DLD property transaction requirements
- Bank authorization process
- Revocation procedures

### 2.2 Memorandum of Association (`/legal/corporate/moa/`)
- Business setup requirements (Mainland vs Freezone)
- Shareholder changes
- DED licensing requirements
- Amendment procedures

### 2.3 Trade License (`/legal/corporate/license/`)
- License renewal translation needs
- Activity changes
- Branch registration
- Freezone vs DED licenses

### 2.4 Contracts (`/legal/contracts/`)
- Employment contract translation
- Lease agreements (Ejari)
- Commercial contracts
- NDA and confidentiality

### 2.5 Court Documents (`/legal/litigation/`)
- Court order translation
- Judgment enforcement
- Arbitration awards
- DIFC vs Dubai Courts

---

## Phase 3: Specialized Services

### 3.1 Medical (`/specialized/medical/`)
- DHA licensing requirements
- Patient record translation
- Medical report translation
- Insurance claim documentation

### 3.2 Financial (`/specialized/financial/`)
- Audit report translation
- Financial statement requirements
- Bank document formatting
- Investment documentation

### 3.3 Technical (`/specialized/technical/`)
- Engineering specification translation
- Safety documentation
- Municipality submission requirements
- Technical manual localization

---

## Phase 4: Location & Hub Pages

### 4.1 Location Pages
- Area-specific requirements (DIFC, JLT, etc.)
- Nearby government offices
- Pickup/delivery coverage
- Business community needs

### 4.2 Hub Pages
- Comprehensive category overviews
- Related service connections
- Process flowcharts
- Decision guides

---

## Content Guidelines

### Voice & Tone (from CLAUDE.md Brand Codex)
- Humble, not boastful
- Honest about limitations
- Client-focused, not sales-focused
- Practical, not theoretical

### Readability (from CLAUDE.md Part XII)
- Maximum 25 words per sentence
- 2-3 sentence paragraphs
- Bullet points for 3+ items
- Clear subheadings every 2-3 paragraphs

### UAE-Specific Elements to Include
- Government entity names (GDRFA, MOFA, DLD, KHDA, MOHRE, DHA)
- Portal names (ICP, GDRFA app, Amer)
- Typing center references
- Attestation chain specifics
- Hague Convention status (accurate per CLAUDE.md Part I)

### What NOT to Include
- "Best in Dubai" claims
- Fake urgency
- Competitor criticism
- Unverified statistics
- Exact prices (quote-based)

---

## Schema Integration

Each content section should align with:
- `Service.description` property (200+ words)
- `FAQPage` questions derived from content
- `HowTo` steps where applicable
- `speakable` CSS selectors for key paragraphs

---

## Implementation Order

1. **Week 1:** Birth, Marriage, Degree, PCC, Bank Statements, License
2. **Week 2:** POA, MOA, Trade License, Contracts
3. **Week 3:** Court docs, Medical, Financial, Technical
4. **Week 4:** Location pages, Hub pages

---

## Quality Checklist (Per Page)

- [ ] 600+ words of content
- [ ] 3+ UAE-specific references
- [ ] Addresses real client concerns
- [ ] No marketing fluff
- [ ] Readability rules followed (25 word max sentences)
- [ ] Internal links to related pages
- [ ] Attestation context included
- [ ] Timeline expectations set
