"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IntroLoader } from "@/components/intro-loader";
import { Hero } from "@/components/hero";
import { Programs } from "@/components/programs";
import { ClassShowcase } from "@/components/class-showcase";
import { Facilities } from "@/components/facilities";
import { Coaches } from "@/components/coaches";
import { ProofAndContact } from "@/components/proof-and-contact";
import { Footer } from "@/components/footer";

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIntroComplete(true), 2450);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#050505] text-white selection:bg-accent-300 selection:text-black">
      <div className="fixed inset-0 z-[1] bg-noise opacity-[0.02] pointer-events-none mix-blend-overlay" />

      <AnimatePresence>
        {!introComplete && <IntroLoader />}
      </AnimatePresence>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: introComplete ? 1 : 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10"
      >
        <Hero />
        <Programs />
        <ClassShowcase />
        <Facilities />
        <Coaches />
        <ProofAndContact />
        <Footer />
      </motion.div>
    </main>
  );
}
