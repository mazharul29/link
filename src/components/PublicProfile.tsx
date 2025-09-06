import Image from 'next/image';
import type { SiteContent } from '@/lib/types';
import SocialIcon from './SocialIcon';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface PublicProfileProps {
  content: SiteContent;
}

export default function PublicProfile({ content }: PublicProfileProps) {
  const { profile, links, heading, footerText, logoUrl } = content;

  const platformGradients: { [key: string]: string } = {
    instagram: 'instagram-gradient',
    tiktok: 'tiktok-gradient',
  };

  return (
    <div className="flex min-h-full w-full flex-col bg-transparent font-sans text-foreground">
      <main className="flex flex-1 flex-col items-center justify-center p-4 pt-20 text-center">
        <div className="w-full max-w-md">
           <div className="mb-12">
            <h1 className="text-3xl font-bold tracking-wider text-white">CONNECT WITH ME</h1>
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
                  'group flex aspect-square flex-col items-center justify-center gap-4 rounded-2xl p-4 text-center text-white shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/50',
                  platformGradients[link.platform] || 'bg-gray-700'
                )}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                    <SocialIcon platform={link.platform} className="h-8 w-8" />
                </div>
                <span className="font-semibold capitalize">
                  {link.platform === 'website' ? 'My Site' : link.platform}
                </span>
              </a>
            ))}
          </div>
        </div>
      </main>

      <footer className="w-full p-4 text-center">
        <p className="text-sm text-muted-foreground">{footerText}</p>
      </footer>
    </div>
  );
}
