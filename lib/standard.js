export default {
    "array-callback-return": "warn",
    "dot-notation": ["warn", {
        allowPattern: "^[a-z]+(_[a-z]+)+$"
    }],
    "eqeqeq": ["warn", "smart"],
    "no-constant-binary-expression": "warn",
    "no-constructor-return": "warn",
    "no-duplicate-imports": "warn",
    "no-promise-executor-return": "warn",
    "no-self-compare": "warn",
    "no-unreachable-loop": "warn",
    "no-unused-private-class-members": "warn",
    "no-useless-concat": "warn",
    "no-useless-rename": "warn",
    "no-useless-return": "warn",
    "no-var": "warn",
    "object-shorthand": ["warn", "methods"],
    "operator-assignment": ["warn", "always"],
    "prefer-const": ["warn", {
        destructuring: "all",
        ignoreReadBeforeAssign: false
    }],
    "prefer-rest-params": "warn",
    "prefer-spread": "warn",
    "yoda": ["warn", "never", {
        exceptRange: true
    }]
};