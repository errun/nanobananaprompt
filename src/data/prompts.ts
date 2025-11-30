export type PromptCategory = "Headshot" | "Cinematic" | "Logo" | "3D";

export interface Prompt {
  id: string;
  title: string;
  category: PromptCategory;
  image: string;
  promptText: string;
  tags: string[];
}

export const prompts: Prompt[] = [
  {
    id: "1",
    title: "Corporate Executive Headshot",
    category: "Headshot",
    image: "/prompts/headshot-1.jpg",
    promptText:
      "Professional corporate headshot of a confident business executive, wearing a tailored navy suit, neutral gray backdrop, soft studio lighting, sharp focus on eyes, slight smile, high-end photography style, 8k resolution",
    tags: ["professional", "business", "executive", "studio"],
  },
  {
    id: "2",
    title: "Creative Artist Portrait",
    category: "Headshot",
    image: "/prompts/headshot-2.jpg",
    promptText:
      "Artistic creative professional headshot, moody natural lighting, urban loft background with exposed brick, casual smart attire, authentic expression, shallow depth of field, editorial photography style",
    tags: ["creative", "artistic", "casual", "urban"],
  },
  {
    id: "3",
    title: "Noir Detective Scene",
    category: "Cinematic",
    image: "/prompts/cinematic-1.jpg",
    promptText:
      "Cinematic noir scene, mysterious detective in trench coat standing under streetlight, heavy rain, fog-filled alley, dramatic chiaroscuro lighting, 1940s aesthetic, film grain, anamorphic lens flare, 2.35:1 aspect ratio",
    tags: ["noir", "detective", "moody", "rain"],
  },
  {
    id: "4",
    title: "Sci-Fi Space Commander",
    category: "Cinematic",
    image: "/prompts/cinematic-2.jpg",
    promptText:
      "Epic sci-fi scene, space commander on starship bridge, holographic displays, dramatic blue and orange lighting, futuristic military uniform, determined expression, lens flare from distant stars, IMAX quality",
    tags: ["sci-fi", "space", "commander", "futuristic"],
  },
  {
    id: "5",
    title: "Minimalist Tech Startup Logo",
    category: "Logo",
    image: "/prompts/logo-1.jpg",
    promptText:
      "Minimalist tech startup logo design, geometric abstract mark, clean vector lines, modern sans-serif wordmark, gradient from electric blue to purple, scalable for app icon and letterhead, white background",
    tags: ["minimalist", "tech", "modern", "geometric"],
  },
  {
    id: "6",
    title: "Floating 3D Product Display",
    category: "3D",
    image: "/prompts/3d-1.jpg",
    promptText:
      "3D product visualization, sleek electronic device floating in space, soft ambient occlusion, subtle reflections on glass surface, gradient studio background, physically accurate materials, octane render quality",
    tags: ["product", "floating", "render", "visualization"],
  },
];

export const categories: PromptCategory[] = ["Headshot", "Cinematic", "Logo", "3D"];

