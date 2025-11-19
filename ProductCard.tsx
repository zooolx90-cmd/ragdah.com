import React from 'react';
import { Product } from '../types';
import { ShoppingCart, Heart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-brand-100 flex flex-col h-full">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 relative">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <button className="absolute top-4 left-4 p-2 rounded-full bg-white/80 text-brand-400 hover:text-brand-600 hover:bg-white transition-colors">
          <Heart size={20} />
        </button>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="mb-2">
          <span className="text-xs font-medium text-brand-500 bg-brand-50 px-2 py-1 rounded-full">
            {product.category}
          </span>
        </div>
        <h3 className="text-xl font-bold text-brand-900 mb-2">{product.name}</h3>
        <p className="text-sm text-brand-700 mb-4 line-clamp-2 flex-1">{product.description}</p>
        
        <div className="flex flex-wrap gap-1 mb-4">
            {product.benefits.slice(0, 2).map((benefit, idx) => (
                <span key={idx} className="text-xs text-gray-500 border border-gray-200 px-1 py-0.5 rounded">
                    {benefit}
                </span>
            ))}
        </div>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-2xl font-bold text-brand-800">{product.price} ج.م</span>
          <button className="flex items-center gap-2 bg-brand-900 text-white px-4 py-2 rounded-lg hover:bg-brand-700 transition-colors shadow-md active:scale-95 transform">
            <ShoppingCart size={18} />
            <span>إضافة</span>
          </button>
        </div>
      </div>
    </div>
  );
};