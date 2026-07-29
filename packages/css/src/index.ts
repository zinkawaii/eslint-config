import css from "@eslint/css";
import type { ConfigObject, ConfigWithExtends } from "@eslint/config-helpers";
import order from "./rules/order";
import stylistic from "./rules/stylistic";

const setup: ConfigWithExtends = {
  name: "zin/css/setup",
  files: [
    "**/*.css",
  ],
  language: "css/css",
  plugins: {
    css,
  },
  extends: [
    "css/recommended",
  ],
  rules: {
    "css/use-baseline": "off",
    "css/no-invalid-properties": "off",
  },
};

export default <(ConfigWithExtends | ConfigObject)[]> [
  setup,
  order,
  stylistic,
];
