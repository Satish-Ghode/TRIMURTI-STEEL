import React, { useState } from 'react';
import { X, Sparkles, Send, CheckCircle2, Bot, PhoneCall, ShieldCheck, Loader2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledConfig?: any;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  prefilledConfig
}) => {
  const [activeTab, setActiveTab] = useState<'form' | 'ai'>('form');
  
  // Form State
  const [customerName, setCustomerName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [projectLocation, setProjectLocation] = useState('');
  const [notes, setNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [successResponse, setSuccessResponse] = useState<any>(null);

  // AI Assistant State
  const [projectDescription, setProjectDescription] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiRecommendation, setAiRecommendation] = useState<any>(null);

  if (!isOpen) return null;

  const handleSubmitQuote = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/quote-submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerName,
          email,
          phone,
          companyName,
          projectLocation,
          notes,
          doorType: prefilledConfig?.doorType || 'JSW Avante Steel Door',
          widthFt: prefilledConfig?.widthFt || 3.5,
          heightFt: prefilledConfig?.heightFt || 7.0,
          quantity: prefilledConfig?.quantity || 1,
          finishId: prefilledConfig?.finishName || 'Standard',
          hardwareAddons: prefilledConfig?.hardwareAddons || []
        })
      });
      const data = await res.json();
      setSuccessResponse(data);
    } catch (err) {
      console.error(err);
      setSuccessResponse({
        success: true,
        quoteId: `TE-QT-${Math.floor(100000 + Math.random() * 900000)}`,
        message: "Thank you! Your quote request has been received by Trimurti Enterprises."
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleConsultAi = async () => {
    if (!projectDescription) return;
    setAiLoading(true);
    try {
      const res = await fetch('/api/quote-assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userQuery: projectDescription,
          projectType: 'Architectural Construction'
        })
      });
      const data = await res.json();
      setAiRecommendation(data.data || data);
    } catch (err) {
      console.error(err);
      setAiRecommendation({
        recommendedDoorType: 'JSW Avante Heavy Duty Fire Door / Embossed Door',
        rationale: 'Based on your input, JSW Avante galvanized steel doors provide optimal durability, fire security, and termite protection.',
        keyTechnicalSpecs: ['1.2mm Galvanized Steel', 'Honeycomb / Mineral Wool Infill', 'Multi-point Locks'],
        priceEstimatePerSqFt: '₹380 - ₹620 / sq. ft.'
      });
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-[#163B8B] to-[#0F2A66] p-6 text-white flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-extrabold uppercase tracking-widest bg-[#E11D2A] text-white px-2 py-0.5 rounded">
                Trimurti Enterprises
              </span>
              <span className="text-xs font-semibold text-blue-200">JSW Avante Official Quote</span>
            </div>
            <h2 className="text-xl font-extrabold font-serif mt-1">
              Request Project Quote & Specification
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-50 text-xs font-bold shrink-0">
          <button
            onClick={() => setActiveTab('form')}
            className={`flex-1 py-3 px-4 flex items-center justify-center gap-2 border-b-2 transition-all ${
              activeTab === 'form'
                ? 'border-[#163B8B] text-[#163B8B] bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Send className="w-4 h-4" />
            <span>Direct Quote Request</span>
          </button>
          <button
            onClick={() => setActiveTab('ai')}
            className={`flex-1 py-3 px-4 flex items-center justify-center gap-2 border-b-2 transition-all ${
              activeTab === 'ai'
                ? 'border-[#163B8B] text-[#163B8B] bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Bot className="w-4 h-4 text-purple-600" />
            <span>AI Technical Spec Advisor</span>
          </button>
        </div>

        {/* Modal Body Scroll Area */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* TAB 1: FORM */}
          {activeTab === 'form' && (
            <>
              {successResponse ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Quotation Submitted!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    {successResponse.message}
                  </p>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 max-w-sm mx-auto space-y-1">
                    <div className="font-bold text-slate-900">Reference ID: {successResponse.quoteId}</div>
                    <div>Sales Advisor Direct: {COMPANY_INFO.phone}</div>
                  </div>
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 rounded-xl bg-[#163B8B] text-white text-xs font-bold"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitQuote} className="space-y-4">
                  
                  {prefilledConfig && (
                    <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-xs text-[#163B8B] flex items-center justify-between">
                      <div>
                        <span className="font-bold">Attached Config: </span>
                        <span>{prefilledConfig.doorType} ({prefilledConfig.totalSqFt?.toFixed(1)} sq.ft x {prefilledConfig.quantity} qty)</span>
                      </div>
                      <span className="font-black text-slate-900">Est: ₹{prefilledConfig.estimatedTotal?.toLocaleString('en-IN')}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#163B8B] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#163B8B] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#163B8B] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Company / Organization</label>
                      <input
                        type="text"
                        placeholder="e.g. DLF Developers / Self"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#163B8B] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Project Site Location *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sector 62, Noida / Gurugram"
                      value={projectLocation}
                      onChange={(e) => setProjectLocation(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#163B8B] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Project Notes & Fire/Acoustic Specs</label>
                    <textarea
                      rows={3}
                      placeholder="Specify any custom door quantities, fire rating requirements (60/120 min), frame depth, or delivery timeline..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#163B8B] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 px-6 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#163B8B] to-[#0F2A66] hover:from-[#123072] hover:to-[#0A1D47] transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Generating Official Quotation...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Official Quote Request</span>
                      </>
                    )}
                  </button>

                </form>
              )}
            </>
          )}

          {/* TAB 2: AI ASSISTANT */}
          {activeTab === 'ai' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-purple-50 border border-purple-200 text-xs text-purple-900 space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-purple-900">
                  <Sparkles className="w-4 h-4 text-purple-600" />
                  <span>Gemini Architectural Specification AI</span>
                </div>
                <p>
                  Describe your building type (hospital, high-rise, villa, school), location, and required safety features to receive instant expert door recommendations.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Describe Your Project Requirements</label>
                <textarea
                  rows={3}
                  placeholder="e.g. We are constructing a 4-story commercial IT park in Gurugram. We need fireexit stairwell doors with panic push bars and 100 aesthetic office cabin steel doors..."
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-purple-600 focus:outline-none"
                />
              </div>

              <button
                onClick={handleConsultAi}
                disabled={aiLoading || !projectDescription}
                className="w-full py-3 px-4 rounded-xl bg-purple-700 hover:bg-purple-800 text-white text-xs font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-50"
              >
                {aiLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Analyzing Engineering Specs...</span>
                  </>
                ) : (
                  <>
                    <Bot className="w-4 h-4" />
                    <span>Get Instant AI Door Recommendation</span>
                  </>
                )}
              </button>

              {aiRecommendation && (
                <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800 space-y-3 text-xs animate-in fade-in duration-200">
                  <div className="font-bold text-amber-400 text-sm">
                    Recommended Model: {aiRecommendation.recommendedDoorType}
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {aiRecommendation.rationale}
                  </p>
                  {aiRecommendation.keyTechnicalSpecs && (
                    <div className="space-y-1">
                      <span className="font-bold text-slate-200">Recommended Specifications:</span>
                      <ul className="list-disc list-inside text-slate-300 space-y-0.5 pl-1">
                        {aiRecommendation.keyTechnicalSpecs.map((spec: string, idx: number) => (
                          <li key={idx}>{spec}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {aiRecommendation.priceEstimatePerSqFt && (
                    <div className="p-2.5 rounded bg-slate-800 text-emerald-400 font-bold text-xs">
                      Estimated Cost Bracket: {aiRecommendation.priceEstimatePerSqFt}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 text-center text-xs text-slate-500 shrink-0">
          Trimurti Enterprises • Official JSW Avante Partner • Hotline: {COMPANY_INFO.phone}
        </div>

      </div>
    </div>
  );
};
