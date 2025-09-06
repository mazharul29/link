import Image from 'next/image';
import type { SiteContent } from '@/lib/types';
import SocialIcon from './SocialIcon';
import Link from 'next/link';

interface PublicProfileProps {
  content: SiteContent;
}

export default function PublicProfile({ content }: PublicProfileProps) {
  const { profile, links, heading, footerText, logoUrl } = content;

  return (
    <div className="flex min-h-full w-full flex-col bg-background font-sans text-foreground">
      <header className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center">
        {logoUrl ? (
          <Image
            src={logoUrl}
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
            data-ai-hint="logo"
          />
        ) : <div className="h-10 w-10"></div>}
        <Link href="/admin" className="text-sm text-primary hover:underline">
          Admin
        </Link>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center p-4 pt-20 text-center">
        <div className="w-full max-w-md">
          <div className="mb-8 flex flex-col items-center">
            <Image
              src={profile.avatarUrl}
              alt={profile.name}
              width={100}
              height={100}
              className="mb-4 h-24 w-24 rounded-full object-cover shadow-lg"
              data-ai-hint="profile picture"
            />
            <h1 className="text-3xl font-bold text-primary">{profile.name}</h1>
            <p className="mt-2 max-w-xs text-muted-foreground">{profile.bio}</p>
          </div>

          <div className="space-y-4">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center gap-4 rounded-lg bg-primary p-4 text-left text-primary-foreground transition-transform duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
              >
                <SocialIcon platform={link.platform} className="h-6 w-6" />
                <span className="flex-1 font-semibold capitalize">
                  {link.platform}
                </span>
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
                  className="h-5 w-5 opacity-70 transition-transform duration-300 group-hover:translate-x-1"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
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
