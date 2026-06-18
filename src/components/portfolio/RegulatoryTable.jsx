RegulatoryTable;
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import HUDLabel from './HUDLabel';

export default function RegulatoryTable({ frameworks }) {
  return (
    <div className="mb-16">
      <HUDLabel text="// REGULATORY ALIGNMENT" />
      <div className="mt-6 border border-border overflow-hidden">
        <div className="grid grid-cols-[1fr_auto_1fr] bg-muted border-b border-border">
          <div className="px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Regulation
          </div>
          <div className="px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground border-x border-border">
            Region
          </div>
          <div className="px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Coverage
          </div>
        </div>
        {frameworks.map((fw, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: i * 0.06, duration: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-[1fr_auto_1fr] border-b border-border last:border-0 hover:bg-muted transition-colors"
          >
            <div className="px-4 py-3 flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              <span className="text-xs text-foreground leading-snug">
                {fw.name}
              </span>
            </div>
            <div className="px-4 py-3 border-x border-border flex items-center">
              <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">
                {fw.region}
              </span>
            </div>
            <div className="px-4 py-3 flex items-center">
              <span className="text-xs text-muted-foreground leading-snug">
                {fw.coverage}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
