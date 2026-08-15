import React from 'react';
import { PageRoute } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import { FileCode, Globe, CheckCircle2 } from 'lucide-react';

interface SitemapPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const SitemapPage: React.FC<SitemapPageProps> = ({ onNavigate }) => {
  const routes: { route: PageRoute; name: string; priority: string }[] = [
    { route: 'home', name: 'Home Page', priority: '1.0' },
    { route: 'about', name: 'About Trimurti Enterprises', priority: '0.9' },
    { route: 'products', name: 'JSW Avante Doors Catalog', priority: '0.9' },
    { route: 'configurator', name: '3D Door Configurator', priority: '0.8' },
    { route: 'services', name: 'Engineering Services', priority: '0.8' },
    { route: 'industries', name: 'Industries & Sectors', priority: '0.8' },
    { route: 'certifications', name: 'CBRI Fire & ISO Certifications', priority: '0.8' },
    { route: 'case-studies', name: 'Client Case Studies', priority: '0.7' },
    { route: 'gallery', name: 'Installation Gallery', priority: '0.7' },
    { route: 'blog', name: 'Technical Blog', priority: '0.7' },
    { route: 'careers', name: 'Careers', priority: '0.5' },
    { route: 'faq', name: 'Frequently Asked Questions', priority: '0.6' },
    { route: 'contact', name: 'Contact Us', priority: '0.9' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="bg-slate-900 text-white p-8 rounded-3xl border border-slate-800 shadow-xl">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
            <Globe className="w-4 h-4" />
            <span>Search Engine Optimization</span>
          </div>
          <h1 className="text-3xl font-bold font-serif">Sitemap.xml & Robots.txt Information</h1>
          <p className="text-slate-300 text-xs mt-1">
            All pages are indexed with Schema.org structured data (Organization, LocalBusiness, Product, FAQ).
          </p>
        </div>

        {/* Live Sitemap Table */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm p-6 space-y-4">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <FileCode className="w-5 h-5 text-[#163B8B]" />
            <span>XML Sitemap Index</span>
          </h2>

          <div className="divide-y divide-slate-100 text-xs">
            {routes.map((r) => (
              <div key={r.route} className="py-3 flex items-center justify-between hover:bg-slate-50 px-2 rounded-lg">
                <button
                  onClick={() => onNavigate(r.route)}
                  className="font-bold text-[#163B8B] hover:underline"
                >
                  {r.name}
                </button>
                <div className="flex items-center gap-4 text-slate-500 text-[11px]">
                  <span>Priority: {r.priority}</span>
                  <span className="text-emerald-600 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Indexed</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Generated robots.txt snippet */}
        <div className="bg-slate-950 text-slate-300 p-6 rounded-2xl border border-slate-800 space-y-2 text-xs font-mono">
          <div className="text-amber-400 font-bold">robots.txt Output:</div>
          <pre className="text-slate-400 whitespace-pre-wrap">
{`User-agent: *
Allow: /
Sitemap: ${window.location.origin}/sitemap.xml
Host: ${window.location.origin}`}
          </pre>
        </div>

      </div>
    </div>
  );
};
