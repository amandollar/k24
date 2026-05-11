"use client";

import { motion } from "framer-motion";
import { Star, Zap, ArrowRight } from "lucide-react";

export function ProofAndContact() {
  const clipPathStyle = {
    clipPath: "polygon(0 0, calc(100% - 48px) 0, 100% 48px, 100% 100%, 48px 100%, 0 calc(100% - 48px))"
  };

  return (
    <section id="contact" className="relative mx-auto w-full max-w-[1440px] px-6 py-32 sm:px-12 lg:px-20">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={clipPathStyle}
        className="group relative bg-white/[0.08] hover:bg-white/15 p-[1.5px] transition-colors duration-500 shadow-[0_30px_120px_rgba(0,0,0,0.6)]"
      >
        {/* Inner container */}
        <div 
          style={clipPathStyle}
          className="grid bg-carbon-950 lg:grid-cols-2 overflow-hidden"
        >
          {/* Left Column: Social Proof / Brand Stats */}
          <div className="relative p-10 sm:p-16 lg:p-20 flex flex-col justify-center border-b border-white/5 lg:border-b-0 lg:border-r border-white/5">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(226,24,24,0.03),transparent_50%)] pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <div className="flex gap-1 text-amber-500 filter drop-shadow-[0_0_8px_rgba(245,158,11,0.15)]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} fill="currentColor" size={18} />
                  ))}
                </div>
                <span className="text-[11px] font-black uppercase tracking-[0.16em] text-white/50">4.9/5 Rating (129+ Reviews)</span>
              </div>
              
              <p className="text-2xl sm:text-3xl lg:text-4xl font-teko font-medium leading-none text-white uppercase tracking-wide mb-8">
                "K24 Fitness Studios gives you the structure most people miss: trainer attention, clear programming, and a focused environment that makes consistency easier."
              </p>
              
              <div className="grid gap-8 sm:grid-cols-3 border-t border-white/5 pt-10">
                {[
                  ["6:00 AM", "Daily Start"],
                  ["1:1", "Coach guidance"],
                  ["Lohegaon", "Pune, Maharashtra"]
                ].map(([top, bottom]) => (
                  <div key={top}>
                    <p className="text-3xl font-teko font-semibold text-white uppercase leading-none mb-2">{top}</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-white/40">{bottom}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: High-Performance Contact Form */}
          <div className="relative bg-carbon-900/40 p-10 sm:p-16 lg:p-20 flex flex-col justify-center overflow-hidden">
            {/* Background glowing logo */}
            <div className="absolute -right-16 -bottom-16 text-white opacity-[0.015] pointer-events-none select-none">
              <Zap size={350} />
            </div>
            
            <div className="relative z-10 w-full max-w-md mx-auto lg:ml-0">
              <h2 className="text-[clamp(2.8rem,5vw,4.2rem)] font-teko font-bold leading-[0.85] text-white uppercase tracking-tight mb-4 select-none">
                BOOK YOUR <br />
                <span className="text-accent-500">ASSESSMENT.</span>
              </h2>
              <p className="text-sm sm:text-base font-medium text-white/60 mb-8 leading-relaxed">
                Share your details below. An elite coach will call you back to help select the right tracking programs before you commit.
              </p>

              <form className="grid gap-4 w-full">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder=" "
                    className="peer w-full h-16 bg-[#121212]/50 border border-white/5 px-6 text-sm font-semibold text-white rounded outline-none transition-all focus:bg-[#121212]/80 focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/20"
                  />
                  <label 
                    htmlFor="name" 
                    className="absolute left-6 top-1/2 -translate-y-1/2 text-sm font-bold text-white/40 transition-all pointer-events-none peer-focus:top-3 peer-focus:text-xs peer-focus:text-accent-500 peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:text-xs"
                  >
                    FULL NAME
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    required
                    placeholder=" "
                    className="peer w-full h-16 bg-[#121212]/50 border border-white/5 px-6 text-sm font-semibold text-white rounded outline-none transition-all focus:bg-[#121212]/80 focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/20"
                  />
                  <label 
                    htmlFor="phone" 
                    className="absolute left-6 top-1/2 -translate-y-1/2 text-sm font-bold text-white/40 transition-all pointer-events-none peer-focus:top-3 peer-focus:text-xs peer-focus:text-accent-500 peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:text-xs"
                  >
                    PHONE NUMBER
                  </label>
                </div>

                <button 
                  type="button"
                  className="group mt-4 flex h-16 w-full items-center justify-center gap-3 bg-white hover:bg-white/90 text-carbon-950 text-xs font-black uppercase tracking-[0.2em] rounded transition-all duration-300 shadow-lg shadow-white/5 hover:shadow-white/10"
                >
                  Request Callback
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
