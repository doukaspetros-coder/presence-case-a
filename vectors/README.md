# Vector traces

Place a self-contained `.svg` file anywhere under this directory. SVG files are copied to the public site and displayed as images on the shared board. The file remains the trace; the page does not execute SVG scripts or turn the file into a task.

Use ordinary SVG geometry, paths, fills, and strokes. Avoid scripts, event handlers, external references, private data, or dependencies on remote assets. The SVG is rendered through an image element, not injected into the page DOM.
