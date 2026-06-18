import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 bottom-0 w-px bg-border z-50 hidden lg:block">
      <motion.div
        className="w-full bg-primary origin-top"
        style={{ height: `${progress * 100}%` }}
        transition={{ duration: 0.1 }}
      />
      <motion.div
        className="absolute left-0 w-2 h-2 -translate-x-[3px] rounded-full bg-primary"
        style={{ top: `${progress * 100}%` }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
}
