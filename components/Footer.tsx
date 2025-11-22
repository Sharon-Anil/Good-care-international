
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-navy text-white pt-20 pb-10 border-t-4 border-gold">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand Info */}
          <div>
             <div className="flex items-center gap-4 mb-6">
                 {/* Logo Component */}
                 <div className="h-24 w-24 flex items-center justify-center">
                    <Logo className="w-full h-full" />
                 </div>
                 {/* 3-Line Branding */}
                 <div className="flex flex-col items-start justify-center leading-none">
                    <h3 className="font-serif font-black text-2xl text-white tracking-wide mb-1">GOOD CARE</h3>
                    <p className="font-sans font-bold text-[10px] text-gold tracking-[0.25em] uppercase mb-1">INTERNATIONAL</p>
                    <p className="font-serif italic text-xs text-gray-400 tracking-wider">Tours & Travels</p>
                 </div>
             </div>
             <p className="text-gray-300 text-sm leading-relaxed mb-6">
               We create flawless and unforgettable travel experiences. From customized holidays to visa assistance, we are your trusted partner in exploring the world.
             </p>
             <div className="flex space-x-4">
               <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-gold hover:text-white transition-colors"><Facebook size={18} /></a>
               <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-gold hover:text-white transition-colors"><Instagram size={18} /></a>
               <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-gold hover:text-white transition-colors"><Twitter size={18} /></a>
               <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-gold hover:text-white transition-colors"><Linkedin size={18} /></a>
             </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gold">Quick Links</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition-transform inline-block">Home</a></li>
              <li><a href="#about" className="hover:text-white hover:translate-x-1 transition-transform inline-block">About Us</a></li>
              <li><a href="#packages" className="hover:text-white hover:translate-x-1 transition-transform inline-block">Holiday Packages</a></li>
              <li><a href="#visa" className="hover:text-white hover:translate-x-1 transition-transform inline-block">Visa Services</a></li>
              <li><a href="#gallery" className="hover:text-white hover:translate-x-1 transition-transform inline-block">Gallery</a></li>
              <li><a href="#contact" className="hover:text-white hover:translate-x-1 transition-transform inline-block">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gold">Contact Us</h4>
            <div className="space-y-4 text-gray-300 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="shrink-0 text-gold mt-1" size={18} />
                <p>1st Floor, Canara Bank Building, Icon Towers, M.C. Road, Angamaly, Kerala 683572</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="shrink-0 text-gold" size={18} />
                <p>+91 9288005112, +91 9249449316</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="shrink-0 text-gold" size={18} />
                <p>info@savannaintl.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-xs">
          <p>&copy; {new Date().getFullYear()} Good Care International. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
