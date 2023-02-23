import {
  defineConfig
} from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import vercel from "@astrojs/vercel/serverless";

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), vue(), mdx()],
  output: "server",
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex]
  },
  adapter: vercel()
});