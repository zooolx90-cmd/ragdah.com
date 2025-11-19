import React, { useState } from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-right">
          <div>
            <h3 className="text-2xl font-bold mb-4">Ragdah Cosmetic</h3>
            <p className="text-brand-200 text-sm leading-relaxed">
              نؤمن بأن الجمال ينبع من الثقة. منتجاتنا مصممة لتعزيز جمالك الطبيعي بمكونات آمنة وفاخرة.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-100">روابط سريعة</h4>
            <ul className="space-y-2 text-sm text-brand-200">
              <li><a href="#" className="hover:text-white transition-colors">الرئيسية</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">المتجر</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">من نحن</a></li>
              <li><a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-100">تواصل معنا</h4>
            <p className="text-brand-200 text-sm mb-4">القاهرة، جمهورية مصر العربية</p>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#" className="text-brand-300 hover:text-white transition-colors"><Instagram size={24} /></a>
              <a href="#" className="text-brand-300 hover:text-white transition-colors"><Facebook size={24} /></a>
              <a href="#" className="text-brand-300 hover:text-white transition-colors"><Twitter size={24} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-brand-800 mt-8 pt-8 text-center text-sm text-brand-300">
          &copy; {new Date().getFullYear()} Ragdah Cosmetic. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
};