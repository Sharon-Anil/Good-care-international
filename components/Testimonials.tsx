import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { Testimonial } from '../types';

const testimonialsData: Testimonial[] = [
  {
    id: '1',
    name: 'Arjun Menon',
    location: 'Kochi, Kerala',
    rating: 5,
    text: "The best travel agency I've dealt with! They handled my Canada visa application so professionally. I got it approved in record time. Truly 'Good Care'!"
  },
  {
    id: '2',
    name: 'Sarah Jenkins',
    location: 'London, UK',
    rating: 5,
    text: "Our honeymoon to Maldives was magical. Every detail was taken care of, from the seaplane transfer to the water villa. Highly recommended!"
  },
  {
    id: '3',
    name: 'Rahul & Priya',
    location: 'Bangalore, India',
    rating: 4,
    text: "Great experience with the Dubai package. The desert safari and city tour were well organized. The hotel selection was excellent for the price."
  },
  {
    id: '4',
    name: 'Fatima Al-Sayed',
    location: 'Dubai, UAE',
    rating: 5,
    text: "Used their services for a Europe tour. The itinerary was perfect, balancing sightseeing with leisure time. Will definitely book again."
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current === 0 ? testimonialsData.length - 1 : current - 1));
  };

  return (
    <section className="py-24 bg-sky-50/50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold font-bold tracking-widest uppercase text-sm">Testimonials</span>
          <h2 className="text-4xl font-heading font-bold text-navy mt-2">What Our Clients Say</h2>
        </div>

        <div className="max-w-5xl mx-auto relative">
            <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-16 border-t-4 border-skyBlue transition-all duration-500">
                
                {/* Decorational Quote Icon */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-navy text-gold p-4 rounded-full shadow-lg ring-4 ring-white">
                    <Quote size={32} fill="#D7AA42" />
                </div>

                {/* Content Switcher */}
                <div className="min-h-[200px] flex items-center justify-center">
                     <div key={activeIndex} className="text-center animate-fade-in w-full">
                        <div className="flex justify-center gap-1 mb-6">
                            {[...Array(5)].map((_, i) => (
                                <Star 
                                    key={i} 
                                    size={24} 
                                    className={`${i < testimonialsData[activeIndex].rating ? "text-gold fill-gold" : "text-gray-300"}`} 
                                />
                            ))}
                        </div>
                        
                        <p className="text-xl md:text-2xl text-gray-600 font-body italic leading-relaxed mb-8">
                            "{testimonialsData[activeIndex].text}"
                        </p>
                        
                        <div>
                            <h4 className="text-navy font-bold text-xl font-heading">{testimonialsData[activeIndex].name}</h4>
                            <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mt-2">
                                <MapPin size={16} className="text-skyBlue" />
                                <span className="uppercase tracking-wide font-medium">{testimonialsData[activeIndex].location}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Controls */}
            <div className="flex justify-center items-center gap-8 mt-10">
                <button onClick={prevSlide} className="p-3 rounded-full bg-white shadow-md text-navy hover:bg-navy hover:text-white transition-all group">
                    <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
                </button>
                
                <div className="flex gap-2">
                    {testimonialsData.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveIndex(idx)}
                            className={`h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-8 bg-gold' : 'w-2 bg-gray-300 hover:bg-skyBlue'}`}
                        />
                    ))}
                </div>

                <button onClick={nextSlide} className="p-3 rounded-full bg-white shadow-md text-navy hover:bg-navy hover:text-white transition-all group">
                    <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;