import { z, defineCollection } from "astro:content"

const devlogCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    date: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
  }),
})

export const collections = {
  devlog: devlogCollection,
}
