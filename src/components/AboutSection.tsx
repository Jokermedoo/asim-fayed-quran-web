
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Users, Star } from 'lucide-react';
import { useLiveContent } from '../hooks/useLiveContent';

const AboutSection = () => {
  const { content } = useLiveContent();

  const features = [
    {
      icon: BookOpen,
      title: 'تفسير معاصر',
      description: 'ربط الآيات القرآنية بالعلوم الحديثة',
      color: 'text-blue-400'
    },
    {
      icon: Award,
      title: 'خبرة عميقة',
      description: 'سنوات من التدريس والبحث الأكاديمي',
      color: 'text-yellow-400'
    },
    {
      icon: Users,
      title: 'تعليم تفاعلي',
      description: 'منهج حديث يجمع بين التراث والمعاصرة',
      color: 'text-green-400'
    },
    {
      icon: Star,
      title: 'إعجاز علمي',
      description: 'اكتشاف عظمة الخلق في الكون',
      color: 'text-purple-400'
    }
  ];

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
          {content.about.title}
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {content.about.description}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <feature.icon className={`w-12 h-12 mx-auto mb-4 ${feature.color}`} />
            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-6">الإنجازات والشهادات</h3>
          <div className="space-y-4">
            {content.about.achievements.map((achievement) => (
              <div key={achievement.id} className="flex items-start gap-4 bg-white/5 rounded-lg p-4">
                <span className="text-2xl">{achievement.icon}</span>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">{achievement.title}</h4>
                  <p className="text-gray-300">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-3xl p-8 backdrop-blur-lg border border-white/10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">رؤيتنا</h3>
          <p className="text-gray-300 text-lg leading-relaxed text-center">
            نسعى لتقديم فهم عميق للقرآن الكريم من خلال ربط الآيات بالاكتشافات العلمية الحديثة، 
            مما يعزز الإيمان ويوضح عظمة الخلق الإلهي في عصرنا الحالي.
          </p>
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-6 py-3">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-medium">التميز في التعليم الإسلامي</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
