"use client";

import { useState, useEffect, useMemo, Suspense } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { products, Product } from '../../lib/products';
import ProductGrid from '../../components/ProductGrid';

function CategoryContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // State
  const [activeCategory, setActiveCategory] = useState(searchParams.get('type') || '전체');
  const [sort, setSort] = useState(searchParams.get('sort') || 'recommend');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [freeShippingOnly, setFreeShippingOnly] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => { setIsClient(true); }, []);

  // Sync category param with URL mapping
  useEffect(() => {
    const typeParam = searchParams.get('type');
    if (typeParam) {
      const catMapReverse: Record<string, string> = {
        'top': '상의', 'bottom': '하의', 'outer': '아우터', 
        'shoes': '신발', 'bag': '가방', 'accessory': '액세서리'
      };
      setActiveCategory(catMapReverse[typeParam] || typeParam);
    } else {
      setActiveCategory('전체');
    }
  }, [searchParams]);

  const updateQueryParams = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(key, value);
    else params.delete(key);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleCategoryClick = (cat: string) => {
    const catMap: Record<string, string> = {
      '상의': 'top', '하의': 'bottom', '아우터': 'outer', 
      '신발': 'shoes', '가방': 'bag', '액세서리': 'accessory'
    };
    const engCat = catMap[cat] || cat;
    
    setActiveCategory(cat);
    updateQueryParams('type', cat === '전체' ? '' : engCat);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSort = e.target.value;
    setSort(newSort);
    updateQueryParams('sort', newSort === 'recommend' ? '' : newSort);
  };

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  // Filter logic
  const filteredProducts = useMemo(() => {
    let result = products;

    if (activeCategory !== '전체') {
      result = result.filter(p => p.category === activeCategory);
    }

    if (selectedBrands.length > 0) {
      result = result.filter(p => selectedBrands.includes(p.brand));
    }

    if (freeShippingOnly) {
      result = result.filter(p => p.freeShipping);
    }

    // Since our mock data sizes and colors are random arrays of strings, 
    // a real filter would check intersection here.

    return result.sort((a, b) => {
      switch (sort) {
        case 'popular': return b.likeCount - a.likeCount;
        case 'new': return (b.isNew === a.isNew ? 0 : b.isNew ? 1 : -1);
        case 'price-low': return a.salePrice - b.salePrice;
        case 'price-high': return b.salePrice - a.salePrice;
        case 'discount': return b.discount - a.discount;
        case 'review': return b.reviewCount - a.reviewCount;
        default: return parseInt(a.id) - parseInt(b.id);
      }
    });
  }, [activeCategory, selectedBrands, freeShippingOnly, sort]);

  const allBrands = Array.from(new Set(products.map(p => p.brand))).sort();
  const categories = ['전체', '상의', '하의', '아우터', '신발', '가방', '액세서리'];

  if (!isClient) return null; // Hydration mismatch 방지

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Title & Tabs */}
      <div className="mb-10 text-center">
        <h1 className="text-[28px] font-black tracking-tighter mb-2">CATEGORY</h1>
        <p className="text-[13px] text-gray-500">총 {filteredProducts.length}개의 상품</p>
      </div>

      <div className="flex justify-center mb-12">
        <div className="flex gap-6 md:gap-10 overflow-x-auto whitespace-nowrap scrollbar-hide px-2">
          {categories.map(cat => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className={`text-[15px] pb-2 border-b-[2px] transition-colors ${
                  isActive ? 'border-black font-extrabold text-black' : 'border-transparent text-gray-500 hover:text-black font-medium'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Sidebar Filter */}
        <aside className={`
          fixed inset-0 z-50 bg-white p-6 transform transition-transform duration-300 overflow-y-auto
          ${isFilterOpen ? 'translate-x-0' : '-translate-x-full'}
          md:relative md:translate-x-0 md:bg-transparent md:p-0 md:w-[220px] md:flex-shrink-0 md:z-auto md:overflow-visible
        `}>
          <div className="md:sticky md:top-32 border border-gray-800 p-5 bg-gray-900 text-white rounded-sm">
            <div className="flex justify-between items-center mb-6 border-b border-gray-700 pb-3">
              <h3 className="font-extrabold text-[14px]">필터</h3>
              <button onClick={() => setIsFilterOpen(false)} className="md:hidden text-[13px] font-bold text-gray-300">닫기 ✕</button>
            </div>
            
            <div className="mb-8">
              <h4 className="font-bold text-[13px] mb-3 text-white">배송</h4>
              <label className="flex items-center gap-2 text-[13px] text-gray-400 cursor-pointer hover:text-white transition-colors">
                <input 
                  type="checkbox" 
                  checked={freeShippingOnly}
                  onChange={(e) => setFreeShippingOnly(e.target.checked)}
                  className="accent-white w-4 h-4 cursor-pointer"
                />
                무료배송
              </label>
            </div>

            <div className="mb-8">
              <h4 className="font-bold text-[13px] mb-3 text-white">브랜드</h4>
              <div className="flex flex-col gap-2.5 max-h-[300px] overflow-y-auto scrollbar-hide">
                {allBrands.map(brand => (
                  <label key={brand} className="flex items-center gap-2 text-[13px] text-gray-400 cursor-pointer hover:text-white transition-colors">
                    <input 
                      type="checkbox"
                      checked={selectedBrands.includes(brand)}
                      onChange={() => toggleBrand(brand)}
                      className="accent-white w-4 h-4 cursor-pointer"
                    />
                    <span className="truncate">{brand}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <h4 className="font-bold text-[13px] mb-3 text-white">가격</h4>
              <div className="text-[12px] text-gray-400 bg-gray-800 p-3 rounded-sm border border-gray-700">
                전체 가격
              </div>
            </div>

            <div className="mb-2">
              <h4 className="font-bold text-[13px] mb-3 text-white">색상</h4>
              <div className="text-[12px] text-gray-400 bg-gray-800 p-3 rounded-sm border border-gray-700">
                전체 색상
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid Area */}
        <div className="flex-1">
          <div className="flex justify-between md:justify-end mb-6">
            <button 
              onClick={() => setIsFilterOpen(true)}
              className="md:hidden flex items-center gap-1.5 text-[12px] font-bold border border-gray-300 px-3 py-1.5 rounded-sm"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
              필터
            </button>
            <select 
              value={sort}
              onChange={handleSortChange}
              className="text-[12px] font-medium border border-gray-300 rounded-sm px-3 py-1.5 focus:outline-none focus:border-black cursor-pointer text-gray-700 bg-white"
            >
              <option value="recommend">추천순</option>
              <option value="popular">인기순</option>
              <option value="new">신상품순</option>
              <option value="price-low">낮은 가격순</option>
              <option value="price-high">높은 가격순</option>
              <option value="discount">할인율순</option>
              <option value="review">리뷰순</option>
            </select>
          </div>

          {filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} />
          ) : (
            <div className="py-32 text-center flex flex-col items-center justify-center">
              <div className="text-gray-300 mb-4">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </div>
              <p className="text-gray-500 text-[14px]">조건에 맞는 상품이 없습니다.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CategoryPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-sm text-gray-500">Loading...</div>}>
      <CategoryContent />
    </Suspense>
  );
}