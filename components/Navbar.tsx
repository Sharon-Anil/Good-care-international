
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Packages', href: '#packages' },
    { name: 'AI Planner', href: '#ai-planner' },
    { name: 'Services', href: '#services' },
    { name: 'AI Studio', href: '#ai-studio', highlight: true },
    { name: 'Contact', href: '#contact', highlight: true },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileOpen(false);

    if (href === '#' || href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 90; 
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/90 backdrop-blur-md py-3 shadow-sm'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Logo className="w-16 h-16 sm:w-20 sm:h-20" />
          
          {/* Updated 3-Line Branding Text */}
          <div className="hidden sm:flex flex-col items-start justify-center leading-none">
            <span className="font-serif font-black text-xl text-navy tracking-wide">GOOD CARE</span>
            <span className="font-sans font-bold text-[10px] text-gold tracking-[0.25em] uppercase my-[2px]">INTERNATIONAL</span>
            <span className="font-serif italic text-[11px] text-gray-500 tracking-wider">Tours & Travels</span>
          </div>
        </div>

        {/* Desktop Menu (Visible on MD and up) */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`font-bold text-xs lg:text-sm uppercase tracking-wide transition-all duration-300 whitespace-nowrap ${
                link.highlight 
                  ? 'bg-[#29a6b1] text-white px-4 py-2 lg:px-5 lg:py-2.5 rounded-lg hover:bg-[#1d7c83] shadow-md hover:shadow-lg hover:-translate-y-0.5' 
                  : 'text-[#014A70] hover:text-[#29a6b1] py-2 relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#29a6b1] after:transition-all hover:after:w-full'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-[#29a6b1] p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-2xl border-t border-gray-100 flex flex-col animate-fade-in z-[90]">
          <div className="flex flex-col p-6 space-y-4">
             {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-[#014A70] font-medium text-lg border-b border-gray-50 last:border-0 pb-3 last:pb-0 ${
                  link.highlight 
                    ? 'text-[#29a6b1] font-bold bg-sky-50 p-3 rounded-lg text-center' 
                    : 'hover:text-[#29a6b1] pl-2'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
