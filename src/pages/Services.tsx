
import React from 'react';
import { motion } from 'framer-motion';
import { useContentManager } from '../hooks/useContentManager';
import { BookOpen, Microscope, Mosque, Star } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CosmicBackground from '../components/CosmicBackground';

const Services = () => {
  const { content } = useContentManager();

  const iconMap = {
    '📚': BookOpen,
    '🔬': Microscope,
    '🕌': Mosque,
    '🌟': Star
  };

  return (
    <div className="min-h-screen font-cairo bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden" dir="rtl">
      <CosmicBackground />
      <Navbar />
      
      <div className="relative z-10 pt-24">
        {/* Hero Section */}
        <motion.section 
          className="py-20 text-center"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="container mx-auto px-6">
            <motion.h1 
              className="text-5xl md:text-7xl font-amiri font-bold mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-emerald-400 to-blue-400">
                خدماتنا
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              نقدم مجموعة شاملة من الخدمات التعليمية في القرآن الكريم والعلوم الإسلامية
            </motion.p>
          </div>
        </motion.section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {content.services.map((service, index) => {
                const IconComponent = iconMap[service.icon as keyof typeof iconMap] || BookOpen;
                
                return (
                  <motion.div
                    key={service.id}
                    className="relative group"
                    initial={{ opacity: 0, y: 100, rotateY: -45 }}
                    animate={{ opacity: 1, y: 0, rotateY: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 5,
                      z: 50
                    }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className={`relative overflow-hidden rounded-3xl p-8 h-96 bg-gradient-to-br ${service.color} border border-white/10 backdrop-blur-xl`}>
                      {/* Animated Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        {[...Array(15)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-white rounded-full"
                            style={{
                              top: `${Math.random() * 100}%`,
                              left: `${Math.random() * 100}%`,
                            }}
                            animate={{
                              scale: [0.5, 1.5, 0.5],
                              opacity: [0.3, 1, 0.3],
                            }}
                            transition={{
                              duration: 3 + Math.random() * 2,
                              repeat: Infinity,
                              delay: Math.random() * 2,
                            }}
                          />
                        ))}
                      </div>

                      <div className="relative z-10">
                        <motion.div
                          className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.8 }}
                        >
                          <IconComponent size={32} className="text-white" />
                        </motion.div>

                        <h3 className="text-2xl font-amiri font-bold text-white mb-4">
                          {service.title}
                        </h3>

                        <p className="text-white/80 text-lg leading-relaxed mb-6">
                          {service.description}
                        </p>

                        <div className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <motion.div
                              key={featureIndex}
                              className="flex items-center space-x-2 space-x-reverse text-white/70"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.2 + featureIndex * 0.1 }}
                            >
                              <div className="w-2 h-2 bg-gold-400 rounded-full" />
                              <span>{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Hover Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.8 }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <motion.section 
          className="py-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="container mx-auto px-6">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-gold-400/30">
              <h2 className="text-4xl font-amiri font-bold text-white mb-6">
                هل تريد البدء في رحلتك التعليمية؟
              </h2>
              
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                انضم إلينا اليوم واكتشف جمال القرآن الكريم وعظمة الخلق
              </p>
              
              <motion.button
                className="bg-gradient-to-r from-gold-400 via-emerald-500 to-blue-500 text-white px-12 py-4 rounded-full font-bold text-xl shadow-2xl"
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 0 50px rgba(251,191,36,0.8)"
                }}
                whileTap={{ scale: 0.9 }}
              >
                ابدأ الآن
              </motion.button>
            </div>
          </div>
        </motion.section>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
