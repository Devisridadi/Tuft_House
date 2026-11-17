import React from 'react';
import { X, ShieldCheck, Truck, FileText } from 'lucide-react';

interface PolicyModalProps {
  type: 'privacy' | 'terms' | 'shipping' | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const content = {
    privacy: {
      title: 'Privacy Policy',
      icon: <ShieldCheck className="w-5 h-5 text-[#C49746]" />,
      body: `TUFT HOUSE respects and protects the personal information you share with us.
      
1. Information Collected: We collect your name, email, phone number, delivery address, and any custom design artwork or photographs you provide for custom tufting commissions.
2. How We Use It: Your details are used strictly to communicate custom quotations, provide production updates via WhatsApp, coordinate courier shipping, and deliver your orders.
3. Data Security: We never sell, rent, or disclose your personal details or proprietary logo designs to third parties. Uploaded sketches and reference artworks remain your intellectual property.
4. Contact: For privacy questions, please email prasanthgraphicdesigner@gmail.com or WhatsApp +91 70753 82343.`
    },
    terms: {
      title: 'Terms & Conditions',
      icon: <FileText className="w-5 h-5 text-[#C49746]" />,
      body: `Welcome to TUFT HOUSE. By accessing our studio website or placing an order, you agree to these terms:

1. Handcrafted Nature: Each tufted creation is made by hand in Andhra Pradesh, India. Subtle variations in yarn dye lots, fiber contours, and hand-sheared bevels are authentic hallmarks of artisanal craft, not defects.
2. Custom Commission Approvals: Once you approve a custom quotation and 2D/3D tufting yarn schematic, production commences. Custom made-to-order pieces cannot be cancelled or refunded once tufting begins.
3. Intellectual Property: For corporate logos and copyrighted characters, clients affirm they possess necessary usage rights or permissions for private commissioning.
4. Quotations: Quotes provided are valid for 30 calendar days from issue date.`
    },
    shipping: {
      title: 'Shipping & Returns Policy',
      icon: <Truck className="w-5 h-5 text-[#C49746]" />,
      body: `Studio Logistics & Safe Delivery Guidelines:

1. Free Shipping Across India: We offer complimentary insured ground shipping on all orders over ₹2,999 within India. Standard orders under ₹2,999 incur a flat ₹250 courier fee.
2. Lead Times:
   - Ready-to-Ship items dispatch within 24–48 hours.
   - Made-to-Order & Custom creations require 8–14 business days for tufting, latex curing, and hand-sculpting prior to dispatch.
3. Transit Times: 3–6 business days across Indian metros via Delhivery, Blue Dart, or DTDC with live SMS tracking.
4. Packaging: Every rug is carefully rolled around rigid archival cores, wrapped in moisture-barrier film, and encased in heavy-duty studio canvas bags.
5. Returns: Due to the personalized and bespoke nature of handmade tufted products, returns are accepted solely in the unlikely event of transit damage or manufacturing discrepancy reported within 48 hours of delivery.`
    }
  };

  const current = content[type];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-[#292720]/75 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="min-h-screen px-4 flex items-center justify-center py-8">
        <div 
          className="inline-block w-full max-w-2xl bg-[#F7F4EE] rounded-3xl overflow-hidden shadow-elevated border border-[#B6A18A]/30 relative my-auto text-left p-6 sm:p-8"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between pb-4 border-b border-[#B6A18A]/25">
            <div className="flex items-center gap-2">
              {current.icon}
              <h3 className="font-serif text-2xl font-semibold text-[#292720]">
                {current.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-[#EAE4D8] text-[#786653] hover:text-[#292720]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="pt-6 text-xs sm:text-sm text-[#786653] leading-relaxed whitespace-pre-line max-h-96 overflow-y-auto font-light">
            {current.body}
          </div>

          <div className="pt-6 mt-6 border-t border-[#B6A18A]/20 text-right">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-[#292720] text-[#EAE4D8] rounded-full text-xs font-semibold uppercase tracking-wider"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
