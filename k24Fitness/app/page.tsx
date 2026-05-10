"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Clock3,
  Dumbbell,
  Flame,
  Instagram,
  Mail,
  Menu,
  Phone,
  ShieldCheck,
  Star,
  Trophy,
  Zap
} from "lucide-react";
import type { Variants } from "framer-motion";

const classes = [
  {
    title: "Barbell Strength",
    meta: "Foundation lifts",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=85"
  },
  {
    title: "HIIT Engine",
    meta: "Burn and stamina",
    image:
      "https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&w=900&q=85"
  },
  {
    title: "Athletic Core",
    meta: "Control and power",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=85"
  }
];

const amenities = [
  "Premium strength equipment",
  "Clean changing and shower area",
  "Locker, parking, and water cooler",
  "Beginner-friendly trainer support"
];

const coaches = [
  {
    name: "Head Coach",
    role: "Strength and transformation",
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=700&q=85"
  },
  {
    name: "Conditioning",
    role: "Fat loss and stamina",
    image:
      "https://images.unsplash.com/photo-1609899537878-88d5ba429bdb?auto=format&fit=crop&w=700&q=85"
  },
  {
    name: "Personal Trainer",
    role: "Form, mobility, and habit plans",
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=700&q=85"
  }
];

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

function IntroLoader() {
  const brandLetters = "K24 FITNESS".split("");

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -18, filter: "blur(10px)" }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-[#050505]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,92,0,0.13),transparent_32%),linear-gradient(115deg,rgba(255,92,0,0.09),transparent_34%,rgba(255,255,255,0.04)_62%,transparent_78%)]" />
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
          className="mb-7 flex h-12 w-12 items-center justify-center bg-accent-500 text-carbon-950 shadow-[0_0_54px_rgba(255,92,0,0.34)]"
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


function Hero() {
  const premiumEase = "easeOut" as const;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: premiumEase } }
  };

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-[#050505] pt-28 lg:pt-32">
      <Header />

      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,92,0,0.11),transparent_30%,rgba(255,255,255,0.035)_58%,transparent_75%)]" />
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto grid min-h-[calc(100svh-8rem)] w-full max-w-[1500px] items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-[0.95fr_0.86fr] lg:px-16"
      >
        <div className="relative z-20 max-w-[720px] py-8 lg:-mt-6 lg:py-14">
          <motion.p variants={itemVariants} className="mb-7 inline-flex max-w-full items-center gap-3 border-l border-accent-500/70 pl-4 text-[10px] font-black uppercase tracking-[0.24em] text-white/50 sm:text-[11px]">
            Lohegaon, Pune
            <span className="hidden h-px w-8 bg-white/20 sm:block" />
            <span className="text-white/72">Private coaching studio</span>
          </motion.p>

          <motion.h1 variants={itemVariants} className="max-w-[680px] text-[clamp(3.2rem,7vw,6.2rem)] font-black leading-[0.9] tracking-[-0.035em] text-white">
            Train with intent.
          </motion.h1>

          <motion.div variants={itemVariants} className="mt-9 grid gap-5 border-y border-white/10 py-7 md:grid-cols-[0.62fr_1fr] md:gap-10">
            <p className="pt-1 text-xs font-black uppercase tracking-[0.22em] text-accent-400 sm:text-sm">
              K 24 Fitness Studio
            </p>
            <p className="max-w-[35rem] text-[1.02rem] leading-8 text-white/66 sm:text-lg">
              A focused strength and conditioning space for guided workouts, cleaner form, and consistent progress. No random routines. No crowded-floor confusion.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="group inline-flex h-14 w-full items-center justify-center gap-3 rounded-sm bg-white px-8 text-[13px] font-black uppercase tracking-[0.14em] text-carbon-950 shadow-[0_20px_60px_rgba(255,255,255,0.08)] transition-all duration-300 hover:-translate-y-1 hover:bg-accent-500 hover:shadow-[0_22px_70px_rgba(255,92,0,0.22)] sm:w-auto"
            >
              Book Assessment
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            
            <a href="#programs" className="inline-flex h-14 w-full items-center justify-center rounded-sm border border-white/10 px-7 text-[12px] font-black uppercase tracking-[0.14em] text-white/58 transition-all duration-300 hover:-translate-y-1 hover:border-white/26 hover:bg-white/[0.035] hover:text-white sm:w-auto">
              Explore Training
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-9 grid max-w-[630px] grid-cols-3 gap-px border border-white/[0.08] bg-white/[0.08]">
            {[
              ["05:30", "First batch"],
              ["1:1", "Trainer focus"],
              ["360", "Plan + habit"]
            ].map(([value, label]) => (
              <div key={label} className="relative bg-[#050505]/90 px-4 py-5 sm:px-6">
                <span className="mb-4 block h-px w-8 bg-accent-500/70" />
                <p className="text-[1.65rem] font-black leading-none tracking-tight text-white sm:text-[1.95rem]">{value}</p>
                <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white/42">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.97, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 0.15, ease: premiumEase }}
          className="relative min-h-[520px] overflow-hidden border border-white/10 bg-carbon-900/60 shadow-[0_30px_140px_rgba(0,0,0,0.75)] sm:min-h-[640px] lg:min-h-[740px]"
        >
          <img
            src="/premium_fitness_model.png"
            alt="K 24 fitness training"
            className="absolute inset-0 h-full w-full object-cover object-top opacity-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/75 via-transparent to-transparent lg:from-transparent" />
          <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#050505]/78 p-5 backdrop-blur-xl sm:p-6">
            <div className="absolute left-0 top-0 h-px w-32 bg-gradient-to-r from-accent-500 to-transparent" />
            <div className="flex items-center justify-between gap-5">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-accent-400">Signature track</p>
                <p className="mt-1.5 text-[1.45rem] font-black leading-tight tracking-tight text-white sm:text-[1.65rem]">Strength + Conditioning</p>
              </div>
              <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/14 bg-white/[0.03] text-white/72 sm:flex">
                <Zap size={18} fill="currentColor" />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 z-20 border-y border-white/[0.07] bg-[#050505]/72 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-5 px-5 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-white/38 sm:px-8 lg:px-16">
          <span>Structured Programs</span>
          <span className="hidden h-px flex-1 bg-white/10 sm:block" />
          <span className="text-accent-400/90">Strength / Conditioning / Mobility</span>
        </div>
      </div>
    </section>
  );
}

function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed left-0 right-0 top-5 z-50 flex justify-center px-4 pointer-events-none"
    >
      <div className="pointer-events-auto flex w-full max-w-[1180px] items-center justify-between border border-white/[0.08] bg-[#050505]/74 px-4 py-2.5 shadow-[0_18px_70px_rgba(0,0,0,0.42)] backdrop-blur-2xl sm:px-5">
        <a href="#home" className="group flex items-center gap-3 relative z-10">
          <div className="flex h-9 w-9 items-center justify-center bg-accent-500 text-carbon-950 shadow-[0_0_34px_rgba(255,92,0,0.24)]">
            <Zap size={17} fill="currentColor" />
          </div>
          <span className="text-[1.18rem] font-black tracking-tight text-white transition-colors group-hover:text-accent-400">K 24</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {["Programs", "Training", "Facilities", "Coaches"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="px-4 py-2 text-[10px] font-black uppercase tracking-[0.15em] text-white/46 transition-all hover:bg-white/[0.045] hover:text-white">
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="#contact"
            className="group relative inline-flex h-10 items-center justify-center overflow-hidden bg-white px-6 text-[10px] font-black uppercase tracking-[0.16em] text-carbon-950 transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_10px_40px_rgba(255,92,0,0.22)]"
          >
            <span className="relative z-10">Book Trial</span>
            <div className="absolute inset-0 bg-accent-500 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
          </a>
        </div>

        <button className="flex h-10 w-10 items-center justify-center border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 lg:hidden">
          <Menu size={18} />
        </button>
      </div>
    </motion.header>
  );
}

function SectionTitle({
  kicker,
  title,
  text
}: {
  kicker: string;
  title: React.ReactNode;
  text: string;
}) {
  return (
    <div className="max-w-3xl">
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-accent-400"
      >
        <span className="h-px w-8 bg-accent-400" />
        {kicker}
      </motion.p>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-[clamp(2.4rem,5vw,4.4rem)] font-extrabold leading-[1] tracking-tight text-white"
      >
        {title}
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-6 max-w-xl text-lg leading-relaxed text-white/58 font-normal"
      >
        {text}
      </motion.p>
    </div>
  );
}

function Programs() {
  const programs = [
    {
      title: "Strength Foundation",
      desc: "Progressive lifting blocks with form checks, sensible volume, and measurable weekly progress.",
      icon: Dumbbell,
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
      colSpan: "lg:col-span-2",
      height: "min-h-[440px]"
    },
    {
      title: "Conditioning",
      desc: "Smart intervals, circuits, and recovery-aware sessions for stamina and fat-loss goals.",
      icon: Activity,
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
      colSpan: "lg:col-span-1",
      height: "min-h-[440px]"
    },
    {
      title: "Personal Coaching",
      desc: "Focused trainer attention for technique, accountability, nutrition habits, and progression.",
      icon: Flame,
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
      colSpan: "lg:col-span-1",
      height: "min-h-[440px]"
    },
    {
      title: "Athletic Mobility",
      desc: "Core strength, joint control, and movement quality for members who want to feel powerful, not beaten up.",
      icon: Trophy,
      image: "https://images.unsplash.com/photo-1558694084-25e2e3ffbfa4?auto=format&fit=crop&w=1200&q=80",
      colSpan: "lg:col-span-2",
      height: "min-h-[440px]"
    }
  ];

  return (
    <section id="programs" className="relative overflow-hidden bg-[#050505] py-28 lg:py-36">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/14 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/[0.035] to-transparent pointer-events-none" />
      
      <div className="relative mx-auto max-w-[1440px] px-6 pt-4 sm:px-12 lg:px-20">
        <SectionTitle 
          kicker="Methodology" 
          title={
            <>
              Training built <br />
              <span className="font-bold text-accent-500 capitalize tracking-normal">around your goal.</span>
            </>
          } 
          text="Structured strength, conditioning, and mobility work with trainer guidance at every level. Clear sessions, clean progression, and no wasted effort." 
        />

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((prog, i) => {
            const Icon = prog.icon;
            return (
              <motion.article 
                key={prog.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                viewport={{ once: true }}
                className={`group relative overflow-hidden bg-carbon-900/40 border border-white/[0.08] p-7 lg:p-9 ${prog.colSpan} ${prog.height} flex flex-col justify-end shadow-[0_24px_80px_rgba(0,0,0,0.35)] cursor-pointer`}
              >
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img 
                    src={prog.image} 
                    alt={prog.title} 
                    className="h-full w-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05] filter grayscale opacity-[0.22] group-hover:opacity-[0.42]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/72 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/55 to-transparent" />
                </div>

                <div className="absolute left-7 top-7 z-10 text-[11px] font-black uppercase tracking-[0.22em] text-white/32">
                  0{i + 1}
                </div>

                <div className="relative z-10">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center border border-white/10 bg-[#050505] text-accent-500 shadow-xl transition-colors duration-500 group-hover:bg-white group-hover:text-[#050505]">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-[clamp(1.9rem,3vw,2.85rem)] font-black text-white mb-4 tracking-tight leading-[0.95]">{prog.title}</h3>
                  <p className="text-base lg:text-lg leading-relaxed text-white/55 group-hover:text-white/82 transition-colors max-w-lg font-medium">{prog.desc}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ClassShowcase() {
  return (
    <section id="training" className="relative bg-[#050505] py-32 lg:py-48 border-y border-white/[0.02]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,92,0,0.05),transparent_40%)] pointer-events-none" />
      
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
            {classes.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="group relative overflow-hidden rounded-[2rem] aspect-[4/5] sm:aspect-square lg:aspect-[4/5] bg-carbon-900 border border-white/5 cursor-pointer shadow-2xl"
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

function Facilities() {
  return (
    <section id="facilities" className="relative mx-auto w-full max-w-[1440px] px-6 py-32 sm:px-12 lg:px-20 overflow-hidden">
      <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-accent-400/5 blur-2xl rounded-full" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1400&q=90"
              alt="Facility"
              className="h-full w-full object-cover grayscale opacity-80 transition-opacity hover:opacity-100 hover:grayscale-0 duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-transparent to-transparent opacity-90" />
            
            <div className="absolute bottom-6 left-6 right-6 grid gap-4 sm:grid-cols-3">
              {["Elite Equipment", "Clean Space", "Expert Coaching"].map((item, i) => (
                <div key={item} className="rounded-2xl bg-carbon-950/60 p-5 backdrop-blur-md border border-white/10 transition-transform hover:-translate-y-1">
                  <p className="text-3xl font-extrabold text-accent-400 opacity-50">0{i + 1}</p>
                  <p className="mt-2 text-sm font-bold text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div>
          <SectionTitle
            kicker="The Space"
            title="A studio built for focused progress."
            text="Walk in with a goal, train with clarity, and use a space designed for results without intimidation."
          />

          <div className="mt-12 grid gap-6">
            {amenities.map((item, i) => (
              <motion.div 
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-carbon-900/50 p-4 transition-colors hover:bg-carbon-800"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-carbon-950 text-accent-400 transition-colors group-hover:bg-accent-400 group-hover:text-carbon-950">
                  <ShieldCheck size={24} />
                </div>
                <p className="text-base font-semibold text-white/90">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function Coaches() {
  return (
    <section id="coaches" className="bg-carbon-900 py-32 border-y border-white/5 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-accent-400/5 to-transparent blur-3xl" />
      
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-12 lg:px-20">
        <SectionTitle
          kicker="The Team"
          title={
            <>
              Expertise that <br />
              <span className="text-accent-400">drives results.</span>
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
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-carbon-950"
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
                <p className="mt-2 text-sm font-bold uppercase tracking-wider text-accent-400 opacity-0 transition-opacity duration-500 group-hover:opacity-100">{coach.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProofAndContact() {
  return (
    <section id="contact" className="relative mx-auto w-full max-w-[1440px] px-6 py-32 sm:px-12 lg:px-20">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid overflow-hidden border border-white/10 bg-carbon-900 shadow-[0_30px_120px_rgba(0,0,0,0.48)] lg:grid-cols-2"
      >
        <div className="relative p-10 sm:p-16 lg:p-20 flex flex-col justify-center">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(255,92,0,0.06),transparent_50%)]" />
          
          <div className="relative z-10">
            <div className="flex gap-1 text-accent-400 mb-8">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} fill="currentColor" size={20} />
              ))}
            </div>
            <p className="text-2xl sm:text-3xl font-semibold leading-tight text-white mb-12">
              "K 24 gives you the structure most people miss: trainer attention, clear programming, and a focused environment that makes consistency easier."
            </p>
            
            <div className="grid gap-8 sm:grid-cols-3 border-t border-white/10 pt-12">
              {[
                ["5:30 AM", "Morning batches"],
                ["1:1", "Coach guidance"],
                ["Local", "Lohegaon, Pune"]
              ].map(([top, bottom]) => (
                <div key={top}>
                  <p className="text-3xl font-black text-white mb-1">{top}</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-accent-400">{bottom}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative bg-[#f2eee7] p-10 sm:p-16 lg:p-20 text-carbon-950 flex flex-col justify-center overflow-hidden">
          <div className="absolute -right-20 -bottom-20 text-accent-500 opacity-10">
            <Zap size={400} />
          </div>
          
          <div className="relative z-10">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-carbon-900/55 mb-5">Start With Clarity</p>
            <h2 className="text-[clamp(3rem,5vw,4.5rem)] font-black leading-[0.9] tracking-tight mb-6">
              Book your <br /> assessment.
            </h2>
            <p className="max-w-md text-lg font-medium text-carbon-900/80 mb-10">
              Share your details. A coach will help you choose the right training track before you commit.
            </p>

            <form className="grid gap-4">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  placeholder="Full Name"
                  className="peer w-full h-16 bg-white/70 border border-carbon-950/10 px-6 text-base font-bold text-carbon-950 placeholder-transparent outline-none transition-all focus:bg-white focus:ring-2 focus:ring-carbon-950"
                />
                <label htmlFor="name" className="absolute left-6 top-5 text-sm font-bold text-carbon-950/60 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-carbon-950 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs">
                  Full Name
                </label>
              </div>
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  placeholder="Phone Number"
                  className="peer w-full h-16 bg-white/70 border border-carbon-950/10 px-6 text-base font-bold text-carbon-950 placeholder-transparent outline-none transition-all focus:bg-white focus:ring-2 focus:ring-carbon-950"
                />
                <label htmlFor="phone" className="absolute left-6 top-5 text-sm font-bold text-carbon-950/60 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-carbon-950 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs">
                  Phone Number
                </label>
              </div>
              <button 
                type="button"
                className="group mt-4 flex h-16 items-center justify-center gap-3 bg-carbon-950 px-8 text-sm font-black uppercase tracking-[0.14em] text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Request Callback
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-carbon-950">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-16 sm:px-12 lg:px-20 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <div>
          <div className="flex items-center gap-3 text-accent-400 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-400/10 text-accent-400 border border-accent-400/20">
              <Zap size={24} fill="currentColor" />
            </div>
            <span className="text-3xl font-black tracking-tight text-white">K 24</span>
          </div>
          <p className="max-w-xs text-base leading-relaxed text-white/50">
            Elite strength, conditioning, and personal training in Lohegaon.
          </p>
        </div>

        <div className="flex items-center gap-6 text-white/40">
          {[Instagram, Mail, Phone, Clock3].map((Icon, i) => (
            <a key={i} href="#" className="transition-colors hover:text-accent-400">
              <Icon size={24} />
            </a>
          ))}
        </div>

        <div className="md:text-right">
          <p className="text-lg font-black text-white mb-2">LOHEGAON, PUNE</p>
          <p className="text-sm text-white/50">Book a trial and start with a guided plan.</p>
        </div>
      </div>
    </footer>
  );
}
