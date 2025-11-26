import React from 'react';
import { Shield, Clock, Heart } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Animated Background - Spinning Earth - Increased visibility */}
      <div className="absolute -right-32 -top-32 w-[700px] h-[700px] opacity-20 pointer-events-none">
         <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Earth_Western_Hemisphere_transparent_background.png/1200px-Earth_Western_Hemisphere_transparent_background.png" 
            alt="Spinning Earth" 
            className="w-full h-full object-contain animate-spin-slow"
         />
      </div>

      {/* Moving Clouds/Map Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 mb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-white mb-4">Why Choose Good Care?</h2>
          <p className="text-sky-200 text-lg max-w-2xl mx-auto">
            Your trusted partner for journeys big and small. We go the extra mile to ensure your travel is seamless.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl text-center hover:bg-white/10 transition-all duration-300 group transform hover:-translate-y-2">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center mb-6 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-gold/50">
              <Shield size={36} className="text-white transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Trusted & Accredited</h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              Over 4 years of expertise and recognized by Kerala Tourism. We are a name you can rely on for secure travel.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl text-center hover:bg-white/10 transition-all duration-300 group transform hover:-translate-y-2">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-skyBlue to-blue-600 rounded-full flex items-center justify-center mb-6 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-skyBlue/50">
              <Heart size={36} className="text-white transition-transform duration-300 group-hover:animate-pulse group-hover:scale-110" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Customer First</h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              We craft trips tailored to your preferences. Your satisfaction and comfort are our top priorities.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl text-center hover:bg-white/10 transition-all duration-300 group transform hover:-translate-y-2">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mb-6 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-green-500/50">
              <Clock size={36} className="text-white transition-transform duration-300 group-hover:animate-bounce" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              Round-the-clock assistance for any emergencies or changes during your travel. We are always just a call away.
            </p>
          </div>
        </div>
      </div>

      {/* Animated Vehicles Section */}
      <div className="absolute bottom-0 left-0 w-full h-32 z-0 overflow-hidden pointer-events-none border-t border-white/5">
         {/* Road */}
         <div className="absolute bottom-0 w-full h-2 bg-white/10"></div>
         
         {/* Vehicles Container - using animate-drive from CSS config */}
         <div className="absolute bottom-2 w-full flex items-end animate-drive" style={{ animationDuration: '20s' }}>
             
             {/* Bus */}
             <div className="relative w-24 h-16 mr-32 transform hover:scale-110 transition-transform">
                 <img src="https://cdn-icons-png.flaticon.com/512/3448/3448636.png" alt="Bus" className="w-full h-full object-contain drop-shadow-2xl filter brightness-110" />
             </div>

             {/* Car */}
             <div className="relative w-16 h-10 mr-48 mb-1">
                 <img src="https://cdn-icons-png.flaticon.com/512/2554/2554936.png" alt="Car" className="w-full h-full object-contain drop-shadow-xl" />
             </div>

             {/* Scooter */}
             <div className="relative w-12 h-12 mr-24 mb-1">
                 <img src="https://cdn-icons-png.flaticon.com/512/2554/2554908.png" alt="Scooter" className="w-full h-full object-contain drop-shadow-lg" />
             </div>
             
             {/* Airplane flying higher */}
             <div className="absolute -top-20 left-10 w-16 h-16 animate-bounce" style={{ animationDuration: '3s' }}>
                 <img src="https://cdn-icons-png.flaticon.com/512/723/723955.png" alt="Plane" className="w-full h-full object-contain opacity-80" />
             </div>

         </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;