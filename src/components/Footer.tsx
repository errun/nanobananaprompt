import Link from "next/link";
import { Banana } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-zinc-900/50">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Banana className="h-5 w-5 text-primary" />
            <span className="text-lg font-bold tracking-tight">
              NanoBananaPrompt<span className="text-primary">.art</span>
            </span>
          </Link>

          {/* Disclaimer */}
          <div className="max-w-2xl rounded-lg border border-border/40 bg-zinc-950/50 px-6 py-4">
            <p className="text-xs leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Disclaimer:</strong>{" "}
              NanoBananaPrompt.art is an independent, community-driven resource.
              We are not affiliated with, endorsed by, or connected to Google or
              the Nano Banana team. All trademarks belong to their respective
              owners.
            </p>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} NanoBananaPrompt.art. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

