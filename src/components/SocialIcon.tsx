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
        viewBox="0 0 24 24"
        fill="currentColor"
        {...props}
    >
        <path d="M16.6 5.82h2.51V2.71h-2.51c-3.27 0-5.93 2.66-5.93 5.93v2.3H7.97v3.11h2.7v7.35h3.46v-7.35h2.7l.42-3.11h-3.12v-1.89c0-1.01.27-1.7 1.74-1.7z" />
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
