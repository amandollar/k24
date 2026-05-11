"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/section-title";

const coaches = [
  {
    name: "Vikram Sharma",
    role: "Head Coach — Strength & Body Transformation",
    image: "/workout-with-dumble.webp"
  },
  {
    name: "Aman Dev",
    role: "CrossFit Lead — High-Intensity Circuits",
    image: "/Seated Cable Row.webp"
  },
  {
    name: "Karan Singh",
    role: "Combat Coach — Agility & Kickboxing",
    image: "/gym-dumbles.webp"
  }
];

export function Coaches() {
  return (
    <section id="coaches" className="bg-carbon-900 py-32 border-y border-white/5 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-accent-500/5 to-transparent blur-3xl" />
      
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-12 lg:px-20">
        <SectionTitle
          kicker="The Team"
          title={
            <>
              Expertise that <br />
              <span className="text-accent-500">drives results.</span>
            </>
          }
          text="A trainer-led experience ensures you stay consistent, maintain perfect form, and progress safely week over week."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {coaches.map((coach, index) => (
            <motion.article 
              key={coach.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded border border-white/10 bg-carbon-950"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={coach.image} 
                  alt={coach.name} 
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105 opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100" 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-carbon-950/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                <h3 className="text-3xl font-black text-white">{coach.name}</h3>
                <p className="mt-2 text-sm font-bold uppercase tracking-wider text-accent-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100">{coach.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
