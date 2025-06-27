
import React from 'react';
import Navbar from '../components/Navbar';
import EnhancedHero from '../components/EnhancedHero';
import EnhancedIslamicWisdom from '../components/EnhancedIslamicWisdom';
import SpiritualJourney from '../components/SpiritualJourney';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import SecureAdminAccess from '../components/SecureAdminAccess';
import QuickAdminPanel from '../components/QuickAdminPanel';
import InteractiveBackground from '../components/InteractiveBackground';
import BackgroundSlider from '../components/BackgroundSlider';
import ScrollIndicator from '../components/ScrollIndicator';
import FloatingElements from '../components/FloatingElements';

const Index = () => {
  return (
    <div className="min-h-screen font-cairo relative" dir="rtl">
      <BackgroundSlider />
      <InteractiveBackground />
      <FloatingElements />
      <ScrollIndicator />
      
      <div className="relative z-10">
        <Navbar />
        <SecureAdminAccess />
        <EnhancedHero />
        <EnhancedIslamicWisdom />
        <SpiritualJourney />
        <Footer />
        <WhatsAppButton />
        <QuickAdminPanel />
      </div>
    </div>
  );
};

export default Index;
