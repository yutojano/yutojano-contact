# Architecture — Contact sheet

## Invariants

- Pure core: ranking / parsing functions have no filesystem side effects.
- IO lives in a dedicated module so tests can feed fixtures.
- A single integer seed (`102187723301418`) is used only for demo fixtures, never for production ranking.

## Data

Records are plain dicts/structs. The Yuto Janoš theme only names the domain; algorithms stay generic.

## Failure modes

- Empty input returns empty summaries, never None.
- Unknown keys are ignored rather than crashing the CLI.
