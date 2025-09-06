"use client";

import { useAuth } from '@/context/AuthContext';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { Loader2 } from 'lucide-react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (isAuthenticated === undefined) {
      // Still checking auth status
      return;
    }

    const isLoginPage = pathname === '/admin/login';

    if (isAuthenticated && isLoginPage) {
      // If logged in and on login page, redirect to admin dashboard
      router.replace('/admin');
    } else if (!isAuthenticated && !isLoginPage) {
      // If not logged in and not on login page, redirect to login
      router.replace('/admin/login');
    }
  }, [isAuthenticated, router, pathname]);

  if (isAuthenticated === undefined) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  // Allow children (the page) to be rendered if:
  // 1. User is authenticated
  // 2. User is not authenticated but is on the login page
  if (isAuthenticated || pathname === '/admin/login') {
    return <>{children}</>;
  }

  // This will be shown briefly while redirecting to the login page
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  );
}
