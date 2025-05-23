import React from 'react';
import logoImage from '../assets/logo.png';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = 'h-10 w-auto' }) => {
  return (
    <div className={`${className} flex items-center`}>
      <img
        src={logoImage}
        alt="Dynasty Gaming & Media"
        className="h-full w-auto object-contain"
      />
    </div>
  );
};

export default Logo;