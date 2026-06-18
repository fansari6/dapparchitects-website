// Product schema. Every product is validated against this when the content
// index loads, so a malformed or incomplete product fails LOUDLY at build time
// with a precise message — instead of silently rendering a broken page.

import { z } from 'zod';

const labelValue = z.object({
  label: z.string(),
  value: z.string(),
});

const archNode = z.object({
  node: z.string(),
  desc: z.string(),
});

const role = z.object({
  icon: z.string(),
  title: z.string(),
  desc: z.string(),
});

const differentiator = z.object({
  title: z.string(),
  desc: z.string(),
});

const framework = z.object({
  name: z.string(),
  region: z.string(),
  coverage: z.string(),
});

const phase = z.object({
  phase: z.string(),
  title: z.string(),
  status: z.enum(['complete', 'next', 'future']),
  desc: z.string(),
});

const device = z.object({
  device: z.string(),
  manufacturer: z.string(),
  category: z.string(),
  clearance: z.string(),
});

const credential = z.object({
  role: z.string(),
  username: z.string(),
  password: z.string(),
});

export const productSchema = z.object({
  // Identity
  slug: z
    .string()
    .regex(/^[a-z0-9-]+$/, 'slug must be lowercase letters, numbers, and dashes'),
  index: z.string(),
  ref: z.string(),
  chainId: z.string(),
  status: z.string(),

  // Display
  title: z.string(),
  subtitle: z.string(),
  brand: z.object({ solid: z.string(), outlined: z.string() }),
  tagline: z.string(),
  description: z.string(),
  longDescription: z.string(),
  seoDescription: z.string().optional(),
  color: z.string(),
  image: z.string(), // key into productImages

  // Demo / links (optional — DentalChain has no live demo yet)
  liveDemo: z.string().nullable().optional(),
  website: z.string().nullable().optional(),
  demoUrl: z.string().nullable().optional(),

  // Required content blocks
  techStack: z.array(z.string()).min(1),
  metrics: z.array(labelValue).min(1),
  architecture: z.array(archNode).min(1),

  // Optional rich sections (template renders them only when present)
  roles: z.array(role).optional(),
  differentiators: z.array(differentiator).optional(),
  regulatoryFrameworks: z.array(framework).optional(),
  roadmap: z.array(phase).optional(),
  realDevices: z.array(device).optional(),
  demoCredentials: z.array(credential).optional(),
});
