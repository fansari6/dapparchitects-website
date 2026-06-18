import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import HUDLabel from './HUDLabel';

export default function DifferentiatorsGrid({ differentiators }) {
  return (
    <div className="mb-16">
      <HUDLabel text="// KEY TECHNICAL DIFFERENTIATORS" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border mt-6">
        {differentiators.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07, duration: 0.4 }}
            viewport={{ once: true }}
            className="bg-background p-6 group hover:bg-muted transition-colors"
          >
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-foreground group-hover:text-primary transition-colors">
                {item.title}
              </p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
