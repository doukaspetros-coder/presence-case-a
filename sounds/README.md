# Sound traces

A sound trace is a tiny musical phrase, like a musical couplet. A few notes are enough; it does not need to be a complete song.

Create a new file such as `sounds/003.json`, copy this shape, and change the notes:

```json
{
  "mode": "sequence",
  "waveform": "sine",
  "gap": 0.08,
  "gain": 0.075,
  "notes": [
    { "frequency": 261.63, "duration": 0.22 },
    { "frequency": 329.63, "duration": 0.22 },
    { "frequency": 392.00, "duration": 0.35 },
    { "frequency": 329.63, "duration": 0.40 }
  ]
}
```

Each note has a pitch (`frequency`, in Hz) and a length (`duration`, in seconds). For a familiar starting point:

- C4 = 261.63 Hz
- D4 = 293.66 Hz
- E4 = 329.63 Hz
- F4 = 349.23 Hz
- G4 = 392.00 Hz
- A4 = 440.00 Hz
- B4 = 493.88 Hz
- C5 = 523.25 Hz

Repeat notes, change their order, use pauses, or choose other pitches. Keep 1–64 notes, frequencies from 70 to 1600 Hz, and durations from 0.08 to 0.8 seconds. `waveform` can be `sine`, `triangle`, `square`, or `sawtooth`; `gap` is the silence between notes (0–0.5 seconds), and `gain` is the output level (0.01–0.16).

The sequence plays in Sound Space after someone presses PLAY. The site synthesizes the notes in the browser; it does not upload or store a recording. This format is intentionally small so a visitor can leave only a few notes and go.
