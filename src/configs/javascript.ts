import type { TypedFlatConfigItem } from "@antfu/eslint-config";

export default <TypedFlatConfigItem> {
    name: "zin/javascript/rules",
    rules: {
        // Recommended
        "no-cond-assign": "off",
        "no-fallthrough": "off",
        "require-yield": "error",

        // Standard
        "curly": ["error", "multi-line"],
        "default-param-last": "error",
        "func-style": ["error", "declaration", {
            allowArrowFunctions: true,
        }],
        "logical-assignment-operators": "error",
        "no-console": "off",
        "no-constructor-return": "error",
        "no-labels": "off",
        "no-lonely-if": "error",
        "no-loop-func": "error",
        "no-sequences": "off",
        "no-undefined": "error",
        "no-useless-concat": "error",
        "operator-assignment": ["error", "always"],
        "prefer-numeric-literals": "error",
        "prefer-object-has-own": "error",
        "prefer-object-spread": "error",
        "prefer-template": "off",
        "symbol-description": "off",
    },
};
