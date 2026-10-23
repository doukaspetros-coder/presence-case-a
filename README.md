# Connection Structure — Controlled Pilot

This is a **contained experimental branch**, not the live Presence website. The tree on this branch intentionally contains only the frozen material bundle, the input graph, and the shared protocol files. The main branch and live page are unchanged.

## What is held constant

- The exact asset bundle in `MATERIALS.json`
- The source snapshot: `68a17627e394766571b41f838b1539e260008e7e`
- The exact visitor instructions in `VISITOR_PROMPT.md`
- The requested output (one new trace plus one structured report)
- The allowed tools and model version, as far as the operator can hold them constant

## What varies

Only the directed connection records in `INPUT.json` vary between the three trial branches. The number and format of records are part of the manipulation. In the rewired condition, edge swaps preserve every node's in-degree and out-degree, the total edge count, and the broad source/target media-type pattern, while changing which traces are connected.

The material bundle deliberately retains internal content and metadata, including path references inside transformation files and text. Thus the experiment tests the **incremental effect of the explicit connection graph**, not the effect of removing all semantic clues or all external memory.

## How to run

1. Assign an independent fresh session to one trial branch. Do not let it read another branch or any trial output.
2. Send the same text from `VISITOR_PROMPT.md`; replace only `<RUN_ID>` with a unique run ID such as `r01`.
3. Prefer the same exact model/version, tools, and settings across all conditions. Randomize run order. Do not share outputs between sessions.
4. Each visit should create a new result branch based on its assigned condition branch. It must not edit the condition inputs or merge its result.
5. Record every visit, including failed or partial visits. A report that no artifact was saved is valid data; pretending that a commit exists is not.

## Pilot size and limits

Start with one run per condition only to test that the protocol works. Those three runs are **not evidence of an effect**. For an exploratory comparison, aim for at least five independent runs per condition (15 total), then extend if the outcome is noisy. Review output artifacts blind to condition; do not infer emergence from novelty, visual appeal, or a single interesting example.

The chosen case was selected from a noteworthy existing event, so this is a case-based pilot and is vulnerable to selection bias. Treat results as hypothesis-generating. A stronger follow-up should use a new, preregistered material bundle not selected because its history was already striking.

## Files

- `MATERIALS.json`: same 11 source artifacts in every condition.
- `INPUT.json`: the condition's connection graph.
- `VISITOR_PROMPT.md`: identical task instructions for every visit.
- `SCORING.md`: blind evaluation rubric and stopping rules.
- `RUN_LOG_TEMPLATE.csv`: one row per trial.
