
import React, { useState } from 'react';
import { Play, Pause, Volume2, Download } from 'lucide-react';

const lessons = [
  {
    id: 1,
    title: 'درس أحكام النون الساكنة والتنوين',
    duration: '15:30',
    description: 'شرح مفصل لأحكام النون الساكنة والتنوين الأربعة'
  },
  {
    id: 2,
    title: 'درس أحكام الميم الساكنة',
    duration: '12:45',
    description: 'تعلم أحكام الميم الساكنة الثلاثة بالأمثلة التطبيقية'
  },
  {
    id: 3,
    title: 'درس المدود وأنواعها',
    duration: '18:20',
    description: 'شرح شامل للمدود الطبيعية والفرعية'
  },
  {
    id: 4,
    title: 'درس أحكام الراء',
    duration: '10:15',
    description: 'متى ترقق الراء ومتى تفخم مع الأمثلة'
  }
];

const AudioPlayer = () => {
  const [currentPlaying, setCurrentPlaying] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlay = (lessonId: number) => {
    if (currentPlaying === lessonId) {
      setCurrentPlaying(null);
    } else {
      setCurrentPlaying(lessonId);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-amiri font-bold text-navy-blue-900 mb-6">
            الدروس الصوتية
          </h2>
          <p className="text-xl font-cairo text-gray-600 max-w-2xl mx-auto">
            استمع لدروس التجويد والقرآن الكريم بصوت الشيخ عاصم فايد
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-emerald-100">
            <div className="space-y-6">
              {lessons.map((lesson) => (
                <div key={lesson.id} className="bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors duration-300 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 space-x-reverse">
                      <button
                        onClick={() => togglePlay(lesson.id)}
                        className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center hover:bg-emerald-700 transition-colors duration-300 shadow-lg"
                      >
                        {currentPlaying === lesson.id ? <Pause size={20} /> : <Play size={20} />}
                      </button>
                      
                      <div>
                        <h3 className="text-lg font-cairo font-semibold text-navy-blue-900 mb-1">
                          {lesson.title}
                        </h3>
                        <p className="text-gray-600 font-cairo text-sm">
                          {lesson.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 space-x-reverse text-gray-500">
                      <span className="font-cairo text-sm">{lesson.duration}</span>
                      <button className="text-emerald-600 hover:text-emerald-700 transition-colors">
                        <Volume2 size={18} />
                      </button>
                      <button className="text-emerald-600 hover:text-emerald-700 transition-colors">
                        <Download size={18} />
                      </button>
                    </div>
                  </div>
                  
                  {currentPlaying === lesson.id && (
                    <div className="mt-4">
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                        <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '35%' }}></div>
                      </div>
                      <div className="flex justify-between text-xs font-cairo text-gray-500">
                        <span>5:25</span>
                        <span>{lesson.duration}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudioPlayer;
