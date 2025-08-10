import antfu, { type TypedFlatConfigItem } from "@antfu/eslint-config";
import configJavascript from "./configs/javascript";
import configMisc from "./configs/misc";
import configStylistic from "./configs/stylistic";
import rulesVue from "./rules/vue";

const fusedProps = [
    "name",
    "languageOptions",
    "linterOptions",
    "processor",
    "plugins",
    "rules",
    "settings",
] as const;

export const zin: typeof antfu = (...[options = {}, ...userConfigs]) => {
    const configFused = fusedProps.reduce((acc, key) => {
        if (key in options) {
            acc[key] = options[key] as any;
            delete options[key];
        }
        return acc;
    }, {} as TypedFlatConfigItem);

    const vue = options.vue === false || typeof options.vue === "object"
        ? options.vue
        : {};

    return antfu({
        pnpm: true,
        ...options,
        vue: vue && {
            ...vue,
            overrides: {
                ...rulesVue,
                ...vue.overrides,
            },
        },
    }, configJavascript, configMisc, configStylistic, configFused, ...userConfigs);
};

export default zin;
