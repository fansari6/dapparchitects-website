import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Shield,
  Layers,
  Code2,
  Globe,
  Cpu,
  Database,
  ChevronRight,
} from 'lucide-react';
import Navigation from '@/components/portfolio/Navigation';
import Seo from '@/components/Seo';
import { products } from '@/content/products';
import { site, hero, capabilities, stats } from '@/content/site';

// Resolve the icon names stored in site.js to actual lucide components.
const icons = { Shield, Layers, Code2, Globe, Cpu, Database };

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55 },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  url: site.url,
  description: site.description,
  email: site.contactEmail,
  makesOffer: products.map((p) => ({
    '@type': 'Offer',
    itemOffered: { '@type': 'SoftwareApplication', name: p.title, description: p.subtitle },
  })),
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Seo path="/" jsonLd={jsonLd} />
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 lg:px-16 max-w-7xl mx-auto">
        <motion.div {...fadeUp}>
          <span className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-primary border border-primary/30 bg-primary/5 px-3 py-1.5 rounded mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            {hero.eyebrow}
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-foreground leading-none max-w-6xl"
        >
          {hero.titleTop}
          <br />
          <span className="text-primary">{hero.titleAccent}</span>
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg lg:text-xl text-muted-foreground mt-8 max-w-2xl leading-relaxed"
        >
          {hero.body}
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4 mt-10"
        >
          <a
            href={`mailto:${site.contactEmail}`}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-semibold text-sm hover:bg-primary/90 transition-colors rounded"
          >
            Start a Project
            <ArrowRight className="w-4 h-4" />
          </a>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 font-semibold text-sm hover:bg-muted transition-colors rounded"
          >
            View Our Work
          </Link>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-muted/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="text-4xl font-black text-foreground">
                {stat.key === 'platforms' ? String(products.length) : stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
        <motion.div {...fadeUp} className="mb-14">
          <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-3">
            What We Do
          </p>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-foreground">
            Core Capabilities
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {capabilities.map((cap, i) => {
            const Icon = icons[cap.icon] || Layers;
            return (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="bg-background p-8 group hover:bg-muted/60 transition-colors"
              >
                <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {cap.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {cap.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {cap.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2 py-0.5 border border-border text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto border-t border-border">
        <motion.div {...fadeUp} className="mb-14">
          <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-3">
            Our Products
          </p>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-foreground">
            Featured Work
          </h2>
        </motion.div>

        <div className="space-y-px bg-border">
          {products.map((project, i) => (
            <motion.div
              key={project.slug}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
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
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
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
      <section className="py-24 px-6 lg:px-16 border-t border-border">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-foreground mb-6">
            Ready to build something that matters?
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            We work with healthcare companies, financial institutions, and
            regulated-industry startups that need blockchain and full-stack
            engineering done right.
          </p>
          <a
            href={`mailto:${site.contactEmail}`}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-semibold text-base hover:bg-primary/90 transition-colors rounded"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 lg:px-16 py-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-muted-foreground">
            © 2026 DAPP ARCHITECTS - ALL RIGHTS RESERVED
          </p>
        </div>
      </footer>
    </div>
  );
}
