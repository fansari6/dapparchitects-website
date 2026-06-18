import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Head } from 'vite-react-ssg';
import { Toaster } from '@/components/ui/toaster';
import { site } from '@/content/site';

// Scroll to top on route change (client-only effect; safe for prerender).
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Site-wide default head. Per-page <Seo> renders deeper in the tree and
// overrides these (react-helmet "last wins"), so every page ends up with a
// single, correct title/description.
function DefaultHead() {
  return (
    <Head>
      <title>{`${site.name} — ${site.tagline}`}</title>
      <meta name="description" content={site.description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={site.name} />
      <meta property="og:description" content={site.tagline} />
      <meta property="og:url" content={site.url} />
    </Head>
  );
}

export default function Layout() {
  return (
    <>
      <DefaultHead />
      <ScrollToTop />
      <Outlet />
      <Toaster />
    </>
  );
}
