import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-transparent text-foreground p-4">
      <div className="text-center space-y-6 rounded-2xl bg-foreground/5 p-8 backdrop-blur-md border border-white/10 shadow-2xl animate-fade-in-up">
        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
            <AlertTriangle className="h-10 w-10" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white">404 - Page Not Found</h1>
        <p className="text-lg text-foreground/70">
          Oops! It seems you've taken a wrong turn.
        </p>
        <Button asChild size="lg" className="mt-4">
          <Link href="/">Go Back Home</Link>
        </Button>
      </div>
    </div>
  );
}
