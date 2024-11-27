import antfu from "@antfu/eslint-config";
import zin from "./dist/index.js";

export default antfu({
    markdown: false,
    rules: {
        ...zin.standard,
        ...zin.recommended,
        ...zin.stylistic,
        ...zin.patch,
        "style/quote-props": ["warn", "consistent"]
    }
});