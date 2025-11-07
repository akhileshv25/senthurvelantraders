import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 20);
      
      // Show header when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-md'
      }`}
    >
      {/* Top Contact Bar */}
      <motion.div
        initial={{ opacity: 0, height: 'auto' }}
        animate={{ 
          opacity: visible ? 1 : 0, 
          height: visible ? 'auto' : 0,
          paddingTop: visible ? '0.5rem' : 0,
          paddingBottom: visible ? '0.5rem' : 0
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="bg-primary-500 text-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center"
              >
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                <span className="hidden sm:inline">+91 9790015428</span>
                <span className="sm:hidden">Call Us</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="hidden md:flex items-center"
              >
                <Mail className="w-4 h-4 mr-1" />
                <span>senthurvelavantraders16@gmail.com</span>
              </motion.div>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              <span className="hidden md:inline">Coimbatore, Tamil Nadu, India</span>
              <span className="md:hidden">Coimbatore, India</span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <motion.img
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              src="/logo.svg"
              alt="Senthur Velavan Traders"
              className="h-12 w-12 sm:h-14 sm:w-14 object-contain"
            />
            <div className="flex flex-col">
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-base sm:text-xl font-bold text-primary-500 leading-tight"
              >
                SENTHUR VELAVAN TRADERS
              </motion.h1>
              <span className="text-xs text-gray-600">PRIVATE LIMITED</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.href}
                  className={`px-4 py-2 rounded-md font-medium transition-all duration-200 relative group ${
                    location.pathname === item.href
                      ? 'text-primary-500'
                      : 'text-gray-700 hover:text-primary-500'
                  }`}
                >
                  {item.name}
                  <motion.span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary-500 ${
                      location.pathname === item.href ? 'opacity-100' : 'opacity-0'
                    }`}
                    whileHover={{ opacity: 1 }}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-primary-500 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-200 overflow-hidden"
            >
              <nav className="flex flex-col py-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item.href}
                      className={`block px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                        location.pathname === item.href
                          ? 'text-primary-500 bg-primary-500/10'
                          : 'text-gray-700 hover:text-primary-500 hover:bg-gray-100'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
