import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Logo from "@/components/Logo";

export function LegalPage({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-ground">
      <LegalNav />
      <main className="mx-auto max-w-3xl px-5 py-20 md:px-10">
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">Legal</p>
        <h1 className="mb-3 font-display text-4xl font-bold text-text md:text-5xl">{title}</h1>
        <p className="mb-12 font-mono text-xs text-muted">Last updated: {lastUpdated}</p>
        <div className="space-y-10">{children}</div>
      </main>
      <LegalFooter />
    </div>
  );
}

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="mb-4 font-display text-xl font-semibold text-text">{title}</h2>
      <div className="legal-body space-y-3">{children}</div>
    </section>
  );
}

export function LegalNav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-ground/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-5 md:px-10">
        <Link href="/">
          <Logo size="sm" />
        </Link>
        <Link
          href="/"
          className="flex items-center gap-1.5 font-mono text-xs text-muted transition-colors duration-150 hover:text-text"
        >
          <ArrowLeft size={12} />
          Back to home
        </Link>
      </div>
    </nav>
  );
}

export function LegalFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-ground-2">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-4 px-5 py-8 md:flex-row md:px-10">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} BuildShip AI. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link
            href="/privacy-policy"
            className="font-mono text-xs text-muted transition-colors duration-150 hover:text-text"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            className="font-mono text-xs text-muted transition-colors duration-150 hover:text-text"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
