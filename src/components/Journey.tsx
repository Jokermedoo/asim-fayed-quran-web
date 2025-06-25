
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, BookOpen, Sun, Compass, Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const journeySteps = [
  {
    id: 1,
    title: 'النية الصادقة',
    description: 'البداية بنية خالصة لله في رحلة القرب من كتابه الكريم',
    icon: Heart,
    color: 'emerald'
  },
  {
    id: 2,
    title: 'التلاوة بخشوع',
    description: 'قراءة القرآن بتدبر وحضور قلب وخشوع',
    icon: BookOpen,
    color: 'gold'
  },
  {
    id: 3,
    title: 'التدبر والتأمل',
    description: 'التفكر في آيات الله والاستفادة من حكمها ومواعظها',
    icon: Sun,
    color: 'navy-blue'
  },
  {
    id: 4,
    title: 'الاستقامة',
    description: 'تطبيق تعاليم القرآن في الحياة اليومية والسير على نهجه',
    icon: Compass,
    color: 'emerald'
  },
  {
    id: 5,
    title: 'السكينة والطمأنينة',
    description: 'الوصول لحالة من السلام الداخلي والقرب من الله',
    icon: Star,
    color: 'gold'
  }
];

const Journey = () => {
  const { ref: titleRef, controls: titleControls } = useScrollAnimation(0.3);
  const { ref: stepsRef, controls: stepsControls } = useScrollAnimation(0.1);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-emerald-50 to-gold-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div 
          className="absolute top-10 left-10 w-40 h-40 bg-emerald-600 rounded-full blur-3xl"
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-32 h-32 bg-gold-400 rounded-full blur-3xl"
          animate={{ 
            x: [0, -40, 0],
            y: [0, 20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          ref={titleRef}
          initial="hidden"
          animate={titleControls}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 1, ease: "easeOut" }
            }
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-amiri font-bold text-navy-blue-900 mb-6">
            رحلة روحانية مع القرآن الكريم
          </h2>
          <p className="text-xl font-cairo text-gray-600 max-w-2xl mx-auto">
            رحلة من خمس مراحل للتقرب من الله عز وجل من خلال كتابه الكريم
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Animated connection line */}
          <motion.div 
            className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-600 via-gold-500 to-navy-blue-800 transform -translate-y-1/2"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          
          <motion.div 
            ref={stepsRef}
            initial="hidden"
            animate={stepsControls}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-5 gap-8"
          >
            {journeySteps.map((step, index) => (
              <motion.div 
                key={step.id} 
                variants={itemVariants}
                className="relative group"
                whileHover={{ 
                  y: -10,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border-t-4 border-emerald-600 cursor-pointer group-hover:border-gold-500">
                  {/* Step Number */}
                  <motion.div 
                    className="absolute -top-4 right-6 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-cairo font-bold text-sm group-hover:bg-gold-500 transition-colors duration-300"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.id}
                  </motion.div>
                  
                  {/* Icon */}
                  <div className="mb-4 flex justify-center">
                    <motion.div 
                      className={`w-16 h-16 rounded-full flex items-center justify-center ${
                        step.color === 'emerald' ? 'bg-emerald-100 text-emerald-600' :
                        step.color === 'gold' ? 'bg-yellow-100 text-gold-600' :
                        'bg-blue-100 text-navy-blue-800'
                      }`}
                      whileHover={{ 
                        scale: 1.25, 
                        rotate: 12,
                        boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <step.icon size={28} />
                    </motion.div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-amiri font-bold text-navy-blue-900 mb-3 text-center group-hover:text-emerald-700 transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 font-cairo text-center leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {step.description}
                  </p>
                  
                  {/* Hover Glow Effect */}
                  <motion.div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-emerald-400/20 to-gold-400/20 blur-xl -z-10"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
