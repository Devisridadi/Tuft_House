import React, { useState } from 'react';
import { CartItem } from '../types';
import { formatINR, generateWhatsAppLink } from '../utils/helpers';
import { X, Trash2, ShoppingBag, ArrowRight, MessageCircle, Tag, Sparkles } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (index: number, newQty: number) => void;
  onRemoveItem: (index: number) => void;
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout
}) => {
  if (!isOpen) return null;

  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = couponApplied ? Math.round(subtotal * 0.1) : 0;
  const freeShippingThreshold = 2999;
  const shipping = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 250;
  const total = subtotal - discount + shipping;

  const handleApplyCoupon = () => {
    if (couponCode.trim().toUpperCase() === 'TUFT10') {
      setCouponApplied(true);
    } else {
      alert('Invalid coupon code. Try "TUFT10" for 10% studio launch discount!');
    }
  };

  const handleWhatsAppCheckout = () => {
    let orderSummary = `*TUFT HOUSE — Shopping Bag Order*\n----------------------------------------\n`;
    items.forEach((item, idx) => {
      orderSummary += `${idx + 1}. *${item.product.name}*\n   Size: ${item.selectedSize}\n   Qty: ${item.quantity} × ${formatINR(item.price)}\n   Subtotal: ${formatINR(item.price * item.quantity)}\n`;
      if (item.customNote) {
        orderSummary += `   Custom Note: "${item.customNote}"\n`;
      }
    });
    orderSummary += `----------------------------------------\n`;
    orderSummary += `*Subtotal:* ${formatINR(subtotal)}\n`;
    if (discount > 0) orderSummary += `*Discount (TUFT10):* -${formatINR(discount)}\n`;
    orderSummary += `*Shipping:* ${shipping === 0 ? 'FREE Insured Delivery' : formatINR(shipping)}\n`;
    orderSummary += `*Estimated Total:* ${formatINR(total)}\n\n`;
    orderSummary += `Hello TUFT HOUSE! I would like to confirm this order and provide delivery address details.`;

    window.open(generateWhatsAppLink(orderSummary), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-md w-full bg-[#F7F4EE] shadow-elevated flex flex-col justify-between z-50 border-l border-[#B6A18A]/30">
        
        {/* Header */}
        <div className="p-6 border-b border-[#B6A18A]/25 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#292720]" />
            <h3 className="font-serif text-2xl font-semibold text-[#292720]">
              Your Shopping Bag
            </h3>
            <span className="text-xs bg-[#EAE4D8] text-[#786653] font-bold px-2 py-0.5 rounded-full">
              {items.reduce((acc, i) => acc + i.quantity, 0)}
            </span>
          </div>

          <button 
            onClick={onClose}
            className="p-1.5 text-[#786653] hover:text-[#292720] rounded-full hover:bg-[#EAE4D8]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="px-6 py-3 bg-[#EAE4D8]/50 border-b border-[#B6A18A]/20 text-xs text-[#786653]">
          {subtotal >= freeShippingThreshold ? (
            <div className="flex items-center gap-1.5 text-emerald-800 font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Complimentary insured shipping unlocked across India!</span>
            </div>
          ) : (
            <div>
              Add <strong>{formatINR(freeShippingThreshold - subtotal)}</strong> more for <strong>FREE India Shipping</strong>
              <div className="w-full bg-[#B6A18A]/30 h-1.5 rounded-full mt-1.5 overflow-hidden">
                <div 
                  className="bg-[#292720] h-full transition-all duration-500" 
                  style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-20 text-[#786653]">
              <ShoppingBag className="w-12 h-12 text-[#B6A18A] mx-auto mb-3 opacity-60" />
              <p className="font-serif text-xl text-[#292720] mb-1">Your bag is empty</p>
              <p className="text-xs max-w-xs mx-auto mb-6">
                Discover our handmade tufted rugs, wedding mandalas, and custom gifts.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-[#292720] text-[#EAE4D8] rounded-full text-xs uppercase tracking-wider font-semibold"
              >
                Browse Shop
              </button>
            </div>
          ) : (
            items.map((item, idx) => (
              <div 
                key={idx}
                className="flex gap-4 p-3.5 rounded-2xl bg-white border border-[#B6A18A]/25 shadow-subtle"
              >
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  className="w-20 h-20 object-cover rounded-xl bg-[#EAE4D8] shrink-0"
                />

                <div className="flex-1 flex flex-col justify-between text-xs">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-semibold text-[#292720] line-clamp-1">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(idx)}
                        className="text-[#A9A28E] hover:text-red-600 transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="text-[11px] text-[#786653] mt-0.5">
                      Size: {item.selectedSize}
                    </div>

                    {item.customNote && (
                      <div className="text-[10px] text-[#786653] bg-[#EAE4D8]/40 px-2 py-0.5 rounded mt-1 line-clamp-1 italic">
                        Note: "{item.customNote}"
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-2 mt-2 border-t border-[#B6A18A]/15">
                    {/* Quantity controls */}
                    <div className="flex items-center border border-[#B6A18A]/40 rounded-lg overflow-hidden">
                      <button
                        onClick={() => onUpdateQuantity(idx, Math.max(1, item.quantity - 1))}
                        className="px-2 py-0.5 text-[#292720] hover:bg-[#EAE4D8]"
                      >
                        -
                      </button>
                      <span className="px-2 font-semibold text-[11px]">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(idx, item.quantity + 1)}
                        className="px-2 py-0.5 text-[#292720] hover:bg-[#EAE4D8]"
                      >
                        +
                      </button>
                    </div>

                    <span className="font-serif font-bold text-[#292720]">
                      {formatINR(item.price * item.quantity)}
                    </span>
                  </div>

                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer & Checkout */}
        {items.length > 0 && (
          <div className="p-6 border-t border-[#B6A18A]/25 bg-white/70 space-y-4">
            {/* Coupon Code Input */}
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <Tag className="w-3.5 h-3.5 text-[#A9A28E] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Coupon code (e.g. TUFT10)"
                  className="w-full pl-8 pr-3 py-1.5 rounded-lg border border-[#B6A18A]/40 text-xs uppercase"
                />
              </div>
              <button
                onClick={handleApplyCoupon}
                className="px-3 py-1.5 bg-[#EAE4D8] text-[#292720] rounded-lg text-xs font-semibold hover:bg-[#B6A18A]/40"
              >
                Apply
              </button>
            </div>

            {/* Calculations */}
            <div className="space-y-1.5 text-xs text-[#786653]">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-semibold text-[#292720]">{formatINR(subtotal)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-emerald-700">
                  <span>Launch Discount (10%):</span>
                  <span>-{formatINR(discount)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Insured Studio Shipping:</span>
                <span>{shipping === 0 ? 'FREE' : formatINR(shipping)}</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-[#292720] pt-2 border-t border-[#B6A18A]/20">
                <span>Total Amount:</span>
                <span className="font-serif text-lg">{formatINR(total)}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-1">
              <button
                onClick={onProceedToCheckout}
                className="w-full py-3.5 px-6 bg-[#292720] text-[#EAE4D8] hover:bg-[#786653] rounded-full text-xs uppercase tracking-widest font-semibold transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <span>Proceed to Studio Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleWhatsAppCheckout}
                className="w-full py-2.5 px-6 border border-[#292720] text-[#292720] hover:bg-[#EAE4D8] rounded-full text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Instant WhatsApp Checkout</span>
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
