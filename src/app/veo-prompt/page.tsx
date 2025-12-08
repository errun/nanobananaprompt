import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { VeoPromptExamples } from "@/components/VeoPromptExamples";

export const metadata: Metadata = {
	  title: "Veo Prompt Examples & Best Practices - Nano Banana Prompt",
	  description:
	    "Learn how to write Veo prompts for cinematic video generation: structure, tips, and copy-and-paste Veo prompt examples you can adapt.",
};

export default function VeoPromptPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="border-b border-border/40 bg-gradient-to-b from-background to-zinc-900/40 py-10 sm:py-12">
          <div className="container mx-auto max-w-3xl px-4">
            <p className="mb-3 text-sm font-medium uppercase tracking-wide text-primary">
              Veo Prompt
            </p>
            <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
	              Veo Prompt Guide & SEO Hub
            </h1>
            <p className="mt-5 text-balance text-base text-muted-foreground sm:text-lg">
	              This page is a dedicated Veo prompt hub: what a good Veo prompt looks like, how to
	              structure it, and ready-to-use Veo prompt examples you can copy, paste, and adapt
	              for your own videos.
            </p>
            <p className="mt-4 text-balance text-sm text-muted-foreground">
	              The focus keyword of this page is <strong>veo prompt</strong>. Feel free to extend
	              it later with your own Nano Banana Veo prompt presets, case studies, and
	              screenshots as the gallery grows.
            </p>

	            {/* What is a Veo prompt */}
	            <div className="mt-10 space-y-8 text-left">
	              <section>
	                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
	                  What is a Veo prompt?
	                </h2>
	                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
	                  A <strong>Veo prompt</strong> is a short text description that tells Google&apos;s
	                  Veo video generation model what to create. The strongest prompts break your
	                  idea into clear parts: subject, action, scene, camera, visual style, and timing.
	                  The more specific you are, the more control you get over the final video.
	                </p>
	              </section>

	              <section>
	                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
	                  How to structure an effective Veo prompt
	                </h2>
	                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
	                  You don&apos;t need to use every element in every Veo prompt, but thinking in this
	                  structure makes it much easier to get reliable results:
	                </p>
	                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground sm:text-base">
	                  <li>
	                    <strong>Subject</strong> – who or what is in the shot? For example, &quot;a
	                    middle‑aged barista&quot;, &quot;a pair of running shoes&quot;, or &quot;a cyberpunk city&quot;.
	                  </li>
	                  <li>
	                    <strong>Action</strong> – what actually happens? Simple verbs like walking,
	                    pouring, turning, zooming in, or laughing are often enough.
	                  </li>
	                  <li>
	                    <strong>Scene &amp; mood</strong> – where and when is this Veo prompt taking
	                    place? Mention interior vs. exterior, time of day, weather, and overall
	                    emotion.
	                  </li>
	                  <li>
	                    <strong>Camera &amp; movement</strong> – describe camera angle and motion, for
	                    example &quot;slow dolly in&quot;, &quot;aerial drone shot&quot;, or &quot;handheld close‑up&quot;.
	                  </li>
	                  <li>
	                    <strong>Visual style</strong> – realistic vs. stylised, lighting, lens, and
	                    color palette (for example &quot;cinematic, soft golden light, shallow depth of
	                    field&quot;).
	                  </li>
	                  <li>
	                    <strong>Technical hints</strong> – optional but helpful details like
	                    &quot;16:9 aspect ratio, 6 second clip, 24 fps&quot; or &quot;loopable background shot&quot;.
	                  </li>
	                  <li>
	                    <strong>Negative Veo prompt</strong> – you can also mention what you don&apos;t
	                    want to see, for example &quot;no text on screen, no camera shake&quot;.
	                  </li>
	                </ul>
	              </section>

		              <section>
		                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
		                  Copy-and-paste Veo prompt examples
		                </h2>
		                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
		                  Below are example <strong>veo prompts</strong> that follow this structure.
		                  Start with these templates, then swap subjects, locations, and styles to match
		                  your project.
		                </p>
		
		                <VeoPromptExamples />
		              </section>
	            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
