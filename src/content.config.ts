import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/data/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      author: z.string(),
      tags: z.array(z.string()),
      description: z.string(),
      pubDate: z.string(),
      imgUrl: image(),
      draft: z.boolean().optional().default(false),
    }),
});

export const collections = {
  blog: blogCollection,
};
