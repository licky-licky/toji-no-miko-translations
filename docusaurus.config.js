const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Toji no Miko: Kizamishi Issen no Tomoshibi translations',
  tagline: 'Play Mihono\'s game!',
  url: 'https://swordpolishing.github.io/',
  baseUrl: '/tnm-translations/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/fav.ico',
  organizationName: 'swordpolishing', // Usually your GitHub org/user name.
  projectName: 'tnm-translations', // Usually your repo name.
  trailingSlash: true,
  themeConfig: {
    navbar: {
      title: 'TnM Translations',
      logo: {
        alt: 'Homo Crab',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'Part 1/Prologue_-_The_Beginning',
          position: 'left',
          label: 'Story',
        },
        {to: '/episodes', label: 'Episodes', position: 'left'},
        {to: '/events', label: 'Events', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'Translator anon\'s pastebin',
              href: 'https://pastebin.com/LdyviZ8Z',
            },
            {
              label: 'Site source code',
              href: 'https://github.com/swordpolishing/tnm-translations',
            },
          ],
        },
      ],
      copyright: `Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    hideableSidebar: true,
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // * Remove to hide the edit button
          editUrl:
            'https://github.com/swordpolishing/tnm-translations/edit',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins : [
    'docusaurus-plugin-sass',
    require.resolve('@cmfcmf/docusaurus-search-local')
  ]
};
