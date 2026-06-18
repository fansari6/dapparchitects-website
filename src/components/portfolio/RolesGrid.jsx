import React from 'react';
import { motion } from 'framer-motion';
import HUDLabel from './HUDLabel';

export default function RolesGrid({ roles, projectRef }) {
  return (
    <div className="mb-16">
      <HUDLabel text={`// FIVE ROLES. ONE LEDGER. — ${projectRef}`} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-px bg-border mt-6">
        {roles.map((role, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            viewport={{ once: true }}
            className="bg-background p-6 hover:bg-muted transition-colors group"
          >
            <div className="flex items-start gap-4">
              <span className="text-2xl leading-none mt-0.5">{role.icon}</span>
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-wider text-foreground group-hover:text-primary transition-colors">
                  {role.title}
                </p>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  {role.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
