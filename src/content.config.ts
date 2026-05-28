import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date().optional(),
    date: z.coerce.date().optional(),
    description: z.string().optional(),
    category: z.string().default('Cloud'),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
