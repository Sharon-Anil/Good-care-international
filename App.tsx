
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Packages from './components/Packages';
import ImageEditor from './components/ImageEditor';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import VisaServices from './components/VisaServices';
import Blog from './components/Blog';
import AboutUs from './components/AboutUs';
import AiTripPlanner from './components/AiTripPlanner';
import WhatsAppIcon from './components/WhatsAppIcon';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-gray-800 bg-white">
      <Navbar />
      
      <main>
        <Hero />
        <AboutUs />
        <Packages />
        <AiTripPlanner />
        <Services />
        <VisaServices />
        <WhyChooseUs />
        <Blog />
        <ImageEditor />
        <Gallery />
        <Testimonials />
      </main>

      <Footer />

      {/* WhatsApp Sticky Button - Left Side */}
      <a 
        href="https://wa.me/972549470080" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group animate-bounce"
        style={{ animationDuration: '2s', animationIterationCount: 'infinite' }}
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon size={32} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold">
          Chat with us
        </span>
      </a>
    </div>
  );
};

export default App;
