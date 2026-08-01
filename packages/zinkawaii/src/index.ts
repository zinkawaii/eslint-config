import antfu from "@antfu/eslint-config";
import rulesJavascript from "./rules/javascript";
import rulesMisc from "./rules/misc";
import rulesStylistic from "./rules/stylistic";
import rulesVue from "./rules/vue";

export * from "@antfu/eslint-config";

export const zin: typeof antfu = (options = {}, ...userConfigs) => {
  const stylistic = options.stylistic === false || typeof options.stylistic === "object"
    ? options.stylistic
    : {};

  const vue = options.vue === false || typeof options.vue === "object"
    ? options.vue
    : {};

  return antfu({
    pnpm: true,
    ...options,
    javascript: {
      ...options.javascript,
      overrides: {
        ...rulesJavascript,
        ...options.javascript?.overrides,
      },
    },
    stylistic: stylistic && {
      ...stylistic,
      overrides: {
        ...rulesStylistic,
        ...stylistic.overrides,
      },
    },
    vue: vue && {
      ...vue,
      overrides: {
        "style/indent": "off",
        ...rulesVue,
        ...vue.overrides,
      },
    },
    rules: {
      ...rulesMisc,
      ...options.rules,
    },
  }, ...userConfigs);
};

export default zin;
