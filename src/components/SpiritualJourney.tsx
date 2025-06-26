
import React from 'react';
import { motion } from 'framer-motion';
import { useContentManager } from '../hooks/useContentManager';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SpiritualJourney = () => {
  const { content } = useContentManager();
  const { ref, controls } = useScrollAnimation(0.2);

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <motion.div 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 1,
              staggerChildren: 0.2
            }
          }
        }}
        className="container mx-auto px-6 relative z-10"
      >
        <motion.div 
          className="text-center mb-16"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <h2 className="text-4xl md:text-5xl font-amiri font-bold text-navy-blue-900 mb-6">
            {content.spiritualJourney.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-emerald-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {content.spiritualJourney.stages.map((stage, index) => (
            <motion.div
              key={stage.id}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.8 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { delay: index * 0.2 }
                }
              }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gold-200/30 h-full flex flex-col items-center text-center group-hover:shadow-2xl transition-all duration-500">
                {/* Stage Number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-gold-400 to-gold-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {stage.id}
                </div>

                {/* Icon */}
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {stage.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-cairo font-bold text-navy-blue-900 mb-4 group-hover:text-emerald-700 transition-colors">
                  {stage.title}
                </h3>
                
                <p className="text-gray-600 font-cairo leading-relaxed text-sm flex-grow">
                  {stage.description}
                </p>

                {/* Decorative Elements */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-4 left-4 w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
                  <div className="absolute bottom-4 right-4 w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>
              </div>

              {/* Connection Line (except for last item) */}
              {index < content.spiritualJourney.stages.length - 1 && (
                <div className="hidden xl:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gold-400 to-emerald-400 transform -translate-y-1/2 z-10" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <motion.button
            className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-10 py-4 rounded-full font-cairo font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              y: -3,
              boxShadow: "0 10px 30px rgba(5, 150, 105, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            ابدأ رحلتك الآن
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SpiritualJourney;
