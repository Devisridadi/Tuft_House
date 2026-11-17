import React, { useState } from 'react';
import { CartItem } from '../types';
import { formatINR, generateWhatsAppLink, triggerConfetti } from '../utils/helpers';
import { X, ShieldCheck, CheckCircle2, MessageCircle, CreditCard, Lock, Truck, AlertCircle } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderComplete: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderComplete
}) => {
  if (!isOpen) return null;

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [addressLine, setAddressLine] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('Andhra Pradesh');
  const [pincode, setPincode] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'razorpay' | 'whatsapp'>('whatsapp');
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [orderId, setOrderId] = useState('');

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal >= 2999 || subtotal === 0 ? 0 : 250;
  const total = subtotal + shipping;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const newOrderId = `TH-ORD-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(newOrderId);
    setOrderSubmitted(true);
    triggerConfetti();
  };

  const handleConfirmViaWhatsApp = () => {
    let msg = `*TUFT HOUSE — New Order Confirmation*\n`;
    msg += `*Order ID:* #${orderId}\n`;
    msg += `----------------------------------------\n`;
    msg += `*Customer:* ${fullName}\n`;
    msg += `*Phone:* ${phone}\n`;
    msg += `*Email:* ${email}\n`;
    msg += `*Shipping Address:*\n${addressLine}, ${city}, ${state} - ${pincode}\n`;
    msg += `----------------------------------------\n`;
    msg += `*Items Ordered:*\n`;
    items.forEach((item, i) => {
      msg += `${i + 1}. ${item.product.name} (${item.selectedSize}) × ${item.quantity} = ${formatINR(item.price * item.quantity)}\n`;
      if (item.customNote) msg += `   Note: "${item.customNote}"\n`;
    });
    msg += `----------------------------------------\n`;
    msg += `*Total Order Value:* ${formatINR(total)}\n`;
    msg += `*Preferred Payment:* ${paymentMethod === 'razorpay' ? 'Razorpay Payment Link / UPI' : 'Direct Studio WhatsApp / UPI Transfer'}\n\n`;
    msg += `Please send the studio payment verification details so we can initiate hand-tufting.`;

    window.open(generateWhatsAppLink(msg), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#292720]/75 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="min-h-screen px-4 flex items-center justify-center py-8">
        <div 
          className="inline-block w-full max-w-2xl bg-[#F7F4EE] rounded-3xl overflow-hidden shadow-elevated border border-[#B6A18A]/30 relative my-auto text-left p-6 sm:p-10"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-[#EAE4D8] text-[#786653] hover:text-[#292720]"
          >
            <X className="w-5 h-5" />
          </button>

          {orderSubmitted ? (
            <div className="text-center py-4 space-y-5 animate-fadeIn">
              <div className="w-16 h-16 bg-[#292720] text-[#EAE4D8] rounded-full flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8 text-[#C49746]" />
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#786653] font-semibold">
                  Order Successfully Registered
                </span>
                <h3 className="font-serif text-3xl font-semibold text-[#292720]">
                  Thank You, {fullName}!
                </h3>
                <p className="text-xs text-[#786653] mt-1 font-mono">
                  Order Reference: #{orderId}
                </p>
              </div>

              <div className="bg-[#EAE4D8]/60 p-5 rounded-2xl text-left border border-[#B6A18A]/30 text-xs space-y-2 text-[#786653]">
                <div className="flex justify-between font-semibold text-[#292720]">
                  <span>Total Amount Due:</span>
                  <span className="font-serif text-base">{formatINR(total)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping Address:</span>
                  <span className="text-right text-[#292720]">{city}, {state} ({pincode})</span>
                </div>
                <div className="flex justify-between">
                  <span>Items Count:</span>
                  <span className="text-[#292720]">{items.reduce((a, b) => a + b.quantity, 0)} pieces</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-left text-xs text-amber-900 flex items-start gap-2.5">
                <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Awaiting Payment Verification</p>
                  <p className="text-[11px] text-amber-800 mt-0.5">
                    As per studio policy, we do not simulate automatic payments. 
                    Please click below to connect with TUFT HOUSE on WhatsApp to receive the official Razorpay payment link or UPI QR code. 
                    Once verified, our artisans will begin tufting your pieces!
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <button
                  onClick={handleConfirmViaWhatsApp}
                  className="w-full py-4 px-6 bg-[#292720] text-[#EAE4D8] hover:bg-[#786653] rounded-full text-xs uppercase tracking-widest font-semibold transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Send Order & Get Payment Link on WhatsApp</span>
                </button>

                <button
                  onClick={() => {
                    onOrderComplete();
                    onClose();
                  }}
                  className="text-xs text-[#786653] hover:text-[#292720] underline"
                >
                  Return to Studio
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handlePlaceOrder} className="space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#786653] font-semibold block mb-1">
                  Secure Studio Checkout
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#292720]">
                  Shipping & Payment Details
                </h3>
              </div>

              {/* Contact Information */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#292720]">
                  1. Contact Information
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] text-[#786653] block mb-1">Full Name *</label>
                    <input
                      required
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Radhika Sharma"
                      className="w-full px-3 py-2 bg-white rounded-xl border border-[#B6A18A]/30 text-xs text-[#292720]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-[#786653] block mb-1">WhatsApp Mobile *</label>
                    <input
                      required
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 70753 82343"
                      className="w-full px-3 py-2 bg-white rounded-xl border border-[#B6A18A]/30 text-xs text-[#292720]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] text-[#786653] block mb-1">Email Address *</label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. radhika@example.com"
                    className="w-full px-3 py-2 bg-white rounded-xl border border-[#B6A18A]/30 text-xs text-[#292720]"
                  />
                </div>
              </div>

              {/* Delivery Address */}
              <div className="space-y-3 pt-4 border-t border-[#B6A18A]/20">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#292720]">
                  2. Delivery Address (India)
                </h4>
                <div>
                  <label className="text-[11px] text-[#786653] block mb-1">Street Address, Apartment, Landmark *</label>
                  <input
                    required
                    type="text"
                    value={addressLine}
                    onChange={(e) => setAddressLine(e.target.value)}
                    placeholder="House / Flat No., Apartment Name, Street"
                    className="w-full px-3 py-2 bg-white rounded-xl border border-[#B6A18A]/30 text-xs text-[#292720]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-[11px] text-[#786653] block mb-1">City *</label>
                    <input
                      required
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. Visakhapatnam"
                      className="w-full px-3 py-2 bg-white rounded-xl border border-[#B6A18A]/30 text-xs text-[#292720]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] text-[#786653] block mb-1">State *</label>
                    <select
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="w-full px-3 py-2 bg-white rounded-xl border border-[#B6A18A]/30 text-xs text-[#292720]"
                    >
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Delhi NCR">Delhi NCR</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Other State">Other State</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] text-[#786653] block mb-1">PIN Code *</label>
                    <input
                      required
                      type="text"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      placeholder="e.g. 530002"
                      className="w-full px-3 py-2 bg-white rounded-xl border border-[#B6A18A]/30 text-xs text-[#292720]"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method Selection */}
              <div className="space-y-3 pt-4 border-t border-[#B6A18A]/20">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#292720]">
                  3. Payment Method
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3 ${
                    paymentMethod === 'whatsapp' 
                      ? 'bg-[#EAE4D8] border-[#292720]' 
                      : 'bg-white border-[#B6A18A]/30'
                  }`}>
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'whatsapp'}
                      onChange={() => setPaymentMethod('whatsapp')}
                      className="mt-1"
                    />
                    <div>
                      <div className="font-semibold text-xs text-[#292720] flex items-center gap-1.5">
                        <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                        <span>Direct WhatsApp / UPI</span>
                      </div>
                      <p className="text-[11px] text-[#786653] mt-0.5">
                        Receive studio QR / UPI ID on WhatsApp for instant confirmation.
                      </p>
                    </div>
                  </label>

                  <label className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3 ${
                    paymentMethod === 'razorpay' 
                      ? 'bg-[#EAE4D8] border-[#292720]' 
                      : 'bg-white border-[#B6A18A]/30'
                  }`}>
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'razorpay'}
                      onChange={() => setPaymentMethod('razorpay')}
                      className="mt-1"
                    />
                    <div>
                      <div className="font-semibold text-xs text-[#292720] flex items-center gap-1.5">
                        <CreditCard className="w-3.5 h-3.5 text-[#292720]" />
                        <span>Razorpay Payment Gateway</span>
                      </div>
                      <p className="text-[11px] text-[#786653] mt-0.5">
                        Netbanking, Cards & UPI via official studio link.
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Total & Submit */}
              <div className="pt-4 border-t border-[#B6A18A]/20 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#786653] block">
                    Total Amount
                  </span>
                  <span className="font-serif text-2xl font-bold text-[#292720]">
                    {formatINR(total)}
                  </span>
                </div>

                <button
                  type="submit"
                  className="py-3.5 px-8 bg-[#292720] text-[#EAE4D8] hover:bg-[#786653] rounded-full text-xs uppercase tracking-widest font-semibold transition-all shadow-md flex items-center gap-2"
                >
                  <Lock className="w-3.5 h-3.5 text-[#C49746]" />
                  <span>Place Studio Order</span>
                </button>
              </div>

            </form>
          )}

        </div>
      </div>
    </div>
  );
};
