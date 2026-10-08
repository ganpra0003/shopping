"use client";

import { Heart } from 'lucide-react';
import { Product } from '../lib/products';
import Link from 'next/link';
import { useWishlist } from '../lib/WishlistContext';

export default function ProductCard({ product, rank }: { product: Product, rank?: number }) {
  const { isWished, toggleWishlist } = useWishlist();
  const wished = isWished(product.id);

  return (
    <Link href={`/product/${product.id}`} className="flex flex-col group cursor-pointer">
      <div className="relative aspect-[3/4] w-full bg-gray-100 mb-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={product.image} 
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={product.hoverImage} 
          alt={`${product.name} hover`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
        
        {/* Badges / Rank */}
        <div className="absolute top-0 left-0 flex flex-col gap-[2px] p-2">
          {rank !== undefined ? (
            <span className="bg-black text-white text-[11px] font-black w-6 h-6 flex items-center justify-center">
              {rank < 10 ? `0${rank}` : rank}
            </span>
          ) : (
            <>
              {product.isSale && <span className="bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5">SALE</span>}
              {product.isNew && <span className="bg-black text-white text-[10px] font-bold px-1.5 py-0.5">NEW</span>}
            </>
          )}
        </div>
        
        {/* Wish Icon */}
        <button 
          className="absolute bottom-2 right-2 p-1.5 bg-white/80 hover:bg-white transition-colors"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
        >
          <Heart 
            className={`w-[18px] h-[18px] transition-colors ${wished ? 'fill-red-500 text-red-500' : 'fill-none text-gray-900'}`} 
            strokeWidth={1.5} 
          />
        </button>
      </div>
      
      <div className="flex flex-col mt-2">
        <span className="text-[10px] font-extrabold text-gray-500 mb-0.5">{product.brand}</span>
        <h3 className="text-[12px] text-gray-500 line-clamp-1 mb-1.5 leading-tight group-hover:underline underline-offset-2">{product.name}</h3>
        
        <div className="flex items-baseline gap-1.5 mb-1.5">
          {product.discount > 0 && <span className="text-[13px] font-black text-red-600">{product.discount}%</span>}
          <span className="text-[13px] font-black tracking-tighter text-gray-600">{product.salePrice.toLocaleString()}</span>
          {product.discount > 0 && <span className="text-[10px] text-gray-400 line-through font-medium">{product.price.toLocaleString()}</span>}
        </div>

        <div className="flex items-center gap-1.5 mt-0.5">
          {product.freeShipping && <span className="border border-gray-200 text-gray-500 text-[9px] font-bold px-1 py-[1px]">무료배송</span>}
          <div className="flex items-center gap-1 text-[10px] text-gray-400 font-medium">
            <span>리뷰 {product.reviewCount}</span>
            <span className="text-gray-300">·</span>
            <span>찜 {product.likeCount}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}