import React from 'react';
import { ShieldCheck, Flame, Award, FileText, CheckCircle2 } from 'lucide-react';

export const CertificationsPage: React.FC = () => {
  const certifications = [
    {
      title: "CBRI Fire Testing Certificate (IS 3614 & BS 476)",
      authority: "Central Building Research Institute (Roorkee, India)",
      standard: "60 / 90 / 120 Minutes Fire Rating Integrity",
      desc: "Evaluated under high thermal stress and flame exposure. Confirms structural leaf integrity, zero flame passage, and temperature insulation parameters."
    },
    {
      title: "ISO 9001:2015 Quality Management System",
      authority: "International Organization for Standardization",
      standard: "Quality Management in Steel Door Fabrication",
      desc: "Covers raw material inspection of JSW galvanized sheets, hydraulic press embossing precision, powder coat thickness testing, and door hardware assembly."
    },
    {
      title: "Salt Spray Anti-Corrosion Test Report (ASTM B117)",
      authority: "NABL Accredited Metallurgical Testing Laboratory",
      standard: "1,000+ Hours Continuous Salt Spray Exposure",
      desc: "Proves that JSW Coated galvanized steel skins and passivated coatings resist rust, blistering, and delamination even in severe coastal environments."
    },
    {
      title: "Acoustic Insulation Test Certificate (IS 9901 / ISO 140-3)",
      authority: "Acoustic Research Center",
      standard: "Acoustic Rating up to 32 dB Sound Reduction",
      desc: "Measures sound transmission loss provided by high-density honeycomb paper infill and EPDM perimeter rubber gaskets."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="bg-slate-900 text-white p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-xl">
          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-2 inline-block">
            Verified Standards
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-serif">
            CBRI Fire Safety & ISO Certifications
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-2xl">
            Trimurti Enterprises & JSW Avante doors undergo rigorous laboratory testing to comply with National Building Code (NBC 2016) regulations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#163B8B] flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-slate-900">{cert.title}</h2>
                  <span className="text-xs font-bold text-blue-600 block">{cert.authority}</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800">
                Standard: {cert.standard}
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">{cert.desc}</p>

              <div className="flex items-center gap-2 text-xs text-emerald-600 font-bold pt-2 border-t border-slate-100">
                <CheckCircle2 className="w-4 h-4" />
                <span>Documented Test Report Available for Project Audits</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
