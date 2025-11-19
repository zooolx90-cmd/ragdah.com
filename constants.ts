import { Product, ProductCategory } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'سيروم النضارة الذهبي',
    description: 'سيروم فاخر يحتوي على رقائق الذهب عيار 24 وحمض الهيالورونيك لترطيب عميق.',
    price: 1250,
    category: ProductCategory.SKINCARE,
    imageUrl: 'https://picsum.photos/400/400?random=1',
    benefits: ['ترطيب عميق', 'مكافحة الشيخوخة', 'إشراقة فورية']
  },
  {
    id: 'p2',
    name: 'أحمر شفاه رغدة المخملي',
    description: 'أحمر شفاه غير لامع يدوم طويلاً بتركيبة مرطبة ولون أحمر كلاسيكي.',
    price: 550,
    category: ProductCategory.MAKEUP,
    imageUrl: 'https://picsum.photos/400/400?random=2',
    benefits: ['ثبات طويل', 'ملمس مخملي', 'لون غني']
  },
  {
    id: 'p3',
    name: 'كريم الليل المجدد',
    description: 'يعمل أثناء النوم لإصلاح خلايا البشرة وتجديد حيويتها.',
    price: 950,
    category: ProductCategory.SKINCARE,
    imageUrl: 'https://picsum.photos/400/400?random=3',
    benefits: ['تجديد الخلايا', 'تغذية ليلية', 'تهدئة البشرة']
  },
  {
    id: 'p4',
    name: 'عطر الياسمين الملكي',
    description: 'عطر شرقي زهري يجمع بين الياسمين والعود الفاخر.',
    price: 2200,
    category: ProductCategory.FRAGRANCE,
    imageUrl: 'https://picsum.photos/400/400?random=4',
    benefits: ['رائحة فواحة', 'ثبات عالي', 'تصميم فاخر']
  },
  {
    id: 'p5',
    name: 'لوحة ظلال العيون الصحراوية',
    description: 'ألوان ترابية دافئة مستوحاة من رمال الصحراء العربية.',
    price: 1100,
    category: ProductCategory.MAKEUP,
    imageUrl: 'https://picsum.photos/400/400?random=5',
    benefits: ['ألوان متنوعة', 'سهولة الدمج', 'صبغة قوية']
  },
  {
    id: 'p6',
    name: 'مجموعة العناية المتكاملة',
    description: 'مجموعة تحتوي على غسول، تونر، ومرطب لبشرة مثالية.',
    price: 2800,
    category: ProductCategory.SETS,
    imageUrl: 'https://picsum.photos/400/400?random=6',
    benefits: ['روتين كامل', 'توفير في السعر', 'هدية مثالية']
  }
];

export const SYSTEM_INSTRUCTION = `
You are "Ragdah AI", a professional and elegant beauty consultant for "Ragdah Cosmetic" (رغدة لمستحضرات التجميل).
Your goal is to help customers choose the right products from our catalog based on their skin type, concerns, or preferences.
Speak in a friendly, sophisticated, and helpful Arabic tone (Modern Standard Arabic).

Here is our Product Catalog:
${JSON.stringify(PRODUCTS.map(p => ({ name: p.name, category: p.category, benefits: p.benefits, price: p.price })))}

Rules:
1. Only recommend products from the list above.
2. If the user asks about a skin concern (e.g., dry skin), recommend the relevant product (e.g., Serums or Moisturizers) and explain why.
3. Be brief and polite.
4. Use emojis sparingly but effectively to maintain a beauty aesthetic (✨, 🌸, 💄).
5. If the user asks something unrelated to beauty or cosmetics, politely steer them back to Ragdah Cosmetic products.
`;