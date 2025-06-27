
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Users, Heart } from 'lucide-react';
import { supabase } from '../integrations/supabase/client';

const ServicesSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data } = await supabase
          .from('interactive_content')
          .select('*')
          .eq('type', 'service')
          .eq('is_active', true)
          .order('order_index');
        
        if (data && data.length > 0) {
          setServices(data);
        } else {
          // Default services if none in database
          setServices([
            {
              id: 1,
              data: {
                icon: '📖',
                description: 'تعليم وتحفيظ القرآن الكريم بالتجويد الصحيح',
                features: ['تعليم التجويد', 'الحفظ المتقن', 'المراجعة الدورية'],
                color: 'from-emerald-600 to-teal-600'
              },
              title: 'تحفيظ القرآن الكريم'
            },
            {
              id: 2,
              data: {
                icon: '✍️',
                description: 'تعليم اللغة العربية وقواعدها وبلاغتها',
                features: ['النحو والصرف', 'البلاغة', 'الإعراب'],
                color: 'from-blue-600 to-indigo-600'
              },
              title: 'دروس اللغة العربية'
            }
          ]);
        }
      } catch (error) {
        console.log('Using default services');
      }
    };

    fetchServices();
  }, []);

  const iconMap = {
    '📖': BookOpen,
    '✍️': GraduationCap,
    '👥': Users,
    '❤️': Heart
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-600 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-600 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-amiri">
              الخدمات التعليمية
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-amber-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 font-cairo max-w-3xl mx-auto">
              أقدم خدمات تعليمية متنوعة في مجال القرآن الكريم واللغة العربية والعلوم الشرعية
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.data.icon] || BookOpen;
              
              return (
                <motion.div
                  key={service.id}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:-translate-y-2 h-full">
                    {/* Service Icon */}
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.data.color || 'from-blue-600 to-indigo-600'} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Service Title */}
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 font-cairo">
                      {service.title}
                    </h3>

                    {/* Service Description */}
                    <p className="text-gray-600 mb-6 font-cairo leading-relaxed">
                      {service.data.description}
                    </p>

                    {/* Service Features */}
                    {service.data.features && service.data.features.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="text-sm font-bold text-gray-800 mb-3 font-cairo">
                          المميزات الرئيسية:
                        </h4>
                        <ul className="space-y-2">
                          {service.data.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600 font-cairo">
                              <div className="w-2 h-2 bg-gradient-to-r from-gold-500 to-amber-500 rounded-full ml-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              );
            })}

            {/* Add Service Card (visible only when services are few) */}
            {services.length < 6 && (
              <motion.div
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: services.length * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 h-full flex flex-col items-center justify-center text-center border-2 border-dashed border-gray-300 hover:border-gray-400 transition-colors duration-300">
                  <div className="w-16 h-16 rounded-xl bg-gray-300 flex items-center justify-center mb-6">
                    <Heart className="w-8 h-8 text-gray-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-600 mb-4 font-cairo">
                    خدمات أخرى
                  </h3>
                  <p className="text-gray-500 font-cairo text-sm">
                    المزيد من الخدمات التعليمية قريباً بإذن الله
                  </p>
                </div>
              </motion.div>
            )}
          </div>

          {/* CTA Section */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 lg:p-12 text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 font-cairo">
                هل تريد البدء في رحلة التعلم؟
              </h3>
              <p className="text-blue-100 mb-8 font-cairo text-lg">
                تواصل معي الآن للحصول على استشارة مجانية وبدء رحلتك التعليمية
              </p>
              <motion.a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gold-500 to-amber-600 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart className="w-5 h-5 ml-2" />
                تواصل معي الآن
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
