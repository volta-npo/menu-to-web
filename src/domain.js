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
    "sampleClient": "Riverside Community Bakery",
    "saas": {
        "personas": ["Menu transcription lead", "Restaurant owner", "Accessibility reviewer"],
        "stages": [
            { "name": "Menu intake", "goal": "Convert raw menu photos or PDFs into structured sections and item rows.", "rowPatterns": ["Sections|Items|transcribed|Descriptions"] },
            { "name": "Web enrichment", "goal": "Normalize prices, allergens, dietary tags, search tags, and schema data.", "rowPatterns": ["Prices|Allergens|Dietary|search|JSON-LD"] },
            { "name": "Owner publishing", "goal": "Review changes with the owner and export accessible web assets.", "rowPatterns": ["Mobile preview|Price-change|Owner|approval"] }
        ],
        "sampleValues": { "primary-goal": "publish an accessible, searchable restaurant menu" },
        "sampleRows": { "Menu search tags generated": "Tagged breakfast, vegetarian, bakery, coffee, and family-friendly items", "Owner change approval captured": "Owner confirmed price normalization and market-price notes" }
    }
};
//# sourceMappingURL=domain.js.map