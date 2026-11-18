import { defineCollection, z, type CollectionEntry } from 'astro:content';
import { file } from 'astro/loaders';

// Every record carries a verificationStatus so placeholder data can never be
// mistaken for verified facts. Allowed values are intentionally narrow.
const verification = z.enum([
  'sample_unverified',      // Sample / illustrative only — must not be published as fact
  'owner_supplied_needs_signoff', // Supplied by owner but awaiting production sign-off
  'confirmed_url',          // Real, confirmed external URL (platforms only)
]);

const countries = defineCollection({
  loader: file('src/content/countries.json'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    nameZh: z.string().optional(),
    region: z.enum(['Asia', 'Europe', 'Americas', 'Africa', 'Oceania', 'Middle East', 'Global']),
    regionZh: z.string().optional(),
    photo: z.string(),
    lat: z.number().optional(),
    lng: z.number().optional(),
    note: z.string().default('Sample country card — official 36-country list pending verification.'),
    verificationStatus: verification,
  }),
});

const people = defineCollection({
  loader: file('src/content/people.json'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    role: z.string(),
    country: z.string(),
    region: z.string(),
    photo: z.string(),
    verificationStatus: verification,
  }),
});

const partners = defineCollection({
  loader: file('src/content/partners.json'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    type: z.enum(['International Organisation', 'University & Research', 'Youth Network', 'Innovation Partner']),
    description: z.string(),
    logo: z.string().nullable().default(null),
    verificationStatus: verification,
  }),
});

const caseStudies = defineCollection({
  loader: file('src/content/case-studies.json'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    titleZh: z.string().optional(),
    category: z.string(),
    image: z.string(),
    summary: z.string(),
    approvalStatus: z.string().default('sample_unverified'),
    verificationStatus: verification,
  }),
});

const platforms = defineCollection({
  loader: file('src/content/platforms.json'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    url: z.string().url(),
    description: z.string(),
    icon: z.string().default('spark'),
    verificationStatus: verification,
  }),
});

const metrics = defineCollection({
  loader: file('src/content/metrics.json'),
  schema: z.object({
    id: z.string(),
    key: z.string(),
    display: z.string(),
    label: z.string(),
    labelZh: z.string().optional(),
    definition: z.string(),
    icon: z.string().default('chart'),
    verificationStatus: verification,
  }),
});

export const collections = { countries, people, partners, caseStudies, platforms, metrics };

// Weakly-typed data entry aliases for component props.
export type Country = CollectionEntry<'countries'>['data'];
export type Person = CollectionEntry<'people'>['data'];
export type Partner = CollectionEntry<'partners'>['data'];
export type CaseStudy = CollectionEntry<'caseStudies'>['data'];
export type Platform = CollectionEntry<'platforms'>['data'];
export type Metric = CollectionEntry<'metrics'>['data'];
