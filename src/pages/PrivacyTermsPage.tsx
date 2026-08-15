import React from 'react';
import { COMPANY_INFO } from '../data/companyData';

export const PrivacyTermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm text-xs text-slate-700 leading-relaxed">
        
        <div>
          <h1 className="text-2xl font-bold font-serif text-slate-900">Privacy Policy & Terms of Service</h1>
          <p className="text-slate-500 mt-1">Effective Date: August 2026 • Trimurti Enterprises (Sister Concern for JSW Avante)</p>
        </div>

        <section className="space-y-2">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">1. Information Collection</h2>
          <p>
            Trimurti Enterprises respects your privacy. We collect personal contact details (such as name, email, phone number, and project site location) solely for the purpose of generating official quotations, scheduling site measurements, and providing customer support for JSW Avante Smart Steel Doors & Windows.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">2. Product Warranty & Manufacturing Terms</h2>
          <p>
            All JSW Avante Smart Steel Doors and Windows supplied by Trimurti Enterprises are backed by a 10-Year Manufacturer Warranty covering structural integrity against leaf swelling, warping, and zinc galvanization anti-corrosion. Warranty requires installation by authorized personnel.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">3. Quotation & Site Measurements</h2>
          <p>
            Estimates generated on this website or by our AI Door Estimator are preliminary and subject to final on-site wall opening measurement and hardware configuration by our technical engineering team.
          </p>
        </section>

        <div className="pt-4 border-t border-slate-200 text-slate-500">
          For privacy inquiries, please contact: {COMPANY_INFO.infoEmail} | {COMPANY_INFO.phone}
        </div>

      </div>
    </div>
  );
};
