# Editing site content

All copy and data now lives in `src/content/` — you shouldn't need to touch the
page components to update the site.

## Add or edit a product

1. **Edit copy/data:** open the product's file in
   `src/content/products/data/<slug>.js` (e.g. `pharmachain.js`). These are
   plain data objects — no imports, no JSX — so they're safe to edit freely.
2. **Add a new product:**
   - Create `src/content/products/data/<slug>.js` (copy an existing one as a
     template).
   - Register it in `src/content/products/data/index.js`.
   - Add its image in `src/content/products/images.js`
     (`import x from '@/assets/x.png'` and add to the map, keyed by the `image`
     value in your data file).
3. Routing, the nav, the Home "Featured Work" list, the `/products` index, the
   sitemap, and the per-product SEO page are all generated automatically from
   this data. You don't edit any of them by hand.

Every product is validated against a schema (`src/content/products/schema.js`)
when the site builds. If a required field is missing or malformed, the build
**fails with a precise message** instead of shipping a broken page.

## Edit global copy (hero, capabilities, stats, contact email)

Open `src/content/site.js`. Notable fields:

- `site.contactEmail` — the **single** place the contact address is defined. It
  feeds every "Start a Project" / "Get in Touch" button and the contact page.
- `site.url` — used for canonical URLs, the sitemap, and social link previews.
- `hero`, `capabilities`, `stats`, `about` — Home/About copy.

## SEO

- Per-page titles/descriptions/Open Graph/Twitter/canonical come from the
  `<Seo>` component on each page; product pages pull from their data's
  `seoDescription`.
- `sitemap.xml` and `robots.txt` are generated at build time
  (`vite.config.js`) from the product list.
- The site is **prerendered to static HTML** (`vite-react-ssg`), so search
  engines and link-preview bots get fully-rendered pages.

## Commands

```bash
npm run dev      # local dev server
npm run build    # prerender to ./dist (this is what Vercel runs)
npm run preview  # preview the built ./dist locally
```
