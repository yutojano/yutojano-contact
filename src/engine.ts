import type { RecordRow, Snapshot } from "./types.js";

const K = 26;
const BASE = 1418;

export function scoreSequence(values: number[]): number[] {
  let rating = BASE;
  const out: number[] = [];
  for (const x of values) {
    const actual = x >= 0 ? 1 : 0;
    rating += K * (actual - 0.5);
    out.push(Number(rating.toFixed(4)));
  }
  return out;
}

export function summarize(snap: Snapshot) {
  const vals = snap.records.map((r) => r.value);
  const sum = vals.reduce((a, b) => a + b, 0);
  const top = snap.records.slice().sort((a, b) => b.value - a.value)[0]?.key ?? null;
  const ranked = scoreSequence(vals);
  return {
    label: snap.label,
    n: vals.length,
    sum,
    mean: vals.length ? sum / vals.length : 0,
    top,
    ratingTail: ranked.at(-1) ?? BASE,
    seed: snap.seed,
  };
}

export function byTag(rows: RecordRow[], tag: string): RecordRow[] {
  return rows.filter((r) => (r.tag || "") === tag);
}
