import React, { useState } from 'react';
import { Briefcase, CheckCircle2, Send } from 'lucide-react';

export const CareersPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const openings = [
    {
      title: "Senior Sales & Project Engineer (Steel Doors)",
      location: "New Delhi / NCR",
      experience: "3 - 5 Years",
      desc: "Responsible for B2B architectural consulting, institutional sales with developers, and site door specification handovers."
    },
    {
      title: "Quality Assurance Engineer (CAD & Fabrication)",
      location: "NCR Manufacturing Unit",
      experience: "2 - 4 Years",
      desc: "Inspecting raw JSW galvanized sheet coil gsm, press embossing tolerances, powder coat paint thickness, and fire door assembly."
    },
    {
      title: "On-Site Installation Supervisor",
      location: "Delhi NCR / North Region",
      experience: "2+ Years",
      desc: "Managing installation crews for anchor bolting, EPDM rubber sealing, hardware calibration, and site client sign-offs."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="bg-slate-900 text-white p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-xl">
          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-2 inline-block">
            Join Our Team
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-serif">
            Careers at Trimurti Enterprises
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-2xl">
            Build your career with North India's premier manufacturer and channel partner for JSW Avante Smart Steel Doors & Windows.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl font-bold font-serif text-slate-900">Current Job Openings</h2>
            
            <div className="space-y-4">
              {openings.map((job, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-base font-bold text-slate-900">{job.title}</h3>
                    <span className="px-2.5 py-1 rounded bg-blue-50 text-[#163B8B] text-[10px] font-bold">
                      {job.experience}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500">{job.location}</div>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">{job.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-900">Submit Direct Resume</h3>
            
            {submitted ? (
              <div className="p-4 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-semibold text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <div>Thank you! Your job application has been submitted to Trimurti HR.</div>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-3 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Full Name *</label>
                  <input type="text" required placeholder="John Doe" className="w-full px-3 py-2 rounded-xl border border-slate-300" />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Email *</label>
                  <input type="email" required placeholder="john@example.com" className="w-full px-3 py-2 rounded-xl border border-slate-300" />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Position Applied For *</label>
                  <select className="w-full px-3 py-2 rounded-xl border border-slate-300 font-medium">
                    <option>Sales & Project Engineer</option>
                    <option>Quality Assurance Engineer</option>
                    <option>Site Installation Supervisor</option>
                    <option>Other / General Application</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Resume Summary / Note</label>
                  <textarea rows={3} placeholder="Brief description of your background in steel doors or construction..." className="w-full px-3 py-2 rounded-xl border border-slate-300" />
                </div>
                <button type="submit" className="w-full py-3 rounded-xl bg-[#163B8B] text-white font-bold text-xs flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  <span>Submit Job Application</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
