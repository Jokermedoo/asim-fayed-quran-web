
import React from 'react';
import { motion } from 'framer-motion';
import { Facebook } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { ref, controls } = useScrollAnimation(0.2);

  return (
    <footer className="bg-gradient-to-br from-navy-blue-900 via-navy-blue-800 to-emerald-900 text-white py-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-10 right-20 w-32 h-32 bg-emerald-500 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-10 left-20 w-24 h-24 bg-gold-400 rounded-full blur-2xl"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
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
              staggerChildren: 0.2
            }
          }
        }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
            className="text-center md:text-right"
          >
            <h3 className="text-2xl font-amiri font-bold text-gold-400 mb-4">
              الشيخ عاصم فايد
            </h3>
            <p className="font-cairo leading-relaxed text-gray-300">
              مرشد روحاني يسعى لنشر الخير والهداية من خلال كتاب الله الكريم، وتقريب الناس من خالقهم عز وجل.
            </p>
          </motion.div>
          
          {/* Contact Section */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-center"
          >
            <h3 className="text-2xl font-amiri font-bold text-gold-400 mb-4">
              تواصل معنا
            </h3>
            <div className="space-y-3">
              <p className="font-cairo text-gray-300">
                للتواصل والاستفسارات الروحانية
              </p>
              <motion.a
                href="https://wa.me/201007578444"
                className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg font-cairo shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "#16a34a",
                  boxShadow: "0 10px 25px rgba(34, 197, 94, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                تواصل عبر الواتساب
              </motion.a>
            </div>
          </motion.div>
          
          {/* Social Media Section */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 }
            }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-amiri font-bold text-gold-400 mb-4">
              تابعني على
            </h3>
            <div className="flex justify-center md:justify-start space-x-4 space-x-reverse">
              <motion.a
                href="https://www.facebook.com/share/19wagAmL8H/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg"
                title="فيسبوك"
                whileHover={{ 
                  scale: 1.25, 
                  rotate: 360,
                  backgroundColor: "#1d4ed8",
                  boxShadow: "0 8px 25px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook size={24} />
              </motion.a>
              
              <motion.a
                href="https://www.tiktok.com/@asemfayed?_t=ZS-8xB30KAP1LM&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-lg"
                title="تيك توك"
                whileHover={{ 
                  scale: 1.25, 
                  rotate: -360,
                  backgroundColor: "#374151",
                  boxShadow: "0 8px 25px rgba(0, 0, 0, 0.4)"
                }}
                whileTap={{ scale: 0.9 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.849-1.263-1.924-1.263-3.338h-2.98v13.355c0 2.239-1.845 4.08-4.1 4.08-2.255 0-4.1-1.841-4.1-4.08s1.845-4.08 4.1-4.08c.348 0 .686.043 1.009.125V7.422c-.315-.045-.638-.07-.97-.07-3.896 0-7.07 3.174-7.07 7.07s3.174 7.07 7.07 7.07 7.07-3.174 7.07-7.07V8.798a9.29 9.29 0 0 0 5.421 1.742V7.56a6.516 6.516 0 0 1-2.607-1.998z"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>
        
        {/* Divider */}
        <motion.div 
          className="border-t border-gray-700 mt-12 pt-8"
          variants={{
            hidden: { opacity: 0, scaleX: 0 },
            visible: { 
              opacity: 1, 
              scaleX: 1,
              transition: { duration: 1.5 }
            }
          }}
        >
          <div className="text-center">
            <p className="font-cairo text-gray-400 mb-4">
              جميع الحقوق محفوظة © {currentYear}
            </p>
            
            {/* Elegant Signature */}
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-amiri font-bold text-transparent bg-gradient-to-r from-gold-400 via-gold-300 to-emerald-400 bg-clip-text mb-2"
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0 0 20px rgba(251, 191, 36, 0.3)"
                }}
              >
                الشيخ عاصم فايد
              </motion.h2>
              <motion.div 
                className="w-32 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto"
                initial={{ width: 0 }}
                animate={{ width: 128 }}
                transition={{ duration: 2, delay: 1 }}
              />
            </motion.div>
            
            <motion.p 
              className="font-amiri text-gold-400 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              ﴿ وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ ﴾
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
