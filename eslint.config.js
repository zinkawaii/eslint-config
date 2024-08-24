import antfu from "@antfu/eslint-config";
import zin from "./dist/index.js";

export default antfu({
    jsonc: false,
    markdown: false,
    yaml: false,
    stylistic: {
        quotes: "double",
        semi: true,
        indent: 4
    },
    rules: {
        ...zin.standard,
        ...zin.recommended,
        ...zin.stylistic,
        ...zin.patch,
        "style/quote-props": ["warn", "consistent"]
    }
});