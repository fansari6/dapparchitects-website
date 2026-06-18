import React from 'react';

export default function HUDLabel({ text, className = '' }) {
  return (
    <span
      className={`font-mono text-xs tracking-widest text-muted-foreground uppercase ${className}`}
    >
      {text}
    </span>
  );
}
