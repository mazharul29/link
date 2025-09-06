"use client";

import { useSite } from '@/context/SiteContext';
import PublicProfile from '@/components/PublicProfile';
import { Skeleton } from '@/components/ui/skeleton';

export default function Home() {
  const { liveContent, isInitialized } = useSite();

  if (!isInitialized) {
    return (
      <div className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4">
        <div className="w-full max-w-md space-y-6">
          <div className="flex flex-col items-center space-y-4">
            <Skeleton className="h-24 w-24 rounded-full" />
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-4 w-64" />
          </div>
          <div className="space-y-4">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
          </div>
        </div>
      </div>
    );
  }

  return <PublicProfile content={liveContent} />;
}
