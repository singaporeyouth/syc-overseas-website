import type { Lang } from '../i18n/ui';

export const SITE = {
  name: 'Singapore Youth Community',
  shortName: 'SYC',
  domain: 'www.singaporeyouth.com',
  url: 'https://www.singaporeyouth.com',
  logo: '/assets/syc-logo.png',
  defaultLang: 'en' as Lang,
  contactEmail: 'contact@singaporeyouth.com' as string | null,
  partnershipEmail: 'partner@singaporeyouth.com' as string | null,
  positioning: 'An AI-Native International Youth Organisation' as string,
  narrative: 'Connecting the AI Generation. Building a Shared Future.' as string,
  orgJsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Singapore Youth Community',
    alternateName: 'SYC',
    url: 'https://www.singaporeyouth.com',
    logo: 'https://www.singaporeyouth.com/assets/syc-logo.png',
    description: 'Singapore Youth Community is an AI-Native international youth organisation focused on global youth development and international cooperation in the AI era. Connecting the AI Generation. Building a Shared Future.',
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
  { id: 'ai', path: 'ai', navKey: 'nav.ai' },
  { id: 'network', path: 'network', navKey: 'nav.network' },
  { id: 'people', path: 'people', navKey: 'nav.people' },
  { id: 'partnerships', path: 'partnerships', navKey: 'nav.partnerships' },
  { id: 'impact', path: 'impact', navKey: 'nav.work' },
  { id: 'contact', path: 'contact', navKey: 'nav.contact' },
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
