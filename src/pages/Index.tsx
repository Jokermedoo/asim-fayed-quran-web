
import React from 'react';
import Navbar from '../components/Navbar';
import EnhancedHero from '../components/EnhancedHero';
import EnhancedIslamicWisdom from '../components/EnhancedIslamicWisdom';
import SpiritualJourney from '../components/SpiritualJourney';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import InteractiveBackground from '../components/InteractiveBackground';
import BackgroundSlider from '../components/BackgroundSlider';
import ScrollIndicator from '../components/ScrollIndicator';
import FloatingElements from '../components/FloatingElements';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import { useLiveContent } from '../hooks/useLiveContent';

const Index = () => {
  const { content } = useLiveContent();

  return (
    <div className="min-h-screen font-cairo relative overflow-x-hidden" dir="rtl">
      {/* Background Elements */}
      <BackgroundSlider />
      <InteractiveBackground />
      <FloatingElements />
      <ScrollIndicator />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        
        {/* Hero Section */}
        <section id="home" className="min-h-screen">
          <EnhancedHero />
        </section>
        
        {/* About Section */}
        <section id="about" className="py-20 bg-white/5 backdrop-blur-sm">
          <AboutSection />
        </section>
        
        {/* Islamic Wisdom Section */}
        <section id="wisdom" className="py-20">
          <EnhancedIslamicWisdom />
        </section>
        
        {/* Services Section */}
        <section id="services" className="py-20 bg-white/5 backdrop-blur-sm">
          <ServicesSection />
        </section>
        
        {/* Spiritual Journey Section */}
        <section id="journey" className="py-20">
          <SpiritualJourney />
        </section>
        
        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  );
};

export default Index;
