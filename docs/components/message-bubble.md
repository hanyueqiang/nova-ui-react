# MessageBubble

The `MessageBubble` component is used to display individual messages in a chat interface. It supports Markdown, code syntax highlighting, and "Thinking Process" blocks (similar to DeepSeek or Claude).

## Basic Usage

```tsx
import { MessageBubble } from 'nova-ui-react';

export default function App() {
  return (
    <div>
      <MessageBubble 
        role="user" 
        content="Hello! Can you write a Python script?" 
      />
      
      <MessageBubble 
        role="ai" 
        content="Of course! Here is a simple script:\n\n```python\nprint('Hello World')\n```" 
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `content` | `string` | **Required** | The message content, supports markdown |
| `role` | `'user' \| 'ai' \| 'system'` | **Required** | Role of the sender |
| `isTyping` | `boolean` | `false` | Whether the message is currently streaming/typing |
| `avatar` | `ReactNode \| string` | `undefined` | Custom Avatar URL or React component |
| `thinkingContent` | `string` | `undefined` | Markdown content for the collapsible thinking process panel |
| `className` | `string` | `undefined` | Custom wrapper class names |
| `timestamp` | `string` | `undefined` | Time string displayed below the bubble |
