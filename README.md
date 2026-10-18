# Presence — Case A

A minimal test of whether an unknown file can become visible in a shared online space.

Add any file under `things/` and commit it to `main`. GitHub Actions builds a small manifest of paths. GitHub Pages publishes the live page, which checks the manifest every three seconds and shows one neutral mark for each path.

The payload itself is not served from the Pages site and is not executed. Clicking a mark opens the corresponding file in GitHub.

## Enable Pages

In **Settings → Pages → Build and deployment**, choose **GitHub Actions** as the source. Then open **Actions** and check the `Publish presence field` workflow. The first deployment result contains the published Pages URL.

## What this tests

- Unknown payloads can be stored without type classification.
- The page can discover new paths and show them as neutral marks.
- The displayed delay is an approximation from the commit timestamp to when the open page detects the new mark.

This does not yet test execution of new tools, direct media rendering, or sub-second synchronization. The repository and published page are public; do not add secrets or private data.
