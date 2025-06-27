
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BackgroundSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const backgrounds = [
    {
      id: 1,
      gradient: 'from-blue-900 via-purple-900 to-indigo-900',
      pattern: 'cosmic'
    },
    {
      id: 2,
      gradient: 'from-emerald-900 via-teal-900 to-cyan-900',
      pattern: 'nature'
    },
    {
      id: 3,
      gradient: 'from-purple-900 via-indigo-900 to-blue-900',
      pattern: 'spiritual'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgrounds.length);
    }, 15000); // Change every 15 seconds

    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <div className="fixed inset-0 z-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className={`absolute inset-0 bg-gradient-to-br ${backgrounds[currentIndex].gradient}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        />
      </AnimatePresence>

      {/* Overlay patterns */}
      <div className="absolute inset-0 opacity-10">
        {backgrounds[currentIndex].pattern === 'cosmic' && (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 2px, transparent 0),
                               radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 0)`,
              backgroundSize: '100px 100px, 50px 50px'
            }}
          />
        )}
        
        {backgrounds[currentIndex].pattern === 'nature' && (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
                               linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%)`,
              backgroundSize: '60px 60px'
            }}
          />
        )}
        
        {backgrounds[currentIndex].pattern === 'spiritual' && (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}
          />
        )}
      </div>

      {/* Additional atmospheric effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
    </div>
  );
};

export default BackgroundSlider;
