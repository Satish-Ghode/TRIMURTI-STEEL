import React from 'react';
import { Building2, HeartPulse, GraduationCap, Factory, ShieldAlert, Home, ArrowRight } from 'lucide-react';

interface IndustriesPageProps {
  onOpenQuoteModal: () => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onOpenQuoteModal }) => {
  const industries = [
    {
      icon: HeartPulse,
      title: "Hospitals & Healthcare Wards",
      desc: "CBRI 120-minute fire barrier doors with Rockwool insulation, antibacterial powder coatings, and quiet 30dB acoustic dampening for ICU and operating theaters."
    },
    {
      icon: Home,
      title: "Residential Villas & Luxury Apartments",
      desc: "3D Embossed smart steel doors in rich Dark Walnut and Teak wood grain finishes with digital biometric locks and integrated insect safety grills."
    },
    {
      icon: Building2,
      title: "Commercial Malls & IT Towers",
      desc: "Architectural glazed doors, sleek flush office cabin doors, and high-footfall heavy duty entrance frames."
    },
    {
      icon: GraduationCap,
      title: "Educational Schools & Universities",
      desc: "Durable, child-safe, anti-pinch doors and steel sliding windows with wire mesh for natural ventilation and noise reduction."
    },
    {
      icon: Factory,
      title: "Industrial Plants & Warehouses",
      desc: "Galvanized anti-rust emergency exit doors equipped with UL-listed panic push bars, smoke seals, and vision glass."
    },
    {
      icon: ShieldAlert,
      title: "Government & Metro Rail Infrastructure",
      desc: "Salt-spray tested heavy gauge steel doors capable of withstanding extreme environmental pollution and high footfall egress."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="bg-slate-900 text-white p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-xl">
          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-2 inline-block">
            Sector Solutions
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-serif">
            Industries & Applications Served
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-2xl">
            Customized JSW Avante steel doors and windows tailored to strict safety codes, acoustic control, and aesthetic expectations across sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, idx) => {
            const IconComp = ind.icon;
            return (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#163B8B] flex items-center justify-center font-bold">
                  <IconComp className="w-6 h-6" />
                </div>
                <h2 className="text-lg font-bold text-slate-900">{ind.title}</h2>
                <p className="text-xs text-slate-600 leading-relaxed">{ind.desc}</p>
                <button
                  onClick={onOpenQuoteModal}
                  className="text-xs font-bold text-[#163B8B] hover:underline flex items-center gap-1"
                >
                  <span>Inquire for {ind.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
