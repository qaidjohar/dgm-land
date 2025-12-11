import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';
import { Mail, MapPin, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = [
    // { title: "Platform", links: ["Features", "Pricing", "Security", "API"] },
    // { title: "Company", links: ["About", "Careers", "Press", "Blog"] },
    // { title: "Resources", links: ["Documentation", "Support", "Developers", "Partners"] },
    // { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Cookies"] },
  ];
  
  const offices = [
    { city: "Singapore", address: "Singapore Central" },
    // { city: "Kuala Lumpur", address: "KL, Malaysia" },
    // { city: "Manila", address: "Manila, Philippines" },
  ];

  return (
    <footer id="contact" className="bg-blackish relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-flamingo/50 to-transparent"></div>
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
      </div>
      
      <div className="container-custom relative z-10 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company info */}
          <div className="lg:col-span-2">
            <Logo className="h-12 mb-6" />
            <p className="text-gray-400 mb-6 max-w-md">
              Dynasty Gaming & Media delivers the world's most comprehensive white-label gaming ecosystem, powering esports infrastructure across the globe.
            </p>
            <div className="flex items-center mb-4">
              <Mail size={18} className="text-flamingo mr-2" />
              <a href="mailto:admin@dynastygm.com" className="text-gray-300 hover:text-flamingo transition-colors">
                admin@dynastygm.com
              </a>
            </div>
            <div className="flex items-center mb-4">
              <ExternalLink size={18} className="text-flamingo mr-2" />
              <a href="https://www.dynastygm.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-flamingo transition-colors">
                www.dynastygm.com
              </a>
            </div>
            
            <div className="mt-8">
              <h4 className="text-white font-medium mb-4">Our Offices</h4>
              <div className="space-y-3">
                {offices.map((office, index) => (
                  <div key={index} className="flex items-start">
                    <MapPin size={18} className="text-flamingo mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white">{office.city}</div>
                      <div className="text-gray-400 text-sm">{office.address}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Quick links */}
          {/* {footerLinks.map((column, index) => (
            <div key={index}>
              <h4 className="text-white font-medium mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-flamingo transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))} */}
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Dynasty Gaming & Media. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            {/* Social media icons would go here */}
            <div className="w-8 h-8 rounded-full bg-retrowave/20 flex items-center justify-center border border-retrowave/30 cursor-pointer hover:bg-retrowave/40 transition-all">
              <span className="text-flamingo text-lg">f</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-retrowave/20 flex items-center justify-center border border-retrowave/30 cursor-pointer hover:bg-retrowave/40 transition-all">
              <span className="text-flamingo text-lg">t</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-retrowave/20 flex items-center justify-center border border-retrowave/30 cursor-pointer hover:bg-retrowave/40 transition-all">
              <span className="text-flamingo text-lg">in</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-retrowave/20 flex items-center justify-center border border-retrowave/30 cursor-pointer hover:bg-retrowave/40 transition-all">
              <span className="text-flamingo text-lg">ig</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;