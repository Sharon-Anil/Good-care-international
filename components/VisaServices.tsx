import React, { useState } from 'react';
import { GraduationCap, Plane, Briefcase, Users, ChevronDown, ChevronUp, CheckCircle, FileText, Globe } from 'lucide-react';
import { VisaCategory } from '../types';

const visaCategories: VisaCategory[] = [
  {
    id: 'student',
    title: 'Student Visa',
    icon: GraduationCap,
    description: 'Start your academic journey in top destinations like UK, Canada, Germany, Australia, and New Zealand.',
    requirements: [
      'Valid Passport (min 6 months validity)',
      'University Acceptance Letter (CAS/I-20)',
      'Proof of Financial Funds',
      'Academic Transcripts & Certificates',
      'English Proficiency Test (IELTS/TOEFL)',
      'Statement of Purpose (SOP)'
    ],
    process: [
      'Free Initial Consultation & University Selection',
      'Application Submission to Universities',
      'Receive Offer Letter',
      'Visa Documentation & Financial Guidance',
      'Visa Application Submission & Interview Prep',
      'Pre-departure Briefing'
    ]
  },
  {
    id: 'tourist',
    title: 'Tourist / Visit Visa',
    icon: Plane,
    description: 'Explore the world with hassle-free tourist visas for Schengen, USA, Dubai, Singapore, and more.',
    requirements: [
      'Original Passport',
      'Recent Passport-size Photographs',
      'Confirmed Return Flight Tickets',
      'Hotel Accommodation Proof',
      'Bank Statements (Last 3-6 months)',
      'Travel Itinerary',
      'Travel Insurance'
    ],
    process: [
      'Document Verification by Experts',
      'Form Filling & Appointment Booking',
      'Submission at Embassy/VFS',
      'Passport Collection'
    ]
  },
  {
    id: 'work',
    title: 'Work Permit / Employment',
    icon: Briefcase,
    description: 'Expert assistance for skilled professionals seeking employment opportunities abroad.',
    requirements: [
      'Valid Job Offer Letter',
      'Employment Contract',
      'Educational Certificates (Attested)',
      'Police Clearance Certificate',
      'Medical Examination Report',
      'Employer Sponsorship Documents'
    ],
    process: [
      'Review of Employment Contract',
      'Document Attestation Services',
      'Work Permit Application Filing',
      'Embassy Stamping',
      'Flight Arrangements'
    ]
  },
  {
    id: 'family',
    title: 'Family / Dependent Visa',
    icon: Users,
    description: 'Reunite with your loved ones. We handle spouse, child, and parent sponsorship visas.',
    requirements: [
      'Sponsor’s Passport & Visa Copy',
      'Salary Certificate / Employment Contract',
      'Marriage Certificate / Birth Certificate',
      'Tenancy/Rental Contract',
      'Bank Statements'
    ],
    process: [
      'Eligibility Assessment',
      'Document Translation & Attestation',
      'Application Submission',
      'Visa Stamping'
    ]
  }
];

const VisaServices: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('student');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="visa" className="py-20 bg-white relative">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-3 bg-navy/5 rounded-full mb-4">
                <Globe className="text-navy w-6 h-6" />
            </div>
            <h2 className="text-4xl font-heading font-bold text-navy mb-4">Global Visa Assistance</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
                Navigate complex immigration rules with ease. Our experts ensure a 99% success rate for your visa applications.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Side: Interactive Accordion */}
            <div className="lg:col-span-7 space-y-6">
                {visaCategories.map((visa) => (
                    <div 
                        key={visa.id}
                        className={`rounded-2xl border transition-all duration-300 overflow-hidden ${expandedId === visa.id ? 'border-skyBlue bg-sky-50/30 shadow-lg' : 'border-gray-100 bg-white hover:border-skyBlue/50'}`}
                    >
                        <button 
                            onClick={() => toggleExpand(visa.id)}
                            className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                        >
                            <div className="flex items-center gap-4">
                                <div className={`p-3 rounded-full ${expandedId === visa.id ? 'bg-skyBlue text-white' : 'bg-gray-100 text-gray-500'}`}>
                                    <visa.icon size={24} />
                                </div>
                                <div>
                                    <h3 className={`text-xl font-bold ${expandedId === visa.id ? 'text-navy' : 'text-gray-700'}`}>{visa.title}</h3>
                                    <p className="text-sm text-gray-500 hidden sm:block mt-1">{visa.description}</p>
                                </div>
                            </div>
                            {expandedId === visa.id ? <ChevronUp className="text-skyBlue" /> : <ChevronDown className="text-gray-400" />}
                        </button>

                        {/* Expanded Content */}
                        <div 
                            className={`transition-all duration-500 ease-in-out overflow-hidden ${expandedId === visa.id ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                            <div className="p-6 pt-0 border-t border-skyBlue/10">
                                <div className="grid md:grid-cols-2 gap-8 mt-6">
                                    <div>
                                        <h4 className="font-bold text-navy flex items-center gap-2 mb-4">
                                            <FileText size={18} className="text-gold" /> Required Documents
                                        </h4>
                                        <ul className="space-y-3">
                                            {visa.requirements.map((req, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                                    <div className="min-w-[6px] h-[6px] rounded-full bg-skyBlue mt-1.5"></div>
                                                    {req}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    <div>
                                        <h4 className="font-bold text-navy flex items-center gap-2 mb-4">
                                            <CheckCircle size={18} className="text-green-500" /> Application Process
                                        </h4>
                                        <ol className="relative border-l-2 border-gray-200 ml-2 space-y-6">
                                            {visa.process.map((step, idx) => (
                                                <li key={idx} className="pl-6 relative">
                                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-gold"></div>
                                                    <span className="text-sm font-bold text-navy block mb-1">Step {idx + 1}</span>
                                                    <span className="text-sm text-gray-600">{step}</span>
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                </div>
                                
                                <div className="mt-8 flex justify-end">
                                    <button className="bg-navy text-white px-6 py-2 rounded-lg text-sm font-bold hover:bg-gold transition-colors">
                                        Start Application
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Right Side: Sticky Info Card */}
            <div className="lg:col-span-5">
                <div className="sticky top-24">
                    <div className="bg-navy text-white rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute top-0 right-0 opacity-10">
                            <Plane size={200} />
                        </div>

                        <h3 className="text-2xl font-bold mb-4 relative z-10">Why Choose Good Care for Visas?</h3>
                        <p className="text-sky-100 mb-8 relative z-10">
                            We don't just file papers; we guide you through the entire legal framework to ensure your journey is smooth and legal.
                        </p>

                        <div className="space-y-6 relative z-10">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-gold font-bold text-xl">99%</div>
                                <div>
                                    <p className="font-bold">Success Rate</p>
                                    <p className="text-xs text-gray-400">Proven track record</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-gold font-bold text-xl">4+</div>
                                <div>
                                    <p className="font-bold">Years Experience</p>
                                    <p className="text-xs text-gray-400">Industry experts</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-gold font-bold text-xl">24/7</div>
                                <div>
                                    <p className="font-bold">Support</p>
                                    <p className="text-xs text-gray-400">Always here for you</p>
                                </div>
                            </div>
                        </div>

                        <button className="w-full bg-gold text-navy font-bold py-4 rounded-xl mt-8 hover:bg-white transition-colors relative z-10">
                            Book Free Consultation
                        </button>
                    </div>

                    <div className="mt-8 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                         <h4 className="font-bold text-navy mb-2">Need a Document Attested?</h4>
                         <p className="text-sm text-gray-600 mb-4">We handle certificate attestation for UAE, Qatar, Kuwait, and more.</p>
                         <a href="#contact" className="text-skyBlue font-bold text-sm hover:underline">Contact Support &rarr;</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default VisaServices;