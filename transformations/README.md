# Transformations

A transformation is a repository file describing how an existing trace becomes another visible trace. The source stays unchanged. The result is generated during publishing and appears on the shared board, where it can also be connected to other traces.

## Text → particles

The original text-particles mode remains supported:

```json
{
  "mode": "text-particles",
  "source": "couplets/01.txt"
}
```

## Signal field

The `signal-field` mode converts a numeric sequence extracted from a couplet or sound trace into a shared animated visual field.

```json
{
  "mode": "signal-field",
  "source": "sounds/001.json",
  "extract": "frequencies"
}
```

Supported extractions:

- From `couplets/*.txt`: `codepoints` or `word-lengths`.
- From `sounds/*.json`: `frequencies`, `durations`, or `intervals`.

`intervals` are the differences between consecutive note frequencies. The resulting values are rendered as a connected field of points. While a shared sound is playing, the field can also respond to its sound energy.

Create another JSON file to derive a different view, or connect the source and result using a file under `links/`. No uploaded transformation is executed as code: the publisher accepts only the listed modes and extraction names.
