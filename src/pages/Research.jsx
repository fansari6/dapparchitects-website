import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  Building2,
  ClipboardCheck,
  Database,
  ExternalLink,
  FileSearch,
  Fingerprint,
  Gauge,
  GitBranch,
  HeartPulse,
  Landmark,
  LockKeyhole,
  Network,
  Pill,
  Scale,
  ShieldCheck,
  Stethoscope,
} from 'lucide-react';
import Navigation from '@/components/portfolio/Navigation';
import Seo from '@/components/Seo';
import { site } from '@/content/site';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55 },
};

const stagger = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.08 } },
  viewport: { once: true },
};

const papers = [
  {
    category: 'Healthcare Blockchain',
    title: 'Applications of Blockchain in Healthcare: Current Landscape & Challenges',
    description:
      'A comprehensive survey of blockchain adoption across healthcare, covering electronic health records, pharmaceutical supply chains, billing, telemedicine, and medical research. This paper establishes the broader business case for trusted healthcare data networks.',
    focus: ['EHR', 'Supply Chain', 'Billing', 'Telemedicine'],
    href: 'https://arxiv.org/abs/1812.02776',
    icon: HeartPulse,
  },
  {
    category: 'Hyperledger Fabric',
    title: 'The Hyperledger Fabric as a Blockchain Framework Preserves the Security of Electronic Health Records',
    description:
      'A Fabric-focused systematic review showing why permissioned blockchain architecture is highly relevant for protecting electronic health records, strengthening traceability, enforcing privacy, and preserving data integrity.',
    focus: ['Fabric', 'Security', 'Privacy', 'Auditability'],
    href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10713743/',
    icon: ShieldCheck,
  },
  {
    category: 'Privacy Architecture',
    title: 'A Privacy-Preserving Healthcare Framework Using Hyperledger Fabric',
    description:
      'Introduces PREHEALTH, a practical Fabric-based healthcare architecture designed for anonymity, unlinkability, secure identity management, and privacy-preserving collaboration between trusted organizations.',
    focus: ['Privacy', 'Identity', 'Anonymity', 'EHR'],
    href: 'https://arxiv.org/abs/2011.09260v2',
    icon: LockKeyhole,
  },
  {
    category: 'Real-World EHR Implementation',
    title: 'Blockchain in Healthcare: Implementing Hyperledger Fabric for Electronic Health Records',
    description:
      'A practical implementation paper showing how Hyperledger Fabric can be applied to electronic health record management, trusted data exchange, and operational transparency in healthcare environments.',
    focus: ['Implementation', 'EHR', 'Interoperability', 'Trust'],
    href: 'https://arxiv.org/abs/2407.15876',
    icon: Database,
  },
  {
    category: 'Smart Healthcare Framework',
    title: 'SmartMedChain: A Blockchain-Based Privacy-Preserving Smart Healthcare Framework',
    description:
      'A secure healthcare framework combining encrypted medical record storage, permissioned blockchain access, and patient-centered privacy controls for sensitive information exchange.',
    focus: ['Encrypted Records', 'Access Control', 'Privacy', 'Data Sharing'],
    href: 'https://pubmed.ncbi.nlm.nih.gov/34777733/',
    icon: Stethoscope,
  },
  {
    category: 'Claims Integrity',
    title: 'An Advanced Blockchain-Based Hyperledger Fabric Solution for Tracing Fraudulent Claims in the Healthcare Industry',
    description:
      'A claims integrity paper demonstrating how Hyperledger Fabric can support transparent, tamper-resistant workflows for healthcare payers, administrators, and fraud prevention teams.',
    focus: ['Claims', 'Fraud Detection', 'Audit Trails', 'Payers'],
    href: 'https://www.sciencedirect.com/science/article/pii/S2772662224000158',
    icon: FileSearch,
  },
];

const stats = [
  { value: '6', label: 'Curated Research Papers' },
  { value: '5+', label: 'Healthcare Domains' },
  { value: 'Fabric', label: 'Enterprise Blockchain Focus' },
  { value: 'EHR', label: 'Privacy & Data Integrity' },
];

const researchAreas = [
  { title: 'Electronic Health Records', icon: Database },
  { title: 'Patient Privacy', icon: LockKeyhole },
  { title: 'Identity & Access Control', icon: Fingerprint },
  { title: 'Claims Integrity', icon: ClipboardCheck },
  { title: 'Pharmaceutical Traceability', icon: Pill },
  { title: 'Healthcare Interoperability', icon: Network },
];

const challenges = [
  {
    title: 'Patient Privacy',
    desc: 'Protect sensitive healthcare information while still enabling controlled data sharing.',
    icon: LockKeyhole,
  },
  {
    title: 'Interoperability',
    desc: 'Connect providers, payers, pharmacies, laboratories, and regulators through trusted workflows.',
    icon: Network,
  },
  {
    title: 'Compliance',
    desc: 'Support audit-ready governance, policy enforcement, and regulated access to sensitive records.',
    icon: Scale,
  },
  {
    title: 'Auditability',
    desc: 'Create tamper-resistant transaction histories for records, claims, consent, and supply chain events.',
    icon: FileSearch,
  },
  {
    title: 'Identity',
    desc: 'Ensure every participant is known, authorized, and accountable across the network.',
    icon: Fingerprint,
  },
  {
    title: 'Fraud Prevention',
    desc: 'Reduce claims abuse and administrative manipulation through transparent evidence trails.',
    icon: ShieldCheck,
  },
];

const fabricReasons = [
  'Permissioned networks for known healthcare organizations',
  'Private data patterns for sensitive patient and business information',
  'Certificate-based identity and role-based access control',
  'Smart contracts that enforce workflow rules at the ledger layer',
  'Immutable audit trails for regulators, payers, and providers',
  'Enterprise scalability for multi-organization healthcare systems',
];

const timeline = [
  { year: '2018', title: 'Healthcare Blockchain Landscape', desc: 'Broad research establishes EHR, billing, supply chain, and telemedicine use cases.' },
  { year: '2020', title: 'Privacy-Preserving Fabric Architectures', desc: 'Fabric-based frameworks begin addressing anonymity, unlinkability, and secure collaboration.' },
  { year: '2021', title: 'Smart Healthcare Networks', desc: 'Privacy-first healthcare frameworks combine encrypted storage with permissioned blockchain access.' },
  { year: '2024', title: 'Implementation & Claims Integrity', desc: 'Research shifts from concepts to practical EHR deployments and fraud-resistant claims workflows.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Healthcare Blockchain Research Center',
  description:
    'Curated healthcare blockchain research covering Hyperledger Fabric, EHR security, privacy-preserving architecture, interoperability, and claims integrity.',
  url: `${site.url}/research`,
  hasPart: papers.map((paper) => ({
    '@type': 'ScholarlyArticle',
    name: paper.title,
    url: paper.href,
    about: paper.focus,
  })),
};

function ResearchCard({ paper, index }) {
  const Icon = paper.icon;

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="group relative overflow-hidden border border-border bg-card p-7 min-h-[440px] flex flex-col"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-primary/80 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
      <div className="flex items-start justify-between gap-4 mb-8">
        <div>
          <p className="font-mono text-[11px] tracking-widest uppercase text-primary mb-3">
            {paper.category}
          </p>
          <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
        </div>
        <div className="w-12 h-12 rounded border border-border bg-muted/50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <Icon className="w-5 h-5" />
        </div>
      </div>

      <h3 className="text-2xl font-black tracking-tight text-foreground leading-tight mb-5 group-hover:text-primary transition-colors">
        {paper.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-7">
        {paper.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto mb-7">
        {paper.focus.map((item) => (
          <span
            key={item}
            className="font-mono text-[11px] px-2.5 py-1 border border-border bg-background text-muted-foreground"
          >
            {item}
          </span>
        ))}
      </div>

      <a
        href={paper.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-between gap-3 border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
      >
        Read Research Paper
        <ExternalLink className="w-4 h-4" />
      </a>
    </motion.article>
  );
}

export default function Research() {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Healthcare Research Center"
        description="Curated healthcare blockchain research covering Hyperledger Fabric, secure EHR management, privacy-preserving architecture, interoperability, and claims integrity."
        path="/research"
        jsonLd={jsonLd}
      />
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 px-6 lg:px-16 border-b border-border">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.10),transparent_30%)]" />
        <div className="relative max-w-7xl mx-auto">
          <motion.div {...fadeUp}>
            <span className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-primary border border-primary/30 bg-primary/5 px-3 py-1.5 rounded mb-8">
              <BookOpen className="w-3.5 h-3.5" />
              Healthcare Research Center
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-foreground leading-none max-w-6xl"
          >
            Enterprise Blockchain
            <br />
            <span className="text-primary">Research for Healthcare.</span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg lg:text-xl text-muted-foreground mt-8 max-w-3xl leading-relaxed"
          >
            A curated research library for healthcare executives, technical leaders,
            and compliance teams evaluating blockchain for secure electronic health
            records, privacy-preserving collaboration, interoperability, claims integrity,
            and regulated multi-organization workflows.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3 mt-10"
          >
            {['Hyperledger Fabric', 'EHR Security', 'Privacy', 'Claims Integrity'].map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs px-3 py-1.5 border border-border bg-background/60 text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-muted/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-12 grid grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-background p-7"
            >
              <div className="text-4xl font-black text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Research areas */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
        <motion.div {...fadeUp} className="mb-14">
          <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-3">
            Research Areas
          </p>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-foreground">
            Where Blockchain Creates Healthcare Value
          </h2>
        </motion.div>

        <motion.div
          {...stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border"
        >
          {researchAreas.map((area) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                variants={fadeUp}
                className="group bg-background p-8 hover:bg-muted/60 transition-colors"
              >
                <Icon className="w-6 h-6 text-primary mb-7" />
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {area.title}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Featured papers */}
      <section className="py-24 px-6 lg:px-16 border-y border-border bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-3">
                Featured Papers
              </p>
              <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-foreground">
                Research That Moves Beyond Theory
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-xl">
              These papers were selected because they connect directly to real enterprise
              healthcare challenges: privacy, trust, access control, auditability,
              interoperability, and fraud-resistant operations.
            </p>
          </motion.div>

          <motion.div {...stagger} className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
            {papers.map((paper, index) => (
              <ResearchCard key={paper.title} paper={paper} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
        <motion.div {...fadeUp} className="mb-14">
          <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-3">
            Why It Matters
          </p>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-foreground">
            Healthcare Needs Trust Infrastructure
          </h2>
        </motion.div>

        <motion.div {...stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {challenges.map((challenge) => {
            const Icon = challenge.icon;
            return (
              <motion.div
                key={challenge.title}
                variants={fadeUp}
                className="bg-background p-8 hover:bg-muted/60 transition-colors"
              >
                <Icon className="w-6 h-6 text-primary mb-7" />
                <h3 className="text-xl font-bold text-foreground mb-3">{challenge.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{challenge.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Architecture */}
      <section className="py-24 px-6 lg:px-16 border-y border-border bg-muted/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
          <motion.div {...fadeUp}>
            <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-3">
              Enterprise Pattern
            </p>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-foreground mb-6">
              A Permissioned Network for Regulated Collaboration
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Healthcare is not a public-blockchain-first environment. Hospitals,
              payers, pharmacies, manufacturers, laboratories, and regulators need a
              trusted network where participants are identified, permissions are enforced,
              and sensitive data can be shared without losing control.
            </p>
            <div className="space-y-3">
              {fabricReasons.map((reason) => (
                <div key={reason} className="flex gap-3 text-sm text-foreground">
                  <ShieldCheck className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{reason}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative border border-border bg-background p-8 lg:p-10 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.12),transparent_55%)]" />
            <div className="relative grid grid-cols-3 gap-4 text-center">
              {[
                { label: 'Patients', icon: HeartPulse },
                { label: 'Hospitals', icon: Building2 },
                { label: 'Clinics', icon: Stethoscope },
              ].map((node) => {
                const Icon = node.icon;
                return (
                  <div key={node.label} className="border border-border bg-card p-4">
                    <Icon className="w-5 h-5 text-primary mx-auto mb-2" />
                    <p className="font-mono text-[11px] uppercase text-muted-foreground">{node.label}</p>
                  </div>
                );
              })}

              <div className="col-span-3 py-7">
                <div className="mx-auto max-w-md border border-primary/40 bg-primary/10 px-6 py-6 shadow-[0_0_40px_rgba(37,99,235,0.16)]">
                  <GitBranch className="w-7 h-7 text-primary mx-auto mb-3" />
                  <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2">
                    Hyperledger Fabric Network
                  </p>
                  <h3 className="text-2xl font-black text-foreground">Shared Trust Layer</h3>
                </div>
              </div>

              {[
                { label: 'Pharmacies', icon: Pill },
                { label: 'Insurers', icon: Landmark },
                { label: 'Regulators', icon: Scale },
              ].map((node) => {
                const Icon = node.icon;
                return (
                  <div key={node.label} className="border border-border bg-card p-4">
                    <Icon className="w-5 h-5 text-primary mx-auto mb-2" />
                    <p className="font-mono text-[11px] uppercase text-muted-foreground">{node.label}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
        <motion.div {...fadeUp} className="mb-14">
          <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-3">
            Research Timeline
          </p>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-foreground">
            From Exploration to Implementation
          </h2>
        </motion.div>

        <div className="space-y-px bg-border border border-border">
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="grid grid-cols-1 md:grid-cols-[160px_1fr] bg-background hover:bg-muted/60 transition-colors"
            >
              <div className="p-7 border-b md:border-b-0 md:border-r border-border">
                <span className="font-mono text-3xl font-bold text-primary">{item.year}</span>
              </div>
              <div className="p-7">
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-16 border-t border-border">
        <motion.div {...fadeUp} className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded border border-primary/30 bg-primary/10 text-primary mb-8">
            <Gauge className="w-7 h-7" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-foreground mb-6">
            Turning Research Into Production Systems
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            At DApp Architects, research is not decoration. These architectural patterns
            inform how we design healthcare blockchain systems for secure records,
            pharmaceutical traceability, compliance automation, identity, and fraud-resistant
            enterprise workflows.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-semibold text-base hover:bg-primary/90 transition-colors rounded"
            >
              Discuss a Healthcare Blockchain Project
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-4 font-semibold text-base hover:bg-muted transition-colors rounded"
            >
              View Related Platforms
            </Link>
          </div>
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
