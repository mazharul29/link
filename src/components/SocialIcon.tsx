import {
  Instagram,
  Linkedin,
  Youtube,
  Link,
} from 'lucide-react';
import type { SocialPlatform } from '@/lib/types';

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M22.05 8.63h-2.6v8.83c0 2.45-1.98 4.43-4.43 4.43s-4.43-1.98-4.43-4.43s1.98-4.43 4.43-4.43c.48 0 .94.08 1.38.22V5.59c-.46-.11-.94-.17-1.44-.17C10.7 5.42 7.1 9.02 7.1 13.46c0 4.44 3.6 8.04 8.04 8.04c4.44 0 8.04-3.6 8.04-8.04V8.63h-1.13Z"/>
    <path d="M19.45 2.55H14.1v10.51c0 .28.23.51.51.51s.51-.23.51-.51V2.55h-2.6v8.83c0 1.6-.63 3.06-1.68 4.12c-.1.1-.15.24-.15.38c0 .32.26.58.58.58c.24 0 .46-.15.55-.37c1.1-2.52 4.14-2.82 4.14-7.55V2.55Z"/>
  </svg>
);


const iconMap: Record<SocialPlatform, React.ElementType> = {
  instagram: Instagram,
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
