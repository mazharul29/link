"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
  useCallback,
} from 'react';
import type { SiteContent } from '@/lib/types';
import { INITIAL_SITE_CONTENT } from '@/lib/constants';

interface SiteContextType {
  liveContent: SiteContent;
  draftContent: SiteContent;
  isInitialized: boolean;
  setDraftContent: (content: SiteContent) => void;
  publishChanges: () => void;
  revertChanges: () => void;
  updateDraftContent: (updates: Partial<SiteContent>) => void;
}

const SiteContext = createContext<SiteContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'linkport-content';

export function SiteProvider({ children }: { children: ReactNode }) {
  const [isInitialized, setIsInitialized] = useState(false);
  const [liveContent, setLiveContent] =
    useState<SiteContent>(INITIAL_SITE_CONTENT);
  const [draftContent, setDraftContent] =
    useState<SiteContent>(INITIAL_SITE_CONTENT);

  useEffect(() => {
    try {
      const storedContent = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (storedContent) {
        const parsedContent = JSON.parse(storedContent);
        setLiveContent(parsedContent);
        setDraftContent(parsedContent);
      }
    } catch (error) {
      console.error('Failed to load content from localStorage', error);
    }
    setIsInitialized(true);
  }, []);

  const publishChanges = useCallback(() => {
    setLiveContent(draftContent);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(draftContent));
    } catch (error) {
      console.error('Failed to save content to localStorage', error);
    }
  }, [draftContent]);

  const revertChanges = useCallback(() => {
    setDraftContent(liveContent);
  }, [liveContent]);
  
  const updateDraftContent = useCallback((updates: Partial<SiteContent>) => {
    setDraftContent(prev => ({ ...prev, ...updates }));
  }, []);

  return (
    <SiteContext.Provider
      value={{
        liveContent,
        draftContent,
        isInitialized,
        setDraftContent,
        publishChanges,
        revertChanges,
        updateDraftContent
      }}
    >
      {children}
    </SiteContext.Provider>
  );
}

export function useSite() {
  const context = useContext(SiteContext);
  if (context === undefined) {
    throw new Error('useSite must be used within a SiteProvider');
  }
  return context;
}
