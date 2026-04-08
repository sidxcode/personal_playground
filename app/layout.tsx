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
      <body className="min-h-full bg-white pt-[8.75rem] md:pt-16">
        <NavTabs />
        {children}
      </body>
    </html>
  );
}
