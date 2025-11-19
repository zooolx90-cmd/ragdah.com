import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-brand-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-brand-50 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-right">
              <h1 className="text-4xl tracking-tight font-extrabold text-brand-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">اكتشفي سر الجمال</span>{' '}
                <span className="block text-brand-600 xl:inline">مع رغدة</span>
              </h1>
              <p className="mt-3 text-base text-brand-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                مجموعة حصرية من مستحضرات التجميل الطبيعية المصممة لتبرز جمالك العربي الأصيل. دمجنا حكمة الطبيعة مع أحدث تقنيات العلم.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-4">
                <div className="rounded-md shadow">
                  <a href="#products" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-600 hover:bg-brand-700 md:py-4 md:text-lg transition-colors">
                    تصفحي المجموعة
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <button 
                    onClick={() => document.getElementById('ai-consultant-trigger')?.click()}
                    className="w-full flex items-center justify-center px-8 py-3 border border-brand-600 text-base font-medium rounded-md text-brand-700 bg-brand-100 hover:bg-brand-200 md:py-4 md:text-lg transition-colors"
                  >
                    استشارة ذكية ✨
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full opacity-90 hover:opacity-100 transition-opacity duration-700"
          src="https://picsum.photos/800/600?random=10"
          alt="Woman with beautiful makeup"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-50 to-transparent lg:via-brand-50/20"></div>
      </div>
    </div>
  );
};