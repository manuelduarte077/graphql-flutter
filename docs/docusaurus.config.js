// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GraphQL Flutter',
  tagline: 'A GraphQL client for Flutter',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'zino-hofmann', // Usually your GitHub org/user name.
  projectName: 'graphql-flutter', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/zino-hofmann/graphql-flutter/tree/main/docs/',
        },

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'GraphQL Flutter',
        logo: {
          alt: 'My Site Logo',
          src: 'img/flutter_logo.svg',
          width: 32,
          height: 32,
        },
        items: [
          {
            to: '/docs/overview',
            label: 'Overview',
          },
          {
            label: 'Basics',
            to: '/docs/category/basics',
          },
          {
            label: 'Tutorials',
            to: '/docs/category/tutorials',
          },
          {
            href: 'https://github.com/zino-hofmann/graphql-flutter',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Overview',
                to: '/docs/overview',
              },
              {
                label: 'Basics',
                to: '/docs/category/basics',
              },
              {
                label: 'Tutorials',
                to: '/docs/category/tutorials',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/tXTtBfC',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Open an Issue',
                to: 'https://github.com/zino-hofmann/graphql-flutter/issues/new/choose',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/zino-hofmann/graphql-flutter',
              },
            ],
          },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        copyright: `Copyright © ${new Date().getFullYear()} Nerdify.<br/>Built with 💙 by <a target="_blank" rel="noopener" aria-label="Nerdify" href="https://getnerdify.com">Nerdify 😎</a>.`,
      },
      prism: {
        additionalLanguages: ['bash', 'dart', 'yaml'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
