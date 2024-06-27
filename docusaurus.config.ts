import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Quickintegrate',
  tagline: 'Simplifying Integration | Opensource | No Code',
  favicon: 'img/favicon.png',

  url: 'https://quickintegrate.github.io',
  baseUrl: '/',

  organizationName: 'quickintegrate',
  projectName: 'docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: ({ docPath }) => `https://github.com/quickintegrate/docs/tree/main/${docPath}`,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    homePageId: 'getting-started',
    navbar: {
      title: 'Quickintegrate',
      logo: {
        alt: 'Quickintegrate Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          href: 'https://github.com/quickintegrate/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true
      },
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Quickintegrate Docs.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
