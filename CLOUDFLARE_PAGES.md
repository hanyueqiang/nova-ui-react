# Cloudflare Pages Deployment

This repository can be deployed to Cloudflare Pages from the repository root.

## Recommended settings

- Production branch: `main`
- Root directory: repository root
- Build command: `npm run pages:build`
- Build output directory: `docs/.vitepress/dist`

## Install and build commands

Install:

```bash
npm install && cd example && npm install && cd ..
```

Build:

```bash
cd docs && npm run docs:build
```

## Why a custom build command is required

The docs site is stored in `docs/`, but it renders React demos that also depend on the package source in `src/` and the demo runtime dependencies from `example/`.

The `pages:build` script handles that by:

1. Ensuring root dependencies are installed.
2. Installing `example/` dependencies when the React demo runtime is missing.
3. Building the VitePress docs output in `docs/.vitepress/dist`.

## Optional Cloudflare settings

- Set `NODE_VERSION=22.16.0` in Pages build variables if you prefer dashboard-managed runtime pinning.
- Keep preview deployments enabled to review doc changes per branch or pull request.
