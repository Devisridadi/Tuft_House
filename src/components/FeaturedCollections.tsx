import React from 'react';
import { FEATURED_COLLECTIONS } from '../data/products';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface FeaturedCollectionsProps {
  onSelectCollection: (collectionId: string) => void;
  onOpenCustomOrder: (categoryId?: string) => void;
}

export const FeaturedCollections: React.FC<FeaturedCollectionsProps> = ({
  onSelectCollection,
  onOpenCustomOrder
}) => {
  return (
    <section id="collections" className="py-20 sm:py-28 bg-[#EAE4D8]/30 border-y border-[#B6A18A]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#786653] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C49746]" />
              <span>Curated Studios & Disciplines</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#292720] tracking-tight">
              Explore Our Collections
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#786653] leading-relaxed">
            From traditional ceremonies and modern residential spaces to creator brands and intimate keepsake gifts.
          </p>
        </div>

        {/* 6 Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FEATURED_COLLECTIONS.map((col, index) => (
            <div
              key={col.id}
              onClick={() => onSelectCollection(col.id)}
              className="group cursor-pointer bg-[#F7F4EE] rounded-3xl overflow-hidden border border-[#B6A18A]/25 shadow-subtle hover:shadow-float transition-all duration-500 flex flex-col justify-between"
            >
              {/* Image Container with Badge */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#EAE4D8]">
                <img
                  src={col.image}
                  alt={col.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 bg-[#292720]/80 backdrop-blur-md px-3 py-1 rounded-full text-[#EAE4D8] text-[10px] uppercase tracking-widest font-semibold border border-white/10">
                  {col.badge}
                </div>

                {/* Hover CTA Arrow */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#F7F4EE]/90 backdrop-blur-md flex items-center justify-center text-[#292720] shadow-sm transform translate-y-1 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 group-hover:bg-[#292720] group-hover:text-[#EAE4D8] transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>

                {/* Number Watermark */}
                <div className="absolute bottom-3 left-4 text-white/90 text-xs font-serif tracking-widest uppercase">
                  0{index + 1} • {col.itemsCount}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-[#292720] group-hover:text-[#786653] transition-colors leading-snug">
                    {col.title}
                  </h3>
                  
                  <p className="text-xs uppercase tracking-wider text-[#A9A28E] font-medium mt-1 mb-3">
                    {col.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-[#786653] leading-relaxed mb-5">
                    {col.description}
                  </p>
                </div>

                {/* Example Bullets */}
                <div className="pt-4 border-t border-[#B6A18A]/20">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {col.examples.map((item, i) => (
                      <span 
                        key={i}
                        className="text-[11px] px-2.5 py-1 rounded-lg bg-[#EAE4D8]/60 text-[#786653] font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-semibold text-[#292720] group-hover:text-[#786653] pt-1">
                    <span className="uppercase tracking-widest text-[11px]">View Designs</span>
                    <span className="text-[#C49746] group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner to Custom Order */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-[#292720] text-[#EAE4D8] flex flex-col md:flex-row items-center justify-between gap-6 shadow-float">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#B6A18A] font-semibold block mb-1">
              Bespoke Studio Commissions
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#F7F4EE]">
              Looking for a custom size, monogram or bespoke design?
            </h3>
            <p className="text-xs sm:text-sm text-[#A9A28E] mt-1.5 max-w-xl">
              We specialize in custom orders. Upload your sketch, room swatch or vector logo for a personalized quotation.
            </p>
          </div>
          <button
            onClick={() => onOpenCustomOrder()}
            className="shrink-0 px-7 py-3.5 bg-[#EAE4D8] text-[#292720] hover:bg-white text-xs uppercase tracking-widest font-semibold rounded-full transition-all duration-300 shadow-sm"
          >
            Start Custom Request
          </button>
        </div>

      </div>
    </section>
  );
};
