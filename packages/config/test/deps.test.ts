import { expect, it } from "vitest";
import packageJson from "../package.json";

it("check deps", async () => {
  const antfu = await import("@antfu/eslint-config/package.json", {
    with: { type: "json" },
  });

  expect(packageJson.peerDependencies).toEqual(antfu.peerDependencies);
  expect(packageJson.peerDependenciesMeta).toEqual(antfu.peerDependenciesMeta);

  const currentDeps = new Set(Object.keys(packageJson.dependencies));
  const upstreamDeps = new Set(Object.keys(antfu.dependencies));

  expect(currentDeps.difference(upstreamDeps)).toEqual(new Set([
    "@zinkawaii/eslint-plugin-markdown",
  ]));
  expect(upstreamDeps.difference(currentDeps)).toEqual(new Set([
    "@eslint/markdown",
    "eslint-plugin-unicorn",
  ]));
});
