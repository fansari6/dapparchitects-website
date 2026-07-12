// Ordered list of product data — PURE (no asset imports).
//
// This file is import-safe from plain Node (e.g. the sitemap generator in
// vite.config.js) because nothing here imports an image or other asset.
// To add a product: create a new data file in this folder, then add it here
// (and add its image in ../images.js).

import pharmachain from './pharmachain.js';
import equityblock from './equityblock.js';
import implantchain from './implantchain.js';
import dentalchain from './dentalchain.js';
import fdaintelligence from './fdaintelligence.js';

export const productData = [
  implantchain,
  dentalchain,
  pharmachain,
  equityblock,
  fdaintelligence,
];

export const productSlugs = productData.map((p) => p.slug);
