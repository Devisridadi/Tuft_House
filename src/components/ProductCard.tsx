import React from 'react';
import { Product } from '../types';
import { formatINR, generateWhatsAppLink } from '../utils/helpers';
import { MessageCircle, ShoppingBag, Eye, Sparkles } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
  onAddToCart
}) => {
  const handleWhatsAppEnquiry = (e: React.MouseEvent) => {
    e.stopPropagation();
    const message = `Hello TUFT HOUSE! I'm interested in the "${product.name}" (${formatINR(product.price)}). Could you tell me more about customizing this piece?`;
    window.open(generateWhatsAppLink(message), '_blank');
  };

  const handleAddClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
  };

  return (
    <div 
      onClick={() => onQuickView(product)}
      className="group cursor-pointer bg-[#F7F4EE] rounded-3xl overflow-hidden border border-[#B6A18A]/25 shadow-subtle hover:shadow-float transition-all duration-300 flex flex-col justify-between"
    >
      {/* Product Image Area */}
      <div className="relative aspect-[4/3] bg-[#EAE4D8] overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {/* Secondary Image on Hover if available */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} alternate angle`}
            className="absolute inset-0 w-full h-full object-cover object-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            loading="lazy"
          />
        )}

        {/* Badges Overlay */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
          {product.isMadeToOrder ? (
            <span className="bg-[#292720]/80 backdrop-blur-md text-[#EAE4D8] text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full border border-white/10">
              Made to Order
            </span>
          ) : (
            <span className="bg-[#786653]/90 backdrop-blur-md text-[#F7F4EE] text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full border border-white/10">
              Ready to Ship
            </span>
          )}

          {product.pileType === '3D Sculpted Relief' && (
            <span className="bg-[#C49746] text-[#292720] text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full shadow-sm">
              3D Carved
            </span>
          )}
        </div>

        {/* Quick View Button */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 p-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="px-4 py-2 bg-[#F7F4EE]/95 text-[#292720] rounded-full text-xs font-semibold uppercase tracking-wider shadow-md hover:bg-white transition-all flex items-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Product Details Area */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-[11px] text-[#A9A28E] uppercase tracking-widest font-medium mb-1">
            <span>{product.categoryLabel}</span>
            <span className="text-[#C49746] font-semibold">★ {product.rating}</span>
          </div>

          <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#292720] group-hover:text-[#786653] transition-colors leading-tight line-clamp-1">
            {product.name}
          </h3>

          <p className="text-xs text-[#786653] mt-1.5 line-clamp-2 leading-relaxed">
            {product.subtitle}
          </p>

          <div className="text-[11px] text-[#A9A28E] mt-2 flex items-center gap-2">
            <span>Size: {product.dimensions.split('(')[0]}</span>
            <span>•</span>
            <span>{product.pileType}</span>
          </div>
        </div>

        {/* Price & Action Row */}
        <div className="pt-4 mt-4 border-t border-[#B6A18A]/20 flex items-center justify-between gap-2">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#786653] block">
              {product.isQuoteBased ? 'Custom Commission' : 'Studio Price'}
            </span>
            <span className="font-serif text-lg sm:text-xl font-bold text-[#292720]">
              {product.isQuoteBased ? 'Quote on Specs' : formatINR(product.price)}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {/* WhatsApp Enquiry Button */}
            <button
              onClick={handleWhatsAppEnquiry}
              title="Enquire on WhatsApp"
              className="p-2 rounded-full border border-[#B6A18A]/40 text-[#786653] hover:text-[#292720] hover:bg-[#EAE4D8] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
            </button>

            {/* Add to Cart or Request Quote */}
            <button
              onClick={handleAddClick}
              className="px-3.5 py-2 bg-[#292720] text-[#EAE4D8] hover:bg-[#786653] rounded-full text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>{product.isQuoteBased ? 'Customise' : 'Add'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
