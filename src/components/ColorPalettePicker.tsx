import React, { useState } from 'react';
import { COLOR_FINISHES } from '../data/companyData';
import { ProductFinish } from '../types';
import { Palette, Check, Sparkles, Layers, Sliders } from 'lucide-react';

interface ColorPalettePickerProps {
  onSelectFinish?: (finish: ProductFinish) => void;
}

export const ColorPalettePicker: React.FC<ColorPalettePickerProps> = ({
  onSelectFinish
}) => {
  const [selectedFinish, setSelectedFinish] = useState<ProductFinish>(COLOR_FINISHES[1]); // Dark Walnut default
  const [filterType, setFilterType] = useState<'all' | 'wood' | 'ral'>('all');

  const handleSelect = (finish: ProductFinish) => {
    setSelectedFinish(finish);
    if (onSelectFinish) onSelectFinish(finish);
  };

  const filteredFinishes = COLOR_FINISHES.filter(f => filterType === 'all' || f.type === filterType);

  return (
    <section className="py-12 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#163B8B] text-xs font-bold uppercase tracking-wider mb-2">
              <Palette className="w-3.5 h-3.5" />
              <span>Architectural Finishes & Shades</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
              JSW Avante Color Palette & Wood Textures
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl">
              Select any RAL shade or natural heat-transferred wood grain texture below to see live visual door styling.
            </p>
          </div>

          {/* Filter Toggles */}
          <div className="flex items-center bg-white p-1 rounded-xl border border-slate-200 shadow-xs text-xs font-semibold">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filterType === 'all' ? 'bg-[#163B8B] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Finishes
            </button>
            <button
              onClick={() => setFilterType('wood')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filterType === 'wood' ? 'bg-[#163B8B] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Natural Wood Grain
            </button>
            <button
              onClick={() => setFilterType('ral')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filterType === 'ral' ? 'bg-[#163B8B] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              RAL Solid Colors
            </button>
          </div>
        </div>

        {/* Visual Door Preview + Swatches Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          
          {/* Live Door Canvas Preview */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-slate-100 rounded-xl border border-slate-200">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              Live Visual Preview
            </span>

            {/* Rendered Door Graphic Frame */}
            <div className="w-48 sm:w-56 aspect-[1/2] rounded-t-xl rounded-b-sm border-8 border-slate-800 shadow-2xl relative flex flex-col justify-between p-3 overflow-hidden transition-all duration-300"
              style={{
                backgroundColor: selectedFinish.hex,
                backgroundImage: selectedFinish.type === 'wood' 
                  ? 'repeating-linear-gradient(45deg, rgba(0,0,0,0.1) 0px, rgba(0,0,0,0.1) 2px, transparent 2px, transparent 10px)'
                  : 'none'
              }}
            >
              {/* Door Top Panel Line Detail */}
              <div className="w-full h-1/2 border-2 border-black/20 rounded-md bg-black/5 flex items-center justify-center">
                <div className="w-3/4 h-3/4 border border-white/20 rounded-xs"></div>
              </div>

              {/* Handle & Lock Hardware */}
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1 bg-slate-900/80 p-1.5 rounded shadow-lg border border-slate-700">
                <div className="w-1.5 h-6 bg-gradient-to-b from-slate-200 to-slate-400 rounded-full"></div>
                <div className="w-2 h-2 rounded-full bg-amber-400"></div>
              </div>

              {/* Door Bottom Panel Line Detail */}
              <div className="w-full h-2/5 border-2 border-black/20 rounded-md bg-black/5 flex items-center justify-center">
                <div className="w-3/4 h-3/4 border border-white/20 rounded-xs"></div>
              </div>
            </div>

            {/* Selected Shade Caption */}
            <div className="mt-4 text-center">
              <div className="text-sm font-bold text-slate-900">
                {selectedFinish.name} {selectedFinish.code ? `(${selectedFinish.code})` : ''}
              </div>
              <div className="text-xs font-medium text-slate-500 capitalize">
                {selectedFinish.type === 'wood' ? 'Heat-Transferred Wood Grain Finish' : 'Polyester Powder Coated Solid Finish'}
              </div>
            </div>
          </div>

          {/* Swatch Selector Cards */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {filteredFinishes.map((finish) => {
                const isSelected = selectedFinish.id === finish.id;
                return (
                  <button
                    key={finish.id}
                    onClick={() => handleSelect(finish)}
                    className={`p-3 rounded-xl border-2 text-left transition-all flex items-center gap-3 relative focus:outline-none ${
                      isSelected 
                        ? 'border-[#163B8B] bg-blue-50/50 shadow-md ring-2 ring-blue-600/20' 
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50'
                    }`}
                  >
                    {/* Color Circle Swatch */}
                    <div 
                      className="w-10 h-10 rounded-lg shadow-inner border border-black/20 relative flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: finish.hex,
                        backgroundImage: finish.type === 'wood'
                          ? 'repeating-linear-gradient(45deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 2px, transparent 2px, transparent 6px)'
                          : 'none'
                      }}
                    >
                      {isSelected && <Check className="w-5 h-5 text-white drop-shadow-md" />}
                    </div>

                    <div className="overflow-hidden">
                      <div className="text-xs font-bold text-slate-900 truncate">{finish.name}</div>
                      <div className="text-[10px] font-semibold text-slate-500">
                        {finish.code || (finish.type === 'wood' ? 'Natural Grain' : 'Solid Powder')}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-3">
              <Sliders className="w-5 h-5 text-[#163B8B] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900">Custom Architectural Shades Available:</span>
                <p className="mt-0.5">
                  Need a custom RAL code or specialized metallic finish for commercial projects? Trimurti Enterprises provides custom electrostatic powder coating for bulk orders.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
