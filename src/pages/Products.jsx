import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';
import Navigation from '@/components/portfolio/Navigation';
import Seo from '@/components/Seo';
import { products } from '@/content/products';
import { site } from '@/content/site';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55 },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: products.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.title,
    description: p.subtitle,
    url: `${site.url}/products/${p.slug}`,
  })),
};

export default function Products() {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Products"
        description="Production-grade blockchain platforms by DApp Architects — pharmaceutical supply chain, surgical and dental implant tracking, and tokenized real estate."
        path="/products"
        jsonLd={jsonLd}
      />
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-16 max-w-7xl mx-auto">
        <motion.p
          {...fadeUp}
          className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-3"
        >
          Our Products
        </motion.p>
        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-foreground leading-none"
        >
          Production-Grade
          <br />
          <span className="text-primary">Blockchain Platforms.</span>
        </motion.h1>
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg lg:text-xl text-muted-foreground mt-8 max-w-2xl leading-relaxed"
        >
          Each platform is a real, deployed system built for a regulated
          industry — where auditability, compliance, and immutability are
          non-negotiable.
        </motion.p>
      </section>

      {/* Product list */}
      <section className="px-6 lg:px-16 max-w-7xl mx-auto pb-24">
        <div className="space-y-px bg-border border border-border">
          {products.map((project, i) => (
            <motion.div
              key={project.slug}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                to={`/products/${project.slug}`}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-background px-8 py-7 group hover:bg-muted/60 transition-colors"
              >
                <div className="flex items-center gap-6">
                  <span className="font-mono text-xs text-muted-foreground w-8">
                    {project.index}
                  </span>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      <span className="font-mono text-xs text-green-600 tracking-wider">
                        {project.status}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="hidden md:flex flex-wrap gap-1.5 justify-end max-w-xs">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs px-2 py-0.5 border border-border text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-16 border-t border-border">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-foreground mb-6">
            Want something like this for your industry?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-semibold text-base hover:bg-primary/90 transition-colors rounded"
          >
            Start a Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
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
