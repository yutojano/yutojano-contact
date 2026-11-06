import { summarize } from "./engine.js";
import type { Snapshot } from "./types.js";
import { SEED } from "./types.js";

const snap: Snapshot = {
  label: "demo",
  seed: SEED,
  records: [
    { key: "alpha", value: 2 },
    { key: "beta", value: -1 },
    { key: "gamma", value: 4.5 },
  ],
};

console.log(JSON.stringify(summarize(snap), null, 2));
