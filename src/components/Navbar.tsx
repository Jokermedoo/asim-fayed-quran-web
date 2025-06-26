
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, User, Phone, Settings } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'الرئيسية', path: '/', icon: BookOpen },
    { name: 'عن الشيخ', path: '/about', icon: User },
    { name: 'الخدمات', path: '/services', icon: Settings },
    { name: 'تواصل معنا', path: '/contact', icon: Phone },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-gold-400/20' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3 space-x-reverse cursor-pointer"
            onClick={() => navigate('/')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-emerald-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">ع</span>
            </div>
            <div className="text-white">
              <h1 className="font-amiri font-bold text-xl">الشيخ عاصم فايد</h1>
              <p className="font-cairo text-sm text-gold-300">معلم القرآن الكريم</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <motion.button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`relative flex items-center space-x-2 space-x-reverse px-4 py-2 rounded-full font-cairo font-medium transition-all duration-300 ${
                    isActive 
                      ? 'text-gold-400 bg-gold-400/10' 
                      : 'text-white hover:text-gold-400'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Icon size={18} />
                  <span>{item.name}</span>
                  
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 border-2 border-gold-400 rounded-full"
                      layoutId="activeTab"
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden mt-4 pb-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-2">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  
                  return (
                    <motion.button
                      key={item.path}
                      onClick={() => {
                        navigate(item.path);
                        setIsOpen(false);
                      }}
                      className={`flex items-center space-x-3 space-x-reverse px-4 py-3 rounded-xl font-cairo font-medium transition-all duration-300 ${
                        isActive 
                          ? 'text-gold-400 bg-gold-400/10 border border-gold-400/30' 
                          : 'text-white hover:text-gold-400 hover:bg-white/5'
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon size={20} />
                      <span>{item.name}</span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
