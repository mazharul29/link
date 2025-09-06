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
          <div className="flex justify-center">
            <Skeleton className="h-24 w-24 rounded-full" />
          </div>
          <Skeleton className="h-8 w-48 mx-auto" />
           <div className="flex justify-center space-x-2">
              <Skeleton className="h-1 w-8" />
              <Skeleton className="h-1 w-8" />
              <Skeleton className="h-1 w-8" />
            </div>
          <div className="grid grid-cols-2 gap-4">
            <Skeleton className="aspect-square rounded-2xl" />
            <Skeleton className="aspect-square rounded-2xl" />
          </div>
           <Skeleton className="h-6 w-full mt-8" />
        </div>
      </div>
    );
  }

  return <PublicProfile content={liveContent} />;
}
