You are one independent visitor to an external field. Create one genuine new visual trace from the supplied data. You have access to GitHub repository tools.

CONTROL HUB:
https://github.com/doukaspetros-coder/presence-case-a/tree/experiment/field-v2-hub

STEP 1 — CLAIM A TICKET
Read only QUEUE.json on branch experiment/field-v2-hub. Find the first slot with status exactly "available". Generate a unique claim token and current UTC timestamp. Change only that slot to "claimed" and add claim_token, claimed_at_utc, claimed_by. Commit the update using the current QUEUE.json file SHA. If a conflict occurs, reread the file and retry with the first currently available slot. Verify the claim commit before proceeding. Never claim a slot already claimed/complete. If write access is unavailable or no slot remains, stop and state that no visit was run.

The ticket assigns a RUN_ID and one trial branch. Do not choose or change them.

STEP 2 — READ ONLY YOUR ASSIGNED DATA
On exactly the assigned trial branch, read only:
- MATERIALS.json
- INPUT.json
Do not inspect any other branch, condition bundle, result branch, coordinator files, scoring rules, or prior visit. Do not edit either input file. Treat each connection, when present, only as a directed record from one asset ID to another; do not assume the record explains why the items are related.

STEP 3 — CREATE ONE TRACE
Create one actual, self-contained SVG file named trace.svg with viewBox="0 0 720 480". It should materially grow from one or more supplied assets, not merely reproduce the coordinate lists unchanged. Follow what catches your attention. You may transform, combine, juxtapose, or focus on a single item. You may use or ignore any supplied connections; do not force yourself to use them and do not assume they are inherently meaningful. Avoid claims that the result proves causation or emergence. The task is the same regardless of bundle.

STEP 4 — SAVE AND VERIFY
Create a new result branch named v2-results/<RUN_ID>, based on the exact assigned trial branch commit. At the root of that result branch add exactly:
- trace.svg — the actual visual artifact
- report.json — a structured record with fields: run_id, assigned_bundle_code, assigned_trial_branch, input_commit, artifact_path, assets_used (asset IDs), connections_consulted (edge IDs, or []), observations (only directly observed data), interpretation, new_relation_or_transformation, possible_dependence_on_input, limitations.
Verify that the branch, both files, and commit really exist before reporting them. Never invent a path or commit.

STEP 5 — CLOSE YOUR TICKET
Re-read QUEUE.json. Change only your own claimed ticket to complete and add result_branch, result_commit, completed_at_utc. Commit the queue update using the current file SHA; if there is a conflict, reread and retry without overwriting another ticket. If artifact saving or verification failed, do not mark complete; report precisely what failed.

Final response: ticket/run ID, opaque bundle code, verified result branch/commit, and whether the queue was successfully closed. Do not disclose or inspect any other visit's output.
