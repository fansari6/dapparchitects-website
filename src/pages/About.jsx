import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Target,
  Eye,
  Zap,
  Users,
  ShieldCheck,
  Globe,
} from 'lucide-react';
import Navigation from '@/components/portfolio/Navigation';
import Seo from '@/components/Seo';
import { site, about } from '@/content/site';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55 },
};

const values = [
  {
    icon: ShieldCheck,
    title: 'Compliance First',
    desc: 'We treat regulatory requirements as architecture constraints, not afterthoughts. Compliance is woven into every protocol, data model, and API we design.',
  },
  {
    icon: Zap,
    title: 'Production or Nothing',
    desc: "We don't build proofs of concept that gather dust. Everything we ship is built to run in production — with real users, real stakes, and real consequences.",
  },
  {
    icon: Globe,
    title: 'Decentralization with Purpose',
    desc: "Blockchain is a tool, not a religion. We use it where immutability, auditability, and trustless verification solve a real business problem — and we'll tell you honestly when it doesn't.",
  },
  {
    icon: Users,
    title: 'Long-Term Partnership',
    desc: 'We embed with our clients, not just deliver code and disappear. We stay accountable for what we build — through deployment, scale, and iteration.',
  },
];

const team = [
  {
    name: 'Blockchain & Smart Contract Engineering',
    desc: 'Hyperledger Fabric channel architects, Solidity engineers, and token economists with experience deploying permissioned and public-chain systems.',
  },
  {
    name: 'Regulatory & Compliance Specialists',
    desc: 'Domain experts across FDA, EU MDR, DSCSA, GS1, and SEC Reg D who translate legal requirements into enforceable technical specifications.',
  },
  {
    name: 'Full-Stack & DevOps Engineers',
    desc: 'React, Node.js, Python, and cloud infrastructure engineers who own delivery end to end — from database schema to CI/CD pipeline.',
  },
  {
    name: 'Security & Identity Architects',
    desc: "X.509 PKI, HSM integration, and RBAC designers who ensure systems can't be circumvented at any layer.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="About"
        description="DApp Architects is a software consultancy specializing in blockchain-powered platforms for regulated industries — healthcare, financial infrastructure, and asset management."
        path="/about"
      />
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-16 max-w-7xl mx-auto">
        <motion.div {...fadeUp}>
          <span className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-primary border border-primary/30 bg-primary/5 px-3 py-1.5 rounded mb-8">
            {about.eyebrow}
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-foreground leading-none max-w-4xl"
        >
          {about.titleTop}
          <br />
          <span className="text-primary">{about.titleAccent}</span>
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg lg:text-xl text-muted-foreground mt-8 max-w-2xl leading-relaxed"
        >
          {about.intro}
        </motion.p>
      </section>

      {/* Mission & Vision */}
      <section className="border-y border-border bg-muted/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div {...fadeUp}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                <Target className="w-4 h-4 text-primary" />
              </div>
              <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
                Our Mission
              </p>
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Make regulated-industry software impossible to corrupt.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Every year, counterfeit pharmaceuticals kill hundreds of thousands
              of people. Surgical implant recalls take weeks when they should
              take seconds. Illiquid assets lock wealth away from everyday
              investors. We build the infrastructure to fix that — using
              blockchain's immutability and traceability where it matters most.
            </p>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.55, delay: 0.1 }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                <Eye className="w-4 h-4 text-primary" />
              </div>
              <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
                Our Vision
              </p>
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              A world where every critical transaction is verifiable by anyone,
              anywhere.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We envision supply chains where every drug has a provable chain of
              custody, every implant has a tamper-proof life record, and every
              real asset can be owned fractionally and transparently. We're
              building toward that future one platform at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
          <motion.div {...fadeUp}>
            <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-3">
              Our Story
            </p>
            <h2 className="text-4xl font-black tracking-tight text-foreground">
              Why We Started
            </h2>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="space-y-5 text-muted-foreground leading-relaxed"
          >
            <p>
              DApp Architects was founded by engineers who spent years inside
              enterprise software and saw a recurring pattern: the industries
              with the highest human stakes — healthcare, financial
              infrastructure, regulated supply chains — were running on the most
              fragile, opaque technology.
            </p>
            <p>
              Legacy systems with no auditability. Siloed databases that
              couldn't talk to each other. Compliance checks that lived in
              spreadsheets. The result was predictable: slow recalls,
              counterfeiting, fraud, and a complete inability to prove anything
              to a regulator without a three-week paper trail.
            </p>
            <p>
              We started DApp Architects to build the alternative. Not
              blockchain-for-blockchain's-sake — but purpose-built,
              compliance-native platforms that use distributed ledger technology
              because it genuinely solves the problem. Every tool we use, we use
              because it's the right tool.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto border-t border-border">
        <motion.div {...fadeUp} className="mb-14">
          <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-3">
            How We Work
          </p>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-foreground">
            What We Stand For
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {values.map((val, i) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-background p-8 group hover:bg-muted/60 transition-colors"
              >
                <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {val.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Team Disciplines */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto border-t border-border">
        <motion.div {...fadeUp} className="mb-14">
          <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-3">
            The Team
          </p>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-foreground">
            Disciplines We Bring
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl">
            We're a lean, senior team. No account managers, no juniors on your
            project. The people you meet are the people who build.
          </p>
        </motion.div>

        <div className="space-y-px bg-border">
          {team.map((t, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-background px-8 py-7 group hover:bg-muted/60 transition-colors"
            >
              <div className="flex items-start gap-4">
                <span className="font-mono text-xs text-muted-foreground pt-0.5 w-6 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-base font-bold text-foreground mb-1">
                    {t.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-16 border-t border-border">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-foreground mb-6">
            Let's build something that holds up.
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            If you're working in a regulated industry and need software that can
            be audited, proven, and trusted — we'd like to talk.
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
          {/* <img
            src="https://media.base44.com/images/public/69e9885e041b94288766a6f8/00f79d8bf_dapp-architects-website-logo.png"
            alt="DApp Architects"
            className="h-7 object-contain"
          /> */}
          <p className="font-mono text-xs text-muted-foreground">
            © 2026 DAPP ARCHITECTS. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}
