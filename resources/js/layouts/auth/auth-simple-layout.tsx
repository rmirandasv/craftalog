import AppLogo from '@/components/app-logo';
import { home } from '@/routes';
import { Link } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';

interface AuthLayoutProps {
  name?: string;
  title?: string;
  description?: string;
}

export default function AuthSimpleLayout({
  children,
  title,
  description,
}: PropsWithChildren<AuthLayoutProps>) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
        <div className="w-full max-w-md">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-center gap-6">
              <Link href={home()} className="flex flex-col items-center gap-3">
                <AppLogo />
              </Link>

              <div className="space-y-2 text-center">
                <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
