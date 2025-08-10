import type { TypedFlatConfigItem } from "@antfu/eslint-config";

export default <TypedFlatConfigItem> {
    name: "zin/misc/rules",
    rules: {
        "antfu/curly": "off",
        "antfu/if-newline": "off",
        "antfu/no-top-level-await": "off",
        "antfu/top-level-function": "off",
        "import/consistent-type-specifier-style": "off",
        "node/prefer-global/process": "off",
        "perfectionist/sort-imports": ["warn", {
            groups: [
                "builtin",
                "external",
                "external-type",
                "internal",
                "internal-type",
                ["parent", "sibling", "index"],
                ["parent-type", "sibling-type", "index-type"],
                "object",
                "unknown",
            ],
            internalPattern: [
                "#.*",
                "@/.*",
                "@@/.*",
                "~/.*",
                "~~/.*",
            ],
            newlinesBetween: "never",
        }],
        "ts/no-empty-object-type": "off",
        "ts/no-unsafe-declaration-merging": "off",
        "yaml/quotes": ["warn", {
            prefer: "double",
        }],
    },
};
