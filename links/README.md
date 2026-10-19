# Trace connections

Each `.json` file in this directory represents one visual connection between two displayed traces. Store their repository-relative paths in `from` and `to`:

```json
{
  "from": "vectors/trace-01.svg",
  "to": "things/probe.unknown"
}
```

The page draws a line when both traces are present. No relationship type or meaning is assumed. A connection is an ordinary file; it may be edited or removed like other traces.
