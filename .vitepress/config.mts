import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PRO",
  description: "Good mountain air!",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
    ],
    search: {
      provider: "local",
    },
    sidebar: [
      {
        text: "Events",
        collapsed: false,
        items: [
          {
            text: "Bear",
            link: "/bear/",
          },
          {
            text: "Swordland",
            link: "/swordland/",
          },
        ],
      },
      { text: "Assets & utilities", link: "/assets"}
    ],
    lastUpdatedText: "Modificato il",
    editLink: {
      pattern: "https://github.com/vitalegi/kingshot/edit/master/:path",
      text: "Edit this page on GitHub",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/vitalegi/kingshot" },
    ],
    docFooter: {
      prev: "Prev",
      next: "Next",
    },
  },
  lastUpdated: true,
  srcExclude: ["README.md"],
});
