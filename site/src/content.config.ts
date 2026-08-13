import { z, defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'

const docsSchema = z.object({
  added: z
    .object({
      show_badge: z.boolean().optional(),
      version: z.string()
    })
    .optional(),
  aliases: z.string().or(z.string().array()).optional(),
  description: z.string(),
  direction: z.literal('rtl').optional(),
  extra_js: z
    .object({
      async: z.boolean().optional(),
      src: z.string()
    })
    .array()
    .optional(),
  // Renders a card grid of links on the page. By default each card links to a sibling page
  // in the same directory, derived from `title` — so `title: Element Finder` on a page in
  // `step/` links to `step/element-finder`. Set `href` when the target lives elsewhere.
  // A card whose target does not exist fails the build; see `DocsLayout.astro`.
  sections: z
    .object({
      description: z.string(),
      href: z.string().optional(),
      title: z.string()
    })
    .array()
    .optional(),
  subscription: z.enum(['PLUS', 'PRO']).optional(),
  // Keyword metadata surfaced to the Algolia crawler as `docsearch:tags`. See `algolia/crawler.config.js`.
  tags: z.string().array().optional(),
  thumbnail: z.string().optional(),
  title: z.string(),
  toc: z.boolean().optional()
})

const docsCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/docs' }),
  schema: docsSchema
})

const calloutsSchema = z.object({})

const calloutsCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/callouts' }),
  schema: calloutsSchema
})

export const collections = {
  docs: docsCollection,
  callouts: calloutsCollection
}
