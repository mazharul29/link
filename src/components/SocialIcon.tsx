import {
  Linkedin,
  Youtube,
  Link,
} from 'lucide-react';
import type { SocialPlatform } from '@/lib/types';

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 2859 3333"
    fill="currentColor"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    {...props}
  >
    <path d="M2081 0c55 473 319 755 778 785v532c-266 26-494-20-633-182v2002c0 101-33 188-101 261-69 73-163 110-284 110-118 0-212-37-280-110-69-73-103-160-103-261V1703c-28-11-55-22-83-33-28-11-56-21-83-31-189-73-345-203-469-390-123-187-185-408-185-663 0-252 62-473 185-663 124-189 280-319 469-390 189-71 394-106 614-106h354zm-941 2048c105 106 235 159 391 159 157 0 286-53 388-159 102-106 153-236 153-391s-51-285-153-391c-102-106-231-159-388-159-156 0-286 53-391 159-105 106-158 236-158 391s53 285 158 391z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        {...props}
    >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
    </svg>
);


const iconMap: Record<SocialPlatform, React.ElementType> = {
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
  linkedin: Linkedin,
  youtube: Youtube,
  website: Link,
};

export default function SocialIcon({
  platform,
  className,
}: {
  platform: SocialPlatform;
  className?: string;
}) {
  const Icon = iconMap[platform];
  return Icon ? <Icon className={className} /> : null;
}

    