# Transformations

A transformation is a saved file describing a source trace and a generated view. The first available mode is `text-particles`, which maps characters of an existing couplet into a deterministic, animated particle field.

```json
{
  "mode": "text-particles",
  "source": "couplets/01.txt"
}
```

The source couplet remains unchanged. The generated field is a separate trace and updates when the source text changes.
