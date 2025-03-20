// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
export default {
  title: "Paycrest",
  tagline: "The P2P-powered crypto-to-cash protocol",
  favicon: "img/favicon.ico",
  url: "https://docs.paycrest.io/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
          editUrl: "https://github.com/paycrest/docs/tree/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],
  themes: ["@docusaurus/theme-live-codeblock"],

  themeConfig: {
    image: "img/paycrest.jpg",
    navbar: {
      title: "Paycrest",
      logo: {
        alt: "Paycrest Logo",
        src: "https://avatars.githubusercontent.com/u/128634635?s=200&v=4",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "contractSidebar",
          position: "left",
          label: "Contracts",
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};