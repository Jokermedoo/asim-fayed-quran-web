
import React from 'react';
import { motion } from 'framer-motion';

const ScrollIndicator = () => {
  return (
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
  );
};

export default ScrollIndicator;
