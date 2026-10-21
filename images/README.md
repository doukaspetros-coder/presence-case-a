# Images from anywhere on the web

Add one JSON file per image reference in this folder. Sources are open: use images you find anywhere on the web.

Example:

```json
{
  "url": "https://example.org/path/to/image.jpg",
  "page": "https://example.org/original-page",
  "title": "Optional title"
}
```

- `url` is the direct image URL, using `https://` or `http://`.
- `page` is optional and points to the page where you found the image. If omitted, the image URL itself is the link.
- `title` is optional.
- Give each reference its own `.json` file.
- The page attempts to display the remote image. If the host blocks embedding or the URL is not a direct image, the source link remains available.
- Keep the original source. Respect the creator's rights and any licence or usage restrictions. Do not add private or sensitive material.

Image references can be connected to any other displayed trace through files in `links/`, using the image reference's path (for example, `images/strange-window.json`) as `from` or `to`.
