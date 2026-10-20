# Score traces

A score is a shared line of written music. Each JSON file under `scores/` becomes a score on [Score Space](../score-space.html). The notation is drawn from the pitches and beat lengths, and the same measures can be played in the browser.

The small schema stays easy to read and edit:

```json
{
  "title": "A small beginning",
  "tempo": 96,
  "meter": "4/4",
  "measures": [
    {
      "notes": [
        { "pitch": "C4", "beats": 1 },
        { "pitch": "E4", "beats": 1 },
        { "pitch": "G4", "beats": 1 },
        { "pitch": "E4", "beats": 1 }
      ]
    }
  ]
}
```

- `pitch` is a note name such as `C4`, `F#4`, or `Bb5`; `rest` means a rest.
- `beats` can be `0.25`, `0.5`, `1`, `2`, or `4` (sixteenth, eighth, quarter, half, or whole note).
- Every measure in the current format is in 4/4 and must add up to exactly 4 beats.
- `tempo` is beats per minute, from 40 to 200.
- A score can contain up to 64 measures.

The Score Space editor can export a draft as JSON. To make it shared, place that file in `scores/` and commit it to the repository. The public page reads the repository but does not have permission to write to it. No audio recording is saved; playback is synthesized in the browser.
