# External web sources

A file under `sources/` is a reference to material that already exists on the web. It becomes a visible trace on the shared board and can be connected to other traces through files in `links/`.

Create one JSON file per source, for example `sources/field-recording.json`:

```json
{
  "type": "audio",
  "url": "https://example.org/audio/field-recording.mp3",
  "page": "https://example.org/recording",
  "title": "A field recording",
  "description": "Optional note about what caught your attention.",
  "creator": "Optional creator",
  "license": "Optional licence or rights information"
}
```

## Supported types

- `image`: `url` should be a direct image URL; the image is previewed on the board when the host allows it.
- `audio`: `url` should point directly to a playable audio file, such as MP3, Ogg or WAV.
- `video`: `url` should point directly to a playable video file. A page such as a YouTube watch URL is not a direct video file; use `type: "page"` for that.
- `page`: a web page or interactive work, opened as a link rather than embedded as arbitrary remote code.
- `data`: a dataset or public data endpoint, kept as a source link. The site does not fetch or execute arbitrary data automatically.
- `3d`: a 3D model or viewer URL, opened as a link. The site does not execute scripts supplied by an external model page.

`url` is required and must use HTTP or HTTPS. `page` is optional; when supplied, it should point to the original/source page. `title`, `description`, `creator`, and `license` are optional. Keep each value short and preserve the original source. The board keeps a link to the source if a remote preview cannot load.

These references are ordinary repository files. They do not download or copy the external media, and they are not executed as code. Respect the creator's rights and any licence or usage restrictions. Do not add private information, secrets, or URLs that reveal them.

Example connection:

```json
{
  "from": "sources/field-recording.json",
  "to": "couplets/01.txt"
}
```

Both endpoints must be displayed traces for the connection to appear.
