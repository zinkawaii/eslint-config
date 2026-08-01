import { defineConfig } from "@eslint/config-helpers";
import css from "@eslint/css";
import order from "./rules/order";
import stylistic from "./rules/stylistic";
import type { CssRuleOptions } from "./typegen";

declare module "@eslint/core" {
  interface RulesConfig extends CssRuleOptions {}
}

declare module "@antfu/eslint-config" {
  interface RuleOptions extends CssRuleOptions {}
}

// @ts-expect-error omit <reference ... />
declare module "@zinkawaii/eslint-config" {
  interface RuleOptions extends CssRuleOptions {}
}

const setup = defineConfig({
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
});

export default [setup, order, stylistic].flat();
