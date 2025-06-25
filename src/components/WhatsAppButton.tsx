
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '201007578444';
  const message = 'السلام عليكم ورحمة الله وبركاته، أريد الاستفسار عن دروس القرآن الكريم';
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 left-6 z-50 w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-all duration-300 transform hover:scale-110 animate-pulse"
      title="تواصل معنا عبر الواتساب"
    >
      <MessageCircle size={28} />
    </button>
  );
};

export default WhatsAppButton;
