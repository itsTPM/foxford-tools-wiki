import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Foxford Tools",
  description: "Документация",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    sidebar: [
      {
        text: "Документация",
        items: [
          { text: "Главная", link: "/" },
          { text: "Возможности расширения", link: "/features" },
        ],
      },
    ],
  },
});
