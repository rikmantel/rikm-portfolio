import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const awesomeSerif = localFont({
  src: "./fonts/AwesomeSerif-MediumRegular.otf",
  variable: "--font-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Product Design Portfolio",
};

import { Providers } from "@/components/Providers";
import { Navigation } from "@/components/Navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${awesomeSerif.variable} ${jetbrainsMono.variable} antialiased bg-stone-50 text-stone-900 font-sans selection:bg-stone-200`}
      >
        <Providers>
          <Navigation />
          <main className="min-h-screen pb-32">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
