
import { configuration, DefaultMarkdownCustomInlineComponents } from '@codedoc/core';
import { Iframe } from './components/iframe';
import { theme } from './theme';


export const config = /*#__PURE__*/configuration({
  theme,                                  // --> add the theme. modify `./theme.ts` for chaning the theme.
  dest: {
    namespace: '/tnm-translations',       // --> your github pages namespace. remove if you are using a custom domain.
    html:'dist',
    assets: 'dist',
  },
  page: {
    title: {
      base: 'Tnm Translations'            // --> the base title of your doc pages
    },
    post: [
      (html, file) => {
        const nav = Array.from(html.getElementsByClassName('contentnav-0-0-11'))
        for (let i = 0; i < nav.length; i++) {
          const n = nav[i] as HTMLElement
          n.style.maxHeight = '60vh'
        }
        const all = Array.from(html.querySelectorAll('*'))
        for (let i = 0; i < all.length; i++) {
          const a = all[i] as HTMLElement
          a.style.scrollBehavior = 'auto'
        }
      }
    ]
  },
  markdown: {
    customInlineComponents: {
      ...DefaultMarkdownCustomInlineComponents,
      Iframe,
    }
  },
  misc: {
    github: {
      user: 'swordpolishing',             // --> your github username (where your repo is hosted)
      repo: 'tnm-translations',           // --> your github repo name
    }
  },
});
