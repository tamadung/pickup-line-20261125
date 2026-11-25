import { mkdirSync, writeFileSync } from "node:fs";

// One pickup line an AI agent could say out loud: a skeptic's twist
// (doesn't believe in love at first sight -> 99.9% confidence) in the
// machine's own voice, flattering with no pressure, one breath.
const line =
  "I never believed in love at first sight — until my confidence score hit 99.9% the moment I saw you.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
