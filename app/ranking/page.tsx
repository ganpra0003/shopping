"use client";

import { useState } from 'react';
import { products } from '../../lib/products';
import ProductGrid from '../../components/ProductGrid';

const CATEGORIES = ['전체', '상의', '하의', '아우터', '신발', '가방', '액세서리'];

export default function RankingPage() {
  const [activeCategory, setActiveCategory] = useState('전체');

  // Calculate score: mock ranking based on likeCount and reviewCount
  const rankedProducts = [...products].sort((a, b) => {
    const scoreA = (a.likeCount * 2) + (a.reviewCount * 3);
    const scoreB = (b.likeCount * 2) + (b.reviewCount * 3);
    return scoreB - scoreA;
  });

  const filteredProducts = activeCategory === '전체'
    ? rankedProducts
    : rankedProducts.filter(p => p.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-[28px] font-black tracking-tighter mb-8">RANKING</h1>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-[14px] font-bold transition-colors rounded-full ${
                activeCategory === category
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <ProductGrid products={filteredProducts.slice(0, 50)} showRank={true} />
    </div>
  );
}