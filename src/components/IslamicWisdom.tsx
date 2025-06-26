
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContentManager } from '../hooks/useContentManager';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const IslamicWisdom = () => {
  const { content } = useContentManager();
  const [currentQuote, setCurrentQuote] = useState(0);
  const { ref, controls } = useScrollAnimation(0.2);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % content.wisdomQuotes.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [content.wisdomQuotes.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-navy-blue-900 via-emerald-800 to-navy-blue-800 relative overflow-hidden">
      {/* Mystical Background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gold-400 rounded-full"
            style={{
              top: `${15 + Math.random() * 70}%`,
              left: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 2, 0.5],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <motion.div 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 1.2 }
          }
        }}
        className="container mx-auto px-6 text-center relative z-10"
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-amiri font-bold text-gold-400 mb-16"
          whileHover={{ scale: 1.05, textShadow: "0 0 30px rgba(251, 191, 36, 0.5)" }}
        >
          من كنوز القرآن الكريم
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuote}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.9 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-gold-400/30 shadow-2xl"
            >
              <motion.p 
                className="text-3xl md:text-4xl font-amiri text-white leading-relaxed mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.3 }}
              >
                {content.wisdomQuotes[currentQuote]?.arabic}
              </motion.p>
              
              <motion.p 
                className="text-xl font-cairo text-gold-300 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                {content.wisdomQuotes[currentQuote]?.translation}
              </motion.p>
              
              <motion.p 
                className="text-emerald-300 font-cairo"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                {content.wisdomQuotes[currentQuote]?.source}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          {/* Quote Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2 space-x-reverse">
            {content.wisdomQuotes.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentQuote(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentQuote ? 'bg-gold-400 scale-125' : 'bg-white/30'
                }`}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default IslamicWisdom;
