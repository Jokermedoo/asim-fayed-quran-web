
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { supabase } from '../integrations/supabase/client';

const EnhancedIslamicWisdom = () => {
  const [quotes, setQuotes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const { data } = await supabase
          .from('interactive_content')
          .select('*')
          .eq('type', 'quote')
          .eq('is_active', true)
          .order('order_index');
        
        if (data && data.length > 0) {
          setQuotes(data);
        }
      } catch (error) {
        console.log('Using default quotes');
        setQuotes([
          {
            id: 1,
            data: {
              arabic: '﴿ وَهُوَ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ بِالْحَقِّ ﴾',
              translation: 'وهو الذي خلق السماوات والأرض بالحق',
              source: 'سورة الأنعام - الآية 73'
            }
          }
        ]);
      }
    };

    fetchQuotes();
  }, []);

  const nextQuote = () => {
    setCurrentIndex((prev) => (prev + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  // Auto-advance quotes
  useEffect(() => {
    if (quotes.length > 1) {
      const interval = setInterval(nextQuote, 6000);
      return () => clearInterval(interval);
    }
  }, [quotes.length]);

  if (quotes.length === 0) {
    return null;
  }

  const currentQuote = quotes[currentIndex];

  return (
    <div className="py-20 bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="islamic-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M10,0 L20,10 L10,20 L0,10 Z" fill="white" fillOpacity="0.1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#islamic-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-amiri">
              آيات من القرآن الكريم
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-amber-500 mx-auto"></div>
          </motion.div>

          {/* Quote Display */}
          <div className="relative">
            <motion.div
              key={currentIndex}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Arabic Text */}
              <motion.div
                className="text-3xl lg:text-5xl font-bold text-white mb-8 font-amiri leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {currentQuote.data.arabic}
              </motion.div>

              {/* Translation */}
              <motion.div
                className="text-xl lg:text-2xl text-blue-200 mb-6 font-cairo"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {currentQuote.data.translation}
              </motion.div>

              {/* Source */}
              <motion.div
                className="text-lg text-gold-300 font-cairo"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {currentQuote.data.source}
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 text-6xl text-white/10 font-amiri">
                ﴿
              </div>
              <div className="absolute bottom-4 left-4 text-6xl text-white/10 font-amiri">
                ﴾
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            {quotes.length > 1 && (
              <>
                <button
                  onClick={prevQuote}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextQuote}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          {/* Indicators */}
          {quotes.length > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {quotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gold-400 scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnhancedIslamicWisdom;
