import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { BookOpen, Download, FileText, Layout, Sparkles, Zap } from 'lucide-react';

export default function Welcome({
  canRegister = true,
}: {
  canRegister?: boolean;
}) {
  const { auth } = usePage<SharedData>().props;

  return (
    <>
      <Head title="Craftalog - Generate Beautiful Product Catalogs">
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link
          href="https://fonts.bunny.net/css?family=inter:400,500,600,700,800"
          rel="stylesheet"
        />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted">
        {/* Navigation */}
        <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="size-6 text-primary" />
                <span className="text-xl font-bold">Craftalog</span>
              </div>
              <div className="flex items-center gap-4">
                {auth.user ? (
                  <Link
                    href={dashboard()}
                    className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                  >
                    Dashboard
                  </Link>
                ) : (
                  <>
                    <Link
                      href={login()}
                      className="rounded-md px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                    >
                      Log in
                    </Link>
                    {canRegister && (
                      <Link
                        href={register()}
                        className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                      >
                        Get Started
                      </Link>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-muted px-4 py-1.5 text-sm">
              <Sparkles className="size-4" />
              <span>Transform your product catalog today</span>
            </div>
            <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Beautiful Product Catalogs
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Made Simple
              </span>
            </h1>
            <p className="mb-8 text-xl text-muted-foreground sm:text-2xl">
              Create professional, downloadable PDF catalogs for your products in
              minutes. No design skills required.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              {auth.user ? (
                <Link
                  href={dashboard()}
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-foreground hover:bg-primary/90"
                >
                  Go to Dashboard
                </Link>
              ) : (
                <>
                  {canRegister && (
                    <Link
                      href={register()}
                      className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-foreground hover:bg-primary/90"
                    >
                      Get Started Free
                    </Link>
                  )}
                  <Link
                    href={login()}
                    className="inline-flex items-center gap-2 rounded-md border px-8 py-3 text-base font-medium hover:bg-accent hover:text-accent-foreground"
                  >
                    Sign In
                  </Link>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="border-y bg-muted/50 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <h2 className="mb-12 text-center text-3xl font-bold">
                Everything you need to create stunning catalogs
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg border bg-card p-6">
                  <div className="mb-4 inline-flex size-12 items-center justify-center rounded-lg bg-primary/10">
                    <Layout className="size-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">
                    Simple Layout
                  </h3>
                  <p className="text-muted-foreground">
                    Organize your products with an intuitive interface. Choose
                    from multiple layout options.
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-6">
                  <div className="mb-4 inline-flex size-12 items-center justify-center rounded-lg bg-primary/10">
                    <FileText className="size-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">
                    PDF Generation
                  </h3>
                  <p className="text-muted-foreground">
                    Export your catalogs as professional PDFs with one click.
                    Print-ready quality every time.
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-6">
                  <div className="mb-4 inline-flex size-12 items-center justify-center rounded-lg bg-primary/10">
                    <Zap className="size-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">
                    Lightning Fast
                  </h3>
                  <p className="text-muted-foreground">
                    Create and update catalogs in seconds. No waiting, no
                    delays, just pure speed.
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-6">
                  <div className="mb-4 inline-flex size-12 items-center justify-center rounded-lg bg-primary/10">
                    <Download className="size-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">
                    Easy Sharing
                  </h3>
                  <p className="text-muted-foreground">
                    Download and share your catalogs with clients, partners, or
                    stakeholders instantly.
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-6">
                  <div className="mb-4 inline-flex size-12 items-center justify-center rounded-lg bg-primary/10">
                    <BookOpen className="size-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">
                    Multiple Catalogs
                  </h3>
                  <p className="text-muted-foreground">
                    Create unlimited catalogs for different product lines,
                    seasons, or special campaigns.
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-6">
                  <div className="mb-4 inline-flex size-12 items-center justify-center rounded-lg bg-primary/10">
                    <Sparkles className="size-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">
                    Professional Design
                  </h3>
                  <p className="text-muted-foreground">
                    Beautiful, modern layouts that make your products shine.
                    Branded with your company details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-4xl font-bold">
              Ready to create your first catalog?
            </h2>
            <p className="mb-8 text-xl text-muted-foreground">
              Join Craftalog today and start creating beautiful product catalogs
              in minutes.
            </p>
            {auth.user ? (
              <Link
                href={dashboard()}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-foreground hover:bg-primary/90"
              >
                Go to Dashboard
              </Link>
            ) : (
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                {canRegister && (
                  <Link
                    href={register()}
                    className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-foreground hover:bg-primary/90"
                  >
                    Get Started Free
                  </Link>
                )}
                <Link
                  href={login()}
                  className="inline-flex items-center gap-2 rounded-md border px-8 py-3 text-base font-medium hover:bg-accent hover:text-accent-foreground"
                >
                  Sign In
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t bg-muted/30 py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <div className="flex items-center gap-2">
                <BookOpen className="size-5 text-primary" />
                <span className="font-semibold">Craftalog</span>
              </div>
              <p className="text-sm text-muted-foreground">
                © 2024 Craftalog. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
