import React from 'react';
import { MessageCircle, Mail, MapPin, Sparkles, Heart } from 'lucide-react';
import { InstagramIcon } from './icons/InstagramIcon';
import { generateWhatsAppLink } from '../utils/helpers';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenPolicy: (type: 'privacy' | 'terms' | 'shipping') => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenPolicy,
  onOpenAdmin
}) => {
  const currentYear = new Date().getFullYear();

  const handleWhatsApp = () => {
    window.open(generateWhatsAppLink("Hello TUFT HOUSE! I'm browsing your studio website and would love to connect."), '_blank');
  };

  return (
    <footer className="bg-[#292720] text-[#EAE4D8] border-t border-[#786653]/30 pt-16 sm:pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tagline Statement */}
        <div className="pb-12 sm:pb-16 border-b border-[#786653]/30 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#B6A18A] font-semibold block mb-1">
              Studio Philosophy
            </span>
            <p className="font-serif text-2xl sm:text-4xl text-[#F7F4EE] font-light">
              “Made by Hand. Made to Stand Out.”
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleWhatsApp}
              className="px-6 py-3 rounded-full bg-[#EAE4D8] text-[#292720] hover:bg-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp Studio</span>
            </button>
          </div>
        </div>

        {/* 4 Columns Grid */}
        <div className="py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand Info (Spans 2 on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#EAE4D8] text-[#292720] flex items-center justify-center font-serif text-sm font-bold">
                TH
              </div>
              <span className="font-serif text-2xl tracking-[0.18em] uppercase font-semibold text-[#F7F4EE]">
                TUFT HOUSE
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#A9A28E] leading-relaxed max-w-sm font-light">
              A premium creative tufting studio in Anakapalli, Andhra Pradesh, India specialising in handcrafted, 
              personalised and customised tufted rugs, wedding ceremonial mats, logo carpets, and tactile interior accents.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-[#B6A18A]">
              <MapPin className="w-4 h-4 shrink-0 text-[#C49746]" />
              <span>Handcrafted in Anakapalli, Andhra Pradesh, India 🇮🇳</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#F7F4EE] mb-4">
              Explore Studio
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A9A28E]">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-[#F7F4EE] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('shop')} className="hover:text-[#F7F4EE] transition-colors">
                  Shop Catalog
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('custom')} className="hover:text-[#F7F4EE] transition-colors text-[#C49746] font-medium flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Custom Creations
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('collections')} className="hover:text-[#F7F4EE] transition-colors">
                  Featured Collections
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('portfolio')} className="hover:text-[#F7F4EE] transition-colors">
                  Our Work & Archive
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#F7F4EE] transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-[#F7F4EE] transition-colors">
                  Contact Studio
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Categories */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#F7F4EE] mb-4">
              Disciplines
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A9A28E]">
              <li>
                <button onClick={() => onNavigate('shop')} className="hover:text-[#F7F4EE] transition-colors">
                  Wedding & Haldi Mats
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('shop')} className="hover:text-[#F7F4EE] transition-colors">
                  Brand & Office Logo Rugs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('shop')} className="hover:text-[#F7F4EE] transition-colors">
                  3D Sculpted Home Décor
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('shop')} className="hover:text-[#F7F4EE] transition-colors">
                  Café & Commercial Entrance
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('shop')} className="hover:text-[#F7F4EE] transition-colors">
                  Personalised Monogram Gifts
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('custom')} className="hover:text-[#F7F4EE] transition-colors">
                  Bespoke Commissions
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Studio Contact & Hours */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#F7F4EE] mb-4">
              Direct Inquiries
            </h4>
            <div className="space-y-3 text-xs text-[#A9A28E]">
              <div>
                <span className="block text-[10px] text-[#786653] uppercase font-bold">Studio Artisans</span>
                <span className="text-[#F7F4EE] font-medium">Devisri & Pandu</span>
              </div>

              <div>
                <span className="block text-[10px] text-[#786653] uppercase font-bold">Devisri (WhatsApp / Phone)</span>
                <a 
                  href="https://wa.me/917075382343" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#F7F4EE] hover:underline font-mono"
                >
                  +91 70753 82343
                </a>
              </div>

              <div>
                <span className="block text-[10px] text-[#786653] uppercase font-bold">Pandu (WhatsApp / Phone)</span>
                <a 
                  href="https://wa.me/917207209932" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#F7F4EE] hover:underline font-mono"
                >
                  +91 72072 09932
                </a>
              </div>

              <div>
                <span className="block text-[10px] text-[#786653] uppercase font-bold">Email</span>
                <a href="mailto:prasanthgraphicdesigner@gmail.com" className="text-[#F7F4EE] hover:underline font-mono">
                  prasanthgraphicdesigner@gmail.com
                </a>
              </div>

              <div>
                <span className="block text-[10px] text-[#786653] uppercase font-bold">Instagram</span>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#F7F4EE] hover:underline font-mono flex items-center gap-1.5"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-[#E1306C]" />
                  <span>@tufthouse.studio</span>
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenAdmin}
                  className="text-[11px] text-[#B6A18A] hover:text-white underline"
                >
                  Studio Portal / Manage Quotes
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Policies */}
        <div className="pt-8 border-t border-[#786653]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A9A28E]">
          <div>
            © {currentYear} TUFT HOUSE. All rights reserved. Handcrafted with pride in Andhra Pradesh, India.
          </div>

          <div className="flex items-center gap-6">
            <button 
              onClick={() => onOpenPolicy('privacy')}
              className="hover:text-[#F7F4EE] transition-colors"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => onOpenPolicy('terms')}
              className="hover:text-[#F7F4EE] transition-colors"
            >
              Terms & Conditions
            </button>
            <button 
              onClick={() => onOpenPolicy('shipping')}
              className="hover:text-[#F7F4EE] transition-colors"
            >
              Shipping & Returns
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
