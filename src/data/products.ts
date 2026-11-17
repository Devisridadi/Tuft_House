import { Product } from '../types';

export const PRODUCTS: Product[] = [
  // 1. Home Décor - Signature Sculpted Rug (From Reference Image)
  {
    id: 'sands-of-dune',
    name: 'Sands of Dune — 3D Sculpted Wave Rug',
    category: 'home-decor',
    categoryLabel: 'Home Décor',
    subtitle: 'Hand-carved organic relief topography in warm earth tones',
    price: 18500,
    dimensions: '5 ft × 7 ft (150 cm × 210 cm)',
    availableSizes: [
      { name: 'Accent Rug', dimensions: '3 ft × 5 ft', price: 11500 },
      { name: 'Standard Living', dimensions: '5 ft × 7 ft', price: 18500 },
      { name: 'Grand Salon', dimensions: '6 ft × 9 ft', price: 28000 },
      { name: 'Custom Dimension', dimensions: 'Custom Area', price: 0 }
    ],
    material: '100% Premium New Zealand Wool & High-Density Acrylic Blend, Natural Latex Backing with Anti-Skid Twill Ribbon',
    pileType: '3D Sculpted Relief',
    pileHeight: '18mm – 25mm multi-level hand-carved bevel',
    leadTime: '10–14 business days (Hand-tufted & sculpted to order)',
    images: [
      '/images/hero-tufted-rug.jpg',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Our signature studio masterpiece. Inspired by undulating desert dunes and serene zen stone gardens, the Sands of Dune rug features exquisite multi-depth hand shearing that creates visual motion and extraordinary tactile depth underfoot. Each ridge is precision-carved with curved shears by master tufters in our studio.',
    features: [
      'Multi-level hand-sheared bevels creating real tactile depth',
      'Warm Ivory (#EAE4D8), Cream, Soft Taupe and Mocha Brown yarn blend',
      'Heavyweight 3800 GSM fiber density for supreme underfoot luxury',
      'Reinforced non-slip natural rubberized latex backing',
      'Vacuum-safe and stain-resistant treated fibers'
    ],
    customizationOptions: [
      'Custom dimensions to fit your exact living room or bedroom footprint',
      'Colourway adjustments (Muted Sage, Charcoal or Terracotta accents)',
      'Pile density & 100% Pure Organic Wool upgrade available'
    ],
    inStock: false,
    isMadeToOrder: true,
    featured: true,
    rating: 5.0,
    reviewCount: 38,
    tags: ['Best Seller', '3D Sculpted', 'Signature Art', 'Living Room']
  },

  // 2. Wedding & Celebrations - Haldi Ceremony Mandala (From Reference Image)
  {
    id: 'haldi-ceremony-mat',
    name: 'The Haldi Bloom — Ceremonial Mandala Mat',
    category: 'wedding',
    categoryLabel: 'Wedding & Celebrations',
    subtitle: 'Vibrant marigold yellow & raw ivory traditional stage mat',
    price: 9800,
    dimensions: '4 ft × 4 ft Round / Square (120 cm × 120 cm)',
    availableSizes: [
      { name: 'Intimate Seating (Couple)', dimensions: '3.5 ft × 3.5 ft', price: 7900 },
      { name: 'Ceremony Stage Standard', dimensions: '4 ft × 4 ft', price: 9800 },
      { name: 'Grand Mandap Mat', dimensions: '5 ft × 5 ft', price: 14500 }
    ],
    material: 'High-Density Anti-Pill Acrylic Yarn with Soft Cotton Monks Cloth & Flexible Anti-Slip Backing',
    pileType: '3D Sculpted Relief',
    pileHeight: '18mm plush sculpted bevel',
    leadTime: '7–10 business days',
    images: [
      '/images/wedding-haldi-mat.jpg',
      '/images/collection-wedding.jpg',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Designed exclusively for Indian wedding festivities, Haldi ceremonies, and Pellikuthuru rituals. The Haldi Bloom features an intricate sacred floral mandala hand-tufted in radiant marigold yellows, turmeric gold, and warm ivory. It serves as both a comfortable plush seating mat for bride and groom and a breathtaking photographic centerpiece surrounded by brass urli bowls.',
    features: [
      'Authentic traditional mandala design with crisp color separation',
      '3D sculpted relief petals creating genuine tactile depth underfoot',
      'Easy spot cleaning from turmeric and water splashes',
      'Thick plush cushioning comfortable for prolonged rituals',
      'Custom couple names or wedding hashtag can be tufted along the perimeter'
    ],
    customizationOptions: [
      'Embroidered/tufted couple initials & wedding date in corner',
      'Alternate ceremony palettes (Mehendi Emerald Green, Sangeet Lilac & Gold)',
      'Matching couple seat cushion pairing'
    ],
    inStock: true,
    isMadeToOrder: true,
    featured: true,
    rating: 4.9,
    reviewCount: 52,
    tags: ['Wedding', 'Haldi Special', 'Custom Initials', 'Heirloom', '3D Sculpted']
  },

  // 2B. Wedding & Celebrations - Handcrafted Couple Portrait Textile Art (User Studio Commission)
  {
    id: 'wedding-couple-portrait-frame',
    name: 'The Vow & Veil — Hand-Tufted Couple Portrait Art',
    category: 'wedding',
    categoryLabel: 'Wedding & Celebrations',
    subtitle: 'Artisanal punch-needle textile portrait framed on natural canvas',
    price: 6800,
    dimensions: '14 in × 18 in (35 cm × 45 cm)',
    availableSizes: [
      { name: 'Tabletop / Welcome Desk (10 × 12 in)', dimensions: '10 in × 12 in', price: 4800 },
      { name: 'Studio Easel Keepsake (14 × 18 in)', dimensions: '14 in × 18 in', price: 6800 },
      { name: 'Grand Heirloom Canvas (20 × 24 in)', dimensions: '20 in × 24 in', price: 9800 }
    ],
    material: 'Natural Unbleached Monks Cloth with High-Grade Soft Wool & Acrylic Yarn, Stretched on Solid Wood Frame',
    pileType: 'Fine Loop & Punch Needle Relief',
    pileHeight: '10mm – 14mm multi-texture tactile loops',
    leadTime: '8–12 business days (Meticulously hand-tufted from your photo)',
    images: [
      '/images/wedding-portrait-frame.jpg',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A deeply personal handmade textile heirloom capturing bride and groom in whimsical, tactile hand-tufted punch needle art. Rendered with fine loop pile for hair, veil, tuxedos, and floral corner blooms, stretched onto a natural wooden frame. Perfect for your marriage entrance display table, gift table, and lifelong bedroom wall decor.',
    features: [
      'Hand-crafted from your couple photographs with charming illustrated fidelity',
      'Textured white bridal veil and crisp black tuxedo with 3D tactile loops',
      'Custom couple names and wedding date hand-embroidered or tufted in header',
      'Mounted and ready to display on wooden easels or hang on walls',
      'Archival quality non-shedding fiber construction'
    ],
    customizationOptions: [
      'Custom attire styling (Traditional Indian bridal lehenga / sherwani or Western gown & tuxedo)',
      'Background color palette (Sage Green, Blush Rose, Warm Terracotta, or Raw Ivory)',
      'Custom calligraphy text / couple names / sacred date'
    ],
    inStock: false,
    isMadeToOrder: true,
    featured: true,
    rating: 5.0,
    reviewCount: 47,
    tags: ['Wedding Portrait', 'Handmade Punch Needle', 'Couple Gift', 'Heirloom Keepsake']
  },

  // 2C. Wedding & Celebrations - 3D Tufted Wedding Welcome Board
  {
    id: 'wedding-entrance-welcome-board',
    name: 'The Grand Arrival — 3D Tufted Wedding Welcome Sign',
    category: 'wedding',
    categoryLabel: 'Wedding & Celebrations',
    subtitle: 'Bespoke wooden easel welcome signage with 3D wool typography & floral borders',
    price: 11500,
    dimensions: '2.5 ft × 3.5 ft (75 cm × 105 cm)',
    availableSizes: [
      { name: 'Intimate Ceremony Sign (2 ft × 3 ft)', dimensions: '2 ft × 3 ft', price: 8900 },
      { name: 'Grand Entrance Easel (2.5 ft × 3.5 ft)', dimensions: '2.5 ft × 3.5 ft', price: 11500 },
      { name: 'Palace Archway Board (3 ft × 5 ft)', dimensions: '3 ft × 5 ft', price: 16800 }
    ],
    material: 'Solid Hardwood Easel Frame, 3D Sculpted Cut & Loop Pile Wool Yarn with Fresh Floral Garland Hooks',
    pileType: '3D Sculpted Relief',
    pileHeight: '20mm – 28mm high-relief sculpted lettering',
    leadTime: '10–14 business days',
    images: [
      '/images/wedding-entrance-board.jpg',
      'https://images.unsplash.com/photo-1519228998526-96a58149f252?auto=format&fit=crop&w=1200&q=80',
      '/images/wedding-haldi-mat.jpg'
    ],
    description: 'Transform your wedding entrance with a showstopping physical welcome board. Crafted with dimensional 3D tufted wool typography ("Welcome to the Wedding of..."), couple initials, and sculpted floral petals in warm ivory, vintage gold, and earthy marigold, presented on a dark wood easel draped with fresh jasmine and marigold garlands.',
    features: [
      'High-relief 3D carved wool typography that pops beautifully in entrance photos',
      'Supplied with solid hardwood easel or ready-to-hang brass brackets',
      'Double backed with heavy canvas for outdoor garden & indoor banquet stability',
      'Integrated brass hooks for draping fresh flower garlands',
      'Cherished after the wedding as a permanent statement wall piece in your home'
    ],
    customizationOptions: [
      'Custom typography: "Welcome to the Wedding", hashtag, or sacred vows',
      'Custom color harmonies to match your wedding decorator palette',
      'Arch silhouette or rectangular formal proportions'
    ],
    inStock: false,
    isMadeToOrder: true,
    featured: true,
    rating: 5.0,
    reviewCount: 39,
    tags: ['Wedding Entrance', '3D Wool Signage', 'Photo Backdrop', 'Best Seller']
  },

  // 2D. Wedding & Celebrations - Hand-Tufted Engagement Ring Box
  {
    id: 'wedding-ring-bearer-box',
    name: 'The Vow Nest — Hand-Tufted Engagement Ring Box',
    category: 'wedding',
    categoryLabel: 'Wedding & Celebrations',
    subtitle: 'Artisanal walnut wooden box with miniature hand-tufted plush wool ring cushion',
    price: 2900,
    dimensions: '4.5 in × 3.5 in × 2 in (11 cm × 9 cm × 5 cm)',
    availableSizes: [
      { name: 'Single Ring Proposal Box', dimensions: '3.5 in × 3.5 in', price: 2200 },
      { name: 'Dual Band Ceremony Box (Couple)', dimensions: '4.5 in × 3.5 in', price: 2900 },
      { name: 'Grand Heirloom Quad Box', dimensions: '6 in × 4 in', price: 3800 }
    ],
    material: 'Natural Walnut Hardwood with Hand-Tufted High-Density Soft Merino Wool Cushion, Brass Hinges & Magnetic Closure',
    pileType: 'Micro-Loop Pile',
    pileHeight: '12mm plush ring channel cushion',
    leadTime: '5–7 business days',
    images: [
      '/images/wedding-ring-box.jpg',
      '/images/wedding-portrait-frame.jpg',
      'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'An exquisite alternative to mass-produced ring boxes. Solid walnut hardwood fitted with a custom miniature hand-tufted wool cushion in cream and blush tones. The plush wool loops cradle both the bride and groom’s rings gently upright, providing photographers with magnificent macro detail during the ring exchange ceremony.',
    features: [
      'Artisanal hand-tufted wool cushion tailored to hold 1 or 2 wedding bands snugly',
      'Solid dark walnut wood with silky smooth natural oil finish',
      'Discreet hidden neodymium magnetic closure & brushed brass hinges',
      'Photographer favorite for flat-lay bridal morning detail shoots',
      'Personalised initials laser-engraved or tufted on the interior lid'
    ],
    customizationOptions: [
      'Wool cushion color palette (Warm Ivory, Soft Sage, Blush Rose, Dusty Terracotta)',
      'Single slot or twin slot for couple wedding bands',
      'Custom laser engraving of couple initials and engagement date on the wood'
    ],
    inStock: true,
    isMadeToOrder: true,
    featured: true,
    rating: 4.9,
    reviewCount: 64,
    tags: ['Ring Box', 'Engagement Gift', 'Walnut Wood', 'Merino Wool', 'Wedding Detail']
  },

  // 3. Brand & Promotional - Great Boss Rug (From Reference Image)
  {
    id: 'brand-promotional-boss',
    name: 'Executive Insignia — Custom Brand Logo Rug',
    category: 'promotional',
    categoryLabel: 'Brand & Promotional Art',
    subtitle: 'Precision logo translation with high-contrast carved outlines',
    price: 8500,
    dimensions: '3.5 ft Round (105 cm diameter)',
    availableSizes: [
      { name: 'Desk Accent Rug', dimensions: '3 ft Round', price: 6800 },
      { name: 'Office Entrance Standard', dimensions: '3.5 ft Round', price: 8500 },
      { name: 'Showroom Statement', dimensions: '5 ft Round', price: 15200 },
      { name: 'Custom Die-Cut Shape', dimensions: 'Custom W×H', price: 0 }
    ],
    material: 'Commercial Grade High-Tenacity Acrylic Wool Blend with Heavy-Duty Vulcanized Anti-Skid Backing',
    pileType: 'Dual Texture',
    pileHeight: '15mm dense cut pile with shaved relief',
    leadTime: '8–12 business days',
    images: [
      '/images/collection-brand.jpg',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Transform your brand, startup logo, or movie promotional artwork into a high-impact physical textile asset. As featured in our client spotlight ("GREAT BOSS" emblem), we reproduce company emblems, typography, and mascots with surgical precision and distinct hand-carved separation between colors.',
    features: [
      'Sharp typography carving preventing color bleed',
      'High-traffic commercial wear rating for office receptions & showrooms',
      'Vector logo fidelity: we match exact Pantone / hex brand colors',
      'Ideal for YouTube studio sets, corporate reception lobbies, and creator rooms',
      'Anti-trip beveled edge borders'
    ],
    customizationOptions: [
      'Upload your vector (.SVG, .AI, .PNG) or concept sketch',
      'Custom silhouette/die-cut around your logo contour',
      'Bulk unit discounts for multiple branch locations or client gifts'
    ],
    inStock: false,
    isMadeToOrder: true,
    featured: true,
    rating: 5.0,
    reviewCount: 29,
    tags: ['Brand Décor', 'Commercial Grade', 'Logo Tufting', 'High Contrast']
  },

  // 4. Home Décor - Organic Relief Wall Art (From Reference Image)
  {
    id: 'relief-wall-art-arch',
    name: 'Elysian Form — Framed Tufted Wall Tapestry',
    category: 'home-decor',
    categoryLabel: 'Home Décor',
    subtitle: 'Tactile acoustic textile art in neutral earthen curves',
    price: 7400,
    dimensions: '24 in × 36 in (60 cm × 90 cm)',
    availableSizes: [
      { name: 'Studio Size', dimensions: '18 in × 24 in', price: 5200 },
      { name: 'Gallery Standard', dimensions: '24 in × 36 in', price: 7400 },
      { name: 'Statement Mural', dimensions: '36 in × 48 in', price: 12800 }
    ],
    material: 'Natural Unbleached Cotton, Raw Linen, New Zealand Wool, Handcrafted Solid Ash Wood Floating Frame',
    pileType: '3D Sculpted Relief',
    pileHeight: '22mm sculptural high-low cut',
    leadTime: '6–9 business days',
    images: [
      '/images/collection-decor.jpg',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540518614846-7ede433c4ef4?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Blurring the boundary between sculpture and textile craft. The Elysian Form wall tapestry introduces organic relief shapes into contemporary minimalist, Japandi, and brutalist interiors. Mounted on a hidden rigid frame ready to hang, it absorbs ambient room echoes while offering warm visual grounding.',
    features: [
      'Acoustic damping properties softening room reverberation',
      'Neutral tones: Warm Ivory (#EAE4D8), Soft Taupe (#B6A18A), and Muted Sage',
      'Hand-finished wooden backing with heavy-duty French cleat hanger',
      'Dust-resistant treated yarn requiring only occasional soft brush grooming'
    ],
    customizationOptions: [
      'Custom frame finish (Natural Ash Wood, Mocha Walnut, or Matte Charcoal)',
      'Orientation: Vertical portrait or Horizontal landscape orientation',
      'Custom color harmonies to match your interior swatch'
    ],
    inStock: true,
    isMadeToOrder: true,
    featured: true,
    rating: 4.8,
    reviewCount: 24,
    tags: ['Wall Art', 'Sculptural', 'Acoustic Decor', 'Japandi']
  },

  // 5. Personalised Gifts - Tufted Keychains (From Reference Image)
  {
    id: 'custom-letter-keychains',
    name: 'Chroma Initial — Custom Hand-Carved Keychains',
    category: 'gifts',
    categoryLabel: 'Personalised Gifts',
    subtitle: 'Micro-tufted letter monogram & charm accessories',
    price: 499,
    dimensions: '3.5 in × 2.2 in (9 cm × 5.5 cm)',
    availableSizes: [
      { name: 'Single Initial Keychain', dimensions: '3.5 in × 2.2 in', price: 499 },
      { name: 'Couple Set (2 Pieces)', dimensions: 'Set of 2', price: 899 },
      { name: 'Party Favors Pack (5 Pieces)', dimensions: 'Set of 5', price: 1999 },
      { name: 'Party Favors Pack (10 Pieces)', dimensions: 'Set of 10', price: 3600 }
    ],
    material: 'High-Density Fine Acrylic Yarn with Vegan Suede Backing & Solid Brass Hardware Ring',
    pileType: 'Cut Pile',
    pileHeight: '12mm tightly sheared microfiber finish',
    leadTime: '3–5 business days',
    images: [
      '/images/collection-gifts.jpg',
      'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Everyday art you can carry in your pocket. As showcased in our hands-on workshop preview, these micro-tufted initial keychains are handcrafted with the same precision and passion as our room-sized rugs. Featuring your chosen alphabet letter in punchy contrasting hues with tactile 3D contour carving.',
    features: [
      'Choose any alphabet (A–Z), number, or cute mini icon (Heart, Star, Daisy)',
      'Vibrant color pairing: Lavender, Marigold Yellow, Crimson, Sage, or Mocha',
      'Hand-stitched vegan faux-suede backing for supreme durability',
      'Tarnish-proof brushed brass or matte black lobster clasp ring',
      'Beautiful studio gift box packaging included'
    ],
    customizationOptions: [
      'Letter / Initial selection',
      'Background color and Letter color custom combination',
      'Bulk gifting packaging for wedding return gifts, bridesmaids, or corporate swag'
    ],
    inStock: true,
    isMadeToOrder: true,
    featured: true,
    rating: 4.9,
    reviewCount: 88,
    tags: ['Gifts', 'Personalised', 'Under ₹500', 'Bestseller']
  },

  // 6. Restaurant & Commercial - Artisanal Roastery Mat
  {
    id: 'roastery-welcome-mat',
    name: 'Artisan Atelier — Hospitality Entrance Rug',
    category: 'commercial',
    categoryLabel: 'Restaurant & Commercial Décor',
    subtitle: 'Heavy-traffic tufted entrance statement for cafés & boutiques',
    price: 11200,
    dimensions: '3 ft × 5 ft (90 cm × 150 cm)',
    availableSizes: [
      { name: 'Doorway Entry', dimensions: '3 ft × 4 ft', price: 9200 },
      { name: 'Boutique Runner', dimensions: '3 ft × 5 ft', price: 11200 },
      { name: 'Grand Bar Front', dimensions: '4 ft × 6 ft', price: 16800 }
    ],
    material: 'Commercial Nylon-Acrylic Polyblend, High Durability Backing with Anti-Curl Beveled Rubber Trim',
    pileType: 'Dual Texture',
    pileHeight: '14mm tight loop & cut hybrid',
    leadTime: '9–12 business days',
    images: [
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
      '/images/collection-brand.jpg'
    ],
    description: 'First impressions matter. Specially engineered for specialty coffee houses, boutique retail storefronts, and design agencies. Combines an artisanal handcrafted aesthetic with commercial-level durability to welcome guests in style.',
    features: [
      'Tightly packed fiber loops that trap exterior dust and moisture',
      'Non-slip heavy rubber vulcanization preventing movement on smooth tile or marble',
      'Custom typography with brand tagline or welcome greeting',
      'Washable and easy to maintain with standard commercial extraction'
    ],
    customizationOptions: [
      'Incorporate your café name, logo, or custom hospitality motif',
      'Choice of subtle minimalist monochrome or warm terracotta/coffee tones'
    ],
    inStock: false,
    isMadeToOrder: true,
    rating: 4.9,
    reviewCount: 19,
    tags: ['Commercial', 'Café Decor', 'Anti-Slip', 'High Durability']
  },

  // 7. Wedding & Celebrations - Personalized Couple Wedding Mat
  {
    id: 'couple-monogram-rug',
    name: 'Amour & Knot — Wedding Name & Date Rug',
    category: 'wedding',
    categoryLabel: 'Wedding & Celebrations',
    subtitle: 'Hand-tufted heirloom keepsake with couple names & vows',
    price: 12500,
    dimensions: '3 ft × 5 ft (90 cm × 150 cm)',
    availableSizes: [
      { name: 'Entrance Welcome Rug', dimensions: '3 ft × 4 ft', price: 9900 },
      { name: 'Mandap / Stage Focal', dimensions: '3 ft × 5 ft', price: 12500 },
      { name: 'Grand Keepsake Runner', dimensions: '3.5 ft × 6 ft', price: 16500 }
    ],
    material: 'Pure New Zealand Wool in Natural Warm Ivory, Soft Taupe and Delicate Gold Accents',
    pileType: 'Cut Pile',
    pileHeight: '18mm plush wool',
    leadTime: '10–14 business days',
    images: [
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519228998526-96a58149f252?auto=format&fit=crop&w=1200&q=80',
      '/images/collection-wedding.jpg'
    ],
    description: 'More than ceremony decor — a timeless keepsake that transitions seamlessly into the couple\'s first home after the wedding. Handcrafted with romantic calligraphy typography, custom dates, and delicate botanical or modern arches.',
    features: [
      'Custom tufting of couple names in elegant serif or modern script',
      'Subtle metallic gold thread highlights woven into borders',
      'Includes custom archival storage dust bag for preservation',
      'Double backed with organic unbleached cotton canvas'
    ],
    customizationOptions: [
      'Full typography customization (Names, Date, Sacred Mantra, or Coordinates)',
      'Arch silhouette or rectangular formal border',
      'Palette customization to harmonize with wedding theme'
    ],
    inStock: false,
    isMadeToOrder: true,
    rating: 5.0,
    reviewCount: 41,
    tags: ['Wedding Keepsake', 'Personalised Names', 'New Zealand Wool']
  },

  // 8. Custom Tufted Creations - Bespoke Commission (Quote-based)
  {
    id: 'bespoke-commission-studio',
    name: 'Bespoke Studio Commission — Client Defined Art',
    category: 'custom',
    categoryLabel: 'Custom Tufted Creations',
    subtitle: 'Turn your sketch, illustration, or dream rug into reality',
    price: 15000,
    isQuoteBased: true,
    dimensions: 'Custom Dimensions (Made to your exact specs)',
    availableSizes: [
      { name: 'Small Art Piece (Up to 6 sq ft)', dimensions: 'Approx. 2×3 ft', price: 6500 },
      { name: 'Medium Statement (Up to 15 sq ft)', dimensions: 'Approx. 3×5 ft', price: 14500 },
      { name: 'Large Room Piece (Up to 28 sq ft)', dimensions: 'Approx. 4×7 ft', price: 26000 },
      { name: 'Architectural Scale (35+ sq ft)', dimensions: 'Custom Area', price: 38000 }
    ],
    material: 'Custom selection: 100% Organic Wool, Bamboo Silk, or Premium Acrylic',
    pileType: '3D Sculpted Relief',
    pileHeight: 'Custom 12mm to 30mm multi-depth',
    leadTime: '12–18 business days from final 3D design approval',
    images: [
      '/images/hero-tufted-rug.jpg',
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Have a unique vision? Whether it\'s an asymmetrical organic puddle rug, an album cover tribute, an abstract landscape, or a custom mascot, our TUFT HOUSE creative director works directly with you. We review your concept art, create a tufting yarn blueprint, and handcraft a one-of-a-kind art piece.',
    features: [
      'One-on-one design consultation with our lead textile artist',
      'Custom yarn color matching from our 200+ shade fiber library',
      'Progress updates sent via WhatsApp during the tufting & carving stages',
      'Certificate of Authenticity with unique serial number and artisan signature'
    ],
    customizationOptions: [
      'Completely unrestricted shapes, irregular contours, and multi-tier carving',
      'Gradient yarn blending and loop/cut pile combinations',
      'Wall mount cleat or floor anti-skid installation options'
    ],
    inStock: false,
    isMadeToOrder: true,
    featured: true,
    rating: 5.0,
    reviewCount: 33,
    tags: ['1 of 1 Art', 'Custom Commission', 'Quote Based', 'Hand Carved']
  },

  // 9. Personalised Gifts - Pet Portrait Mini Rug
  {
    id: 'pet-portrait-mini',
    name: 'Paw & Tuft — Custom Pet Portrait Mug Rug',
    category: 'gifts',
    categoryLabel: 'Personalised Gifts',
    subtitle: 'Hand-tufted miniature portrait of your cat or dog',
    price: 1899,
    dimensions: '8 in × 8 in (20 cm × 20 cm)',
    availableSizes: [
      { name: 'Mini Desk Mat / Mug Rug', dimensions: '8 in × 8 in', price: 1899 },
      { name: 'Wall Hanging Medallion', dimensions: '12 in × 12 in', price: 2999 },
      { name: 'Pet Bed Front Rug', dimensions: '24 in × 18 in', price: 5499 }
    ],
    material: 'Ultra-Fine Acrylic Yarn with Soft Felt Backing',
    pileType: '3D Sculpted Relief',
    pileHeight: '14mm sculpted fur texture',
    leadTime: '5–8 business days',
    images: [
      'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=1200&q=80',
      '/images/collection-gifts.jpg'
    ],
    description: 'Capture the joyful face of your furry companion in cozy tufted wool! Simply send us a photo of your pet, and our artist translates their expressive eyes, snout, and fur patterns into an adorable tactile miniature rug perfect for your coffee desk or nightstand.',
    features: [
      'Individual fur layer carving for expressive realism',
      'Personalized with your pet\'s name tufted in subtle lettering',
      'Waterproof felt underlayer safe for hot mugs and beverages',
      'The ultimate heartwarming gift for pet parents'
    ],
    customizationOptions: [
      'Upload 1–3 clear face photos of your dog, cat, or pet',
      'Choice of background color (Sage Green, Butter Yellow, Powder Blue, Ivory)'
    ],
    inStock: false,
    isMadeToOrder: true,
    rating: 5.0,
    reviewCount: 47,
    tags: ['Pet Lovers', 'Personalised', 'Mug Rug', 'Desk Accent']
  }
];

export const FEATURED_COLLECTIONS = [
  {
    id: 'wedding',
    title: 'Wedding & Celebrations',
    tagline: 'Ceremonial Elegance & Heirloom Keepsakes',
    description: 'Entrance welcome boards, couple punch-needle textile portraits, auspicious Haldi mandala mats, and bespoke tufted ring boxes crafted to make your milestone moments unforgettable.',
    image: '/images/wedding-entrance-board.jpg',
    itemsCount: '16 Bespoke Designs',
    badge: 'Ceremony Special',
    examples: ['Entrance Welcome Boards', 'Couple Textile Portraits', 'Haldi Ceremony Mats', 'Tufted Ring Boxes', 'Engagement Keepsakes']
  },
  {
    id: 'promotional',
    title: 'Brand & Promotional Art',
    tagline: 'Textile Identity for Creators & Companies',
    description: 'Custom company logo rugs, movie promotional logo mats, brand merchandise and event promotional artwork that leaves an indelible impression.',
    image: '/images/collection-brand.jpg',
    itemsCount: '28+ Brands',
    badge: 'Commercial Grade',
    examples: ['Custom company logo rugs', 'Movie promotional logo mats', 'Brand merchandise', 'Event promotional artwork']
  },
  {
    id: 'home-decor',
    title: 'Home Décor & Accents',
    tagline: 'Sculptural Tactility for Modern Living',
    description: 'Tufted wall art, multi-depth decorative rugs, personalised name rugs and luxury interior accents that transform ordinary rooms into sanctuaries.',
    image: '/images/collection-decor.jpg',
    itemsCount: '22 Originals',
    badge: '3D Sculpted',
    examples: ['Tufted wall art', 'Decorative rugs', 'Personalised name rugs', 'Luxury interior accents']
  },
  {
    id: 'commercial',
    title: 'Restaurant & Commercial Décor',
    tagline: 'Artisanal Hospitality & Retail Statements',
    description: 'Restaurant logo mats, custom textile wall décor, reception artwork and business branding pieces engineered for style and high foot-traffic.',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
    itemsCount: '16 Spaces',
    badge: 'High Traffic',
    examples: ['Restaurant logo mats', 'Custom wall décor', 'Reception artwork', 'Business branding pieces']
  },
  {
    id: 'gifts',
    title: 'Personalised Gifts & Accessories',
    tagline: 'Micro-Tufted Everyday Joy',
    description: 'Custom tufted keychains, tactile mini desk rugs, monogram name accessories and heartwarming special occasion gifts.',
    image: '/images/collection-gifts.jpg',
    itemsCount: 'Starts ₹499',
    badge: 'Hand Carved',
    examples: ['Custom tufted keychains', 'Mini rugs & mug coasters', 'Name accessories', 'Special occasion gifts']
  },
  {
    id: 'custom',
    title: 'Custom Tufted Creations',
    tagline: 'Your Vision. Handcrafted Without Limits.',
    description: 'Customer-designed artwork, organic bespoke shapes, special colour combinations and 100% made-to-order commissions tailored to your specifications.',
    image: '/images/hero-tufted-rug.jpg',
    itemsCount: 'Bespoke Quote',
    badge: 'Infinite Possibilities',
    examples: ['Customer-designed artwork', 'Custom shapes & contours', 'Special colour combinations', 'Made-to-order commissions']
  }
];
