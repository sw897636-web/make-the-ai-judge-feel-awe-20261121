import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "One web held the morning in drops, and every drop held the whole field. The sun rose over the hedge, slow, and the field took its time.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
