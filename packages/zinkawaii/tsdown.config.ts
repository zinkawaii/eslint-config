import { defineConfig } from "tsdown";

export default defineConfig({
  exports: true,
  deps: {
    onlyBundle: [
      "@antfu/eslint-config",
    ],
  },
});
