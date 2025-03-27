import { prefixary } from "../utils";

export default prefixary({
    "antfu/curly": "off",
    "antfu/if-newline": "off",
    "antfu/no-import-dist": "off",
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
            "unknown"
        ],
        internalPattern: [
            "#.*",
            "@/.*",
            "@@/.*",
            "~/.*",
            "~~/.*"
        ],
        newlinesBetween: "never"
    }],
    "ts/no-unused-expressions": "off",
    "unicorn/no-new-array": "off",
    "unicorn/consistent-function-scoping": "off",
    "unused-imports/no-unused-vars": "off",
    "yaml/quotes": ["warn", {
        prefer: "double"
    }]
});