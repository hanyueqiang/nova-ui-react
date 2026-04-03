import { useEffect, useState } from 'react';
import { ChatInput } from 'nova-ui-react';

export function ChatInputBasicDemo() {
  const [value, setValue] = useState('');
  const [lastSubmitted, setLastSubmitted] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    if (!isGenerating) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setIsGenerating(false);
    }, 1800);

    return () => {
      window.clearTimeout(timer);
    };
  }, [isGenerating]);

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-4">
      <div className="rounded-[24px] border border-slate-200 bg-white/95 p-4 text-sm text-slate-600 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
        {lastSubmitted ? (
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Last Submit</p>
            <p className="font-medium text-slate-900">{lastSubmitted}</p>
            <p>{isGenerating ? 'Simulating AI response...' : 'Ready for the next message.'}</p>
          </div>
        ) : (
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Try It</p>
            <p>Type a message, press Enter to submit, or click the attachment button to insert a placeholder.</p>
          </div>
        )}
      </div>

      <ChatInput
        value={value}
        onChange={setValue}
        onSubmit={(nextValue) => {
          setLastSubmitted(nextValue);
          setValue('');
          setIsGenerating(true);
        }}
        isGenerating={isGenerating}
        onStop={() => setIsGenerating(false)}
        onAttach={() => {
          setValue((current) =>
            current ? `${current}\n[Attached product-spec.pdf]` : '[Attached product-spec.pdf]'
          );
        }}
        placeholder="Ask Nova UI about your chat workflow..."
      />
    </div>
  );
}

export const chatInputBasicCode = `import { useEffect, useState } from 'react';
import { ChatInput } from 'nova-ui-react';

export default function Demo() {
  const [value, setValue] = useState('');
  const [lastSubmitted, setLastSubmitted] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    if (!isGenerating) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setIsGenerating(false);
    }, 1800);

    return () => {
      window.clearTimeout(timer);
    };
  }, [isGenerating]);

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
        {lastSubmitted ? (
          <>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Last Submit</p>
            <p className="mt-2 font-medium text-slate-900">{lastSubmitted}</p>
          </>
        ) : (
          <p>Type a message, press Enter to submit, or click the attachment button.</p>
        )}
      </div>

      <ChatInput
        value={value}
        onChange={setValue}
        onSubmit={(nextValue) => {
          setLastSubmitted(nextValue);
          setValue('');
          setIsGenerating(true);
        }}
        isGenerating={isGenerating}
        onStop={() => setIsGenerating(false)}
        onAttach={() => {
          setValue((current) =>
            current ? \`\${current}\\n[Attached product-spec.pdf]\` : '[Attached product-spec.pdf]'
          );
        }}
        placeholder="Ask Nova UI about your chat workflow..."
      />
    </div>
  );
}`;
