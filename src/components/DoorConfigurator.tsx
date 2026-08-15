import React, { useState } from 'react';
import { PRODUCTS, COLOR_FINISHES } from '../data/companyData';
import { DoorProduct, ProductFinish } from '../types';
import { 
  Calculator, 
  Ruler, 
  Layers, 
  ShieldCheck, 
  Sparkles, 
  Check, 
  ArrowRight, 
  Lock,
  Flame,
  Info
} from 'lucide-react';

interface DoorConfiguratorProps {
  onQuoteGenerated: (quoteData: any) => void;
}

export const DoorConfigurator: React.FC<DoorConfiguratorProps> = ({
  onQuoteGenerated
}) => {
  const [selectedProduct, setSelectedProduct] = useState<DoorProduct>(PRODUCTS[0]);
  const [selectedFinish, setSelectedFinish] = useState<ProductFinish>(COLOR_FINISHES[0]);
  const [widthFt, setWidthFt] = useState<number>(3.5);
  const [heightFt, setHeightFt] = useState<number>(7.0);
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['Mortise Lock']);

  const addonPrices: Record<string, number> = {
    'Mortise Lock': 1800,
    'Digital Smart Lock': 7500,
    'Panic Push Bar': 5200,
    'Hydraulic Door Closer': 2400,
    'Digital Peephole Viewer': 1800,
    'Heavy Duty Deadbolt': 1200
  };

  const handleToggleAddon = (addon: string) => {
    if (selectedAddons.includes(addon)) {
      setSelectedAddons(selectedAddons.filter(a => a !== addon));
    } else {
      setSelectedAddons([...selectedAddons, addon]);
    }
  };

  // Price calculations
  const totalSqFt = widthFt * heightFt;
  const baseDoorCost = totalSqFt * selectedProduct.basePricePerSqFt * quantity;
  const addonsCost = selectedAddons.reduce((sum, addon) => sum + (addonPrices[addon] || 0), 0) * quantity;
  const estimatedTotal = Math.round(baseDoorCost + addonsCost);

  const handleGenerateQuote = () => {
    onQuoteGenerated({
      doorType: selectedProduct.title,
      productId: selectedProduct.id,
      widthFt,
      heightFt,
      totalSqFt,
      quantity,
      finishId: selectedFinish.id,
      finishName: selectedFinish.name,
      hardwareAddons: selectedAddons,
      estimatedTotal
    });
  };

  return (
    <section id="configurator" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#163B8B] text-xs font-bold uppercase tracking-wider mb-2">
            <Calculator className="w-4 h-4 text-[#163B8B]" />
            <span>3D Interactive Door Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-900 tracking-tight">
            Customize Your JSW Avante Door & Get Instant Cost Estimate
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Configure dimensions, finishes, and safety hardware options to compute real-time estimations for your residential or commercial project.
          </p>
        </div>

        {/* Configurator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200">
            
            {/* Step 1: Select Product Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#163B8B] text-white flex items-center justify-center text-[10px]">1</span>
                <span>Select Door & Window Model</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PRODUCTS.map((prod) => {
                  const isSelected = selectedProduct.id === prod.id;
                  return (
                    <button
                      key={prod.id}
                      onClick={() => setSelectedProduct(prod)}
                      className={`p-3.5 rounded-xl border-2 text-left transition-all flex items-start gap-3 focus:outline-none ${
                        isSelected 
                          ? 'border-[#163B8B] bg-white shadow-sm ring-2 ring-blue-600/10' 
                          : 'border-slate-200 bg-white/60 hover:border-slate-300'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-full border-2 mt-0.5 shrink-0 flex items-center justify-center ${
                        isSelected ? 'border-[#163B8B] bg-[#163B8B]' : 'border-slate-300'
                      }`}>
                        {isSelected && <Check className="w-3 h-3 text-white" />}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">{prod.title}</div>
                        <div className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">{prod.shortDesc}</div>
                        <div className="text-xs font-semibold text-[#163B8B] mt-1">₹{prod.basePricePerSqFt}/sq.ft</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Dimensions & Quantity */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#163B8B] text-white flex items-center justify-center text-[10px]">2</span>
                <span>Specify Dimensions & Quantity</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <span className="text-xs font-semibold text-slate-600 mb-1 block">Width (Feet): {widthFt} ft</span>
                  <input
                    type="range"
                    min="2.5"
                    max="8.0"
                    step="0.5"
                    value={widthFt}
                    onChange={(e) => setWidthFt(parseFloat(e.target.value))}
                    className="w-full accent-[#163B8B]"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>2.5 ft</span>
                    <span>8.0 ft</span>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-semibold text-slate-600 mb-1 block">Height (Feet): {heightFt} ft</span>
                  <input
                    type="range"
                    min="6.5"
                    max="10.0"
                    step="0.5"
                    value={heightFt}
                    onChange={(e) => setHeightFt(parseFloat(e.target.value))}
                    className="w-full accent-[#163B8B]"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>6.5 ft</span>
                    <span>10.0 ft</span>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-semibold text-slate-600 mb-1 block">Quantity: {quantity}</span>
                  <div className="flex items-center border border-slate-300 rounded-lg bg-white overflow-hidden">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-full text-center text-xs font-bold py-1.5 focus:outline-none"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Select Finish */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#163B8B] text-white flex items-center justify-center text-[10px]">3</span>
                <span>Choose Finish / Color Shade</span>
              </label>

              <div className="flex flex-wrap gap-2">
                {COLOR_FINISHES.map((finish) => {
                  const isSel = selectedFinish.id === finish.id;
                  return (
                    <button
                      key={finish.id}
                      onClick={() => setSelectedFinish(finish)}
                      className={`px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-2 transition-all ${
                        isSel
                          ? 'border-[#163B8B] bg-blue-50 text-[#163B8B] ring-1 ring-blue-600'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span 
                        className="w-3.5 h-3.5 rounded-full border border-black/20"
                        style={{ backgroundColor: finish.hex }}
                      />
                      <span>{finish.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Hardware & Accessories */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#163B8B] text-white flex items-center justify-center text-[10px]">4</span>
                <span>Select Hardware Accessories</span>
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                {Object.keys(addonPrices).map((addon) => {
                  const isChecked = selectedAddons.includes(addon);
                  return (
                    <button
                      key={addon}
                      onClick={() => handleToggleAddon(addon)}
                      className={`p-2.5 rounded-xl border text-left flex items-center justify-between transition-all ${
                        isChecked 
                          ? 'border-[#163B8B] bg-blue-50 text-[#163B8B] font-bold'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <div>
                        <div>{addon}</div>
                        <div className="text-[10px] text-slate-500 font-normal">+₹{addonPrices[addon]}</div>
                      </div>
                      <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                        isChecked ? 'bg-[#163B8B] border-[#163B8B] text-white' : 'border-slate-300'
                      }`}>
                        {isChecked && <Check className="w-3 h-3" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Live Summary & Price Estimate Card */}
          <div className="lg:col-span-5 sticky top-28 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-800 space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Live Estimate Summary</span>
                <h3 className="text-lg font-bold text-white mt-0.5">{selectedProduct.title}</h3>
              </div>
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Calculator className="w-5 h-5" />
              </div>
            </div>

            {/* Config Specs Recap */}
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-400">Total Sq. Footage:</span>
                <span className="font-bold text-white">{totalSqFt.toFixed(1)} sq. ft. per unit</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Selected Finish:</span>
                <span className="font-bold text-amber-300">{selectedFinish.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Units Quantity:</span>
                <span className="font-bold text-white">{quantity} Door(s)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Base Door Rate:</span>
                <span className="font-bold text-white">₹{selectedProduct.basePricePerSqFt} / sq. ft.</span>
              </div>
              {selectedAddons.length > 0 && (
                <div className="pt-2 border-t border-slate-800/80">
                  <span className="text-slate-400 block mb-1">Included Hardware:</span>
                  <div className="flex flex-wrap gap-1">
                    {selectedAddons.map(a => (
                      <span key={a} className="px-2 py-0.5 rounded bg-slate-800 text-slate-200 text-[10px]">
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Total Calculated Price Banner */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-blue-950 to-slate-950 border border-blue-500/30">
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400">Estimated Total Cost</span>
              <div className="text-3xl font-black text-white mt-1">
                ₹{estimatedTotal.toLocaleString('en-IN')}
                <span className="text-xs font-normal text-slate-400 ml-2">*(Incl. GST & Factory Finishing)</span>
              </div>
              <p className="text-[10px] text-slate-400 mt-1">
                *Final site measurement & installation costs will be confirmed by Trimurti engineer.
              </p>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleGenerateQuote}
              className="w-full py-3.5 px-6 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#E11D2A] to-red-700 hover:from-red-600 hover:to-red-800 transition-all shadow-lg flex items-center justify-center gap-2 active:scale-98"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Request Official Quotation & Site Visit</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Includes 10-Year JSW Avante Warranty & ISO Certified Assembly</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
