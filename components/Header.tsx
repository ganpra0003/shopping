"use client";

import Link from 'next/link';
import { Search, Menu, ShoppingCart, User, Heart, List, LogIn, LogOut } from 'lucide-react';
import { useAuth } from '../lib/AuthContext';

export default function Header() {
  const { isLoggedIn, user, logout } = useAuth();

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* PC Header */}
        <div className="hidden md:flex items-center justify-between h-[72px]">
          {/* Left: Logo */}
          <Link href="/" className="text-3xl font-extrabold tracking-tighter">
            4910
          </Link>

          {/* Center: Search Bar */}
          <div className="flex-1 max-w-[500px] mx-8 relative">
            <input 
              type="text" 
              placeholder="4910 모든상품 무료배송" 
              className="w-full h-11 pl-4 pr-12 border-[1.5px] border-gray-900 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-900 transition-colors text-sm placeholder:text-gray-400"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:opacity-70 transition-opacity">
              <Search className="w-[22px] h-[22px] text-gray-900" />
            </button>
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-7">
            <Link href="/category" className="flex flex-col items-center gap-[4px] text-gray-800 hover:text-black transition-colors group">
              <List className="w-[26px] h-[26px] group-hover:-translate-y-[2px] transition-transform duration-200" strokeWidth={1.5} />
              <span className="text-[11px] font-medium">카테고리</span>
            </Link>
            <Link href="/wishlist" className="flex flex-col items-center gap-[4px] text-gray-800 hover:text-black transition-colors group">
              <Heart className="w-[26px] h-[26px] group-hover:-translate-y-[2px] transition-transform duration-200" strokeWidth={1.5} />
              <span className="text-[11px] font-medium">찜한상품</span>
            </Link>

            {isLoggedIn ? (
              <>
                <Link href="/mypage" className="flex flex-col items-center gap-[4px] text-gray-800 hover:text-black transition-colors group">
                  <User className="w-[26px] h-[26px] group-hover:-translate-y-[2px] transition-transform duration-200" strokeWidth={1.5} />
                  <span className="text-[11px] font-medium">{user?.name || '내 정보'}</span>
                </Link>
                <button onClick={logout} className="flex flex-col items-center gap-[4px] text-gray-800 hover:text-black transition-colors group">
                  <LogOut className="w-[26px] h-[26px] group-hover:-translate-y-[2px] transition-transform duration-200" strokeWidth={1.5} />
                  <span className="text-[11px] font-medium">로그아웃</span>
                </button>
              </>
            ) : (
              <Link href="/login" className="flex flex-col items-center gap-[4px] text-gray-800 hover:text-black transition-colors group">
                <LogIn className="w-[26px] h-[26px] group-hover:-translate-y-[2px] transition-transform duration-200" strokeWidth={1.5} />
                <span className="text-[11px] font-medium">로그인</span>
              </Link>
            )}

            <Link href="/cart" className="flex flex-col items-center gap-[4px] text-gray-800 hover:text-black transition-colors group">
              <ShoppingCart className="w-[26px] h-[26px] group-hover:-translate-y-[2px] transition-transform duration-200" strokeWidth={1.5} />
              <span className="text-[11px] font-medium">장바구니</span>
            </Link>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden flex flex-col pt-3 pb-3 gap-3">
          {/* Top row */}
          <div className="flex items-center justify-between">
            <button className="text-gray-900 p-1 -ml-1">
              <Menu className="w-7 h-7" strokeWidth={1.5} />
            </button>
            <Link href="/" className="text-[26px] font-extrabold tracking-tighter ml-2">
              4910
            </Link>
            <Link href="/cart" className="text-gray-900 p-1 -mr-1">
              <ShoppingCart className="w-6 h-6" strokeWidth={1.5} />
            </Link>
          </div>
          
          {/* Bottom row: Search */}
          <div className="relative w-full">
            <input 
              type="text" 
              placeholder="4910 모든상품 무료배송" 
              className="w-full h-11 pl-4 pr-12 border-[1.5px] border-gray-900 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-900 transition-colors text-sm placeholder:text-gray-400"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2">
              <Search className="w-5 h-5 text-gray-900" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}