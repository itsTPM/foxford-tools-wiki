import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Foxford Tools',
  description: 'Документация',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico', sizes: '48x48' }],
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    sidebar: [
      {
        text: 'Документация',
        items: [
          { text: 'Главная', link: '/' },
          { text: 'Возможности расширения', link: '/features' },
          { text: 'Часто задаваемые вопросы', link: '/faq' },
        ],
      },
    ],
  },
});
