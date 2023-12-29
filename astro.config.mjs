import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify/functions";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";

import solidJs from "@astrojs/solid-js";
import { remarkReadingTime } from "./src/lib/ remark-reading-time.mjs";

// // https://astro.build/config
// export default defineConfig({
//   site: "https://jalcocert.github.io/",
//   base: '/web3/',
//   integrations: [
//     sitemap(),
//     robotsTxt({
//       sitemap: [
//         "https://gianmarco.xyz/sitemap-index.xml",
//         "https://gianmarco.xyz/sitemap-0.xml",
//       ],
//     }),
//     solidJs(),
//     UnoCSS({ injectReset: true }),
//   ],
//   markdown: {
//     remarkPlugins: [remarkReadingTime],
//   }
//   // output: "server",
//   // adapter: netlify(),
// });

// import { defineConfig } from 'astro/config';
// import sitemap from "@astrojs/sitemap";
// import tailwind from "@astrojs/tailwind";
// import { SITE_URL } from './src/site_config';

// https://astro.build/config
export default defineConfig({
  // site: SITE_URL,
  site: 'https://jalcocert.github.io',
  base: '/web3/',
  integrations: [sitemap()],
  vite: {
    plugins: [rawFonts(['.ttf'])],
    optimizeDeps: { exclude: ['@resvg/resvg-js'] }
  },
});

function rawFonts(ext) {
  return {
    name: 'vite-plugin-raw-fonts',
    transform(_, id) {
      if (ext.some(e => id.endsWith(e))) {
        const buffer = fs.readFileSync(id);
        return {
          code: `export default ${JSON.stringify(buffer)}`,
          map: null
        };
      }
    }
  };
}

