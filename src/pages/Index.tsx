
import React, { useEffect } from 'react';
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
import { supabase } from '../integrations/supabase/client';

const Index = () => {
  useEffect(() => {
    // Apply dynamic theme from Supabase
    const applyTheme = async () => {
      try {
        const { data } = await supabase
          .from('design_settings')
          .select('settings')
          .eq('category', 'colors')
          .single();
        
        if (data?.settings) {
          const root = document.documentElement;
          const colors = data.settings;
          
          if (colors.primary) root.style.setProperty('--primary-color', colors.primary);
          if (colors.secondary) root.style.setProperty('--secondary-color', colors.secondary);
          if (colors.accent) root.style.setProperty('--accent-color', colors.accent);
        }
      } catch (error) {
        console.log('Using default theme colors');
      }
    };

    applyTheme();

    // Subscribe to real-time changes
    const subscription = supabase
      .channel('design-changes')
      .on('postgres_changes', { 
        event: '*', 
        schema: 'public', 
        table: 'design_settings' 
      }, () => {
        applyTheme();
      })
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

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
        <section id="about" className="py-0">
          <AboutSection />
        </section>
        
        {/* Islamic Wisdom Section */}
        <section id="wisdom" className="py-0">
          <EnhancedIslamicWisdom />
        </section>
        
        {/* Services Section */}
        <section id="services" className="py-0">
          <ServicesSection />
        </section>
        
        {/* Spiritual Journey Section */}
        <section id="journey" className="py-0">
          <SpiritualJourney />
        </section>
        
        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  );
};

export default Index;
