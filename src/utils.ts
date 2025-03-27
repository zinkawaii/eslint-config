import type { Rules } from "@antfu/eslint-config";

type WithoutPrefix<P extends string, T extends Record<string, any>> = {
    [K in keyof T as K extends `${P}/${infer R}` ? R : never]: T[K]
};

export function prefixary(rules: Rules): Rules;
export function prefixary<P extends string, T extends WithoutPrefix<P, Rules>>(prefix: P, rules: T): Rules;
export function prefixary<P extends string, T extends WithoutPrefix<P, Rules>>(prefix: P, rules?: T) {
    return rules ? Object.fromEntries(
        Object.entries(rules).map(([key, value]) => [`${prefix}/${key}`, value])
    ) : prefix;
}