import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import ServiceImageSection from './components/ServiceImageSection';
import TestimonialSection from './components/TestimonialSection';
import GuaranteeSection from './components/GuaranteeSection';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <ServiceImageSection />
        <TestimonialSection />
        <GuaranteeSection />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;