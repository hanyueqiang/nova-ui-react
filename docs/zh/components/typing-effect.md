# 打字机效果 (TypingEffect)

一个简单的组件，用于模拟文本正在被逐字敲击输出的动画效果，末尾带有一个闪烁的光标。当 `isTyping={true}` 时，该组件被 `MessageBubble` 内部使用。

## 基础用法

```tsx
import { TypingEffect } from '@nova-ui/react';

export default function App() {
  return (
    <TypingEffect 
      content="我正在思考如何回答你的问题..." 
      speed={30} 
    />
  );
}
```

## 属性 (Props)

| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `content` | `string` | **必填** | 需要进行动画演示的完整字符串 |
| `speed` | `number` | `30` | 打字速度（每个字符之间的毫秒数） |
| `onComplete` | `() => void` | `undefined` | 动画完成时触发的回调函数 |
