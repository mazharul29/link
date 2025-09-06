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
        <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.04-2.89-.35-4.2-.97v7.54c0 4.64-3.11 8.42-7.41 8.42-4.3 0-7.41-3.79-7.41-8.42s3.11-8.42 7.41-8.42c.31 0 .65.04 1 .09v4.02c-.35-.09-.68-.14-1.02-.14-1.84 0-3.33 1.49-3.33 3.33s1.49 3.33 3.33 3.33c1.84 0 3.33-1.49 3.33-3.33V6.99c-1.39-.75-2.54-1.89-3.26-3.41-.71-1.5-1.01-3.21-1.01-4.97z"></path>
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
