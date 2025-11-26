import React, { useState } from 'react';
import { Search, Calendar, ArrowRight } from 'lucide-react';
import { BlogPost } from '../types';

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Best Places to Visit in Rajasthan (Dec 2024)',
    date: 'Dec 10, 2023',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    excerpt: 'Discover the royal heritage, forts, and deserts of Rajasthan. A complete guide for your winter vacation in the Land of Kings.'
  },
  {
    id: '2',
    title: 'Bali Tour Packages from Kerala',
    date: 'Nov 28, 2023',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    excerpt: 'Plan your perfect tropical getaway from God\'s Own Country to the Island of Gods. Flights, stay, and visa details included.'
  },
  {
    id: '3',
    title: 'Germany Tour Packages for Summer',
    date: 'Oct 15, 2023',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    excerpt: 'Explore the castles of Bavaria, the streets of Berlin, and the Black Forest. Your ultimate European itinerary awaits.'
  },
  {
    id: '4',
    title: 'Goa Tour Package from Kochi',
    date: 'Sep 05, 2023',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    excerpt: 'Beaches, parties, and Portuguese architecture. A quick weekend escape plan from Kochi to Goa for friends and family.'
  },
  {
    id: '5',
    title: 'Kashmir Tour Packages from Kerala',
    date: 'Aug 20, 2023',
    image: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    excerpt: 'Experience paradise on earth. Houseboats in Dal Lake, skiing in Gulmarg, and mesmerizing valleys of flowers.'
  }
];

const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="text-left">
            <span className="text-gold font-bold tracking-widest uppercase text-sm">Travel Journal</span>
            <h2 className="text-4xl font-heading font-bold text-navy mt-2">Latest Travel Tips & Guides</h2>
          </div>
          
          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-3 pl-12 pr-4 rounded-full border border-gray-200 focus:border-skyBlue focus:ring-2 focus:ring-skyBlue/20 outline-none transition-all shadow-sm bg-white"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col h-full">
                <div className="relative h-48 overflow-hidden shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4">
                     <div className="text-white text-xs font-bold flex items-center gap-2">
                        <Calendar size={14} /> {post.date}
                     </div>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col grow">
                  <h3 className="text-xl font-bold text-navy mb-3 line-clamp-2 group-hover:text-skyBlue transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-6 leading-relaxed grow">
                    {post.excerpt}
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 text-skyBlue font-bold text-sm hover:gap-3 transition-all mt-auto">
                    Read Article <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <div className="inline-block p-4 rounded-full bg-gray-100 text-gray-400 mb-3">
                <Search size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-600">No articles found</h3>
            <p className="text-gray-500 mt-2">We couldn't find any posts matching "{searchQuery}". <br/>Try searching for "Kerala", "Bali", or "Tour".</p>
            <button 
                onClick={() => setSearchQuery('')}
                className="mt-4 text-skyBlue font-bold hover:underline"
            >
                Clear Search
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;