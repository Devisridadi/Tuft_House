import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../data/portfolio';
import { PortfolioItem } from '../types';
import { ArrowUpRight, Sparkles, MapPin, Calendar, X, MessageCircle } from 'lucide-react';
import { generateWhatsAppLink } from '../utils/helpers';

interface PortfolioGalleryProps {
  onOpenCustomWithInspiration?: (title: string, category: string) => void;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({
  onOpenCustomWithInspiration
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'wedding', label: 'Wedding & Celebrations' },
    { id: 'promotional', label: 'Movie & Brand Promos' },
    { id: 'home-decor', label: 'Luxury Home Décor' },
    { id: 'commercial', label: 'Restaurant Branding' },
    { id: 'gifts', label: 'Custom Gifts' },
  ];

  const filteredItems = selectedFilter === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === selectedFilter);

  const handleEnquireSimilar = (item: PortfolioItem) => {
    const text = `Hello TUFT HOUSE! I was admiring your portfolio project "${item.title}" (${item.dimensions}) in ${item.location}. I would love to explore a similar custom tufted piece. Could we discuss?`;
    window.open(generateWhatsAppLink(text), '_blank');
  };

  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-[#EAE4D8]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#786653] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C49746]" />
            <span>Studio Archive</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#292720] tracking-tight mb-4">
            Our Work & Client Stories
          </h2>
          <p className="text-sm sm:text-base text-[#786653] leading-relaxed">
            A glimpse into milestone celebrations, architectural spaces, and creator emblems 
            brought to life by TUFT HOUSE across India.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shrink-0 ${
                selectedFilter === filter.id
                  ? 'bg-[#292720] text-[#EAE4D8] shadow-sm'
                  : 'bg-[#F7F4EE] text-[#786653] border border-[#B6A18A]/30 hover:border-[#292720]'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group cursor-pointer bg-[#F7F4EE] rounded-3xl overflow-hidden border border-[#B6A18A]/25 shadow-subtle hover:shadow-float transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] bg-[#EAE4D8] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                  <span className="px-4 py-2 bg-[#F7F4EE]/95 text-[#292720] rounded-full text-xs font-semibold uppercase tracking-wider shadow-md">
                    View Project Case
                  </span>
                </div>

                <div className="absolute top-3 left-3 bg-[#292720]/80 backdrop-blur-md px-3 py-1 rounded-full text-[#EAE4D8] text-[10px] uppercase tracking-wider font-semibold">
                  {item.categoryLabel}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between text-[11px] text-[#A9A28E] uppercase tracking-wider mb-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#786653]" />
                    {item.location}
                  </span>
                  <span>{item.year}</span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#292720] group-hover:text-[#786653] transition-colors leading-snug line-clamp-1">
                  {item.title}
                </h3>

                <p className="text-xs text-[#786653] mt-2 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-4 mt-4 border-t border-[#B6A18A]/20 flex items-center justify-between text-xs text-[#786653]">
                  <span>Size: <strong>{item.dimensions}</strong></span>
                  <span className="text-[#292720] font-semibold group-hover:translate-x-1 transition-transform">
                    Inspect Story →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox / Modal for Project Details */}
        {activeItem && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div 
              className="fixed inset-0 bg-[#292720]/75 backdrop-blur-sm"
              onClick={() => setActiveItem(null)}
            />
            <div className="min-h-screen px-4 flex items-center justify-center py-8">
              <div 
                className="inline-block w-full max-w-3xl bg-[#F7F4EE] rounded-3xl overflow-hidden shadow-elevated border border-[#B6A18A]/30 relative my-auto text-left"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setActiveItem(null)}
                  className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#292720]/80 text-[#EAE4D8] hover:bg-[#292720]"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="relative aspect-[16/9] sm:aspect-[21/10] bg-[#EAE4D8]">
                  <img
                    src={activeItem.image}
                    alt={activeItem.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#292720]/80 backdrop-blur-md px-3 py-1 rounded-full text-[#EAE4D8] text-[10px] uppercase tracking-wider font-semibold">
                    {activeItem.categoryLabel}
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 text-xs text-[#786653] mb-2">
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {activeItem.location}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {activeItem.year}</span>
                    <span>•</span>
                    <span>Client: <strong>{activeItem.client}</strong></span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#292720]">
                    {activeItem.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#786653] leading-relaxed mt-3 mb-6">
                    {activeItem.description}
                  </p>

                  <div className="bg-[#EAE4D8]/50 p-4 rounded-2xl mb-6 space-y-1 text-xs text-[#786653]">
                    <div className="font-semibold text-[#292720] uppercase tracking-wider text-[10px] mb-1">
                      Key Highlights:
                    </div>
                    {activeItem.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="text-[#C49746]">•</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <button
                      onClick={() => handleEnquireSimilar(activeItem)}
                      className="w-full sm:w-auto flex-1 py-3.5 px-6 bg-[#292720] text-[#EAE4D8] hover:bg-[#786653] rounded-full text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4 text-[#25D366]" />
                      <span>Request Similar Custom Piece</span>
                    </button>

                    <button
                      onClick={() => setActiveItem(null)}
                      className="w-full sm:w-auto py-3 px-6 text-xs text-[#786653] hover:text-[#292720]"
                    >
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
