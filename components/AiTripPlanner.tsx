import React, { useState } from 'react';
import { Map, Calendar, DollarSign, Users, Heart, Sparkles, Loader2, MapPin, Clock, Hotel } from 'lucide-react';

const AiTripPlanner: React.FC = () => {
  const [destination, setDestination] = useState('');
  const [days, setDays] = useState('5');
  const [budget, setBudget] = useState('Moderate');
  const [travelers, setTravelers] = useState('2');
  const [interests, setInterests] = useState('');
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<TripPlanResult | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!destination) return;
    
    setLoading(true);
    setPlan(null);
    
    try {
      const result = await generateTripItinerary(destination, days, budget, travelers, interests || 'General sightseeing');
      setPlan(result);
    } catch (error) {
      console.error(error);
      alert("Sorry, something went wrong while planning your trip.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-planner" className="py-24 bg-gradient-to-b from-white to-sky-50 relative overflow-hidden">
       {/* Background Decor */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-[-100px] w-[300px] h-[300px] bg-gold/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-[-100px] w-[400px] h-[400px] bg-skyBlue/5 rounded-full blur-3xl"></div>
       </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-skyBlue/10 rounded-full mb-4">
             <Sparkles className="text-skyBlue w-6 h-6" />
          </div>
          <h2 className="text-4xl font-heading font-bold text-navy mb-4">AI Trip Planner</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tell us where you want to go, and our AI will craft the perfect day-by-day itinerary for you in seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
           {/* Input Form */}
           <div className="lg:col-span-4">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 sticky top-24">
                  <h3 className="text-xl font-bold text-navy mb-6">Trip Details</h3>
                  <form onSubmit={handleGenerate} className="space-y-5">
                      <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                             <MapPin size={16} className="text-gold" /> Destination
                          </label>
                          <input 
                             type="text" 
                             value={destination}
                             onChange={(e) => setDestination(e.target.value)}
                             placeholder="e.g., Paris, Japan, Kerala"
                             className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-skyBlue outline-none transition-all"
                             required
                          />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                          <div>
                              <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                                 <Calendar size={16} className="text-gold" /> Duration (Days)
                              </label>
                              <input 
                                 type="number" 
                                 min="1" max="15"
                                 value={days}
                                 onChange={(e) => setDays(e.target.value)}
                                 className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-skyBlue outline-none transition-all"
                              />
                          </div>
                          <div>
                              <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                                 <Users size={16} className="text-gold" /> Travelers
                              </label>
                              <input 
                                 type="number" 
                                 min="1" max="20"
                                 value={travelers}
                                 onChange={(e) => setTravelers(e.target.value)}
                                 className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-skyBlue outline-none transition-all"
                              />
                          </div>
                      </div>

                      <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                             <DollarSign size={16} className="text-gold" /> Budget
                          </label>
                          <select 
                             value={budget}
                             onChange={(e) => setBudget(e.target.value)}
                             className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-skyBlue outline-none transition-all"
                          >
                             <option value="Budget-Friendly">Budget-Friendly</option>
                             <option value="Moderate">Moderate</option>
                             <option value="Luxury">Luxury</option>
                          </select>
                      </div>

                      <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                             <Heart size={16} className="text-gold" /> Interests
                          </label>
                          <input 
                             type="text" 
                             value={interests}
                             onChange={(e) => setInterests(e.target.value)}
                             placeholder="e.g., Food, History, Adventure"
                             className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-skyBlue outline-none transition-all"
                          />
                      </div>

                      <button 
                          type="submit"
                          disabled={loading}
                          className="w-full py-4 bg-navy text-white font-bold rounded-xl shadow-lg hover:bg-skyBlue transition-all flex items-center justify-center gap-2 mt-4 group disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                          {loading ? <Loader2 className="animate-spin" /> : <Sparkles className="group-hover:scale-110 transition-transform" />} 
                          {loading ? "Planning Trip..." : "Plan My Trip"}
                      </button>
                  </form>
              </div>
           </div>

           {/* Results Section */}
           <div className="lg:col-span-8">
              {loading ? (
                  <div className="h-full flex flex-col items-center justify-center min-h-[400px] bg-white rounded-2xl border border-gray-100 shadow-inner p-10 text-center">
                      <div className="relative mb-6">
                         <div className="w-20 h-20 border-4 border-skyBlue border-t-transparent rounded-full animate-spin"></div>
                         <div className="absolute inset-0 flex items-center justify-center">
                             <Map size={24} className="text-skyBlue animate-pulse" />
                         </div>
                      </div>
                      <h3 className="text-xl font-bold text-navy">Designing Your Dream Itinerary</h3>
                      <p className="text-gray-500 mt-2 animate-pulse">Finding the best hotels... Mapping activities... Calculating costs...</p>
                  </div>
              ) : plan ? (
                  <div className="space-y-8 animate-fade-in">
                      
                      {/* Header Card */}
                      <div className="bg-navy text-white rounded-2xl p-8 shadow-xl relative overflow-hidden">
                          <div className="absolute top-0 right-0 opacity-10">
                             <Map size={200} />
                          </div>
                          <div className="relative z-10">
                              <h2 className="text-3xl font-heading font-bold mb-2">{plan.tripTitle}</h2>
                              <div className="flex flex-wrap gap-4 mt-4 text-sm font-medium">
                                  <span className="bg-white/20 px-3 py-1 rounded-full flex items-center gap-1"><Calendar size={14} /> {days} Days</span>
                                  <span className="bg-white/20 px-3 py-1 rounded-full flex items-center gap-1"><Users size={14} /> {travelers} Travelers</span>
                                  <span className="bg-gold text-navy px-3 py-1 rounded-full flex items-center gap-1 font-bold"><DollarSign size={14} /> {plan.estimatedCost}</span>
                              </div>
                          </div>
                      </div>

                      {/* Hotels */}
                      <div className="grid md:grid-cols-3 gap-4">
                         {plan.hotels.map((hotel, idx) => (
                             <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                                 <div className="flex items-center gap-2 mb-2 text-navy font-bold">
                                    <Hotel size={18} className="text-gold" />
                                    <h4 className="line-clamp-1">{hotel.name}</h4>
                                 </div>
                                 <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">{hotel.description}</p>
                             </div>
                         ))}
                      </div>

                      {/* Itinerary Timeline */}
                      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                          <div className="p-6 border-b border-gray-100 bg-gray-50">
                             <h3 className="text-xl font-bold text-navy flex items-center gap-2">
                                <Calendar className="text-skyBlue" /> Daily Itinerary
                             </h3>
                          </div>
                          <div className="p-6">
                              {plan.dailyItinerary.map((dayPlan, idx) => (
                                  <div key={idx} className="mb-8 last:mb-0 relative pl-8 border-l-2 border-skyBlue/20 last:border-transparent">
                                      {/* Day Marker */}
                                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-skyBlue border-2 border-white ring-2 ring-skyBlue/20"></div>
                                      
                                      <div className="mb-4">
                                          <h4 className="text-lg font-bold text-navy">Day {dayPlan.day}: <span className="text-skyBlue">{dayPlan.theme}</span></h4>
                                      </div>

                                      <div className="space-y-4">
                                          {dayPlan.activities.map((act, actIdx) => (
                                              <div key={actIdx} className="bg-gray-50 rounded-lg p-4 hover:bg-sky-50 transition-colors border border-gray-100">
                                                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                                      <div className="shrink-0 flex items-center gap-1 text-xs font-bold text-gold bg-white px-2 py-1 rounded border border-gray-100 w-fit">
                                                          <Clock size={12} /> {act.time}
                                                      </div>
                                                      <p className="text-gray-700 text-sm font-medium">{act.activity}</p>
                                                  </div>
                                              </div>
                                          ))}
                                      </div>
                                  </div>
                              ))}
                          </div>
                      </div>
                  </div>
              ) : (
                  <div className="h-full flex flex-col items-center justify-center bg-white rounded-2xl border-2 border-dashed border-gray-200 min-h-[400px] p-8 text-center">
                      <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                          <Map className="text-gray-300 w-10 h-10" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-500">Ready to plan your next adventure?</h3>
                      <p className="text-gray-400 max-w-md mt-2">
                          Fill in the details on the left and let our AI create a personalized itinerary just for you.
                      </p>
                  </div>
              )}
           </div>
        </div>
      </div>
    </section>
  );
};

export default AiTripPlanner;