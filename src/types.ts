export type PageRoute =
  | 'home'
  | 'about'
  | 'products'
  | 'services'
  | 'industries'
  | 'configurator'
  | 'certifications'
  | 'case-studies'
  | 'gallery'
  | 'blog'
  | 'careers'
  | 'faq'
  | 'contact'
  | 'privacy'
  | 'terms'
  | 'sitemap';

export interface ProductFinish {
  id: string;
  name: string;
  type: 'wood' | 'ral';
  code?: string; // e.g. RAL 8017
  hex: string;
  texturePattern?: string;
}

export interface DoorProduct {
  id: string;
  title: string;
  category: 'doors' | 'windows';
  subCategory: 'plain' | 'embossed' | 'double-grill' | 'fire' | 'glazed' | 'sliding';
  shortDesc: string;
  fullDesc: string;
  imageUrl: string;
  features: string[];
  specifications: {
    sheetThickness: string;
    coreInfill: string;
    frameGauge: string;
    fireRating?: string;
    standardSizes: string[];
    hardwareOptions: string[];
    warranty: string;
  };
  suitableFor: string[];
  basePricePerSqFt: number;
}

export interface CaseStudy {
  id: string;
  title: string;
  clientName: string;
  industry: string;
  location: string;
  doorsSupplied: number;
  doorTypes: string[];
  challenge: string;
  solution: string;
  results: string[];
  imageUrl: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  author: string;
  date: string;
  category: string;
  readTime: string;
  imageUrl: string;
  tags: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Fire Safety' | 'Customization' | 'Installation & Maintenance' | 'Ordering';
}

export interface QuoteRequest {
  customerName: string;
  email: string;
  phone: string;
  companyName?: string;
  doorType: string;
  widthFt: number;
  heightFt: number;
  quantity: number;
  finishId: string;
  hardwareAddons: string[];
  projectLocation: string;
  notes?: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  preferredContact: 'phone' | 'email' | 'whatsapp';
}
