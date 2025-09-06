"use client";

import { useSite } from '@/context/SiteContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Plus, Trash, Edit, GripVertical } from 'lucide-react';
import type { SocialLink, SocialPlatform } from '@/lib/types';
import { SOCIAL_PLATFORMS } from '@/lib/constants';
import SocialIcon from '@/components/SocialIcon';
import { useState } from 'react';

export function LinksEditor() {
  const { draftContent, updateDraftContent } = useSite();

  const handleAddLink = () => {
    const newLink: SocialLink = {
      id: Date.now().toString(),
      platform: 'website',
      url: '',
    };
    updateDraftContent({ links: [...draftContent.links, newLink] });
  };

  const handleUpdateLink = (id: string, updatedLink: Partial<SocialLink>) => {
    const updatedLinks = draftContent.links.map((link) =>
      link.id === id ? { ...link, ...updatedLink } : link
    );
    updateDraftContent({ links: updatedLinks });
  };

  const handleRemoveLink = (id: string) => {
    const updatedLinks = draftContent.links.filter((link) => link.id !== id);
    updateDraftContent({ links: updatedLinks });
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Social Links</h3>
        <p className="text-sm text-muted-foreground">Add or edit your links.</p>
      </div>
      <div className="space-y-4">
        {draftContent.links.map((link) => (
          <div
            key={link.id}
            className="flex items-center gap-2 rounded-lg border p-3"
          >
            <GripVertical className="h-5 w-5 text-muted-foreground" />
            <SocialIcon platform={link.platform} className="h-5 w-5" />
            <div className="flex-1">
              <p className="font-mono text-sm truncate">{link.url || "New link"}</p>
              <p className="text-xs text-muted-foreground capitalize">{link.platform}</p>
            </div>
            <LinkEditDialog link={link} onUpdate={handleUpdateLink} onRemove={handleRemoveLink} />
          </div>
        ))}
      </div>
      <Button onClick={handleAddLink} variant="outline" className="w-full">
        <Plus className="mr-2 h-4 w-4" /> Add New Link
      </Button>
    </div>
  );
}


function LinkEditDialog({ link, onUpdate, onRemove }: { link: SocialLink, onUpdate: Function, onRemove: Function }) {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button variant="ghost" size="icon">
              <Edit className="h-4 w-4" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Link</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="platform">Platform</Label>
                <Select
                  value={link.platform}
                  onValueChange={(value: SocialPlatform) =>
                    onUpdate(link.id, { platform: value })
                  }
                >
                  <SelectTrigger id="platform">
                    <SelectValue placeholder="Select a platform" />
                  </SelectTrigger>
                  <SelectContent>
                    {SOCIAL_PLATFORMS.map((platform) => (
                      <SelectItem key={platform} value={platform}>
                        <span className="flex items-center">
                          <SocialIcon platform={platform} className="mr-2 h-4 w-4" />
                          <span className="capitalize">{platform}</span>
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="url">URL</Label>
                <Input
                  id="url"
                  value={link.url}
                  onChange={(e) =>
                    onUpdate(link.id, { url: e.target.value })
                  }
                  placeholder="https://example.com"
                />
              </div>
            </div>
            <DialogFooter className="justify-between sm:justify-between">
              <Button
                variant="ghost"
                className="text-destructive hover:text-destructive"
                onClick={() => {
                  onRemove(link.id);
                  setIsOpen(false);
                }}
              >
                <Trash className="mr-2 h-4 w-4" /> Remove
              </Button>
              <DialogClose asChild>
                <Button>Done</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
    )
}
