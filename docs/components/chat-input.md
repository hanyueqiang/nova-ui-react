# ChatInput

A highly optimized input component for AI chat interfaces. It auto-resizes based on content and handles common shortcuts (`Enter` to send, `Shift + Enter` to wrap lines).

## Basic Usage

```tsx
import { useState } from 'react';
import { ChatInput } from '@nova-ui/react';

export default function App() {
  const [value, setValue] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  return (
    <ChatInput 
      value={value}
      onChange={setValue}
      onSubmit={(val) => {
        console.log('User sent:', val);
        setValue('');
        setIsGenerating(true);
      }}
      isGenerating={isGenerating}
      onStop={() => setIsGenerating(false)}
      onAttach={() => console.log('Attachment clicked')}
      placeholder="Type a message..."
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `string` | **Required** | Current input value |
| `onChange` | `(value: string) => void` | **Required** | Callback when input value changes |
| `onSubmit` | `(value: string) => void` | **Required** | Callback when user submits the message |
| `placeholder` | `string` | `'Type a message...'` | Placeholder text |
| `isGenerating` | `boolean` | `false` | Whether AI is generating. Changes Send button to Stop button |
| `onStop` | `() => void` | `undefined` | Callback when the stop button is clicked |
| `onAttach` | `() => void` | `undefined` | Shows attachment button and fires callback when clicked |
| `disabled` | `boolean` | `false` | Disables the entire input component |
| `maxRows` | `number` | `6` | Maximum number of rows before scrolling |
