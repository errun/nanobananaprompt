import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PromptGallery, type SanityPrompt } from "@/components/PromptGallery";
import { Footer } from "@/components/Footer";
import { client } from "@/sanity/lib/client";
import { promptsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

// Sanity raw prompt type (before image URL transformation)
interface SanityPromptRaw {
  _id: string;
  title: string;
  category: SanityPrompt["category"];
  image: { asset: { _ref: string } };
  promptText: string;
  tags: string[];
}

async function getPrompts(): Promise<SanityPrompt[]> {
  const rawPrompts: SanityPromptRaw[] = await client.fetch(
    promptsQuery,
    {},
    { next: { revalidate: 60 } } // 每60秒重新验证数据
  );

  return rawPrompts.map((prompt) => ({
    _id: prompt._id,
    title: prompt.title,
    category: prompt.category,
    image: prompt.image ? urlFor(prompt.image).width(800).height(600).url() : "/placeholder.jpg",
    promptText: prompt.promptText,
    tags: prompt.tags || [],
  }));
}

export default async function Home() {
  const prompts = await getPrompts();

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <PromptGallery prompts={prompts} />
      </main>
      <Footer />
    </div>
  );
}
