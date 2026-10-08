"use client";

import { ReactNode } from 'react';
import { WishlistProvider } from '../lib/WishlistContext';
import { AuthProvider } from '../lib/AuthContext';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <WishlistProvider>
        {children}
      </WishlistProvider>
    </AuthProvider>
  );
}
