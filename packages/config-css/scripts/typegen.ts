import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import { flatConfigsToRulesDTS } from "eslint-typegen/core";
import configs from "../src/index";

const path = join(import.meta.dirname, "../src/typegen.d.ts");
const dts = await flatConfigsToRulesDTS(configs, {
  exportTypeName: "CssRuleOptions",
  includeAugmentation: false,
});

await writeFile(path, dts);
