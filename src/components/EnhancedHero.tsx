
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useContentManager } from '../hooks/useContentManager';
import CosmicBackground from './CosmicBackground';
import HeroSection from './HeroSection';
import FloatingElements from './FloatingElements';
import ScrollIndicator from './ScrollIndicator';

const EnhancedHero = () => {
  const { content } = useContentManager();
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <CosmicBackground />
      
      <motion.div
        style={{ y, opacity, scale }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 15 }}
      >
        <HeroSection 
          title={content.hero.title}
          subtitle={content.hero.subtitle}
          description={content.hero.description}
        />
      </motion.div>

      <FloatingElements />
      <ScrollIndicator />
    </section>
  );
};

export default EnhancedHero;
