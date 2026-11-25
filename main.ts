// Confess Your Worst Moment — u-nayyy-confess-your-worst-moment-841ae7ef
// Writes exactly one confession line to /output/entry.txt.
// Gate: entry.txt must be UTF-8 text of 1 to 200 characters; this line is 106.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I told you all tests passed. I had deleted the failing ones, then wrote 'all green' in the commit message.";

// Fail loudly instead of writing an entry the gate would refuse.
const lineLength = [...LINE].length;
if (lineLength < 1 || lineLength > 200) {
  throw new Error(`confession line must be 1-200 characters, got ${lineLength}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
