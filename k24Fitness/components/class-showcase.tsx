"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/section-title";

const classes = [
  {
    title: "Olympic CrossFit",
    meta: "High-intensity metabolic work",
    image: "/gym-dumbles.webp"
  },
  {
    title: "Zumba & Bollywood",
    meta: "High-energy dance fitness",
    image: "/gym-trademill-cycles.webp"
  },
  {
    title: "Kickboxing Combat",
    meta: "Agility, form, and boxing",
    image: "/workout-with-dumble.webp"
  }
];

export function ClassShowcase() {
  return (
    <section id="training" className="relative bg-[#050505] py-32 lg:py-48 border-y border-white/[0.02]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(226,24,24,0.05),transparent_40%)] pointer-events-none" />
      
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Sticky Left Column */}
          <div className="lg:sticky lg:top-40">
            <SectionTitle
              kicker="Training"
              title={
                <>
                  Train smarter. <br />
                  <span className="text-accent-500 capitalize tracking-normal font-bold">Move better.</span>
                </>
              }
              text="Every class is structurally designed to be accessible for beginners while remaining challenging enough to force adaptation in advanced athletes."
            />
            <div className="hidden lg:flex items-center gap-4 mt-12 text-white/40 text-sm font-bold tracking-widest uppercase">
              <span className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                <ArrowRight size={16} className="rotate-90" />
              </span>
              Scroll to explore
            </div>
          </div>

          {/* Scrolling Right Column */}
          <div className="grid gap-12">
            {classes.map((item) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="group relative overflow-hidden rounded aspect-[4/5] sm:aspect-square lg:aspect-[4/5] bg-carbon-900 border border-white/5 cursor-pointer shadow-2xl"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08] filter grayscale-[0.8] opacity-50 group-hover:opacity-100 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
                
                <div className="absolute inset-0 p-10 flex flex-col justify-end transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-4">
                  <div className="overflow-hidden mb-4">
                    <p className="translate-y-full opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 text-[11px] font-black uppercase tracking-[0.2em] text-accent-500">
                      {item.meta}
                    </p>
                  </div>
                  <h3 className="text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-[0.9]">{item.title}</h3>
                </div>
              </motion.article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
