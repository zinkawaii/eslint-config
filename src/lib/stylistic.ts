import { prefixary } from "../utils";

export default prefixary("style", {
    "array-element-newline": ["warn", "consistent"],
    "arrow-parens": ["warn", "always"],
    "arrow-spacing": ["warn", {
        before: true,
        after: true
    }],
    "block-spacing": ["warn", "always"],
    "brace-style": ["warn", "stroustrup"],
    "comma-dangle": ["warn", "never"],
    "comma-spacing": ["warn", {
        before: false,
        after: true
    }],
    "comma-style": ["warn", "last"],
    "computed-property-spacing": ["warn", "never"],
    "dot-location": ["warn", "property"],
    "eol-last": ["warn", "never"],
    "function-call-argument-newline": ["warn", "consistent"],
    "function-call-spacing": ["warn", "never"],
    "function-paren-newline": ["warn", "consistent"],
    "implicit-arrow-linebreak": ["warn", "beside"],
    "indent": "off",
    "indent-binary-ops": "off",
    "generator-star-spacing": ["warn", {
        named: {
            before: false,
            after: true
        },
        anonymous: {
            before: true,
            after: false
        },
        method: {
            before: true,
            after: true
        }
    }],
    "jsx-quotes": ["warn", "prefer-double"],
    "key-spacing": ["warn", {
        beforeColon: false,
        afterColon: true,
        mode: "strict"
    }],
    "keyword-spacing": ["warn", {
        before: true,
        after: true
    }],
    "linebreak-style": ["warn", "unix"],
    "lines-between-class-members": ["warn", "always", {
        exceptAfterSingleLine: true
    }],
    "member-delimiter-style": ["warn", {
        multiline: {
            delimiter: "semi",
            requireLast: true
        }
    }],
    "multiline-ternary": "off",
    "new-parens": "warn",
    "no-confusing-arrow": "warn",
    "no-extra-parens": ["warn", "functions"],
    "no-extra-semi": "warn",
    "no-floating-decimal": "warn",
    "no-mixed-operators": "off",
    "no-mixed-spaces-and-tabs": "warn",
    "no-multi-spaces": ["warn", {
        ignoreEOLComments: true
    }],
    "no-multiple-empty-lines": ["warn", {
        max: 1
    }],
    "no-tabs": "warn",
    "no-trailing-spaces": "warn",
    "no-whitespace-before-property": "warn",
    "nonblock-statement-body-position": ["warn", "beside"],
    "object-curly-newline": "warn",
    "object-curly-spacing": ["warn", "always"],
    "object-property-newline": ["warn", {
        allowAllPropertiesOnSameLine: true
    }],
    "operator-linebreak": "off",
    "padded-blocks": ["warn", "never"],
    "quote-props": ["warn", "as-needed"],
    "quotes": ["warn", "double", {
        allowTemplateLiterals: true
    }],
    "rest-spread-spacing": ["warn", "never"],
    "semi": ["warn", "always"],
    "semi-spacing": ["warn", {
        before: false,
        after: true
    }],
    "semi-style": ["warn", "last"],
    "space-before-blocks": ["warn", "always"],
    "space-before-function-paren": ["warn", {
        named: "never",
        anonymous: "never",
        asyncArrow: "always"
    }],
    "space-in-parens": ["warn", "never"],
    "space-infix-ops": "warn",
    "space-unary-ops": "warn",
    "spaced-comment": "off",
    "switch-colon-spacing": ["warn", {
        before: false,
        after: true
    }],
    "template-curly-spacing": ["warn", "never"],
    "template-tag-spacing": ["warn", "never"],
    "type-annotation-spacing": ["warn", {
        before: false,
        after: true,
        overrides: {
            arrow: {
                before: true
            }
        }
    }],
    "type-generic-spacing": "warn",
    "type-named-tuple-spacing": "warn",
    "wrap-iife": ["warn", "inside", {
        functionPrototypeMethods: true
    }],
    "yield-star-spacing": ["warn", "after"]
});