import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitepress';

const reactRuntimeRoot = '../../example/node_modules';

export default defineConfig({
  title: "Nova UI",
  description: "A modern React AI UI component library",
  vite: {
    resolve: {
      alias: [
        {
          find: /^react$/,
          replacement: fileURLToPath(new URL(`${reactRuntimeRoot}/react/index.js`, import.meta.url)),
        },
        {
          find: /^react\/jsx-runtime$/,
          replacement: fileURLToPath(new URL(`${reactRuntimeRoot}/react/jsx-runtime.js`, import.meta.url)),
        },
        {
          find: /^react\/jsx-dev-runtime$/,
          replacement: fileURLToPath(new URL(`${reactRuntimeRoot}/react/jsx-dev-runtime.js`, import.meta.url)),
        },
        {
          find: /^react-dom$/,
          replacement: fileURLToPath(new URL(`${reactRuntimeRoot}/react-dom/index.js`, import.meta.url)),
        },
        {
          find: /^react-dom\/client$/,
          replacement: fileURLToPath(new URL(`${reactRuntimeRoot}/react-dom/client.js`, import.meta.url)),
        },
      ],
    },
  },
  themeConfig: {
    logo: 'https://api.iconify.design/lucide:sparkles.svg?color=%233b82f6',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/hanyueqiang/nova-ui' }
    ]
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: "Nova UI",
      description: "A modern React AI UI component library",
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Components', link: '/components/message-bubble' }
        ],
        sidebar: [
          {
            text: 'Getting Started',
            items: [
              { text: 'Introduction', link: '/getting-started/introduction' },
              { text: 'Installation', link: '/getting-started/installation' },
            ]
          },
          {
            text: 'Components',
            items: [
              { text: 'MessageBubble', link: '/components/message-bubble' },
              { text: 'ChatInput', link: '/components/chat-input' },
              { text: 'TypingEffect', link: '/components/typing-effect' }
            ]
          }
        ],
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2024 hanyueqiang'
        }
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh',
      dir: 'zh',
      title: "Nova UI",
      description: "现代化的 React AI UI 组件库",
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '组件', link: '/zh/components/message-bubble' }
        ],
        sidebar: [
          {
            text: '快速开始',
            items: [
              { text: '简介', link: '/zh/getting-started/introduction' },
              { text: '安装', link: '/zh/getting-started/installation' },
            ]
          },
          {
            text: '组件',
            items: [
              { text: '消息气泡 (MessageBubble)', link: '/zh/components/message-bubble' },
              { text: '聊天输入框 (ChatInput)', link: '/zh/components/chat-input' },
              { text: '打字机效果 (TypingEffect)', link: '/zh/components/typing-effect' }
            ]
          }
        ],
        footer: {
          message: '本基于 MIT 协议开源',
          copyright: '版权所有 © 2024 hanyueqiang'
        }
      }
    }
  }
});
