
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Star } from 'lucide-react';
import { supabase } from '../integrations/supabase/client';

const EnhancedHero = () => {
  const [heroData, setHeroData] = useState({
    title: 'الشيخ عاصم فايد',
    subtitle: 'درست بالأزهر الشريف وحفظت القرآن الكريم',
    description: 'حاصل على ليسانس اللغة العربية من جامعة الأزهر فرع المنصورة ودبلوم العلوم الشرعية من أكاديمية زاد بالمملكة العربية السعودية. إمام وخطيب ومعلم ومحفظ للقرآن الكريم.',
    show_particles: true
  });

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const { data } = await supabase
          .from('website_settings')
          .select('content')
          .eq('section_name', 'hero')
          .single();
        
        if (data) {
          setHeroData(data.content);
        }
      } catch (error) {
        console.log('Using default hero data');
      }
    };

    fetchHeroData();
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20" />
        {heroData.show_particles && (
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full opacity-30"
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Floating Islamic Pattern */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="w-24 h-24 mx-auto mb-6 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-amber-500 rounded-full opacity-20 animate-pulse" />
              <div className="absolute inset-2 bg-gradient-to-r from-gold-400 to-amber-500 rounded-full opacity-40" />
              <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
                <Star className="w-8 h-8 text-gold-600" />
              </div>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 font-amiri leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-gold-400 to-amber-300 bg-clip-text text-transparent">
              {heroData.title}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            className="text-xl sm:text-2xl lg:text-3xl text-blue-200 mb-8 font-cairo leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {heroData.subtitle}
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed font-cairo max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {heroData.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.a
              href="#about"
              className="px-8 py-4 bg-gradient-to-r from-gold-500 to-amber-600 text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-gold-500/25 transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="w-5 h-5" />
              تعرف علي أكثر
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-bold text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              تواصل معي
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex flex-col items-center text-white/60">
              <span className="text-sm mb-2 font-cairo">اكتشف المزيد</span>
              <ChevronDown className="w-6 h-6" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 opacity-10">
        <div className="w-32 h-32 border-2 border-white rounded-full" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-10">
        <div className="w-24 h-24 border-2 border-white rounded-full" />
      </div>
    </div>
  );
};

export default EnhancedHero;
