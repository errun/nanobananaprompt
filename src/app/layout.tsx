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
  title: "Nano Banana Prompts - Free AI Art Gallery (.art)",
  description:
    "Best collection of Nano Banana prompts for professional headshots and design. Copy & paste tested prompts for professional headshots, cinematic styles, and logos. 100% Free.",
  keywords: [
    "nano banana",
    "ai prompts",
    "headshots",
    "cinematic",
    "logo design",
    "ai art",
  ],
  openGraph: {
    title: "Nano Banana Prompts - Free AI Art Gallery",
    description:
      "Best collection of Nano Banana prompts for professional headshots and design.",
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
