import type { ComponentType } from 'react';
import {
  MessageBubbleBasicDemo,
  messageBubbleBasicCode,
} from './message-bubble-basic.tsx';
import { ChatInputBasicDemo, chatInputBasicCode } from './chat-input-basic.tsx';
import {
  TypingEffectBasicDemo,
  typingEffectBasicCode,
} from './typing-effect-basic.tsx';

type DemoDefinition = {
  component: ComponentType;
  code: string;
};

export const demoRegistry = {
  'message-bubble-basic': {
    component: MessageBubbleBasicDemo,
    code: messageBubbleBasicCode,
  },
  'chat-input-basic': {
    component: ChatInputBasicDemo,
    code: chatInputBasicCode,
  },
  'typing-effect-basic': {
    component: TypingEffectBasicDemo,
    code: typingEffectBasicCode,
  },
} satisfies Record<string, DemoDefinition>;

export type DemoName = keyof typeof demoRegistry;
