import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Sun, Moon } from 'lucide-react';
import { products } from '@/content/products';
import { useTheme } from '@/hooks/useTheme';
// @ts-ignore
import logo from '@/assets/dapp-architects-website-logo.png';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, toggle } = useTheme();

  const isHome = location.pathname === '/';

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="flex items-center justify-between px-6 lg:px-16 h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src={logo}
              alt="DApp Architects"
              className="h-16 object-contain rounded-xl"
            />
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-1 ml-auto mr-4">
            <Link
              to="/"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium tracking-wide transition-colors ${
                isHome
                  ? 'text-primary bg-primary/10'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <Home className="w-3 h-3" />
              Home
            </Link>

            <Link
              to="/about"
              className={`px-3 py-1.5 rounded text-xs font-medium tracking-wide transition-colors ${
                location.pathname === '/about'
                  ? 'text-primary bg-primary/10'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              About Us
            </Link>

            <div className="w-px h-4 bg-border mx-2" />

            <Link
              to="/products"
              className={`px-3 py-1.5 rounded text-xs font-medium tracking-wide transition-colors ${
                location.pathname === '/products'
                  ? 'text-primary bg-primary/10'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              Products
            </Link>

            {products.map((p) => {
              const isActive = location.pathname === `/products/${p.slug}`;
              return (
                <Link
                  key={p.slug}
                  to={`/products/${p.slug}`}
                  className={`px-3 py-1.5 rounded text-xs font-medium tracking-wide transition-colors ${
                    isActive
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {p.title}
                </Link>
              );
            })}

            <div className="w-px h-4 bg-border mx-2" />

            <Link
              to="/contact"
              className={`px-3 py-1.5 rounded text-xs font-medium tracking-wide transition-colors ${
                location.pathname === '/contact'
                  ? 'text-primary bg-primary/10'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              Contact
            </Link>

            <Link
              to="/book"
              className="ml-2 px-3 py-1.5 rounded text-xs font-semibold tracking-wide bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Book a Demo
            </Link>
          </nav>

          {/* Theme toggle */}
          <button
            onClick={toggle}
            className="p-2 rounded text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-14 left-0 right-0 z-40 bg-background border-b border-border shadow-lg md:hidden"
          >
            <nav className="flex flex-col px-4 py-3 gap-1">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-2 px-3 py-2.5 rounded text-sm font-medium transition-colors ${
                  isHome
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                <Home className="w-4 h-4" />
                Home
              </Link>

              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className={`flex items-center px-3 py-2.5 rounded text-sm font-medium transition-colors ${
                  location.pathname === '/about'
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                About Us
              </Link>

              <Link
                to="/products"
                onClick={() => setIsOpen(false)}
                className={`flex items-center px-3 py-2.5 rounded text-sm font-medium transition-colors ${
                  location.pathname === '/products'
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                Products
              </Link>

              <div className="h-px bg-border my-1" />

              {products.map((p) => {
                const isActive = location.pathname === `/products/${p.slug}`;
                return (
                  <Link
                    key={p.slug}
                    to={`/products/${p.slug}`}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-primary bg-primary/10'
                        : 'text-foreground hover:bg-muted'
                    }`}
                  >
                    <span>{p.title}</span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {p.ref}
                    </span>
                  </Link>
                );
              })}

              <div className="h-px bg-border my-1" />

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={`flex items-center px-3 py-2.5 rounded text-sm font-medium transition-colors ${
                  location.pathname === '/contact'
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                Contact
              </Link>

              <Link
                to="/book"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center px-3 py-2.5 mt-1 rounded text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Book a Demo
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
