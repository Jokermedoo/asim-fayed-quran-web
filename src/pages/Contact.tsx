
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CosmicBackground from '../components/CosmicBackground';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to your backend
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'الهاتف',
      info: '+20 123 456 7890',
      description: 'متاح من 9 صباحاً حتى 9 مساءً'
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      info: 'sheikh.asem@example.com',
      description: 'نرد خلال 24 ساعة'
    },
    {
      icon: MapPin,
      title: 'العنوان',
      info: 'الأزهر الشريف، القاهرة',
      description: 'مصر'
    },
    {
      icon: Clock,
      title: 'مواعيد العمل',
      info: 'السبت - الخميس',
      description: '9:00 ص - 9:00 م'
    }
  ];

  return (
    <div className="min-h-screen font-cairo bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden" dir="rtl">
      <CosmicBackground />
      <Navbar />
      
      <div className="relative z-10 pt-24">
        {/* Hero Section */}
        <motion.section 
          className="py-20 text-center"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="container mx-auto px-6">
            <motion.h1 
              className="text-5xl md:text-7xl font-amiri font-bold mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-emerald-400 to-blue-400">
                تواصل معنا
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              نحن هنا للإجابة على استفساراتكم ومساعدتكم في رحلتكم التعليمية
            </motion.p>
          </div>
        </motion.section>

        {/* Contact Info Cards */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -10 }}
                  >
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-r from-gold-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <Icon size={24} className="text-white" />
                    </motion.div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gold-300 font-medium mb-1">{item.info}</p>
                    <p className="text-white/60 text-sm">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Contact Form */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <motion.div
                className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <h2 className="text-3xl font-amiri font-bold text-white mb-6 flex items-center">
                  <MessageCircle className="ml-3" />
                  أرسل رسالة
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <input
                        type="text"
                        placeholder="الاسم"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-gold-400 transition-colors"
                        required
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <input
                        type="email"
                        placeholder="البريد الإلكتروني"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-gold-400 transition-colors"
                        required
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <input
                      type="tel"
                      placeholder="رقم الهاتف"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-gold-400 transition-colors"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <input
                      type="text"
                      placeholder="الموضوع"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-gold-400 transition-colors"
                      required
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                  >
                    <textarea
                      placeholder="الرسالة"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={5}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-gold-400 transition-colors resize-none"
                      required
                    />
                  </motion.div>
                  
                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-gold-400 via-emerald-500 to-blue-500 text-white py-3 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 space-x-reverse"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                  >
                    <Send size={20} />
                    <span>إرسال الرسالة</span>
                  </motion.button>
                </form>
              </motion.div>

              {/* Map/Info */}
              <motion.div
                className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <h2 className="text-3xl font-amiri font-bold text-white mb-6">
                  معلومات إضافية
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-white/5 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-gold-400 mb-3">مواعيد الدروس</h3>
                    <div className="space-y-2 text-white/80">
                      <p>• تفسير القرآن: السبت والاثنين 7:00 م</p>
                      <p>• الإعجاز العلمي: الأحد والثلاثاء 8:00 م</p>
                      <p>• تحفيظ القرآن: يومياً 9:00 ص</p>
                      <p>• علم الفلك: الجمعة 7:30 م</p>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-emerald-400 mb-3">طرق التواصل السريع</h3>
                    <div className="space-y-3">
                      <motion.button
                        className="w-full bg-green-600 text-white py-3 rounded-xl font-medium flex items-center justify-center space-x-2 space-x-reverse"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>واتساب</span>
                      </motion.button>
                      
                      <motion.button
                        className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium flex items-center justify-center space-x-2 space-x-reverse"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>تيليجرام</span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
