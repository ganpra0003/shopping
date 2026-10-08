export interface MockUser {
  name: string;
  email: string;
  phone: string;
  grade: string;
  point: number;
  couponCount: number;
  joinDate: string;
}

export interface MockOrder {
  id: string;
  date: string;
  productName: string;
  brand: string;
  image: string;
  option: string;
  quantity: number;
  price: number;
  status: '결제완료' | '상품준비중' | '배송중' | '배송완료';
}

export const mockUser: MockUser = {
  name: '김민수',
  email: 'minsu@example.com',
  phone: '010-1234-5678',
  grade: 'GOLD',
  point: 12500,
  couponCount: 3,
  joinDate: '2025-03-15',
};

export const mockOrders: MockOrder[] = [
  {
    id: 'ORD-20261001-001',
    date: '2026-09-30',
    productName: '헤비웨이트 오버핏 맨투맨',
    brand: 'Studio 4910',
    image: 'https://placehold.co/200x260/e2e8f0/64748b?text=Order+1',
    option: 'Black / L',
    quantity: 1,
    price: 49000,
    status: '배송중',
  },
  {
    id: 'ORD-20261001-002',
    date: '2026-09-28',
    productName: '와이드 코튼 데님 팬츠',
    brand: 'Raw Denim',
    image: 'https://placehold.co/200x260/e2e8f0/64748b?text=Order+2',
    option: 'Blue / M',
    quantity: 1,
    price: 68000,
    status: '배송완료',
  },
  {
    id: 'ORD-20261001-003',
    date: '2026-09-27',
    productName: '플리스 버튼업 자켓',
    brand: 'Maison',
    image: 'https://placehold.co/200x260/e2e8f0/64748b?text=Order+3',
    option: 'Beige / XL',
    quantity: 1,
    price: 119000,
    status: '배송완료',
  },
  {
    id: 'ORD-20261001-004',
    date: '2026-09-25',
    productName: '레트로 러닝 스니커즈',
    brand: 'Vanguard',
    image: 'https://placehold.co/200x260/e2e8f0/64748b?text=Order+4',
    option: 'White / 270',
    quantity: 1,
    price: 89000,
    status: '결제완료',
  },
  {
    id: 'ORD-20261001-005',
    date: '2026-09-22',
    productName: '코듀라 나일론 백팩',
    brand: 'Urban Code',
    image: 'https://placehold.co/200x260/e2e8f0/64748b?text=Order+5',
    option: 'Black / FREE',
    quantity: 1,
    price: 78000,
    status: '상품준비중',
  },
];
