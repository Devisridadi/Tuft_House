import React, { useState } from 'react';
import { CustomOrderRequest } from '../types';
import { formatINR, generateWhatsAppLink } from '../utils/helpers';
import { 
  X, 
  MessageCircle, 
  Clock, 
  CheckCircle2, 
  Search, 
  Eye, 
  SlidersHorizontal,
  Mail,
  Phone,
  Ruler,
  Calendar,
  Layers,
  Sparkles,
  RefreshCw
} from 'lucide-react';

interface StudioAdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  quotes: CustomOrderRequest[];
  onUpdateQuoteStatus: (id: string, newStatus: CustomOrderRequest['status'], notes?: string) => void;
}

export const StudioAdminModal: React.FC<StudioAdminModalProps> = ({
  isOpen,
  onClose,
  quotes,
  onUpdateQuoteStatus
}) => {
  if (!isOpen) return null;

  const [search, setSearch] = useState('');
  const [selectedQuote, setSelectedQuote] = useState<CustomOrderRequest | null>(quotes[0] || null);
  const [quotePriceInput, setQuotePriceInput] = useState('');
  const [leadDaysInput, setLeadDaysInput] = useState('10');
  const [artisanNotesInput, setArtisanNotesInput] = useState('');

  const filteredQuotes = quotes.filter(q => 
    q.customerName.toLowerCase().includes(search.toLowerCase()) ||
    q.id.toLowerCase().includes(search.toLowerCase()) ||
    q.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleSendQuotationWhatsApp = (quote: CustomOrderRequest) => {
    const quotePrice = quotePriceInput ? `₹${quotePriceInput}` : (quote.estimatedPriceRange || '₹12,500');
    const msg = `Hello ${quote.customerName}! 🌿\nThis is TUFT HOUSE Studio (Anakapalli, Andhra Pradesh).\n\nWe have reviewed your custom request *#${quote.id}* for the *${quote.category}* (${quote.dimensions}).\n\n*Our Bespoke Quotation:* ${quotePrice}\n*Estimated Handcrafting Lead Time:* ${leadDaysInput} business days\n*Yarn Specification:* High-density New Zealand wool & acrylic blend with hand-carved ${quote.pileStyle} finish.\n\n${artisanNotesInput ? `*Artisan Note:* ${artisanNotesInput}\n\n` : ''}Would you like us to generate the primary canvas blueprint and finalize your order?`;
    
    // Clean phone number
    const cleanPhone = quote.phone.replace(/[^0-9]/g, '');
    const url = `https://wa.me/${cleanPhone.startsWith('91') ? cleanPhone : '91' + cleanPhone}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');

    onUpdateQuoteStatus(quote.id, 'quoted', artisanNotesInput);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-[#292720]/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="min-h-screen px-4 flex items-center justify-center py-6">
        <div 
          className="inline-block w-full max-w-5xl bg-[#F7F4EE] rounded-3xl overflow-hidden shadow-elevated border border-[#B6A18A]/30 relative my-auto text-left"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-6 bg-[#292720] text-[#EAE4D8] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#EAE4D8] text-[#292720] flex items-center justify-center font-serif text-lg font-bold">
                TH
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold">
                  TUFT HOUSE Studio Owner Portal
                </h3>
                <p className="text-[11px] text-[#B6A18A] uppercase tracking-wider">
                  Review Inquiries, Uploaded Artwork & Dispatch Bespoke Quotations
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 max-h-[80vh] overflow-y-auto">
            
            {/* Left Column: Quotes List */}
            <div className="md:col-span-5 border-r border-[#B6A18A]/25 p-4 sm:p-5 flex flex-col justify-between bg-[#EAE4D8]/30">
              <div>
                {/* Search */}
                <div className="relative mb-4">
                  <Search className="w-4 h-4 text-[#A9A28E] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by client or Quote ID..."
                    className="w-full pl-9 pr-3 py-2 bg-white rounded-xl border border-[#B6A18A]/30 text-xs text-[#292720]"
                  />
                </div>

                <div className="text-[11px] uppercase tracking-widest text-[#786653] font-semibold mb-3 flex items-center justify-between">
                  <span>Custom Inquiries ({filteredQuotes.length})</span>
                  <span>Status</span>
                </div>

                {/* List items */}
                <div className="space-y-2.5 overflow-y-auto max-h-[500px]">
                  {filteredQuotes.length === 0 ? (
                    <div className="text-center py-12 text-[#786653] text-xs">
                      No custom quote requests yet.
                    </div>
                  ) : (
                    filteredQuotes.map((q) => (
                      <div
                        key={q.id}
                        onClick={() => setSelectedQuote(q)}
                        className={`p-3.5 rounded-2xl border text-xs cursor-pointer transition-all ${
                          selectedQuote?.id === q.id
                            ? 'bg-[#292720] text-[#EAE4D8] border-[#292720] shadow-sm'
                            : 'bg-white text-[#786653] border-[#B6A18A]/30 hover:border-[#786653]'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-sm line-clamp-1">{q.customerName}</span>
                          <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${
                            q.status === 'new'
                              ? 'bg-amber-100 text-amber-800'
                              : q.status === 'quoted'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-emerald-100 text-emerald-800'
                          }`}>
                            {q.status}
                          </span>
                        </div>

                        <div className="flex items-center justify-between text-[11px] opacity-80">
                          <span>{q.category}</span>
                          <span>{q.dimensions}</span>
                        </div>

                        <div className="text-[10px] font-mono opacity-60 mt-1">
                          #{q.id} • {new Date(q.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Selected Quote Details & Reply */}
            <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              {selectedQuote ? (
                <div className="space-y-6">
                  {/* Header info */}
                  <div className="flex items-start justify-between border-b border-[#B6A18A]/25 pb-4">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#786653] font-semibold">
                        Inquiry Details
                      </span>
                      <h4 className="font-serif text-2xl font-bold text-[#292720]">
                        {selectedQuote.customerName}
                      </h4>
                      <div className="flex flex-wrap gap-3 text-xs text-[#786653] mt-1">
                        <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5" /> {selectedQuote.phone}</span>
                        <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5" /> {selectedQuote.email}</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-mono font-bold text-[#292720] block">
                        #{selectedQuote.id}
                      </span>
                      <span className="text-[11px] text-[#786653]">
                        {selectedQuote.budgetRange || 'Flexible Budget'}
                      </span>
                    </div>
                  </div>

                  {/* Specifications Grid */}
                  <div className="grid grid-cols-2 gap-3 text-xs bg-[#EAE4D8]/50 p-4 rounded-2xl border border-[#B6A18A]/25">
                    <div>
                      <span className="text-[#A9A28E] block text-[10px] uppercase">Category</span>
                      <span className="font-semibold text-[#292720]">{selectedQuote.category}</span>
                    </div>
                    <div>
                      <span className="text-[#A9A28E] block text-[10px] uppercase">Dimensions</span>
                      <span className="font-semibold text-[#292720]">{selectedQuote.dimensions}</span>
                    </div>
                    <div>
                      <span className="text-[#A9A28E] block text-[10px] uppercase">Pile Technique</span>
                      <span className="font-semibold text-[#292720]">{selectedQuote.pileStyle}</span>
                    </div>
                    <div>
                      <span className="text-[#A9A28E] block text-[10px] uppercase">Target Date</span>
                      <span className="font-semibold text-[#292720]">{selectedQuote.requiredDeliveryDate || 'Flexible'}</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-[#A9A28E] block text-[10px] uppercase">Preferred Yarn Palette</span>
                      <span className="font-semibold text-[#292720]">{selectedQuote.preferredColors.join(', ')}</span>
                    </div>
                  </div>

                  {/* Custom Description & Text to Tuft */}
                  <div className="text-xs space-y-2">
                    <div>
                      <span className="font-semibold text-[#292720] uppercase text-[10px] block">
                        Design Vision / Client Notes:
                      </span>
                      <p className="p-3 bg-white rounded-xl border border-[#B6A18A]/30 text-[#786653] mt-1 leading-relaxed">
                        {selectedQuote.description}
                      </p>
                    </div>

                    {selectedQuote.customText && (
                      <div>
                        <span className="font-semibold text-[#292720] uppercase text-[10px] block">
                          Text / Names to Tuft:
                        </span>
                        <p className="p-2.5 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 font-medium mt-1">
                          "{selectedQuote.customText}"
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Uploaded Reference Artwork */}
                  {selectedQuote.referenceImage && (
                    <div>
                      <span className="font-semibold text-[#292720] uppercase text-[10px] block mb-1.5">
                        Client Uploaded Reference Artwork:
                      </span>
                      <div className="w-32 h-32 rounded-xl overflow-hidden border border-[#B6A18A]/40 bg-white">
                        <img 
                          src={selectedQuote.referenceImage} 
                          alt="Uploaded client reference" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  )}

                  {/* Artisan Quote Dispatcher */}
                  <div className="p-4 rounded-2xl bg-white border border-[#B6A18A]/30 space-y-3">
                    <span className="text-xs font-semibold text-[#292720] uppercase tracking-wider block">
                      Respond with Bespoke Quotation
                    </span>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] text-[#786653] block mb-1">Final Quoted Price (₹)</label>
                        <input
                          type="number"
                          placeholder="e.g. 14500"
                          value={quotePriceInput}
                          onChange={(e) => setQuotePriceInput(e.target.value)}
                          className="w-full px-3 py-1.5 rounded-lg border border-[#B6A18A]/40 text-xs font-mono"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] text-[#786653] block mb-1">Lead Time (Days)</label>
                        <input
                          type="number"
                          value={leadDaysInput}
                          onChange={(e) => setLeadDaysInput(e.target.value)}
                          className="w-full px-3 py-1.5 rounded-lg border border-[#B6A18A]/40 text-xs font-mono"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] text-[#786653] block mb-1">Artisan Notes / Specs</label>
                      <input
                        type="text"
                        placeholder="e.g. Includes custom Haldi stain protection and non-slip backing"
                        value={artisanNotesInput}
                        onChange={(e) => setArtisanNotesInput(e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg border border-[#B6A18A]/40 text-xs"
                      />
                    </div>

                    <button
                      onClick={() => handleSendQuotationWhatsApp(selectedQuote)}
                      className="w-full py-3 bg-[#292720] text-[#EAE4D8] hover:bg-[#786653] rounded-full text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4 text-[#25D366]" />
                      <span>Send Personalized Quotation via WhatsApp</span>
                    </button>
                  </div>

                </div>
              ) : (
                <div className="text-center py-20 text-[#786653]">
                  Select an inquiry from the left to inspect specifications and dispatch a quote.
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
