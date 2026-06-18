// The single import surface for product content used by the app.
//
//   import { products, getProductBySlug } from '@/content/products';
//
// It merges the pure data (./data) with the resolved image assets (./images),
// validates every product against the schema, and exposes a slug lookup.

import { productData } from './data/index.js';
import { productImages } from './images.js';
import { productSchema } from './schema.js';

function build() {
  return productData.map((raw) => {
    const parsed = productSchema.safeParse(raw);
    if (!parsed.success) {
      const issues = parsed.error.issues
        .map((i) => `  • ${i.path.join('.') || '(root)'}: ${i.message}`)
        .join('\n');
      throw new Error(
        `Invalid product "${raw?.slug ?? '(unknown)'}":\n${issues}`,
      );
    }
    const data = parsed.data;
    const image = productImages[data.image];
    if (!image) {
      throw new Error(
        `Product "${data.slug}" references image "${data.image}" which is not in productImages (src/content/products/images.js).`,
      );
    }
    // `id` kept as an alias of `slug` for backwards compatibility with any
    // older references.
    return { ...data, id: data.slug, image };
  });
}

export const products = build();

const bySlug = new Map(products.map((p) => [p.slug, p]));

export function getProductBySlug(slug) {
  return bySlug.get(slug);
}
