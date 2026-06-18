import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle, ArrowRight } from 'lucide-react';
import HUDLabel from './HUDLabel';

const statusConfig = {
  complete: {
    icon: CheckCircle2,
    color: 'text-green-500',
    label: 'COMPLETE',
    bg: 'bg-green-500/10 border-green-500/30',
  },
  next: {
    icon: ArrowRight,
    color: 'text-primary',
    label: 'NEXT',
    bg: 'bg-primary/10 border-primary/30',
  },
  future: {
    icon: Circle,
    color: 'text-muted-foreground',
    label: 'PLANNED',
    bg: 'bg-muted border-border',
  },
};

export default function Roadmap({ roadmap }) {
  return (
    <div className="mb-16">
      <HUDLabel text="// DEVELOPMENT ROADMAP" />
      <div className="mt-6 space-y-px">
        {roadmap.map((item, i) => {
          const cfg = statusConfig[item.status];
          const Icon = cfg.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className={`flex items-start gap-4 p-5 border ${cfg.bg}`}
            >
              <Icon className={`w-4 h-4 mt-0.5 flex-shrink-0 ${cfg.color}`} />
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <span className="font-mono text-xs font-bold tracking-wider text-foreground">
                    {item.phase} — {item.title}
                  </span>
                  <span
                    className={`font-mono text-xs tracking-widest ${cfg.color}`}
                  >
                    [{cfg.label}]
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
