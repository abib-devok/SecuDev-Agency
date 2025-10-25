'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next-intl/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import ThemeSwitcher from './ThemeSwitcher';

const navLinks = [
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'À propos', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    closed: { opacity: 0, x: '-100%' },
    open: { opacity: 1, x: 0 },
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-brand-blue text-white z-50 shadow-lg">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-headings font-bold">
          SecuDev
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-brand-green transition-colors duration-300">
              {link.name}
            </Link>
          ))}
          <ThemeSwitcher />
        </div>

        {/* Mobile Burger Menu */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Ouvrir le menu">
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="md:hidden bg-brand-blue/95 absolute top-full left-0 w-full h-screen"
          >
            <div className="flex flex-col items-center justify-center h-1/2 space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-2xl hover:text-brand-green transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
