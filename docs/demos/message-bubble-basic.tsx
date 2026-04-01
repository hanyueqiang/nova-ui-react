import { MessageBubble } from '../../src/components/MessageBubble';

const thinkingContent = [
  '1. Review the release notes',
  '2. Keep only the user-facing changes',
  '3. Return a concise, readable summary',
].join('\n');

const aiContent = [
  'Absolutely. Here is a concise summary:',
  '',
  '- Faster docs rendering',
  '- Expandable source panels in each example',
  '- Cleaner preview layout for component pages',
  '',
  '```ts',
  "const docsStatus = 'ready';",
  '```',
].join('\n');

export function MessageBubbleBasicDemo() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
      <MessageBubble
        role="user"
        content="Can you summarize the latest documentation update?"
        timestamp="09:41"
      />
      <MessageBubble
        role="ai"
        content={aiContent}
        thinkingContent={thinkingContent}
        timestamp="09:42"
      />
    </div>
  );
}

export const messageBubbleBasicCode = `import { MessageBubble } from 'nova-ui-react';

const thinkingContent = [
  '1. Review the release notes',
  '2. Keep only the user-facing changes',
  '3. Return a concise, readable summary',
].join('\\n');

const aiContent = [
  'Absolutely. Here is a concise summary:',
  '',
  '- Faster docs rendering',
  '- Expandable source panels in each example',
  '- Cleaner preview layout for component pages',
  '',
  '\`\`\`ts',
  "const docsStatus = 'ready';",
  '\`\`\`',
].join('\\n');

export default function Demo() {
  return (
    <div className="space-y-4">
      <MessageBubble
        role="user"
        content="Can you summarize the latest documentation update?"
        timestamp="09:41"
      />
      <MessageBubble
        role="ai"
        content={aiContent}
        thinkingContent={thinkingContent}
        timestamp="09:42"
      />
    </div>
  );
}`;
