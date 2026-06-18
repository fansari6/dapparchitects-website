import React, { useState } from 'react';
import { motion } from 'framer-motion';
import HUDLabel from './HUDLabel';

export default function NodeMap({ architecture, projectRef }) {
  const [activeNode, setActiveNode] = useState(null);

  return (
    <div className="py-16 lg:py-24">
      <HUDLabel text={`// ARCHITECTURE FLOW — ${projectRef}`} />
      <h3 className="text-2xl lg:text-3xl font-bold tracking-tight mt-4 mb-12 text-foreground">
        Logic Layer
      </h3>

      {/* Horizontal scrollable node map */}
      <div className="overflow-x-auto pb-4 -mx-6 px-6">
        <div className="flex items-start gap-0 min-w-max">
          {architecture.map((step, i) => (
            <React.Fragment key={i}>
              <motion.div
                onMouseEnter={() => setActiveNode(i)}
                onMouseLeave={() => setActiveNode(null)}
                className="flex flex-col items-center cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
              >
                {/* Node */}
                <div
                  className={`w-16 h-16 lg:w-20 lg:h-20 border-2 flex items-center justify-center transition-all duration-300 ${
                    activeNode === i
                      ? 'border-primary bg-primary/10 scale-110'
                      : 'border-border bg-background'
                  }`}
                >
                  <span
                    className={`font-mono text-sm font-bold transition-colors ${
                      activeNode === i
                        ? 'text-primary'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Label */}
                <div className="mt-4 text-center max-w-[140px]">
                  <p
                    className={`font-mono text-xs font-semibold uppercase tracking-wider transition-colors ${
                      activeNode === i ? 'text-primary' : 'text-foreground'
                    }`}
                  >
                    {step.node}
                  </p>
                  <p
                    className={`text-xs mt-2 leading-relaxed transition-all duration-300 ${
                      activeNode === i
                        ? 'text-foreground opacity-100'
                        : 'text-muted-foreground opacity-70'
                    }`}
                  >
                    {step.desc}
                  </p>
                </div>
              </motion.div>

              {/* Connector line */}
              {i < architecture.length - 1 && (
                <div className="flex items-center pt-8 lg:pt-10 px-2">
                  <div
                    className={`w-12 lg:w-20 h-px transition-colors duration-300 ${
                      activeNode !== null &&
                      (activeNode === i || activeNode === i + 1)
                        ? 'bg-primary'
                        : 'bg-border'
                    }`}
                  />
                  <div
                    className={`w-1.5 h-1.5 rotate-45 -ml-1 transition-colors duration-300 ${
                      activeNode !== null &&
                      (activeNode === i || activeNode === i + 1)
                        ? 'bg-primary'
                        : 'bg-border'
                    }`}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
