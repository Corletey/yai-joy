import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Droplet, Flower, Menu, X } from 'lucide-react';
import K from '../constants';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const menuRef = useRef(null);

  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth', // This ensures smooth scrolling
        block: 'start', // Scroll to the top of the section
      });
    }
    setActiveSection(id); // Update the active section state
  };

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.6, // Trigger when 60% of the section is in view
    });

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
      className="fixed top-0 left-0 w-full z-50 bg-primary text-white backdrop-blur-md shadow-md"
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center relative" ref={menuRef}>
        <motion.div
          whileHover={{ scale: 1.05, rotate: 3 }}
          className="flex items-center space-x-3 cursor-pointer group"
          onClick={() => scrollToSection('home')}
        >
          <Flower className="w-8 h-8 text-white group-hover:text-accent transition-colors" />
          <h1 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
            Joya Foods
          </h1>
        </motion.div>

        <div className="hidden md:flex space-x-6 items-center">
          {K.NAVLINKS.map((link) => (
            <motion.button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              whileHover={{ scale: 1.1, translateY: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`text-white transition-all ${
                activeSection === link.id ? 'font-bold text-accent' : 'hover:text-accent'
              }`}
            >
              {link.name}
            </motion.button>
          ))}
        </div>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
        >
          {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </motion.button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 w-full bg-primary text-white shadow-md md:hidden"
            >
              {K.NAVLINKS.map((link) => (
                <motion.button
                  key={link.id}
                  onClick={() => {
                    scrollToSection(link.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full p-4 hover:bg-accent/20 ${
                    activeSection === link.id ? 'bg-accent/30' : ''
                  }`}
                >
                  {link.name}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
