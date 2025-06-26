
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
}

const HeroSection = ({ title, subtitle, description }: HeroSectionProps) => {
  const navigate = useNavigate();

  return (
    <motion.div 
      className="relative z-10 text-center px-6 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, staggerChildren: 0.3 }}
    >
      <motion.h1 
        className="text-6xl md:text-9xl font-amiri font-bold mb-8 leading-tight"
        initial={{ scale: 0, rotateY: -180 }}
        animate={{ scale: 1, rotateY: 0 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-emerald-400 to-blue-400 animate-pulse">
          {title}
        </span>
      </motion.h1>
      
      <motion.p 
        className="text-2xl md:text-4xl font-cairo text-emerald-200 mb-8 leading-relaxed"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {subtitle}
      </motion.p>
      
      <motion.p 
        className="text-lg md:text-2xl font-cairo text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        {description}
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
          <span className="relative z-10">استكشف الخدمات</span>
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
    </motion.div>
  );
};

export default HeroSection;
