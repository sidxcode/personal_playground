import type { Metadata } from "next";
import { Alegreya, Martian_Mono } from "next/font/google";
import NavTabs from "../components/NavTabs";
import "./globals.css";

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const alegreya = Alegreya({
  variable: "--font-alegreya",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Home — Siddharth Borman",
  description: "Internet Home Of Siddharth Borman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${alegreya.variable} ${martianMono.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=general-sans@300,400,500,600,700&display=swap"
        />
      </head>
      <body className="bg-[#e8e0d5]">
        <NavTabs />

        {/* Fixed background */}
        <div className="fixed inset-0 z-0 bg-[#e8e0d5]" />

        {/* Fixed footer */}
        <footer className="fixed bottom-0 left-0 right-0 z-0 flex items-end justify-between px-8 pb-6 lg:left-[160px]">
          <p className="font-mono text-xs text-[#2a2a2a]">designing for cracked founders</p>
          <p className="font-mono text-xs text-[#2a2a2a]">bangalore, india</p>
        </footer>

        {/* Scrolling content */}
        <main className="relative z-10 min-h-screen bg-white pt-[8.75rem] md:pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
