import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarCheck } from 'lucide-react';
import HUDLabel from './HUDLabel';

// Gated demo CTA. Sends visitors to the on-site /book page (Cal.com embed
// wrapped in the site's own chrome) rather than a live environment with shared
// credentials or an off-site booking page.
/**
 * @param {{ title?: string }} props
 */
export default function RequestDemo({ title }) {
  return (
    <div className="mb-16">
      <HUDLabel text="// REQUEST A DEMO" />

      <div className="mt-6 border border-border p-8 bg-muted/30">
        <p className="text-lg text-foreground leading-relaxed max-w-2xl">
          {title
            ? `Want to see ${title} in action?`
            : 'Want to see this platform in action?'}{' '}
          We run guided walkthroughs tailored to your organization — in person or
          over Zoom. Book a time that works for you.
        </p>

        <Link
          to="/book"
          className="inline-flex items-center gap-2 mt-6 bg-primary text-primary-foreground px-6 py-3 font-semibold text-sm hover:bg-primary/90 transition-colors rounded"
        >
          <CalendarCheck className="w-4 h-4" />
          Book a Demo
        </Link>
      </div>
    </div>
  );
}
