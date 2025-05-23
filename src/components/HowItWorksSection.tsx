import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Puzzle as PuzzlePiece, Palette, Wrench, Rocket } from 'lucide-react';

interface Step {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const HowItWorksSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps: Step[] = [
    {
      title: 'Choose Modules',
      description: 'Select the components you need from our comprehensive suite of features.',
      icon: <PuzzlePiece size={32} className="text-white" />
    },
    {
      title: 'Custom Brand Experience',
      description: 'Apply your branding, customize the UI, and tailor the user experience.',
      icon: <Palette size={32} className="text-white" />
    },
    {
      title: 'Integrate with Partner Systems',
      description: 'Connect with your existing tech stack, databases, and third-party services.',
      icon: <Wrench size={32} className="text-white" />
    },
    {
      title: 'Go Live & Engage Gamers',
      description: 'Launch your platform and start building your gaming community.',
      icon: <Rocket size={32} className="text-white" />
    }
  ];
  
  // Auto-advance steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [steps.length]);
  
  return (
    <section id="how-it-works" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-retrowave/5 to-blackish"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-retrowave/10 blur-[120px]"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Launch in <span className="gradient-text">4 Steps</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-300">
            Our streamlined process gets your gaming platform up and running quickly.
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Progress bar */}
          <div className="hidden md:block absolute top-24 left-0 w-full h-1 bg-gray-700">
            <motion.div
              className="h-full bg-gradient-to-r from-retrowave via-flamingo to-deathray"
              initial={{ width: '0%' }}
              animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          
          {/* Steps indicator */}
          <div className="hidden md:flex justify-between mb-16 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 cursor-pointer z-10 ${
                  index <= activeStep 
                    ? 'border-flamingo bg-blackish shadow-neon-pink' 
                    : 'border-gray-700 bg-blackish'
                }`}
                whileHover={{ scale: 1.1 }}
                onClick={() => setActiveStep(index)}
              >
                <span className={index <= activeStep ? 'text-flamingo' : 'text-gray-500'}>
                  {index + 1}
                </span>
              </motion.div>
            ))}
          </div>
          
          {/* Steps content */}
          <div className="bg-blackish/50 backdrop-blur-sm border border-retrowave/20 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Step visualization */}
              <div className="flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-sm"
                  >
                    <div className="p-8 rounded-xl bg-gradient-to-br from-midnight via-retrowave/40 to-blackish border border-flamingo/20 flex flex-col items-center text-center">
                      <div className="mb-6 p-5 rounded-full bg-gradient-to-br from-retrowave to-flamingo shadow-neon-pink">
                        {steps[activeStep].icon}
                      </div>
                      <h3 className="text-2xl font-medium text-flamingo">
                        {`Step ${activeStep + 1}`}
                      </h3>
                      <div className="mt-4 space-y-2">
                        <div className="h-1.5 w-12 mx-auto bg-flamingo rounded-full"></div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Step description */}
              <div className="flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-3xl font-bold mb-4 gradient-text">
                      {steps[activeStep].title}
                    </h3>
                    <p className="text-lg text-gray-300 mb-8">
                      {steps[activeStep].description}
                    </p>
                    
                    {/* Mobile step selection */}
                    <div className="md:hidden flex justify-center space-x-2 mt-8">
                      {steps.map((_, index) => (
                        <button
                          key={index}
                          className={`w-3 h-3 rounded-full ${
                            index === activeStep ? 'bg-flamingo' : 'bg-gray-700'
                          }`}
                          onClick={() => setActiveStep(index)}
                        />
                      ))}
                    </div>
                    
                    <div className="hidden md:flex space-x-4">
                      <button
                        onClick={() => setActiveStep((prev) => (prev - 1 + steps.length) % steps.length)}
                        className="px-4 py-2 border border-retrowave/50 rounded-lg text-white/80 hover:text-white hover:bg-retrowave/20 hover:border-flamingo/50 transition-all"
                      >
                        Previous
                      </button>
                      <button
                        onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                        className="px-4 py-2 bg-gradient-to-r from-retrowave to-flamingo rounded-lg text-white shadow-neon-pink hover:shadow-lg hover:scale-105 transition-all"
                      >
                        Next Step
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;