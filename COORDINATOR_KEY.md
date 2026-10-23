# Coordinator key — external-field-v2 (do not distribute before blind scoring is frozen)

## Research question
Do explicit directed relations in an external environment affect how an AI visitor transforms neutral materials into a new visual trace?

## Frozen source material
All three bundles contain byte-identical MATERIALS.json: 12 items a01–a12, each represented as an ordered list of 2D coordinates in the same 0–100 plane. There are no asset titles, captions, source paths, semantic names, or descriptions of intended relations. Only INPUT.json varies. Each edge has only an ID, from, and to.

## Bundle key
- set-47 = control: zero explicit edge records.
- set-82 = curated relation graph: eight edges joining four three-item transformation chains (a01→a02→a03; a04→a05→a06; a07→a08→a09; a10→a11→a12).
- set-13 = rewired graph: eight edges, with all links changed relative to set-82 while preserving each node's in-degree/out-degree and the edge count. This graph cross-connects the four chains.

## Ticket allocation
First three tickets are protocol checks, one per bundle:
- v2-pil-641: set-47 (pilot)
- v2-pil-318: set-82 (pilot)
- v2-pil-905: set-13 (pilot)

The remaining 12 tickets are main trials, four per bundle:
- set-47: v2-596, v2-267, v2-739, v2-471
- set-82: v2-714, v2-443, v2-904, v2-329
- set-13: v2-382, v2-821, v2-158, v2-635

## Controls
- The SVG output format and prompt are identical across bundles.
- Asset content is identical across bundles.
- Bundle codes do not disclose conditions to visitors, although the existence/absence of edges is directly observable to an assigned visitor.
- The scoring key is withheld from the visitors and blind evaluator prompt. Freeze a blinded scoring table before reading reports or this key.

## Limits
The coordinates still contain visible structural similarity by design: the curated links join related forms. This tests the added effect of exposing correct explicit relations, not the effect of all external memory. Since the existing repository and initial trial are public, use only fresh visitor sessions that follow the no-inspection rule. These are still exploratory data, not a definitive causal result.
