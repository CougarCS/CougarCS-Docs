import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "CougarCS Docs",
  tagline: "We Compute Students Success",
  favicon: "img/logo.svg",
  url: "https://docs.cougarcs.com/",
  baseUrl: "/",
  organizationName: "CougarCS",
  projectName: "CougarCS-Docs",

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
          sidebarPath: "./sidebars.ts",

          editUrl: "https://github.com/CougarCS/CougarCS-Docs/tree/main",
        },
        blog: {
          showReadingTime: true,

          editUrl: "https://github.com/CougarCS/CougarCS-Docs/blob/main",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/banner/main_banner.png", // ! Testing social card
    navbar: {
      title: "CougarCS-Docs",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://discord.gg/DCjnSJFuPb",
          label: "InfoSec",
          position: "right",
        },
        {
          href: "https://discord.gg/NtgGfm4cVW",
          label: "WebDev",
          position: "right",
        },
        {
          href: "https://discord.gg/Jyyy4SRBja",
          label: "Tutoring",
          position: "right",
        },
        {
          href: "https://discord.gg/Qd5RXjsM9v",
          label: "CougarCS",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Docs",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            // {
            //   label: "Stack Overflow",
            //   href: "https://stackoverflow.com/questions/tagged/docusaurus",
            // },
            {
              label: "Discord",
              href: "https://discord.gg/Qd5RXjsM9v",
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/cougarcs_uh/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/CougarCS",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CougarCS-Docs.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    announcementBar: {
      id: "support_us",
      content:
        'We need YOUR help revamping our docs, please help <a target="_blank" rel="noopener noreferrer" href="https://github.com/CougarCS/CougarCS-Docs">here</a>',
      backgroundColor: "#fafbfc",
      textColor: "#091E42",
      isCloseable: true,
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
  } satisfies Preset.ThemeConfig,
};

// module.exports = {
//   themeConfig: {
//     colorMode: {
//       defaultMode: 'dark',
//       disableSwitch: false,
//       respectPrefersColorScheme: false,
//     },
//   },
// };

export default config;
