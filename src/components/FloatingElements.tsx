
import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements = () => {
  const elements = ['🌙', '⭐', '✨', '🕌', '📿', '🌟', '💫'];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {elements.map((icon, i) => (
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
            opacity: [0.3, 0.8, 0.3],
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
  );
};

export default FloatingElements;
