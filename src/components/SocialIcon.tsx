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
    viewBox="0 0 2859 3333"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    imageRendering="optimizeQuality"
    fillRule="evenodd"
    clipRule="evenodd"
    fill="currentColor"
    {...props}
  >
    <path d="M2081 0c55 473 319 755 778 785v532c-266 26-499-61-770-225v995c0 1264-1378 1659-1932 753-356-583-138-1606 1004-1647v561c-87 14-180 36-265 65-254 86-458 249-622 446-334 393-372 999-94 1462s1035 596 1554 150c219-189 344-434 408-711h-413v-561h744C2829 1233 2812 559 2081 0z" />
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
