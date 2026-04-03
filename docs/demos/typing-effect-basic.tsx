import { useState } from 'react';
import { TypingEffect } from 'nova-ui-react';

const content = 'Nova UI now supports interactive documentation demos with expandable source code.';

export function TypingEffectBasicDemo() {
  const [instance, setInstance] = useState(0);

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-[28px] border border-slate-800 bg-slate-950 p-6 text-white shadow-[0_24px_80px_rgba(15,23,42,0.18)]">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-sky-300">Streaming Preview</p>
        <div className="min-h-[72px] text-lg leading-8 text-slate-100">
          <TypingEffect key={instance} content={content} speed={24} />
        </div>
      </div>

      <div>
        <button
          type="button"
          onClick={() => setInstance((current) => current + 1)}
          className="inline-flex items-center rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-100 transition hover:border-sky-300/60 hover:bg-sky-400/20"
        >
          Replay Animation
        </button>
      </div>
    </div>
  );
}

export const typingEffectBasicCode = `import { useState } from 'react';
import { TypingEffect } from 'nova-ui-react';

const content =
  'Nova UI now supports interactive documentation demos with expandable source code.';

export default function Demo() {
  const [instance, setInstance] = useState(0);

  return (
    <div className="space-y-4 rounded-[28px] border border-slate-800 bg-slate-950 p-6 text-white">
      <div className="min-h-[72px] text-lg leading-8 text-slate-100">
        <TypingEffect key={instance} content={content} speed={24} />
      </div>

      <button
        type="button"
        onClick={() => setInstance((current) => current + 1)}
        className="inline-flex items-center rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-100"
      >
        Replay Animation
      </button>
    </div>
  );
}`;
