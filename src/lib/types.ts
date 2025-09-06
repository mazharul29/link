export type SocialPlatform =
  | 'twitter'
  | 'instagram'
  | 'tiktok'
  | 'github'
  | 'linkedin'
  | 'youtube'
  | 'website';

export type SocialLink = {
  id: string;
  platform: SocialPlatform;
  url: string;
};

export type ProfileData = {
  name: string;
  bio: string;
  avatarUrl: string;
};

export type SiteContent = {
  profile: ProfileData;
  links: SocialLink[];
  footerText: string;
  adminBackground: string;
};
