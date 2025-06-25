
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const backgroundImages = [
  'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=3634&auto=format&fit=crop', // Forest
  'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=3880&auto=format&fit=crop', // Space
  'https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=4000&auto=format&fit=crop', // Waterfall
  'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=3648&auto=format&fit=crop', // River mountains
];

const BackgroundSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 6000); // Change every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.3, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${backgroundImages[currentIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </AnimatePresence>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-blue-900/80 via-emerald-800/60 to-gold-600/40" />
    </div>
  );
};

export default BackgroundSlider;
