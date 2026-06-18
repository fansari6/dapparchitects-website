import React from 'react';
import HUDLabel from './HUDLabel';

export default function TechStackLedger({ techStack, projectRef }) {
  return (
    <div className="border border-border p-6">
      <HUDLabel text={`// TECH STACK LEDGER — ${projectRef}`} />
      <div className="mt-4 space-y-0">
        {techStack.map((tech, i) => (
          <div
            key={tech}
            className="flex items-center gap-3 py-3 border-b border-border last:border-0"
          >
            <span className="font-mono text-xs text-muted-foreground w-6">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="w-1 h-1 rounded-full bg-primary" />
            <span className="font-mono text-sm text-foreground tracking-wide">
              {tech}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
