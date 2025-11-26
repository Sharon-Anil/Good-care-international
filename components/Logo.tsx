import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-32 h-32" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <img 
        src="/logo.png" 
        alt="Good Care International Logo" 
        className="w-full h-full object-contain drop-shadow-2xl"
      />
    </div>
  );
};

export default Logo;
