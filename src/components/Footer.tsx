import React from 'react';
import { PageRoute } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Award, 
  Clock, 
  ExternalLink,
  ChevronRight,
  Sparkles
} from 'lucide-react';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenQuoteModal
}) => {
  const handleNav = (route: PageRoute) => {
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Banner: Partnership & Brand Identity */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800 items-center">
          
          <div className="lg:col-span-8 space-y-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-1 rounded bg-[#E11D2A] text-white text-[11px] font-extrabold uppercase tracking-wider">
                Sister Concern
              </span>
              <span className="text-xs font-bold text-blue-400">
                JSW Avante Smart Steel Doors & Windows
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-xs text-slate-400">
                JSW Steel Coated Products Limited
              </span>
            </div>

            <h3 className="text-2xl font-black font-serif text-white tracking-tight">
              TRIMURTI ENTERPRISES
            </h3>

            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
              Leading authorized manufacturer and distributor of JSW Avante Smart Steel Doors & Windows. Engineering superior fire safety, 100% termite protection, and anti-corrosive galvanized steel entryways for modern architectural projects across India.
            </p>

            <div className="pt-1 flex items-center gap-3">
              <span className="text-xs font-black text-amber-400 tracking-wider uppercase">
                Tagline: "{COMPANY_INFO.tagline}"
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 bg-slate-900/90 p-5 rounded-2xl border border-slate-800 space-y-3 text-center sm:text-left">
            <div className="text-xs font-bold text-slate-200">Need Immediate Architectural Specification Support?</div>
            <p className="text-[11px] text-slate-400">Speak directly with our senior steel door engineer.</p>
            <button
              onClick={onOpenQuoteModal}
              className="w-full py-2.5 px-4 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors shadow-md"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Request Instant Quotation</span>
            </button>
          </div>

        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-12 border-b border-slate-800 text-xs">
          
          {/* Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2">
              {[
                { route: 'home' as PageRoute, label: 'Home Page' },
                { route: 'about' as PageRoute, label: 'About Trimurti' },
                { route: 'products' as PageRoute, label: 'Product Catalog' },
                { route: 'configurator' as PageRoute, label: '3D Door Configurator' },
                { route: 'services' as PageRoute, label: 'Custom Fabrication' },
                { route: 'industries' as PageRoute, label: 'Industries Served' }
              ].map(item => (
                <li key={item.route}>
                  <button 
                    onClick={() => handleNav(item.route)}
                    className="hover:text-blue-400 transition-colors flex items-center gap-1.5 text-slate-400"
                  >
                    <ChevronRight className="w-3 h-3 text-blue-500" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Door & Window Range</h4>
            <ul className="space-y-2 text-slate-400">
              <li>• Plain Finish Flush Doors</li>
              <li>• 3D Embossed Wood Grain Doors</li>
              <li>• Double Door with Safety Grill</li>
              <li>• CBRI Fire Doors (60/120 Min)</li>
              <li>• Architectural Glazed Doors</li>
              <li>• Steel Sliding Mesh Windows</li>
            </ul>
          </div>

          {/* Compliance & Quality */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quality & Testing</h4>
            <ul className="space-y-2">
              {[
                { route: 'certifications' as PageRoute, label: 'CBRI Fire Test Reports' },
                { route: 'certifications' as PageRoute, label: 'ISO 9001:2015 Certified' },
                { route: 'case-studies' as PageRoute, label: 'Client Case Studies' },
                { route: 'gallery' as PageRoute, label: 'Installation Gallery' },
                { route: 'blog' as PageRoute, label: 'Technical Blog & News' },
                { route: 'faq' as PageRoute, label: 'Frequently Asked Questions' }
              ].map((item, idx) => (
                <li key={idx}>
                  <button 
                    onClick={() => handleNav(item.route)}
                    className="hover:text-blue-400 transition-colors flex items-center gap-1.5 text-slate-400"
                  >
                    <ChevronRight className="w-3 h-3 text-blue-500" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Corporate & Factory Address</h4>
            <div className="space-y-2.5 text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white font-bold">{COMPANY_INFO.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white">{COMPANY_INFO.email}</a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                <span>{COMPANY_INFO.workingHours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Trimurti Enterprises. Authorized Channel Partner for JSW Avante Smart Steel Doors & Windows. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => handleNav('privacy')} className="hover:text-slate-300">Privacy Policy</button>
            <span>•</span>
            <button onClick={() => handleNav('terms')} className="hover:text-slate-300">Terms & Conditions</button>
            <span>•</span>
            <button onClick={() => handleNav('sitemap')} className="hover:text-slate-300">Sitemap.xml</button>
          </div>
        </div>

      </div>
    </footer>
  );
};
