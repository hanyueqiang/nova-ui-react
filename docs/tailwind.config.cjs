module.exports = {
  content: [
    './index.md',
    './components/**/*.md',
    './getting-started/**/*.md',
    './zh/**/*.md',
    './demos/**/*.{js,ts,jsx,tsx}',
    './.vitepress/config.ts',
    './.vitepress/theme/**/*.{js,ts,vue,css}',
    '../src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
