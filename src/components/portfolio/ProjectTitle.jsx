import React from 'react';

/**
 * Renders the project title in Designer Block font.
 * First word = solid fill (#ff8000). Second word = outlined (stroke only).
 * The split comes from product data: `brand: { solid, outlined }`.
 */
export default function ProjectTitle({ brand, className = '' }) {
  if (!brand) return null;
  const { solid, outlined } = brand;

  return (
    <span
      className={`font-designer-block leading-none ${className}`}
      style={{ letterSpacing: '0.04em' }}
    >
      <span style={{ color: '#ff8000' }}>{solid}</span>
      <span
        className="text-foreground"
        style={{
          WebkitTextStroke: '2px #ff8000',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {outlined}
      </span>
    </span>
  );
}
