
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'أحمد محمد',
    role: 'طالب حفظ',
    text: 'الشيخ عاصم فايد معلم متميز، أسلوبه في التعليم سهل ومبسط. تعلمت أحكام التجويد بطريقة رائعة وحفظت عدة سور بفضل الله ثم بفضل طريقته المتميزة.',
    rating: 5,
    image: '👨‍🎓'
  },
  {
    id: 2,
    name: 'فاطمة أحمد',
    role: 'طالبة تجويد',
    text: 'جزاك الله خيراً يا شيخ عاصم. الدروس واضحة ومفهومة، والشرح مبسط جداً. أصبحت أقرأ القرآن بطريقة أفضل والحمد لله.',
    rating: 5,
    image: '👩‍🎓'
  },
  {
    id: 3,
    name: 'محمد عبدالله',
    role: 'طالب مراجعة',
    text: 'الشيخ عاصم ساعدني في مراجعة ما حفظته من القرآن وتثبيته. أسلوبه مشجع وصبور، وهذا ما نحتاجه في رحلة الحفظ.',
    rating: 5,
    image: '👨‍💼'
  },
  {
    id: 4,
    name: 'خديجة سالم',
    role: 'أم طالب',
    text: 'ابني يحب دروس الشيخ عاصم كثيراً. لاحظت تحسناً كبيراً في قراءته للقرآن، وأصبح أكثر حباً لكتاب الله. بارك الله فيك يا شيخ.',
    rating: 5,
    image: '👩‍💼'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-navy-blue-900 to-navy-blue-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-amiri font-bold mb-6">
            آراء الطلاب
          </h2>
          <p className="text-xl font-cairo text-gold-400 max-w-2xl mx-auto">
            شهادات من طلابنا الكرام الذين تعلموا معنا القرآن الكريم
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gold-400/30">
              <div className="text-center">
                {/* Profile */}
                <div className="mb-6">
                  <div className="text-6xl mb-4">
                    {testimonials[currentIndex].image}
                  </div>
                  <h3 className="text-2xl font-cairo font-bold text-gold-400 mb-2">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-white/80 font-cairo">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
                
                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={24}
                      className={`${
                        i < testimonials[currentIndex].rating
                          ? 'text-gold-400 fill-current'
                          : 'text-white/30'
                      }`}
                    />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <blockquote className="text-xl md:text-2xl font-cairo leading-relaxed text-white mb-8">
                  "{testimonials[currentIndex].text}"
                </blockquote>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gold-500 text-white rounded-full flex items-center justify-center hover:bg-gold-600 transition-colors duration-300 shadow-lg"
            >
              <ChevronRight size={24} />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gold-500 text-white rounded-full flex items-center justify-center hover:bg-gold-600 transition-colors duration-300 shadow-lg"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2 space-x-reverse">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-gold-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
