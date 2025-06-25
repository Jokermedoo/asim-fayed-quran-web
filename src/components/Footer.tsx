
import React from 'react';
import { Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-navy-blue-900 to-navy-blue-800 text-white py-16 relative overflow-hidden">
      {/* Background Nature Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-32 h-32 bg-emerald-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-24 h-24 bg-gold-400 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-blue-400 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div className="text-center md:text-right">
            <h3 className="text-2xl font-amiri font-bold text-gold-400 mb-4">
              الشيخ عاصم فايد
            </h3>
            <p className="font-cairo leading-relaxed text-gray-300">
              مرشد روحاني يسعى لنشر الخير والهداية من خلال كتاب الله الكريم، وتقريب الناس من خالقهم عز وجل.
            </p>
          </div>
          
          {/* Contact Section */}
          <div className="text-center">
            <h3 className="text-2xl font-amiri font-bold text-gold-400 mb-4">
              تواصل معنا
            </h3>
            <div className="space-y-3">
              <p className="font-cairo text-gray-300">
                للتواصل والاستفسارات الروحانية
              </p>
              <a
                href="https://wa.me/201007578444"
                className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg font-cairo hover:bg-green-600 hover:scale-105 transition-all duration-300 shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                تواصل عبر الواتساب
              </a>
            </div>
          </div>
          
          {/* Social Media Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-amiri font-bold text-gold-400 mb-4">
              تابعني على
            </h3>
            <div className="flex justify-center md:justify-start space-x-4 space-x-reverse">
              <a
                href="https://www.facebook.com/share/19wagAmL8H/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 hover:scale-125 transition-all duration-300 transform shadow-lg"
                title="فيسبوك"
              >
                <Facebook size={24} />
              </a>
              
              <a
                href="https://www.tiktok.com/@asemfayed?_t=ZS-8xB30KAP1LM&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 hover:scale-125 transition-all duration-300 transform shadow-lg"
                title="تيك توك"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.849-1.263-1.924-1.263-3.338h-2.98v13.355c0 2.239-1.845 4.08-4.1 4.08-2.255 0-4.1-1.841-4.1-4.08s1.845-4.08 4.1-4.08c.348 0 .686.043 1.009.125V7.422c-.315-.045-.638-.07-.97-.07-3.896 0-7.07 3.174-7.07 7.07s3.174 7.07 7.07 7.07 7.07-3.174 7.07-7.07V8.798a9.29 9.29 0 0 0 5.421 1.742V7.56a6.516 6.516 0 0 1-2.607-1.998z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="text-center">
            <p className="font-cairo text-gray-400 mb-4">
              جميع الحقوق محفوظة © {currentYear} - الشيخ عاصم فايد
            </p>
            <p className="font-amiri text-gold-400 text-lg">
              ﴿ وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ ﴾
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
