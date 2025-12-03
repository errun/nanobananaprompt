import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
	title: "Nano Banana Prompt - Free Gallery of Tested AI Prompts",
	description:
	  "Nano Banana Prompt is a free, community-driven gallery of tested prompts for headshots, cinematic styles and logo design. Copy & paste presets, no parameter guessing.",
  keywords: [
    "nano banana",
    "ai prompts",
    "headshots",
    "cinematic",
    "logo design",
    "ai art",
  ],
	openGraph: {
	  title: "Nano Banana Prompt - Free Gallery of Tested AI Prompts",
	  description:
	    "Nano Banana Prompt is a free, community-driven gallery of tested prompts for headshots, cinematic styles and logo design.",
	  type: "website",
	  locale: "en_US",
	},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans`}>
        {children}
        <Toaster richColors position="bottom-right" />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MBR7WGKYYW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MBR7WGKYYW');
          `}
        </Script>
      </body>
    </html>
  );
}
