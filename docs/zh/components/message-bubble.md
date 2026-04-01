# 消息气泡 (MessageBubble)

`MessageBubble` 组件用于在聊天界面中显示单条消息。它支持 Markdown、代码语法高亮以及“思考过程”折叠面板（类似 DeepSeek 或 Claude）。

## 基础用法

```tsx
import { MessageBubble } from 'nova-ui-react';

export default function App() {
  return (
    <div>
      <MessageBubble 
        role="user" 
        content="你好！能写一个 Python 脚本吗？" 
      />
      
      <MessageBubble 
        role="ai" 
        content="当然！这是一个简单的脚本：\n\n```python\nprint('Hello World')\n```" 
      />
    </div>
  );
}
```

## 属性 (Props)

| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `content` | `string` | **必填** | 消息内容，支持 markdown |
| `role` | `'user' \| 'ai' \| 'system'` | **必填** | 发送者的角色 |
| `isTyping` | `boolean` | `false` | 消息是否正在流式输出/打字中 |
| `avatar` | `ReactNode \| string` | `undefined` | 自定义头像 URL 或 React 组件 |
| `thinkingContent` | `string` | `undefined` | 用于可折叠思考过程面板的 Markdown 内容 |
| `className` | `string` | `undefined` | 自定义容器类名 |
| `timestamp` | `string` | `undefined` | 显示在气泡下方的时间戳字符串 |
