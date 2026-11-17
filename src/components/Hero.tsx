import React from 'react';
import { ArrowRight, Sparkles, Compass, ShieldCheck, HeartHandshake } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
  onCustom: () => void;
  onSelectProduct?: (productId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore, onCustom, onSelectProduct }) => {
  return (
    <section className="relative pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-24 overflow-hidden bg-[#F7F4EE]">
      {/* Background Architectural Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[#EAE4D8]/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Kicker / Studio Banner */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE4D8] border border-[#B6A18A]/30 text-[#786653] text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C49746]" />
            <span>Independent Fiber Art Studio</span>
            <span className="w-1 h-1 rounded-full bg-[#786653]" />
            <span>Made in Anakapalli, Andhra Pradesh</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#292720] tracking-tight max-w-5xl leading-[1.08] mb-6">
            ART YOU CAN FEEL.<br />
            <span className="italic font-normal text-[#786653]">TEXTURE YOU CAN SEE.</span>
          </h1>

          {/* Supporting Description */}
          <p className="max-w-2xl text-base sm:text-lg text-[#786653] font-normal leading-relaxed mb-8">
            Thoughtfully handcrafted tufted creations designed to make celebrations memorable, 
            spaces distinctive and everyday objects extraordinary.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={onExplore}
              className="w-full sm:w-auto px-8 py-4 bg-[#292720] text-[#EAE4D8] text-xs uppercase tracking-[0.18em] font-semibold rounded-full hover:bg-[#786653] transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-3 group"
            >
              <span>Explore Our Creations</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onCustom}
              className="w-full sm:w-auto px-8 py-4 bg-transparent text-[#292720] border border-[#292720] text-xs uppercase tracking-[0.18em] font-semibold rounded-full hover:bg-[#EAE4D8] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Compass className="w-4 h-4 text-[#786653]" />
              <span>Create Something Custom</span>
            </button>
          </div>
        </div>

        {/* Hero Visual Spotlight Card (Matching ChatGPT Reference Design) */}
        <div className="relative mt-8 sm:mt-12 rounded-3xl sm:rounded-4xl overflow-hidden border border-[#B6A18A]/30 shadow-elevated bg-[#EAE4D8]">
          <div className="relative aspect-[16/9] sm:aspect-[21/10] max-h-[640px] w-full group overflow-hidden">
            <img 
              src="/images/hero-tufted-rug.jpg"
              alt="TUFT HOUSE Signature 3D Sculpted Organic Living Room Rug"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-102"
              loading="eager"
            />
            
            {/* Subtle Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#292720]/80 via-transparent to-black/20" />

            {/* Top Left Studio Stamp */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2 bg-[#292720]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[#EAE4D8] border border-white/10 text-[10px] sm:text-xs tracking-wider uppercase font-medium">
              <span className="w-2 h-2 rounded-full bg-[#C49746] animate-pulse" />
              <span>Signature Piece • Sands of Dune</span>
            </div>

            {/* Bottom Floating Interactive Card */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto max-w-md bg-[#F7F4EE]/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-[#B6A18A]/30 shadow-float">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#786653] font-semibold block mb-0.5">
                    Hand-Carved Relief Topography
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#292720] leading-snug">
                    Sands of Dune Living Room Rug
                  </h3>
                  <p className="text-xs text-[#786653] mt-1 line-clamp-2">
                    Multi-level cut pile sculpted in Warm Ivory, Soft Taupe, and Mocha Wool.
                  </p>
                </div>
                {onSelectProduct && (
                  <button
                    onClick={() => onSelectProduct('sands-of-dune')}
                    className="shrink-0 p-2.5 bg-[#292720] text-[#EAE4D8] hover:bg-[#786653] rounded-xl transition-colors"
                    title="View Product Details"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Craftsmanship Features Badges */}
            <div className="hidden md:flex absolute bottom-6 right-6 gap-3">
              <div className="bg-[#292720]/75 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-white text-[11px] flex items-center gap-1.5">
                <span className="text-[#C49746] font-serif italic text-sm">3D</span>
                <span>Hand-Beveled Shearing</span>
              </div>
              <div className="bg-[#292720]/75 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-white text-[11px] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#A9A28E]" />
                <span>Anti-Skid Backing</span>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Brand Pillars Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16 pt-8 border-t border-[#B6A18A]/25">
          <div className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-[#EAE4D8]/30 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-[#EAE4D8] flex items-center justify-center shrink-0 text-[#292720]">
              <HeartHandshake className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-[#292720] uppercase tracking-wider">
                100% Handcrafted
              </h4>
              <p className="text-xs text-[#786653] mt-0.5">
                Tufted and sculpted with patient artisanal precision.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-[#EAE4D8]/30 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-[#EAE4D8] flex items-center justify-center shrink-0 text-[#292720]">
              <Sparkles className="w-4 h-4 text-[#C49746]" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-[#292720] uppercase tracking-wider">
                Bespoke & Personalised
              </h4>
              <p className="text-xs text-[#786653] mt-0.5">
                Any name, logo, wedding motif, or dimension.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-[#EAE4D8]/30 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-[#EAE4D8] flex items-center justify-center shrink-0 text-[#292720]">
              <ShieldCheck className="w-4 h-4 text-[#786653]" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-[#292720] uppercase tracking-wider">
                Heirloom Materials
              </h4>
              <p className="text-xs text-[#786653] mt-0.5">
                Pure NZ wool, durable acrylics, and non-toxic latex.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-[#EAE4D8]/30 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-[#EAE4D8] flex items-center justify-center shrink-0 text-[#292720]">
              <Compass className="w-4 h-4 text-[#786653]" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-[#292720] uppercase tracking-wider">
                India-Wide Delivery
              </h4>
              <p className="text-xs text-[#786653] mt-0.5">
                Securely rolled and packaged from Andhra Pradesh.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
