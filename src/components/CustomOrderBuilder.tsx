import React, { useState } from 'react';
import { CustomOrderRequest } from '../types';
import { 
  formatINR, 
  generateWhatsAppLink, 
  createCustomQuoteWhatsAppMessage, 
  triggerConfetti 
} from '../utils/helpers';
import { 
  Upload, 
  Sparkles, 
  Check, 
  Calendar, 
  Ruler, 
  Palette, 
  Layers, 
  MessageCircle, 
  Clock, 
  ShieldAlert,
  HelpCircle,
  FileText,
  X
} from 'lucide-react';

interface CustomOrderBuilderProps {
  initialCategory?: string;
  onSaveQuoteToStorage: (quote: CustomOrderRequest) => void;
}

export const CustomOrderBuilder: React.FC<CustomOrderBuilderProps> = ({
  initialCategory = 'wedding',
  onSaveQuoteToStorage
}) => {
  // Form State
  const [customerName, setCustomerName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState(initialCategory);
  
  // Dimensions
  const [dimensionPreset, setDimensionPreset] = useState('3x4');
  const [customWidth, setCustomWidth] = useState('3');
  const [customHeight, setCustomHeight] = useState('4');
  const [dimensionUnit, setDimensionUnit] = useState<'feet' | 'inches' | 'cm'>('feet');
  
  // Customization Specs
  const [pileStyle, setPileStyle] = useState('3D Sculpted Relief');
  const [selectedColors, setSelectedColors] = useState<string[]>(['Warm Ivory', 'Soft Taupe']);
  const [customColorInput, setCustomColorInput] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [deliveryDate, setDeliveryDate] = useState('');
  const [budgetRange, setBudgetRange] = useState('₹8,000 – ₹15,000');
  const [description, setDescription] = useState('');
  const [customText, setCustomText] = useState('');
  
  // Reference Image Upload
  const [referenceImage, setReferenceImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>('');

  // Submission State
  const [submittedQuote, setSubmittedQuote] = useState<CustomOrderRequest | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Available Categories
  const categories = [
    { id: 'wedding', label: 'Wedding & Celebrations', icon: '💍', desc: 'Entrance welcome boards, couple portraits, Haldi mats, ring boxes' },
    { id: 'promotional', label: 'Brand & Promotional Art', icon: '⚡', desc: 'Company logos, studio rugs, event mats' },
    { id: 'home-decor', label: 'Home Décor & Accents', icon: '🌿', desc: 'Living room rugs, wall tapestries, runners' },
    { id: 'commercial', label: 'Restaurant & Commercial', icon: '☕', desc: 'Cafe welcome mats, reception logos' },
    { id: 'gifts', label: 'Personalised Gifts & Keychains', icon: '🎁', desc: 'Monogram keychains, pet mug rugs' },
    { id: 'custom', label: 'Freeform Bespoke Creation', icon: '✨', desc: 'Organic shapes, pop art, client sketches' }
  ];

  // Common Color Swatches
  const availableColors = [
    { name: 'Warm Ivory', hex: '#EAE4D8' },
    { name: 'Cream', hex: '#F7F4EE' },
    { name: 'Soft Taupe', hex: '#B6A18A' },
    { name: 'Mocha Brown', hex: '#786653' },
    { name: 'Charcoal Black', hex: '#292720' },
    { name: 'Muted Sage', hex: '#A9A28E' },
    { name: 'Marigold Yellow', hex: '#E8A72B' },
    { name: 'Terracotta', hex: '#A65D43' },
    { name: 'Dusty Rose', hex: '#D29B9B' },
    { name: 'Olive Green', hex: '#636B46' },
  ];

  // Common Dimension Presets
  const dimensionPresets = [
    { id: '2x3', label: '2 × 3 ft (Small Accent)', area: 6, approxPrice: '₹4,500 – ₹6,500' },
    { id: '3x4', label: '3 × 4 ft (Medium Statement)', area: 12, approxPrice: '₹8,500 – ₹12,000' },
    { id: '4x4', label: '4 × 4 ft (Round / Square Mandap)', area: 16, approxPrice: '₹11,000 – ₹16,000' },
    { id: '4x6', label: '4 × 6 ft (Full Living Room / Entry)', area: 24, approxPrice: '₹16,000 – ₹24,000' },
    { id: 'custom', label: 'Custom Dimensions (Enter W × H)', area: 0, approxPrice: 'Calculated on specs' },
  ];

  const handleColorToggle = (colorName: string) => {
    if (selectedColors.includes(colorName)) {
      setSelectedColors(selectedColors.filter(c => c !== colorName));
    } else {
      setSelectedColors([...selectedColors, colorName]);
    }
  };

  const handleAddCustomColor = () => {
    if (customColorInput.trim() && !selectedColors.includes(customColorInput.trim())) {
      setSelectedColors([...selectedColors, customColorInput.trim()]);
      setCustomColorInput('');
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setReferenceImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const quoteId = `TH-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const finalDimensions = dimensionPreset === 'custom'
      ? `${customWidth} × ${customHeight} ${dimensionUnit}`
      : dimensionPresets.find(p => p.id === dimensionPreset)?.label.split('(')[0].trim() || 'Custom';

    const newQuote: CustomOrderRequest = {
      id: quoteId,
      createdAt: new Date().toISOString(),
      customerName,
      email,
      phone,
      category: categories.find(c => c.id === category)?.label || category,
      dimensions: finalDimensions,
      customWidth,
      customHeight,
      dimensionUnit,
      preferredColors: selectedColors,
      pileStyle,
      quantity,
      requiredDeliveryDate: deliveryDate,
      budgetRange,
      description,
      customText,
      referenceImage: referenceImage || undefined,
      status: 'new',
      estimatedPriceRange: budgetRange
    };

    setTimeout(() => {
      onSaveQuoteToStorage(newQuote);
      setSubmittedQuote(newQuote);
      setIsSubmitting(false);
      triggerConfetti();
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }, 600);
  };

  return (
    <section id="custom-creations" className="py-20 sm:py-28 bg-[#F7F4EE]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#786653] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C49746]" />
            <span>Dedicated Custom Studio</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-light text-[#292720] tracking-tight mb-4">
            Create Your Own Custom Tufted Piece
          </h1>
          <p className="text-sm sm:text-base text-[#786653] leading-relaxed">
            From ceremonial Haldi mats and couple names to office logo rugs and organic 3D wall art. 
            Share your requirements below and receive a handcrafted quotation from our studio artisans.
          </p>
        </div>

        {/* Confirmation Screen After Submission */}
        {submittedQuote ? (
          <div className="bg-[#EAE4D8]/80 border border-[#B6A18A]/40 rounded-4xl p-8 sm:p-12 shadow-elevated text-center animate-fadeIn">
            <div className="w-16 h-16 bg-[#292720] text-[#EAE4D8] rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <Check className="w-8 h-8 text-[#C49746]" />
            </div>

            <span className="text-[11px] uppercase tracking-[0.25em] text-[#786653] font-semibold block mb-1">
              Custom Quote Request Received
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#292720] mb-3">
              Thank You, {submittedQuote.customerName}!
            </h2>
            <p className="text-xs sm:text-sm text-[#786653] max-w-lg mx-auto mb-6">
              Your inquiry has been assigned Reference ID <strong>#{submittedQuote.id}</strong>. 
              Our lead tufting artisan in Andhra Pradesh is reviewing your specifications, colors, and reference artwork.
            </p>

            {/* Quote Summary Box */}
            <div className="bg-white/80 rounded-2xl p-6 max-w-xl mx-auto text-left border border-[#B6A18A]/30 text-xs text-[#786653] space-y-2 mb-8">
              <div className="flex justify-between border-b border-[#B6A18A]/20 pb-2">
                <span className="font-semibold text-[#292720]">Reference ID:</span>
                <span className="font-mono text-[#292720] font-bold">#{submittedQuote.id}</span>
              </div>
              <div className="flex justify-between">
                <span>Category:</span>
                <span className="text-[#292720] font-medium">{submittedQuote.category}</span>
              </div>
              <div className="flex justify-between">
                <span>Dimensions:</span>
                <span className="text-[#292720] font-medium">{submittedQuote.dimensions}</span>
              </div>
              <div className="flex justify-between">
                <span>Pile Style:</span>
                <span className="text-[#292720] font-medium">{submittedQuote.pileStyle}</span>
              </div>
              <div className="flex justify-between">
                <span>Colors:</span>
                <span className="text-[#292720] font-medium">{submittedQuote.preferredColors.join(', ')}</span>
              </div>
              {submittedQuote.customText && (
                <div className="flex justify-between">
                  <span>Custom Names / Text:</span>
                  <span className="text-[#292720] font-medium italic">"{submittedQuote.customText}"</span>
                </div>
              )}
              {submittedQuote.requiredDeliveryDate && (
                <div className="flex justify-between">
                  <span>Target Date:</span>
                  <span className="text-[#292720] font-medium">{submittedQuote.requiredDeliveryDate}</span>
                </div>
              )}
            </div>

            {/* Prominent WhatsApp Option */}
            <div className="max-w-md mx-auto space-y-3">
              <button
                onClick={() => {
                  const url = generateWhatsAppLink(createCustomQuoteWhatsAppMessage(submittedQuote));
                  window.open(url, '_blank');
                }}
                className="w-full py-4 px-6 bg-[#292720] text-[#EAE4D8] hover:bg-[#786653] rounded-full text-xs uppercase tracking-widest font-semibold transition-all shadow-md flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                <span>Send Request Details via WhatsApp</span>
              </button>

              <button
                onClick={() => setSubmittedQuote(null)}
                className="text-xs text-[#786653] hover:text-[#292720] underline block mx-auto pt-2"
              >
                Submit another custom inquiry
              </button>
            </div>

            <p className="text-[11px] text-[#A9A28E] mt-6 italic">
              * Note: TUFT HOUSE responds to custom inquiries within 4–12 business hours. 
              We do not automatically promise delivery dates until design complexity and materials are finalized.
            </p>
          </div>
        ) : (
          /* Custom Order Form */
          <form 
            onSubmit={handleSubmit}
            className="bg-[#F7F4EE] border border-[#B6A18A]/30 rounded-4xl p-6 sm:p-10 shadow-float space-y-10"
          >
            {/* Step 1: Category Selection */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-[#292720] text-[#EAE4D8] text-xs flex items-center justify-center font-semibold">1</span>
                <h3 className="text-sm uppercase tracking-wider font-semibold text-[#292720]">
                  Select Product Category *
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {categories.map((cat) => (
                  <button
                    type="button"
                    key={cat.id}
                    onClick={() => setCategory(cat.id)}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      category === cat.id
                        ? 'bg-[#292720] text-[#EAE4D8] border-[#292720] shadow-sm'
                        : 'bg-[#EAE4D8]/40 text-[#786653] border-[#B6A18A]/30 hover:border-[#786653]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xl">{cat.icon}</span>
                      {category === cat.id && <Check className="w-4 h-4 text-[#C49746]" />}
                    </div>
                    <div className="font-semibold text-xs uppercase tracking-wider">
                      {cat.label}
                    </div>
                    <p className={`text-[11px] mt-1 ${category === cat.id ? 'text-[#EAE4D8]/80' : 'text-[#786653]'}`}>
                      {cat.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Dimensions & Size */}
            <div className="pt-6 border-t border-[#B6A18A]/20">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#292720] text-[#EAE4D8] text-xs flex items-center justify-center font-semibold">2</span>
                  <h3 className="text-sm uppercase tracking-wider font-semibold text-[#292720]">
                    Dimensions & Size Footprint *
                  </h3>
                </div>
                <span className="text-xs text-[#786653] flex items-center gap-1">
                  <Ruler className="w-3.5 h-3.5" /> Scale Guide
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
                {dimensionPresets.map((preset) => (
                  <button
                    type="button"
                    key={preset.id}
                    onClick={() => setDimensionPreset(preset.id)}
                    className={`p-3.5 rounded-2xl border text-left transition-all ${
                      dimensionPreset === preset.id
                        ? 'bg-[#EAE4D8] border-[#292720] text-[#292720] font-semibold'
                        : 'bg-white border-[#B6A18A]/30 text-[#786653] hover:border-[#786653]'
                    }`}
                  >
                    <div className="text-xs font-semibold">{preset.label}</div>
                    <div className="text-[10px] text-[#A9A28E] mt-0.5">{preset.approxPrice}</div>
                  </button>
                ))}
              </div>

              {/* Custom W x H Inputs */}
              {dimensionPreset === 'custom' && (
                <div className="p-4 rounded-2xl bg-[#EAE4D8]/50 border border-[#B6A18A]/30 grid grid-cols-1 sm:grid-cols-3 gap-3 animate-fadeIn">
                  <div>
                    <label className="text-[11px] font-semibold text-[#292720] block mb-1">
                      Width
                    </label>
                    <input
                      type="number"
                      step="0.5"
                      value={customWidth}
                      onChange={(e) => setCustomWidth(e.target.value)}
                      placeholder="e.g. 3.5"
                      className="w-full px-3 py-2 bg-white rounded-xl border border-[#B6A18A]/40 text-xs text-[#292720]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-[#292720] block mb-1">
                      Height / Length
                    </label>
                    <input
                      type="number"
                      step="0.5"
                      value={customHeight}
                      onChange={(e) => setCustomHeight(e.target.value)}
                      placeholder="e.g. 5"
                      className="w-full px-3 py-2 bg-white rounded-xl border border-[#B6A18A]/40 text-xs text-[#292720]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-[#292720] block mb-1">
                      Unit
                    </label>
                    <select
                      value={dimensionUnit}
                      onChange={(e: any) => setDimensionUnit(e.target.value)}
                      className="w-full px-3 py-2 bg-white rounded-xl border border-[#B6A18A]/40 text-xs text-[#292720]"
                    >
                      <option value="feet">Feet (ft)</option>
                      <option value="inches">Inches (in)</option>
                      <option value="cm">Centimeters (cm)</option>
                    </select>
                  </div>
                </div>
              )}
            </div>

            {/* Step 3: Color Palette & Pile Finish */}
            <div className="pt-6 border-t border-[#B6A18A]/20">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-[#292720] text-[#EAE4D8] text-xs flex items-center justify-center font-semibold">3</span>
                <h3 className="text-sm uppercase tracking-wider font-semibold text-[#292720]">
                  Preferred Colors & Tactile Pile Style *
                </h3>
              </div>

              {/* Swatches */}
              <div className="mb-4">
                <label className="text-xs text-[#786653] font-medium block mb-2">
                  Select key yarn tones (Click to select multiple):
                </label>
                <div className="flex flex-wrap gap-2">
                  {availableColors.map((c) => {
                    const isSelected = selectedColors.includes(c.name);
                    return (
                      <button
                        type="button"
                        key={c.name}
                        onClick={() => handleColorToggle(c.name)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs transition-all border ${
                          isSelected
                            ? 'bg-[#292720] text-[#EAE4D8] border-[#292720] shadow-sm'
                            : 'bg-white text-[#786653] border-[#B6A18A]/30 hover:border-[#786653]'
                        }`}
                      >
                        <span 
                          className="w-3.5 h-3.5 rounded-full border border-black/10 shrink-0" 
                          style={{ backgroundColor: c.hex }}
                        />
                        <span>{c.name}</span>
                        {isSelected && <Check className="w-3 h-3 text-[#C49746]" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Custom Color Input */}
              <div className="flex items-center gap-2 max-w-sm mb-6">
                <input
                  type="text"
                  value={customColorInput}
                  onChange={(e) => setCustomColorInput(e.target.value)}
                  placeholder="Or enter custom shade (e.g. Hex, Pantone, Lavender)"
                  className="flex-1 px-3.5 py-2 bg-white rounded-xl border border-[#B6A18A]/30 text-xs text-[#292720] placeholder-[#A9A28E] focus:outline-none focus:border-[#292720]"
                />
                <button
                  type="button"
                  onClick={handleAddCustomColor}
                  className="px-3.5 py-2 bg-[#EAE4D8] text-[#292720] rounded-xl text-xs font-semibold hover:bg-[#B6A18A]/50 transition-colors"
                >
                  Add
                </button>
              </div>

              {/* Pile Style Selector */}
              <div>
                <label className="text-xs text-[#786653] font-medium block mb-2">
                  Texture & Pile Carving Technique:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { id: '3D Sculpted Relief', desc: 'Hand-carved multi-depth bevels' },
                    { id: 'Plush Cut Pile', desc: 'Ultra-soft uniform velvet feel' },
                    { id: 'Tight Loop Pile', desc: 'Maximum durability for high traffic' },
                    { id: 'Cut & Loop Hybrid', desc: 'Dramatic textural contrast' },
                  ].map((style) => (
                    <button
                      type="button"
                      key={style.id}
                      onClick={() => setPileStyle(style.id)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        pileStyle === style.id
                          ? 'bg-[#292720] text-[#EAE4D8] border-[#292720]'
                          : 'bg-white text-[#786653] border-[#B6A18A]/30 hover:border-[#786653]'
                      }`}
                    >
                      <div className="text-xs font-semibold">{style.id}</div>
                      <div className={`text-[10px] mt-0.5 ${pileStyle === style.id ? 'text-[#EAE4D8]/80' : 'text-[#A9A28E]'}`}>
                        {style.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 4: Design Description, Text & Reference Image */}
            <div className="pt-6 border-t border-[#B6A18A]/20">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-[#292720] text-[#EAE4D8] text-xs flex items-center justify-center font-semibold">4</span>
                <h3 className="text-sm uppercase tracking-wider font-semibold text-[#292720]">
                  Design Description & Reference Artwork *
                </h3>
              </div>

              {/* Custom Names / Text to Tuft */}
              <div className="mb-4">
                <label className="text-xs font-medium text-[#786653] block mb-1">
                  Specific Names, Initials, Wedding Date, or Slogan to Tuft (if applicable):
                </label>
                <input
                  type="text"
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  placeholder="e.g. 'Ananya & Rohan • 24.11.2026' or 'GREAT BOSS' or 'Initials TH'"
                  className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-[#B6A18A]/30 text-xs text-[#292720] placeholder-[#A9A28E] focus:outline-none focus:border-[#292720]"
                />
              </div>

              {/* Design Description */}
              <div className="mb-6">
                <label className="text-xs font-medium text-[#786653] block mb-1">
                  Describe Your Vision, Theme, or Room Setting *:
                </label>
                <textarea
                  required
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Tell us about the mood, motifs (mandala, botanical, logo, geometric waves), where it will be placed, and any special design ideas you have in mind..."
                  className="w-full p-3.5 bg-white rounded-2xl border border-[#B6A18A]/30 text-xs text-[#292720] placeholder-[#A9A28E] focus:outline-none focus:border-[#292720] leading-relaxed"
                />
              </div>

              {/* Image Upload Area */}
              <div>
                <label className="text-xs font-medium text-[#786653] block mb-2">
                  Reference Image, Sketch, or Logo Vector Upload:
                </label>

                {referenceImage ? (
                  <div className="relative rounded-2xl overflow-hidden border border-[#B6A18A]/40 bg-[#EAE4D8]/50 p-4 flex items-center gap-4">
                    <img 
                      src={referenceImage} 
                      alt="Uploaded preview" 
                      className="w-20 h-20 object-cover rounded-xl border border-black/10"
                    />
                    <div className="flex-1 text-xs">
                      <p className="font-semibold text-[#292720] truncate">{fileName || 'Reference Image'}</p>
                      <p className="text-[#786653] text-[11px] mt-0.5">Image staged for studio review</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setReferenceImage(null);
                        setFileName('');
                      }}
                      className="p-2 text-[#786653] hover:text-[#292720] rounded-full hover:bg-white/50"
                      title="Remove image"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                ) : (
                  <label className="cursor-pointer border-2 border-dashed border-[#B6A18A]/40 hover:border-[#292720] rounded-2xl p-6 flex flex-col items-center justify-center text-center bg-white/50 transition-colors group">
                    <Upload className="w-8 h-8 text-[#A9A28E] group-hover:text-[#292720] mb-2 transition-colors" />
                    <span className="text-xs font-semibold text-[#292720]">
                      Click to upload sketch or reference image
                    </span>
                    <span className="text-[11px] text-[#786653] mt-1">
                      PNG, JPG, SVG, or WEBP up to 10MB
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
            </div>

            {/* Step 5: Quantity, Timeline, Budget & Contact Information */}
            <div className="pt-6 border-t border-[#B6A18A]/20">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-[#292720] text-[#EAE4D8] text-xs flex items-center justify-center font-semibold">5</span>
                <h3 className="text-sm uppercase tracking-wider font-semibold text-[#292720]">
                  Quantity, Timeline & Customer Details *
                </h3>
              </div>

              {/* Quantity, Target Date & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="text-xs font-medium text-[#786653] block mb-1">
                    Quantity Needed
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-[#B6A18A]/30 text-xs text-[#292720]"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-[#786653] block mb-1">
                    Required Delivery Date
                  </label>
                  <input
                    type="date"
                    value={deliveryDate}
                    onChange={(e) => setDeliveryDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-[#B6A18A]/30 text-xs text-[#292720]"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-[#786653] block mb-1">
                    Budget Range (Optional)
                  </label>
                  <select
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-[#B6A18A]/30 text-xs text-[#292720]"
                  >
                    <option value="Under ₹5,000">Under ₹5,000 (Small/Keychains)</option>
                    <option value="₹5,000 – ₹10,000">₹5,000 – ₹10,000</option>
                    <option value="₹10,000 – ₹20,000">₹10,000 – ₹20,000</option>
                    <option value="₹20,000 – ₹35,000">₹20,000 – ₹35,000</option>
                    <option value="₹35,000+">₹35,000+ (Architectural / Scale)</option>
                  </select>
                </div>
              </div>

              {/* Contact Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-medium text-[#786653] block mb-1">
                    Your Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Ananya Sharma"
                    className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-[#B6A18A]/30 text-xs text-[#292720] placeholder-[#A9A28E] focus:outline-none focus:border-[#292720]"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-[#786653] block mb-1">
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. ananya@example.com"
                    className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-[#B6A18A]/30 text-xs text-[#292720] placeholder-[#A9A28E] focus:outline-none focus:border-[#292720]"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-[#786653] block mb-1">
                    WhatsApp Phone Number *
                  </label>
                  <input
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 70758 76603"
                    className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-[#B6A18A]/30 text-xs text-[#292720] placeholder-[#A9A28E] focus:outline-none focus:border-[#292720]"
                  />
                </div>
              </div>
            </div>

            {/* Disclaimer & Transparency Note */}
            <div className="p-4 rounded-2xl bg-[#EAE4D8]/50 border border-[#B6A18A]/30 flex items-start gap-3 text-xs text-[#786653]">
              <Clock className="w-5 h-5 text-[#C49746] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#292720]">Personalised Artisan Quotation</p>
                <p className="mt-0.5 text-[11px] leading-relaxed">
                  Every custom tufted artwork requires tailored yarn estimation and sculpting hours. 
                  Our creative director will review your details and send you a formal breakdown via WhatsApp and email.
                  We never make automated false promises on turnaround or pricing.
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4 text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto min-w-[280px] py-4 px-8 bg-[#292720] text-[#EAE4D8] hover:bg-[#786653] text-xs uppercase tracking-[0.2em] font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? 'Processing Details...' : 'REQUEST A CUSTOM QUOTE'}
              </button>
            </div>

          </form>
        )}

      </div>
    </section>
  );
};
