"use client";

import { useState } from 'react';
import { products } from '../../lib/products';
import ProductGrid from '../../components/ProductGrid';

export default function SalePage() {
  const [sortOption, setSortOption] = useState('discount_high');

  // Filter products that are on sale
  const saleProducts = products.filter(p => p.isSale || p.discount > 0);

  const sortedProducts = [...saleProducts].sort((a, b) => {
    switch (sortOption) {
      case 'discount_high':
        return b.discount - a.discount;
      case 'price_low':
        return a.salePrice - b.salePrice;
      case 'price_high':
        return b.salePrice - a.salePrice;
      default:
        return 0;
    }
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col items-center mb-10">
        <h1 className="text-[28px] font-black tracking-tighter mb-2 text-red-600">SALE</h1>
        <p className="text-gray-500 text-[14px] font-medium">최대 80% 할인 중인 상품들을 만나보세요.</p>
      </div>

      <div className="flex justify-between items-center mb-6">
        <span className="text-[13px] font-bold">전체 {sortedProducts.length}개</span>
        
        <select 
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="h-9 px-2 border border-gray-300 text-[12px] font-bold focus:outline-none focus:border-black cursor-pointer"
        >
          <option value="discount_high">할인율 높은순</option>
          <option value="price_low">낮은 가격순</option>
          <option value="price_high">높은 가격순</option>
        </select>
      </div>

      <ProductGrid products={sortedProducts} />
    </div>
  );
}