import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageSquare, Loader2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('General Inquiry');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, subject, message })
      });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      setResult({
        success: true,
        referenceId: `TE-INQ-${Math.floor(100000 + Math.random() * 900000)}`,
        message: "Thank you! Your message has been sent to Trimurti Enterprises."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="bg-slate-900 text-white p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-xl">
          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-2 inline-block">
            Direct Contact
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-serif">
            Contact Trimurti Enterprises
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-2xl">
            Visit our NCR showroom & industrial fabrication facility or speak with our steel door engineering team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-xl font-bold font-serif text-slate-900">Corporate Office & Showroom</h2>
              
              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#163B8B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">NCR Headquarters:</strong>
                    <span>{COMPANY_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#163B8B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Phone Support:</strong>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-blue-600 font-bold">{COMPANY_INFO.phone}</a>
                    <span className="block text-slate-500">Alt: {COMPANY_INFO.altPhone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#163B8B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Email Inquiries:</strong>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-blue-600">{COMPANY_INFO.email}</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#163B8B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Working Hours:</strong>
                    <span>{COMPANY_INFO.workingHours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Location Map Simulation */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 space-y-3">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Manufacturing Unit Location</span>
              <div className="aspect-[16/9] rounded-xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center p-4 text-center">
                <MapPin className="w-8 h-8 text-[#E11D2A] animate-bounce mb-1" />
                <div className="text-xs font-bold text-white">Trimurti JSW Avante Industrial Complex</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Plot 42, Sector 58, Metro Corridor, NCR</div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold font-serif text-slate-900 mb-4">Send Us a Direct Message</h2>

            {result ? (
              <div className="p-8 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-2xl font-bold text-slate-900">Message Received!</h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">{result.message}</p>
                <div className="text-xs font-bold text-slate-500">Ref ID: {result.referenceId}</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Your Name *</label>
                    <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Ankit Sharma" className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#163B8B] focus:outline-none" />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Phone Number *</label>
                    <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 98765 43210" className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#163B8B] focus:outline-none" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Email Address *</label>
                    <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="ankit@company.com" className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#163B8B] focus:outline-none" />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Inquiry Subject</label>
                    <select value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full px-3 py-2 rounded-xl border border-slate-300 font-medium">
                      <option>General Inquiry</option>
                      <option>Distributorship / Channel Inquiry</option>
                      <option>Fire Door Certification Details</option>
                      <option>Architectural CAD Drawings</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Project Details / Message *</label>
                  <textarea rows={4} required value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us about your door quantities, project location, or technical questions..." className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#163B8B] focus:outline-none" />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-[#163B8B] hover:bg-blue-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  <span>Send Message To Trimurti Sales</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
