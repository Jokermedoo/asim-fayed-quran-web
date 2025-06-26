
import React from 'react';
import { motion } from 'framer-motion';
import { useContentManager } from '../hooks/useContentManager';
import { BookOpen, Microscope, Headphones, Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CosmicBackground from '../components/CosmicBackground';

const Services = () => {
  const { content } = useContentManager();

  const iconMap = {
    '📚': BookOpen,
    '🔬': Microscope,
    '🕌': Headphones,
    '🎤': Users,
  };

  return (
    <div className="min-h-screen font-cairo" dir="rtl">
      <CosmicBackground />
      <Navbar />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-amiri font-bold mb-8"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-emerald-400 to-blue-400">
                خدماتنا التعليمية
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              نقدم خدمات متنوعة في تعليم القرآن الكريم والإعجاز العلمي
            </motion.p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {content.services.map((service, index) => {
                const Icon = iconMap[service.icon as keyof typeof iconMap] || BookOpen;
                
                return (
                  <motion.div
                    key={service.id}
                    className={`relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br ${service.color} shadow-2xl border border-white/10`}
                    initial={{ opacity: 0, y: 50, rotateY: -30 }}
                    animate={{ opacity: 1, y: 0, rotateY: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 5,
                      boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
                    }}
                  >
                    <div className="absolute inset-0 bg-black/20"></div>
                    
                    <div className="relative z-10 text-white">
                      <motion.div 
                        className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6"
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-8 h-8" />
                      </motion.div>
                      
                      <h3 className="text-2xl font-bold mb-4 font-amiri">{service.title}</h3>
                      <p className="text-lg mb-6 opacity-90 leading-relaxed">{service.description}</p>
                      
                      <div className="space-y-2">
                        {service.features.map((feature, i) => (
                          <motion.div 
                            key={i}
                            className="flex items-center space-x-2 space-x-reverse"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: (index * 0.2) + (i * 0.1) }}
                          >
                            <span className="w-2 h-2 bg-gold-400 rounded-full"></span>
                            <span className="text-sm">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                      
                      <motion.button
                        className="mt-8 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full font-bold hover:bg-white/30 transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        اعرف المزيد
                      </motion.button>
                    </div>

                    {/* Floating particles */}
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white/30 rounded-full"
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
              })}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-6">
          <div className="container mx-auto text-center">
            <motion.div
              className="bg-gradient-to-r from-gold-400/20 via-emerald-400/20 to-blue-400/20 backdrop-blur-xl rounded-3xl p-12 border border-gold-400/30"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl font-amiri font-bold text-white mb-6">
                ابدأ رحلتك التعليمية اليوم
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                انضم إلينا في رحلة استكشاف القرآن الكريم والإعجاز العلمي
              </p>
              <motion.button
                className="bg-gradient-to-r from-gold-400 via-emerald-500 to-blue-500 text-white px-12 py-4 rounded-full font-bold text-xl shadow-2xl"
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 0 40px rgba(251,191,36,0.6)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                تواصل معنا الآن
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Services;
