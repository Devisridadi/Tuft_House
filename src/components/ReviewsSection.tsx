import React from 'react';
import { REVIEWS } from '../data/reviews';
import { Sparkles, Star, Quote, CheckCircle } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#EAE4D8]/20 border-y border-[#B6A18A]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#786653] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C49746]" />
            <span>Client Experiences</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#292720] tracking-tight mb-4">
            Cherished in Homes & Celebrations
          </h2>
          <p className="text-sm text-[#786653]">
            Read what brides, interior architects, and studio founders have to say about their TUFT HOUSE commissions.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#F7F4EE] rounded-3xl p-6 sm:p-7 border border-[#B6A18A]/25 shadow-subtle flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#C49746]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-[#A9A28E]">
                    {rev.date}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#786653] leading-relaxed italic mb-6">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#B6A18A]/20">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-semibold text-[#292720] uppercase tracking-wider">
                      {rev.author}
                    </h4>
                    <p className="text-[11px] text-[#A9A28E]">
                      {rev.occasion} • {rev.location}
                    </p>
                  </div>
                  {rev.verified && (
                    <span title="Verified Commission" className="text-emerald-700">
                      <CheckCircle className="w-4 h-4" />
                    </span>
                  )}
                </div>
                <div className="text-[10px] text-[#786653] mt-2 bg-[#EAE4D8]/50 px-2 py-1 rounded-md line-clamp-1">
                  Commissioned: {rev.productName}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
