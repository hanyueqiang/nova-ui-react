import type { ComponentType } from 'react';
import {
  MessageBubbleBasicDemo,
  messageBubbleBasicCode,
} from './message-bubble-basic';
import { ChatInputBasicDemo, chatInputBasicCode } from './chat-input-basic';
import {
  TypingEffectBasicDemo,
  typingEffectBasicCode,
} from './typing-effect-basic';

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
