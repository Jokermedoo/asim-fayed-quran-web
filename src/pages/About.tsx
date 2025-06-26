
import React from 'react';
import { motion } from 'framer-motion';
import { useContentManager } from '../hooks/useContentManager';
import { Award, BookOpen, Users, Star } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CosmicBackground from '../components/CosmicBackground';

const About = () => {
  const { content } = useContentManager();

  const stats = [
    { icon: BookOpen, value: '25+', label: 'سنة من التدريس' },
    { icon: Users, value: '5000+', label: 'طالب تخرج' },
    { icon: Award, value: '50+', label: 'شهادة وإجازة' },
    { icon: Star, value: '100+', label: 'محاضرة' }
  ];

  return (
    <div className="min-h-screen font-cairo bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden" dir="rtl">
      <CosmicBackground />
      <Navbar />
      
      <div className="relative z-10 pt-24">
        {/* Hero Section */}
        <motion.section 
          className="py-20"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h1 className="text-5xl md:text-7xl font-amiri font-bold mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-emerald-400 to-blue-400">
                    {content.about.title}
                  </span>
                </h1>
                
                <h2 className="text-2xl md:text-3xl font-cairo text-emerald-300 mb-6">
                  {content.about.subtitle}
                </h2>
                
                <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
                  {content.about.description}
                </p>
                
                <motion.button
                  className="bg-gradient-to-r from-gold-400 via-emerald-500 to-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(251,191,36,0.6)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  تواصل معنا
                </motion.button>
              </motion.div>

              {/* Image/Avatar */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <div className="relative w-80 h-80 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-gold-400 via-emerald-500 to-blue-500 rounded-full animate-pulse" />
                  <div className="absolute inset-2 bg-gradient-to-br from-gray-800 to-blue-900 rounded-full flex items-center justify-center">
                    <div className="text-8xl">👨‍🏫</div>
                  </div>
                  
                  {/* Floating Elements */}
                  {['📖', '⭐', '🌙', '✨'].map((emoji, index) => (
                    <motion.div
                      key={index}
                      className="absolute text-4xl"
                      style={{
                        top: `${20 + Math.sin(index * Math.PI / 2) * 60}%`,
                        left: `${20 + Math.cos(index * Math.PI / 2) * 60}%`,
                      }}
                      animate={{
                        y: [-10, 10, -10],
                        rotate: [0, 360],
                        scale: [0.8, 1.2, 0.8],
                      }}
                      transition={{
                        duration: 4 + index,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    >
                      {emoji}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section 
          className="py-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 text-center border border-white/20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-r from-gold-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <Icon size={20} className="text-white" />
                    </motion.div>
                    
                    <motion.h3 
                      className="text-3xl font-bold text-gold-400 mb-2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                    >
                      {stat.value}
                    </motion.h3>
                    
                    <p className="text-white/80 text-sm">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Achievements Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.h2 
              className="text-4xl md:text-6xl font-amiri font-bold text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-emerald-400 to-blue-400">
                الإنجازات والشهادات
              </span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {content.about.achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20"
                  initial={{ opacity: 0, rotateY: -45 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 + index * 0.2 }}
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: 5,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="text-5xl">{achievement.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {achievement.title}
                      </h3>
                      <p className="text-white/80 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <motion.section 
          className="py-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-gold-400/30">
                <motion.p 
                  className="text-2xl md:text-3xl font-amiri text-white leading-relaxed mb-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1.7 }}
                >
                  "إن في تدبر آيات الله في الكون والكتاب لأعظم طريق لمعرفة الخالق عز وجل"
                </motion.p>
                
                <motion.div 
                  className="w-24 h-1 bg-gradient-to-r from-gold-400 to-emerald-400 mx-auto"
                  initial={{ width: 0 }}
                  animate={{ width: 96 }}
                  transition={{ duration: 1, delay: 2 }}
                />
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
