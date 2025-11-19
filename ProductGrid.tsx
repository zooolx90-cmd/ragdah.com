import React, { useState } from 'react';
import { ProductCard } from './ProductCard';
import { PRODUCTS } from '../constants';
import { ProductCategory } from '../types';

export const ProductGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...Object.values(ProductCategory)];

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-brand-900 sm:text-4xl">
            مجموعتنا المختارة
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-brand-600 mx-auto">
            منتجات صُنعت بكل حب لتليق بجمالك
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-brand-600 text-white shadow-lg scale-105'
                  : 'bg-brand-50 text-brand-800 hover:bg-brand-100'
              }`}
            >
              {cat === 'All' ? 'الكل' : cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
