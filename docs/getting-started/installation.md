# Installation

## 1. Install Package

Install Nova UI and its required peer dependencies:

```bash
npm install @nova-ui/react
npm install react-markdown react-syntax-highlighter react-textarea-autosize
```

## 2. Configure Tailwind CSS

Since Nova UI is built with Tailwind CSS, you need to tell your Tailwind config to scan the component library's source files.

Add the path to your `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Add this line:
    "./node_modules/@nova-ui/react/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## 3. Import Styles

Import the global CSS in your main entry file (e.g., `main.tsx` or `App.tsx`):

```tsx
import '@nova-ui/react/dist/index.css';
```
