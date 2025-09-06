import {
  Twitter,
  Instagram,
  Github,
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
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.65 4.32 1.52v3.41c-1.84.05-3.63-.74-4.96-2.02-1.34-1.28-2.07-2.9-2.07-4.68v-2.46h-4.02v10.34c0 1.29-.42 2.58-1.25 3.61s-2.01 1.67-3.32 1.67c-1.31 0-2.49-.63-3.32-1.67s-1.25-2.32-1.25-3.61V3.5h4.02v9.34c0 .8.27 1.6.81 2.22.54.62 1.25.93 2.02.93.77 0 1.48-.31 2.02-.93.54-.62.81-1.42.81-2.22V.02Z" />
  </svg>
);

const iconMap: Record<SocialPlatform, React.ElementType> = {
  twitter: Twitter,
  instagram: Instagram,
  tiktok: TikTokIcon,
  github: Github,
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
