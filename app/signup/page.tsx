"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '../../lib/AuthContext';

export default function SignupPage() {
  const router = useRouter();
  const { signup } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) { setError('이름을 입력해주세요.'); return; }
    if (!email.trim()) { setError('이메일을 입력해주세요.'); return; }
    if (!phone.trim()) { setError('전화번호를 입력해주세요.'); return; }
    if (!password.trim()) { setError('비밀번호를 입력해주세요.'); return; }
    if (password.length < 4) { setError('비밀번호는 4자 이상이어야 합니다.'); return; }
    if (password !== passwordConfirm) { setError('비밀번호가 일치하지 않습니다.'); return; }

    const result = signup(name, email, phone, password);
    if (result.success) {
      alert('회원가입이 완료되었습니다. 로그인해주세요.');
      router.push('/login');
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-[380px]">
        <h1 className="text-[40px] font-black tracking-tighter text-center mb-4">4910</h1>
        <p className="text-[14px] text-gray-500 text-center mb-12 font-medium">회원가입</p>

        <form onSubmit={handleSignup} className="flex flex-col gap-3 mb-8">
          <input
            type="text"
            placeholder="이름"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full h-12 px-4 border border-gray-300 text-[14px] placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
          />
          <input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full h-12 px-4 border border-gray-300 text-[14px] placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
          />
          <input
            type="tel"
            placeholder="전화번호 (010-0000-0000)"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            className="w-full h-12 px-4 border border-gray-300 text-[14px] placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full h-12 px-4 border border-gray-300 text-[14px] placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
          />
          <input
            type="password"
            placeholder="비밀번호 확인"
            value={passwordConfirm}
            onChange={e => setPasswordConfirm(e.target.value)}
            className="w-full h-12 px-4 border border-gray-300 text-[14px] placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
          />

          {error && <p className="text-red-600 text-[13px] font-bold">{error}</p>}

          <button
            type="submit"
            className="w-full h-12 bg-black text-white font-bold text-[14px] hover:opacity-90 transition-opacity mt-1"
          >
            가입하기
          </button>
        </form>

        <div className="text-center text-[13px] text-gray-500 font-medium">
          이미 계정이 있으신가요?{' '}
          <Link href="/login" className="text-black font-bold underline underline-offset-4 hover:opacity-70 transition-opacity">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}
