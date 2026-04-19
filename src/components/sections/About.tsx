"use client";
import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { label: "LeetCode", value: "520+ Days" },
    { label: "Built", value: "2 Projects" },
    { label: "Organizer", value: "Neutron Fest" },
    { label: "University Team", value: "Cricket" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center gap-16">
        
        {/* Left Side: Bio */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-accent2">About</span> Me
          </h2>
          <div className="space-y-6 text-lg text-white/70 font-light leading-relaxed">
            <p>
              I&apos;m a 2nd year B.Tech student at Newton School of Technology, Rishihood University. 
              I love solving real-world problems, especially in teams.
            </p>
            <p>
              I&apos;ve worked on university fests, play cricket, edit videos, and recently started YouTube. 
              I believe in consistency — <span className="text-accent1 font-medium">520+ days of LeetCode</span>.
            </p>
          </div>
        </motion.div>

        {/* Right Side: Floating Cards */}
        <div className="flex-1 w-full grid grid-cols-2 gap-4 relative">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-accent1/10 blur-[80px] rounded-full -z-10" />
          
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col justify-center items-center text-center shadow-lg ${
                idx % 2 === 0 ? "translate-y-4" : "-translate-y-4"
              }`}
              style={{
                animation: `floating-${idx % 2 === 0 ? 'up' : 'down'} ${4 + idx}s ease-in-out infinite alternate`,
              }}
            >
              <p className="text-xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-sm text-accent2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes floating-up {
          0% { transform: translateY(16px); }
          100% { transform: translateY(0px); }
        }
        @keyframes floating-down {
          0% { transform: translateY(-16px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
}
