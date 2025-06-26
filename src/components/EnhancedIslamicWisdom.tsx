
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContentManager } from '../hooks/useContentManager';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import QuoteCard from './QuoteCard';

const EnhancedIslamicWisdom = () => {
  const { content } = useContentManager();
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const { ref, controls } = useScrollAnimation(0.2);

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % content.wisdomQuotes.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [content.wisdomQuotes.length, isPlaying]);

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden min-h-screen">
      {/* Animated Islamic Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(251,191,36,0.3) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(5,150,105,0.3) 0%, transparent 50%),
            radial-gradient(circle at 75% 25%, rgba(59,130,246,0.3) 0%, transparent 50%),
            radial-gradient(circle at 25% 75%, rgba(236,72,153,0.3) 0%, transparent 50%)
          `,
        }} />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [0.5, 1.5, 0.5],
              opacity: [0.2, 0.8, 0.2],
              x: [-50, 50, -50],
              y: [-30, 30, -30],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          >
            <div className={`w-4 h-4 ${
              i % 3 === 0 ? 'bg-gold-400' : i % 3 === 1 ? 'bg-emerald-400' : 'bg-blue-400'
            } ${
              i % 2 === 0 ? 'rounded-full' : 'rotate-45'
            }`} />
          </motion.div>
        ))}
      </div>

      <motion.div 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 1.5, staggerChildren: 0.3 }
          }
        }}
        className="container mx-auto px-6 text-center relative z-10"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50, rotateX: -90 },
            visible: { opacity: 1, y: 0, rotateX: 0 }
          }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-amiri font-bold mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-emerald-400 to-blue-400">
              من كنوز القرآن الكريم
            </span>
          </h2>
          
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-gold-400 via-emerald-400 to-blue-400 mx-auto rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuote}
              initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="relative"
            >
              <QuoteCard 
                arabic={content.wisdomQuotes[currentQuote]?.arabic || ''}
                translation={content.wisdomQuotes[currentQuote]?.translation || ''}
                source={content.wisdomQuotes[currentQuote]?.source || ''}
              />
            </motion.div>
          </AnimatePresence>

          {/* Enhanced Controls */}
          <div className="flex justify-center items-center mt-12 space-x-6 space-x-reverse">
            {/* Play/Pause Button */}
            <motion.button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-12 h-12 bg-gradient-to-r from-gold-400 to-emerald-400 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"
              whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(251,191,36,0.6)" }}
              whileTap={{ scale: 0.9 }}
            >
              {isPlaying ? '⏸️' : '▶️'}
            </motion.button>

            {/* Quote Navigation */}
            <div className="flex space-x-3 space-x-reverse">
              {content.wisdomQuotes.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentQuote(index)}
                  className={`relative w-4 h-4 rounded-full transition-all duration-500 ${
                    index === currentQuote ? 'bg-gold-400' : 'bg-white/30'
                  }`}
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.8 }}
                >
                  {index === currentQuote && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gold-400"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Progress Indicator */}
            <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-gold-400 to-emerald-400 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                key={currentQuote}
                transition={{ duration: 8, ease: "linear" }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default EnhancedIslamicWisdom;
