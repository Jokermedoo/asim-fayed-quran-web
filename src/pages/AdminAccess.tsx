
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, CheckCircle } from 'lucide-react';

const AdminAccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // تلقائياً منح صلاحية الأدمن عند الوصول لهذا الرابط
    localStorage.setItem('adminAccess', 'granted');
    
    // إعادة توجيه للوحة التحكم بعد 2 ثانية
    const timer = setTimeout(() => {
      navigate('/admin-dashboard');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
      <motion.div
        className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-center max-w-md w-full border border-white/20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        >
          <Shield className="w-20 h-20 text-green-400 mx-auto mb-4" />
          <CheckCircle className="w-12 h-12 text-green-400 mx-auto" />
        </motion.div>
        
        <motion.h1
          className="text-2xl font-bold text-white mb-4 font-cairo"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          تم تأكيد الهوية بنجاح
        </motion.h1>
        
        <motion.p
          className="text-gray-300 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          مرحباً بك في لوحة التحكم الإدارية
          <br />
          سيتم نقلك تلقائياً...
        </motion.p>
        
        <motion.div
          className="w-full bg-white/20 rounded-full h-2 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-green-400 to-blue-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ delay: 1, duration: 2, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AdminAccess;
