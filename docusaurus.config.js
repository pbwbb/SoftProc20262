// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Processo Vértice de Desenvolvimento',
  tagline: 'Processo organizacional de desenvolvimento de software da Vértice Sistemas',
  favicon: 'img/favicon.svg',

  // No GitHub Pages, o workflow define SITE_URL e BASE_URL a partir do repositório.
  // Localmente fica na raiz (http://localhost:3000/).
  url: process.env.SITE_URL || 'http://localhost:3000',
  baseUrl: process.env.BASE_URL || '/',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  markdown: {
    // .md é lido como CommonMark (sem JSX), o que preserva os <placeholders> dos templates
    format: 'detect',
    mermaid: true,
    hooks: {onBrokenMarkdownLinks: 'throw'},
  },
  themes: ['@docusaurus/theme-mermaid'],

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          showLastUpdateTime: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {respectPrefersColorScheme: true},
      docs: {sidebar: {hideable: true}},
      tableOfContents: {minHeadingLevel: 2, maxHeadingLevel: 3},
      navbar: {
        title: 'Processo Vértice',
        logo: {alt: 'Vértice Sistemas', src: 'img/logo.svg'},
        items: [
          {type: 'docSidebar', sidebarId: 'processoSidebar', position: 'left', label: 'Processo'},
          {type: 'doc', docId: 'Estrutura-do-Processo/Fases-e-Marcos', label: 'Fases e gates', position: 'left'},
          {type: 'doc', docId: 'Estrutura-do-Processo/Matriz-RACI', label: 'Papéis', position: 'left'},
          {type: 'doc', docId: 'Estrutura-do-Processo/Catalogo-de-Artefatos/index', label: 'Artefatos', position: 'left'},
          {
            href: 'https://dev.azure.com/SoftProc20262/Processo%20de%20Software%202026-2',
            label: 'Azure DevOps',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Processo de Software · UNISINOS · 2026/2 · Vértice Sistemas é uma organização fictícia`,
      },
      mermaid: {theme: {light: 'neutral', dark: 'dark'}},
      prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula},
    }),
};

export default config;
