# Nova UI Repository Guide

## Overview
- Package name: `@nova-ui/react`
- Stack: React + TypeScript + Tailwind CSS
- Build tool: `tsup`
- Docs site: `VitePress` in `docs/`
- Demo app: `Vite` in `example/`

## Directory Layout
- `src/components/` component source (`MessageBubble`, `ChatInput`, `TypingEffect`)
- `src/styles/` shared global styles
- `src/index.ts` public exports
- `example/` local playground app
- `docs/` bilingual documentation site (`/` English, `/zh/` Chinese)

## Commands
- Install deps: `npm install`
- Build library: `npm run build`
- Lint source: `npm run lint`
- Format source: `npm run format`
- Run demo app: `cd example && npm run dev`
- Run docs site: `cd docs && npm run docs:dev`
- Build docs site: `cd docs && npm run docs:build`

## Publishing Checklist
- Update `package.json` version
- Run `npm run lint`
- Run `npm run build`
- Verify demo and docs pages render normally
- Publish: `npm publish --access public`

## Conventions
- Keep exports centralized in `src/index.ts`
- Keep `react` and `react-dom` external/peer-compatible for library consumers
- Prefer reusable Tailwind class composition patterns already used in components
