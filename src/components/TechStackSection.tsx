import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Activity, Lock, Cpu } from 'lucide-react';

interface TechItemProps {
  icon: React.ReactNode;
  name: string;
  description: string;
}

const TechItem: React.FC<TechItemProps> = ({ icon, name, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="feature-card cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className={`flex flex-col items-center p-5 transition-all duration-300 ${isHovered ? 'scale-105' : ''}`}>
        <div className="mb-4">
          <div className="p-3 rounded-full bg-gradient-to-br from-retrowave/20 to-flamingo/20 border border-retrowave/30">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-medium mb-2">{name}</h3>
        
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            height: isHovered ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden text-center text-gray-300 text-sm"
        >
          <p>{description}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const TechStackSection: React.FC = () => {
  const techItems: TechItemProps[] = [
    {
      icon: <Server size={24} className="text-flamingo" />,
      name: "AWS",
      description: "Cloud infrastructure with auto-scaling for millions of concurrent users."
    },
    {
      icon: <Cpu size={24} className="text-flamingo" />,
      name: "Node.js",
      description: "High-performance backend with optimized event-driven architecture."
    },
    {
      icon: <Database size={24} className="text-flamingo" />,
      name: "MongoDB",
      description: "NoSQL database for flexible schema and horizontal scaling."
    },
    {
      icon: <Activity size={24} className="text-flamingo" />,
      name: "Redis",
      description: "In-memory data storage for real-time features and caching."
    },
    {
      icon: <Lock size={24} className="text-flamingo" />,
      name: "WebSockets",
      description: "Real-time bidirectional communication for multiplayer gaming."
    },
  ];
  
  return (
    <section id="tech-stack" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-blackish/90"></div>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-retrowave/10 blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-flamingo/10 blur-[120px]"></div>
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
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
            <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-300">
            Built on enterprise-grade technology for reliability, security, and performance at scale.
          </p>
        </motion.div>
        
        {/* Tech items grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {techItems.map((item, index) => (
            <TechItem
              key={index}
              icon={item.icon}
              name={item.name}
              description={item.description}
            />
          ))}
        </div>
        
        {/* System architecture visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-blackish/50 backdrop-blur-sm border border-retrowave/20 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-midnight via-retrowave/20 to-blackish opacity-50"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6 text-center">System Architecture</h3>
              
              <div className="w-full h-[300px] flex items-center justify-center">
                {/* Simplified architecture diagram */}
                <div className="w-full max-w-3xl">
                  <div className="flex flex-col items-center">
                    <div className="w-full grid grid-cols-3 gap-4 mb-8">
                      <div className="col-span-3 md:col-span-1 p-3 bg-retrowave/20 border border-retrowave/40 rounded-lg text-center">
                        Client Applications
                      </div>
                      <div className="col-span-3 md:col-span-2 p-3 bg-flamingo/20 border border-flamingo/40 rounded-lg text-center">
                        API Gateway / Load Balancer
                      </div>
                    </div>
                    
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                      <div className="p-3 bg-retrowave/20 border border-retrowave/40 rounded-lg text-center">
                        Authentication Services
                      </div>
                      <div className="p-3 bg-retrowave/20 border border-retrowave/40 rounded-lg text-center">
                        Application Servers
                      </div>
                      <div className="p-3 bg-retrowave/20 border border-retrowave/40 rounded-lg text-center">
                        Realtime Servers
                      </div>
                    </div>
                    
                    <div className="w-full grid grid-cols-2 gap-4">
                      <div className="p-3 bg-flamingo/20 border border-flamingo/40 rounded-lg text-center">
                        Database Cluster
                      </div>
                      <div className="p-3 bg-flamingo/20 border border-flamingo/40 rounded-lg text-center">
                        Storage & CDN
                      </div>
                    </div>
                    
                    {/* Connection lines - simplified for this example */}
                    <div className="absolute inset-0 pointer-events-none">
                      <svg width="100%" height="100%" className="opacity-30">
                        <defs>
                          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#440BD4" />
                            <stop offset="100%" stopColor="#E92EFB" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;