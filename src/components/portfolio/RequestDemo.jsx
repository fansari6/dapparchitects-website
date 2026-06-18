import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HUDLabel from './HUDLabel';

// Gated demo CTA. Replaces the public credentials block — visitors request a
// guided demo rather than logging into a live environment with shared creds.
export default function RequestDemo({ title }) {
  return (
    <div className="mb-16">
      <HUDLabel text="// REQUEST A DEMO" />

      <div className="mt-6 border border-border p-8 bg-muted/30">
        <p className="text-lg text-foreground leading-relaxed max-w-2xl">
          {title
            ? `Want to see ${title} in action?`
            : 'Want to see this platform in action?'}{' '}
          We run guided walkthroughs tailored to your organisation — access to a
          live environment is provided on request.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 mt-6 bg-primary text-primary-foreground px-6 py-3 font-semibold text-sm hover:bg-primary/90 transition-colors rounded"
        >
          Request a Demo
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}