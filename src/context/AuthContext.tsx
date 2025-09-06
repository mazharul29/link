"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
  useCallback,
} from 'react';
import { useRouter } from 'next/navigation';

// In a real app, this would be in a separate file and call your backend.
async function apiLogin(password: string): Promise<boolean> {
  // This is a mock login. Use a secure method in production.
  return password === '29012012';
}

interface AuthContextType {
  isAuthenticated: boolean | undefined;
  login: (password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>(
    undefined
  );
  const router = useRouter();

  useEffect(() => {
    try {
      const storedAuth = sessionStorage.getItem('linkport-auth');
      setIsAuthenticated(storedAuth === 'true');
    } catch (error) {
      setIsAuthenticated(false);
    }
  }, []);

  const login = useCallback(
    async (password: string) => {
      const success = await apiLogin(password);
      if (success) {
        setIsAuthenticated(true);
        sessionStorage.setItem('linkport-auth', 'true');
        router.push('/admin');
      }
      return success;
    },
    [router]
  );

  const logout = useCallback(() => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('linkport-auth');
    router.push('/admin/login');
  }, [router]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
