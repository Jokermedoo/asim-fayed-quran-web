
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useContentManager } from '../hooks/useContentManager';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import BackgroundSlider from './BackgroundSlider';

const Hero = () => {
  const { content } = useContentManager();
  const { ref, controls } = useScrollAnimation();
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" ref={ref}>
      <BackgroundSlider />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-blue-900/70 via-emerald-800/60 to-navy-blue-800/70" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold-400 rounded-full opacity-70"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.5,
              staggerChildren: 0.3
            }
          }
        }}
      >
        <motion.h1 
          className="text-6xl md:text-8xl font-amiri font-bold text-gold-400 mb-6 leading-tight"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 }
          }}
          whileHover={{ 
            scale: 1.05,
            textShadow: "0 0 40px rgba(251, 191, 36, 0.8)"
          }}
        >
          {content.hero.title}
        </motion.h1>
        
        <motion.p 
          className="text-2xl md:text-3xl font-cairo text-emerald-200 mb-8 leading-relaxed"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          {content.hero.subtitle}
        </motion.p>
        
        <motion.p 
          className="text-lg md:text-xl font-cairo text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          {content.hero.description}
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            className="bg-gradient-to-r from-gold-400 to-gold-500 text-navy-blue-900 px-8 py-4 rounded-full font-cairo font-bold text-lg shadow-2xl"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(251, 191, 36, 0.6)",
              y: -5
            }}
            whileTap={{ scale: 0.95 }}
          >
            ابدأ رحلتك الروحانية
          </motion.button>
          
          <motion.button
            onClick={() => navigate('/about')}
            className="border-2 border-emerald-300 text-emerald-300 px-8 py-4 rounded-full font-cairo font-bold text-lg hover:bg-emerald-300 hover:text-navy-blue-900 transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              y: -5
            }}
            whileTap={{ scale: 0.95 }}
          >
            تعرف على الشيخ
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gold-400 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-gold-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
