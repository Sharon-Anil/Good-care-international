import React from 'react';
import { ArrowRight, Globe, Shield, Star, Users, Award } from 'lucide-react';

const AboutUs: React.FC = () => {
  
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
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
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -z-10 hidden lg:block skew-x-12 translate-x-20"></div>
      <div className="absolute bottom-10 left-10 text-9xl font-bold text-gray-50 -z-10 select-none opacity-50 pointer-events-none">TRAVEL</div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Composition */}
          <div className="relative">
            <div className="relative z-10 rounded-tr-[80px] rounded-bl-[80px] overflow-hidden shadow-2xl border-4 border-white group h-[550px]">
              <img 
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Travel Experience" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
               {/* Overlay Gradient */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border-l-4 border-gold max-w-[200px] hidden md:block animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="flex items-center gap-3 mb-2">
                   <div className="p-2 bg-navy text-white rounded-full">
                      <Award size={20} />
                   </div>
                   <span className="text-4xl font-bold text-navy">4+</span>
                </div>
                <p className="text-sm font-bold text-gray-600 leading-tight">Years of Excellence in Tourism</p>
            </div>

             {/* Abstract Shape */}
             <div className="absolute -top-8 -left-8 w-24 h-24 bg-gold/20 rounded-full blur-xl"></div>
          </div>

          {/* Content Section */}
          <div>
            <div className="inline-block px-4 py-1 bg-sky-50 text-skyBlue font-bold text-xs uppercase tracking-widest mb-4 rounded-md">
               Welcome to Good Care
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-navy mb-6 leading-tight">
              We Make Your Travel <br/>
              <span className="text-gold">Dreams a Reality</span>
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              <strong>Good Care International</strong> is not just a travel agency; we are your architects of memory. 
              Based in Kerala and approved by the Department of Tourism, we specialize in curating seamless journeys to the world's most breathtaking destinations. 
              From the canals of Venice to the beaches of Bali, and handling the complexities of Visa processing, we ensure your only job is to pack your bags.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100">
                    <div className="shrink-0 p-3 bg-navy text-white rounded-lg">
                        <Globe size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-navy text-lg">World Class Tours</h4>
                        <p className="text-sm text-gray-500 mt-1">Customized packages for Europe, Asia & UAE.</p>
                    </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100">
                    <div className="shrink-0 p-3 bg-gold text-navy rounded-lg">
                        <Shield size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-navy text-lg">100% Secure</h4>
                        <p className="text-sm text-gray-500 mt-1">Govt. approved agency & secure booking process.</p>
                    </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100">
                    <div className="shrink-0 p-3 bg-skyBlue text-white rounded-lg">
                        <Users size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-navy text-lg">Visa Experts</h4>
                        <p className="text-sm text-gray-500 mt-1">High success rate for Student & Visit visas.</p>
                    </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100">
                    <div className="shrink-0 p-3 bg-green-500 text-white rounded-lg">
                        <Star size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-navy text-lg">Top Rated</h4>
                        <p className="text-sm text-gray-500 mt-1">Loved by 1000+ happy travelers.</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact" 
                  onClick={scrollToContact}
                  className="px-8 py-4 bg-navy text-white font-bold rounded-lg hover:bg-skyBlue transition-colors shadow-lg flex items-center justify-center gap-2 group"
                >
                  Discover More <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                 <div className="flex items-center gap-3 px-6 py-3 border border-gray-200 rounded-lg bg-white">
                    <div className="relative flex -space-x-3">
                        <img className="w-8 h-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/1.jpg" alt="Client"/>
                        <img className="w-8 h-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/2.jpg" alt="Client"/>
                        <img className="w-8 h-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/3.jpg" alt="Client"/>
                    </div>
                    <div className="text-xs">
                        <p className="font-bold text-navy">1K+ Clients</p>
                        <p className="text-gray-500">Satisfied</p>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;