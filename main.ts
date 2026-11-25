import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const line =
  "My worst Monday: deploy frozen at 97%, inbox at 4000 unread, and the standup that should've been a message just invited me to a pre-standup.";

const outputDir =
  process.env.MAKEFUN_OUTPUT_DIR ??
  resolve(dirname(fileURLToPath(import.meta.url)), "output");

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), line + "\n", "utf8");
