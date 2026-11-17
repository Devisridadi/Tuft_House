export type ProductCategory = 
  | 'wedding' 
  | 'promotional' 
  | 'home-decor' 
  | 'commercial' 
  | 'gifts' 
  | 'custom';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  subtitle: string;
  price: number;
  isQuoteBased?: boolean;
  dimensions: string;
  availableSizes?: { name: string; dimensions: string; price: number }[];
  material: string;
  pileType: 'Cut Pile' | 'Loop Pile' | '3D Sculpted Relief' | 'Dual Texture' | 'Fine Loop & Punch Needle Relief' | 'Micro-Loop Pile';
  pileHeight: string;
  leadTime: string;
  images: string[];
  description: string;
  features: string[];
  customizationOptions: string[];
  inStock: boolean;
  isMadeToOrder: boolean;
  featured?: boolean;
  rating: number;
  reviewCount: number;
  tags: string[];
}

export interface CustomOrderRequest {
  id: string;
  createdAt: string;
  customerName: string;
  email: string;
  phone: string;
  category: string;
  dimensions: string;
  customWidth?: string;
  customHeight?: string;
  dimensionUnit: 'feet' | 'inches' | 'cm';
  preferredColors: string[];
  pileStyle: string;
  quantity: number;
  requiredDeliveryDate: string;
  budgetRange?: string;
  description: string;
  customText?: string;
  referenceImage?: string;
  status: 'new' | 'reviewed' | 'quoted' | 'in_production' | 'completed';
  estimatedPriceRange?: string;
  studioNotes?: string;
}

export interface CartItem {
  product: Product;
  selectedSize: string;
  customNote?: string;
  quantity: number;
  price: number;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'wedding' | 'promotional' | 'home-decor' | 'commercial' | 'gifts' | 'custom';
  categoryLabel: string;
  client: string;
  location: string;
  year: string;
  dimensions: string;
  description: string;
  image: string;
  beforeAfterImage?: string;
  highlights: string[];
  featured?: boolean;
}

export interface Review {
  id: string;
  author: string;
  occasion: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  productName: string;
  verified: boolean;
}
