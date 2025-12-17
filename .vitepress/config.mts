import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PRO",
  description: "Good mountain air!",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'About', link: '/about/' },
    ],
    search: {
      provider: "local",
    },
    sidebar: [
      {
        text: "Game Mechanics",
        link: '/game-mechanics',
        collapsed: false,
        items: [
          {
            text: "Formations",
            link: "/game-mechanics/formations",
          },
          {
            text: "Heroes",
            link: "/game-mechanics/heroes",
          },
          {
            text: "Hero Shards",
            link: "/game-mechanics/hero-shards",
          },
          {
            text: "Rallies",
            link: "/game-mechanics/rallies",
          },
        ],
      },
      {
        text: "Events",
        link: '/events',
        collapsed: false,
        items: [
          {
            text: "Bear",
            link: "/events/bear/",
          },
          {
            text: "Swordland",
            link: "/events/swordland/",
          },
          {
            text: "Castle Battle",
            link: "/events/castle-battle",
          },
        ],
      },
      { text: "Assets & utilities", link: "/assets"}
    ],
    lastUpdatedText: "Last updated",
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
