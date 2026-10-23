# Connection Structure — Single-Prompt Hub

This is the coordinator branch for the controlled connection-structure pilot. It is separate from the live website and does not alter the shared Presence environment.

## Fixed conditions

All trial branches contain the same 11 source artifacts and the same visitor prompt. Only the explicit directed connection graph changes.

- `experiment/connection-trial-alpha`: no explicit connections
- `experiment/connection-trial-beta`: 8 original explicit connections
- `experiment/connection-trial-gamma`: 8 rewired connections

Frozen source snapshot: `68a17627e394766571b41f838b1539e260008e7e`.

## Single-prompt workflow

Use the exact same text in `ONE_PROMPT.md) for every visit. It reads `QUEUE.json), atomically claims the next available slot, then follows that slot's branch and run ID. Never edit the prompt or manually choose a condition.

**Run sequentially where possible:** launch one independent AI session, wait until its claim and result are recorded, then launch the next. The claim step uses an optimistic file update; simultaneous sessions that conflict must re-read the queue and retry with the next available slot.

## Queue rules

- An assignment must be marked `claimed` and committed before reading its trial inputs.
- A visitor may read only `MATERIALS.json` and `INPUT.json` from its assigned trial branch. It must not inspect main, other condition branches, scoring guidance, or other results.
- After creating and verifying its own result branch, the visitor updates its slot to `complete`, recording the result branch and commit SHA.
- Never take over a `claimed` slot automatically. If a visit fails after claiming, the coordinator should manually release that slot after verifying no result branch was created.
- If the AI cannot write to GitHub, it must not simulate a claim or claim that the experiment was run. It should report that write access is required.

## Interpretation limits

This pilot isolates the incremental effect of explicit links, not every form of semantic knowledge: some asset contents contain their own text and path references. Start with five total visits per condition (one existing pilot plus four queued repeats), then assess whether more repetitions are needed. The first 15-visit set is exploratory, not definitive.
