import type { SiteContent, SocialPlatform } from './types';

export const INITIAL_SITE_CONTENT: SiteContent = {
  logoUrl: 'https://picsum.photos/40/40',
  profile: {
    name: 'Alex Doe',
    bio: 'Digital creator, minimalist, and coffee enthusiast. Sharing my journey one link at a time.',
    avatarUrl: 'https://picsum.photos/100/100',
  },
  links: [
    {
      id: '1',
      platform: 'twitter',
      url: 'https://twitter.com/your-profile',
    },
    {
      id: '2',
      platform: 'instagram',
      url: 'https://instagram.com/your-profile',
    },
    {
      id: '3',
      platform: 'github',
      url: 'https://github.com/your-profile',
    },
    {
      id: '4',
      platform: 'tiktok',
      url: 'https://tiktok.com/@your-profile',
    },
  ],
  heading: 'Welcome to My Digital Space',
  subheading: 'Find all my important links below. Connect with me!',
  footerText: `© ${new Date().getFullYear()} Alex Doe. All Rights Reserved.`,
};

export const SOCIAL_PLATFORMS: SocialPlatform[] = [
  'website',
  'twitter',
  'instagram',
  'tiktok',
  'github',
  'linkedin',
  'youtube',
];
