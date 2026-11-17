import React, { useState } from 'react';
import { 
  MessageCircle, 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  Sparkles, 
  Check, 
  Clock,
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import { InstagramIcon } from './icons/InstagramIcon';
import { generateWhatsAppLink, triggerConfetti } from '../utils/helpers';

interface ContactSectionProps {
  onOpenCustomOrder: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenCustomOrder }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Custom Order Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    triggerConfetti();
  };

  const handleWhatsAppDirect = () => {
    const text = `Hello Alex! I'm reaching out from the TUFT HOUSE website. Have an idea for a custom tufted piece and would love to chat!`;
    window.open(generateWhatsAppLink(text), '_blank');
  };

  const faqs = [
    {
      q: 'How long does a custom tufted piece take to create?',
      a: 'Standard custom orders (e.g., 3x4 ft rugs or wedding mats) typically take 8–12 business days for crafting, latex curing, and hand-sculpting, plus 3–5 days for insured express courier shipping across India.'
    },
    {
      q: 'Can you match exact Pantone or brand colours for company logos?',
      a: 'Yes! We carry over 200+ shades of premium wool and acrylic yarn in our Andhra Pradesh studio and can match your brand palette with high visual fidelity.'
    },
    {
      q: 'Are the rugs easy to clean after weddings (like Haldi turmeric)?',
      a: 'Yes. Our ceremony mats are treated with a light stain-resistant protective wash. For dry spills and dust, a gentle vacuum without a beater bar works best. For turmeric or liquid splashes, spot clean immediately with mild foaming detergent and cold water.'
    },
    {
      q: 'Do you ship outside India?',
      a: 'Yes, we regularly ship worldwide via DHL and FedEx International Priority. Shipping rates and customs duties are quoted according to package volumetric weight and destination country.'
    }
  ];

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F7F4EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Section Header: "Have an idea? Let's bring it to life." */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#786653] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C49746]" />
            <span>Connect with the Artisans</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#292720] tracking-tight mb-4">
            Have an idea? Let's bring it to life.
          </h2>
          <p className="text-sm sm:text-base text-[#786653] leading-relaxed">
            Whether you are planning a grand wedding celebration, revamping your creative workspace, 
            or seeking a 1-of-1 sculptural art rug, we would love to collaborate with you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Contact Info & Studio Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Studio Card */}
            <div className="bg-[#EAE4D8]/60 rounded-3xl p-6 sm:p-8 border border-[#B6A18A]/30 space-y-6">
              <div>
                <h3 className="font-serif text-2xl font-semibold text-[#292720]">
                  TUFT HOUSE Studio
                </h3>
                <p className="text-xs text-[#786653] mt-1">
                  Artisanal Hand-Tufted Textiles & Bespoke Decor • Head of Studio: <strong>Alex</strong>
                </p>
              </div>

              <div className="space-y-4 text-xs text-[#786653]">
                {/* Studio Head */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#292720] text-[#EAE4D8] flex items-center justify-center shrink-0 font-serif font-bold text-xs">
                    A
                  </div>
                  <div>
                    <span className="font-semibold text-[#292720] block">Studio Head:</span>
                    <span className="text-[#292720]">Alex</span>
                    <span className="block text-[11px] text-[#A9A28E] mt-0.5">Design consultation & custom commission lead</span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center shrink-0 text-[#292720]">
                    <MapPin className="w-4 h-4 text-[#786653]" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#292720] block">Studio Location:</span>
                    <span>Andhra Pradesh, India</span>
                    <span className="block text-[11px] text-[#A9A28E] mt-0.5">Visits by prior appointment</span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center shrink-0 text-[#292720]">
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#292720] block">WhatsApp / Phone:</span>
                    <a 
                      href="https://wa.me/917075876603" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#292720] hover:underline font-mono font-medium"
                    >
                      +91 70758 76603
                    </a>
                    <span className="block text-[11px] text-[#A9A28E] mt-0.5">Direct chat with Alex for design reviews</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center shrink-0 text-[#292720]">
                    <Mail className="w-4 h-4 text-[#786653]" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#292720] block">Email Inquiries:</span>
                    <a href="mailto:prasanthgraphicdesigne@gmail.com" className="text-[#292720] hover:underline font-mono">
                      prasanthgraphicdesigne@gmail.com
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center shrink-0 text-[#292720]">
                    <InstagramIcon className="w-4 h-4 text-[#E1306C]" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#292720] block">Instagram:</span>
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#292720] hover:underline font-mono"
                    >
                      @tufthouse.studio
                    </a>
                    <span className="block text-[11px] text-[#A9A28E] mt-0.5">Daily carving videos & behind-the-scenes</span>
                  </div>
                </div>

                {/* Studio Hours */}
                <div className="flex items-start gap-3 pt-2">
                  <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center shrink-0 text-[#292720]">
                    <Clock className="w-4 h-4 text-[#786653]" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#292720] block">Studio Consultation Hours:</span>
                    <span>Monday – Saturday: 9:30 AM – 7:30 PM IST</span>
                  </div>
                </div>

              </div>

              {/* Direct WhatsApp Callout Button */}
              <button
                onClick={handleWhatsAppDirect}
                className="w-full py-3.5 px-5 bg-[#292720] text-[#EAE4D8] hover:bg-[#786653] rounded-full text-xs uppercase tracking-wider font-semibold transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Open WhatsApp Direct Chat</span>
              </button>
            </div>

            {/* Quick Custom Order Redirect Card */}
            <div className="p-6 rounded-3xl bg-white border border-[#B6A18A]/30 flex items-center justify-between">
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#292720]">
                  Need a Bespoke Quotation?
                </h4>
                <p className="text-[11px] text-[#786653] mt-0.5">
                  Use our interactive custom commission builder with image uploads.
                </p>
              </div>
              <button
                onClick={onOpenCustomOrder}
                className="shrink-0 px-4 py-2 bg-[#EAE4D8] hover:bg-[#B6A18A]/40 text-[#292720] rounded-full text-xs font-semibold transition-colors"
              >
                Custom Tool →
              </button>
            </div>

          </div>

          {/* Right Column: Contact Form & FAQ */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Contact Form */}
            <div className="bg-white rounded-4xl p-6 sm:p-10 border border-[#B6A18A]/30 shadow-subtle">
              <h3 className="font-serif text-2xl font-semibold text-[#292720] mb-1">
                Send a Message to the Studio
              </h3>
              <p className="text-xs text-[#786653] mb-6">
                Fill in the details below and we will get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="p-8 text-center bg-[#EAE4D8]/50 rounded-2xl border border-[#B6A18A]/30 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-[#292720] text-[#C49746] flex items-center justify-center mx-auto mb-3">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl font-semibold text-[#292720] mb-1">
                    Message Dispatched
                  </h4>
                  <p className="text-xs text-[#786653] mb-4">
                    Thank you, {name}! We have received your inquiry and our studio team in Andhra Pradesh will reach out shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#292720] underline font-medium"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-[#292720] block mb-1">
                        Your Name *
                      </label>
                      <input
                        required
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Rohith V."
                        className="w-full px-3.5 py-2.5 bg-[#F7F4EE] rounded-xl border border-[#B6A18A]/30 text-xs text-[#292720] placeholder-[#A9A28E] focus:outline-none focus:border-[#292720]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-[#292720] block mb-1">
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. rohith@domain.com"
                        className="w-full px-3.5 py-2.5 bg-[#F7F4EE] rounded-xl border border-[#B6A18A]/30 text-xs text-[#292720] placeholder-[#A9A28E] focus:outline-none focus:border-[#292720]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-[#292720] block mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        required
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 70758 76603"
                        className="w-full px-3.5 py-2.5 bg-[#F7F4EE] rounded-xl border border-[#B6A18A]/30 text-xs text-[#292720] placeholder-[#A9A28E] focus:outline-none focus:border-[#292720]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-[#292720] block mb-1">
                        Inquiry Subject
                      </label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-[#F7F4EE] rounded-xl border border-[#B6A18A]/30 text-xs text-[#292720] focus:outline-none focus:border-[#292720]"
                      >
                        <option value="Custom Order Inquiry">Custom Order Inquiry</option>
                        <option value="Wedding / Haldi Mat">Wedding / Haldi Mat</option>
                        <option value="Brand / Corporate Logo">Brand / Corporate Logo</option>
                        <option value="Interior Architecture Project">Interior Architecture Project</option>
                        <option value="Press / Collaboration">Press / Collaboration</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#292720] block mb-1">
                      Your Message or Idea *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share your thoughts, event dates, room measurements, or any questions..."
                      className="w-full p-3.5 bg-[#F7F4EE] rounded-xl border border-[#B6A18A]/30 text-xs text-[#292720] placeholder-[#A9A28E] focus:outline-none focus:border-[#292720] leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-[#292720] text-[#EAE4D8] hover:bg-[#786653] rounded-full text-xs uppercase tracking-widest font-semibold transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message to Studio</span>
                  </button>
                </form>
              )}
            </div>

            {/* Studio FAQ Accordion */}
            <div className="bg-[#EAE4D8]/40 rounded-3xl p-6 sm:p-8 border border-[#B6A18A]/25">
              <h4 className="font-serif text-xl font-semibold text-[#292720] mb-4 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#786653]" />
                <span>Frequently Asked Questions</span>
              </h4>

              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-b border-[#B6A18A]/20 pb-3 last:border-0 last:pb-0">
                    <button
                      onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                      className="w-full text-left flex items-center justify-between text-xs font-semibold text-[#292720] hover:text-[#786653]"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 text-[#786653] transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    {activeFaq === i && (
                      <p className="text-xs text-[#786653] mt-2 leading-relaxed animate-fadeIn">
                        {faq.a}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
