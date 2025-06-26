
import React from 'react';
import Navbar from '../components/Navbar';
import EnhancedHero from '../components/EnhancedHero';
import SpaceExploration from '../components/SpaceExploration';
import EnhancedIslamicWisdom from '../components/EnhancedIslamicWisdom';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import AdminAccess from '../components/AdminAccess';

const Index = () => {
  return (
    <div className="min-h-screen font-cairo" dir="rtl">
      <Navbar />
      <AdminAccess />
      <EnhancedHero />
      <SpaceExploration />
      <EnhancedIslamicWisdom />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
