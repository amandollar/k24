"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/section-title";

const amenities = [
  "Premium Strength & Heavy Lifting Zones",
  "High-Energy CrossFit Rig & Kickboxing Area",
  "Dedicated Yoga & Zumba Studio Spaces",
  "Premium Post-Workout Steam Baths & Showers",
  "Ample Safe Parking & Private Security Lockers"
];

export function Facilities() {
  const clipPathStyle = {
    clipPath: "polygon(44px 0, 100% 0, 100% calc(100% - 44px), calc(100% - 44px) 100%, 0 100%, 0 44px)"
  };

  return (
    <section id="facilities" className="relative mx-auto w-full max-w-[1440px] px-6 py-32 sm:px-12 lg:px-20 overflow-hidden">
      <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] items-center">
        
        {/* Opposing Bevel Cut Image Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          {/* Bevel cut border wrapper that glows on hover */}
          <div 
            style={clipPathStyle}
            className="relative bg-white/[0.08] group-hover:bg-accent-500 p-[1.5px] transition-colors duration-500 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          >
            <div 
              style={clipPathStyle}
              className="relative overflow-hidden aspect-[4/3] bg-carbon-950"
            >
              <img
                src="/trademil-in-hall.webp"
                alt="Facility"
                className="h-full w-full object-cover grayscale opacity-80 transition-all duration-[0.8s] group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-transparent to-transparent opacity-90" />
              
              <div className="absolute bottom-6 left-6 right-6 grid gap-4 sm:grid-cols-3">
                {["Elite CrossFit", "Steam Recovery", "Expert Coaching"].map((item, i) => (
                  <div key={item} className="rounded-sm bg-carbon-950/80 p-4 backdrop-blur-md border border-white/5 transition-transform hover:-translate-y-1">
                    <p className="text-xl font-teko font-black text-accent-500 leading-none">0{i + 1}</p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-wider text-white/90">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Compact Typographic Feature Column */}
        <div className="flex flex-col justify-center">
          <SectionTitle
            kicker="The Space"
            title="A studio built for focused progress."
            text="Walk in with a goal, train with clarity, and use a space designed for results without intimidation."
          />

          {/* 2-Column Minimal Editorial Feature Grid */}
          <div className="mt-10 grid gap-x-8 gap-y-5 sm:grid-cols-2 border-t border-white/5 pt-10">
            {amenities.map((item, i) => (
              <motion.div 
                key={item}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3 group"
              >
                <span className="text-accent-500 font-black text-lg select-none leading-none mt-[2px]">/</span>
                <p className="text-sm sm:text-base font-semibold leading-snug text-white/75 group-hover:text-white transition-colors duration-300">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
