import React from 'react';
import { Sparkles, HeartHandshake, Eye, Award, MapPin, Feather } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F7F4EE] border-t border-[#B6A18A]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Editorial Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#786653] mb-4">
              <Feather className="w-3.5 h-3.5 text-[#C49746]" />
              <span>The TUFT HOUSE Story</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#292720] tracking-tight leading-[1.12] mb-6">
              More Than Décor.<br />
              <span className="italic font-normal text-[#786653]">A Form of Living Art.</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#786653] leading-relaxed font-light">
              <p>
                At <strong>TUFT HOUSE</strong>, we believe rugs and textiles shouldn’t merely cover a floor — 
                they should evoke warmth, tell stories, and invite you to reach out and touch them.
              </p>
              <p>
                Founded in Anakapalli, Andhra Pradesh, India, our studio was born out of a deep reverence for the tactile 
                beauty of tufting: the rhythmic punch of yarn into monks cloth, the rich scent of natural latex 
                curing on cotton backing, and the meditative sculpting of 3D bevels with electric shears.
              </p>
              <p>
                In a world crowded with automated industrial factories churning out generic, synthetic rugs, 
                we take the opposite path. We create <strong>made-to-order, custom handmade pieces</strong> that 
                celebrate sacred family milestones — from auspicious Haldi mandalas to creator studio logo rugs 
                and tactile interior accents that stand out.
              </p>
            </div>

            {/* Studio Location & Founder Pill */}
            <div className="mt-8 pt-6 border-t border-[#B6A18A]/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#EAE4D8] flex items-center justify-center text-[#292720]">
                  <MapPin className="w-5 h-5 text-[#786653]" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest font-semibold text-[#292720] block">
                    Studio & Atelier Location
                  </span>
                  <span className="text-xs text-[#786653]">
                    Anakapalli, Andhra Pradesh, India — Shipping Worldwide
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#292720] text-[#EAE4D8] flex items-center justify-center font-serif font-bold text-sm">
                  D
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest font-semibold text-[#292720] block">
                    Devisri & Pandu
                  </span>
                  <span className="text-xs text-[#786653]">
                    Founders & Master Tufters
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Composition */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Main Photo */}
              <div className="rounded-3xl sm:rounded-4xl overflow-hidden shadow-elevated border border-[#B6A18A]/30 aspect-[4/5] bg-[#EAE4D8]">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                  alt="Tufting studio craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Quote Badge */}
              <div className="absolute -bottom-6 -left-6 sm:-left-8 bg-[#292720] text-[#EAE4D8] p-5 sm:p-6 rounded-3xl shadow-float max-w-xs border border-white/10">
                <span className="font-serif text-3xl text-[#C49746] block leading-none mb-1">“</span>
                <p className="font-serif text-base sm:text-lg italic leading-snug">
                  Made by Hand.<br />Made to Stand Out.
                </p>
                <span className="text-[10px] uppercase tracking-widest text-[#B6A18A] font-semibold block mt-3">
                  TUFT HOUSE Studio Motto
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* 5 Brand Pillars Grid */}
        <div className="mt-20 pt-16 border-t border-[#B6A18A]/20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#786653] block mb-2">
              Our Core Convictions
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-light text-[#292720]">
              The Five Pillars of Our Studio
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            
            <div className="bg-[#EAE4D8]/40 p-6 rounded-3xl border border-[#B6A18A]/25">
              <span className="font-serif text-2xl text-[#C49746] block mb-2">01</span>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#292720] mb-2">
                Handmade Craftsmanship
              </h4>
              <p className="text-xs text-[#786653] leading-relaxed">
                Zero automated mass production. Every knot and carved groove is created with real human patience.
              </p>
            </div>

            <div className="bg-[#EAE4D8]/40 p-6 rounded-3xl border border-[#B6A18A]/25">
              <span className="font-serif text-2xl text-[#C49746] block mb-2">02</span>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#292720] mb-2">
                Customised Designs
              </h4>
              <p className="text-xs text-[#786653] leading-relaxed">
                No rigid catalogs. We adapt to your architectural blueprints, wedding palette, or vector brand logos.
              </p>
            </div>

            <div className="bg-[#EAE4D8]/40 p-6 rounded-3xl border border-[#B6A18A]/25">
              <span className="font-serif text-2xl text-[#C49746] block mb-2">03</span>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#292720] mb-2">
                Attention to Detail
              </h4>
              <p className="text-xs text-[#786653] leading-relaxed">
                Clean contour shearing, surgical line separation, and plush underfoot density tested for longevity.
              </p>
            </div>

            <div className="bg-[#EAE4D8]/40 p-6 rounded-3xl border border-[#B6A18A]/25">
              <span className="font-serif text-2xl text-[#C49746] block mb-2">04</span>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#292720] mb-2">
                Made-to-Order Ethics
              </h4>
              <p className="text-xs text-[#786653] leading-relaxed">
                We craft only what is commissioned, reducing unnecessary material waste and keeping each piece rare.
              </p>
            </div>

            <div className="bg-[#EAE4D8]/40 p-6 rounded-3xl border border-[#B6A18A]/25">
              <span className="font-serif text-2xl text-[#C49746] block mb-2">05</span>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#292720] mb-2">
                Personalised Care
              </h4>
              <p className="text-xs text-[#786653] leading-relaxed">
                Direct WhatsApp consultation, progress snapshots during carving, and dedicated post-purchase support.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
