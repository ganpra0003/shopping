"use client";

import { useState } from 'react';
import { Product } from '../lib/products';
import { Heart, Star, Minus, Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useWishlist } from '../lib/WishlistContext';

export default function ProductDetailClient({ product }: { product: Product }) {
  const router = useRouter();
  const { isWished, toggleWishlist } = useWishlist();
  const wished = isWished(product.id);
  const images = [
    product.image,
    product.hoverImage,
    product.detailImages?.[0] || `https://placehold.co/600x800/e2e8f0/64748b?text=Detail+1`,
    product.detailImages?.[1] || `https://placehold.co/600x800/e2e8f0/64748b?text=Detail+2`,
  ];
  
  const [activeImage, setActiveImage] = useState(images[0]);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCartClick = (action: 'cart' | 'buy') => {
    if (product.colors.length > 0 && !selectedColor) {
      setErrorMsg('색상을 선택해주세요.');
      return;
    }
    if (product.sizes.length > 0 && !selectedSize) {
      setErrorMsg('사이즈를 선택해주세요.');
      return;
    }
    setErrorMsg('');
    
    const cartItemsStr = localStorage.getItem('4910_cart');
    let cartItems = cartItemsStr ? JSON.parse(cartItemsStr) : [];
    
    const cartItemId = `${product.id}-${selectedColor}-${selectedSize}`;
    const existingItemIndex = cartItems.findIndex((item: any) => item.id === cartItemId);
    
    if (existingItemIndex > -1) {
      cartItems[existingItemIndex].quantity += quantity;
    } else {
      cartItems.push({
        id: cartItemId,
        productId: product.id,
        brand: product.brand,
        name: product.name,
        image: product.image,
        color: selectedColor,
        size: selectedSize,
        price: product.price,
        salePrice: product.salePrice,
        quantity: quantity
      });
    }
    
    localStorage.setItem('4910_cart', JSON.stringify(cartItems));

    if (action === 'buy') {
      router.push('/cart'); // 바로 구매도 일단 장바구니로 이동하여 결제하게 구현
    } else {
      alert('장바구니에 담겼습니다.');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 md:py-12">
      {/* Top section: Gallery + Info */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-14 mb-20">
        
        {/* Left: 55% Gallery */}
        <div className="w-full md:w-[55%] flex flex-col md:flex-row-reverse gap-4">
          <div className="w-full aspect-[3/4] bg-gray-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={activeImage} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="flex md:flex-col gap-3 overflow-x-auto md:w-20 flex-shrink-0 scrollbar-hide pb-2 md:pb-0">
            {images.map((img, idx) => (
              <button 
                key={idx} 
                onClick={() => setActiveImage(img)}
                className={`w-16 md:w-full aspect-[3/4] flex-shrink-0 border-[2px] transition-colors ${activeImage === img ? 'border-black' : 'border-transparent opacity-60 hover:opacity-100'}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img} alt={`thumbnail ${idx}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right: 45% Info */}
        <div className="w-full md:w-[45%] flex flex-col">
          <h2 className="text-[14px] font-extrabold text-gray-900 mb-2 border-b-[1.5px] border-black pb-2 inline-block self-start">{product.brand}</h2>
          <h1 className="text-[26px] font-bold tracking-tight mb-4 leading-tight">{product.name}</h1>
          
          <div className="flex items-center gap-2 mb-6 text-[13px] text-gray-500 font-medium">
            <div className="flex items-center text-black">
              <Star className="w-4 h-4 fill-black mr-1" />
              {product.rating}
            </div>
            <span className="text-gray-300">|</span>
            <span className="underline underline-offset-4 cursor-pointer hover:text-black">리뷰 {product.reviewCount}개</span>
          </div>

          <div className="border-t border-gray-200 py-6 mb-6">
            <div className="flex items-center gap-2.5 mb-2">
              {product.discount > 0 && <span className="text-[28px] font-black text-red-600">{product.discount}%</span>}
              <span className="text-[28px] font-black tracking-tighter">{product.salePrice.toLocaleString()}원</span>
            </div>
            {product.discount > 0 && <span className="text-[14px] text-gray-400 line-through font-medium">{product.price.toLocaleString()}원</span>}
            
            <div className="mt-5 text-[13px] text-gray-600 dark:text-gray-300 space-y-2">
              <div className="flex">
                <span className="w-24 font-bold text-gray-900 dark:text-white">배송정보</span>
                <span className="dark:text-white">{product.freeShipping ? '무료배송' : '3,000원 (50,000원 이상 무료배송)'}</span>
              </div>
            </div>
          </div>

          {/* Options */}
          <div className="flex flex-col gap-6 mb-8 bg-gray-50 p-6">
            {product.colors.length > 0 && (
              <div>
                <span className="block text-[12px] font-bold text-gray-700 mb-3">COLOR</span>
                <div className="flex gap-2 flex-wrap">
                  {product.colors.map(color => (
                    <button 
                      key={color}
                      onClick={() => { setSelectedColor(color); setErrorMsg(''); }}
                      className={`px-5 py-2.5 text-[12px] border bg-white text-gray-700 ${selectedColor === color ? 'border-gray-700 font-bold' : 'border-gray-300 hover:border-gray-500'}`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {product.sizes.length > 0 && (
              <div>
                <span className="block text-[12px] font-bold text-gray-700 mb-3">SIZE</span>
                <div className="flex gap-2 flex-wrap">
                  {product.sizes.map(size => (
                    <button 
                      key={size}
                      onClick={() => { setSelectedSize(size); setErrorMsg(''); }}
                      className={`px-5 py-2.5 text-[12px] border bg-white text-gray-700 ${selectedSize === size ? 'border-gray-700 font-bold' : 'border-gray-300 hover:border-gray-500'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center justify-between pt-4 mt-2 border-t border-gray-200">
              <span className="text-[12px] font-bold text-gray-700">수량</span>
              <div className="flex items-center border border-gray-300 bg-white text-gray-700">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:bg-gray-50"><Minus className="w-3.5 h-3.5" /></button>
                <span className="w-12 text-center text-[13px] font-medium">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-gray-50"><Plus className="w-3.5 h-3.5" /></button>
              </div>
            </div>
          </div>

          {errorMsg && <p className="text-red-600 text-[13px] font-bold mb-4">{errorMsg}</p>}

          <div className="flex gap-2">
            <button 
              onClick={() => toggleWishlist(product.id)} 
              className={`p-4 border hover:bg-gray-50 transition-colors flex items-center justify-center group ${wished ? 'border-red-300 bg-red-50' : 'border-gray-300 dark:border-gray-600 dark:bg-transparent dark:hover:bg-gray-800'}`}
            >
              <Heart className={`w-6 h-6 group-hover:scale-110 transition-transform ${wished ? 'fill-red-500 text-red-500' : 'fill-none text-gray-900 dark:text-white'}`} strokeWidth={1.5} />
            </button>
            <button onClick={() => handleCartClick('cart')} className="flex-1 border border-black bg-white text-black font-bold hover:bg-gray-50 transition-colors">
              장바구니
            </button>
            <button onClick={() => handleCartClick('buy')} className="flex-1 bg-black text-white font-bold hover:opacity-90 transition-opacity">
              바로 구매
            </button>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-gray-900 pt-16">
        <div className="flex gap-8 border-b border-gray-200 mb-16 text-[15px] font-bold overflow-x-auto whitespace-nowrap justify-center">
          <a href="#desc" className="pb-4 border-b-2 border-black">상품 설명</a>
          <a href="#info" className="pb-4 border-b-2 border-transparent text-gray-400 hover:text-black transition-colors">상품 정보</a>
          <a href="#review" className="pb-4 border-b-2 border-transparent text-gray-400 hover:text-black transition-colors">리뷰 ({product.reviewCount})</a>
          <a href="#qna" className="pb-4 border-b-2 border-transparent text-gray-400 hover:text-black transition-colors">문의</a>
          <a href="#shipping" className="pb-4 border-b-2 border-transparent text-gray-400 hover:text-black transition-colors">배송/교환/환불</a>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-32 text-center text-sm leading-relaxed">
          <section id="desc" className="min-h-[500px]">
            <p className="text-gray-700 text-[15px] font-medium leading-loose mb-16">{product.description}</p>
            <div className="flex flex-col gap-4 max-w-xl mx-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={images[2]} alt="detail description 1" className="w-full h-auto" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={images[3]} alt="detail description 2" className="w-full h-auto" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
