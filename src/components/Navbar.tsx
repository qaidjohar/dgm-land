import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-blackish/80 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom flex justify-between items-center py-4">
        <div className="flex items-center">
          <Logo className="h-16 w-auto" />
        </div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          <button 
            onClick={() => scrollToSection('problem')}
            className="text-white/80 hover:text-white transition-colors"
          >
            Problem
          </button>
          <button 
            onClick={() => scrollToSection('features')}
            className="text-white/80 hover:text-white transition-colors"
          >
            Platform
          </button>
          <button 
            onClick={() => scrollToSection('how-it-works')}
            className="text-white/80 hover:text-white transition-colors"
          >
            How It Works
          </button>
          <button 
            onClick={() => scrollToSection('credibility')}
            className="text-white/80 hover:text-white transition-colors"
          >
            Why Dynasty
          </button>
          <button 
            onClick={() => scrollToSection('tech-stack')}
            className="text-white/80 hover:text-white transition-colors"
          >
            Tech
          </button>
          <button
            className="button-primary"
            onClick={() => scrollToSection('contact')}
          >
            Contact Us
          </button>
        </nav>
        
        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile navigation */}
      {isOpen && (
        <div className="md:hidden bg-blackish/95 backdrop-blur-lg">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('problem')}
              className="text-white/80 hover:text-white transition-colors py-2"
            >
              Problem
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-white/80 hover:text-white transition-colors py-2"
            >
              Platform
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-white/80 hover:text-white transition-colors py-2"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('credibility')}
              className="text-white/80 hover:text-white transition-colors py-2"
            >
              Why Dynasty
            </button>
            <button 
              onClick={() => scrollToSection('tech-stack')}
              className="text-white/80 hover:text-white transition-colors py-2"
            >
              Tech
            </button>
            <button
              className="button-primary w-full"
              onClick={() => scrollToSection('contact')}
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;