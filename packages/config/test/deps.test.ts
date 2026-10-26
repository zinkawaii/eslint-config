import { expect, it } from "vitest";
import packageJson from "../package.json";

it("check deps", async () => {
  const antfu = await import("@antfu/eslint-config/package.json", {
    with: { type: "json" },
  });

  expect(packageJson.peerDependencies).toEqual(antfu.peerDependencies);
  expect(packageJson.peerDependenciesMeta).toEqual(antfu.peerDependenciesMeta);
  expect(Object.keys(packageJson.dependencies)).toEqual(Object.keys(antfu.dependencies));
});
