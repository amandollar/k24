import type { Metadata } from "next";
import { Inter, Manrope, Teko } from "next/font/google";
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

const teko = Teko({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-teko",
  display: "swap"
});

export const metadata: Metadata = {
  title: "K24 Fitness Studios | Best Gym in Lohegaon, Pune",
  description: "Join K24 Fitness Studios on Porwal Road, Lohegaon, Pune. Premier fitness center featuring CrossFit, Yoga, Zumba, Kickboxing, Steam Bath, and expert training tracks."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${manrope.variable} ${teko.variable} font-sans antialiased bg-carbon-950 text-white selection:bg-accent-300 selection:text-black overflow-x-hidden`}>{children}</body>
    </html>
  );
}
