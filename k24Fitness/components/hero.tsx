"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Award, Zap, Calendar } from "lucide-react";
import type { Variants } from "framer-motion";
import { Header } from "@/components/header";

export function Hero() {
  const premiumEase = [0.16, 1, 0.3, 1] as const;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: premiumEase },
    },
  };

  const features = [
    {
      icon: <Clock className="h-6 w-6 text-accent-500" />,
      top: "05:30",
      bottom: "FIRST BATCH",
    },
    {
      icon: <Award className="h-6 w-6 text-accent-500" />,
      top: "1:1",
      bottom: "TRAINER FOCUS",
    },
    {
      icon: <Zap className="h-6 w-6 text-accent-500" />,
      top: "360",
      bottom: "PLAN + HABIT",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#050505] pt-24 lg:pt-0"
    >
      <Header />

      {/* Hero Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero_Image.webp"
          alt="K24 Fitness Studio Background"
          className="h-full w-full object-cover object-center pointer-events-none scale-105"
        />
        {/* Gradients to merge image with dark theme and improve text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10" />
        <div className="absolute inset-0 bg-black/25 z-10" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 mx-auto w-full max-w-[1500px] px-6 sm:px-12 lg:px-16 pt-12 pb-32 lg:pb-40">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-[800px] flex flex-col items-start text-left"
        >
          {/* Section kicker */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-6 h-[2px] bg-accent-500 block rounded-full" />
            <p className="text-[11px] sm:text-xs font-black uppercase tracking-[0.14em] text-white/90">
              PREMIUM EQUIPMENT. EXPERT TRAINERS
            </p>
          </motion.div>

          {/* Large Hero Title */}
          <motion.h1
            variants={itemVariants}
            className="text-[clamp(4.8rem,12vw,7.4rem)] font-teko font-[600] leading-[0.85] text-white uppercase select-none"
          >
            Join the Gym <br />
            That Keeps You <br />
            <span className="text-accent-500">Coming Back.</span>
          </motion.h1>
          {/* Action button */}
          <motion.div
            variants={itemVariants}
            className="mt-9 flex w-full sm:w-auto"
          >
            <a
              href="#contact"
              className="group inline-flex h-14 items-center justify-center gap-3.5 bg-accent-500 px-10 text-[11px] font-black uppercase tracking-[0.18em] text-white rounded transition-all duration-300 hover:bg-accent-600 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(226,24,24,0.35)] active:translate-y-0"
            >
              START YOUR JOURNEY
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          {/* Features Row inside Content (Mobile Only) */}
          <motion.div
            variants={itemVariants}
            className="mt-12 w-full grid grid-cols-3 gap-3 border-t border-white/10 pt-8 lg:hidden"
          >
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-2 sm:gap-3 bg-white/[0.02] border border-white/5 p-3 rounded"
              >
                <div className="p-1.5 sm:p-2 bg-white/[0.03] border border-white/5 rounded shrink-0">
                  {feat.icon}
                </div>
                <div>
                  <p className="text-[10px] sm:text-[11px] font-black text-white leading-tight uppercase tracking-wider">
                    {feat.top}
                  </p>
                  <p className="text-[8px] sm:text-[9px] font-bold text-white/40 leading-none uppercase tracking-widest mt-1">
                    {feat.bottom}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Free Trial Widget inside Content (Mobile Only) */}
          <motion.div variants={itemVariants} className="mt-6 w-full lg:hidden">
            <div className="flex items-center gap-4 bg-[#0e0e0e]/90 border border-white/10 p-5 rounded shadow-2xl backdrop-blur-md">
              <div className="bg-accent-500 text-white w-12 h-12 rounded flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(226,24,24,0.4)]">
                <Calendar className="h-5.5 w-5.5" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-white/60">
                  7 DAY
                </p>
                <p className="text-sm font-black tracking-tight text-accent-500 uppercase leading-none mt-0.5">
                  FREE TRIAL
                </p>
                <p className="text-[10px] text-white/40 font-medium mt-1">
                  No commitments. Just results.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom widgets bar (Desktop/Tablet Only) */}
      <div className="absolute bottom-10 left-0 right-0 z-20 px-6 sm:px-12 lg:px-16 hidden lg:block">
        <div className="mx-auto max-w-[1500px] flex items-center justify-between gap-10">
          {/* Horizontal Features Row */}
          <div className="flex items-center gap-1 bg-[#050505]/65 border border-white/10 backdrop-blur-md p-2 rounded shadow-2xl">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 px-6 py-3 border-r border-white/10 last:border-0"
              >
                <div className="shrink-0">{feat.icon}</div>
                <div>
                  <p className="text-xs font-black text-white leading-none uppercase tracking-wider">
                    {feat.top}
                  </p>
                  <p className="text-[9px] font-bold text-white/40 leading-none uppercase tracking-widest mt-1.5">
                    {feat.bottom}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 7 Day Free Trial Card */}
          <div className="flex items-center gap-4 bg-[#0a0a0a]/90 border border-white/10 p-4 rounded shadow-2xl backdrop-blur-md min-w-[310px] hover:border-accent-500/30 transition-colors duration-300">
            <div className="bg-accent-500 text-white w-12 h-12 rounded flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(226,24,24,0.4)]">
              <Calendar className="h-5.5 w-5.5" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-white/70">
                7 DAY
              </p>
              <p className="text-[1.1rem] font-black tracking-tight text-accent-500 uppercase leading-none mt-0.5">
                FREE TRIAL
              </p>
              <p className="text-[10px] text-white/40 font-medium mt-1">
                No commitments. Just results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
