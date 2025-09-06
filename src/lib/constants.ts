import type { SiteContent, SocialPlatform } from './types';

export const INITIAL_SITE_CONTENT: SiteContent = {
  profile: {
    name: 'Alex Doe',
    bio: 'Digital creator, minimalist, and coffee enthusiast. Sharing my journey one link at a time.',
    avatarUrl: 'https://picsum.photos/seed/alex-doe/100/100',
  },
  links: [
    {
      id: '2',
      platform: 'instagram',
      url: 'https://instagram.com/your-profile',
    },
    {
      id: '4',
      platform: 'tiktok',
      url: 'https://tiktok.com/@your-profile',
    },
  ],
  footerText: `© ${new Date().getFullYear()} Alex Doe. All Rights Reserved.`,
  adminBackground: 'admin-bg-1',
};

export const SOCIAL_PLATFORMS: SocialPlatform[] = [
  'website',
  'instagram',
  'tiktok',
  'linkedin',
  'youtube',
  'twitter',
  'github'
];

export const ADMIN_BACKGROUNDS = [
  { value: 'admin-bg-1', name: 'Subtle Grid' },
  { value: 'admin-bg-2', name: 'Polka Dots' },
  { value: 'admin-bg-3', name: 'Blueprint' },
  { value: 'admin-bg-4', name: 'Cosmic' },
  { value: 'admin-bg-5', name: 'Crosses' },
  { value: 'admin-bg-6', name: 'Pinstripes' },
  { value: 'admin-bg-7', name: 'Wigwam' },
  { value: 'admin-bg-8', name: 'Circuit' },
  { value: 'admin-bg-9', name: 'Bubbles' },
  { value: 'admin-bg-10', name: 'Graph Paper' },
  { value: 'admin-bg-11', name: 'Animated Gradient' },
  { value: 'admin-bg-12', name: 'Rotating Cone' },
  { value: 'admin-bg-13', name: 'Aurora' },
  { value: 'admin-bg-14', name: 'Intersecting Lines' },
  { value: 'admin-bg-15', name: 'Galaxy' },
  { value: 'admin-bg-16', name: 'Moving Pixels' },
  { value: 'admin-bg-17', name: 'Subtle Radial' },
  { value: 'admin-bg-18', name: 'Moving Checkers' },
  { value: 'admin-bg-19', name: 'Cyber Circles' },
  { value: 'admin-bg-20', name: 'Scan Line' },
];
