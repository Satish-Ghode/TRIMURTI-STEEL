import React, { useState } from 'react';
import { PageRoute } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import { 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Menu, 
  X, 
  ChevronRight, 
  Calculator,
  Award,
  Sparkles
} from 'lucide-react';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute,
  onNavigate,
  onOpenQuoteModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { route: PageRoute; label: string; badge?: string }[] = [
    { route: 'home', label: 'Home' },
    { route: 'about', label: 'About Us' },
    { route: 'products', label: 'Doors & Windows' },
    { route: 'configurator', label: '3D Configurator', badge: 'Interactive' },
    { route: 'services', label: 'Services' },
    { route: 'industries', label: 'Industries' },
    { route: 'certifications', label: 'Certifications' },
    { route: 'case-studies', label: 'Case Studies' },
    { route: 'gallery', label: 'Gallery' },
    { route: 'blog', label: 'Blog' },
    { route: 'faq', label: 'FAQ' },
    { route: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 glass-nav border-b border-slate-200/80 shadow-xs">
      {/* Top Utility Announcement Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
            <span className="inline-flex items-center gap-1.5 text-indigo-400 font-semibold tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5" />
              SISTER CONCERN & AUTHORIZED CHANNEL PARTNER
            </span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span className="inline-flex items-center gap-1 text-slate-300">
              <Award className="w-3.5 h-3.5 text-indigo-400" />
              JSW Steel Coated Products Limited
            </span>
          </div>

          <div className="flex items-center gap-5 text-xs">
            <a href={`tel:${COMPANY_INFO.phone}`} className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-indigo-400" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a href={`mailto:${COMPANY_INFO.email}`} className="hidden lg:inline-flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-indigo-400" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              Mon-Sat 9am-7pm IST
            </span>
          </div>
        </div>
      </div>

      {/* Main Brand & Navigation Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Area */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            {/* Trimurti Emblem Icon - Sleek Emblem */}
            <div className="w-10 h-10 rounded-xl bg-indigo-600 shadow-md flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform">
              <div className="w-4 h-4 bg-white rounded-sm rotate-45"></div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl font-bold tracking-tight text-slate-900">TRIMURTI</span>
                <span className="text-xl font-bold tracking-tight text-indigo-600">STEEL</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600">
                <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                <span>JSW Avante</span>
                <span className="text-[10px] text-slate-400 font-normal hidden sm:inline">• Smart Steel Doors & Windows</span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 text-sm font-medium text-slate-600">
            {navItems.slice(0, 8).map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => handleNavClick(item.route)}
                  className={`px-3.5 py-2 rounded-full transition-all relative flex items-center gap-1 text-xs font-semibold ${
                    isActive 
                      ? 'text-indigo-600 bg-indigo-50/80 font-bold' 
                      : 'hover:text-indigo-600 hover:bg-slate-100/60'
                  }`}
                >
                  {item.label}
                  {item.badge && (
                    <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}

            {/* More Menu Dropdown */}
            <div className="relative group">
              <button className="px-3.5 py-2 rounded-full hover:bg-slate-100/60 text-slate-600 text-xs font-semibold flex items-center gap-1">
                <span>More</span>
                <ChevronRight className="w-3.5 h-3.5 rotate-90" />
              </button>
              <div className="absolute right-0 top-full pt-2 w-48 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 shadow-soft z-50">
                <div className="bg-white rounded-2xl border border-slate-100 p-2 text-xs font-medium">
                  {navItems.slice(8).map((item) => (
                    <button
                      key={item.route}
                      onClick={() => handleNavClick(item.route)}
                      className={`w-full text-left px-3 py-2 rounded-xl transition-colors ${
                        currentRoute === item.route ? 'bg-indigo-50 text-indigo-600 font-bold' : 'hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Action CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('configurator')}
              className="px-4 py-2.5 rounded-full text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <Calculator className="w-4 h-4 text-indigo-600" />
              <span>Door Estimator</span>
            </button>

            <button
              onClick={onOpenQuoteModal}
              className="px-5 py-2.5 bg-slate-900 text-white text-xs font-semibold rounded-full shadow-lg hover:bg-slate-800 transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Get Instant Quote</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={onOpenQuoteModal}
              className="sm:hidden px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-[#163B8B]"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100">
            <button
              onClick={() => handleNavClick('configurator')}
              className="p-3 rounded-xl bg-blue-50 text-[#163B8B] font-bold text-xs flex items-center justify-center gap-2 border border-blue-100"
            >
              <Calculator className="w-4 h-4" />
              <span>3D Configurator</span>
            </button>
            <button
              onClick={onOpenQuoteModal}
              className="p-3 rounded-xl bg-[#163B8B] text-white font-bold text-xs flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Request Quote</span>
            </button>
          </div>

          <div className="grid grid-cols-1 gap-1 text-sm pt-2">
            {navItems.map((item) => (
              <button
                key={item.route}
                onClick={() => handleNavClick(item.route)}
                className={`w-full text-left px-4 py-2.5 rounded-xl transition-all flex items-center justify-between ${
                  currentRoute === item.route
                    ? 'bg-blue-50 text-[#163B8B] font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{item.label}</span>
                {item.badge ? (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                    {item.badge}
                  </span>
                ) : (
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                )}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-2">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-600" />
              <span>{COMPANY_INFO.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-600" />
              <span>{COMPANY_INFO.email}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
