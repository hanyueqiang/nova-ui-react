# MessageBubble

The `MessageBubble` component is used to display individual messages in a chat interface. It supports Markdown, code syntax highlighting, and "Thinking Process" blocks (similar to DeepSeek or Claude).

## Basic Usage

<ComponentDemo name="message-bubble-basic" />

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
