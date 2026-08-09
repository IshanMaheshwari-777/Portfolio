"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Development Intern",
    company: "DegreeBaba",
    location: "Pune, India (Remote)",
    period: "June 2026 – Present",
    type: "Internship",
    icon: "💼",
    colorClass: "accent1",
    highlights: [
      "Build and ship features across the company's AI-powered platforms — frontend, backend, database, and deployment.",
      "Shipped 12 production-ready applications end-to-end — 9 public-facing platforms for DegreeBaba and 3 internal tools.",
      "Built a cross-platform CRM (web & mobile) and multiple AI-integrated platforms powering core products and internal operations.",
      "Built an AI-assisted content publishing pipeline (automated document ingestion, validation, and publishing workflows) that cut content processing costs by ~60%.",
      "Work directly with the founders on product decisions, architecture, and the technical roadmap.",
    ],
    tags: ["Next.js", "Python", "AI/ML", "CRM", "Cloud", "Full Stack"],
  },
  {
    role: "Content Creator (@IshanDecodes)",
    company: "YouTube",
    location: "Remote",
    period: "June 2026 – Present",
    type: "Creator",
    icon: "🎬",
    colorClass: "accent2",
    highlights: [
      "Produce research-driven long-form videos on business strategy, technology, AI, sports, and branding.",
      "Conduct in-depth market research and competitive analysis from multiple credible sources.",
      "Simplify complex business and technical concepts through data-driven storytelling.",
      "Perform end-to-end video production — scripting, editing, thumbnail planning, and publishing.",
    ],
    tags: ["Content Strategy", "Video Production", "Research", "Storytelling", "Editing"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent1/8 blur-[120px] rounded-full -z-10 translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent2/8 blur-[100px] rounded-full -z-10 -translate-x-1/4 translate-y-1/4" />

      <div className="max-w-5xl mx-auto px-6 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-accent1">Experience</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Building real products, creating real impact.
          </p>
        </motion.div>

        {/* Timeline — single column with left rail */}
        <div className="relative">
          {/* Vertical rail line */}
          <div className="absolute left-5 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent1/60 via-white/10 to-accent2/60" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative flex items-start gap-6 md:gap-10"
              >
                {/* Timeline dot */}
                <div className="relative shrink-0 flex flex-col items-center" style={{ width: "40px" }}>
                  <div
                    className={`w-10 h-10 rounded-2xl flex items-center justify-center text-xl z-10 border ${
                      idx === 0
                        ? "bg-accent1/15 border-accent1/40"
                        : "bg-accent2/15 border-accent2/40"
                    }`}
                  >
                    {exp.icon}
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 group pb-2">
                  <div className="relative p-7 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:border-white/20 hover:bg-white/[0.05] transition-all duration-500 shadow-[0_0_40px_rgba(0,0,0,0.25)]">
                    {/* Hover glow */}
                    <div
                      className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10 ${
                        idx === 0 ? "bg-accent1/8" : "bg-accent2/8"
                      }`}
                    />

                    {/* Header row */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                      <div>
                        <h3 className="text-xl font-bold text-white leading-tight">{exp.role}</h3>
                        <p
                          className={`font-semibold text-sm mt-1 ${
                            idx === 0 ? "text-accent1" : "text-accent2"
                          }`}
                        >
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-1.5 shrink-0">
                        <span
                          className={`text-xs px-3 py-1 rounded-full font-medium border ${
                            idx === 0
                              ? "bg-accent1/10 border-accent1/30 text-accent1"
                              : "bg-accent2/10 border-accent2/30 text-accent2"
                          }`}
                        >
                          {exp.type}
                        </span>
                        <span className="text-white/40 text-xs">{exp.location}</span>
                        <span className="text-white/60 text-xs font-medium">{exp.period}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2.5 mb-5">
                      {exp.highlights.map((point, pIdx) => (
                        <motion.li
                          key={pIdx}
                          initial={{ opacity: 0, x: -8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.35, delay: idx * 0.1 + pIdx * 0.06 }}
                          className="flex items-start gap-2.5 text-white/60 text-sm leading-relaxed"
                        >
                          <span
                            className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${
                              idx === 0 ? "bg-accent1" : "bg-accent2"
                            }`}
                          />
                          {point}
                        </motion.li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/45 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
