
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Heart, Users } from 'lucide-react';
import { supabase } from '../integrations/supabase/client';

const AboutSection = () => {
  const [aboutData, setAboutData] = useState({
    title: 'عن الشيخ عاصم فايد',
    description: '',
    achievements: []
  });

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const { data } = await supabase
          .from('website_settings')
          .select('content')
          .eq('section_name', 'about')
          .single();
        
        if (data) {
          setAboutData(data.content);
        }
      } catch (error) {
        console.log('Using default about data');
      }
    };

    fetchAboutData();
  }, []);

  const defaultAchievements = [
    {
      icon: '📖',
      title: 'حفظ القرآن الكريم',
      description: 'حفظت كتاب الله في سن صغيرة'
    },
    {
      icon: '🎓',
      title: 'ليسانس اللغة العربية', 
      description: 'جامعة الأزهر فرع المنصورة'
    },
    {
      icon: '📜',
      title: 'دبلوم العلوم الشرعية',
      description: 'أكاديمية زاد بالمملكة العربية السعودية'
    },
    {
      icon: '🕌',
      title: 'إمام وخطيب',
      description: 'شرفني الله بإمامة العديد من المساجد'
    }
  ];

  const achievements = aboutData.achievements?.length > 0 ? aboutData.achievements : defaultAchievements;

  return (
    <div className="py-20 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M30 30l15-15v30zM15 0l15 15L15 30zM45 0l15 15L45 30zM15 30l15 15L15 60zM45 30l15 15L45 60z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
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
              {aboutData.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-amber-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Personal Story */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 font-cairo">رحلتي مع العلم</h3>
                </div>
                <p className="text-gray-700 leading-relaxed font-cairo text-lg">
                  {aboutData.description || 
                    'درست بالأزهر الشريف منذ نعومة أظافري وحفظت القرآن الكريم في سن صغيرة والتحقت بكلية اللغة العربية بجامعة الأزهر فرع المنصورة وحصلت على درجة الليسانس ثم حصلت على دبلوم العلوم الشرعية بأكاديمية زاد بالمملكة العربية السعودية وشرفني الله بإمامة العديد من المساجد وأعمل كمعلم ومحفظ للقرآن الكريم'
                  }
                </p>
              </div>
            </motion.div>

            {/* Achievements Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {achievement.icon}
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2 font-cairo">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-600 text-sm font-cairo leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Statistics */}
          <motion.div
            className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {[
              { icon: BookOpen, label: 'سنوات الخبرة', value: '15+' },
              { icon: Users, label: 'الطلاب', value: '500+' },
              { icon: Award, label: 'الشهادات', value: '5' },
              { icon: Heart, label: 'المساجد', value: '10+' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2 font-cairo">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-cairo text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
