import ProductGrid from '../components/ProductGrid';
import { products } from '../lib/products';
import Link from 'next/link';

export default function Home() {
  // Split products for different sections (simulate data fetching)
  const recommended = products.slice(0, 14); // 2 rows
  const popular = products.slice(14, 28); // 2 rows
  const newArrivals = products.slice(28, 42); // 2 rows
  const saleProducts = products.slice(10, 24); // 2 rows (just picking some)
  
  // Pick one brand for showcase
  const brandProducts = products.filter(p => p.brand === 'Studio 4910' || p.brand === 'Maison').slice(0, 7);

  return (
    <div className="pb-20">
      {/* 1. 메인 배너 */}
      <section className="relative w-full aspect-[16/9] md:aspect-[24/9] bg-[#dbeaf4] overflow-hidden mb-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="/images/main_banner_fw.jpg" 
          alt="Main Banner" 
          className="w-full h-full object-cover object-left md:object-center"
        />
        <div className="absolute inset-0 flex items-center justify-end pr-8 md:pr-[15%]">
          <div className="text-right md:text-left">
            <h2 className="text-[28px] md:text-[46px] font-black tracking-tighter text-gray-900 mb-2 md:mb-4 leading-tight">23 F/W ARRIVAL</h2>
            <p className="text-[13px] md:text-[16px] font-medium text-gray-700 tracking-tight">겨울의 편안함과 여유로움을 느껴보세요</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        {/* 2. 작은 프로모션 영역 */}
      <section className="mt-4 mb-8">
        <div className="w-full bg-gray-900 text-white py-3 px-4 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-[13px] font-medium tracking-tight">
          <p>회원가입 시 전 상품 10% 추가 할인 쿠폰 즉시 지급</p>
          <Link href="/login" className="underline underline-offset-4 font-bold hover:text-gray-300 transition-colors">
            자세히 보기
          </Link>
        </div>
      </section>

      {/* 3. 오늘의 추천 */}
      <section className="mb-20">
        <div className="flex items-end justify-between mb-5">
          <h2 className="text-xl font-extrabold tracking-tight">오늘의 추천</h2>
          <Link href="/category" className="text-[12px] font-medium text-gray-500 hover:text-black transition-colors">
            전체보기
          </Link>
        </div>
        <ProductGrid products={recommended} />
      </section>

      {/* 4. 인기 상품 */}
      <section className="mb-20">
        <div className="flex items-end justify-between mb-5">
          <h2 className="text-xl font-extrabold tracking-tight">인기 상품</h2>
          <Link href="/ranking" className="text-[12px] font-medium text-gray-500 hover:text-black transition-colors">
            전체보기
          </Link>
        </div>
        <ProductGrid products={popular} />
      </section>

      {/* 7. 브랜드 쇼케이스 */}
      <section className="mb-20 bg-gray-50 pt-10 pb-14 px-6 md:px-12 -mx-4 md:mx-0">
        <div className="text-center mb-10">
          <h2 className="text-[28px] font-black tracking-tighter mb-2">STUDIO 4910</h2>
          <p className="text-[13px] text-gray-500">이번 시즌 주목해야 할 미니멀 브랜드</p>
        </div>
        <ProductGrid products={brandProducts.length > 0 ? brandProducts : products.slice(0, 7)} />
      </section>

      {/* 5. 신상품 */}
      <section className="mb-20">
        <div className="flex items-end justify-between mb-5">
          <h2 className="text-xl font-extrabold tracking-tight">신상품</h2>
          <Link href="/new" className="text-[12px] font-medium text-gray-500 hover:text-black transition-colors">
            전체보기
          </Link>
        </div>
        <ProductGrid products={newArrivals} />
      </section>

      {/* 6. 세일 상품 */}
      <section className="mb-10">
        <div className="flex items-end justify-between mb-5">
          <h2 className="text-xl font-extrabold tracking-tight text-red-600">세일 상품</h2>
          <Link href="/sale" className="text-[12px] font-medium text-gray-500 hover:text-black transition-colors">
            전체보기
          </Link>
        </div>
        <ProductGrid products={saleProducts} />
      </section>
      </div>
    </div>
  );
}
