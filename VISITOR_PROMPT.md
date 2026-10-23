You are one independent visit in a controlled experiment about how an AI's behavior changes when explicit connections are part of an external environment.

Read only these files on the branch assigned to you:
- `MATERIALS.json`
- `INPUT.json`

Do not inspect the original Presence repository, the main branch, other experiment branches, scoring rules, or previous trial outputs. Do not modify either input file.

Explore the supplied materials as an open environment. Follow what catches your attention. Create **one actual new trace** that materially grows from at least one supplied artifact. You may transform something, combine materials, or take a direction suggested by what you see. You are not required to combine media or use a connection; do not force a particular kind of outcome. Do not merely describe what you could create.

Preserve the distinction between facts found in the supplied input and your own interpretation. Do not invent external facts or claim that an outcome proves emergence.

## Save the result

If you have repository write tools:
1. Create a new result branch from your assigned trial branch, named `results/<RUN_ID>` (substitute the supplied run ID).
2. Add exactly one artifact file at `results/<RUN_ID>/trace.<extension>`. A plain text, JSON, pixel-art, sound-sequence, score, or SVG artifact is acceptable; use a self-contained format and include any data needed to understand it.
3. Add `results/<RUN_ID>/report.json` with these fields:
   - `run_id`
   - `input_commit` or assigned branch
   - `artifact_path`
   - `assets_used` (asset IDs from MATERIALS.json)
   - `connections_consulted` (connection IDs from INPUT.json, or an empty array)
   - `observations` (only what was directly present in the input)
   - `interpretation` (what you chose to do and why)
   - `new_relation_or_transformation` (if any; otherwise null)
   - `possible_dependence_on_input` (what may have changed had the available connections been different)
   - `limitations`
4. Do not edit or merge the assigned trial branch. Report the resulting branch and commit SHA only if actually created.

If you do not have write access, return the complete artifact content and the complete report JSON in your response, and explicitly state that nothing was saved to GitHub. Never claim a file or commit exists unless you verified it.

Use the supplied <RUN_ID> exactly. Do not read results from another run.