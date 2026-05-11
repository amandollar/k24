"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  kicker?: string;
  title: React.ReactNode;
  text: string;
}

export function SectionTitle({ title, text }: SectionTitleProps) {
  return (
    <div className="max-w-3xl">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-[clamp(2.8rem,6vw,4.8rem)] font-teko font-[600] leading-[0.9] tracking-normal text-white uppercase"
      >
        {title}
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-4 max-w-xl text-lg leading-relaxed text-white/58 font-normal"
      >
        {text}
      </motion.p>
    </div>
  );
}
