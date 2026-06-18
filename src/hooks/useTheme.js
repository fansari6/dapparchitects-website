import { useState, useEffect } from 'react';

// Dark is the default. First render is deterministic ('dark') on both the
// server (SSG) and the client, so hydration matches; the stored preference is
// adopted right after mount. The pre-paint script in index.html sets the
// <html> class before React loads, so returning users never see a flash.
const DEFAULT_THEME = 'dark';

export function useTheme() {
  const [theme, setTheme] = useState(DEFAULT_THEME);

  // Adopt a previously saved preference (client only, after first paint).
  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored === 'light' || stored === 'dark') setTheme(stored);
    } catch (e) {
      /* localStorage unavailable — keep default */
    }
  }, []);

  // Reflect the active theme onto <html> and persist it.
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {
      /* ignore */
    }
  }, [theme]);

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return { theme, toggle };
}
