import { withPrefix } from "../utils/index.js";

export default withPrefix("stylistic", {
    "array-bracket-newline": ["warn", "consistent"],
    "array-bracket-spacing": ["warn", "never"],
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
    "jsx-quotes": ["warn", "prefer-double"],
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
    "no-confusing-arrow": "warn",
    "no-floating-decimal": "warn",
    "no-extra-parens": ["warn", "functions"],
    "no-extra-semi": "warn",
    "no-mixed-spaces-and-tabs": "warn",
    "no-tabs": "warn",
    "no-trailing-spaces": "warn",
    "no-whitespace-before-property": "warn",
    "nonblock-statement-body-position": ["warn", "beside"],
    "object-curly-newline": "warn",
    "object-curly-spacing": ["warn", "always"],
    "object-property-newline": ["warn", {
        allowAllPropertiesOnSameLine: true
    }],
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
    "switch-colon-spacing": ["warn", {
        before: false,
        after: true
    }],
    "template-curly-spacing": ["warn", "never"],
    "template-tag-spacing": ["warn", "never"],
    "wrap-iife": ["warn", "inside", {
        functionPrototypeMethods: true
    }],
    "yield-star-spacing": ["warn", "after"]
});