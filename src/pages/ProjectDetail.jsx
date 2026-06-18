import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Navigation from '@/components/portfolio/Navigation';
import Seo from '@/components/Seo';
import ScrollProgress from '@/components/portfolio/ScrollProgress';
import TechStackLedger from '@/components/portfolio/TechStackLedger';
import MetricCard from '@/components/portfolio/MetricCard';
import NodeMap from '@/components/portfolio/NodeMap';
import HUDLabel from '@/components/portfolio/HUDLabel';
import RolesGrid from '@/components/portfolio/RolesGrid';
import DifferentiatorsGrid from '@/components/portfolio/DifferentiatorsGrid';
import RegulatoryTable from '@/components/portfolio/RegulatoryTable';
import Roadmap from '@/components/portfolio/Roadmap';
import DemoCredentials from '@/components/portfolio/DemoCredentials';
import RealDevicesTable from '@/components/portfolio/RealDevicesTable';
import DemoEmbed from '@/components/portfolio/DemoEmbed';
import ProjectTitle from '@/components/portfolio/ProjectTitle';
import { products, getProductBySlug } from '@/content/products';
import { site } from '@/content/site';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProductBySlug(slug);
  const currentIndex = products.findIndex((p) => p.slug === slug);
  const nextProject = products[(currentIndex + 1) % products.length];
  const prevProject =
    products[(currentIndex - 1 + products.length) % products.length];

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Seo title="Not found" path={`/products/${slug || ''}`} />
        <p className="font-mono text-muted-foreground">PROJECT NOT FOUND</p>
      </div>
    );
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.title,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: project.seoDescription || project.description,
    offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
    publisher: { '@type': 'Organization', name: site.name, url: site.url },
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={`${project.title} — ${project.subtitle}`}
        description={project.seoDescription || project.description}
        path={`/products/${project.slug}`}
        image={project.image}
        type="article"
        jsonLd={jsonLd}
      />
      <Navigation />
      <ScrollProgress />

      {/* Hero section */}
      <div className="relative h-[70vh] lg:h-[80vh] overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

        {/* HUD corners */}
        <div className="absolute top-20 left-6 lg:left-16 z-10">
          <HUDLabel
            text={`REF: ${project.ref} // CHAIN_ID: ${project.chainId}`}
          />
        </div>
        <div className="absolute top-20 right-6 lg:right-16 z-10">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <HUDLabel text={project.status} />
          </div>
        </div>

        {/* Corner brackets */}
        <div className="absolute top-16 left-4 lg:left-14 w-8 h-8 border-l border-t border-muted-foreground/30" />
        <div className="absolute top-16 right-4 lg:right-14 w-8 h-8 border-r border-t border-muted-foreground/30" />

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 px-6 lg:px-16 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-7xl lg:text-9xl leading-none">
              <ProjectTitle
                brand={project.brand}
                className="text-5xl sm:text-7xl lg:text-9xl"
              />
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground mt-4 max-w-2xl font-light">
              {project.subtitle}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Split-screen dossier */}
      <div className="lg:flex border-t border-border">
        {/* Left sticky sidebar */}
        <div className="lg:w-[40%] lg:sticky lg:top-14 lg:h-[calc(100vh-3.5rem)] border-r border-border p-6 lg:p-12 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <HUDLabel text={`// VERTICAL DOSSIER — ${project.ref}`} />

            <div className="mt-8">
              <TechStackLedger
                techStack={project.techStack}
                projectRef={project.ref}
              />
            </div>

            {/* Quick metrics in sidebar */}
            <div className="mt-8 space-y-4">
              {project.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="flex justify-between items-baseline border-b border-border pb-3"
                >
                  <span className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
                    {metric.label}
                  </span>
                  <span className="font-mono text-sm font-bold text-foreground">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right scrollable content */}
        <div className="lg:w-[60%] p-6 lg:p-12">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-2xl lg:text-3xl font-light text-foreground mt-4 leading-relaxed tracking-tight">
              {project.tagline}
            </p>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <HUDLabel text="// SYSTEM OVERVIEW" />
            <p className="text-lg text-foreground mt-4 leading-relaxed">
              {project.description}
            </p>
            <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
              {project.longDescription}
            </p>
          </motion.div>

          {/* Demo embed — shows a "coming soon" state when there's no demoUrl */}
          <DemoEmbed
            demoUrl={project.demoUrl}
            liveDemo={project.liveDemo}
            projectTitle={project.title}
            isPlaceholder={!project.demoUrl}
          />

          {/* Key Metrics - Large display */}
          <div className="mb-16">
            <HUDLabel text="// KEY METRICS" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border mt-6">
              {project.metrics.map((metric, i) => (
                <MetricCard
                  key={i}
                  label={metric.label}
                  value={metric.value}
                  index={i}
                />
              ))}
            </div>
          </div>

          {/* Architecture / Node Map */}
          <NodeMap architecture={project.architecture} projectRef={project.ref} />

          {/* Optional rich sections */}
          {project.roles && (
            <RolesGrid roles={project.roles} projectRef={project.ref} />
          )}
          {project.differentiators && (
            <DifferentiatorsGrid differentiators={project.differentiators} />
          )}
          {project.regulatoryFrameworks && (
            <RegulatoryTable frameworks={project.regulatoryFrameworks} />
          )}
          {project.roadmap && <Roadmap roadmap={project.roadmap} />}
          {project.demoCredentials && project.liveDemo && (
            <DemoCredentials
              credentials={project.demoCredentials}
              liveDemo={project.liveDemo}
            />
          )}
          {project.realDevices && (
            <RealDevicesTable devices={project.realDevices} />
          )}

          {/* Project navigation */}
          <div className="border-t border-border pt-12 mt-16">
            <div className="flex flex-col sm:flex-row justify-between gap-6">
              <Link
                to={`/products/${prevProject.slug}`}
                className="group flex items-center gap-3"
              >
                <ArrowLeft className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:-translate-x-1 transition-all" />
                <div>
                  <HUDLabel text="PREV PROJECT" />
                  <p className="font-semibold text-foreground mt-1 group-hover:text-primary transition-colors">
                    {prevProject.title}
                  </p>
                </div>
              </Link>
              <Link
                to={`/products/${nextProject.slug}`}
                className="group flex items-center gap-3 sm:text-right"
              >
                <div>
                  <HUDLabel text="NEXT PROJECT" />
                  <p className="font-semibold text-foreground mt-1 group-hover:text-primary transition-colors">
                    {nextProject.title}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border px-6 lg:px-16 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <HUDLabel text="© 2026 DAPP ARCHITECTS - ALL RIGHTS RESERVED" />
          <Link
            to="/"
            className="font-mono text-xs text-primary tracking-wider uppercase hover:underline"
          >
            RETURN TO DAPP ARCHITECTS
          </Link>
        </div>
      </footer>
    </div>
  );
}
