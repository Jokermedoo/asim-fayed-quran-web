
import React from 'react';
import Navbar from '../components/Navbar';
import EnhancedHero from '../components/EnhancedHero';
import EnhancedIslamicWisdom from '../components/EnhancedIslamicWisdom';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import AdminAccess from '../components/AdminAccess';
import QuickAdminPanel from '../components/QuickAdminPanel';

const Index = () => {
  return (
    <div className="min-h-screen font-cairo" dir="rtl">
      <Navbar />
      <AdminAccess />
      <EnhancedHero />
      <EnhancedIslamicWisdom />
      <Footer />
      <WhatsAppButton />
      <QuickAdminPanel />
    </div>
  );
};

export default Index;
