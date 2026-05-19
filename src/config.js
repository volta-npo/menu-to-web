export const config = {
    "number": 5,
    "slug": "menu-to-web",
    "title": "Menu to Web",
    "category": "Digital Presence",
    "tagline": "Turn a restaurant PDF or photo menu into clean, accessible, searchable web content.",
    "persona": "Student teams supporting restaurants and food-service clients.",
    "gap": "Restaurants often have image-only menus that are unreadable, unsearchable, and hard to update.",
    "niche": "Independent food businesses with outdated menu assets.",
    "metric": "menu items converted to accessible HTML",
    "modules": [
        "Menu extraction template",
        "Section and item schema",
        "Allergen/accessibility fields",
        "Change log for updates"
    ],
    "theme": {
        "accent": "#2563eb",
        "accent2": "#60a5fa",
        "emoji": "\ud83c\udf10",
        "metricLabel": "Presence readiness",
        "workflow": [
            "Capture public evidence",
            "Score the digital gap",
            "Prioritize owner-safe fixes",
            "Export handoff packet"
        ],
        "privacy": "Only public business information and project notes should be entered. Do not store passwords."
    },
    "statuses": [
        "not-started",
        "blocked",
        "in-progress",
        "ready",
        "approved"
    ],
    "criteria": [
        {
            "id": "menu-extraction-template",
            "label": "Menu extraction template",
            "weight": 15,
            "defaultStatus": "not-started",
            "guidance": "Implement and verify menu extraction template with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "section-and-item-schema",
            "label": "Section and item schema",
            "weight": 15,
            "defaultStatus": "not-started",
            "guidance": "Implement and verify section and item schema with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "allergen-accessibility-fields",
            "label": "Allergen/accessibility fields",
            "weight": 15,
            "defaultStatus": "not-started",
            "guidance": "Implement and verify allergen/accessibility fields with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "change-log-for-updates",
            "label": "Change log for updates",
            "weight": 15,
            "defaultStatus": "not-started",
            "guidance": "Implement and verify change log for updates with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "evidence-quality",
            "label": "Evidence quality",
            "weight": 10,
            "defaultStatus": "not-started",
            "guidance": "Attach proof, source notes, screenshots, owner confirmation, or reviewer rationale."
        },
        {
            "id": "owner-handoff",
            "label": "Owner handoff",
            "weight": 10,
            "defaultStatus": "not-started",
            "guidance": "Make the output understandable and maintainable by a nontechnical owner."
        },
        {
            "id": "mission-alignment",
            "label": "Mission alignment",
            "weight": 10,
            "defaultStatus": "not-started",
            "guidance": "Show how this advances digital equity, student growth, or pro bono delivery."
        },
        {
            "id": "qa-safety",
            "label": "QA and safety",
            "weight": 10,
            "defaultStatus": "not-started",
            "guidance": "Resolve privacy, accessibility, accuracy, and operational risks before handoff."
        }
    ],
    "templates": {
        "actions": [
            "Run a real Volta scenario for Menu to Web and capture baseline evidence.",
            "Complete the menu extraction template workflow with owner-safe notes.",
            "Resolve all blocked rubric items and add evidence for every ready item.",
            "Export the handoff packet and review it with a mentor before client use."
        ]
    },
    "sample": {
        "clientName": "Riverside Community Bakery",
        "chapter": "Jacksonville",
        "studentLead": "Volta Student Lead",
        "notes": "Digital presence sprint for an under-digitized local storefront. Menu to Web sample.",
        "evidencePrefix": "Menu to Web",
        "evidence": [
            "Discovery call notes captured with owner confirmation.",
            "Public digital footprint reviewed and summarized.",
            "Mentor QA comments attached before handoff."
        ]
    }
};
//# sourceMappingURL=config.js.map