
import React from 'react';
import Hero from '../components/Hero';
import SpiritualJourney from '../components/SpiritualJourney';
import IslamicWisdom from '../components/IslamicWisdom';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen font-cairo" dir="rtl">
      <Hero />
      <SpiritualJourney />
      <IslamicWisdom />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
