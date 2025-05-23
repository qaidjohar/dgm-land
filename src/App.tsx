import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import CredibilitySection from './components/CredibilitySection';
import TechStackSection from './components/TechStackSection';
import LplSection from './components/LplSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-blackish overflow-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CredibilitySection />
        <TechStackSection />
        <LplSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;