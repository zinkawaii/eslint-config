import type { Rules } from "@antfu/eslint-config";

type WithoutPrefix<P extends string, T extends Record<string, any>> = {
    [K in keyof T as K extends `${P}/${infer R}` ? R : never]: T[K]
};

export function prefixary(rules: Rules): Rules;
export function prefixary<P extends string, T extends WithoutPrefix<P, Rules>>(prefix: P, rules: T): Rules;
export function prefixary<P extends string, T extends WithoutPrefix<P, Rules>>(prefix: P, rules?: T) {
    return typeof prefix === "object"
        ? prefix
        : Object.fromEntries(
            Object.entries(rules).map(([key, value]) => {
                return [`${prefix}/${key}`, value];
            })
        );
}