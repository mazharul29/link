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
    <path d="M2081 0c55 473 319 755 778 785v532c-266 26-499-61-770-225v995c0 1264-1378 1659-1738 273-34-132 10-414 138-1004 39-172 133-352 295-501 163-149 359-224 572-226V0h525v2049c0 10 3 19 9 28 15 23 41 38 69 38 38 0 69-31 69-69V0h525z"/>
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