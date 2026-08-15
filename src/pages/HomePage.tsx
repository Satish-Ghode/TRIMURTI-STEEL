import React from 'react';
import { PageRoute } from '../types';
import { COMPANY_INFO, PRODUCTS, CASE_STUDIES, BLOG_POSTS, FAQS } from '../data/companyData';
import { InsideOutDiagram } from '../components/InsideOutDiagram';
import { ColorPalettePicker } from '../components/ColorPalettePicker';
import { DoorConfigurator } from '../components/DoorConfigurator';
import { 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Award, 
  Flame, 
  Bug, 
  CheckCircle2, 
  Building2, 
  PhoneCall, 
  ChevronRight,
  Star,
  Layers,
  Wrench,
  Calculator,
  MessageSquare
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: (config?: any) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenQuoteModal
}) => {
  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* HERO SECTION */}
      <section className="relative hero-gradient text-slate-900 pt-16 pb-24 overflow-hidden border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Badges */}
              <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span className="px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold tracking-wide shadow-2xs">
                  SISTER CONCERN & AUTHORIZED CHANNEL PARTNER
                </span>
                <span className="px-3.5 py-1 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center gap-1.5 shadow-2xs">
                  <Award className="w-3.5 h-3.5 text-amber-300" />
                  <span>JSW Steel Coated Products Limited</span>
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-slate-900">
                TRIMURTI <span className="text-indigo-600">STEEL</span>
                <span className="block text-2xl sm:text-4xl font-bold text-slate-600 mt-2">
                  JSW Avante Smart Steel Doors & Windows
                </span>
              </h1>

              {/* Tagline */}
              <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50/80 border border-indigo-100 text-indigo-900 font-bold text-xs sm:text-sm tracking-wider uppercase">
                "{COMPANY_INFO.tagline}"
              </div>

              <p className="text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed mx-auto lg:mx-0 font-normal">
                Engineered with hot-dip galvanized steel skins, high-density honeycomb insulation cores, and 100% anti-corrosion passivated coatings. Zero termite risk, CBRI 120-min fire certified, and beautiful heat-transferred wood grain finishes.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
                <button
                  onClick={() => onOpenQuoteModal()}
                  className="w-full sm:w-auto px-7 py-3.5 bg-slate-900 text-white text-xs font-semibold rounded-full shadow-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Get Official Quotation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('configurator');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full font-semibold text-xs text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs transition-all flex items-center justify-center gap-2"
                >
                  <Calculator className="w-4 h-4 text-indigo-600" />
                  <span>3D Door Configurator</span>
                </button>
              </div>

              {/* Trust Badges Bar */}
              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-600 font-medium text-left">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-indigo-600 shrink-0" />
                  <span>100% Corrosion Resistance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Flame className="w-5 h-5 text-amber-500 shrink-0" />
                  <span>CBRI 120-Min Fire Rated</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bug className="w-5 h-5 text-indigo-600 shrink-0" />
                  <span>0% Termite & Pest Risk</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-purple-600 shrink-0" />
                  <span>10-Yr JSW Warranty</span>
                </div>
              </div>

            </div>

            {/* Hero Right Visual Banner */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-soft border border-slate-200/80 bg-white p-2 group">
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80" 
                    alt="JSW Avante Smart Steel Door" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                  
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-slate-100 text-slate-900 space-y-1 shadow-soft">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-indigo-900">JSW Avante Premium Embossed</span>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-semibold">In Stock</span>
                    </div>
                    <p className="text-[11px] text-slate-600">Dark Walnut Heat-Transferred Wood Grain Finish</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* COMPANY INTRODUCTION SECTION */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#163B8B] text-xs font-bold uppercase tracking-wider">
                <span>Authorized Partner & Sister Concern</span>
              </div>
              <h2 className="text-3xl font-extrabold font-serif text-slate-900 tracking-tight">
                About Trimurti Enterprises & JSW Avante
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Trimurti Enterprises serves as the dedicated manufacturing, custom fabrication, and distribution arm for JSW Avante Smart Steel Doors & Windows. Operating in close partnership with JSW Steel Coated Products Limited, we deliver factory-precision steel doors built for modern Indian architectural standards.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Every door and sliding window is constructed using high-grade galvanized steel sheets coated with zinc and anti-corrosive primers. Coupled with structural honeycomb infills and mortise/smart locks, our products replace conventional wooden entryways with permanent strength.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-2xl font-black text-[#163B8B]">100%</div>
                  <div className="text-xs font-bold text-slate-700 mt-1">Galvanized Steel Core</div>
                  <div className="text-[11px] text-slate-500">Zero wood, zero termites</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-2xl font-black text-[#163B8B]">120 Min</div>
                  <div className="text-xs font-bold text-slate-700 mt-1">Fire Rating Tested</div>
                  <div className="text-[11px] text-slate-500">CBRI & NBC 2016 Compliant</div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#163B8B] hover:text-blue-800 transition-colors"
                >
                  <span>Read Full Company Profile & History</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3]">
                  <img 
                    src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80" 
                    alt="JSW Avante Door Manufacturing" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 rounded-2xl bg-gradient-to-br from-[#163B8B] to-[#0F2A66] text-white space-y-1">
                  <div className="text-2xl font-black">125,000+</div>
                  <div className="text-xs font-semibold text-blue-200">Doors Delivered Nationwide</div>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-1">
                  <div className="text-2xl font-black text-amber-400">10 Years</div>
                  <div className="text-xs font-semibold text-slate-300">Manufacturer Warranty</div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3]">
                  <img 
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" 
                    alt="Double Door with Grill Entrance" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INSIDE OUT ANATOMY DIAGRAM */}
      <InsideOutDiagram />

      {/* COLOR PALETTE & FINISHES */}
      <ColorPalettePicker />

      {/* PRODUCT CATALOG SHOWCASE */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#163B8B] text-xs font-bold uppercase tracking-wider mb-2">
                <span>Product Showcase</span>
              </div>
              <h2 className="text-3xl font-bold font-serif text-slate-900">
                JSW Avante Door & Window Collection
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Explore our specialized lineup of plain, embossed, fire-rated, glazed, and sliding steel solutions.
              </p>
            </div>

            <button
              onClick={() => onNavigate('products')}
              className="px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-xs font-bold text-slate-800 transition-colors flex items-center gap-2"
            >
              <span>View All Models & Specs</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <div 
                key={product.id}
                className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={product.imageUrl} 
                    alt={product.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider">
                    {product.subCategory}
                  </div>
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-lg bg-white/90 backdrop-blur-xs text-[#163B8B] text-xs font-black shadow-sm">
                    ₹{product.basePricePerSqFt} / sq. ft.
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#163B8B] transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {product.shortDesc}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-200/80 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{product.specifications.sheetThickness}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{product.specifications.coreInfill}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-2">
                    <button
                      onClick={() => onOpenQuoteModal({ doorType: product.title })}
                      className="flex-1 py-2.5 px-4 rounded-xl bg-[#163B8B] hover:bg-blue-800 text-white text-xs font-bold transition-colors shadow-xs"
                    >
                      Get Quote
                    </button>
                    <button
                      onClick={() => onNavigate('products')}
                      className="p-2.5 rounded-xl border border-slate-300 hover:bg-slate-200 text-slate-700 transition-colors"
                      title="View Technical Details"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3D INTERACTIVE DOOR CONFIGURATOR */}
      <DoorConfigurator onQuoteGenerated={(config) => onOpenQuoteModal(config)} />

      {/* CASE STUDIES & CLIENT TRUST */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">
              <span>Proven Track Record</span>
            </div>
            <h2 className="text-3xl font-bold font-serif text-white">
              Featured Client Case Studies
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              See how Trimurti Enterprises supplied JSW Avante doors for landmark healthcare, residential, and transport projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CASE_STUDIES.map((cs) => (
              <div key={cs.id} className="bg-slate-950 rounded-2xl border border-slate-800 p-6 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-wider">{cs.industry} • {cs.location}</div>
                  <h3 className="text-lg font-bold text-white leading-snug">{cs.title}</h3>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
                    <span className="font-bold text-amber-400 block mb-0.5">Doors Supplied: {cs.doorsSupplied} Units</span>
                    <span>Types: {cs.doorTypes.join(', ')}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    <strong className="text-slate-200 block mb-1">Challenge:</strong>
                    {cs.challenge}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 text-xs text-emerald-400 font-semibold space-y-1">
                  {cs.results.map((res, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQs SECTION */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Got questions about steel door specifications, fire compliance, or custom ordering? We have answers.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div key={faq.id} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#163B8B]"></span>
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed pl-4">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => onNavigate('faq')}
              className="text-xs font-bold text-[#163B8B] hover:underline"
            >
              View Full FAQ Page & Categories →
            </button>
          </div>

        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <section className="py-16 bg-gradient-to-r from-[#163B8B] via-[#123072] to-[#0A1D47] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif">
            Ready to Upgrade to JSW Avante Smart Steel Doors?
          </h2>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Get in touch with Trimurti Enterprises for site measurements, architectural CAD specs, custom color samples, and instant factory price quotations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenQuoteModal()}
              className="px-8 py-4 rounded-xl text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 transition-all shadow-lg flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-slate-900" />
              <span>Request Custom Project Quotation</span>
            </button>

            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="px-8 py-4 rounded-xl text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-blue-300" />
              <span>Call Technical Sales: {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
