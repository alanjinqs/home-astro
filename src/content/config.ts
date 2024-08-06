import { z, defineCollection } from "astro:content"

const devlogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
  }),
})

const projectCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      order: z.number(),
      title: z.string(),
      description: z.string(),
      dateInterval: z.string(),
      tags: z.array(z.string()),
      cover: image().refine((img) => img.width >= 600, {
        message: "Cover image must be at least 600 pixels wide!",
      }),
    }),
})

export const collections = {
  devlog: devlogCollection,
  project: projectCollection,
}
