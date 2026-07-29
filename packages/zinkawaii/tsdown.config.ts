import { defineConfig } from "tsdown";

export default defineConfig({
  exports: true,
  deps: {
    onlyBundle: [
      "@antfu/eslint-config",
    ],
    neverBundle: [
      "eslint-plugin-erasable-syntax-only",
    ],
  },
  plugins: [
    {
      name: "inject-dependencies",
      async tsdownConfigResolved(config) {
        const antfu = await import("@antfu/eslint-config/package.json", {
          with: { type: "json" },
        });

        for (
          const key of [
            "dependencies",
            "peerDependencies",
            "peerDependenciesMeta",
            "inlinedDependencies",
          ] as const
        ) {
          config.pkg![key] = antfu.default[key];
        }

        delete config.pkg!.dependencies!["eslint-plugin-unicorn"];
      },
    },
  ],
});
