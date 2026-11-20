import type { Lang } from '../i18n/ui';

export const SITE = {
  name: 'Singapore Youth Community',
  shortName: 'SYC',
  domain: 'www.singaporeyouth.com',
  url: 'https://www.singaporeyouth.com',
  logo: '/assets/syc-logo.png',
  defaultLang: 'en' as Lang,
  contactEmail: 'hello@singaporeyouth.com' as string | null,
  orgJsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Singapore Youth Community',
    alternateName: 'SYC',
    url: 'https://www.singaporeyouth.com',
    logo: 'https://www.singaporeyouth.com/assets/syc-logo.png',
    description: 'An AI-native global youth community connecting partners and young people across borders.',
  },
};

export interface PageMeta {
  id: string;       // file stem, e.g. 'index', 'about'
  path: string;     // path relative to locale root, e.g. '' or 'about'
  navKey: string;   // i18n key for nav label
}

export const pages: PageMeta[] = [
  { id: 'index', path: '', navKey: 'nav.home' },
  { id: 'about', path: 'about', navKey: 'nav.about' },
  { id: 'network', path: 'network', navKey: 'nav.network' },
  { id: 'partnerships', path: 'partnerships', navKey: 'nav.partnerships' },
  { id: 'people', path: 'people', navKey: 'nav.people' },
  { id: 'impact', path: 'impact', navKey: 'nav.work' },
  { id: 'ai', path: 'ai', navKey: 'nav.ai' },
];

/** Build the locale-aware URL for a page path. 'en' lives at root, others under /<lang>/. */
export function localizePath(lang: Lang, path: string): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  if (lang === 'en') return clean ? `/${clean}/` : '/';
  return clean ? `/${lang}/${clean}/` : `/${lang}/`;
}

export function pageHref(lang: Lang, id: string): string {
  const p = pages.find((x) => x.id === id);
  return localizePath(lang, p ? p.path : id === 'index' ? '' : id);
}
