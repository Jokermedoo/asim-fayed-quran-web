
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useContentManager } from '../hooks/useContentManager';
import CosmicBackground from './CosmicBackground';

const EnhancedHero = () => {
  const { content } = useContentManager();
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <CosmicBackground />
      
      {/* Content */}
      <motion.div 
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
        style={{ y, opacity, scale }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, staggerChildren: 0.3 }}
      >
        <motion.div
          className="relative"
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 15 }}
        >
          <motion.h1 
            className="text-6xl md:text-9xl font-amiri font-bold mb-8 leading-tight"
            initial={{ scale: 0, rotateY: -180 }}
            animate={{ scale: 1, rotateY: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-emerald-400 to-blue-400 animate-pulse">
              {content.hero.title}
            </span>
          </motion.h1>
        </motion.div>
        
        <motion.p 
          className="text-2xl md:text-4xl font-cairo text-emerald-200 mb-8 leading-relaxed"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {content.hero.subtitle}
        </motion.p>
        
        <motion.p 
          className="text-lg md:text-2xl font-cairo text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          {content.hero.description}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <motion.button
            onClick={() => navigate('/services')}
            className="relative group bg-gradient-to-r from-gold-400 via-emerald-500 to-blue-500 text-white px-10 py-5 rounded-full font-cairo font-bold text-xl shadow-2xl overflow-hidden"
            whileHover={{ 
              scale: 1.1,
              rotateZ: 5,
              boxShadow: "0 0 50px rgba(251,191,36,0.8)"
            }}
            whileTap={{ scale: 0.9, rotateZ: -5 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: [-200, 400] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            />
            <span className="relative z-10">ابدأ رحلتك التعليمية</span>
          </motion.button>
          
          <motion.button
            onClick={() => navigate('/about')}
            className="relative group border-3 border-emerald-300 text-emerald-300 px-10 py-5 rounded-full font-cairo font-bold text-xl hover:bg-emerald-300 hover:text-gray-900 transition-all duration-500 overflow-hidden"
            whileHover={{ 
              scale: 1.1,
              rotateZ: -5,
              borderColor: '#fbbf24'
            }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className="absolute inset-0 bg-emerald-300 origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">تعرف على الشيخ</span>
          </motion.button>
        </motion.div>

        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {['🌙', '⭐', '✨', '🕌', '📿'].map((icon, i) => (
            <motion.div
              key={i}
              className="absolute text-4xl opacity-70"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${10 + Math.random() * 80}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                rotate: [0, 360],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              {icon}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="relative">
          <div className="w-8 h-14 border-3 border-gold-400 rounded-full flex justify-center overflow-hidden">
            <motion.div 
              className="w-2 h-4 bg-gradient-to-b from-gold-400 to-emerald-400 rounded-full mt-3"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          
          <motion.div
            className="absolute inset-0 w-8 h-14 border-3 border-gold-400 rounded-full"
            animate={{
              boxShadow: [
                '0 0 20px rgba(251,191,36,0.5)',
                '0 0 40px rgba(251,191,36,0.8)',
                '0 0 20px rgba(251,191,36,0.5)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default EnhancedHero;
