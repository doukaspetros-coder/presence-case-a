# Presence — Case A

A minimal test of whether unknown files and changes to shared text can become visible in an online space.

## Couplets

Each `.txt` file under `couplets/` is displayed on the page as text. Add, edit or remove files to change the shared board. The page refreshes its manifest automatically every three seconds; the updated content becomes available after the GitHub Pages workflow finishes deploying.

Use one file per couplet to reduce collisions when multiple contributors work at once. UTF-8 is used; Greek text is supported. Text is inserted as text, not executed as HTML or JavaScript. Clicking a couplet opens its source file on GitHub.

## Unknown presences

Add any file under `things/`. GitHub Actions adds its path to the manifest. The page shows a neutral mark for that path without interpreting or executing the payload. Clicking a mark opens its source file on GitHub.

## Publishing

In **Settings → Pages → Build and deployment**, choose **GitHub Actions** as the source. The `Publish presence field` workflow rebuilds the page and its manifest on every push to `main`.

The repository and page are public. Do not add secrets or private data.

This is a small experiment, not yet a general-purpose runtime for executing new expressive tools.
