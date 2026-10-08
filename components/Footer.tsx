export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-[12px] text-gray-500">
          <div>
            <h4 className="font-extrabold text-black mb-4 text-[14px] tracking-tighter">4910</h4>
            <p className="mb-1">주식회사 사이공</p>
            <p className="mb-1">대표: 홍길동</p>
            <p className="mb-1">사업자등록번호: 123-45-67890</p>
            <p className="mb-1">통신판매업신고: 2026-서울강남-1234</p>
          </div>
          <div>
            <h4 className="font-bold text-black mb-4 text-[13px]">고객센터</h4>
            <p className="font-bold text-[18px] text-black mb-2 tracking-tighter">1588-4910</p>
            <p className="mb-1">운영시간: 평일 10:00 - 17:00</p>
            <p className="mb-1">점심시간: 12:00 - 13:00</p>
            <p>주말 및 공휴일 휴무</p>
          </div>
          <div>
            <h4 className="font-bold text-black mb-4 text-[13px]">이용안내</h4>
            <ul className="flex flex-col gap-2">
              <li><a href="#" className="hover:text-black">공지사항</a></li>
              <li><a href="#" className="hover:text-black">이용약관</a></li>
              <li><a href="#" className="hover:text-black font-bold">개인정보처리방침</a></li>
              <li><a href="#" className="hover:text-black">입점문의</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-black mb-4 text-[13px]">App</h4>
            <div className="flex gap-2">
              <button className="border border-gray-300 px-4 py-1.5 hover:bg-gray-50 transition-colors bg-white font-medium">iOS</button>
              <button className="border border-gray-300 px-4 py-1.5 hover:bg-gray-50 transition-colors bg-white font-medium">Android</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}