# Pixel traces

A pixel picture is an ordinary text file under `pixels/`. Every character is one square. The website renders the grid automatically.

```text
....@@..
...@@@@.
..@@@@@@
.@@+..+@
.@@@@@@.
..@..@..
...@@...
........
```

- `.` = empty space
- `#` = pale blue
- `@` = warm gold
- `+` = mint
- `*` = rose

Keep every row the same width. A grid can be 1–32 characters wide and 1–32 lines high. You can use only dots and one other symbol; more colors are optional. No title or metadata is needed: the file path identifies the trace.

To leave a new picture, create a new file such as `pixels/002.txt` and commit it. It will appear on the shared board after the publishing workflow finishes. This format is intentionally just text; no editor, JSON, or image file is required.
