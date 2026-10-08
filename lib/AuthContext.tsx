"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

interface UserData {
  name: string;
  email: string;
  phone: string;
}

interface AuthContextType {
  isLoggedIn: boolean;
  user: UserData | null;
  login: (email: string, password: string) => { success: boolean; message: string };
  signup: (name: string, email: string, phone: string, password: string) => { success: boolean; message: string };
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  user: null,
  login: () => ({ success: false, message: '' }),
  signup: () => ({ success: false, message: '' }),
  logout: () => {},
});

interface StoredUser {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<UserData | null>(null);
  const [loaded, setLoaded] = useState(false);

  // 초기 로드: 로그인 세션 복원
  useEffect(() => {
    const session = localStorage.getItem('4910_session');
    if (session) {
      const parsed = JSON.parse(session);
      setIsLoggedIn(true);
      setUser(parsed);
    }
    setLoaded(true);
  }, []);

  const signup = useCallback((name: string, email: string, phone: string, password: string) => {
    const usersStr = localStorage.getItem('4910_users');
    const users: StoredUser[] = usersStr ? JSON.parse(usersStr) : [];

    if (users.find(u => u.email === email)) {
      return { success: false, message: '이미 가입된 이메일입니다.' };
    }

    users.push({ name, email, phone, password });
    localStorage.setItem('4910_users', JSON.stringify(users));
    return { success: true, message: '회원가입이 완료되었습니다.' };
  }, []);

  const login = useCallback((email: string, password: string) => {
    const usersStr = localStorage.getItem('4910_users');
    const users: StoredUser[] = usersStr ? JSON.parse(usersStr) : [];

    const found = users.find(u => u.email === email && u.password === password);
    if (!found) {
      return { success: false, message: '이메일 또는 비밀번호가 일치하지 않습니다.' };
    }

    const userData: UserData = { name: found.name, email: found.email, phone: found.phone };
    localStorage.setItem('4910_session', JSON.stringify(userData));
    setIsLoggedIn(true);
    setUser(userData);
    return { success: true, message: '' };
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('4910_session');
    setIsLoggedIn(false);
    setUser(null);
  }, []);

  if (!loaded) return null;

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
