
import React from 'react';
import { BookOpen, Volume2, Brain, RotateCcw, Award } from 'lucide-react';

const journeySteps = [
  {
    id: 1,
    title: 'الفاتحة',
    description: 'تعلم قراءة فاتحة الكتاب بإتقان وفهم معانيها العظيمة',
    icon: BookOpen,
    color: 'emerald'
  },
  {
    id: 2,
    title: 'التجويد',
    description: 'إتقان أحكام التجويد وتطبيق القواعد الصحيحة في التلاوة',
    icon: Volume2,
    color: 'gold'
  },
  {
    id: 3,
    title: 'الحفظ',
    description: 'حفظ سور القرآن الكريم بطريقة منهجية ومدروسة',
    icon: Brain,
    color: 'navy-blue'
  },
  {
    id: 4,
    title: 'المراجعة',
    description: 'مراجعة ما تم حفظه لترسيخه في الذاكرة وعدم نسيانه',
    icon: RotateCcw,
    color: 'emerald'
  },
  {
    id: 5,
    title: 'الإتقان',
    description: 'الوصول لمستوى الإتقان في التلاوة والحفظ',
    icon: Award,
    color: 'gold'
  }
];

const Journey = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-amiri font-bold text-navy-blue-900 mb-6">
            رحلة تعلم القرآن الكريم
          </h2>
          <p className="text-xl font-cairo text-gray-600 max-w-2xl mx-auto">
            رحلة متكاملة من خمس مراحل لتعلم وحفظ القرآن الكريم بإتقان
          </p>
        </div>
        
        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-600 via-gold-500 to-navy-blue-800 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {journeySteps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Step Card */}
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-emerald-600 group">
                  {/* Step Number */}
                  <div className="absolute -top-4 right-6 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-cairo font-bold text-sm">
                    {step.id}
                  </div>
                  
                  {/* Icon */}
                  <div className="mb-4 flex justify-center">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                      step.color === 'emerald' ? 'bg-emerald-100 text-emerald-600' :
                      step.color === 'gold' ? 'bg-yellow-100 text-gold-600' :
                      'bg-blue-100 text-navy-blue-800'
                    } group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon size={28} />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-amiri font-bold text-navy-blue-900 mb-3 text-center">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 font-cairo text-center leading-relaxed">
                    {step.description}
                  </p>
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
