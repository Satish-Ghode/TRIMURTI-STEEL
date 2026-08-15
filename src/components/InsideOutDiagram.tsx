import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Flame, 
  Bug, 
  Sun, 
  VolumeX, 
  Sparkles, 
  CheckCircle2, 
  Layers,
  ArrowRight
} from 'lucide-react';

export const InsideOutDiagram: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<'sheet' | 'honeycomb' | 'support' | 'coating'>('sheet');

  const layers = [
    {
      id: 'sheet',
      title: 'Galvanized Steel Skins',
      spec: '0.8mm - 1.2mm High Tensile Steel',
      desc: 'Hot-dip zinc galvanized steel sheet from JSW Steel Coated Products. Provides impenetrable impact resistance and zero structural warping.',
      color: 'bg-blue-600'
    },
    {
      id: 'honeycomb',
      title: 'Honeycomb Infill Core',
      spec: 'High Density Structural Infill',
      desc: 'Engineered cellular honeycomb lattice that absorbs acoustic vibration (up to 32dB noise reduction) and delivers exceptional thermal insulation.',
      color: 'bg-amber-600'
    },
    {
      id: 'support',
      title: 'External Support Element',
      spec: '1.2mm - 1.6mm Perimeter Lock Reinforcements',
      desc: 'Heavy gauge steel internal stiles and rails designed to anchor multi-point security lock bodies, panic hardware, and heavy hinges.',
      color: 'bg-emerald-600'
    },
    {
      id: 'coating',
      title: 'Passivated Weather Coating',
      spec: 'Polyester UV Powder & Wood Grain Print',
      desc: 'Multi-layer thermosetting coating system that survives salt spray tests, UV radiation, and severe monsoons without rusting or fading.',
      color: 'bg-rose-600'
    }
  ];

  const features = [
    { icon: Sun, label: 'Weather Proof', desc: 'Resists humidity & monsoons' },
    { icon: Flame, label: 'Fire Rated', desc: 'Up to 120-min fire barrier' },
    { icon: Bug, label: 'Termite Proof', desc: '100% steel, zero timber risk' },
    { icon: VolumeX, label: 'Sound Damping', desc: 'Cellular sound absorption' },
    { icon: ShieldCheck, label: 'Corrosion Free', desc: 'Galvanized zinc shield' },
    { icon: Sparkles, label: 'Easy to Clean', desc: 'Low maintenance surface' }
  ];

  return (
    <section id="inside-out" className="py-16 bg-slate-900 text-white relative overflow-hidden rounded-3xl my-12 mx-4 sm:mx-6 lg:mx-8 shadow-2xl border border-slate-800">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-4 h-4 text-blue-400" />
            <span>Structural Anatomy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-white tracking-tight">
            INSIDE OUT: Engineering Excellence
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Discover why JSW Avante Smart Steel Doors outperform traditional wooden doors in security, fire resilience, acoustic control, and zero corrosion.
          </p>
        </div>

        {/* Interactive Exploded View Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Visual Door Diagram View */}
          <div className="lg:col-span-7 bg-slate-950/80 rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-inner">
            <div className="relative aspect-[4/5] sm:aspect-[16/11] rounded-xl overflow-hidden bg-slate-900 border border-slate-800 p-4 flex flex-col justify-center items-center">
              
              {/* Layer Graphic Rendering */}
              <div className="w-full max-w-md h-full relative flex flex-col items-center justify-center">
                
                {/* Outer Steel Sheet Cutaway */}
                <div 
                  onClick={() => setActiveLayer('sheet')}
                  className={`w-full h-16 rounded-xl border-2 p-3 transition-all cursor-pointer flex items-center justify-between mb-3 ${
                    activeLayer === 'sheet' 
                      ? 'border-blue-500 bg-blue-950/60 shadow-lg shadow-blue-500/20 scale-102' 
                      : 'border-slate-800 bg-slate-900 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-600/30 text-blue-400 flex items-center justify-center font-bold text-xs">
                      01
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Galvanized Steel Skins</h4>
                      <p className="text-[11px] text-slate-400">0.8mm - 1.2mm High Tensile JSW Steel</p>
                    </div>
                  </div>
                  <CheckCircle2 className={`w-5 h-5 ${activeLayer === 'sheet' ? 'text-blue-400' : 'text-slate-600'}`} />
                </div>

                {/* Honeycomb Core Layer Cutaway */}
                <div 
                  onClick={() => setActiveLayer('honeycomb')}
                  className={`w-full h-20 rounded-xl border-2 p-3 transition-all cursor-pointer flex items-center justify-between mb-3 ${
                    activeLayer === 'honeycomb' 
                      ? 'border-amber-500 bg-amber-950/60 shadow-lg shadow-amber-500/20 scale-102' 
                      : 'border-slate-800 bg-slate-900 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-600/30 text-amber-400 flex items-center justify-center font-bold text-xs">
                      02
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Structural Honeycomb Infill</h4>
                      <p className="text-[11px] text-amber-300">Sound damping lattice + thermal barrier</p>
                    </div>
                  </div>
                  {/* Honeycomb Pattern Simulation */}
                  <div className="hidden sm:flex gap-1">
                    {[1,2,3].map((n) => (
                      <div key={n} className="w-3 h-3 rotate-45 border border-amber-500/50 bg-amber-500/20"></div>
                    ))}
                  </div>
                </div>

                {/* External Support Element */}
                <div 
                  onClick={() => setActiveLayer('support')}
                  className={`w-full h-16 rounded-xl border-2 p-3 transition-all cursor-pointer flex items-center justify-between mb-3 ${
                    activeLayer === 'support' 
                      ? 'border-emerald-500 bg-emerald-950/60 shadow-lg shadow-emerald-500/20 scale-102' 
                      : 'border-slate-800 bg-slate-900 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-600/30 text-emerald-400 flex items-center justify-center font-bold text-xs">
                      03
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">External Support Element</h4>
                      <p className="text-[11px] text-slate-400">Lock reinforcement stiles & hinges</p>
                    </div>
                  </div>
                  <CheckCircle2 className={`w-5 h-5 ${activeLayer === 'support' ? 'text-emerald-400' : 'text-slate-600'}`} />
                </div>

                {/* Coating Layer */}
                <div 
                  onClick={() => setActiveLayer('coating')}
                  className={`w-full h-16 rounded-xl border-2 p-3 transition-all cursor-pointer flex items-center justify-between ${
                    activeLayer === 'coating' 
                      ? 'border-rose-500 bg-rose-950/60 shadow-lg shadow-rose-500/20 scale-102' 
                      : 'border-slate-800 bg-slate-900 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-rose-600/30 text-rose-400 flex items-center justify-center font-bold text-xs">
                      04
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Passivated Weather Coating</h4>
                      <p className="text-[11px] text-slate-400">100% Anti-Corrosion UV Protection</p>
                    </div>
                  </div>
                  <CheckCircle2 className={`w-5 h-5 ${activeLayer === 'coating' ? 'text-rose-400' : 'text-slate-600'}`} />
                </div>

              </div>
            </div>
            <p className="text-center text-xs text-slate-500 mt-3">
              Click on any structural layer above to inspect technical specifications.
            </p>
          </div>

          {/* Layer Detail Card & Features List */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Selected Layer Info Box */}
            {(() => {
              const layer = layers.find(l => l.id === activeLayer)!;
              return (
                <div className="bg-slate-950 rounded-2xl p-6 border border-slate-800 shadow-lg relative overflow-hidden">
                  <div className={`w-2 h-full absolute left-0 top-0 ${layer.color}`}></div>
                  <div className="pl-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Layer Specification</span>
                    <h3 className="text-xl font-bold text-white mt-1">{layer.title}</h3>
                    <div className="inline-block mt-2 px-2.5 py-1 rounded bg-slate-800 text-slate-200 text-xs font-semibold">
                      {layer.spec}
                    </div>
                    <p className="mt-3 text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {layer.desc}
                    </p>
                  </div>
                </div>
              );
            })()}

            {/* Key Performance Badge Hex Icons */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Core Performance Standards
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {features.map((feat, idx) => {
                  const IconComp = feat.icon;
                  return (
                    <div 
                      key={idx}
                      className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80 flex flex-col items-center text-center hover:border-slate-700 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-2">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-white">{feat.label}</span>
                      <span className="text-[10px] text-slate-400 mt-0.5">{feat.desc}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
