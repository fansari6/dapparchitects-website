import React from 'react';
import { motion } from 'framer-motion';

export default function MetricCard({ label, value, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      viewport={{ once: true }}
      className="border border-border p-6 group hover:border-primary/40 transition-colors"
    >
      <p className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
        {label}
      </p>
      <p className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mt-2">
        {value}
      </p>
    </motion.div>
  );
}
