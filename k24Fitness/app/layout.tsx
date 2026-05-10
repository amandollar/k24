import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap"
});

export const metadata: Metadata = {
  title: "K 24 Fitness Studios | Premium Training",
  description: "A cinematic fitness landing page demo for K 24 Fitness Studios."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${manrope.variable} font-sans antialiased bg-carbon-950 text-white selection:bg-accent-300 selection:text-black overflow-x-hidden`}>{children}</body>
    </html>
  );
}
