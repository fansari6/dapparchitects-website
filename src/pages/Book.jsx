import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from '@/components/portfolio/Navigation';
import Seo from '@/components/Seo';
import { ClientOnly } from 'vite-react-ssg';
import { site } from '@/content/site';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55 },
};

const CalEmbed = React.lazy(() => import('@/components/portfolio/CalEmbed'));

export default function Book() {
  const hasCal = Boolean(site.bookingCalLink);

  // Follow the theme that's actually applied to the page (the nav toggle sets
  // `dark` on <html>), so the embed repaints to match light/dark.
  const [theme, setTheme] = useState('dark');
  useEffect(() => {
    const root = document.documentElement;
    const read = () =>
      setTheme(root.classList.contains('dark') ? 'dark' : 'light');
    read();
    const observer = new MutationObserver(read);
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Book a Demo"
        description="Schedule a guided walkthrough of our blockchain platforms — in person or over Zoom."
        path="/book"
      />
      <Navigation />

      <section className="pt-32 pb-8 px-6 lg:px-16 max-w-5xl mx-auto">
        <motion.p
          {...fadeUp}
          className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-3"
        >
          // Book a Demo
        </motion.p>
        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-none"
        >
          Schedule your <span className="text-primary">walkthrough</span>.
        </motion.h1>
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-muted-foreground mt-6 max-w-2xl leading-relaxed"
        >
          Pick a time that works for you. We run guided demos tailored to your
          organization — in person or over Zoom.
        </motion.p>
      </section>

      <section className="px-6 lg:px-16 max-w-5xl mx-auto pb-24">
        {hasCal ? (
          <div className="border border-border rounded-lg overflow-hidden bg-background">
            <ClientOnly
              fallback={
                <div className="p-10 font-mono text-sm text-muted-foreground">
                  Loading scheduler…
                </div>
              }
            >
              {() => (
                <CalEmbed
                  calLink={site.bookingCalLink}
                  theme={theme}
                  brandColor="#1A6EF4"
                />
              )}
            </ClientOnly>
          </div>
        ) : (
          <div className="border border-border rounded-lg p-10 bg-muted/30">
            <p className="text-lg text-foreground leading-relaxed max-w-2xl">
              Our online scheduler is being set up. In the meantime, email{' '}
              <a
                href={`mailto:${site.contactEmail}`}
                className="text-primary hover:underline"
              >
                {site.contactEmail}
              </a>{' '}
              and we&apos;ll arrange a time, or reach us through the{' '}
              <Link to="/contact" className="text-primary hover:underline">
                contact page
              </Link>
              .
            </p>
          </div>
        )}
      </section>

      <footer className="border-t border-border px-6 lg:px-16 py-8">
        <div className="max-w-7xl mx-auto flex justify-center">
          <p className="font-mono text-xs text-muted-foreground">
            © 2026 DAPP ARCHITECTS — ALL RIGHTS RESERVED
          </p>
        </div>
      </footer>
    </div>
  );
}
