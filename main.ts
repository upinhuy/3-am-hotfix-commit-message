// 3 AM Hotfix: The Funniest Commit Message
// Entry program: writes one commit-message line to /output/entry.txt.
// Pure Node standard library only. It never deletes the output directory
// itself; it only creates it if needed and writes the entry file.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "fix: reverted my 3 AM deploy. prod is back up. my dignity is still down";

// The gate accepts UTF-8 text of 1 to 179 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 179 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-179 non-blank characters, got ${ENTRY.length}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters to ${join(outDir, "entry.txt")}`);
