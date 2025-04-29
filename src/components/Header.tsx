import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Gift } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Gift className="text-primary-600" size={30} />
          <span className="font-poppins font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-500">
            GiftSage
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Home', 'Recommend', 'About'].map((item) => {
            const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
            const isActive = location.pathname === path;
            
            return (
              <Link 
                key={item}
                to={path}
                className={`font-medium transition-colors relative ${
                  isActive ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                {item}
                {isActive && (
                  <motion.div
                    layoutId="navIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
          <Link to="/recommend" className="btn btn-primary">
            Find Gifts
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 hover:text-primary-600 focus:outline-none" 
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className={`fixed inset-0 bg-white z-40 pt-20 md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, x: '-100%' }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : '-100%' }}
        transition={{ duration: 0.3 }}
      >
        <nav className="container-custom flex flex-col space-y-6 py-8">
          {['Home', 'Recommend', 'About'].map((item) => {
            const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
            const isActive = location.pathname === path;
            
            return (
              <Link 
                key={item}
                to={path}
                className={`text-2xl font-medium px-4 py-2 rounded-lg ${
                  isActive ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={closeMenu}
              >
                {item}
              </Link>
            );
          })}
          <Link to="/recommend" className="btn btn-primary w-full text-center mt-6" onClick={closeMenu}>
            Find Gifts
          </Link>
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;