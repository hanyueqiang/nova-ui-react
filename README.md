# nova-ui-react

English | [中文](./README.zh-CN.md)

Modern, production-ready React components for building AI chat interfaces.

## Why Nova UI
- Designed for AI-first products with polished default UI
- Supports Markdown and syntax highlighting out of the box
- Works well for streaming response UX
- Built with TypeScript and Tailwind CSS

## Components
- `MessageBubble`: role-based bubble, Markdown rendering, code highlighting, thinking panel
- `ChatInput`: auto-resize textarea, Enter to send, Shift+Enter for newline, stop/attach actions
- `TypingEffect`: streaming-like typing animation with optional completion callback

## Preview

### MessageBubble

![MessageBubble preview](./assets/MessageBubble.png)

### ChatInput

![ChatInput preview](./assets/ChatInput.gif)

### TypingEffect

![TypingEffect preview](./assets/TypingEffect.gif)

## Installation

```bash
npm install nova-ui-react
```

Peer dependencies:
- `react` `^18 || ^19`
- `react-dom` `^18 || ^19`

## Quick Start

```tsx
import { useState } from 'react';
import { MessageBubble, ChatInput } from 'nova-ui-react';
import 'nova-ui-react/dist/index.css';

export default function App() {
  const [value, setValue] = useState('');
  const [messages, setMessages] = useState([
    { role: 'ai' as const, content: 'Hello, how can I help you today?' },
  ]);

  return (
    <div className="mx-auto max-w-3xl p-4">
      <div className="space-y-4">
        {messages.map((m, i) => (
          <MessageBubble key={i} role={m.role} content={m.content} />
        ))}
      </div>

      <div className="mt-4">
        <ChatInput
          value={value}
          onChange={setValue}
          onSubmit={(text) => {
            if (!text.trim()) return;
            setMessages((prev) => [...prev, { role: 'user', content: text }]);
            setValue('');
          }}
        />
      </div>
    </div>
  );
}
```

## Tailwind Setup

If your app tree-shakes styles aggressively, ensure Tailwind scans package output:

```js
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/nova-ui-react/dist/**/*.{js,mjs}',
  ],
};
```

## Docs
- English: `docs/`
- 中文: `docs/zh/`

Run docs locally:

```bash
cd docs
npm run docs:dev
```

## Development

```bash
npm install
npm run lint
npm run typecheck
npm run build
```

## Publish

```bash
npm logout --registry=https://registry.npmjs.org/
npm login --auth-type=legacy --registry=https://registry.npmjs.org/
npm publish --access public --otp=123456
```

If your account enforces 2FA for publish, `--otp` is required for manual release.  
For CI/CD, use a granular access token with `publish` permission and 2FA bypass enabled.

### GitHub Actions Publish

This repository includes [npm-publish.yml](./.github/workflows/npm-publish.yml):
- Trigger on tag push like `v1.0.1`
- Support manual run from Actions tab (`workflow_dispatch`)
- Run `lint`, `typecheck`, `build` before publish

Required repository secret:
- `NPM_TOKEN`: granular npm token with `publish` permission and 2FA bypass

Release by tag:

```bash
git tag v1.0.1
git push origin v1.0.1
```

## License

[MIT](./LICENSE)
