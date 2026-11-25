import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My worst Monday: deploy frozen at 97%, inbox at 4000 unread, and the standup that should've been a message just invited me to a pre-standup.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
