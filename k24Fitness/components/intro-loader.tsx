"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export function IntroLoader() {
  const brandLetters = "K24 FITNESS".split("");

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -18, filter: "blur(10px)" }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-[#050505]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(226,24,24,0.13),transparent_32%),linear-gradient(115deg,rgba(226,24,24,0.09),transparent_34%,rgba(255,255,255,0.04)_62%,transparent_78%)]" />
      <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-white/14 to-transparent" />

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.7, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
        className="absolute bottom-0 left-0 h-px w-full origin-left bg-gradient-to-r from-accent-500 via-white to-accent-500"
      />

      <div className="relative flex flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.84, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-7 flex h-12 w-12 items-center justify-center bg-accent-500 text-carbon-950 shadow-[0_0_54px_rgba(226,24,24,0.34)]"
        >
          <Zap size={23} fill="currentColor" />
        </motion.div>

        <motion.div
          aria-label="K24 Fitness"
          className="flex flex-wrap justify-center gap-x-2 gap-y-1 font-display text-[clamp(2.35rem,8vw,6.4rem)] font-black uppercase leading-none tracking-[-0.035em] text-white"
        >
          {brandLetters.map((letter, index) => (
            <motion.span
              key={`${letter}-${index}`}
              initial={{ opacity: 0, y: 34, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.68,
                delay: 0.34 + index * 0.045,
                ease: [0.16, 1, 0.3, 1]
              }}
              className={letter === " " ? "w-4 sm:w-7" : "inline-block"}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.28em] text-white/42 sm:text-[11px]"
        >
          <span>Private coaching</span>
          <span className="h-px w-10 bg-accent-500/70" />
          <span>Pune</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
