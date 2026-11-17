import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';
import { formatINR } from '../utils/helpers';
import { Search, X, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct
}) => {
  if (!isOpen) return null;

  const [query, setQuery] = useState('');

  const results = query.trim()
    ? PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.subtitle.toLowerCase().includes(query.toLowerCase()) ||
        p.categoryLabel.toLowerCase().includes(query.toLowerCase()) ||
        p.tags.some(t => t.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-[#292720]/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="min-h-screen px-4 flex items-start justify-center pt-20">
        <div 
          className="inline-block w-full max-w-2xl bg-[#F7F4EE] rounded-3xl overflow-hidden shadow-elevated border border-[#B6A18A]/30 relative my-auto text-left p-6"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between pb-4 border-b border-[#B6A18A]/25">
            <div className="flex items-center gap-3 flex-1">
              <Search className="w-5 h-5 text-[#786653]" />
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search rugs, wedding mats, logo designs, keychains..."
                className="w-full bg-transparent text-sm sm:text-base text-[#292720] placeholder-[#A9A28E] focus:outline-none"
              />
            </div>
            <button
              onClick={onClose}
              className="p-1 text-[#786653] hover:text-[#292720]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="pt-4 max-h-96 overflow-y-auto">
            {query.trim() === '' ? (
              <div className="py-8 text-center text-xs text-[#786653]">
                <p className="mb-2">Popular searches:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {['Sands of Dune', 'Haldi Ceremony', 'Brand Logo', 'Keychains', '3D Sculpted', 'Wall Art'].map(s => (
                    <button
                      key={s}
                      onClick={() => setQuery(s)}
                      className="px-3 py-1 bg-[#EAE4D8] hover:bg-[#B6A18A]/40 rounded-full text-xs text-[#292720]"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            ) : results.length === 0 ? (
              <div className="py-8 text-center text-xs text-[#786653]">
                No creations found matching "{query}".
              </div>
            ) : (
              <div className="space-y-2">
                {results.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => {
                      onSelectProduct(product);
                      onClose();
                    }}
                    className="flex items-center justify-between p-3 rounded-2xl hover:bg-[#EAE4D8]/60 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-12 h-12 rounded-xl object-cover bg-[#EAE4D8]"
                      />
                      <div>
                        <h4 className="text-xs font-semibold text-[#292720]">{product.name}</h4>
                        <span className="text-[11px] text-[#786653]">{product.categoryLabel} • {product.pileType}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-serif font-bold text-xs text-[#292720]">
                        {product.isQuoteBased ? 'Custom Quote' : formatINR(product.price)}
                      </span>
                      <ArrowRight className="w-4 h-4 text-[#A9A28E]" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
