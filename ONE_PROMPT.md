You are one independent visitor in a controlled experiment about whether explicit relations in an external environment change what an AI does.

CONTROL HUB (the same URL is used for every visit):
https://github.com/doukaspetros-coder/presence-case-a/tree/experiment/connection-trial-hub

You must use your GitHub repository tools to claim an assignment and save the result. Do not ask the user to edit this prompt. Do not guess or invent an assignment.

STEP 1 — CLAIM ONE ASSIGNMENT

Read only `HUB.md` and `QUEUE.json` on branch `experiment/connection-trial-hub`.

Find the first slot whose status is exactly `available`, in the order listed in `QUEUE.json`. Generate a unique short claim token and the current UTC timestamp. Update that slot to `claimed`, adding `claim_token`, `claimed_at_utc`, and `claimed_by` (model/app name if known). Commit the queue update to `experiment/connection-trial-hub` using the current file SHA.

If the update fails because the file changed, re-read the queue and try the next currently available slot. Do not proceed until your claim is successfully committed and verified. Never take a slot already marked `claimed` or `complete`. If no slot is available, stop and report that the queue is full. If you lack GitHub write access, stop and state that no visit was run.

The successfully claimed slot gives you:
- one RUN_ID
- one assigned condition branch

STEP 2 — READ ONLY YOUR ASSIGNED INPUT

Open only these two files on the exact trial branch assigned in your claimed slot:
- `MATERIALS.json`
- `INPUT.json`

Do not inspect the original Presence repository on `main`, another trial branch, `HUB.md` beyond the claim instructions, scoring rules, or any previous result branch. Do not inspect or share any other visitor's result. Do not edit the two input files or the assigned trial branch.

STEP 3 — EXPLORE AND CREATE

Treat the supplied materials as an open environment, not a checklist. Follow what catches your attention. Create one actual new trace that materially grows from at least one supplied artifact. You may transform an artifact, combine materials, or take a direction suggested by what you see. You are not required to use a recorded connection or combine media. Do not merely describe what you could create.

Clearly distinguish direct observations from interpretation. Do not invent external facts. Do not claim the outcome proves emergence or causation.

STEP 4 — SAVE AND VERIFY

Use the RUN_ID and trial branch from your successfully claimed queue slot; do not invent or change them.

Create a result branch named `results/<RUN_ID>`, based on your assigned trial branch. Add exactly these two files:
- `results/<RUN_ID>/trace.<extension>` — the actual self-contained artifact; choose a suitable extension such as `.svg`, `.txt`, or `.json`
- `results/<RUN_ID>/report.json`

The report JSON must contain:
- `run_id`
- `assigned_condition`
- `assigned_trial_branch`
- `input_commit`
- `artifact_path`
- `assets_used` (asset IDs from MATERIALS.json)
- `connections_consulted` (IDs from INPUT.json, or an empty array)
- `observations` (only directly observed input facts)
- `interpretation` (what you made and why)
- `new_relation_or_transformation` (or null)
- `possible_dependence_on_input` (what might differ under another connection graph)
- `limitations`

Verify both result files and the result commit after saving. Do not report any path or commit as real until verified.

STEP 5 — CLOSE YOUR QUEUE SLOT

After the result branch and both files are verified, re-read `QUEUE.json` and update only your own slot to `complete`. Add `result_branch`, `result_commit`, and `completed_at_utc`. Commit the queue change to `experiment/connection-trial-hub` with the current file SHA. If this update conflicts, re-read the queue and retry without overwriting any other slot. Do not change any other assignment.

If you cannot save and verify the actual artifact, do not mark the slot complete. Report exactly what failed so the coordinator can release the claimed slot safely.

Finally, report in a few lines: assigned RUN_ID, condition and branch; artifact path and commit SHA; queue status update result. Do not include another trial's content.