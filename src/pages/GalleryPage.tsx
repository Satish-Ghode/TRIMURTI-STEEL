import React, { useState } from 'react';
import { PRODUCTS } from '../data/companyData';

export const GalleryPage: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const galleryItems = [
    { title: "Embossed Dark Walnut Villa Entrance", category: "embossed", url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80" },
    { title: "Double Door with Security Grill", category: "double-grill", url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" },
    { title: "Hospital Emergency Exit Fire Door", category: "fire", url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80" },
    { title: "Glazed Steel Corporate Lobby", category: "glazed", url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" },
    { title: "Plain Finish White Office Cabin Door", category: "plain", url: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80" },
    { title: "Steel Sliding Window Balcony", category: "sliding", url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" }
  ];

  const filtered = galleryItems.filter(i => filter === 'all' || i.category === filter);

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="bg-slate-900 text-white p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-xl">
          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-2 inline-block">
            Installation Gallery
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-serif">
            Real Site Installation Gallery
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-2xl">
            Explore high-resolution visual installations of JSW Avante doors and windows across residential, commercial, and healthcare sites.
          </p>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 text-xs font-bold">
          {['all', 'plain', 'embossed', 'double-grill', 'fire', 'glazed', 'sliding'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl capitalize whitespace-nowrap ${
                filter === cat ? 'bg-[#163B8B] text-white' : 'bg-white text-slate-700 border border-slate-200'
              }`}
            >
              {cat.replace('-', ' ')}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm group">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={item.url} 
                  alt={item.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <div className="text-sm font-bold text-slate-900">{item.title}</div>
                <div className="text-[10px] uppercase font-bold text-blue-600 mt-0.5">{item.category}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
