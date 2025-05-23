import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const section = sectionRef.current;
      
      if (section) {
        const elements = section.querySelectorAll('.parallax');
        elements.forEach((el) => {
          const speed = (el as HTMLElement).dataset.speed || '0.5';
          (el as HTMLElement).style.transform = `translateY(${scrollY * parseFloat(speed)}px)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen pt-24 flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid overlay */}
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        
        {/* Abstract shapes */}
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-retrowave/20 blur-[100px] parallax" data-speed="-0.1"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-flamingo/20 blur-[100px] parallax" data-speed="0.2"></div>
        <div className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full bg-deathray/20 blur-[80px] parallax" data-speed="0.15"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Hero text content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="mb-4 font-bold">
              Powering the Future of <span className="gradient-text">Gaming Infrastructure</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/80">
              Dynasty Gaming & Media delivers the world's most comprehensive white-label gaming ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button 
                className="button-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Request a Demo
              </motion.button>
              <motion.button 
                className="button-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Our Platform
              </motion.button>
            </div>
          </motion.div>
          
          {/* Floating UI elements */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:flex justify-center items-center relative h-[500px]"
          >
            {/* Main platform UI mockup */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute z-20 w-[300px] h-[480px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="h-full w-full bg-gradient-to-br from-midnight to-blackish p-4 border border-retrowave/50">
                <div className="h-8 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-deathray"></div>
                  <div className="w-3 h-3 rounded-full bg-flamingo"></div>
                  <div className="w-3 h-3 rounded-full bg-retrowave"></div>
                  <div className="flex-1 h-5 bg-blackish/50 rounded-full mx-2"></div>
                </div>
                <div className="mt-4 h-36 bg-blackish/40 rounded-lg border border-flamingo/20">
                  <div className="h-6 bg-gradient-to-r from-retrowave to-flamingo opacity-80 rounded-t-lg"></div>
                  <div className="p-2">
                    <div className="h-4 w-1/2 bg-white/10 rounded-full mb-2"></div>
                    <div className="h-3 w-2/3 bg-white/10 rounded-full mb-2"></div>
                    <div className="h-3 w-1/2 bg-white/10 rounded-full"></div>
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <div className="h-12 bg-retrowave/20 rounded-lg"></div>
                      <div className="h-12 bg-flamingo/20 rounded-lg"></div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="h-20 bg-blackish/40 rounded-lg border border-retrowave/20"></div>
                  <div className="h-20 bg-blackish/40 rounded-lg border border-retrowave/20"></div>
                  <div className="h-20 bg-blackish/40 rounded-lg border border-retrowave/20"></div>
                </div>
                <div className="mt-4 h-36 bg-blackish/40 rounded-lg border border-flamingo/20">
                  <div className="h-28 bg-gradient-to-br from-midnight to-retrowave/40 m-4 rounded-lg"></div>
                </div>
                <div className="absolute bottom-4 w-[calc(100%-32px)] h-12 bg-blackish/70 rounded-lg border border-retrowave/30 flex items-center justify-around px-4">
                  <div className="w-8 h-8 rounded-full bg-flamingo/20"></div>
                  <div className="w-8 h-8 rounded-full bg-retrowave/20"></div>
                  <div className="w-8 h-8 rounded-full bg-deathray/20"></div>
                  <div className="w-8 h-8 rounded-full bg-flamingo/20"></div>
                </div>
              </div>
            </motion.div>
            
            {/* Supporting UI elements */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
              className="absolute z-10 left-10 top-20 w-[200px] h-[180px] rounded-xl overflow-hidden shadow-xl transform rotate-[-8deg]"
            >
              <div className="h-full w-full bg-gradient-to-br from-retrowave to-midnight p-3 border border-flamingo/30">
                <div className="h-6 bg-blackish/50 rounded-lg mb-2"></div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-16 bg-blackish/40 rounded-lg"></div>
                  <div className="h-16 bg-blackish/40 rounded-lg"></div>
                  <div className="h-16 bg-blackish/40 rounded-lg"></div>
                  <div className="h-16 bg-blackish/40 rounded-lg"></div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [-5, 15, -5] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="absolute z-10 right-10 top-40 w-[180px] h-[150px] rounded-xl overflow-hidden shadow-xl transform rotate-[8deg]"
            >
              <div className="h-full w-full bg-gradient-to-br from-deathray to-flamingo p-3 border border-white/10">
                <div className="h-5 bg-blackish/50 rounded-lg mb-2"></div>
                <div className="h-24 bg-blackish/30 rounded-lg"></div>
                <div className="mt-2 h-8 bg-blackish/50 rounded-lg flex items-center justify-center">
                  <div className="w-2/3 h-3 bg-white/20 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-flamingo rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <motion.div className="w-1.5 h-3 bg-flamingo rounded-full mt-2"></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;