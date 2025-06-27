
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Microscope, Users, Video, Clock, Award } from 'lucide-react';
import { useLiveContent } from '../hooks/useLiveContent';

const ServicesSection = () => {
  const { content } = useLiveContent();

  const additionalServices = [
    {
      id: 3,
      title: 'دورات تدريبية',
      description: 'برامج تعليمية شاملة للمعلمين والدعاة',
      features: ['شهادات معتمدة', 'تدريب عملي', 'متابعة مستمرة'],
      icon: '🎓',
      color: 'from-orange-600 to-red-600'
    },
    {
      id: 4,
      title: 'استشارات علمية',
      description: 'إرشاد في مجال الإعجاز العلمي والتفسير',
      features: ['استشارة شخصية', 'بحوث أكاديمية', 'مراجعة علمية'],
      icon: '💡',
      color: 'from-purple-600 to-pink-600'
    }
  ];

  const allServices = [...content.services, ...additionalServices];

  const serviceIcons = {
    '📚': BookOpen,
    '🔬': Microscope,
    '🎓': Users,
    '💡': Award
  };

  return (
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="text-center mb-16">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          خدماتنا المميزة
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          نقدم مجموعة متنوعة من الخدمات التعليمية والاستشارية في مجال القرآن الكريم والإعجاز العلمي
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {allServices.map((service, index) => {
          const IconComponent = serviceIcons[service.icon] || BookOpen;
          
          return (
            <motion.div
              key={service.id}
              className={`bg-gradient-to-br ${service.color} rounded-3xl p-8 text-white relative overflow-hidden group hover:shadow-2xl transition-all duration-500`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">{service.icon}</div>
                  <IconComponent className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/90 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg mb-3">المميزات:</h4>
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-white/90">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">متاح الآن</span>
                    </div>
                    <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full text-sm font-medium transition-colors">
                      تعرف أكثر
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Contact Section */}
      <motion.div
        className="mt-16 bg-white/5 backdrop-blur-lg rounded-3xl p-8 text-center border border-white/10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Video className="w-12 h-12 text-blue-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-4">احجز جلستك الآن</h3>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          للحصول على استشارة شخصية أو الانضمام لدوراتنا التدريبية، تواصل معنا عبر الواتساب
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium transition-colors inline-flex items-center gap-2">
          <span>تواصل معنا</span>
          <span>📱</span>
        </button>
      </motion.div>
    </div>
  );
};

export default ServicesSection;
