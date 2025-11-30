"use client";

import { Search } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-background to-zinc-900/50 py-20 sm:py-28">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
          <div className="h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm text-primary">
          ✨ 100% Free & Community Driven
        </div>

        {/* Headline */}
        <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          The Unofficial Gallery for{" "}
          <span className="text-primary">Nano Banana</span> Prompts
        </h1>

        {/* Subhead */}
        <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground sm:text-xl">
          Stop guessing parameters. Copy & paste tested prompts for professional
          headshots, cinematic styles, and logos. 100% Free.
        </p>

        {/* Mock Search Bar */}
        <div className="mx-auto mt-10 max-w-xl">
          <div className="group relative flex items-center">
            <Search className="absolute left-4 h-5 w-5 text-muted-foreground transition-colors group-focus-within:text-primary" />
            <input
              type="text"
              placeholder="Try searching for 'Professional Headshot'..."
              className="h-14 w-full rounded-xl border border-border bg-card pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              readOnly
            />
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Browse categories below or search for specific styles
          </p>
        </div>
      </div>
    </section>
  );
}

