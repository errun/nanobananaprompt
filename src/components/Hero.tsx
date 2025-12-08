export function Hero() {
  return (
	    <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-background to-zinc-900/50 py-8 sm:py-10">
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
		        <span className="text-primary">Nano Banana Prompt</span> Gallery
		      </h1>

		      {/* Subhead */}
		      <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground sm:text-xl">
		        Copy & paste tested Nano Banana Prompt presets for professional headshots,
		        cinematic scenes and logos - 100% free and community-driven.
		      </p>
      </div>
    </section>
  );
}

