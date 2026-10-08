"use client";

import { products } from '../../lib/products';
import { useWishlist } from '../../lib/WishlistContext';
import ProductGrid from '../../components/ProductGrid';
import Link from 'next/link';
import { Heart } from 'lucide-react';

export default function WishlistPage() {
  const { wishlist } = useWishlist();
  const wishedProducts = products.filter(p => wishlist.includes(p.id));

  if (wishedProducts.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-40 flex flex-col items-center justify-center">
        <div className="mb-6 text-gray-300">
          <Heart className="w-16 h-16" strokeWidth={1} />
        </div>
        <p className="text-gray-500 mb-8 font-medium text-[15px]">아직 찜한 상품이 없습니다.</p>
        <Link href="/category" className="bg-black text-white px-10 py-4 font-bold hover:bg-gray-800 transition-colors text-[14px]">
          쇼핑하러 가기
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-[28px] font-black tracking-tighter mb-2">WISHLIST</h1>
        <p className="text-[13px] text-gray-500">찜한 상품 {wishedProducts.length}개</p>
      </div>
      <ProductGrid products={wishedProducts} />
    </div>
  );
}