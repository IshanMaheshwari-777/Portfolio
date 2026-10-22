"use client";
import { motion } from "framer-motion";
import { Globe, BrainCircuit, Building2, Smartphone, ArrowUpRight } from "lucide-react";

const capabilities = [
  {
    icon: Globe,
    title: "Web Products",
    description: "Marketing sites, SaaS platforms, customer portals and dashboards built to be used every day.",
  },
  {
    icon: BrainCircuit,
    title: "AI Products",
    description: "Assistants, document intelligence and RAG features built into products people already use.",
  },
  {
    icon: Building2,
    title: "Business Software",
    description: "CRMs, internal tools and management platforms shaped around how you actually work.",
  },
  {
    icon: Smartphone,
    title: "Mobile Products",
    description: "Cross-platform iOS & Android apps with the backend and infra to make them work for real.",
  },
];

export default function Freelance() {
  return (
    <section id="freelance" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent1/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 -z-10" />

      <div className="max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent1/30 bg-accent1/10 text-accent1 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for new projects
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Freelance <span className="text-accent1">Studio</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Alongside my internships, I build custom software, AI products and web apps for
            businesses — end to end, one person, start to finish.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 mb-12">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-accent1/10 border border-accent1/30 flex items-center justify-center mb-4 text-accent1">
                <cap.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1.5">{cap.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{cap.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <a
            href="https://freelance-portfolio-alpha-eight.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent1 text-white font-bold hover:bg-accent1/90 transition-all shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:shadow-[0_0_50px_rgba(124,58,237,0.6)] hover:-translate-y-1"
            data-magnetic
          >
            View Freelance Studio
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
