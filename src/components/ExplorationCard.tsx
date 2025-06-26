
import React from 'react';
import { motion } from 'framer-motion';

interface ExplorationCardProps {
  exploration: {
    id: number;
    title: string;
    description: string;
    image: string;
    particles: string;
    color: string;
  };
  isActive: boolean;
  onClick: () => void;
  index: number;
}

const ExplorationCard = ({ exploration, isActive, onClick, index }: ExplorationCardProps) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.8, rotateY: -90 },
        visible: { 
          opacity: 1, 
          scale: 1, 
          rotateY: 0,
          transition: { delay: index * 0.2 }
        }
      }}
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        z: 50,
        transition: { duration: 0.3 }
      }}
      onClick={onClick}
      className={`relative overflow-hidden rounded-3xl h-80 cursor-pointer transform-gpu ${
        isActive ? 'ring-4 ring-gold-400' : ''
      }`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${exploration.color} opacity-90`} />
      
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${exploration.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
        <motion.div
          className="text-4xl mb-4"
          animate={{ 
            scale: isActive ? [1, 1.2, 1] : 1,
            rotate: isActive ? [0, 10, -10, 0] : 0
          }}
          transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
        >
          {exploration.particles}
        </motion.div>
        
        <h3 className="text-2xl font-amiri font-bold mb-4">
          {exploration.title}
        </h3>
        
        <p className="text-lg font-cairo opacity-90 leading-relaxed">
          {exploration.description}
        </p>
      </div>

      {/* Particle Effect on Hover */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        whileHover={{
          background: [
            'radial-gradient(circle at 20% 20%, rgba(251,191,36,0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 80%, rgba(5,150,105,0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, rgba(59,130,246,0.3) 0%, transparent 50%)'
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
  );
};

export default ExplorationCard;
