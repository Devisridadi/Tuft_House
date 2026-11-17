import React, { useState, useEffect } from 'react';
import { Product, CartItem, CustomOrderRequest } from './types';
import { PRODUCTS } from './data/products';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedCollections } from './components/FeaturedCollections';
import { CraftsmanshipSpotlight } from './components/CraftsmanshipSpotlight';
import { ShopSection } from './components/ShopSection';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CustomOrderBuilder } from './components/CustomOrderBuilder';
import { PortfolioGallery } from './components/PortfolioGallery';
import { AboutSection } from './components/AboutSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { StudioAdminModal } from './components/StudioAdminModal';
import { SearchModal } from './components/SearchModal';
import { PolicyModal } from './components/PolicyModals';
import { Footer } from './components/Footer';

// Initial sample quote requests for demo
const INITIAL_DEMO_QUOTES: CustomOrderRequest[] = [
  {
    id: 'TH-2026-8492',
    createdAt: new Date(Date.now() - 3600000 * 5).toISOString(),
    customerName: 'Devisri',
    email: 'devisri@gmail.com',
    phone: '+91 70753 82343',
    category: 'Wedding & Celebrations',
    dimensions: '4 × 4 ft (Mandap Circle)',
    dimensionUnit: 'feet',
    preferredColors: ['Marigold Yellow', 'Warm Ivory', 'Terracotta'],
    pileStyle: '3D Sculpted Relief',
    quantity: 1,
    requiredDeliveryDate: '2026-12-15',
    budgetRange: '₹10,000 – ₹20,000',
    description: 'Looking for a floral mandala stage mat for our Haldi ceremony in Anakapalli with custom couple lettering carved in the outer ring.',
    customText: 'Devisri • 2026',
    referenceImage: '/images/wedding-haldi-mat.jpg',
    status: 'new',
    estimatedPriceRange: '₹12,500 – ₹15,000'
  },
  {
    id: 'TH-2026-7219',
    createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
    customerName: 'Pandu',
    email: 'pandu@gmail.com',
    phone: '+91 72072 09932',
    category: 'Brand & Promotional Art',
    dimensions: '3.5 × 3.5 ft Round',
    dimensionUnit: 'feet',
    preferredColors: ['Charcoal Black', 'Marigold Yellow'],
    pileStyle: 'Tight Loop Pile',
    quantity: 2,
    requiredDeliveryDate: '2026-11-30',
    budgetRange: '₹15,000 – ₹25,000',
    description: 'Circular brand emblem for studio in Anakapalli, Andhra Pradesh. High foot traffic wear resistant with mascot.',
    customText: 'PANDU CREATIVE',
    referenceImage: '/images/collection-brand.jpg',
    status: 'quoted',
    estimatedPriceRange: '₹16,800',
    studioNotes: 'Dispatched custom quotation for 2 units on heavy-duty backing.'
  }
];

export function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('tufthouse_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [quotes, setQuotes] = useState<CustomOrderRequest[]>(() => {
    try {
      const saved = localStorage.getItem('tufthouse_quotes_v2');
      return saved ? JSON.parse(saved) : INITIAL_DEMO_QUOTES;
    } catch {
      return INITIAL_DEMO_QUOTES;
    }
  });

  // Modals state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [policyType, setPolicyType] = useState<'privacy' | 'terms' | 'shipping' | null>(null);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  
  // Custom builder initial category pre-fill
  const [customInitialCategory, setCustomInitialCategory] = useState<string>('wedding');

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('tufthouse_cart', JSON.stringify(cartItems));
    } catch {
      // ignore
    }
  }, [cartItems]);

  // Sync quotes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('tufthouse_quotes_v2', JSON.stringify(quotes));
    } catch {
      // ignore
    }
  }, [quotes]);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Cart operations
  const handleAddToCart = (product: Product, size?: string, customNote?: string, quantity: number = 1) => {
    const selectedSizeName = size || (product.availableSizes ? product.availableSizes[0].name : product.dimensions);
    
    // Calculate price for that size
    let itemPrice = product.price;
    if (product.availableSizes) {
      const found = product.availableSizes.find(s => s.name === selectedSizeName);
      if (found && found.price > 0) itemPrice = found.price;
    }

    setCartItems(prev => {
      const existingIdx = prev.findIndex(
        i => i.product.id === product.id && i.selectedSize === selectedSizeName && i.customNote === (customNote || '')
      );
      if (existingIdx > -1) {
        const copy = [...prev];
        copy[existingIdx].quantity += quantity;
        return copy;
      }
      return [...prev, {
        product,
        selectedSize: selectedSizeName,
        customNote: customNote || '',
        quantity,
        price: itemPrice
      }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (index: number, newQty: number) => {
    setCartItems(prev => {
      if (newQty <= 0) {
        return prev.filter((_, i) => i !== index);
      }
      const copy = [...prev];
      copy[index].quantity = newQty;
      return copy;
    });
  };

  const handleRemoveItem = (index: number) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };

  const handleSaveQuote = (quote: CustomOrderRequest) => {
    setQuotes(prev => [quote, ...prev]);
  };

  const handleUpdateQuoteStatus = (id: string, newStatus: CustomOrderRequest['status'], notes?: string) => {
    setQuotes(prev => prev.map(q => {
      if (q.id === id) {
        return { ...q, status: newStatus, studioNotes: notes || q.studioNotes };
      }
      return q;
    }));
  };

  const handleOpenCustomWithCategory = (categoryKey: string = 'wedding') => {
    setCustomInitialCategory(categoryKey);
    setActiveTab('custom');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProductById = (productId: string) => {
    const p = PRODUCTS.find(prod => prod.id === productId);
    if (p) {
      setQuickViewProduct(p);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#292720] flex flex-col justify-between selection:bg-[#B6A18A]/30">
      
      {/* Sticky Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={totalCartCount}
        openCart={() => setIsCartOpen(true)}
        openSearch={() => setIsSearchOpen(true)}
        openAdmin={() => setIsAdminOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-1">
        
        {/* HOME VIEW: Full luxury landing experience */}
        {activeTab === 'home' && (
          <>
            <Hero
              onExplore={() => {
                const el = document.getElementById('collections');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onCustom={() => handleOpenCustomWithCategory('custom')}
              onSelectProduct={handleSelectProductById}
            />

            <FeaturedCollections
              onSelectCollection={(colId) => {
                setActiveTab('shop');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenCustomOrder={(catId) => handleOpenCustomWithCategory(catId || 'wedding')}
            />

            <CraftsmanshipSpotlight />

            <ShopSection
              onQuickView={(p) => setQuickViewProduct(p)}
              onAddToCart={(p) => handleAddToCart(p)}
            />

            <ReviewsSection />

            <ContactSection onOpenCustomOrder={() => handleOpenCustomWithCategory('custom')} />
          </>
        )}

        {/* SHOP VIEW: Dedicated full catalog */}
        {activeTab === 'shop' && (
          <div className="pt-28 sm:pt-36">
            <ShopSection
              onQuickView={(p) => setQuickViewProduct(p)}
              onAddToCart={(p) => handleAddToCart(p)}
            />
          </div>
        )}

        {/* CUSTOM CREATIONS VIEW ("Create Your Own") */}
        {activeTab === 'custom' && (
          <div className="pt-28 sm:pt-36">
            <CustomOrderBuilder
              initialCategory={customInitialCategory}
              onSaveQuoteToStorage={handleSaveQuote}
            />
          </div>
        )}

        {/* COLLECTIONS VIEW: Editorial deep dive */}
        {activeTab === 'collections' && (
          <div className="pt-28 sm:pt-36">
            <FeaturedCollections
              onSelectCollection={(colId) => {
                setActiveTab('shop');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenCustomOrder={(catId) => handleOpenCustomWithCategory(catId || 'wedding')}
            />
            <CraftsmanshipSpotlight />
          </div>
        )}

        {/* PORTFOLIO / OUR WORK VIEW */}
        {activeTab === 'portfolio' && (
          <div className="pt-28 sm:pt-36">
            <PortfolioGallery
              onOpenCustomWithInspiration={(title, cat) => handleOpenCustomWithCategory(cat)}
            />
          </div>
        )}

        {/* ABOUT US VIEW */}
        {activeTab === 'about' && (
          <div className="pt-28 sm:pt-36">
            <AboutSection />
            <CraftsmanshipSpotlight />
            <ReviewsSection />
          </div>
        )}

        {/* CONTACT VIEW */}
        {activeTab === 'contact' && (
          <div className="pt-28 sm:pt-36">
            <ContactSection onOpenCustomOrder={() => handleOpenCustomWithCategory('custom')} />
          </div>
        )}

      </main>

      {/* Global Modals & Drawers */}
      
      {/* Product Detail Modal */}
      <ProductDetailModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={(p, size, note, qty) => handleAddToCart(p, size, note, qty)}
        onOpenCustomOrder={(cat) => handleOpenCustomWithCategory(cat)}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        onOrderComplete={() => {
          setCartItems([]);
        }}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(p) => setQuickViewProduct(p)}
      />

      {/* Studio Admin Portal Modal */}
      <StudioAdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        quotes={quotes}
        onUpdateQuoteStatus={handleUpdateQuoteStatus}
      />

      {/* Legal & Policies Modal */}
      <PolicyModal
        type={policyType}
        onClose={() => setPolicyType(null)}
      />

      {/* Sticky / Ambient WhatsApp Floating Help Pill */}
      <div className="fixed bottom-6 right-6 z-30">
        <button
          onClick={() => {
            const url = `https://wa.me/917075382343?text=${encodeURIComponent("Hello TUFT HOUSE! I'm browsing your studio website and would like to ask a question.")}`;
            window.open(url, '_blank');
          }}
          className="flex items-center gap-2.5 px-4 py-3 bg-[#292720] text-[#EAE4D8] hover:bg-[#786653] rounded-full shadow-float border border-[#B6A18A]/30 transition-all duration-300 group hover:scale-105"
          title="Direct Studio WhatsApp (Devisri: +91 70753 82343)"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
          <span className="text-xs uppercase tracking-wider font-semibold">
            Chat on WhatsApp
          </span>
        </button>
      </div>

      {/* Global Footer */}
      <Footer
        onNavigate={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenPolicy={(type) => setPolicyType(type)}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

    </div>
  );
}

export default App;
