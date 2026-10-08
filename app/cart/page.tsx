"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Minus, Plus, X, Heart } from 'lucide-react';

interface CartItem {
  id: string;
  productId: string;
  brand: string;
  name: string;
  image: string;
  color: string;
  size: string;
  price: number;
  salePrice: number;
  quantity: number;
}

export default function CartPage() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedItemIds, setSelectedItemIds] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem('4910_cart');
    if (savedCart) {
      const parsed = JSON.parse(savedCart);
      setCartItems(parsed);
      setSelectedItemIds(parsed.map((item: CartItem) => item.id));
    }
    setIsLoaded(true);
  }, []);

  const saveCart = (items: CartItem[]) => {
    setCartItems(items);
    localStorage.setItem('4910_cart', JSON.stringify(items));
  };

  const handleQuantityChange = (id: string, delta: number) => {
    const newItems = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      }
      return item;
    });
    saveCart(newItems);
  };

  const handleRemove = (id: string) => {
    const newItems = cartItems.filter(item => item.id !== id);
    saveCart(newItems);
    setSelectedItemIds(prev => prev.filter(selectedId => selectedId !== id));
  };

  const toggleSelect = (id: string) => {
    setSelectedItemIds(prev => 
      prev.includes(id) ? prev.filter(selectedId => selectedId !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedItemIds.length === cartItems.length) {
      setSelectedItemIds([]);
    } else {
      setSelectedItemIds(cartItems.map(item => item.id));
    }
  };

  // Calculations
  const selectedItems = cartItems.filter(item => selectedItemIds.includes(item.id));
  const totalOriginalPrice = selectedItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const totalSalePrice = selectedItems.reduce((acc, item) => acc + (item.salePrice * item.quantity), 0);
  const totalDiscount = totalOriginalPrice - totalSalePrice;
  const shippingFee = totalSalePrice >= 50000 || totalSalePrice === 0 ? 0 : 3000;
  const finalPrice = totalSalePrice + shippingFee;

  if (!isLoaded) return null;

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-40 flex flex-col items-center justify-center">
        <div className="mb-6 text-gray-300">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
        </div>
        <p className="text-gray-500 mb-8 font-medium text-[15px]">장바구니가 비어 있습니다.</p>
        <Link href="/category" className="bg-black text-white px-10 py-4 font-bold hover:bg-gray-800 transition-colors text-[14px]">
          쇼핑하러 가기
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-[28px] font-black tracking-tighter mb-10 text-center">CART</h1>
      
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left: Cart Items */}
        <div className="flex-1">
          <div className="flex items-center justify-between border-b-[2px] border-black pb-4 mb-4">
            <label className="flex items-center gap-2 text-[13px] font-bold cursor-pointer">
              <input 
                type="checkbox" 
                checked={selectedItemIds.length === cartItems.length && cartItems.length > 0}
                onChange={toggleSelectAll}
                className="accent-black w-4 h-4 cursor-pointer"
              />
              전체 선택 ({selectedItemIds.length}/{cartItems.length})
            </label>
            <button 
              onClick={() => {
                const newItems = cartItems.filter(item => !selectedItemIds.includes(item.id));
                saveCart(newItems);
                setSelectedItemIds([]);
              }}
              className="text-[12px] text-gray-500 hover:text-black font-medium"
            >
              선택 삭제
            </button>
          </div>

          <div className="flex flex-col gap-6">
            {cartItems.map(item => (
              <div key={item.id} className="flex gap-4 border-b border-gray-200 pb-6">
                <input 
                  type="checkbox" 
                  checked={selectedItemIds.includes(item.id)}
                  onChange={() => toggleSelect(item.id)}
                  className="accent-black w-4 h-4 mt-2 cursor-pointer"
                />
                <Link href={`/product/${item.productId}`} className="w-24 md:w-32 aspect-[3/4] bg-gray-100 flex-shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </Link>
                
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-[12px] font-extrabold text-gray-900 mb-1">{item.brand}</h3>
                      <Link href={`/product/${item.productId}`} className="text-[14px] font-bold text-gray-800 hover:underline underline-offset-4 line-clamp-2 md:line-clamp-1">
                        {item.name}
                      </Link>
                      {(item.color || item.size) && (
                        <p className="text-[12px] text-gray-500 mt-2 font-medium bg-gray-50 inline-block px-2 py-1">
                          [옵션] {item.color && item.color}{item.color && item.size && ' / '}{item.size && item.size}
                        </p>
                      )}
                    </div>
                    <div className="flex gap-3 text-gray-400 ml-4">
                      <button className="hover:text-black transition-colors"><Heart className="w-5 h-5" strokeWidth={1.5} /></button>
                      <button onClick={() => handleRemove(item.id)} className="hover:text-black transition-colors"><X className="w-5 h-5" strokeWidth={1.5} /></button>
                    </div>
                  </div>

                  <div className="flex justify-between items-end mt-4">
                    <div className="flex items-center border border-gray-300">
                      <button onClick={() => handleQuantityChange(item.id, -1)} className="p-2 hover:bg-gray-50"><Minus className="w-3.5 h-3.5" /></button>
                      <span className="w-10 text-center text-[13px] font-medium">{item.quantity}</span>
                      <button onClick={() => handleQuantityChange(item.id, 1)} className="p-2 hover:bg-gray-50"><Plus className="w-3.5 h-3.5" /></button>
                    </div>
                    <div className="text-right">
                      {item.price > item.salePrice && (
                        <p className="text-[12px] text-gray-400 line-through mb-0.5">{(item.price * item.quantity).toLocaleString()}원</p>
                      )}
                      <p className="text-[16px] font-black tracking-tighter text-gray-900">{(item.salePrice * item.quantity).toLocaleString()}원</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Order Summary */}
        <div className="w-full lg:w-[340px] flex-shrink-0">
          <div className="bg-gray-50 p-6 md:p-8 border border-gray-200 sticky top-24">
            <h2 className="text-[16px] font-extrabold mb-6 border-b-[2px] border-black pb-4">주문 요약</h2>
            
            <div className="flex flex-col gap-4 text-[14px] text-gray-600 mb-6 border-b border-gray-200 pb-6">
              <div className="flex justify-between">
                <span>상품 금액</span>
                <span className="font-bold text-gray-900">{totalOriginalPrice.toLocaleString()}원</span>
              </div>
              <div className="flex justify-between">
                <span>상품 할인</span>
                <span className="font-bold text-red-600">-{totalDiscount.toLocaleString()}원</span>
              </div>
              <div className="flex justify-between">
                <span>배송비</span>
                <span className="font-bold text-gray-900">
                  {shippingFee === 0 ? '무료' : `${shippingFee.toLocaleString()}원`}
                </span>
              </div>
            </div>

            <div className="flex justify-between items-end mb-8">
              <span className="text-[15px] font-bold">총 결제금액</span>
              <span className="text-[26px] font-black tracking-tighter text-red-600">{finalPrice.toLocaleString()}원</span>
            </div>

            <button 
              onClick={() => {
                // Mock: save selected items to order memory or just go to /order
                // For simplicity, /order will just load the whole cart
                router.push('/order');
              }}
              className={`w-full py-4 font-bold text-white transition-all text-[15px] ${selectedItemIds.length > 0 ? 'bg-black hover:opacity-90 shadow-md' : 'bg-gray-300 cursor-not-allowed'}`}
              disabled={selectedItemIds.length === 0}
            >
              {selectedItemIds.length > 0 ? `${finalPrice.toLocaleString()}원 주문하기` : '상품을 선택해주세요'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}