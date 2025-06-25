
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Moon, Sun, Star, Compass } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const spiritualSteps = [
  {
    id: 1,
    title: 'التوبة والإنابة',
    description: 'بداية الطريق بالتوبة النصوح والعودة إلى الله بقلب صادق',
    icon: Heart,
    color: 'emerald',
    verse: '﴿ إِنَّ اللَّهَ يُحِبُّ التَّوَّابِينَ وَيُحِبُّ الْمُتَطَهِّرِينَ ﴾'
  },
  {
    id: 2,
    title: 'الذكر والتسبيح',
    description: 'إحياء القلب بذكر الله والتسبيح في كل وقت وحين',
    icon: Moon,
    color: 'gold',
    verse: '﴿ وَسَبِّحْ بِحَمْدِ رَبِّكَ قَبْلَ طُلُوعِ الشَّمْسِ وَقَبْلَ الْغُرُوبِ ﴾'
  },
  {
    id: 3,
    title: 'الصلاة والخشوع',
    description: 'إقامة الصلاة بحضور قلب وخشوع وتدبر',
    icon: Sun,
    color: 'navy-blue',
    verse: '﴿ قَدْ أَفْلَحَ الْمُؤْمِنُونَ الَّذِينَ هُمْ فِي صَلَاتِهِمْ خَاشِعُونَ ﴾'
  },
  {
    id: 4,
    title: 'التدبر والتفكر',
    description: 'التفكر في آيات الله في الكون والقرآن الكريم',
    icon: Star,
    color: 'emerald',
    verse: '﴿ إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافِ اللَّيْلِ وَالنَّهَارِ لَآيَاتٍ ﴾'
  },
  {
    id: 5,
    title: 'السكينة والقرب',
    description: 'الوصول لحالة من السكينة والطمأنينة والقرب من الله',
    icon: Compass,
    color: 'gold',
    verse: '﴿ أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ ﴾'
  }
];

const SpiritualJourney = () => {
  const { ref: titleRef, controls: titleControls } = useScrollAnimation(0.3);
  const { ref: stepsRef, controls: stepsControls } = useScrollAnimation(0.1);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
        duration: 0.8
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-emerald-50/30 to-gold-50/30 relative overflow-hidden">
      {/* Mystical Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 bg-emerald-600 rounded-full blur-3xl"
          animate={{ 
            x: [0, 80, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-32 right-20 w-48 h-48 bg-gold-400 rounded-full blur-3xl"
          animate={{ 
            x: [0, -60, 0],
            y: [0, 40, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.4, 1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 3
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-32 h-32 bg-navy-blue-800 rounded-full blur-2xl"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 5
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          ref={titleRef}
          initial="hidden"
          animate={titleControls}
          variants={{
            hidden: { opacity: 0, y: -60, scale: 0.9 },
            visible: { 
              opacity: 1, 
              y: 0,
              scale: 1,
              transition: { duration: 1.2, ease: "easeOut" }
            }
          }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-amiri font-bold text-navy-blue-900 mb-8"
            whileHover={{ scale: 1.05, textShadow: "0 0 30px rgba(59, 130, 246, 0.3)" }}
          >
            رحلة إلى الله
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl font-cairo text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            خمس مراحل روحانية للتقرب من الله عز وجل والوصول إلى السكينة والطمأنينة
          </motion.p>
          
          {/* Decorative Islamic Pattern */}
          <motion.div 
            className="mt-8 flex justify-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-emerald-600 to-transparent rounded-full"></div>
            <div className="w-3 h-3 bg-gold-500 rounded-full mx-4"></div>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent rounded-full"></div>
          </motion.div>
        </motion.div>
        
        <div className="relative">
          {/* Spiritual Connection Line */}
          <motion.div 
            className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 via-gold-500 to-navy-blue-800 transform -translate-y-1/2 rounded-full opacity-30"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 0.3 }}
            transition={{ duration: 3, delay: 1 }}
          />
          
          <motion.div 
            ref={stepsRef}
            initial="hidden"
            animate={stepsControls}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-6"
          >
            {spiritualSteps.map((step, index) => (
              <motion.div 
                key={step.id} 
                variants={itemVariants}
                className="relative group"
                whileHover={{ 
                  y: -15,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-700 border border-emerald-100 cursor-pointer group-hover:border-gold-400 relative overflow-hidden">
                  {/* Mystical Glow */}
                  <motion.div 
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-gradient-to-br from-emerald-400 via-gold-400 to-navy-blue-600"
                    whileHover={{ scale: 1.05 }}
                  />
                  
                  {/* Step Number with Islamic Styling */}
                  <motion.div 
                    className="absolute -top-4 right-8 w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-full flex items-center justify-center font-cairo font-bold text-lg shadow-lg group-hover:from-gold-500 group-hover:to-gold-600 transition-all duration-500"
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {step.id}
                  </motion.div>
                  
                  {/* Icon with Mystical Effect */}
                  <div className="mb-6 flex justify-center">
                    <motion.div 
                      className={`w-20 h-20 rounded-full flex items-center justify-center relative ${
                        step.color === 'emerald' ? 'bg-emerald-100 text-emerald-600' :
                        step.color === 'gold' ? 'bg-yellow-100 text-gold-600' :
                        'bg-blue-100 text-navy-blue-800'
                      }`}
                      whileHover={{ 
                        scale: 1.4, 
                        rotate: 15,
                        boxShadow: "0 15px 35px rgba(0,0,0,0.15)"
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <step.icon size={32} />
                      
                      {/* Mystical Particles */}
                      <motion.div 
                        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
                        animate={{
                          boxShadow: [
                            "0 0 0 0 rgba(16, 185, 129, 0.4)",
                            "0 0 0 10px rgba(16, 185, 129, 0)",
                            "0 0 0 0 rgba(16, 185, 129, 0)"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-amiri font-bold text-navy-blue-900 mb-4 text-center group-hover:text-emerald-700 transition-colors duration-500">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 font-cairo text-center leading-relaxed mb-6 group-hover:text-gray-800 transition-colors duration-500">
                    {step.description}
                  </p>
                  
                  {/* Quranic Verse */}
                  <motion.div 
                    className="bg-gradient-to-r from-emerald-50 to-gold-50 rounded-xl p-4 border border-emerald-200"
                    whileHover={{ scale: 1.02 }}
                  >
                    <p className="text-navy-blue-800 font-amiri text-center text-sm leading-relaxed">
                      {step.verse}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpiritualJourney;
