export function withPrefix(prefix, obj) {
    return Object.fromEntries(Object.entries(obj).map(([key, value]) => {
        return [`${prefix}/${key}`, value];
    }));
}