
import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-emerald-900 via-emerald-800 to-emerald-700 overflow-hidden">
      {/* Dynamic Background Elements - Forest */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-32 h-32 bg-emerald-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-gold-400 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-emerald-500 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-gold-300 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
      
      {/* Waterfall Effect */}
      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-blue-200 to-transparent opacity-30 animate-pulse"></div>
      <div className="absolute left-4 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-300 to-transparent opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Stars Pattern (Space element) */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-gold-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/5 w-1 h-1 bg-gold-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 right-1/5 w-1.5 h-1.5 bg-gold-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-gold-300 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/6 left-2/3 w-1.5 h-1.5 bg-gold-500 rounded-full animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Islamic Greeting */}
        <div className="mb-8 animate-fade-in">
          <p className="text-gold-400 font-cairo text-lg mb-2">بسم الله الرحمن الرحيم</p>
        </div>
        
        {/* Main Title */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h1 className="text-5xl md:text-7xl font-amiri font-bold text-white mb-4 hover:scale-105 transition-transform duration-300">
            الشيخ عاصم فايد
          </h1>
          <p className="text-xl md:text-2xl font-cairo text-gold-400 mb-6">
            مرشد روحاني ومعلم القرآن الكريم
          </p>
        </div>
        
        {/* Quranic Verse */}
        <div className="mb-12 animate-fade-in hover:scale-105 transition-transform duration-500" style={{ animationDelay: '0.6s' }}>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gold-400/30 shadow-2xl">
            <p className="text-2xl md:text-3xl font-amiri text-white leading-relaxed mb-4">
              ﴿ ذَلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ هُدًى لِّلْمُتَّقِينَ ﴾
            </p>
            <p className="text-gold-400 font-cairo text-lg">
              سورة البقرة - الآية 2
            </p>
          </div>
        </div>
        
        {/* Decorative Element */}
        <div className="animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
