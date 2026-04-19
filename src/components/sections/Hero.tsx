"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-accent1/30 bg-accent1/10 text-accent1 text-sm font-medium"
        >
          <span>AI Engineer · Full Stack · Frontend</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-accent1/20 blur-[100px] rounded-full -z-10" />
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
            Ishan Maheshwari
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xl md:text-3xl text-white/80 max-w-2xl mt-6 font-light"
        >
          I build intelligence, then make it beautiful.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-base text-accent2/80 mt-4"
        >
          2nd year B.Tech @ Newton School of Technology
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-12"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-white text-background font-medium hover:bg-white/90 transition-colors"
            data-magnetic
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white/5 transition-colors"
            data-magnetic
          >
            Let&apos;s Connect
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 md:bottom-20 right-10 md:right-32 animate-[floating_4s_ease-in-out_infinite]"
        >
          <div className="px-4 py-2 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_0_30px_rgba(124,58,237,0.2)] flex items-center space-x-2">
            <span className="text-2xl">🔥</span>
            <div>
              <p className="text-xs text-white/50">LeetCode Streak</p>
              <p className="font-bold text-accent1">520+ Days</p>
            </div>
          </div>
        </motion.div>
      </div>
      <style>{`
        @keyframes floating {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }
      `}</style>
    </section>
  );
}
