import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The winning entry: exactly two sentences of horror. Sentence one sets
// up an ordinary dentist visit; sentence two re-reads it — a tooth that
// is not mine has been growing in my mouth since my last visit.
const TEXT =
  "The dentist showed me my X-ray and pointed at a tooth that isn't mine. " +
  "He said it has been there since my last visit, and it is growing.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
