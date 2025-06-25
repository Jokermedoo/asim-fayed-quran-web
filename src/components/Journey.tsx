
import React from 'react';
import { Heart, BookOpen, Sun, Compass, Star } from 'lucide-react';

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
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-emerald-50 to-white relative overflow-hidden">
      {/* Nature Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 bg-emerald-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gold-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-blue-400 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-amiri font-bold text-navy-blue-900 mb-6 hover:scale-105 transition-transform duration-300">
            رحلة روحانية مع القرآن الكريم
          </h2>
          <p className="text-xl font-cairo text-gray-600 max-w-2xl mx-auto">
            رحلة من خمس مراحل للتقرب من الله عز وجل من خلال كتابه الكريم
          </p>
        </div>
        
        <div className="relative">
          {/* Connection Lines with Animation */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-600 via-gold-500 to-navy-blue-800 transform -translate-y-1/2 animate-pulse"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {journeySteps.map((step, index) => (
              <div key={step.id} className="relative group">
                {/* Step Card with Enhanced Hover Effects */}
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border-t-4 border-emerald-600 cursor-pointer">
                  {/* Step Number */}
                  <div className="absolute -top-4 right-6 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-cairo font-bold text-sm group-hover:bg-gold-500 transition-colors duration-300">
                    {step.id}
                  </div>
                  
                  {/* Icon with Enhanced Animation */}
                  <div className="mb-4 flex justify-center">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                      step.color === 'emerald' ? 'bg-emerald-100 text-emerald-600' :
                      step.color === 'gold' ? 'bg-yellow-100 text-gold-600' :
                      'bg-blue-100 text-navy-blue-800'
                    } group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
                      <step.icon size={28} />
                    </div>
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
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-emerald-400/20 to-gold-400/20 blur-xl -z-10"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
