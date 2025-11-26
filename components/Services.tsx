
import React, { useState } from 'react';
import { Plane, Map, FileText, ShieldCheck, Globe, Briefcase, ChevronDown, ChevronUp } from 'lucide-react';
import { Service } from '../types';

const servicesData: Service[] = [
  {
    id: '1',
    title: 'International & Domestic Holidays',
    icon: Plane,
    shortDesc: 'Customized tour packages for Europe, Asia, and within India.',
    fullDesc: 'We offer tailored holiday packages to popular destinations like Thailand, Bali, Dubai, Maldives, Germany, and domestic gems like Kashmir, Rajasthan, Goa, and Kerala. Whether you want a luxury getaway or a budget-friendly trip, we plan every detail including flights, hotels, and sightseeing.',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    title: 'Visa Services',
    icon: FileText,
    shortDesc: 'Fast and reliable visa processing for all major countries.',
    fullDesc: 'Our expert team assists with visa documentation, application filling, and interview preparation for student visas, tourist visas, and work permits. We specialize in Schengen, US, UK, Canada, and Gulf country visas with a high success rate.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    title: 'Study Abroad Support',
    icon: Briefcase,
    shortDesc: 'Guidance for students aspiring to study in top global universities.',
    fullDesc: 'We help students achieve their dreams of studying abroad. From university selection and application assistance to visa guidance and pre-departure briefings, Good Care International is with you at every step of your academic journey.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    title: 'Air Ticketing',
    icon: Map,
    shortDesc: 'Best deals on domestic and international flight bookings.',
    fullDesc: 'Get the most competitive rates for air travel. We handle ticketing for all major airlines, handle rescheduling, and provide 24/7 support for any travel changes or emergencies.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '5',
    title: 'Document Attestation',
    icon: ShieldCheck,
    shortDesc: 'Hassle-free attestation services for your important documents.',
    fullDesc: 'We provide fast track attestation services for educational, non-educational, and commercial documents for various countries, ensuring your paperwork is legally recognized abroad.',
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '6',
    title: 'Travel Insurance',
    icon: Globe,
    shortDesc: 'Comprehensive travel insurance plans for a worry-free journey.',
    fullDesc: 'Protect yourself against unexpected events like flight cancellations, medical emergencies, or lost luggage. We offer customized insurance plans suited for families, students, and solo travelers.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

const Services: React.FC = () => {
  const [openServiceId, setOpenServiceId] = useState<string | null>(null);

  const toggleService = (id: string) => {
    setOpenServiceId(openServiceId === id ? null : id);
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-navy mb-4">Our Premium Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From planning to landing, we provide end-to-end travel solutions tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div 
              key={service.id} 
              className={`bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden transition-all duration-500 ${openServiceId === service.id ? 'ring-2 ring-skyBlue shadow-skyBlue/20' : 'hover:shadow-xl hover:-translate-y-1'}`}
            >
              <div 
                className="p-6 cursor-pointer"
                onClick={() => toggleService(service.id)}
              >
                <div className="flex items-center justify-between mb-4">
                  {/* Animated Icon Container */}
                  <div className={`p-3 bg-sky-50 text-skyBlue rounded-full transition-all duration-500 ease-out ${openServiceId === service.id ? 'scale-125 bg-sky-100 ring-4 ring-skyBlue/10 rotate-3' : ''}`}>
                    <service.icon size={28} />
                  </div>
                  
                  {/* Rotating Chevron */}
                  <div className={`transition-transform duration-500 ${openServiceId === service.id ? 'rotate-180' : ''}`}>
                     <ChevronDown className={`${openServiceId === service.id ? 'text-skyBlue' : 'text-gray-400'}`} />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-navy mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.shortDesc}</p>
              </div>

              {/* Expandable Content with Smooth Animation */}
              <div 
                className={`transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden ${openServiceId === service.id ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                {/* Inner Content with Slide Up Effect */}
                <div className={`p-6 pt-0 border-t border-gray-100 bg-gray-50 transition-all duration-700 delay-100 ${openServiceId === service.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  <div className="mt-4 mb-4 rounded-lg overflow-hidden h-48 w-full shadow-inner">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {service.fullDesc}
                  </p>
                  <button className="mt-4 text-skyBlue font-bold text-sm hover:text-navy transition-colors flex items-center gap-1 group">
                    Learn More <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
