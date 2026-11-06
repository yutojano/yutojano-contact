export type RecordRow = { key: string; value: number; tag?: string };
export type Snapshot = { label: string; records: RecordRow[]; seed: number };
export const SEED = 102187723301418;
