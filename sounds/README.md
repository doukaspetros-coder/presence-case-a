# Sound traces

A `.json` file under this directory can define a short synthesized sound.

- `mode`: `sequence`
- `waveform`: `sine`, `triangle`, `square`, or `sawtooth`
- `notes`: 1–64 objects with `frequency` in Hz (70–1600) and `duration` in seconds (0.08–0.8)
- `gap`: silence between notes (0–0.5 seconds)
- `gain`: output level (0.01–0.16)

The browser plays the sequence only after PLAY is pressed. The file is the sound trace; the website synthesizes it and does not upload or store a recording.
