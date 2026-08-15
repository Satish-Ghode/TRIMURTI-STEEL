import React, { useState } from 'react';
import { PRODUCTS } from '../data/companyData';
import { DoorProduct } from '../types';
import { CheckCircle2, ShieldCheck, Sparkles, Filter, ChevronRight, Calculator } from 'lucide-react';

interface ProductsPageProps {
  onOpenQuoteModal: (config?: any) => void;
  onNavigate: (route: any) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onOpenQuoteModal,
  onNavigate
}) => {
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [selectedProductDetail, setSelectedProductDetail] = useState<DoorProduct | null>(null);

  const filtered = PRODUCTS.filter(p => selectedCat === 'all' || p.subCategory === selectedCat);

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Page Title */}
        <div className="bg-slate-900 text-white p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-2 inline-block">
              Full Range Catalog
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-serif">
              JSW Avante Smart Steel Doors & Windows
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-2xl">
              100% galvanized steel, anti-corrosive powder finish, honeycomb insulation, and authentic wood grain textures.
            </p>
          </div>

          <button
            onClick={() => onNavigate('configurator')}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#163B8B] to-[#0F2A66] hover:from-[#123072] text-white font-bold text-xs flex items-center gap-2 shadow-lg shrink-0"
          >
            <Calculator className="w-4 h-4 text-blue-300" />
            <span>Launch 3D Configurator</span>
          </button>
        </div>

        {/* Filter Categories */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs font-bold">
          {[
            { id: 'all', label: 'All Products' },
            { id: 'plain', label: 'Plain Finish Doors' },
            { id: 'embossed', label: '3D Embossed Doors' },
            { id: 'double-grill', label: 'Double Door with Grill' },
            { id: 'fire', label: 'CBRI Fire Doors (60/120 Min)' },
            { id: 'glazed', label: 'Architectural Glazed Doors' },
            { id: 'sliding', label: 'Sliding Steel Windows' }
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCat(cat.id)}
              className={`px-4 py-2.5 rounded-xl transition-all whitespace-nowrap shrink-0 ${
                selectedCat === cat.id
                  ? 'bg-[#163B8B] text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={product.imageUrl} 
                    alt={product.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-900/80 text-white text-[10px] font-bold uppercase">
                    {product.subCategory}
                  </div>
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-lg bg-white text-[#163B8B] text-xs font-black shadow-sm">
                    ₹{product.basePricePerSqFt} / sq. ft.
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h2 className="text-lg font-bold text-slate-900">{product.title}</h2>
                  <p className="text-xs text-slate-600 leading-relaxed">{product.fullDesc}</p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-700">
                    <div className="font-bold text-slate-900 mb-1">Key Technical Specs:</div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{product.specifications.sheetThickness}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{product.specifications.coreInfill}</span>
                    </div>
                    {product.specifications.fireRating && (
                      <div className="flex items-center gap-1.5 text-amber-700 font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span>Fire Rating: {product.specifications.fireRating}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center gap-3">
                <button
                  onClick={() => onOpenQuoteModal({ doorType: product.title })}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#163B8B] hover:bg-blue-800 text-white text-xs font-bold transition-colors shadow-xs"
                >
                  Get Exact Quote
                </button>
                <button
                  onClick={() => setSelectedProductDetail(product)}
                  className="px-4 py-3 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-800 text-xs font-bold"
                >
                  Full Specs
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Spec Modal */}
        {selectedProductDetail && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
            <div className="bg-white w-full max-w-2xl rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <h3 className="text-xl font-bold font-serif text-slate-900">{selectedProductDetail.title}</h3>
                <button 
                  onClick={() => setSelectedProductDetail(null)}
                  className="text-slate-400 hover:text-slate-700 font-bold text-sm"
                >
                  ✕ Close
                </button>
              </div>

              <div className="space-y-4 text-xs text-slate-700">
                <p>{selectedProductDetail.fullDesc}</p>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="font-bold text-slate-900 text-sm">Full Specifications Sheet</div>
                  <div>• Sheet Thickness: {selectedProductDetail.specifications.sheetThickness}</div>
                  <div>• Core Infill: {selectedProductDetail.specifications.coreInfill}</div>
                  <div>• Frame Gauge: {selectedProductDetail.specifications.frameGauge}</div>
                  <div>• Warranty: {selectedProductDetail.specifications.warranty}</div>
                  <div>• Standard Sizes: {selectedProductDetail.specifications.standardSizes.join(', ')}</div>
                  <div>• Hardware Options: {selectedProductDetail.specifications.hardwareOptions.join(', ')}</div>
                </div>

                <div>
                  <span className="font-bold text-slate-900 block mb-1">Suitable Applications:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProductDetail.suitableFor.map((app, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-md bg-blue-50 text-[#163B8B] font-semibold text-[11px]">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex justify-end gap-3">
                <button
                  onClick={() => {
                    const title = selectedProductDetail.title;
                    setSelectedProductDetail(null);
                    onOpenQuoteModal({ doorType: title });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-[#163B8B] text-white text-xs font-bold"
                >
                  Request Quotation For This Model
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
