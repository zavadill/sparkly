import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sparkly Maid NYC",
    template: "%s | Sparkly Maid NYC",
  },
  description:
    "Modern and minimalist multi-page website for Sparkly Maid NYC cleaning services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("h-full", "antialiased", inter.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <Script id="theme-by-system" strategy="beforeInteractive">{`(function(){const root=document.documentElement;const media=window.matchMedia('(prefers-color-scheme: dark)');const apply=(isDark)=>root.classList.toggle('dark',isDark);apply(media.matches);if(media.addEventListener){media.addEventListener('change',e=>apply(e.matches));}else if(media.addListener){media.addListener(e=>apply(e.matches));}})();`}</Script>
        {children}
      </body>
    </html>
  );
}
