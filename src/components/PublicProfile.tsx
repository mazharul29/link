import Image from 'next/image';
import type { SiteContent } from '@/lib/types';
import SocialIcon from './SocialIcon';
import { cn } from '@/lib/utils';

interface PublicProfileProps {
  content: SiteContent;
}

export default function PublicProfile({ content }: PublicProfileProps) {
  const { links, footerText, profile } = content;

  const platformGradients: { [key: string]: string } = {
    instagram: 'instagram-gradient',
    tiktok: 'tiktok-gradient',
  };

  const platformText: { [key:string]: string } = {
    instagram: 'Instagram',
    tiktok: 'TikTok',
  }

  return (
    <div className="flex min-h-full w-full flex-col bg-transparent font-sans text-foreground">
       <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-foreground/10 backdrop-blur-sm rounded-b-lg"></div>
      <main className="flex flex-1 flex-col items-center justify-center p-4 pt-20 text-center">
        <div className="w-full max-w-md">
           <div className="mb-12">
            {profile.avatarUrl && (
              <Image
                src={profile.avatarUrl}
                alt={profile.name}
                width={100}
                height={100}
                className="mx-auto rounded-full border-4 border-white/20 shadow-lg"
              />
            )}
            <h1 className="mt-4 text-3xl font-bold tracking-wider text-white">{profile.name}</h1>
            <div className="mt-4 flex justify-center space-x-2">
              <div className="h-1 w-8 rounded-full bg-pink-500"></div>
              <div className="h-1 w-8 rounded-full bg-purple-500"></div>
              <div className="h-1 w-8 rounded-full bg-cyan-400"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'group relative flex aspect-square flex-col items-center justify-center gap-4 rounded-[32px] p-4 text-center text-white shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/50',
                  platformGradients[link.platform] || 'bg-gray-700'
                )}
              >
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                    <SocialIcon platform={link.platform} className="h-8 w-8 text-white" />
                </div>
                <span className="relative font-semibold text-lg">
                  {platformText[link.platform] || link.platform}
                </span>
              </a>
            ))}
          </div>
        </div>
      </main>

       <footer className="w-full p-4">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">{footerText}</p>
        </div>
      </footer>
    </div>
  );
}
