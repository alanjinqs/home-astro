import {
  defineConfig
} from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";

export default defineConfig({
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    },
  }), vue()]
});