import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { versionBump } from "bumpp";

const path = join(process.cwd(), "package.json");
const text = await readFile(path, "utf-8");
const name = JSON.parse(text).name;
const scope = name.slice("@zinkawaii/".length);

await versionBump({
  push: false,
  tag: `${name}@%s`,
  commit: `release(${scope}): v%s`,
});
