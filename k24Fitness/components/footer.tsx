"use client";

import { Instagram, Mail, Phone, Clock3 } from "lucide-react";

function DumbbellLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
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

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-carbon-950">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-16 sm:px-12 lg:px-20 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <DumbbellLogo className="h-7 w-7 text-accent-500" />
            <span className="text-3xl font-black tracking-tight text-white">
              K<span className="text-accent-500 italic font-black ml-0.5">24</span>
            </span>
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

        <div className="md:text-right text-sm text-white/50 leading-relaxed">
          <p className="text-lg font-black text-white mb-2">LOHEGAON, PUNE</p>
          <p className="max-w-xs md:ml-auto text-xs">
            3rd Floor, Oxy Bonita Complex, <br />
            Near Porwal Road, Pune - 411047
          </p>
          <a 
            href="https://maps.app.goo.gl/KT9EuJxGH7EnoAHW9"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3.5 inline-flex items-center gap-1.5 text-xs font-bold text-accent-500 uppercase tracking-wider hover:text-accent-400 transition-colors"
          >
            Locate on Maps →
          </a>
        </div>
      </div>
    </footer>
  );
}
