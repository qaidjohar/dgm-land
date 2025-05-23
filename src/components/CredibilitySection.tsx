import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Globe, Users, Award } from 'lucide-react';

const CredibilitySection: React.FC = () => {
  const credentials = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "ISO 27001:2013 Certified",
      description: "Enterprise-grade security and data protection standards"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Active in 40+ countries",
      description: "Global infrastructure with localized deployment capability"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Enterprise Clients",
      description: "Red Bull, McDonald's, Samsung, Ubisoft, and more"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Publisher Access",
      description: "Riot, Supercell, Epic, Krafton, 2K, Valve"
    },
  ];
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="credibility" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blackish via-midnight/30 to-blackish opacity-70"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-flamingo/10 blur-[150px]"></div>
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-retrowave/20 to-transparent"></div>
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
            Why <span className="gradient-text">Dynasty?</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-300">
            With unmatched experience and technology, we've earned the trust of global brands and publishers.
          </p>
        </motion.div>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {credentials.map((credential, index) => (
            <motion.div
              key={index}
              variants={item}
              className="feature-card text-center p-8"
            >
              <div className="inline-flex items-center justify-center mb-5 p-3 rounded-full bg-gradient-to-br from-retrowave to-flamingo">
                {credential.icon}
              </div>
              <h3 className="text-xl font-medium mb-3">{credential.title}</h3>
              <p className="text-gray-300">{credential.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CredibilitySection;