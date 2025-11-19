export enum ProductCategory {
  SKINCARE = 'العناية بالبشرة',
  MAKEUP = 'مكياج',
  FRAGRANCE = 'عطور',
  SETS = 'مجموعات الهدايا'
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  imageUrl: string;
  benefits: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}
