import React, { useState } from 'react';
import { Product } from '../types';
import { formatINR, generateWhatsAppLink } from '../utils/helpers';
import { 
  X, 
  MessageCircle, 
  ShoppingBag, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  Truck, 
  Ruler, 
  Layers,
  ChevronRight
} from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, customNote?: string, quantity?: number) => void;
  onOpenCustomOrder: (categoryId: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onOpenCustomOrder
}) => {
  if (!product) return null;

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(
    product.availableSizes ? product.availableSizes[0].name : product.dimensions
  );
  const [quantity, setQuantity] = useState(1);
  const [customNote, setCustomNote] = useState('');
  const [addedAnimation, setAddedAnimation] = useState(false);

  // Calculate current price based on selected size if pricing tiers exist
  const currentPrice = (() => {
    if (product.isQuoteBased) return 0;
    if (product.availableSizes) {
      const found = product.availableSizes.find(s => s.name === selectedSize);
      if (found && found.price > 0) return found.price;
    }
    return product.price;
  })();

  const handleAddToCart = () => {
    onAddToCart(product, selectedSize, customNote, quantity);
    setAddedAnimation(true);
    setTimeout(() => {
      setAddedAnimation(false);
      onClose();
    }, 800);
  };

  const handleWhatsAppInquiry = () => {
    const text = `Hello TUFT HOUSE! I have a question regarding "${product.name}" (${selectedSize}):\n${customNote ? `My customisation requirement: ${customNote}\n` : ''}Could you confirm availability and lead time?`;
    window.open(generateWhatsAppLink(text), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#292720]/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="min-h-screen px-4 text-center flex items-center justify-center py-6 sm:py-12">
        <div 
          className="inline-block w-full max-w-4xl bg-[#F7F4EE] rounded-3xl text-left overflow-hidden shadow-elevated transform transition-all border border-[#B6A18A]/30 relative my-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#292720]/80 text-[#EAE4D8] hover:bg-[#292720] transition-colors shadow-md"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 max-h-[90vh] overflow-y-auto">
            
            {/* Left Column: Image Gallery */}
            <div className="md:col-span-6 p-6 sm:p-8 bg-[#EAE4D8]/50 flex flex-col justify-between">
              <div>
                {/* Main Large Image */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#EAE4D8] border border-[#B6A18A]/25 shadow-subtle mb-4">
                  <img
                    src={product.images[selectedImage] || product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover object-center"
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                    <span className="px-3 py-1 bg-[#292720]/85 backdrop-blur-md text-[#EAE4D8] text-[10px] uppercase tracking-wider font-semibold rounded-full border border-white/10">
                      {product.isMadeToOrder ? 'Made to Order' : 'Ready to Ship'}
                    </span>
                    <span className="px-3 py-1 bg-[#C49746] text-[#292720] text-[9px] uppercase tracking-wider font-bold rounded-full">
                      {product.pileType}
                    </span>
                  </div>
                </div>

                {/* Thumbnail Previews */}
                {product.images.length > 1 && (
                  <div className="flex gap-2.5 overflow-x-auto pb-2">
                    {product.images.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedImage(i)}
                        className={`w-16 h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                          selectedImage === i 
                            ? 'border-[#292720] scale-95 shadow-sm' 
                            : 'border-transparent opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Craftsmanship Guarantees */}
              <div className="mt-6 pt-6 border-t border-[#B6A18A]/25 space-y-2 text-xs text-[#786653]">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#786653]" />
                  <span>Lead Time: <strong>{product.leadTime}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#786653]" />
                  <span>Non-slip latex rubberized backing with twill seal</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#C49746]" />
                  <span>100% Handcrafted in Andhra Pradesh, India</span>
                </div>
              </div>

            </div>

            {/* Right Column: Specifications & Configuration */}
            <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="text-[11px] uppercase tracking-widest text-[#786653] font-semibold mb-1">
                  {product.categoryLabel}
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#292720] leading-tight">
                  {product.name}
                </h2>

                <p className="text-xs sm:text-sm text-[#786653] mt-2 leading-relaxed">
                  {product.subtitle}
                </p>

                {/* Price Display */}
                <div className="my-5 p-4 rounded-2xl bg-[#EAE4D8]/60 border border-[#B6A18A]/30 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#786653] block">
                      {product.isQuoteBased ? 'Custom Commission' : 'Price (Incl. Taxes)'}
                    </span>
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-[#292720]">
                      {product.isQuoteBased ? 'Quote on Request' : formatINR(currentPrice * quantity)}
                    </span>
                  </div>
                  {quantity > 1 && !product.isQuoteBased && (
                    <span className="text-xs text-[#786653]">
                      ({formatINR(currentPrice)} each)
                    </span>
                  )}
                </div>

                {/* Size Selection */}
                {product.availableSizes && product.availableSizes.length > 0 && (
                  <div className="mb-5">
                    <label className="text-xs uppercase tracking-wider font-semibold text-[#292720] block mb-2 flex items-center justify-between">
                      <span>Select Dimensions</span>
                      <span className="text-[11px] text-[#786653] font-normal flex items-center gap-1">
                        <Ruler className="w-3.5 h-3.5" /> Dimensions
                      </span>
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {product.availableSizes.map((size) => (
                        <button
                          key={size.name}
                          onClick={() => setSelectedSize(size.name)}
                          className={`p-2.5 text-left rounded-xl border text-xs transition-all ${
                            selectedSize === size.name
                              ? 'bg-[#292720] text-[#EAE4D8] border-[#292720] font-semibold shadow-sm'
                              : 'bg-[#F7F4EE] text-[#786653] border-[#B6A18A]/30 hover:border-[#786653]'
                          }`}
                        >
                          <div className="font-medium">{size.name}</div>
                          <div className="text-[10px] opacity-80">{size.dimensions}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Material & Pile Height */}
                <div className="mb-5 p-3.5 rounded-xl bg-[#EAE4D8]/40 border border-[#B6A18A]/20 text-xs space-y-1.5 text-[#786653]">
                  <div><strong>Material:</strong> {product.material}</div>
                  <div><strong>Pile Height:</strong> {product.pileHeight}</div>
                </div>

                {/* Personalisation / Custom Note Input */}
                <div className="mb-5">
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#292720] block mb-1.5">
                    Personalisation Notes (Optional)
                  </label>
                  <input
                    type="text"
                    value={customNote}
                    onChange={(e) => setCustomNote(e.target.value)}
                    placeholder="e.g. Names to tuft, custom wedding date, or color tweaks"
                    className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-[#B6A18A]/40 text-xs text-[#292720] placeholder-[#A9A28E] focus:outline-none focus:border-[#292720]"
                  />
                  <p className="text-[10px] text-[#786653] mt-1">
                    Need a bespoke shape or size? You can also request a full custom quote.
                  </p>
                </div>

                {/* Quantity Selector */}
                {!product.isQuoteBased && (
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#292720]">
                      Quantity:
                    </span>
                    <div className="flex items-center border border-[#B6A18A]/40 rounded-xl bg-white overflow-hidden">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-3 py-1.5 text-[#292720] hover:bg-[#EAE4D8] text-sm font-semibold transition-colors"
                      >
                        -
                      </button>
                      <span className="px-3 text-xs font-semibold text-[#292720]">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-3 py-1.5 text-[#292720] hover:bg-[#EAE4D8] text-sm font-semibold transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                )}

              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-4 border-t border-[#B6A18A]/25">
                {product.isQuoteBased ? (
                  <button
                    onClick={() => {
                      onClose();
                      onOpenCustomOrder(product.category);
                    }}
                    className="w-full py-3.5 px-6 bg-[#292720] text-[#EAE4D8] hover:bg-[#786653] rounded-full text-xs uppercase tracking-widest font-semibold transition-colors flex items-center justify-center gap-2 shadow-md"
                  >
                    <Sparkles className="w-4 h-4 text-[#C49746]" />
                    <span>Configure Custom Commission</span>
                  </button>
                ) : (
                  <button
                    onClick={handleAddToCart}
                    className={`w-full py-3.5 px-6 rounded-full text-xs uppercase tracking-widest font-semibold transition-all flex items-center justify-center gap-2 shadow-md ${
                      addedAnimation
                        ? 'bg-emerald-700 text-white'
                        : 'bg-[#292720] text-[#EAE4D8] hover:bg-[#786653]'
                    }`}
                  >
                    {addedAnimation ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Added to Bag!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add to Bag • {formatINR(currentPrice * quantity)}</span>
                      </>
                    )}
                  </button>
                )}

                {/* WhatsApp Direct Enquiry Button */}
                <button
                  onClick={handleWhatsAppInquiry}
                  className="w-full py-3 px-6 bg-transparent text-[#292720] border border-[#292720] hover:bg-[#EAE4D8] rounded-full text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#786653]" />
                  <span>Enquire on WhatsApp</span>
                </button>
              </div>

            </div>

          </div>

          {/* Detailed Features Accordion at bottom */}
          <div className="p-6 sm:p-8 bg-[#EAE4D8]/30 border-t border-[#B6A18A]/25">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#292720] mb-3">
              Description & Specifications
            </h4>
            <p className="text-xs sm:text-sm text-[#786653] leading-relaxed mb-4">
              {product.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#786653]">
                  <Check className="w-3.5 h-3.5 text-[#C49746] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
