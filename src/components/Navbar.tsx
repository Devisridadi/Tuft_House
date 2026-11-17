import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Search, 
  Menu, 
  X, 
  MessageCircle, 
  Sparkles,
  SlidersHorizontal
} from 'lucide-react';
import { generateWhatsAppLink } from '../utils/helpers';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  cartCount: number;
  openCart: () => void;
  openSearch: () => void;
  openAdmin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  cartCount,
  openCart,
  openSearch,
  openAdmin
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'shop', label: 'Shop' },
    { id: 'custom', label: 'Custom Creations', highlight: true },
    { id: 'collections', label: 'Collections' },
    { id: 'portfolio', label: 'Our Work' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppClick = () => {
    const url = generateWhatsAppLink("Hello TUFT HOUSE! I'm interested in commissioning a handmade tufted piece or enquiring about your collections.");
    window.open(url, '_blank');
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#F7F4EE]/95 backdrop-blur-md shadow-subtle border-b border-[#B6A18A]/20 py-3.5' 
            : 'bg-[#F7F4EE]/80 backdrop-blur-sm py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Mobile Hamburger Button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 -ml-2 text-[#292720] hover:text-[#786653] transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Brand Logo */}
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => handleNavClick('home')}
                className="text-left group flex items-center gap-2.5 focus:outline-none"
              >
                <div className="w-9 h-9 rounded-full bg-[#292720] text-[#EAE4D8] flex items-center justify-center font-serif text-lg tracking-wider transition-transform duration-300 group-hover:scale-105 shadow-sm">
                  TH
                </div>
                <div>
                  <span className="font-serif text-2xl sm:text-3xl tracking-[0.2em] uppercase font-semibold text-[#292720] block leading-none">
                    TUFT HOUSE
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.25em] text-[#786653] font-medium block mt-0.5">
                    Studio • Anakapalli, Andhra Pradesh
                  </span>
                </div>
              </button>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative text-xs uppercase tracking-[0.16em] font-medium transition-colors py-1 ${
                    activeTab === link.id
                      ? 'text-[#292720] font-semibold'
                      : 'text-[#786653] hover:text-[#292720]'
                  } ${link.highlight ? 'text-[#786653] flex items-center gap-1.5' : ''}`}
                >
                  {link.highlight && <Sparkles className="w-3 h-3 text-[#C49746]" />}
                  {link.label}
                  {activeTab === link.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#292720] rounded-full animate-fadeIn" />
                  )}
                </button>
              ))}
            </nav>

            {/* Right Action Icons: Search, WhatsApp, Bag, Studio Portal */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              
              {/* Search Icon */}
              <button
                onClick={openSearch}
                aria-label="Search products and creations"
                className="p-2 text-[#292720] hover:text-[#786653] hover:bg-[#EAE4D8]/50 rounded-full transition-colors"
                title="Search products"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* WhatsApp Quick Enquiry Button */}
              <button
                onClick={handleWhatsAppClick}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#292720] text-[#EAE4D8] hover:bg-[#786653] text-[11px] font-medium uppercase tracking-wider rounded-full transition-all duration-300 shadow-sm hover:shadow"
                title="Direct Studio WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#EAE4D8]" />
                <span>Enquire</span>
              </button>

              {/* Shopping Bag Icon with Badge */}
              <button
                onClick={openCart}
                aria-label={`Shopping bag with ${cartCount} items`}
                className="relative p-2 text-[#292720] hover:text-[#786653] hover:bg-[#EAE4D8]/50 rounded-full transition-colors"
                title="Your Shopping Bag"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 bg-[#292720] text-[#F7F4EE] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-scaleIn shadow-sm">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Discreet Studio Admin Portal Trigger */}
              <button
                onClick={openAdmin}
                aria-label="Studio Admin Portal"
                className="hidden md:flex p-2 text-[#A9A28E] hover:text-[#292720] rounded-full transition-colors"
                title="Studio Dashboard / Quotes"
              >
                <SlidersHorizontal className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity" 
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-[#F7F4EE] shadow-elevated p-6 flex flex-col justify-between z-50 border-r border-[#B6A18A]/30">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#B6A18A]/20">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#292720] text-[#EAE4D8] flex items-center justify-center font-serif text-base">
                    TH
                  </div>
                  <div>
                    <span className="font-serif text-xl tracking-[0.18em] uppercase font-semibold text-[#292720] block">
                      TUFT HOUSE
                    </span>
                    <span className="text-[9px] uppercase tracking-widest text-[#786653]">
                      Studio
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 text-[#786653] hover:text-[#292720]"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="py-6 space-y-2">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                      activeTab === link.id
                        ? 'bg-[#EAE4D8] text-[#292720] font-semibold'
                        : 'text-[#786653] hover:bg-[#EAE4D8]/50 hover:text-[#292720]'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {link.highlight && <Sparkles className="w-4 h-4 text-[#C49746]" />}
                      {link.label}
                    </span>
                    {activeTab === link.id && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#292720]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#B6A18A]/20 space-y-3">
              <button
                onClick={handleWhatsAppClick}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#292720] text-[#EAE4D8] rounded-xl text-xs uppercase tracking-wider font-semibold shadow-sm hover:bg-[#786653] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Studio
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openAdmin();
                }}
                className="w-full text-center text-xs text-[#786653] hover:text-[#292720] py-2"
              >
                Studio Admin Portal
              </button>

              <p className="text-[10px] text-center text-[#A9A28E] uppercase tracking-widest pt-2">
                Made by Hand. Made to Stand Out.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
