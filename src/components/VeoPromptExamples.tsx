"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

type ExampleId = "city" | "product" | "talking" | "social";

const veoExamples: { id: ExampleId; label: string; text: string }[] = [
  {
    id: "city",
    label: "Cinematic city b-roll Veo prompt",
    text:
      "Ultra cinematic 6-second 16:9 video of a modern city street at golden hour.\n" +
      "A young person in a dark hoodie walks past glowing shop windows while soft\n" +
      "traffic lights reflect on wet asphalt. Slow handheld camera following behind\n" +
      "at chest height, subtle depth of field, warm sunlight mixed with cool\n" +
      "neon accents, shot at 24 fps. No on-screen text, no heavy camera shake.",
  },
  {
    id: "product",
    label: "Product Veo prompt – sneakers close-up",
    text:
      "High-detail 8-second product Veo prompt of white running shoes on a\n" +
      "dark studio floor. Camera starts on a close-up of the sole landing in slow\n" +
      "motion, then tilts up to reveal the full shoe as dust particles float in\n" +
      "the light. Hard backlight creates a rim around the silhouette, cool blue\n+      accent lights on the background. 16:9 aspect ratio, crisp, clean, no\n+      people, no brand logos, no text.",
  },
  {
    id: "talking",
    label: "Talking-head explainer Veo prompt",
    text:
      "Clean 9-second Veo prompt of a tech creator talking to camera in a\n" +
      "minimal studio. Medium shot, camera on a tripod at eye level. Soft key\n" +
      "light from the left, subtle blue light on the background wall, shallow\n" +
      "depth of field. The presenter gestures naturally while explaining a\n+      feature, friendly and confident. Horizontal 16:9, 30 fps, suitable as a\n+      YouTube intro. No text overlays, no jump cuts.",
  },
  {
    id: "social",
    label: "Social ad Veo prompt – vertical format",
    text:
      "Punchy 7-second vertical Veo prompt (9:16) for a coffee brand. Start with\n" +
      "an extreme close-up of espresso pouring into a glass with rich crema,\n" +
      "then whip-pan to a slow-motion shot of someone laughing with friends at a\n" +
      "sunny street café. Bright, saturated colors, high contrast, energetic\n+      music implied. Loop-friendly ending where the cup returns to the saucer.\n+      Avoid logos and text so captions can be added later.",
  },
];

export function VeoPromptExamples() {
  const [copiedId, setCopiedId] = useState<ExampleId | null>(null);

  const handleCopy = async (id: ExampleId, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      toast.success("Copied to clipboard!", {
        description: "Veo prompt is ready to paste.",
      });

      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      toast.error("Failed to copy", {
        description: "Please try again.",
      });
    }
  };

  return (
    <div className="mt-5 space-y-5">
      {veoExamples.map((example) => (
        <div
          key={example.id}
          className="relative rounded-lg border border-border bg-zinc-900/60 p-4"
        >
          <div className="flex items-start justify-between gap-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              {example.label}
            </p>
            <Button
              variant="outline"
              size="icon"
              className="h-7 w-7 border-primary/40 bg-background/40"
              onClick={() => handleCopy(example.id, example.text)}
            >
              {copiedId === example.id ? (
                <Check className="h-3.5 w-3.5" />
              ) : (
                <Copy className="h-3.5 w-3.5" />
              )}
            </Button>
          </div>
          <p className="mt-2 whitespace-pre-wrap text-xs font-mono leading-relaxed sm:text-sm">
            {example.text}
          </p>
        </div>
      ))}
    </div>
  );
}
