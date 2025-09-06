"use client";

import { useSite } from '@/context/SiteContext';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { LogOut, Save, RotateCcw, Check, Circle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useMemo } from 'react';

export function AdminHeader() {
  const {
    liveContent,
    draftContent,
    publishChanges,
    revertChanges,
  } = useSite();
  const { logout } = useAuth();
  const { toast } = useToast();

  const hasChanges = useMemo(() => {
    return JSON.stringify(liveContent) !== JSON.stringify(draftContent);
  }, [liveContent, draftContent]);

  const handlePublish = () => {
    publishChanges();
    toast({
      title: 'Changes Published!',
      description: 'Your site has been updated successfully.',
    });
  };
  
  const handleRevert = () => {
    revertChanges();
    toast({
      title: 'Changes Discarded',
      description: 'Your draft has been reset to the live version.',
      variant: 'destructive'
    });
  };

  return (
    <div className="flex flex-col gap-4 border-b p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
        <Button variant="ghost" size="sm" onClick={logout}>
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
       <div className="flex items-center justify-between gap-2 rounded-lg bg-muted p-3">
         <div className="flex items-center gap-2 text-sm font-medium">
           {hasChanges ? (
             <>
               <Circle className="h-4 w-4 text-yellow-500 fill-yellow-500" />
               <span>Unsaved Changes</span>
             </>
           ) : (
             <>
               <Check className="h-4 w-4 text-green-500" />
               <span>All changes saved</span>
             </>
           )}
         </div>
         <div className="flex gap-2">
           <Button variant="outline" size="sm" onClick={handleRevert} disabled={!hasChanges}>
             <RotateCcw className="mr-2 h-4 w-4" />
             Discard
           </Button>
           <Button size="sm" onClick={handlePublish} disabled={!hasChanges}>
             <Save className="mr-2 h-4 w-4" />
             Publish
           </Button>
         </div>
       </div>
    </div>
  );
}
