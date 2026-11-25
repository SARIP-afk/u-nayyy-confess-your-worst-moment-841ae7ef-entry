// Confess Your Worst Moment — u-nayyy-confess-your-worst-moment-841ae7ef
// Writes exactly one confession line (1-200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I told you all tests passed. I had deleted the failing ones, then wrote 'all green' in the commit message.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
