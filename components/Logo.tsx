
import React, { useId } from 'react';
import { Globe } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-20 h-20" }) => {
  const uniqueId = useId();
  const gradientId = `goldGradient-${uniqueId}`;
  const curveTopId = `textCurveTop-${uniqueId}`;
  const curveBottomId = `textCurveBottom-${uniqueId}`;

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Vector SVG Seal */}
      <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-xl filter">
        <defs>
          {/* Richer Gold Gradient */}
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F4E6AD" />
            <stop offset="30%" stopColor="#D7AA42" />
            <stop offset="70%" stopColor="#B8860B" />
            <stop offset="100%" stopColor="#8B6508" />
          </linearGradient>
          {/* Text Paths - Adjusted for better spacing */}
          {/* Top Curve radius 78 to push text slightly closer to edge */}
          <path id={curveTopId} d="M 20,100 A 80,80 0 0,1 180,100" fill="none" />
          {/* Bottom Curve radius 75 */}
          <path id={curveBottomId} d="M 22,100 A 78,78 0 0,0 178,100" fill="none" />
        </defs>

        {/* Outer Gold Ring with Bevel effect */}
        <circle cx="100" cy="100" r="98" fill={`url(#${gradientId})`} />
        <circle cx="100" cy="100" r="92" fill="#014A70" stroke="#8B6508" strokeWidth="1" />

        {/* Inner Glow */}
        <circle cx="100" cy="100" r="92" fill={`url(#${gradientId})`} fillOpacity="0.1" />

        {/* Layer 1: GOOD CARE (Top Curve) - Large, Premium Serif */}
        <text fontSize="26" fontWeight="900" fontFamily="'Playfair Display', serif" fill={`url(#${gradientId})`} letterSpacing="1.5" textAnchor="middle" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>
          <textPath href={`#${curveTopId}`} startOffset="50%">
            GOOD CARE
          </textPath>
        </text>

        {/* Layer 2: INTERNATIONAL (Bottom Curve) - Structural Sans-Serif */}
        <text fontSize="14" fontWeight="700" fontFamily="'Montserrat', sans-serif" fill={`url(#${gradientId})`} letterSpacing="2.5" textAnchor="middle" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}>
          <textPath href={`#${curveBottomId}`} startOffset="50%">
            INTERNATIONAL
          </textPath>
        </text>

        {/* Layer 3: Tours & Travels (Center/Bottom) - Elegant Italic Script */}
        <text x="100" y="165" fontSize="13" fontWeight="500" fontFamily="'Playfair Display', serif" fontStyle="italic" fill="#F4E6AD" textAnchor="middle" letterSpacing="0.5" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
          Tours & Travels
        </text>

        {/* Decorative Stars */}
        <path d="M 15,100 L 20,98 L 25,100 L 23,95 L 27,92 L 21,92 L 20,87 L 19,92 L 13,92 L 17,95 Z" fill={`url(#${gradientId})`} />
        <path d="M 175,100 L 180,98 L 185,100 L 183,95 L 187,92 L 181,92 L 180,87 L 179,92 L 173,92 L 177,95 Z" fill={`url(#${gradientId})`} />
      </svg>

      {/* Central Icon (Globe) - Adjusted Position */}
      <div className="absolute inset-0 flex items-center justify-center pb-6">
        <div className="bg-gradient-to-b from-[#005fa3] to-[#014A70] rounded-full p-2 w-[42%] h-[42%] flex items-center justify-center shadow-inner border-2 border-[#D7AA42] relative z-10">
            <Globe className="text-[#D7AA42] w-full h-full drop-shadow-md" strokeWidth={1.2} />
            
            {/* Gloss Reflection */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-4 bg-white/20 rounded-full blur-sm"></div>
        </div>
      </div>
      
      {/* Stylized Hands (Simple Curves) behind text */}
      <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full pointer-events-none">
         <path d="M 60,135 Q 50,110 50,90" stroke="#D7AA42" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6" />
         <path d="M 140,135 Q 150,110 150,90" stroke="#D7AA42" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6" />
         <path d="M 60,135 Q 100,165 140,135" stroke="#D7AA42" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6" />
      </svg>
    </div>
  );
};

export default Logo;
