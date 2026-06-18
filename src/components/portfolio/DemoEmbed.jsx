import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import HUDLabel from './HUDLabel';

export default function DemoEmbed({
  demoUrl,
  liveDemo,
  projectTitle,
  isPlaceholder = false,
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="mb-16">
      <div className="flex items-center justify-between mb-4">
        <HUDLabel text="// INTERACTIVE PREVIEW" />
      </div>

      <div
        className="relative border border-border overflow-hidden bg-black"
        style={{ aspectRatio: '12/9' }}
      >
        {/* Topbar chrome */}
        <div className="absolute top-0 left-0 right-0 z-10 flex items-center gap-2 px-4 py-2.5 bg-[#111827] border-b border-white/10">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          </div>
          <span className="font-mono text-xs text-white/40 ml-2 tracking-wider">
            {isPlaceholder ? `${projectTitle}` : liveDemo || 'interactive demo'}
          </span>
        </div>

        {/* Click-to-activate overlay */}
        {!isActive && (
          <div
            className="absolute inset-0 z-20 flex flex-col items-center justify-center cursor-pointer bg-[#0a0d14] group"
            onClick={() => setIsActive(true)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-16 h-16 rounded-full border border-primary/40 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary transition-all duration-300">
                <Play className="w-6 h-6 text-primary ml-1" />
              </div>
              <div className="text-center">
                <p className="font-mono text-xs text-primary tracking-widest uppercase">
                  {isPlaceholder ? 'Demo Preview' : 'Launch Interactive Demo'}
                </p>
                <p className="font-mono text-xs text-white/30 mt-1.5 tracking-wider">
                  {isPlaceholder
                    ? `${projectTitle} — Interactive Demo`
                    : `Click to activate · ${projectTitle} walkthrough`}
                </p>
              </div>
            </motion.div>

            {/* Animated scan lines */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute left-0 right-0 h-px bg-primary"
                  style={{ top: `${12 * (i + 1)}%` }}
                  animate={{ opacity: [0.3, 0.7, 0.3], x: ['-100%', '100%'] }}
                  transition={{
                    duration: 3 + i * 0.4,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Iframe */}
        {isActive && !isPlaceholder && (
          <iframe
            src={demoUrl}
            className="absolute inset-0 w-full h-full border-0 pt-9"
            onLoad={() => setIsLoaded(true)}
            title={`${projectTitle} Demo`}
          />
        )}

        {/* Placeholder activated state */}
        {isActive && isPlaceholder && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0a0d14] pt-9">
            <div className="text-center px-8">
              <div className="w-10 h-10 border border-border flex items-center justify-center mx-auto mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
              </div>
              <p className="font-mono text-xs text-yellow-500 tracking-widest uppercase mb-2">
                Demo In Development
              </p>
              <p className="font-mono text-xs text-white/30 tracking-wide max-w-xs mx-auto">
                The {projectTitle} interactive demo is being prepared. Contact us
                for a live walkthrough.
              </p>
            </div>
          </div>
        )}

        {/* Loading state */}
        {isActive && !isPlaceholder && !isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#0a0d14] z-10 pt-9">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-xs text-white/40 tracking-widest uppercase">
                Loading demo
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
