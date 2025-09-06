"use client";

import { useSite } from '@/context/SiteContext';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ADMIN_BACKGROUNDS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

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
          <Label htmlFor="footerText">Footer Text</Label>
          <Input
            id="footerText"
            value={draftContent.footerText}
            onChange={(e) => handleChange('footerText', e.target.value)}
          />
        </div>
      </div>
       <div>
        <h3 className="text-lg font-medium">Admin Background</h3>
        <p className="text-sm text-muted-foreground">Choose a background for this admin panel.</p>
      </div>
      <div className="grid grid-cols-5 gap-2">
        {ADMIN_BACKGROUNDS.map((bg) => (
            <button
              key={bg.value}
              onClick={() => handleChange('adminBackground', bg.value)}
              className={cn(
                'relative h-16 w-full rounded-md border-2 p-2 text-left',
                draftContent.adminBackground === bg.value ? 'border-primary' : 'border-border'
              )}
              title={bg.name}
            >
                <div className={cn('h-full w-full rounded-sm', bg.value)} />
                {draftContent.adminBackground === bg.value && (
                    <div className="absolute top-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Check className="h-3 w-3" />
                    </div>
                )}
            </button>
        ))}
      </div>
    </div>
  );
}
