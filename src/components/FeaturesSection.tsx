import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, ShoppingBag, Smartphone, MessageCircle, Settings, Radio } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="feature-card group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-4">
        <div className={`p-3 inline-flex items-center justify-center rounded-full
                         bg-gradient-to-br from-retrowave to-flamingo
                         transform transition-all duration-300
                         ${isHovered ? 'scale-110 shadow-lg neon-glow' : ''}
                       `}>
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      
      {/* Tooltip description that appears on hover */}
      <motion.div 
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isHovered ? 1 : 0,
          height: isHovered ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
        className="text-gray-300 overflow-hidden"
      >
        <p>{description}</p>
      </motion.div>
      
      {/* Always visible indicator for mobile/touch devices */}
      <div className="md:hidden mt-2 text-gray-300 text-sm">
        <p>Tap to learn more</p>
      </div>
    </motion.div>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Trophy size={24} className="text-white" />,
      title: "Esports & Tournament Engine",
      description: "Run tournaments at any scale with automated brackets, leaderboards, and custom rules."
    },
    {
      icon: <ShoppingBag size={24} className="text-white" />,
      title: "Game Store, Wallet, Rewards",
      description: "Integrated marketplace with virtual currency, reward systems and monetization options."
    },
    {
      icon: <Smartphone size={24} className="text-white" />,
      title: "Native App & Web Support",
      description: "Fully responsive web platform and native mobile apps for iOS and Android."
    },
    {
      icon: <MessageCircle size={24} className="text-white" />,
      title: "Chat, Social Feed, Forums",
      description: "Comprehensive community features with moderation tools and engagement analytics."
    },
    {
      icon: <Settings size={24} className="text-white" />,
      title: "CRM, Billing, API Integrations",
      description: "Enterprise-grade backend systems with customizable workflows and third-party integrations."
    },
    {
      icon: <Radio size={24} className="text-white" />,
      title: "Broadcast Tools + Analytics",
      description: "Professional streaming overlay system with real-time analytics and audience engagement tools."
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-retrowave/10 blur-[120px]"></div>
        <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-flamingo/10 blur-[120px]"></div>
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            <span className="gradient-text">Platform Features</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-300">
            Our comprehensive white-label platform includes everything needed to build engaging gaming communities and esports ecosystems.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;