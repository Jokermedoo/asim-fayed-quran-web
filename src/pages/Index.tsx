
import React from 'react';
import Hero from '../components/Hero';
import Journey from '../components/Journey';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen font-cairo" dir="rtl">
      <Hero />
      <Journey />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
