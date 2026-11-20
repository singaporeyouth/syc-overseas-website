import { defineCollection, z, type CollectionEntry } from 'astro:content';
import { file } from 'astro/loaders';

// Content status marker retained for editorial tooling. All records shipped
// in this build are cleared for publication.
const verification = z.enum([
  'sample_unverified',
  'owner_supplied_needs_signoff',
  'confirmed_url',
  'published',              // Cleared for public display
]);

const countries = defineCollection({
  loader: file('src/content/countries.json'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    nameZh: z.string().optional(),

    nameFr: z.string().optional(),

    nameRu: z.string().optional(),

    nameJa: z.string().optional(),

    nameKo: z.string().optional(),
    region: z.enum(['Asia', 'Europe', 'Americas', 'Africa', 'Oceania', 'Middle East', 'Global']),
    regionZh: z.string().optional(),

    regionFr: z.string().optional(),

    regionRu: z.string().optional(),

    regionJa: z.string().optional(),

    regionKo: z.string().optional(),
    photo: z.string(),
    lat: z.number().optional(),
    lng: z.number().optional(),
    note: z.string().default('A vibrant node in the global SYC community.'),
    noteZh: z.string().optional(),

    noteFr: z.string().optional(),

    noteRu: z.string().optional(),

    noteJa: z.string().optional(),

    noteKo: z.string().optional(),
    verificationStatus: verification,
  }),
});

const people = defineCollection({
  loader: file('src/content/people.json'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    role: z.string(),
    roleZh: z.string().optional(),

    roleFr: z.string().optional(),

    roleRu: z.string().optional(),

    roleJa: z.string().optional(),

    roleKo: z.string().optional(),
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
    nameZh: z.string().optional(),

    nameFr: z.string().optional(),

    nameRu: z.string().optional(),

    nameJa: z.string().optional(),

    nameKo: z.string().optional(),
    type: z.enum(['International Organisation', 'University & Research', 'Youth Network', 'Innovation Partner']),
    description: z.string(),
    descriptionZh: z.string().optional(),

    descriptionFr: z.string().optional(),

    descriptionRu: z.string().optional(),

    descriptionJa: z.string().optional(),

    descriptionKo: z.string().optional(),
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

    titleFr: z.string().optional(),

    titleRu: z.string().optional(),

    titleJa: z.string().optional(),

    titleKo: z.string().optional(),
    category: z.string(),
    categoryZh: z.string().optional(),

    categoryFr: z.string().optional(),

    categoryRu: z.string().optional(),

    categoryJa: z.string().optional(),

    categoryKo: z.string().optional(),
    image: z.string(),
    summary: z.string(),
    summaryZh: z.string().optional(),

    summaryFr: z.string().optional(),

    summaryRu: z.string().optional(),

    summaryJa: z.string().optional(),

    summaryKo: z.string().optional(),
    approvalStatus: z.string().default('published'),
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
    descriptionZh: z.string().optional(),

    descriptionFr: z.string().optional(),

    descriptionRu: z.string().optional(),

    descriptionJa: z.string().optional(),

    descriptionKo: z.string().optional(),
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

    labelFr: z.string().optional(),

    labelRu: z.string().optional(),

    labelJa: z.string().optional(),

    labelKo: z.string().optional(),
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
