import antfu from "@antfu/eslint-config";
import zin from "./src";

export default antfu({
    pnpm: true,
    rules: {
        ...zin.standard,
        ...zin.recommended,
        ...zin.stylistic,
        ...zin.patch,
        "style/quote-props": ["warn", "consistent"],
    },
});
