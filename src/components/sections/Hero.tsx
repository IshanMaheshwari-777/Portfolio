"use client";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Flame } from "lucide-react";

const stats = [
  { value: "12", label: "Production apps shipped" },
  { value: "900+", label: "DSA problems solved" },
  { value: "700+", label: "Day LeetCode streak", icon: true },
  { value: "8.6", label: "CGPA" },
];

const ease = [0.21, 0.47, 0.32, 0.98] as const;

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease },
  };
}

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[100svh] flex items-center pt-32 pb-16">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] max-w-full h-[500px] bg-accent1/20 blur-[140px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto px-5 md:px-6 w-full">
        <motion.div
          {...fadeUp(0.1)}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-xs sm:text-sm text-white/70"
        >
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
          </span>
          {/* Shorter label so the pill stays on one line on phones */}
          <span className="sm:hidden">
            SDE @ <span className="text-white">DegreeBaba</span>
            <span className="text-white/30 mx-1.5">·</span>
            TA @ <span className="text-white">Newton School</span>
          </span>
          <span className="hidden sm:inline">
            SDE Intern @ <span className="text-white">DegreeBaba</span>
            <span className="text-white/30 mx-1.5">·</span>
            SDE-TA @ <span className="text-white">Newton School</span>
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.2)}
          className="mt-8 text-[3.25rem] leading-[0.95] sm:text-7xl md:text-8xl font-semibold tracking-[-0.04em] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/55"
        >
          Ishan
          <br />
          Maheshwari
        </motion.h1>

        <motion.p {...fadeUp(0.35)} className="mt-8 max-w-2xl text-xl md:text-3xl text-white/85 font-light tracking-tight">
          I build intelligence, then make it beautiful.
        </motion.p>
        <motion.p {...fadeUp(0.45)} className="mt-4 max-w-2xl text-base md:text-lg text-white/50 leading-relaxed">
          Full-stack &amp; AI engineer and 3rd-year B.Tech CS student at Newton School of Technology —
          shipping AI-powered products from first sketch to production.
        </motion.p>

        <motion.div {...fadeUp(0.55)} className="mt-10 flex flex-col sm:flex-row gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-background font-medium hover:bg-white/90 transition-colors"
          >
            View my work
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="https://my.newtonschool.co/template/user/iShaunTheSheep07/resume/h/7xxjt91lyih5/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/15 text-white hover:bg-white/5 hover:border-white/25 transition-colors"
          >
            <FileText className="w-4 h-4" />
            Resume
          </a>
        </motion.div>

        {/* Proof strip */}
        <motion.dl
          {...fadeUp(0.7)}
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-y-8 border-t border-white/10 pt-8"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="pr-4">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="flex items-center gap-1.5 text-3xl md:text-4xl font-semibold tracking-tight text-white">
                {stat.value}
                {stat.icon && <Flame className="w-6 h-6 text-orange-400" aria-hidden="true" />}
              </dd>
              <dd className="mt-1.5 font-mono text-[11px] md:text-xs uppercase tracking-wider text-white/45">
                {stat.label}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
