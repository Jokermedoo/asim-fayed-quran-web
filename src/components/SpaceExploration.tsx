
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContentManager } from '../hooks/useContentManager';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SpaceExploration = () => {
  const { content } = useContentManager();
  const { ref, controls } = useScrollAnimation(0.2);
  const [activeExploration, setActiveExploration] = useState(0);

  const explorations = [
    {
      id: 1,
      title: 'استكشاف الكون الداخلي',
      description: 'رحلة عبر أعماق النفس والروح لاكتشاف السكينة الحقيقية',
      image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb',
      particles: '✨',
      color: 'from-purple-900 to-blue-900'
    },
    {
      id: 2,
      title: 'شلالات الهدوء',
      description: 'انسياب السكينة كالماء العذب في قلوب المؤمنين',
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716',
      particles: '💧',
      color: 'from-blue-800 to-teal-700'
    },
    {
      id: 3,
      title: 'قمم الإيمان',
      description: 'التسلق نحو أعلى درجات اليقين والتوحيد',
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
      particles: '🏔️',
      color: 'from-gray-700 to-blue-800'
    },
    {
      id: 4,
      title: 'غابات التأمل',
      description: 'الخضوع في رحاب الطبيعة والتأمل في خلق الله',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
      particles: '🌲',
      color: 'from-green-800 to-emerald-700'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveExploration((prev) => (prev + 1) % explorations.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden min-h-screen">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeExploration}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.2, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 2 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${explorations[activeExploration].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </AnimatePresence>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-30, 30],
              x: [-20, 20],
              rotate: [0, 360],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {explorations[activeExploration].particles}
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
            transition: { 
              duration: 1.2,
              staggerChildren: 0.2
            }
          }
        }}
        className="container mx-auto px-6 relative z-10"
      >
        <motion.div 
          className="text-center mb-16"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <h2 className="text-5xl md:text-7xl font-amiri font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-emerald-400 to-blue-400 mb-8">
            استكشف عوالم السكينة
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-gold-400 via-emerald-400 to-blue-400 mx-auto rounded-full mb-8" />
        </motion.div>

        {/* Interactive Exploration Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {explorations.map((exploration, index) => (
            <motion.div
              key={exploration.id}
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
              onClick={() => setActiveExploration(index)}
              className={`relative overflow-hidden rounded-3xl h-80 cursor-pointer transform-gpu ${
                activeExploration === index ? 'ring-4 ring-gold-400' : ''
              }`}
            >
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${exploration.color} opacity-90`}
              />
              
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
                    scale: activeExploration === index ? [1, 1.2, 1] : 1,
                    rotate: activeExploration === index ? [0, 10, -10, 0] : 0
                  }}
                  transition={{ duration: 2, repeat: activeExploration === index ? Infinity : 0 }}
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
          ))}
        </div>

        {/* Interactive Progress Indicator */}
        <div className="flex justify-center space-x-4 space-x-reverse mb-12">
          {explorations.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveExploration(index)}
              className={`relative w-4 h-4 rounded-full transition-all duration-500 ${
                activeExploration === index ? 'bg-gold-400 scale-150' : 'bg-white/30'
              }`}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
            >
              {activeExploration === index && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-gold-400"
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.5, 1] }}
                  transition={{ duration: 0.5 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Call to Action with 3D Effect */}
        <motion.div 
          className="text-center"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <motion.button
            className="relative bg-gradient-to-r from-gold-400 via-emerald-500 to-blue-500 text-white px-12 py-6 rounded-full font-cairo font-bold text-xl shadow-2xl overflow-hidden"
            whileHover={{ 
              scale: 1.1,
              rotateX: 15,
              rotateY: 5,
              boxShadow: "0 25px 50px rgba(0,0,0,0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            style={{ 
              transformStyle: 'preserve-3d',
              perspective: 1000
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: [-100, 400] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            />
            ابدأ الاستكشاف الآن
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SpaceExploration;
