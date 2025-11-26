import React, { useState, useEffect } from 'react';
import { ArrowRight, Facebook, Instagram, Twitter, Linkedin, MousePointer2, PlayCircle } from 'lucide-react';
import Logo from './Logo';

const heroSlides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80', // Iconic Airplane Wing
    title: 'Explore The Unseen World',
    subtitle: 'Discover the most breathtaking destinations with Good Care International. Your journey to paradise begins here.'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80', // Maldives Water Villa
    title: 'Luxury Beach Escapes',
    subtitle: 'Experience the crystal clear waters of Maldives and Bali. Premium packages tailored for your relaxation.'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80', // Eiffel Tower Paris
    title: 'European Adventures',
    subtitle: 'Wander through the historic streets of Paris, Rome, and Swiss Alps. Visa assistance included.'
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000); // Reset animation state
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const setSlide = (index: number) => {
    if (index === currentSlide) return;
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
    setCurrentSlide(index);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      // Account for fixed navbar (approx 80px)
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-navy group">
      
      {/* Background Slider */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 z-[-1]'
          }`}
        >
           {/* Floating Wrapper: Handles the continuous subtle float animation.
               Scaled to 110% to prevent edges from showing during movement. */}
           <div className="absolute inset-[-5%] w-[110%] h-[110%] animate-float">
               <img 
                 src={slide.image} 
                 alt={slide.title} 
                 className={`w-full h-full object-cover transition-transform duration-[6000ms] ease-in-out ${
                   index === currentSlide ? 'scale-110' : 'scale-100'
                 }`}
               />
           </div>
           
           {/* Dark Gradient Overlay for Text Readability */}
           <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/40 to-transparent"></div>
        </div>
      ))}

      {/* Ambient Animated Clouds/Fog */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[5%] left-[-10%] w-[500px] h-[200px] bg-white/10 blur-[80px] rounded-full animate-float" style={{ animationDuration: '8s' }}></div>
          <div className="absolute top-[10%] right-[-10%] w-[400px] h-[150px] bg-skyBlue/10 blur-[60px] rounded-full animate-float" style={{ animationDuration: '12s', animationDelay: '1s' }}></div>
          <div className="absolute bottom-[15%] left-[20%] w-[600px] h-[200px] bg-white/5 blur-[100px] rounded-full animate-float" style={{ animationDuration: '15s', animationDelay: '2s' }}></div>
      </div>

      {/* Social Sidebar - Left Side */}
      <div className="absolute left-0 top-0 bottom-0 w-20 hidden lg:flex flex-col items-center justify-center z-20 border-r border-white/10 bg-navy/20 backdrop-blur-sm">
        <div className="flex flex-col gap-8">
            <a href="#" className="text-white/70 hover:text-gold transition-all transform hover:scale-125 hover:-translate-y-1 duration-300"><Facebook size={24} /></a>
            <a href="#" className="text-white/70 hover:text-gold transition-all transform hover:scale-125 hover:-translate-y-1 duration-300"><Instagram size={24} /></a>
            <a href="#" className="text-white/70 hover:text-gold transition-all transform hover:scale-125 hover:-translate-y-1 duration-300"><Twitter size={24} /></a>
            <a href="#" className="text-white/70 hover:text-gold transition-all transform hover:scale-125 hover:-translate-y-1 duration-300"><Linkedin size={24} /></a>
        </div>
        <div className="absolute bottom-10 w-px h-20 bg-gradient-to-b from-white/50 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center lg:pl-28">
         <div className="max-w-4xl">
            {/* Animated Text Content Keyed to Slide */}
            <div key={currentSlide} className="animate-fade-in">
                <div className="flex items-center gap-4 mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                   {/* Logo Animation - Using SVG Component */}
                   <div className="animate-pulse" style={{ animationDuration: '3s' }}>
                      <Logo className="w-16 h-16 drop-shadow-lg" />
                   </div>
                   
                   <span className="text-gold font-bold tracking-[0.3em] uppercase text-sm md:text-base shadow-black drop-shadow-md">
                     Good Care International
                   </span>
                </div>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-[1.1] mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  {heroSlides[currentSlide].title}
                </h1>
                
                <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-xl leading-relaxed opacity-0 animate-fade-in shadow-black drop-shadow-sm" style={{ animationDelay: '0.6s' }}>
                  {heroSlides[currentSlide].subtitle}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-5 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                   <a 
                     href="#packages" 
                     onClick={(e) => scrollToSection(e, '#packages')}
                     className="px-10 py-4 bg-gold text-navy font-bold rounded-full hover:bg-white hover:text-navy transition-all shadow-lg hover:shadow-gold/50 flex items-center justify-center gap-3 group transform hover:-translate-y-1 cursor-pointer"
                   >
                      Plan Your Trip <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                   </a>
                   <a 
                     href="#services" 
                     onClick={(e) => scrollToSection(e, '#services')}
                     className="px-10 py-4 border border-white/30 bg-white/5 backdrop-blur-md text-white font-bold rounded-full hover:bg-white hover:text-navy transition-all flex items-center justify-center gap-3 group transform hover:-translate-y-1 cursor-pointer"
                   >
                      <PlayCircle size={20} className="group-hover:scale-110 transition-transform" /> Our Services
                   </a>
                </div>
            </div>
         </div>
      </div>

      {/* Slide Indicators & Controls - Right Side */}
      <div className="absolute bottom-10 right-10 lg:bottom-20 lg:right-20 z-20 flex items-center gap-6">
         <div className="text-white font-heading font-bold text-xl">
             0{currentSlide + 1} <span className="text-white/40 text-base font-normal">/ 0{heroSlides.length}</span>
         </div>
         <div className="flex gap-2">
             {heroSlides.map((_, index) => (
               <button 
                 key={index}
                 onClick={() => setSlide(index)}
                 className={`h-2 rounded-full transition-all duration-500 ${currentSlide === index ? 'w-16 bg-gold' : 'w-3 bg-white/30 hover:bg-white/60'}`}
                 aria-label={`Go to slide ${index + 1}`}
               ></button>
             ))}
         </div>
      </div>

      {/* Scroll Down Hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 z-20 opacity-70 animate-bounce">
         <span className="text-white text-xs tracking-widest uppercase">Scroll Down</span>
         <MousePointer2 size={20} className="text-gold" />
      </div>

    </section>
  );
};

export default Hero;
