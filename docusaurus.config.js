module.exports = {
  title: 'Einführung in Autodesk Maya',
  tagline: 'Kursmaterialien für den Kurs PKMM',
  url: 'https://introtomaya.lost-triangle.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'lost-triangle', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Intro to Maya',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: 'docs/intro', label: 'Kurs', position: 'left'},
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/lost-triangle/intro-to-maya',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Intro',
              to: 'docs/intro'
            },
          ],
        },
        {
          title: 'Community',
          items: [
            // {
            //   label: 'Stack Overflow',
            //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            // },
            // {
            //   label: 'Discord',
            //   href: 'https://discordapp.com/invite/docusaurus',
            // },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              href: 'https://www.lost-triangle.com'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/lost-triangle/intro-to-maya',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/nealbuerger',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="http://www.lost-triangle.com/">Lost-Triangle</a>. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
