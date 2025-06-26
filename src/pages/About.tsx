
import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Star, Users, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const { ref, controls } = useScrollAnimation();
  const navigate = useNavigate();

  const achievements = [
    { icon: <Users className="w-8 h-8" />, number: "50,000+", label: "متابع ومحب" },
    { icon: <BookOpen className="w-8 h-8" />, number: "1,000+", label: "درس ومحاضرة" },
    { icon: <Heart className="w-8 h-8" />, number: "25+", label: "سنة من العطاء" },
    { icon: <Star className="w-8 h-8" />, number: "100+", label: "كتاب ومؤلف" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-blue-900 via-emerald-800 to-navy-blue-800" dir="rtl">
      {/* Header with Back Button */}
      <div className="relative z-10 p-6">
        <Button
          onClick={() => navigate('/')}
          variant="ghost"
          className="text-white hover:bg-white/10 flex items-center gap-2"
        >
          <ArrowRight className="w-4 h-4" />
          العودة للرئيسية
        </Button>
      </div>

      <motion.div 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 1,
              staggerChildren: 0.3
            }
          }
        }}
        className="container mx-auto px-6 py-16"
      >
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <h1 className="text-5xl md:text-7xl font-amiri font-bold text-gold-400 mb-6">
            الشيخ عاصم فايد
          </h1>
          <p className="text-2xl font-cairo text-emerald-200 max-w-3xl mx-auto leading-relaxed">
            عالم وداعية إسلامي، مرشد روحاني، ومؤلف لعشرات الكتب في التنمية الروحية والتطوير الذاتي
          </p>
        </motion.div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <Card className="bg-white/10 backdrop-blur-lg border-gold-400/30 h-full">
              <CardContent className="p-8">
                <h2 className="text-3xl font-amiri font-bold text-gold-400 mb-6">
                  من هو الشيخ عاصم؟
                </h2>
                <div className="space-y-4 text-white/90 font-cairo leading-relaxed">
                  <p>
                    الشيخ عاصم فايد هو عالم وداعية إسلامي متخصص في التنمية الروحية والتطوير الذاتي من منظور إسلامي. 
                    يحمل إجازة في العلوم الشرعية ودكتوراه في التربية الإسلامية.
                  </p>
                  <p>
                    يتميز الشيخ عاصم بأسلوبه المعاصر في تقديم التعاليم الإسلامية، حيث يجمع بين الأصالة والمعاصرة 
                    في طريقة فريدة تلامس قلوب الشباب والكبار على حد سواء.
                  </p>
                  <p>
                    له أكثر من 25 سنة من العطاء في مجال الدعوة والإرشاد الروحاني، وقد أثر في حياة آلاف الأشخاص 
                    من خلال محاضراته وكتبه ودوراته التدريبية.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <Card className="bg-white/10 backdrop-blur-lg border-gold-400/30 h-full">
              <CardContent className="p-8">
                <h2 className="text-3xl font-amiri font-bold text-gold-400 mb-6">
                  رسالته ورؤيته
                </h2>
                <div className="space-y-4 text-white/90 font-cairo leading-relaxed">
                  <p>
                    رسالة الشيخ عاصم تتركز حول إحياء الروح الإسلامية في النفوس، وتحقيق السكينة والطمأنينة 
                    من خلال التقرب إلى الله والعمل بتعاليم الإسلام السمحة.
                  </p>
                  <p>
                    يؤمن الشيخ بأن الإسلام دين شامل يحتوي على الحلول لجميع مشاكل الإنسان المعاصر، 
                    سواء كانت روحية أو نفسية أو اجتماعية.
                  </p>
                  <p>
                    رؤيته هي بناء جيل مؤمن واعٍ، قادر على مواجهة تحديات العصر بروح إيمانية قوية 
                    وعقلية منفتحة ومستنيرة.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
          className="mb-16"
        >
          <h2 className="text-4xl font-amiri font-bold text-gold-400 text-center mb-12">
            إنجازات وأرقام
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center"
              >
                <Card className="bg-white/10 backdrop-blur-lg border-gold-400/30 p-6">
                  <CardContent className="p-0">
                    <div className="text-gold-400 flex justify-center mb-4">
                      {achievement.icon}
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-emerald-200 font-cairo text-sm">
                      {achievement.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
          className="text-center"
        >
          <Card className="bg-white/10 backdrop-blur-lg border-gold-400/30 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-3xl font-amiri font-bold text-gold-400 mb-4">
                ابدأ رحلتك الروحانية اليوم
              </h2>
              <p className="text-white/90 font-cairo mb-6 leading-relaxed">
                انضم إلى آلاف الأشخاص الذين غيروا حياتهم للأفضل من خلال التعاليم الروحانية والإرشاد النفسي
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => navigate('/')}
                  className="bg-gradient-to-r from-gold-400 to-gold-500 text-navy-blue-900 font-cairo font-bold"
                >
                  العودة للرئيسية
                </Button>
                <Button
                  variant="outline"
                  className="border-emerald-300 text-emerald-300 hover:bg-emerald-300 hover:text-navy-blue-900 font-cairo font-bold"
                >
                  تواصل معنا
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
