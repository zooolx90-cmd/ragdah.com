import React, { useState } from 'react';
import { Menu, X, ShoppingBag, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-brand-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-800 hover:text-brand-600 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="bg-brand-700 text-white p-2 rounded-full">
              <Sparkles size={20} />
            </div>
            <span className="font-bold text-2xl text-brand-900 tracking-wide">Ragdah Cosmetic</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="mr-10 flex items-baseline gap-8">
              <a href="#" className="text-brand-800 hover:text-brand-600 px-3 py-2 rounded-md text-lg font-medium transition-colors">الرئيسية</a>
              <a href="#products" className="text-brand-800 hover:text-brand-600 px-3 py-2 rounded-md text-lg font-medium transition-colors">منتجاتنا</a>
              <a href="#about" className="text-brand-800 hover:text-brand-600 px-3 py-2 rounded-md text-lg font-medium transition-colors">قصتنا</a>
              <a href="#contact" className="text-brand-800 hover:text-brand-600 px-3 py-2 rounded-md text-lg font-medium transition-colors">اتصل بنا</a>
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button className="text-brand-800 hover:text-gold-500 transition-colors p-2 relative">
              <ShoppingBag size={24} />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-brand-600 rounded-full">0</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-brand-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-brand-800 hover:bg-brand-50 block px-3 py-2 rounded-md text-base font-medium">الرئيسية</a>
            <a href="#products" className="text-brand-800 hover:bg-brand-50 block px-3 py-2 rounded-md text-base font-medium">منتجاتنا</a>
            <a href="#about" className="text-brand-800 hover:bg-brand-50 block px-3 py-2 rounded-md text-base font-medium">قصتنا</a>
            <a href="#contact" className="text-brand-800 hover:bg-brand-50 block px-3 py-2 rounded-md text-base font-medium">اتصل بنا</a>
          </div>
        </div>
      )}
    </nav>
  );
};