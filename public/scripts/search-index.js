const searchIndex = [
    // ============================================
    // LEGAL & CORPORATE (Silo 1)
    // ============================================
    {
        title: "Legal Translation Dubai",
        url: "/legal-translation-dubai/",
        category: "Legal",
        keywords: "legal translation dubai moj certified court documents contracts corporate official"
    },
    {
        title: "Legal Translation Services",
        url: "/services/legal-translation/",
        category: "Legal",
        keywords: "legal translation moj certified court documents contracts agreements powers of attorney"
    },
    {
        title: "Contract Translation",
        url: "/legal/contracts/",
        category: "Legal",
        keywords: "contracts agreements legal binding nda employment lease commercial"
    },
    {
        title: "NDA Translation",
        url: "/legal/contracts/nda/",
        category: "Legal",
        keywords: "nda non disclosure agreement translation confidentiality ip intellectual property"
    },
    {
        title: "Sales Purchase Agreement (SPA)",
        url: "/legal/contracts/spa/",
        category: "Legal",
        keywords: "spa sales purchase agreement property real estate dld transaction"
    },
    {
        title: "MOU Translation",
        url: "/legal/contracts/mou/",
        category: "Legal",
        keywords: "mou memorandum of understanding agreement partnership joint venture"
    },
    {
        title: "Commercial Lease Translation",
        url: "/legal/contracts/lease/",
        category: "Legal",
        keywords: "lease contract rental agreement commercial property tenancy ejari"
    },
    {
        title: "Corporate Documents",
        url: "/legal/corporate/",
        category: "Legal",
        keywords: "corporate documents company formation moa poa trade license resolution"
    },
    {
        title: "MOA Translation",
        url: "/legal/corporate/moa/",
        category: "Legal",
        keywords: "moa memorandum association translation company formation freezone mainland"
    },
    {
        title: "Board Resolution Translation",
        url: "/legal/corporate/resolution/",
        category: "Legal",
        keywords: "board resolution corporate decision shareholder meeting minutes"
    },
    {
        title: "Power of Attorney Translation",
        url: "/legal/corporate/poa/",
        category: "Legal",
        keywords: "power of attorney poa translation general special dld property representative"
    },
    {
        title: "Trade License Translation",
        url: "/legal/corporate/license/",
        category: "Legal",
        keywords: "trade license business permit commercial registration ded freezone"
    },
    {
        title: "Court Documents",
        url: "/legal/litigation/",
        category: "Legal",
        keywords: "litigation court documents legal proceedings claims judgments dubai courts"
    },
    {
        title: "Court Verdict Translation",
        url: "/legal/litigation/verdict/",
        category: "Legal",
        keywords: "court verdict judgment ruling decision translation legal outcome"
    },
    {
        title: "Arbitration Award Translation",
        url: "/legal/litigation/arbitration/",
        category: "Legal",
        keywords: "arbitration award difc diac dispute resolution settlement"
    },
    {
        title: "Will Translation",
        url: "/legal/wills/",
        category: "Legal",
        keywords: "will testament inheritance estate planning succession difc wills"
    },

    // ============================================
    // PERSONAL DOCUMENTS (Silo 2)
    // ============================================
    {
        title: "Personal Documents Hub",
        url: "/personal-documents/",
        category: "Personal Documents",
        keywords: "personal documents certificates vital records immigration academic expat"
    },
    {
        title: "Vital Records",
        url: "/personal/vital-records/",
        category: "Personal Documents",
        keywords: "vital records birth marriage death divorce certificates civil status"
    },
    {
        title: "Birth Certificate Translation",
        url: "/personal/vital-records/birth/",
        category: "Personal Documents",
        keywords: "birth certificate translation gdrfa sponsor child golden visa icp mofa newborn"
    },
    {
        title: "Marriage Certificate Translation",
        url: "/personal/vital-records/marriage/",
        category: "Personal Documents",
        keywords: "marriage certificate translation spouse visa gdrfa sponsorship wedding"
    },
    {
        title: "Divorce Certificate Translation",
        url: "/personal/vital-records/divorce/",
        category: "Personal Documents",
        keywords: "divorce certificate decree translation court family law separation"
    },
    {
        title: "Death Certificate Translation",
        url: "/personal/vital-records/death/",
        category: "Personal Documents",
        keywords: "death certificate translation estate inheritance probate succession"
    },
    {
        title: "Immigration Documents",
        url: "/personal/immigration/",
        category: "Personal Documents",
        keywords: "immigration documents visa residence permit sponsorship gdrfa icp"
    },
    {
        title: "Police Clearance Certificate (PCC)",
        url: "/personal/immigration/pcc/",
        category: "Personal Documents",
        keywords: "police clearance pcc good conduct certificate fbi acro translation visa background"
    },
    {
        title: "Bank Statement Translation",
        url: "/personal/immigration/bank/",
        category: "Personal Documents",
        keywords: "bank statement translation golden visa 6 months financial proof income"
    },
    {
        title: "Driving License Translation",
        url: "/personal/immigration/license/",
        category: "Personal Documents",
        keywords: "driving license translation rta conversion dubai uae exchange"
    },
    {
        title: "Academic Documents",
        url: "/personal/academic/",
        category: "Personal Documents",
        keywords: "academic documents degree diploma transcript equivalency education"
    },
    {
        title: "University Degree Translation",
        url: "/personal/academic/degree/",
        category: "Personal Documents",
        keywords: "degree diploma university translation attestation equivalency golden visa bachelor master"
    },
    {
        title: "Transcript Translation",
        url: "/personal/academic/transcripts/",
        category: "Personal Documents",
        keywords: "transcript academic record grades university college translation gpa"
    },

    // ============================================
    // ATTESTATION SERVICES (Silo 3)
    // ============================================
    {
        title: "Attestation Services",
        url: "/services/attestation/",
        category: "Attestation",
        keywords: "attestation mofa ministry foreign affairs legalization apostille embassy"
    },
    {
        title: "India Attestation",
        url: "/services/attestation/india/",
        category: "Attestation",
        keywords: "india attestation indian documents certificate hrd mea embassy"
    },
    {
        title: "UK Attestation",
        url: "/services/attestation/uk/",
        category: "Attestation",
        keywords: "uk attestation british documents fcdo apostille embassy legalization"
    },
    {
        title: "US Attestation",
        url: "/services/attestation/us/",
        category: "Attestation",
        keywords: "us usa attestation american documents state department apostille embassy"
    },
    {
        title: "Philippines Attestation",
        url: "/services/attestation/philippines/",
        category: "Attestation",
        keywords: "philippines attestation filipino documents dfa red ribbon embassy"
    },
    {
        title: "Pakistan Attestation",
        url: "/services/attestation/pakistan/",
        category: "Attestation",
        keywords: "pakistan attestation pakistani documents hec mofa embassy"
    },
    {
        title: "MOFA Attestation",
        url: "/services/attestation/mofa/",
        category: "Attestation",
        keywords: "mofa ministry foreign affairs uae attestation legalization"
    },
    {
        title: "Embassy Legalization",
        url: "/services/attestation/embassy/",
        category: "Attestation",
        keywords: "embassy legalization consular attestation diplomatic authentication"
    },
    {
        title: "Apostille Services",
        url: "/services/attestation/apostille/",
        category: "Attestation",
        keywords: "apostille hague convention legalization international documents"
    },

    // ============================================
    // SPECIALIZED TRANSLATION (Silo 4)
    // ============================================
    {
        title: "Specialized Translation",
        url: "/specialized-translation/",
        category: "Specialized",
        keywords: "specialized translation technical medical hospitality digital industry expert"
    },
    {
        title: "Medical Translation",
        url: "/specialized/medical/",
        category: "Specialized",
        keywords: "medical report translation dha moh haad healthcare hospital diagnosis"
    },
    {
        title: "Technical Translation",
        url: "/specialized/technical/",
        category: "Specialized",
        keywords: "technical translation manual engineering specifications industrial"
    },
    {
        title: "Hospitality Translation",
        url: "/specialized/hospitality/",
        category: "Specialized",
        keywords: "hospitality translation menu restaurant hotel tourism f&b"
    },
    {
        title: "Digital Content Translation",
        url: "/specialized/digital/",
        category: "Specialized",
        keywords: "website localization app translation digital content software ui ux"
    },
    {
        title: "Financial Translation",
        url: "/specialized/financial/",
        category: "Specialized",
        keywords: "financial translation audit report statements banking investment"
    },
    {
        title: "Golden Visa Translation",
        url: "/services/golden-visa-translation/",
        category: "Specialized",
        keywords: "golden visa uae residence permit investor entrepreneur specialist talent documents package"
    },
    {
        title: "Certificate Translation",
        url: "/services/certificate-translation/",
        category: "Services",
        keywords: "certificate birth marriage death degree diploma academic educational"
    },
    {
        title: "Corporate Translation",
        url: "/services/corporate-translation/",
        category: "Services",
        keywords: "corporate business company trade license memorandum articles association"
    },

    // ============================================
    // LOCATIONS (Silo 5)
    // ============================================
    {
        title: "All Locations",
        url: "/locations/",
        category: "Locations",
        keywords: "locations dubai abu dhabi sharjah uae emirates service areas"
    },
    {
        title: "Dubai",
        url: "/locations/dubai/",
        category: "Locations",
        keywords: "dubai translation services all areas legal certified moj"
    },
    {
        title: "Palm Jumeirah",
        url: "/locations/dubai/palm-jumeirah/",
        category: "Locations",
        keywords: "palm jumeirah dubai translation service hnw high net worth luxury"
    },
    {
        title: "JLT - Jumeirah Lake Towers",
        url: "/locations/dubai/jlt/",
        category: "Locations",
        keywords: "jlt jumeirah lake towers free zone dmcc translation business"
    },
    {
        title: "Business Bay",
        url: "/locations/dubai/business-bay/",
        category: "Locations",
        keywords: "business bay dubai downtown translation corporate tower"
    },
    {
        title: "DIFC",
        url: "/locations/dubai/difc/",
        category: "Locations",
        keywords: "difc dubai international financial centre legal translation courts"
    },
    {
        title: "Downtown Dubai",
        url: "/locations/dubai/downtown/",
        category: "Locations",
        keywords: "downtown dubai burj khalifa mall translation central"
    },
    {
        title: "Dubai Marina",
        url: "/locations/dubai/marina/",
        category: "Locations",
        keywords: "dubai marina jbr translation waterfront residential"
    },
    {
        title: "Abu Dhabi",
        url: "/locations/abu-dhabi/",
        category: "Locations",
        keywords: "abu dhabi capital uae translation adgm government"
    },
    {
        title: "Sharjah",
        url: "/locations/sharjah/",
        category: "Locations",
        keywords: "sharjah emirate translation services saif zone"
    },

    // ============================================
    // RESOURCES (Silo 6)
    // ============================================
    {
        title: "Resources Hub",
        url: "/resources/",
        category: "Resources",
        keywords: "resources guides checklists help information"
    },
    {
        title: "Pricing Guide",
        url: "/resources/pricing-guide/",
        category: "Resources",
        keywords: "pricing price cost rates fees quote estimate"
    },
    {
        title: "Document Checklist",
        url: "/resources/document-checklist/",
        category: "Resources",
        keywords: "documents checklist requirements prepare list"
    },
    {
        title: "Attestation Guide 2025",
        url: "/resources/attestation-guide/",
        category: "Resources",
        keywords: "attestation guide mofa hague apostille legalization chain process"
    },
    {
        title: "Golden Visa Checklist 2025",
        url: "/resources/golden-visa-checklist/",
        category: "Resources",
        keywords: "golden visa checklist 2025 investor entrepreneur specialist documents required"
    },
    {
        title: "FAQ",
        url: "/resources/faq/",
        category: "Resources",
        keywords: "faq questions answers help support common"
    },

    // ============================================
    // INDUSTRIES
    // ============================================
    {
        title: "Legal Industry",
        url: "/industries/legal/",
        category: "Industries",
        keywords: "legal law firms lawyers attorneys court litigation"
    },
    {
        title: "Healthcare Industry",
        url: "/industries/healthcare/",
        category: "Industries",
        keywords: "healthcare medical hospital clinic doctors patients"
    },
    {
        title: "Real Estate Industry",
        url: "/industries/real-estate/",
        category: "Industries",
        keywords: "real estate property dld poa power of attorney developers"
    },
    {
        title: "E-commerce Industry",
        url: "/industries/e-commerce/",
        category: "Industries",
        keywords: "ecommerce online business digital marketplace retail"
    },

    // ============================================
    // OTHER PAGES
    // ============================================
    {
        title: "Contact Us",
        url: "/contact/",
        category: "Contact",
        keywords: "contact whatsapp email phone call quote request"
    },
    {
        title: "About Us",
        url: "/about/",
        category: "About",
        keywords: "about company team moj certified translators licensed"
    },
    {
        title: "Privacy Policy",
        url: "/privacy/",
        category: "Legal",
        keywords: "privacy policy data protection gdpr personal information"
    },
    {
        title: "Terms of Service",
        url: "/terms/",
        category: "Legal",
        keywords: "terms service conditions agreement legal"
    }
];

function performSearch(query) {
    if (!query || query.length < 2) return [];

    const searchTerms = query.toLowerCase().split(' ').filter(t => t.length > 1);

    const results = searchIndex.map(item => {
        let score = 0;

        searchTerms.forEach(term => {
            const titleLower = item.title.toLowerCase();
            const categoryLower = item.category.toLowerCase();

            if (titleLower === term) score += 20;
            else if (titleLower.includes(term)) score += 10;

            if (categoryLower.includes(term)) score += 5;
            if (item.keywords.includes(term)) score += 3;
        });

        return { ...item, score };
    }).filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8);

    return results;
}

function displaySearchResults(results, container) {
    if (!container) return;

    if (results.length === 0) {
        container.innerHTML = '<p class="no-results">No results found. Try different keywords or browse our quick links above.</p>';
        return;
    }

    const html = results.map(item => `
        <a href="${item.url}" class="search-result-item">
            <span class="result-category">${item.category}</span>
            <span class="result-title">${item.title}</span>
        </a>
    `).join('');

    container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.querySelector('.search-btn');

    let resultsContainer = document.getElementById('searchResults');
    if (!resultsContainer && searchInput) {
        resultsContainer = document.createElement('div');
        resultsContainer.id = 'searchResults';
        resultsContainer.className = 'search-results';
        searchInput.parentNode.after(resultsContainer);
    }

    function doSearch() {
        const query = searchInput ? searchInput.value : '';
        const results = performSearch(query);
        displaySearchResults(results, resultsContainer);
    }

    if (searchInput) {
        searchInput.addEventListener('input', doSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                doSearch();
            }
        });
    }

    if (searchBtn) {
        searchBtn.addEventListener('click', function(e) {
            e.preventDefault();
            doSearch();
        });
    }
});
