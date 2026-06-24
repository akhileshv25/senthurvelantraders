'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-lg' : 'shadow-sm'
      }`}
    >
      {/* Top bar */}
      <div className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-9 text-xs">
            <div className="flex items-center divide-x divide-gray-700">
              <a href="tel:+917010501482" className="flex items-center gap-1.5 pr-4 hover:text-white transition-colors">
                <Phone className="w-3 h-3" />
                <span className="hidden sm:inline">+91 70105 01482</span>
              </a>
              <a href="tel:+916369054818" className="flex items-center gap-1.5 px-4 hover:text-white transition-colors">
                <Phone className="w-3 h-3" />
                <span className="hidden sm:inline">+91 63690 54818</span>
              </a>
              <a href="mailto:senthurvelavantraders16@gmail.com" className="hidden md:flex items-center gap-1.5 pl-4 hover:text-white transition-colors">
                <Mail className="w-3 h-3" />
                senthurvelavantraders16@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-1.5 text-gray-400">
              <MapPin className="w-3 h-3" />
              <span className="hidden md:inline">Coimbatore, Tamil Nadu, India</span>
              <span className="md:hidden">Coimbatore</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className={`bg-white transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/logo.svg"
                alt="Senthur Velavan Traders"
                className="h-10 w-10 sm:h-11 sm:w-11 object-contain"
              />
              <div>
                <div className="text-sm sm:text-base font-bold text-gray-900 leading-tight tracking-tight">
                  SENTHUR VELAVAN TRADERS
                </div>
                <div className="text-[10px] text-gray-500 font-medium tracking-widest uppercase">
                  Private Limited
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? 'text-primary-500'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                  {pathname === item.href && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary-500 rounded-full"
                    />
                  )}
                </Link>
              ))}
              <Link
                href="/contact"
                className="ml-4 px-5 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm font-semibold rounded-lg transition-colors"
              >
                Get a Quote
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile nav */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden border-t border-gray-100 overflow-hidden"
              >
                <nav className="flex flex-col py-3 space-y-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        pathname === item.href
                          ? 'text-primary-500 bg-primary-500/5'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    href="/contact"
                    className="mx-4 mt-2 px-5 py-2.5 bg-primary-500 text-white text-sm font-semibold rounded-lg text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get a Quote
                  </Link>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Header;
