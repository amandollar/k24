"use client";

import { motion } from "framer-motion";

export function Programs() {
  const programs = [
    {
      title: "Strength & Lifting",
      desc: "Progressive lifting blocks with form checks, heavy free-weights, and measurable weekly progression.",
      image: "/workout-with-dumble.webp"
    },
    {
      title: "Yoga & Recovery",
      desc: "Mindfulness, breathing control, flexibility recovery, and deep core conditioning.",
      image: "/Seated Cable Row.webp"
    },
    {
      title: "Zumba & Athletics",
      desc: "High-energy metabolic dance beats combined with active athletic conditioning tracks.",
      image: "/gym-trademill-cycles.webp"
    },
    {
      title: "CrossFit & HIIT",
      desc: "High-intensity functional circuits, Olympic lifts, and smart cardio intervals for maximum performance.",
      image: "/gym-dumbles.webp"
    }
  ];

  const clipPathStyle = {
    clipPath: "polygon(0 0, calc(100% - 44px) 0, 100% 44px, 100% 100%, 44px 100%, 0 calc(100% - 44px))"
  };

  return (
    <section id="programs" className="relative overflow-hidden bg-[#050505] py-32 lg:py-40">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(226,24,24,0.04),transparent_50%)] pointer-events-none" />
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="relative mx-auto max-w-[1500px] px-6 sm:px-12 lg:px-16">
        
        {/* 4-Column Uniform Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((prog, i) => {
            return (
              <motion.article 
                key={prog.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                style={clipPathStyle}
                className="group relative bg-white/[0.08] hover:bg-accent-500 p-[1.5px] aspect-[3/4.2] flex flex-col justify-between shadow-[0_20px_60px_rgba(0,0,0,0.5)] cursor-pointer transition-colors duration-500"
              >
                {/* Inner clipped box */}
                <div 
                  style={clipPathStyle}
                  className="relative h-full w-full bg-[#090909] flex flex-col justify-between overflow-hidden"
                >
                  {/* Background Image (fully visible by default) */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img 
                      src={prog.image} 
                      alt={prog.title} 
                      className="h-full w-full object-cover transition-all duration-[0.8s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 opacity-75 group-hover:opacity-100 filter grayscale-[0.35] group-hover:grayscale-0"
                    />
                    {/* Dark vignette overlay that fades in on hover for legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/85 to-[#050505]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  </div>

                  {/* Spacer to push content to the bottom */}
                  <div className="flex-1" />

                  {/* Bottom Row: Text content (Title always visible, desc expands on hover) */}
                  <div className="relative z-20 mt-auto p-7">
                    <h3 className="text-3xl font-teko font-semibold text-white uppercase tracking-normal leading-[0.95] flex items-center mb-1 group-hover:mb-3 transition-all duration-500">
                      <span className="text-accent-500 mr-2 font-black text-2xl">|</span>
                      {prog.title}
                    </h3>
                    
                    {/* Animated accordion reveal for description */}
                    <div className="max-h-0 group-hover:max-h-32 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out overflow-hidden">
                      <p className="text-sm leading-relaxed text-white/80 font-medium mt-1">
                        {prog.desc}
                      </p>
                      {/* Underline line */}
                      <div className="mt-4 h-[2px] w-full bg-accent-500" />
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
