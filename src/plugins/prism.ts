import { JSItem, CSSItem, IMarkmap, IMarkmapPlugin } from '../types';
import { arrayFrom, flatMap } from '../util';
import { Markmap } from '../view';

const errors = {};

const styles: CSSItem[] = [
  {
    type: 'stylesheet',
    data: {
      href: 'https://cdn.jsdelivr.net/npm/prismjs@1/themes/prism.css',
    },
  },
];
const scripts: JSItem[] = [
  {
    type: 'iife',
    data: {
      fn: () => {
        (window as any).Prism = { manual: true };
      },
    },
  },
  {
    type: 'script',
    data: {
      src: 'https://cdn.jsdelivr.net/npm/prismjs@1/components/prism-core.min.js',
    },
  },
  // components will be added by paths relative to path of autoloader
  {
    type: 'script',
    data: {
      src: 'https://cdn.jsdelivr.net/npm/prismjs@1/plugins/autoloader/prism-autoloader.min.js',
    },
  },
];

function initialize(Markmap: IMarkmap, options): void {
  Markmap.transformHtml.tap((mm, nodes) => {
    const { Prism } = window as any;
    const langs = flatMap(nodes, node => arrayFrom(node.querySelectorAll('code[class*=language-]')))
    .map(code => {
      const lang = code.className.match(/(?:^|\s)language-(\S+)|$/)[1];
      if (Prism.languages[lang]) {
        Prism.highlightElement(code);
      } else if (!errors[lang]) {
        return lang;
      }
    })
    .filter(Boolean);
    loadLanguagesAndRender(mm, langs);
  });
}

async function loadLanguagesAndRender(mm: Markmap, langs: string[]): Promise<void> {
  if (!langs.length) return;
  const { Prism } = window as any;
  try {
    await new Promise((resolve, reject) => {
      Prism.plugins.autoloader.loadLanguages(langs, resolve, reject);
    });
  } catch (err) {
    errors[err] = true;
  }
  mm.setData();
  mm.fit();
}

export const plugin: IMarkmapPlugin = {
  styles,
  scripts,
  initialize,
};
