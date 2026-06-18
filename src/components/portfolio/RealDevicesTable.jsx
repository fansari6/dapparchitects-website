import React from 'react';
import { motion } from 'framer-motion';
import { Database } from 'lucide-react';
import HUDLabel from './HUDLabel';

export default function RealDevicesTable({ devices }) {
  const categories = [...new Set(devices.map((d) => d.category))];

  return (
    <div className="mb-16">
      <HUDLabel text="// REAL DEVICES. REAL DATA. — FDA GUDID" />
      <p className="text-sm text-muted-foreground mt-3 mb-6 flex items-center gap-2">
        <Database className="w-3.5 h-3.5 text-primary flex-shrink-0" />
        Pre-loaded with real devices from the FDA Global Unique Device
        Identification Database (GUDID)
      </p>

      <div className="border border-border overflow-hidden">
        <div className="grid grid-cols-[1fr_auto_auto_auto] bg-muted border-b border-border">
          <div className="px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Device
          </div>
          <div className="px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground border-l border-border whitespace-nowrap">
            Manufacturer
          </div>
          <div className="px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground border-l border-border whitespace-nowrap">
            Category
          </div>
          <div className="px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground border-l border-border whitespace-nowrap">
            FDA Clearance
          </div>
        </div>

        {devices.map((device, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: i * 0.04, duration: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-[1fr_auto_auto_auto] border-b border-border last:border-0 hover:bg-muted transition-colors"
          >
            <div className="px-4 py-3 text-xs text-foreground leading-snug">
              {device.device}
            </div>
            <div className="px-4 py-3 border-l border-border">
              <span className="text-xs text-muted-foreground whitespace-nowrap">
                {device.manufacturer}
              </span>
            </div>
            <div className="px-4 py-3 border-l border-border">
              <span
                className={`font-mono text-xs whitespace-nowrap px-2 py-0.5 border ${
                  device.category === 'Cardiac'
                    ? 'border-red-200 text-red-600 bg-red-50'
                    : device.category === 'Neurosurgery'
                      ? 'border-primary/20 text-primary bg-primary/5'
                      : 'border-border text-muted-foreground bg-muted'
                }`}
              >
                {device.category}
              </span>
            </div>
            <div className="px-4 py-3 border-l border-border">
              <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">
                {device.clearance}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
