"use client";

import { useSite } from '@/context/SiteContext';
import PublicProfile from '@/components/PublicProfile';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Link, Brush, Palette, Loader2 } from 'lucide-react';
import { ProfileEditor } from '@/components/admin/ProfileEditor';
import { LinksEditor } from '@/components/admin/LinksEditor';
import { AppearanceEditor } from '@/components/admin/AppearanceEditor';
import { AdminHeader } from '@/components/admin/AdminHeader';
import { ColorPaletteGenerator } from '@/components/admin/ColorPaletteGenerator';

export default function AdminPage() {
  const { draftContent, isInitialized } = useSite();

  if (!isInitialized) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-muted/40">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className={`flex h-screen w-full font-sans ${draftContent.adminBackground}`}>
      <div className="flex w-[550px] flex-shrink-0 flex-col border-r border-border bg-background/80 backdrop-blur-sm">
        <AdminHeader />
        <div className="flex-1 overflow-y-auto">
          <Tabs defaultValue="profile" className="p-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="profile">
                <User className="mr-2 h-4 w-4" /> Profile
              </TabsTrigger>
              <TabsTrigger value="links">
                <Link className="mr-2 h-4 w-4" /> Links
              </TabsTrigger>
              <TabsTrigger value="appearance">
                <Brush className="mr-2 h-4 w-4" /> Appearance
              </TabsTrigger>
            </TabsList>
            <TabsContent value="profile" className="mt-6">
              <ProfileEditor />
            </TabsContent>
            <TabsContent value="links" className="mt-6">
              <LinksEditor />
            </TabsContent>
            <TabsContent value="appearance" className="mt-6 space-y-8">
              <AppearanceEditor />
               <div className="space-y-4">
                <h3 className="text-lg font-medium flex items-center"><Palette className="mr-2 h-5 w-5"/> Color Palette Tool</h3>
                <p className="text-sm text-muted-foreground">
                  Generate a color palette based on a starting color.
                </p>
                <ColorPaletteGenerator />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <div className="flex-1 overflow-hidden p-8">
        <div className="relative mx-auto h-full max-w-[400px] overflow-hidden rounded-[40px] border-[10px] border-foreground bg-background shadow-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-foreground rounded-b-lg"></div>
          <div className="h-full w-full overflow-y-auto">
            <PublicProfile content={draftContent} />
          </div>
        </div>
      </div>
    </div>
  );
}
