import {
  Linkedin,
  Youtube,
  Link,
  Twitter,
  Github,
} from 'lucide-react';
import type { SocialPlatform } from '@/lib/types';

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2859 3333"
        fill="currentColor"
        {...props}
        shapeRendering="geometricPrecision"
    >
        <path d="M2081 0c55 473 319 755 778 785v532c-266 26-499-61-770-225v995c0 1264-1378 1659-1932 753-356-583-14-1423 1529-1423 64 0 128 0 192 11v511c-40-6-80-12-120-12-322 0-568 78-752 263-147 148-220 338-220 541 0 230 73 416 220 563 147 148 379 238 640 238 253 0 478-95 640-238 147-148 220-338 220-541v-1011c-43 69-89 135-139 199-335 425-911 634-1533 634-106 0-212-3-318-9v-521c106 12 212 18 318 18 622 0 1205-209 1533-634 50-64 96-130 139-199z"></path>
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
  twitter: Twitter,
  github: Github,
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
