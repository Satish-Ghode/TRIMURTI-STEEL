import React from 'react';
import { CASE_STUDIES } from '../data/companyData';
import { CheckCircle2, Building2 } from 'lucide-react';

export const CaseStudiesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="bg-slate-900 text-white p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-xl">
          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-2 inline-block">
            Proven Execution
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-serif">
            Project Portfolio & Case Studies
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-2xl">
            In-depth analysis of major projects executed by Trimurti Enterprises using JSW Avante Smart Steel Doors & Windows.
          </p>
        </div>

        <div className="space-y-8">
          {CASE_STUDIES.map((cs) => (
            <div key={cs.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-5 aspect-[4/3] rounded-xl overflow-hidden">
                <img 
                  src={cs.imageUrl} 
                  alt={cs.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase">
                  <Building2 className="w-4 h-4" />
                  <span>{cs.industry} • {cs.location}</span>
                </div>

                <h2 className="text-2xl font-bold font-serif text-slate-900">{cs.title}</h2>
                <div className="text-xs font-bold text-slate-700">Client: {cs.clientName}</div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                  <div><strong className="text-slate-900">Challenge:</strong> {cs.challenge}</div>
                  <div><strong className="text-slate-900">Trimurti Solution:</strong> {cs.solution}</div>
                </div>

                <div>
                  <span className="font-bold text-xs text-slate-900 block mb-1">Key Outcomes & Results:</span>
                  <div className="space-y-1 text-xs text-emerald-700 font-semibold">
                    {cs.results.map((r, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
