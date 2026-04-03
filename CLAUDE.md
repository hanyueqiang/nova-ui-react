# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

nova-ui-react is a modern React component library for building AI chat interfaces. It provides production-ready components with built-in Markdown rendering, syntax highlighting, and streaming response support.

## Core Components

The library exports three main components from `src/components/`:

- **MessageBubble**: Displays chat messages with role-based styling (user/ai/system), Markdown rendering via react-markdown, code syntax highlighting via react-syntax-highlighter, and an optional collapsible "thinking process" panel (DeepSeek-style)
- **ChatInput**: Auto-resizing textarea with Enter to send, Shift+Enter for newlines, optional attachment button, and dynamic send/stop button states
- **TypingEffect**: Character-by-character typing animation with configurable speed and completion callback

All components are exported through `src/index.ts` along with the `cn` utility for Tailwind class merging.

## Development Commands

```bash
# Install dependencies
npm install

# Build the library (outputs to dist/)
npm run build

# Watch mode for development
npm run dev

# Type checking
npm run typecheck

# Linting
npm run lint

# Format code
npm run format

# Build documentation site
npm run docs:build

# Run docs locally
cd docs && npm run docs:dev
```

## Build System

- **tsup** bundles the library with CSS injection enabled (`injectStyle: true`)
- Outputs both CommonJS (`dist/index.js`) and ESM (`dist/index.mjs`) formats
- TypeScript declarations generated automatically (`dist/index.d.ts`)
- React and react-dom are externalized as peer dependencies
- Global styles in `src/styles/global.css` use Tailwind's @layer components for `.nova-bubble-*` classes

## Styling Architecture

The library uses Tailwind CSS with custom component classes defined in `src/styles/global.css`. The `cn` utility (clsx + tailwind-merge) is used throughout for conditional class merging. Components expect consuming applications to have Tailwind configured and may require adding the package output to Tailwind's content paths:

```js
content: ['./node_modules/nova-ui-react/dist/**/*.{js,mjs}']
```

## Documentation

Documentation is built with VitePress and lives in `docs/` with bilingual support:
- English: `docs/` (root level)
- Chinese: `docs/zh/`

The docs include component API references and live demos in `docs/demos/`.

## Publishing

The package is published to npm as `nova-ui-react`. Publishing can be done manually or via GitHub Actions:

**Manual publish:**
```bash
npm login --auth-type=legacy --registry=https://registry.npmjs.org/
npm publish --access public --otp=123456
```

**Automated publish:**
Push a git tag (e.g., `v1.0.1`) to trigger `.github/workflows/npm-publish.yml`, which runs lint/typecheck/build before publishing. Requires `NPM_TOKEN` secret with publish permission and 2FA bypass.

## Code Conventions

- TypeScript with strict mode enabled
- React 18+ with JSX transform
- Component props use explicit TypeScript interfaces exported alongside components
- Framer Motion used for animations in components
- lucide-react for icons
