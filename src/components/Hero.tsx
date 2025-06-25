
import React from 'react';
import { motion } from 'framer-motion';
import BackgroundSlider from './BackgroundSlider';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background Slider */}
      <BackgroundSlider />
      
      {/* Animated floating elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          className="absolute top-10 right-10 w-32 h-32 bg-emerald-600 rounded-full blur-3xl"
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-24 h-24 bg-gold-400 rounded-full blur-2xl"
          animate={{ 
            x: [0, 15, 0],
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-1/3 left-1/4 w-16 h-16 bg-emerald-500 rounded-full blur-xl"
          animate={{ 
            y: [0, 25, 0],
            x: [0, -10, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
      
      {/* Mystical stars */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold-400 rounded-full"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Islamic Greeting */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="text-gold-400 font-cairo text-lg mb-2">بسم الله الرحمن الرحيم</p>
        </motion.div>
        
        {/* Main Title */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-amiri font-bold text-white mb-4 cursor-pointer"
            whileHover={{ scale: 1.05, textShadow: "0 0 20px rgba(251, 191, 36, 0.5)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            الشيخ عاصم فايد
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl font-cairo text-gold-400 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            مرشد روحاني ومعلم القرآن الكريم
          </motion.p>
        </motion.div>
        
        {/* Quranic Verse */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gold-400/30 shadow-2xl">
            <motion.p 
              className="text-2xl md:text-3xl font-amiri text-white leading-relaxed mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.2 }}
            >
              ﴿ ذَلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ هُدًى لِّلْمُتَّقِينَ ﴾
            </motion.p>
            <p className="text-gold-400 font-cairo text-lg">
              سورة البقرة - الآية 2
            </p>
          </div>
        </motion.div>
        
        {/* Decorative Element */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
