import React from 'react';
import { Wrench, Ruler, ShieldCheck, Truck, Headphones, Sparkles, ArrowRight } from 'lucide-react';

interface ServicesPageProps {
  onOpenQuoteModal: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenQuoteModal }) => {
  const services = [
    {
      icon: Ruler,
      title: "On-Site Architectural Measurement",
      desc: "Our technical engineers visit your project location with precision laser measuring tools to evaluate wall openings, floor levels, and structural frames before fabrication."
    },
    {
      icon: Wrench,
      title: "Custom Steel Door & Frame Fabrication",
      desc: "Tailor-made manufacturing for custom heights, double-leaf layouts, glass vision panels, louvers, panic bars, and specialized RAL powder coat colors."
    },
    {
      icon: ShieldCheck,
      title: "Fire Safety Audits & Certification Support",
      desc: "Providing certified 60/90/120 minute fire-rated steel doors accompanied by official CBRI / NABL lab test documentation compliant with NBC 2016 regulations."
    },
    {
      icon: Truck,
      title: "Turnkey Professional Installation",
      desc: "Factory-trained installation crews handle anchor bolting, EPDM rubber weather sealing, frame alignment, and hardware calibration in less than 2 hours per door."
    },
    {
      icon: Headphones,
      title: "Lifetime Support & Warranty Service",
      desc: "Direct manufacturer guarantee backed by Trimurti Enterprises and JSW Steel Coated Products, covering anti-corrosion, structural hinges, and locks."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="bg-slate-900 text-white p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-xl">
          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-2 inline-block">
            End-to-End Solutions
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-serif">
            Engineering & Technical Support Services
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-2xl">
            From preliminary architectural consultation and CAD drawings to site laser measurements and turnkey door installation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => {
            const IconComp = srv.icon;
            return (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#163B8B] flex items-center justify-center font-bold">
                  <IconComp className="w-6 h-6" />
                </div>
                <h2 className="text-lg font-bold text-slate-900">{srv.title}</h2>
                <p className="text-xs text-slate-600 leading-relaxed">{srv.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="p-8 rounded-2xl bg-[#163B8B] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-2xl font-bold font-serif">Need a Technical Engineer for Site Measurement?</h3>
            <p className="text-xs text-blue-100 mt-1">Book an appointment for on-site wall opening evaluation in NCR or North India.</p>
          </div>
          <button
            onClick={onOpenQuoteModal}
            className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-xs shrink-0 shadow-md"
          >
            Schedule Site Measurement
          </button>
        </div>

      </div>
    </div>
  );
};
