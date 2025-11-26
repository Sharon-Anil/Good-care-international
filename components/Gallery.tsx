import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80', label: 'Exotic Beaches' },
  { url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80', label: 'Majestic Mountains' },
  { url: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80', label: 'Historic Canals' },
  { url: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80', label: 'Urban Adventures' },
];

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((curr) => (curr === 0 ? images.length - 1 : curr - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((curr) => (curr + 1) % images.length);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-gold font-bold tracking-widest uppercase text-sm">Visual Journey</span>
          <h2 className="text-4xl font-heading font-bold text-navy mt-2">Our Travel Gallery</h2>
          <p className="text-gray-500 mt-2">Memories from around the world.</p>
        </div>

        {/* Main Slider Container */}
        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
          
          {/* Sliding Track */}
          <div 
            className="flex h-full transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((img, index) => (
              <div key={index} className="min-w-full h-full relative overflow-hidden">
                 {/* Image with Zoom Effect on Hover */}
                 <img 
                    src={img.url} 
                    alt={img.label} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                 />
                 
                 {/* Overlay on hover */}
                 <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-10">
                     <div className="bg-white/90 backdrop-blur px-6 py-3 rounded-full text-navy font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        {img.label}
                     </div>
                 </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Buttons (Visible on Hover) */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 z-20"
            aria-label="Previous slide"
          >
            <ChevronLeft size={32} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 z-20"
            aria-label="Next slide"
          >
            <ChevronRight size={32} />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {images.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 shadow-sm ${idx === currentIndex ? 'w-8 bg-gold' : 'w-2 bg-white/60 hover:bg-white'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;