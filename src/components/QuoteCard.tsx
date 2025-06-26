
import React from 'react';
import { motion } from 'framer-motion';

interface QuoteCardProps {
  arabic: string;
  translation: string;
  source: string;
}

const QuoteCard = ({ arabic, translation, source }: QuoteCardProps) => {
  return (
    <motion.div
      className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-gold-400/30 shadow-2xl relative overflow-hidden"
      whileHover={{ scale: 1.02, rotateX: 5 }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Animated Border */}
      <motion.div
        className="absolute inset-0 rounded-3xl"
        animate={{
          background: [
            'linear-gradient(0deg, rgba(251,191,36,0.3), rgba(5,150,105,0.3))',
            'linear-gradient(90deg, rgba(5,150,105,0.3), rgba(59,130,246,0.3))',
            'linear-gradient(180deg, rgba(59,130,246,0.3), rgba(251,191,36,0.3))',
            'linear-gradient(270deg, rgba(251,191,36,0.3), rgba(5,150,105,0.3))'
          ]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="relative z-10">
        <motion.p 
          className="text-3xl md:text-5xl font-amiri text-white leading-relaxed mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          {arabic}
        </motion.p>
        
        <motion.p 
          className="text-xl md:text-2xl font-cairo text-gold-300 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          {translation}
        </motion.p>
        
        <motion.p 
          className="text-lg text-emerald-300 font-cairo"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          {source}
        </motion.p>
      </div>

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gold-400 rounded-full opacity-60"
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${10 + Math.random() * 80}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.3, 1, 0.3],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </motion.div>
  );
};

export default QuoteCard;
