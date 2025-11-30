import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PromptGallery } from "@/components/PromptGallery";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <PromptGallery />
      </main>
      <Footer />
    </div>
  );
}
