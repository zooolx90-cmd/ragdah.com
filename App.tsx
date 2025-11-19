import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { AIConsultant } from './components/AIConsultant';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-50 flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <div className="relative">
            {/* Decorative blurred shapes for aesthetic background */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 left-0 -ml-20 -mt-20 w-96 h-96 bg-gold-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-32 left-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
            
            <ProductGrid />
        </div>
        
        <section id="about" className="py-20 bg-white relative overflow-hidden">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <h2 className="text-3xl font-bold text-brand-900 mb-8">لماذا رغدة؟</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 <div className="p-6 rounded-xl bg-brand-50 hover:shadow-lg transition-shadow">
                    <div className="text-4xl mb-4">🌿</div>
                    <h3 className="font-bold text-lg text-brand-800 mb-2">مكونات طبيعية</h3>
                    <p className="text-brand-600 text-sm">نختار أجود المكونات الطبيعية العضوية لضمان سلامة بشرتك.</p>
                 </div>
                 <div className="p-6 rounded-xl bg-brand-50 hover:shadow-lg transition-shadow">
                    <div className="text-4xl mb-4">🐰</div>
                    <h3 className="font-bold text-lg text-brand-800 mb-2">خالية من القسوة</h3>
                    <p className="text-brand-600 text-sm">منتجاتنا لم يتم اختبارها على الحيوانات أبداً، نحن نحب الطبيعة.</p>
                 </div>
                 <div className="p-6 rounded-xl bg-brand-50 hover:shadow-lg transition-shadow">
                    <div className="text-4xl mb-4">💎</div>
                    <h3 className="font-bold text-lg text-brand-800 mb-2">جودة فاخرة</h3>
                    <p className="text-brand-600 text-sm">تركيبات متطورة تمنحك نتائج فعالة وملمساً فاخراً.</p>
                 </div>
              </div>
           </div>
        </section>
      </main>

      <AIConsultant />
      <Footer />
    </div>
  );
};

export default App;