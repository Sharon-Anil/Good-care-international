
import React from 'react';
import { MapPin, Star } from 'lucide-react';
import { Package } from '../types';
import WhatsAppIcon from './WhatsAppIcon';

const packages: Package[] = [
  { id: '1', title: 'Magical Maldives', location: 'Maldives', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: '4N/5D Luxury Water Villa Stay with All Meals included.' },
  { id: '2', title: 'Dubai Extravaganza', location: 'UAE', image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: '5N/6D City Tour, Desert Safari & Burj Khalifa experience.' },
  { id: '3', title: 'Tropical Bali', location: 'Indonesia', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: '6N/7D Kuta, Ubud & Nusa Penida Island Tour.' },
  { id: '4', title: 'Swiss Delight', location: 'Switzerland', image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: '6N/7D Zurich, Lucerne & Interlaken Scenic Rail Tour.' },
  { id: '5', title: 'Royal Rajasthan', location: 'India', image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: '5N/6D Jaipur, Udaipur & Jodhpur Heritage Experience.' },
  { id: '6', title: 'Scenic Kerala', location: 'India', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: '4N/5D Munnar, Thekkady & Houseboat Stay.' },
  { id: '7', title: 'Vibrant Thailand', location: 'Thailand', image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: '5N/6D Bangkok & Pattaya with Coral Island Tour.' },
  { id: '8', title: 'Singapore Fling', location: 'Singapore', image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: '4N/5D Sentosa, Universal Studios & City Tour.' },
  { id: '9', title: 'London Calling', location: 'United Kingdom', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: '6N/7D London Eye, Tower Bridge & Historic City Walk.' },
  { id: '10', title: 'Vietnam Explorer', location: 'Vietnam', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: '7N/8D Ha Long Bay, Hanoi & Ho Chi Minh City.' },
  { id: '11', title: 'Goa Beach Vibes', location: 'India', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: '3N/4D North & South Goa Beaches & Nightlife.' },
  { id: '12', title: 'Heavenly Kashmir', location: 'India', image: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: '5N/6D Srinagar, Gulmarg & Pahalgam Snow Tour.' },
  { id: '13', title: 'Japan Cherry Blossom', location: 'Japan', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: '6N/7D Tokyo, Kyoto & Osaka Spring Tour.' },
  { id: '14', title: 'Mystic Turkey', location: 'Turkey', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: '7N/8D Istanbul, Cappadocia & Pamukkale.' },
  { id: '15', title: 'Ancient Egypt', location: 'Egypt', image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: '6N/7D Pyramids of Giza, Nile Cruise & Luxor.' },
];

const Packages: React.FC = () => {
  return (
    <section id="packages" className="py-24 bg-gray-50 relative overflow-hidden">
       {/* Background Pattern */}
       <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#014A70_1px,transparent_1px)] [background-size:16px_16px]"></div>
       </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold font-bold tracking-widest uppercase text-sm">Destinations</span>
          <h2 className="text-4xl font-heading font-bold text-navy mt-2">Trending Holiday Packages</h2>
          <p className="text-gray-500 mt-2 max-w-xl mx-auto">Explore our handpicked destinations designed for unforgettable memories.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={pkg.id} 
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 animate-fade-in flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-56 overflow-hidden shrink-0">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-navy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-navy font-bold text-xs shadow-sm flex items-center gap-1">
                  <MapPin size={12} className="text-gold" /> {pkg.location}
                </div>
              </div>
              
              <div className="p-6 flex flex-col grow">
                <div className="flex items-center gap-1 text-gold mb-3">
                  <Star size={14} fill="#D7AA42" />
                  <Star size={14} fill="#D7AA42" />
                  <Star size={14} fill="#D7AA42" />
                  <Star size={14} fill="#D7AA42" />
                  <Star size={14} fill="#D7AA42" />
                </div>
                
                <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-skyBlue transition-colors">{pkg.title}</h3>
                
                <p className="text-gray-600 text-sm line-clamp-2 mb-6 leading-relaxed grow">
                  {pkg.description}
                </p>
                
                {/* WhatsApp Booking Button */}
                <div className="mt-auto">
                    <a 
                      href={`https://wa.me/972549470080?text=${encodeURIComponent(`Hello Good Care International, I am interested in booking the "${pkg.title}" package to ${pkg.location}. Please provide more details.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gray-50 text-navy py-3 rounded-xl font-bold text-sm hover:bg-[#25D366] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 border border-gray-100 hover:border-transparent shadow-sm hover:shadow-md"
                    >
                      <WhatsAppIcon size={18} /> Book via WhatsApp
                    </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
