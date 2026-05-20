export const domain = {
    "kind": "menu-editor",
    "title": "Menu to Web",
    "purpose": "A purpose-built menu editor interface for turn a restaurant pdf or photo menu into clean, accessible, searchable web content.",
    "inputTitle": "Product-specific inputs",
    "previewTitle": "Generated working outputs",
    "tableTitle": "Menu items",
    "metricLabels": [
        "Menu Completeness",
        "Allergen Review",
        "Change Readiness"
    ],
    "fields": [
        {
            "id": "organization-client",
            "label": "Organization / client",
            "type": "text",
            "sample": "Riverside Community Bakery",
            "placeholder": "Enter organization / client"
        },
        {
            "id": "primary-goal",
            "label": "Primary goal",
            "type": "text",
            "sample": "menu items converted to accessible HTML",
            "placeholder": "Enter primary goal"
        },
        {
            "id": "owner-reviewer",
            "label": "Owner / reviewer",
            "type": "text",
            "sample": "Volta project lead",
            "placeholder": "Enter owner / reviewer"
        },
        {
            "id": "evidence-source",
            "label": "Evidence source",
            "type": "text",
            "sample": "Owner interview + public audit",
            "placeholder": "Enter evidence source"
        },
        {
            "id": "menu-section",
            "label": "Menu section",
            "type": "text",
            "sample": "Breakfast",
            "placeholder": "Enter menu section"
        },
        {
            "id": "item-count",
            "label": "Item count",
            "type": "number",
            "sample": 24,
            "placeholder": "Enter item count"
        },
        {
            "id": "allergen-review-percent",
            "label": "Allergen review percent",
            "type": "number",
            "sample": 100,
            "placeholder": "Enter allergen review percent"
        },
        {
            "id": "html-target",
            "label": "HTML target",
            "type": "text",
            "sample": "mobile menu page",
            "placeholder": "Enter html target"
        }
    ],
    "rows": [
        "Sections created",
        "Items transcribed",
        "Prices normalized",
        "Market-price exceptions explained",
        "Allergens reviewed",
        "Dietary tags reviewed",
        "Mobile preview checked",
        "Price-change log started",
        "Item descriptions normalized",
        "Menu search tags generated",
        "JSON-LD menu schema drafted",
        "Owner change approval captured"
    ],
    "artifacts": [
        "Accessible HTML menu",
        "Menu CSV",
        "Owner review sheet",
        "Searchable menu JSON",
        "Menu schema JSON-LD",
        "Change approval log"
    ],
    "checks": [
        "Item names unique per section",
        "Prices numeric or justified",
        "Every image-only item transcribed",
        "Allergen uncertainty must be marked for owner review",
        "Menu schema requires section and price fields",
        "Owner approval required before publishing price changes"
    ],
    "modules": [
        {
            "name": "Structured menu editor",
            "description": "Normalizes sections, items, descriptions, prices, modifiers, photos, availability, and source confidence.",
            "metrics": [
                "Items structured",
                "Price completeness",
                "Source confidence"
            ],
            "deliverable": "Structured menu ledger"
        },
        {
            "name": "Diet/allergen safety review",
            "description": "Flags missing allergen/diet notes, cross-contact warnings, and owner-review requirements.",
            "metrics": [
                "Allergen coverage",
                "Diet labels",
                "Owner approvals"
            ],
            "deliverable": "Owner-safe menu review"
        },
        {
            "name": "Web/menu preview generator",
            "description": "Prepares mobile-first menu sections, JSON-LD candidates, PDF/print notes, and change summaries.",
            "metrics": [
                "Mobile readiness",
                "Schema coverage",
                "Print clarity"
            ],
            "deliverable": "Mobile web menu pack"
        },
        {
            "name": "Publishing change control",
            "description": "Tracks owner approval, price change risk, stale source images, and publish channel readiness.",
            "metrics": [
                "Changes approved",
                "Publish blockers",
                "Refresh cadence"
            ],
            "deliverable": "Menu publishing checklist"
        }
    ],
    "plays": [
        {
            "name": "Photo/PDF to structured menu",
            "trigger": "Client has only a flyer, photo, or PDF menu.",
            "outcome": "A normalized menu table ready for web publication."
        },
        {
            "name": "Owner price-proof pass",
            "trigger": "Prices or availability might be stale.",
            "outcome": "Owner-approved price and availability ledger."
        },
        {
            "name": "Mobile menu launch",
            "trigger": "Menu is structured and needs to go online.",
            "outcome": "Mobile preview, schema notes, and publishing checklist."
        }
    ],
    "economics": {
        "buyer": "Restaurant owner, cafe manager, or student content pod",
        "valueMetric": "Menu items published without owner corrections",
        "priceHint": "$49/month menu updates or $249 menu digitization sprint",
        "northStar": "Approved menu items live on mobile"
    },
    "exportSuite": [
        "Structured menu CSV",
        "Mobile menu copy pack",
        "Allergen/diet review sheet",
        "Owner price approval memo",
        "Menu JSON-LD planning brief"
    ],
    "sampleClient": "Riverside Community Bakery",
    "saas": {
        "personas": ["Menu transcription lead", "Restaurant owner", "Accessibility reviewer"],
        "stages": [
            { "name": "Menu intake", "goal": "Convert raw menu photos or PDFs into structured sections and item rows.", "rowPatterns": ["Sections|Items|transcribed|Descriptions"] },
            { "name": "Web enrichment", "goal": "Normalize prices, allergens, dietary tags, search tags, and schema data.", "rowPatterns": ["Prices|Allergens|Dietary|search|JSON-LD"] },
            { "name": "Owner publishing", "goal": "Review changes with the owner and export accessible web assets.", "rowPatterns": ["Mobile preview|Price-change|Owner|approval"] }
        ],
        "sampleValues": { "primary-goal": "publish an accessible, searchable restaurant menu" },
        "sampleRows": { "Menu source uploaded/linked": "Owner-provided PDF and counter photo logged as source evidence", "Sections normalized": "Breakfast, lunch, drinks, and specials normalized into web sections", "Items entered with prices": "Menu items entered with prices, variants, and source notes", "Diet/allergen notes captured": "Vegetarian, gluten-free, nuts, dairy, and owner-confirm-needed labels tracked", "Owner review status recorded": "Owner approval state captured for price and availability changes", "Mobile menu preview checked": "Long item names, prices, and modifiers reviewed on mobile layout", "Change log generated": "New, changed, uncertain, and removed menu items summarized", "Publish-ready export created": "CSV, owner review memo, and web copy pack generated", "Photo-to-item mapping checked": "Item photos mapped only where owner can confirm accuracy", "Upsell/modifier groups defined": "Add-ons, sizes, and substitutions grouped for web readability", "Out-of-stock/seasonal policy set": "Seasonal and limited availability rules written for owner review", "Schema/menu metadata drafted": "Menu URL, cuisine, price range, and section metadata drafted" }
    }
};
//# sourceMappingURL=domain.js.map