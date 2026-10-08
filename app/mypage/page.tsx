"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { MockOrder } from '../../lib/mockUser';
import { useWishlist } from '../../lib/WishlistContext';
import { useAuth } from '../../lib/AuthContext';
import { Package, Heart, Clock, Ticket, Award, UserRound, ChevronRight, CreditCard, BoxIcon, Truck, PackageCheck, LogOut } from 'lucide-react';

const statusConfig: Record<MockOrder['status'], { icon: React.ReactNode; color: string }> = {
  '결제완료': { icon: <CreditCard className="w-5 h-5" strokeWidth={1.5} />, color: 'text-blue-600' },
  '상품준비중': { icon: <BoxIcon className="w-5 h-5" strokeWidth={1.5} />, color: 'text-amber-600' },
  '배송중': { icon: <Truck className="w-5 h-5" strokeWidth={1.5} />, color: 'text-green-600' },
  '배송완료': { icon: <PackageCheck className="w-5 h-5" strokeWidth={1.5} />, color: 'text-gray-500' },
};

export default function MyPage() {
  const router = useRouter();
  const { isLoggedIn, user, logout } = useAuth();
  const { wishlist } = useWishlist();

  // 미로그인 시 로그인 페이지로 리다이렉트
  useEffect(() => {
    if (!isLoggedIn) {
      router.replace('/login');
    }
  }, [isLoggedIn, router]);

  if (!isLoggedIn || !user) return null;

  const myOrders: MockOrder[] = []; // 실제 주문 데이터 연동 시 변경

  const statusCounts = {
    '결제완료': myOrders.filter(o => o.status === '결제완료').length,
    '상품준비중': myOrders.filter(o => o.status === '상품준비중').length,
    '배송중': myOrders.filter(o => o.status === '배송중').length,
    '배송완료': myOrders.filter(o => o.status === '배송완료').length,
  };

  const menuItems = [
    { icon: <Package className="w-5 h-5" strokeWidth={1.5} />, label: '주문내역', href: '#orders', count: myOrders.length },
    { icon: <Heart className="w-5 h-5" strokeWidth={1.5} />, label: '찜한상품', href: '/wishlist', count: wishlist.length },
    { icon: <Clock className="w-5 h-5" strokeWidth={1.5} />, label: '최근 본 상품', href: '#', count: 0 },
    { icon: <Ticket className="w-5 h-5" strokeWidth={1.5} />, label: '쿠폰', href: '#', count: 3 },
    { icon: <Award className="w-5 h-5" strokeWidth={1.5} />, label: '포인트', href: '#', extra: '12,500P' },
    { icon: <UserRound className="w-5 h-5" strokeWidth={1.5} />, label: '회원정보', href: '#' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-[28px] font-black tracking-tighter mb-10 text-center">MY PAGE</h1>

      {/* Profile Card — 로그인된 사용자 정보 사용 */}
      <div className="border border-gray-200 p-6 md:p-8 mb-10 flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="w-20 h-20 bg-gray-100 flex items-center justify-center text-[28px] font-black text-gray-400 flex-shrink-0">
          {user.name.charAt(0)}
        </div>
        <div className="flex-1 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
            <h2 className="text-[20px] font-extrabold">{user.name}</h2>
            <span className="text-[11px] font-bold bg-black text-white px-2 py-0.5 inline-block self-center md:self-auto">MEMBER</span>
          </div>
          <p className="text-[13px] text-gray-500 mb-1">{user.email}</p>
          <p className="text-[13px] text-gray-500">{user.phone}</p>
        </div>
        <button 
          onClick={() => { logout(); router.push('/'); }}
          className="flex items-center gap-2 text-[13px] text-gray-500 hover:text-black transition-colors font-medium border border-gray-300 px-4 py-2 flex-shrink-0"
        >
          <LogOut className="w-4 h-4" strokeWidth={1.5} />
          로그아웃
        </button>
      </div>

      {/* Order Status Summary */}
      <div className="grid grid-cols-4 border border-gray-200 mb-10">
        {(Object.keys(statusCounts) as MockOrder['status'][]).map((status, idx) => (
          <div key={status} className={`flex flex-col items-center py-6 md:py-8 ${idx < 3 ? 'border-r border-gray-200' : ''}`}>
            <div className={`mb-2 ${statusConfig[status].color}`}>
              {statusConfig[status].icon}
            </div>
            <p className="text-[22px] font-black mb-1">{statusCounts[status]}</p>
            <p className="text-[11px] md:text-[12px] text-gray-500 font-medium">{status}</p>
          </div>
        ))}
      </div>

      {/* Menu List */}
      <div className="border border-gray-200 mb-10">
        {menuItems.map((item, idx) => (
          <Link
            key={item.label}
            href={item.href}
            className={`flex items-center justify-between px-6 py-5 hover:bg-gray-50 transition-colors ${idx < menuItems.length - 1 ? 'border-b border-gray-100' : ''}`}
          >
            <div className="flex items-center gap-4">
              <span className="text-gray-700">{item.icon}</span>
              <span className="text-[14px] font-bold">{item.label}</span>
            </div>
            <div className="flex items-center gap-2">
              {item.count !== undefined && item.count > 0 && (
                <span className="text-[13px] font-bold text-gray-900">{item.count}</span>
              )}
              {item.extra && (
                <span className="text-[13px] font-bold text-gray-900">{item.extra}</span>
              )}
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>
          </Link>
        ))}
      </div>

      {/* Recent Orders */}
      <div id="orders">
        <div className="flex items-end justify-between mb-5">
          <h2 className="text-[18px] font-extrabold tracking-tight">주문내역</h2>
          <span className="text-[12px] text-gray-500 font-medium">최근 3개월</span>
        </div>
        <div className="flex flex-col gap-4">
          {myOrders.length === 0 ? (
            <div className="py-20 text-center text-[14px] text-gray-500 border border-gray-200">
              최근 3개월 내에 주문한 내역이 없습니다.
            </div>
          ) : (
            myOrders.map(order => (
              <div key={order.id} className="border border-gray-200 p-5 md:p-6">
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <span className={`text-[13px] font-bold ${statusConfig[order.status].color}`}>
                      {order.status}
                    </span>
                    <span className="text-[12px] text-gray-400">{order.id}</span>
                  </div>
                  <span className="text-[12px] text-gray-400">{order.date}</span>
                </div>
                <div className="flex gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={order.image} alt={order.productName} className="w-20 h-[104px] md:w-24 md:h-32 object-cover bg-gray-100 flex-shrink-0" />
                  <div className="flex-1 flex flex-col justify-between py-0.5">
                    <div>
                      <p className="text-[11px] font-extrabold text-gray-900 mb-1">{order.brand}</p>
                      <p className="text-[14px] font-bold text-gray-800 mb-1.5">{order.productName}</p>
                      <p className="text-[12px] text-gray-500 font-medium">{order.option} · {order.quantity}개</p>
                    </div>
                    <p className="text-[16px] font-black tracking-tighter">{order.price.toLocaleString()}원</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}