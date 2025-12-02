"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Banana, Plus } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Banana className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold tracking-tight">
            NanoBananaPrompt<span className="text-primary">.art</span>
          </span>
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="hidden sm:flex">
            <Plus className="mr-2 h-4 w-4" />
            Submit Prompt
          </Button>
          <Button size="sm" className="font-semibold">
            Get Headshots
          </Button>
        </div>
      </div>
    </header>
  );
}

