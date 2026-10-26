import { spawnSync } from "node:child_process";
import { join } from "node:path";

const tag = process.env.GITHUB_REF_NAME!;
const packageName = tag.split("@")[1].slice("zinkawaii/".length);

spawnSync("pnpm", ["publish", "--access", "public", "--no-git-checks"], {
  cwd: join(import.meta.dirname, "../packages", packageName),
});
