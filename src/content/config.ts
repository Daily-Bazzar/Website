import { defineCollection, z } from 'astro:content';

const blogs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    keywords: z.array(z.string()),
    author: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  blogs,
};
