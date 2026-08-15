import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Award, ShieldCheck, Factory, CheckCircle2, Users, Target, HeartHandshake } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-slate-800 shadow-xl">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4 text-blue-400" />
              <span>Company Profile & Sister Concern Partnership</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-serif tracking-tight">
              About Trimurti Enterprises
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Authorized channel partner, fabricator, and distributor of JSW Avante Smart Steel Doors & Windows (JSW Steel Coated Products Limited).
            </p>
          </div>
        </div>

        {/* Corporate Profile Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4 bg-white p-8 rounded-2xl border border-slate-200 shadow-xs">
            <h2 className="text-2xl font-bold font-serif text-slate-900">
              Our Legacy of Metallurgical & Architectural Excellence
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Trimurti Enterprises was established with a singular mission: to eliminate the inherent flaws of wooden entryways—such as termite degradation, monsoon swelling, fire vulnerability, and deforestation—by manufacturing high-precision smart steel doors and windows.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              As an authorized partner for JSW Avante, our facilities utilize hot-dip zinc galvanized steel sheets produced by JSW Steel Coated Products Limited. Combined with high-density honeycomb sound attenuation cores and electrostatic powder coating technology, our products set the industry benchmark for security, elegance, and lifetime longevity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <Factory className="w-6 h-6 text-[#163B8B] mb-2" />
                <h3 className="font-bold text-slate-900 text-xs">State-of-the-Art Factory</h3>
                <p className="text-[11px] text-slate-500 mt-0.5">High-tonnage hydraulic presses & laser cutting equipment.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <ShieldCheck className="w-6 h-6 text-[#163B8B] mb-2" />
                <h3 className="font-bold text-slate-900 text-xs">CBRI Fire Certified</h3>
                <p className="text-[11px] text-slate-500 mt-0.5">Tested & compliant with NBC 2016 safety norms.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-[#163B8B] to-[#0F2A66] text-white p-8 rounded-2xl shadow-xl space-y-6">
            <h3 className="text-xl font-extrabold font-serif">Mission & Vision</h3>
            <div className="space-y-4 text-xs text-slate-200">
              <div className="p-4 rounded-xl bg-white/10 border border-white/10">
                <span className="font-bold text-amber-300 block mb-1">Our Mission:</span>
                To provide indestructible, fire-safe, termite-proof, and aesthetic steel doors and windows that safeguard human lives and architectural investments.
              </div>
              <div className="p-4 rounded-xl bg-white/10 border border-white/10">
                <span className="font-bold text-amber-300 block mb-1">Our Vision:</span>
                To lead the Indian architectural transition from vulnerable timber doors to eco-friendly, zero-maintenance smart steel entryways.
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
