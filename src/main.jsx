import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from '@/routes';
import '@/index.css';

// vite-react-ssg owns the router. In dev + production hydration this mounts the
// app; at build time it renders each route (and each getStaticPaths path) to
// static HTML.
export const createRoot = ViteReactSSG({ routes });
