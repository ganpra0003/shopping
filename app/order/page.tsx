"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '../../lib/AuthContext';

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

export default function OrderPage() {
  const router = useRouter();
  const { isLoggedIn, user } = useAuth();
  
  const [orderItems, setOrderItems] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form states
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [detailAddress, setDetailAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit_card');
  const [error, setError] = useState('');

  useEffect(() => {
    // If user is logged in, pre-fill some fields
    if (user) {
      setName(user.name);
      setPhone(user.phone);
    }
    
    const savedCart = localStorage.getItem('4910_cart');
    if (savedCart) {
      setOrderItems(JSON.parse(savedCart));
    }
    setIsLoaded(true);
  }, [user]);

  // Calculations
  const totalOriginalPrice = orderItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const totalSalePrice = orderItems.reduce((acc, item) => acc + (item.salePrice * item.quantity), 0);
  const totalDiscount = totalOriginalPrice - totalSalePrice;
  const shippingFee = totalSalePrice >= 50000 || totalSalePrice === 0 ? 0 : 3000;
  const finalPrice = totalSalePrice + shippingFee;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (orderItems.length === 0) {
      setError('주문할 상품이 없습니다.');
      return;
    }
    if (!name.trim()) { setError('받으시는 분 이름을 입력해주세요.'); return; }
    if (!phone.trim()) { setError('휴대폰 번호를 입력해주세요.'); return; }
    if (!address.trim()) { setError('배송 주소를 입력해주세요.'); return; }
    
    // Mock checkout process
    // In a real app, we would send this data to a backend and process payment
    
    // Clear cart upon successful order
    localStorage.removeItem('4910_cart');
    
    // Show success screen
    setIsSuccess(true);
  };

  if (!isLoaded) return null;

  if (isSuccess) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-40 flex flex-col items-center justify-center">
        <div className="mb-6 w-16 h-16 bg-black rounded-full flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h1 className="text-[28px] font-black tracking-tighter mb-4">주문이 완료되었습니다</h1>
        <p className="text-gray-500 mb-10 font-medium text-[15px]">주문해주셔서 감사합니다. 안전하게 배송해 드리겠습니다.</p>
        
        <div className="flex gap-4">
          <Link href="/" className="border border-gray-300 bg-white text-black px-8 py-4 font-bold hover:bg-gray-50 transition-colors text-[14px]">
            쇼핑 계속하기
          </Link>
          <Link href="/mypage" className="bg-black text-white px-8 py-4 font-bold hover:bg-gray-800 transition-colors text-[14px]">
            마이페이지로 이동
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-[28px] font-black tracking-tighter mb-10 text-center">ORDER</h1>
      
      <form onSubmit={handleCheckout} className="flex flex-col lg:flex-row gap-10">
        {/* Left: Order Form */}
        <div className="flex-1 flex flex-col gap-10">
          
          {/* 1. Ordered Items */}
          <section>
            <h2 className="text-[18px] font-extrabold mb-4 pb-4 border-b-[2px] border-black">주문 상품 ({orderItems.length})</h2>
            {orderItems.length === 0 ? (
              <div className="py-10 text-center text-[14px] text-gray-500 border border-gray-200">
                주문할 상품이 없습니다.
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {orderItems.map(item => (
                  <div key={item.id} className="flex gap-4 border-b border-gray-200 pb-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.image} alt={item.name} className="w-20 md:w-24 aspect-[3/4] bg-gray-100 object-cover flex-shrink-0" />
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <h3 className="text-[12px] font-extrabold text-gray-900 mb-1">{item.brand}</h3>
                        <p className="text-[14px] font-bold text-gray-800 line-clamp-2 md:line-clamp-1">{item.name}</p>
                        {(item.color || item.size) && (
                          <p className="text-[12px] text-gray-500 mt-1 font-medium">
                            [옵션] {item.color && item.color}{item.color && item.size && ' / '}{item.size && item.size}
                          </p>
                        )}
                      </div>
                      <div className="flex justify-between items-end mt-2">
                        <span className="text-[13px] font-medium text-gray-600">수량: {item.quantity}개</span>
                        <p className="text-[15px] font-black tracking-tighter text-gray-900">{(item.salePrice * item.quantity).toLocaleString()}원</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* 2. Shipping Info */}
          <section>
            <h2 className="text-[18px] font-extrabold mb-4 pb-4 border-b-[2px] border-black">배송 정보</h2>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-[13px] font-bold mb-2">받으시는 분</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="이름을 입력해주세요"
                  className="w-full h-11 px-4 border border-gray-300 text-[14px] placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <div>
                <label className="block text-[13px] font-bold mb-2">휴대폰 번호</label>
                <input 
                  type="tel" 
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  placeholder="010-0000-0000"
                  className="w-full h-11 px-4 border border-gray-300 text-[14px] placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <div>
                <label className="block text-[13px] font-bold mb-2">배송 주소</label>
                <div className="flex flex-col gap-2">
                  <input 
                    type="text" 
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    placeholder="기본 주소"
                    className="w-full h-11 px-4 border border-gray-300 text-[14px] placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
                  />
                  <input 
                    type="text" 
                    value={detailAddress}
                    onChange={e => setDetailAddress(e.target.value)}
                    placeholder="상세 주소 (선택)"
                    className="w-full h-11 px-4 border border-gray-300 text-[14px] placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 3. Payment Method */}
          <section>
            <h2 className="text-[18px] font-extrabold mb-4 pb-4 border-b-[2px] border-black">결제 수단</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { id: 'credit_card', label: '신용카드' },
                { id: 'kakao_pay', label: '카카오페이' },
                { id: 'naver_pay', label: '네이버페이' },
                { id: 'bank_transfer', label: '무통장입금' }
              ].map(method => (
                <button
                  key={method.id}
                  type="button"
                  onClick={() => setPaymentMethod(method.id)}
                  className={`h-12 border text-[13px] font-bold transition-colors ${
                    paymentMethod === method.id 
                      ? 'border-black bg-black text-white' 
                      : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                  }`}
                >
                  {method.label}
                </button>
              ))}
            </div>
          </section>

        </div>

        {/* Right: Order Summary */}
        <div className="w-full lg:w-[340px] flex-shrink-0">
          <div className="bg-gray-50 p-6 md:p-8 border border-gray-200 sticky top-24">
            <h2 className="text-[16px] font-extrabold mb-6 border-b-[2px] border-black pb-4">결제 정보</h2>
            
            <div className="flex flex-col gap-4 text-[14px] text-gray-600 mb-6 border-b border-gray-200 pb-6">
              <div className="flex justify-between">
                <span>총 상품 금액</span>
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
              <span className="text-[15px] font-bold">최종 결제 금액</span>
              <span className="text-[26px] font-black tracking-tighter text-red-600">{finalPrice.toLocaleString()}원</span>
            </div>

            {error && <p className="text-red-600 text-[13px] font-bold mb-4">{error}</p>}

            <button 
              type="submit"
              className={`w-full py-4 font-bold text-white transition-all text-[15px] ${orderItems.length > 0 ? 'bg-black hover:opacity-90 shadow-md' : 'bg-gray-300 cursor-not-allowed'}`}
              disabled={orderItems.length === 0}
            >
              {orderItems.length > 0 ? `${finalPrice.toLocaleString()}원 결제하기` : '주문할 상품이 없습니다'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}