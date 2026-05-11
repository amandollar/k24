"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

function DumbbellLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      {/* Left outer plate */}
      <rect x="2" y="8" width="2" height="8" rx="0.5" />
      {/* Left inner plate */}
      <rect x="5" y="5" width="2" height="14" rx="1" />
      {/* Bar */}
      <rect x="7" y="11" width="10" height="2" rx="0.5" />
      {/* Right inner plate */}
      <rect x="17" y="5" width="2" height="14" rx="1" />
      {/* Right outer plate */}
      <rect x="20" y="8" width="2" height="8" rx="0.5" />
    </svg>
  );
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "PROGRAMS", href: "#programs" },
    { name: "ABOUT", href: "#facilities" },
    { name: "COACHES", href: "#coaches" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/90 py-4 backdrop-blur-md"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 sm:px-12 lg:px-16">
        {/* Brand Logo & Name */}
        <a
          href="#home"
          className="group flex items-center gap-2.5"
          onClick={() => setActiveTab("")}
        >
          <DumbbellLogo className="h-7 w-7 text-accent-500 transition-transform duration-300 group-hover:scale-110" />
          <span className="font-display text-2xl font-black tracking-tight text-white">
            K
            <span className="text-accent-500 italic font-black ml-0.5">24</span>
          </span>
        </a>

        {/* Center Navigation Links */}
        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActiveTab(item.name)}
              className="relative px-4 py-2 text-[11px] font-bold uppercase tracking-[0.25em] text-white/70 transition-colors duration-200 hover:text-white"
            >
              {item.name}
              {activeTab === item.name && (
                <motion.div
                  layoutId="activeUnderline"
                  className="absolute bottom-0 left-4 right-4 h-[2px] bg-accent-500"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden items-center lg:flex">
          <a
            href="#contact"
            className="group flex h-11 items-center justify-center gap-2 bg-accent-500 px-7 text-[11px] font-black uppercase tracking-[0.2em] text-white rounded transition-all duration-300 hover:bg-accent-600 hover:-translate-y-0.5"
          >
            JOIN NOW
            <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center border border-white/10 bg-white/5 text-white rounded transition-colors hover:bg-white/10 md:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="border-b border-white/[0.08] bg-[#050505]/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setActiveTab(item.name);
                    setIsOpen(false);
                  }}
                  className={`py-3.5 text-xs font-bold uppercase tracking-[0.25em] border-b border-white/[0.03] last:border-0 transition-colors ${
                    activeTab === item.name
                      ? "text-accent-500"
                      : "text-white/60"
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <div className="mt-6 pt-2">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex h-12 items-center justify-center gap-2 bg-accent-500 text-xs font-black uppercase tracking-[0.2em] text-white rounded"
                >
                  JOIN NOW
                  <span>→</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
