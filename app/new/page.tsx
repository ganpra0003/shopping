"use client";

import { products } from '../../lib/products';
import ProductGrid from '../../components/ProductGrid';

export default function NewPage() {
  // Filter products that are marked as 'isNew'
  // Or just pick a random subset to simulate new arrivals if not enough isNew
  let newProducts = products.filter(p => p.isNew);
  
  if (newProducts.length === 0) {
    newProducts = [...products].slice(0, 20); // Fallback
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-[28px] font-black tracking-tighter mb-2">NEW ARRIVALS</h1>
        <p className="text-gray-500 text-[14px] font-medium">매일 업데이트되는 새로운 트렌드를 만나보세요.</p>
      </div>

      <ProductGrid products={newProducts} />
    </div>
  );
}