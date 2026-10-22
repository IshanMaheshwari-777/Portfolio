import { Code2, Layers, Wrench, Database, BrainCircuit, Trophy } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

const skillsData = [
  { category: "Languages", icon: Code2, items: ["Python", "SQL", "JavaScript", "TypeScript"] },
  { category: "Frameworks", icon: Layers, items: ["React", "Next.js", "Express.js", "NumPy", "Pandas", "Matplotlib"] },
  { category: "Tools", icon: Wrench, items: ["Git", "GitHub", "Postman", "Prisma ORM", "OAuth 2.0"] },
  { category: "Databases", icon: Database, items: ["MongoDB", "MySQL", "PostgreSQL"] },
  { category: "AI / ML", icon: BrainCircuit, items: ["Machine Learning", "Generative AI", "LLM APIs"] },
  { category: "Problem Solving", icon: Trophy, items: ["DSA", "900+ problems", "LeetCode", "Codeforces", "CodeChef"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 w-full">
      <div className="max-w-6xl mx-auto px-5 md:px-6">
        <SectionHeader
          index="04"
          label="Skills"
          title={
            <>
              The <span className="text-accent1-light">stack</span> I reach for.
            </>
          }
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillsData.map((group, idx) => (
            <Reveal key={group.category} delay={idx * 0.05} className="h-full">
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-white/20 transition-colors">
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-accent2">
                    <group.icon className="h-4 w-4" />
                  </span>
                  <h3 className="text-base font-semibold text-white">{group.category}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li key={skill} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-white/75">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
