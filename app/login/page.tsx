"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '../../lib/AuthContext';

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) { setError('이메일을 입력해주세요.'); return; }
    if (!password.trim()) { setError('비밀번호를 입력해주세요.'); return; }

    const result = login(email, password);
    if (result.success) {
      router.push('/mypage');
    } else {
      alert('아이디/비밀번호가 일치하지 않습니다.');
      setError(result.message);
    }
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4 py-20 relative z-10">
      <div className="w-full max-w-[380px]">
        {/* Logo */}
        <h1 className="text-[40px] font-black tracking-tighter text-center mb-12">4910</h1>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-3 mb-6">
          <input
            type="text"
            placeholder="이메일"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full h-12 px-4 border border-gray-300 text-[14px] placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full h-12 px-4 border border-gray-300 text-[14px] placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
          />

          {error && <p className="text-red-600 text-[13px] font-bold">{error}</p>}

          <button
            type="submit"
            className="w-full h-12 bg-black text-white font-bold text-[14px] hover:opacity-90 transition-opacity mt-1"
          >
            로그인
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-[12px] text-gray-400 font-medium">또는</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Social Login */}
        <div className="flex flex-col gap-3 mb-10">
          <button
            onClick={() => alert('카카오 로그인은 현재 준비 중입니다.')}
            className="w-full h-12 flex items-center justify-center gap-2 font-bold text-[14px] transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#FEE500', color: '#191919' }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18"><path fill="#191919" d="M9 1C4.58 1 1 3.8 1 7.19c0 2.17 1.45 4.08 3.63 5.18l-.93 3.41c-.08.29.25.52.5.35l4.07-2.68c.24.02.48.03.73.03 4.42 0 8-2.8 8-6.29C17 3.8 13.42 1 9 1" /></svg>
            카카오 로그인
          </button>
          <button
            onClick={() => alert('네이버 로그인은 현재 준비 중입니다.')}
            className="w-full h-12 flex items-center justify-center gap-2 font-bold text-[14px] text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#03C75A' }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="white"><path d="M10.85 8.55 4.89 0H0v16h5.15V7.45L11.11 16H16V0h-5.15z" /></svg>
            네이버 로그인
          </button>
        </div>

        {/* Bottom Links */}
        <div className="flex items-center justify-center gap-4 text-[13px] text-gray-500 font-medium">
          <Link href="#" className="hover:text-black transition-colors">아이디 찾기</Link>
          <span className="text-gray-300">|</span>
          <Link href="#" className="hover:text-black transition-colors">비밀번호 찾기</Link>
          <span className="text-gray-300">|</span>
          <Link href="/signup" className="hover:text-black transition-colors">회원가입</Link>
        </div>
      </div>
    </div>
  );
}