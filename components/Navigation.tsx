import Link from 'next/link';

export default function Navigation() {
  const navItems = [
    { name: '추천', href: '/' },
    { name: '랭킹', href: '/ranking' },
    { name: '신상', href: '/new' },
    { name: '세일', href: '/sale' },
    { name: '상의', href: '/category?type=top' },
    { name: '하의', href: '/category?type=bottom' },
    { name: '아우터', href: '/category?type=outer' },
    { name: '신발', href: '/category?type=shoes' },
    { name: '가방', href: '/category?type=bag' },
    { name: '액세서리', href: '/category?type=accessory' },
    { name: '브랜드', href: '/category?type=brand' },
    { name: '빈티지', href: '/category?type=vintage' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex items-center gap-7 overflow-x-auto whitespace-nowrap scrollbar-hide py-[14px] text-[15px] font-medium text-gray-700">
          {navItems.map((item) => (
            <li key={item.name} className="flex-shrink-0">
              <Link 
                href={item.href} 
                className="hover:text-black hover:font-bold transition-all duration-200"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}