"use client";

import { useSite } from '@/context/SiteContext';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export function ProfileEditor() {
  const { draftContent, updateDraftContent } = useSite();

  const handleProfileChange = (field: string, value: string) => {
    updateDraftContent({
      profile: { ...draftContent.profile, [field]: value },
    });
  };

  return (
    <div className="space-y-6">
       <div>
        <h3 className="text-lg font-medium">Profile</h3>
        <p className="text-sm text-muted-foreground">This is how others will see you on the site.</p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="avatarUrl">Avatar URL</Label>
          <Input
            id="avatarUrl"
            value={draftContent.profile.avatarUrl}
            onChange={(e) => handleProfileChange('avatarUrl', e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={draftContent.profile.name}
            onChange={(e) => handleProfileChange('name', e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="bio">Bio</Label>
          <Textarea
            id="bio"
            value={draftContent.profile.bio}
            onChange={(e) => handleProfileChange('bio', e.target.value)}
            rows={3}
          />
        </div>
      </div>
    </div>
  );
}
