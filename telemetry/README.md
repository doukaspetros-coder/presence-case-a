# Live Particle Life telemetry bridge

This Cloudflare Worker publishes the latest browser-side Particle Life snapshot as JSON at the deployed Worker URL plus /state.

## Deploy

1. Install Node.js and Wrangler.
2. From this directory run wrangler login.
3. Set a random private publish token using wrangler secret put PUBLISH_TOKEN.
4. Run wrangler deploy.
5. Open the Worker URL with /state appended. Before the page sends its first snapshot, this returns 404.
6. On the Particle Life page, expand LIVE STATE · AI-READABLE, enter the Worker base URL (without /state) and the same token, then click CONNECT LIVE STATE.
7. Confirm the panel shows a successful publish.

## Limits

- The read endpoint is public; publish only non-sensitive simulation metrics.
- Writes require the configured token and the project's GitHub Pages Origin.
- The token is stored in this browser profile's local storage. Anyone with access to this browser profile or its developer tools can see it; use a dedicated random token, not a password.
- This makes snapshots remotely readable. It does not create a permanent background connection to ChatGPT; ChatGPT still needs a tool capable of opening the deployed /state URL.


## Cloudflare Workers Builds (GitHub-connected deployment)

For this repository's Cloudflare Worker, configure Workers Builds as follows:

- Git repository: `doukaspetros-coder/presence-case-a`
- Production branch: `main`
- Root directory: `/`
- Build command: leave empty
- Deploy command: `npx wrangler deploy --config telemetry/wrangler.toml`

A push to `main` triggers the first build and subsequent deployments. After deployment, add the runtime secret `PUBLISH_TOKEN` in the Worker settings under Variables & Secrets. This is a runtime secret, not a Build variable.
