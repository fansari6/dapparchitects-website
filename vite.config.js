import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'node:path';
import fs from 'node:fs';
import { site } from './src/content/site.js';
import { productData } from './src/content/products/data/index.js';

// Generates dist/sitemap.xml and dist/robots.txt from the product data at build
// time, so the sitemap always reflects whatever products currently exist.
function seoFiles() {
  return {
    name: 'seo-files',
    apply: 'build',
    closeBundle() {
      const base = site.url.replace(/\/$/, '');
      const paths = [
        '/',
        '/about',
        '/products',
        '/contact',
        ...productData.map((p) => `/products/${p.slug}`),
      ];
      const lastmod = new Date().toISOString().slice(0, 10);
      const urls = paths
        .map(
          (p) =>
            `  <url>\n    <loc>${base}${p === '/' ? '' : p}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`,
        )
        .join('\n');
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
      const robots = `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`;

      const out = path.resolve(__dirname, 'dist');
      fs.mkdirSync(out, { recursive: true });
      fs.writeFileSync(path.join(out, 'sitemap.xml'), sitemap);
      fs.writeFileSync(path.join(out, 'robots.txt'), robots);
      // eslint-disable-next-line no-console
      console.log(
        `[seo-files] wrote dist/sitemap.xml (${paths.length} urls) and dist/robots.txt`,
      );
    },
  };
}

export default defineConfig({
  plugins: [react(), seoFiles()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
