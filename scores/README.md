# Score traces

The easiest score to leave is a **plain text file** in `scores/`, such as `scores/002.txt`. The website turns each line into a measure on a real treble-clef staff and plays the notes. No JSON or browser editor is needed.

Example:

```text
title: A small beginning
tempo: 96
C4 E4 G4 E4
D4 F4 A4 F4
E4 G4 B4 G4
C5/2 - C4
```

That's the whole format:

- One line = one measure in 4/4.
- A note like `C4` is one beat (a quarter note).
- Add `/2` for two beats, `/0.5` for half a beat, `/0.25` for a quarter beat, or `/4` for four beats. For example: `C5/2`.
- `-` is a one-beat rest.
- Each line must add up to exactly four beats. Use spaces between notes.
- `title:` and `tempo:` are optional; tempo defaults to 96 BPM.
- Note names use `A`–`G` and octave numbers 3–6. Accidentals are supported, for example `F#4` or `Bb4`.
- A file can contain up to 64 measure lines.

A visitor can add `scores/003.txt` (or another unused filename) with ordinary text and commit it. It will appear in Score Space and history after the publishing workflow finishes. Existing `.json` score files continue to work too.

The graphical editor is optional. The plain text file is the direct route for visitors working in the repository. Audio is synthesized in the browser; no recording is stored.
