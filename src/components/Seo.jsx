// Per-page SEO. Renders real <title>/<meta>/<link>/<script> tags into the
// document head — and because the site is prerendered (vite-react-ssg), these
// end up in the static HTML that crawlers and link-preview bots actually read.

import { Head } from 'vite-react-ssg';
import { site } from '@/content/site';

const ORIGIN = site.url.replace(/\/$/, '');

function absolute(url) {
  if (!url) return undefined;
  if (url.startsWith('http')) return url;
  return ORIGIN + (url.startsWith('/') ? url : `/${url}`);
}

export default function Seo({
  title,
  description,
  path = '/',
  image,
  type = 'website',
  jsonLd,
  noindex = false,
}) {
  const fullTitle = title ? `${title} — ${site.name}` : `${site.name} — ${site.tagline}`;
  const desc = description || site.description;
  const canonical = ORIGIN + (path === '/' ? '' : path);
  const ogImage = absolute(image || site.image);

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex" />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={canonical} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter */}
      <meta name="twitter:card" content={ogImage ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Head>
  );
}
