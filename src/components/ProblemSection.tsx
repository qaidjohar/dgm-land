import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Globe, Users, Puzzle } from 'lucide-react';

interface ProblemCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const ProblemCard: React.FC<ProblemCardProps> = ({ title, description, icon, delay }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.6, delay }}
      className="feature-card flex flex-col items-center text-center"
    >
      <div className="mb-4 p-4 rounded-full bg-gradient-to-br from-retrowave to-flamingo">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

const ProblemSection: React.FC = () => {
  const titleControls = useAnimation();
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (titleInView) {
      titleControls.start({ opacity: 1, y: 0 });
    }
  }, [titleControls, titleInView]);

  return (
    <section id="problem" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-retrowave/10 blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-flamingo/10 blur-[120px]"></div>
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleControls}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="section-title">
            Gaming is Global. <span className="gradient-text">But Distribution Isn't.</span>
          </h2>
          <p className="text-lg text-gray-300">
            The gaming market faces significant infrastructure challenges. Here's how Dynasty bridges the gap.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProblemCard
            icon={<Users size={32} className="text-white" />}
            title="Brands' Struggle"
            description="3.2B gamers globally, but how do global brands engage them authentically across diverse markets and gaming ecosystems?"
            delay={0.1}
          />
          <ProblemCard
            icon={<Globe size={32} className="text-white" />}
            title="Publishers' Bottleneck"
            description="Most publishers lack the infrastructure or local resources to reach dozens of unique regions with varying regulatory requirements."
            delay={0.3}
          />
          <ProblemCard
            icon={<Puzzle size={32} className="text-white" />}
            title="Our Solution"
            description="Dynasty bridges the gap with white-label platforms that scale instantly and localize precisely, connecting brands with gaming communities."
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;