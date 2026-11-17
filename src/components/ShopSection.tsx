import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../data/products';
import { Product, ProductCategory } from '../types';
import { ProductCard } from './ProductCard';
import { Search, Filter, Sparkles, SlidersHorizontal, ArrowUpDown } from 'lucide-react';

interface ShopSectionProps {
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  initialCategory?: string;
}

export const ShopSection: React.FC<ShopSectionProps> = ({
  onQuickView,
  onAddToCart,
  initialCategory = 'all'
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [filterType, setFilterType] = useState<'all' | 'ready' | 'made-to-order'>('all');

  const categories: { id: string; label: string }[] = [
    { id: 'all', label: 'All Creations' },
    { id: 'wedding', label: 'Wedding' },
    { id: 'promotional', label: 'Promotional' },
    { id: 'home-decor', label: 'Home Décor' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'gifts', label: 'Gifts' },
    { id: 'custom', label: 'Custom' },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      // Readiness filter
      if (filterType === 'ready' && product.isMadeToOrder) {
        return false;
      }
      if (filterType === 'made-to-order' && !product.isMadeToOrder) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesSubtitle = product.subtitle.toLowerCase().includes(q);
        const matchesDesc = product.description.toLowerCase().includes(q);
        const matchesTag = product.tags.some(t => t.toLowerCase().includes(q));
        if (!matchesName && !matchesSubtitle && !matchesDesc && !matchesTag) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      // Default: featured first
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }, [selectedCategory, filterType, searchQuery, sortBy]);

  return (
    <section id="shop" className="py-20 sm:py-28 bg-[#F7F4EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#786653] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C49746]" />
            <span>The Studio Catalog</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#292720] tracking-tight mb-4">
            Curated Tufted Creations
          </h2>
          <p className="text-sm sm:text-base text-[#786653] leading-relaxed">
            Explore ready-made signature studio rugs, ceremonial wedding mats, and custom commission templates. 
            All handcrafted with tactile depth and heirloom durability.
          </p>
        </div>

        {/* Filter and Search Bar Controls */}
        <div className="mb-8 space-y-4">
          
          {/* Top Row: Search and Sort */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="w-4 h-4 text-[#A9A28E] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by product, wedding, logo, or room type..."
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-[#B6A18A]/30 text-xs text-[#292720] placeholder-[#A9A28E] focus:outline-none focus:border-[#292720] shadow-sm transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#786653] hover:text-[#292720]"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Controls: Type and Sort Dropdowns */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-end">
              
              {/* Ready vs Made to order */}
              <div className="flex bg-[#EAE4D8]/70 p-1 rounded-full border border-[#B6A18A]/30 text-xs">
                <button
                  onClick={() => setFilterType('all')}
                  className={`px-3 py-1 rounded-full font-medium transition-colors ${
                    filterType === 'all' ? 'bg-[#292720] text-[#EAE4D8]' : 'text-[#786653]'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setFilterType('ready')}
                  className={`px-3 py-1 rounded-full font-medium transition-colors ${
                    filterType === 'ready' ? 'bg-[#292720] text-[#EAE4D8]' : 'text-[#786653]'
                  }`}
                >
                  Ready to Ship
                </button>
                <button
                  onClick={() => setFilterType('made-to-order')}
                  className={`px-3 py-1 rounded-full font-medium transition-colors ${
                    filterType === 'made-to-order' ? 'bg-[#292720] text-[#EAE4D8]' : 'text-[#786653]'
                  }`}
                >
                  Made to Order
                </button>
              </div>

              {/* Sort By Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e: any) => setSortBy(e.target.value)}
                  className="appearance-none pl-3 pr-8 py-2 bg-white rounded-full border border-[#B6A18A]/30 text-xs font-medium text-[#292720] focus:outline-none focus:border-[#292720] shadow-sm cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ArrowUpDown className="w-3.5 h-3.5 text-[#786653] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

            </div>

          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-[#292720] text-[#EAE4D8] shadow-sm'
                    : 'bg-[#EAE4D8]/60 text-[#786653] hover:bg-[#EAE4D8] hover:text-[#292720]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-[#786653] mb-6 pb-3 border-b border-[#B6A18A]/20">
          <span>Showing <strong>{filteredProducts.length}</strong> creations</span>
          {selectedCategory !== 'all' && (
            <button
              onClick={() => setSelectedCategory('all')}
              className="text-[#786653] hover:text-[#292720] underline text-[11px]"
            >
              Reset category filter
            </button>
          )}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onQuickView}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#EAE4D8]/30 rounded-3xl p-8 border border-dashed border-[#B6A18A]/40">
            <h3 className="font-serif text-2xl font-light text-[#292720] mb-2">
              No creations found
            </h3>
            <p className="text-xs text-[#786653] max-w-md mx-auto mb-6">
              We couldn't find any items matching your selected criteria. Try adjusting your search or explore custom commissions.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setFilterType('all');
              }}
              className="px-5 py-2.5 bg-[#292720] text-[#EAE4D8] text-xs uppercase tracking-wider rounded-full font-semibold"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
