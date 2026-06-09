import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rayan Morais — Full-Stack Developer",
  description:
    "Full-stack developer specialising in React, Node.js, and TypeScript. Based in Brazil.",
  openGraph: {
    title: "Rayan Morais — Full-Stack Developer",
    description: "Full-stack developer specialising in React, Node.js, and TypeScript.",
    url: "https://www.rayancmorais.com.br",
    siteName: "Rayan Morais",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rayan Morais — Full-Stack Developer",
    description: "Full-stack developer specialising in React, Node.js, and TypeScript.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
