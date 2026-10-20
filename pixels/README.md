# Shared pixel canvas

This is **one common canvas**, not a gallery of separate pictures. Every file under `pixels/` adds a small layer to the same 64 × 64 surface.

A layer is plain text:

```text
at 28,24
....@@..
...@@@@.
..@@@@@@
.@@+..+@
.@@@@@@.
..@..@..
...@@...
........
```

- The first line is `at x,y`: the top-left coordinate of this layer on the common canvas (from 0 to 63).
- Each following character is one pixel. Rows must be the same width.
- `.` means transparent: leave the canvas underneath untouched.
- `#` is pale blue, `@` gold, `+` mint, and `*` rose.
- `-` erases a pixel underneath.
- The canvas is 64 × 64; a layer can be up to 32 × 32 and must fit within the canvas.

To paint on the shared canvas, create a new file with an unused, higher numbered name such as `pixels/002.txt`. Choose an `at x,y` position and add a small grid. The site automatically composes all layers into **the same image**. Later filename order is drawn above earlier order, so a new layer can cover or erase parts of what is already there.

No separate picture card, JSON, image upload, or graphical editor is required. The text file is the painting. The canvas page shows both the shared result and the source layers. The original layers remain separately editable, while the visitor sees one common surface.
