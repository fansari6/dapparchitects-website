import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Clock } from 'lucide-react';
import Navigation from '@/components/portfolio/Navigation';
import Seo from '@/components/Seo';
import { site } from '@/content/site';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55 },
};

const interests = [
  'Blockchain / Smart Contracts',
  'Pharmaceutical Supply Chain',
  'Medical Device Tracking',
  'Tokenized Real Estate',
  'Regulatory Compliance Engineering',
  'Full-Stack Development',
  'Cloud Infrastructure',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    interest: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || 'Failed to send');
      }

      setStatus('sent');

      // Reset the form and return to idle state after a few seconds
      setTimeout(() => {
        setForm({
          name: '',
          email: '',
          company: '',
          interest: '',
          message: '',
        });
        setStatus('idle');
      }, 5000);
    } catch (err) {
      console.error('Contact form error:', err);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Contact"
        description="Tell DApp Architects about your project. We build blockchain and full-stack platforms for regulated industries and respond to every serious inquiry within one business day."
        path="/contact"
      />
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-16 max-w-7xl mx-auto">
        <motion.div {...fadeUp}>
          <span className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-primary border border-primary/30 bg-primary/5 px-3 py-1.5 rounded mb-8">
            Contact Us
          </span>
        </motion.div>
        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-foreground leading-none max-w-3xl"
        >
          Let's Start
          <br />
          <span className="text-primary">a Conversation.</span>
        </motion.h1>
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-muted-foreground mt-6 max-w-xl leading-relaxed"
        >
          Tell us about your project. We respond to every serious inquiry within
          one business day.
        </motion.p>
      </section>

      {/* Main content */}
      <section className="pb-24 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
          {/* Left: contact info */}
          <motion.div {...fadeUp} className="space-y-8">
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-6">
                Reach Us Directly
              </p>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">
                      Email
                    </p>
                    <a
                      href={`mailto:${site.contactEmail}`}
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {site.contactEmail}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">
                      Response Time
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      Within 1 business day
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">
                      Operations
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      Remote-first, global clients
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-8">
              <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-4">
                We Work With
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  'Healthcare & Pharma companies',
                  'Medical device manufacturers',
                  'Real estate & fintech platforms',
                  'Regulated-industry startups',
                  'Enterprise IT departments',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div {...fadeUp} transition={{ duration: 0.55, delay: 0.15 }}>
            {status === 'sent' ? (
              <div className="border border-border bg-muted/40 p-12 text-center">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Message Sent
                </h3>
                <p className="text-sm text-muted-foreground">
                  Thanks for reaching out. We'll be in touch within one business
                  day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-mono text-xs tracking-wider uppercase text-muted-foreground mb-2">
                      Full Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs tracking-wider uppercase text-muted-foreground mb-2">
                      Email <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs tracking-wider uppercase text-muted-foreground mb-2">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Acme Corp"
                    className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs tracking-wider uppercase text-muted-foreground mb-2">
                    Area of Interest
                  </label>
                  <select
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors appearance-none"
                  >
                    <option value="">Select a service area…</option>
                    {interests.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-xs tracking-wider uppercase text-muted-foreground mb-2">
                    Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, timeline, and any specific requirements…"
                    className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="text-sm text-red-500 border border-red-500/30 bg-red-500/5 px-4 py-3 rounded">
                    Something went wrong sending your message. Please try again,
                    or email{' '}
                    <a
                      href={`mailto:${site.contactEmail}`}
                      className="underline"
                    >
                      {site.contactEmail}
                    </a>{' '}
                    directly.
                  </div>
                )}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 font-semibold text-sm hover:bg-primary/90 transition-colors disabled:opacity-60"
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                  {status !== 'sending' && <ArrowRight className="w-4 h-4" />}
                </button>
              </form>
            )}
          </motion.div>
        </div>
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
