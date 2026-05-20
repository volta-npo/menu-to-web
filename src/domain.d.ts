export declare const domain: {
    kind: string;
    title: string;
    purpose: string;
    inputTitle: string;
    previewTitle: string;
    tableTitle: string;
    metricLabels: string[];
    fields: ({
        id: string;
        label: string;
        type: string;
        sample: string;
        placeholder: string;
    } | {
        id: string;
        label: string;
        type: string;
        sample: number;
        placeholder: string;
    })[];
    rows: string[];
    artifacts: string[];
    checks: string[];
    modules: {
        name: string;
        description: string;
        metrics: string[];
        deliverable: string;
    }[];
    plays: {
        name: string;
        trigger: string;
        outcome: string;
    }[];
    economics: {
        buyer: string;
        valueMetric: string;
        priceHint: string;
        northStar: string;
    };
    exportSuite: string[];
    sampleClient: string;
    saas: {
        personas: string[];
        stages: {
            name: string;
            goal: string;
            rowPatterns: string[];
        }[];
        sampleValues: {
            "primary-goal": string;
        };
        sampleRows: {
            "Menu source uploaded/linked": string;
            "Sections normalized": string;
            "Items entered with prices": string;
            "Diet/allergen notes captured": string;
            "Owner review status recorded": string;
            "Mobile menu preview checked": string;
            "Change log generated": string;
            "Publish-ready export created": string;
            "Photo-to-item mapping checked": string;
            "Upsell/modifier groups defined": string;
            "Out-of-stock/seasonal policy set": string;
            "Schema/menu metadata drafted": string;
        };
    };
};
