"use client";

import { useState } from "react";

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: Record<string, unknown>) => void;
  }
}
import Image from "next/image";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export type PromptCategory = "Headshot" | "Cinematic" | "Logo" | "3D";

export interface SanityPrompt {
  _id: string;
  title: string;
  category: PromptCategory;
  image: string; // This will be the URL from urlFor
  promptText: string;
  tags: string[];
}

const categories: PromptCategory[] = ["Headshot", "Cinematic", "Logo", "3D"];

interface PromptGalleryProps {
  prompts: SanityPrompt[];
}

export function PromptGallery({ prompts }: PromptGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<PromptCategory | "All">("All");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredPrompts =
    activeCategory === "All"
      ? prompts
      : prompts.filter((p) => p.category === activeCategory);

  const handleCopy = async (id: string, text: string, title: string, category: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      toast.success("Copied to clipboard!", {
        description: "Prompt is ready to paste.",
      });

      // Track GA4 event
      globalThis.window?.gtag?.("event", "copy_prompt", {
        prompt_id: id,
        prompt_title: title,
        prompt_category: category,
      });

      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      toast.error("Failed to copy", {
        description: "Please try again.",
      });
    }
  };

  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Browse Prompts
          </h2>
          <p className="mt-3 text-muted-foreground">
            Click any card to copy the prompt to your clipboard
          </p>
        </div>

        {/* Category Tabs */}
        <Tabs
          value={activeCategory}
          onValueChange={(v) => setActiveCategory(v as PromptCategory | "All")}
          className="mb-10"
        >
          <TabsList className="mx-auto flex w-fit">
            <TabsTrigger value="All">All</TabsTrigger>
            {categories.map((cat) => (
              <TabsTrigger key={cat} value={cat}>
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

	        {/* Prompt Grid */}
	        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
	          {filteredPrompts.map((prompt, index) => (
            <Card
              key={prompt._id}
              className="group overflow-hidden border-border/40 bg-zinc-900 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
	              {/* Image */}
	              <div className="relative aspect-[4/3] overflow-hidden bg-zinc-800">
	                <Image
	                  src={prompt.image}
	                  alt={prompt.title}
	                  fill
	                  priority={index === 0}
	                  className="object-cover transition-transform duration-300 group-hover:scale-105"
	                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
	                />
                {/* Category Badge */}
                <Badge
                  variant="secondary"
                  className="absolute left-3 top-3 bg-zinc-950/80 backdrop-blur"
                >
                  {prompt.category}
                </Badge>
              </div>

              <CardContent className="p-4">
                {/* Title */}
                <h3 className="mb-2 font-semibold leading-tight">
                  {prompt.title}
                </h3>

                {/* Tags */}
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {prompt.tags?.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-xs text-muted-foreground"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Prompt Preview */}
                <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                  {prompt.promptText}
                </p>

                {/* Copy Button */}
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => handleCopy(prompt._id, prompt.promptText, prompt.title, prompt.category)}
                >
                  {copiedId === prompt._id ? (
                    <>
                      <Check className="mr-2 h-4 w-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2 h-4 w-4" />
                      Copy Prompt
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredPrompts.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-muted-foreground">
              No prompts found in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

