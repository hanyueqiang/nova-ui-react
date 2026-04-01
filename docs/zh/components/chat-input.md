# 聊天输入框 (ChatInput)

为 AI 聊天界面高度优化的输入组件。它根据内容自动调整高度，并处理常见的快捷键（`Enter` 发送，`Shift + Enter` 换行）。

## 基础示例

<ComponentDemo name="chat-input-basic" />

## 属性 (Props)

| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `value` | `string` | **必填** | 当前输入值 |
| `onChange` | `(value: string) => void` | **必填** | 输入值改变时的回调 |
| `onSubmit` | `(value: string) => void` | **必填** | 用户提交消息时的回调 |
| `placeholder` | `string` | `'Type a message...'` | 占位符文本 |
| `isGenerating` | `boolean` | `false` | AI 是否正在生成。如果是，发送按钮会变成停止按钮 |
| `onStop` | `() => void` | `undefined` | 点击停止按钮时的回调 |
| `onAttach` | `() => void` | `undefined` | 显示附件按钮，点击时触发回调 |
| `disabled` | `boolean` | `false` | 禁用整个输入组件 |
| `maxRows` | `number` | `6` | 出现滚动条前的最大行数 |
