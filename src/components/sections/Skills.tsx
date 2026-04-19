"use client";
import { motion } from "framer-motion";

const skillsData = [
  { category: "Frontend", items: ["HTML", "CSS", "JS", "React", "Next.js", "Tailwind", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Express", "MongoDB", "MySQL", "PostgreSQL"] },
  { category: "AI", items: ["Python", "Machine Learning", "GenAI", "NumPy", "Pandas"] },
  { category: "Tools", items: ["Git", "Postman", "Tableau"] },
  { category: "Soft Skills", items: ["Leadership", "Communication", "Problem Solving"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent2/10 blur-[100px] rounded-full -translate-y-1/2 -translate-x-1/2 -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Core <span className="text-accent2">Competencies</span></h2>
        </motion.div>

        <div className="flex flex-col gap-12">
          {skillsData.map((skillGroup, groupIdx) => (
            <div key={groupIdx} className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
                className="text-xl font-bold text-white/50 w-full md:w-32 text-center md:text-right shrink-0"
              >
                {skillGroup.category}
              </motion.h3>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4 flex-1">
                {skillGroup.items.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (groupIdx * 0.1) + (idx * 0.05) }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="relative px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm cursor-default"
                    style={{
                      animation: `floating-drift ${5 + (idx % 3)}s ease-in-out infinite alternate`,
                    }}
                    data-magnetic
                  >
                    <span className="relative z-10 text-white group-hover:text-accent1 transition-colors font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes floating-drift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(3px, -5px); }
        }
      `}</style>
    </section>
  );
}
