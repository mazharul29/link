"use client";

import { useSite } from '@/context/SiteContext';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function AppearanceEditor() {
  const { draftContent, updateDraftContent } = useSite();

  const handleChange = (field: string, value: string) => {
    updateDraftContent({ [field]: value });
  };

  return (
    <div className="space-y-6">
       <div>
        <h3 className="text-lg font-medium">Appearance</h3>
        <p className="text-sm text-muted-foreground">Customize the look of your site.</p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="logoUrl">Logo URL</Label>
          <Input
            id="logoUrl"
            value={draftContent.logoUrl}
            onChange={(e) => handleChange('logoUrl', e.target.value)}
            placeholder="https://example.com/logo.png"
          />
        </div>
         <div className="space-y-2">
          <Label htmlFor="footerText">Footer Text</Label>
          <Input
            id="footerText"
            value={draftContent.footerText}
            onChange={(e) => handleChange('footerText', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
