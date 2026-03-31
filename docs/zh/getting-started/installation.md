# 安装

## 1. 安装包

安装 Nova UI 及其所需的对等依赖（peer dependencies）：

```bash
npm install @nova-ui/react
npm install react-markdown react-syntax-highlighter react-textarea-autosize
```

## 2. 配置 Tailwind CSS

由于 Nova UI 是基于 Tailwind CSS 构建的，你需要告诉 Tailwind 配置去扫描组件库的源码文件。

在你的 `tailwind.config.js` 中添加以下路径：

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // 添加下面这行:
    "./node_modules/@nova-ui/react/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## 3. 引入样式

在你的主入口文件（例如 `main.tsx` 或 `App.tsx`）中引入全局 CSS：

```tsx
import '@nova-ui/react/dist/index.css';
```
