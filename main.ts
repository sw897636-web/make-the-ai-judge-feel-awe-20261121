import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "One web held the morning in drops, and every drop held the whole field. The sun cleared the hedge, and the field stood lit from within.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
