# TypingEffect

A simple component that animates text as if it's being typed, complete with a blinking cursor. Used internally by `MessageBubble` when `isTyping={true}`.

## Basic Usage

<ComponentDemo name="typing-effect-basic" />

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `content` | `string` | **Required** | The full string to animate |
| `speed` | `number` | `30` | Typing speed in milliseconds per character |
| `onComplete` | `() => void` | `undefined` | Callback fired when animation finishes |
