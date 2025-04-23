import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";

import solidJs from "@astrojs/solid-js";
import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs";

import svelte from "@astrojs/svelte";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://christopherfagg.me/",
  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: [
        "https://christopherfagg.me/sitemap-index.xml",
        "https://christopherfagg.me/sitemap-0.xml",
      ],
    }),
    solidJs(),
    UnoCSS({ injectReset: true }),
    icon(),
    svelte(),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  server: {
  host: '0.0.0.0',
      port: 80,
  },
  vite: {
    assetsInclude: "**/*.riv",
  },
});