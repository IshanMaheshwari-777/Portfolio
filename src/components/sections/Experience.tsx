import { Briefcase, GraduationCap, Clapperboard, MapPin } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

// Full class names so Tailwind picks them up.
const colorStyles = {
  accent1: { icon: "text-accent1-light bg-accent1/10 border-accent1/30", text: "text-accent1-light", dot: "bg-accent1" },
  accent2: { icon: "text-accent2 bg-accent2/10 border-accent2/30", text: "text-accent2", dot: "bg-accent2" },
} as const;

// Wrap key results in **double asterisks** to emphasise them.
const experiences: {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  icon: typeof Briefcase;
  color: keyof typeof colorStyles;
  highlights: string[];
  tags: string[];
}[] = [
  {
    role: "Software Development Intern",
    company: "DegreeBaba",
    location: "Pune, India (Remote)",
    period: "June 2026 – Present",
    type: "Internship",
    icon: Briefcase,
    color: "accent1",
    highlights: [
      "Shipped **12 production-ready applications** end-to-end — 9 public-facing platforms for DegreeBaba and 3 internal tools.",
      "Built a **cross-platform CRM (web & mobile)** and multiple AI-integrated platforms powering core products and internal operations.",
      "Built an AI-assisted content publishing pipeline (document ingestion, validation, publishing) that **cut content processing costs by ~60%**.",
      "Own features across the stack — frontend, backend, database, and deployment — and work directly with the founders on architecture and the technical roadmap.",
    ],
    tags: ["Next.js", "Python", "AI/ML", "CRM", "Cloud", "Full Stack"],
  },
  {
    role: "SDE-TA Intern",
    company: "Newton School",
    location: "Sonipat, India",
    period: "October 2026 – Present",
    type: "Internship",
    icon: GraduationCap,
    color: "accent2",
    highlights: [
      "Mentor undergraduate students in **Computer Science and Programming**, breaking complex technical topics into easy-to-understand explanations.",
      "Deliver **exam-focused teaching sessions** covering key syllabus topics, important concepts, and problem-solving approaches.",
      "Reinforce **programming fundamentals and analytical problem-solving** through interactive discussions, worked examples, and step-by-step walkthroughs.",
    ],
    tags: ["Mentoring", "Teaching", "DSA", "CS Fundamentals", "Problem Solving"],
  },
  {
    role: "Content Creator (@IshanDecodes)",
    company: "YouTube",
    location: "Remote",
    period: "June 2026 – Present",
    type: "Creator",
    icon: Clapperboard,
    color: "accent1",
    highlights: [
      "Produce research-driven long-form videos on business strategy, technology, AI, sports, and branding.",
      "Conduct in-depth market research and competitive analysis from multiple credible sources.",
      "Simplify complex business and technical concepts through data-driven storytelling.",
      "Handle end-to-end production — scripting, editing, thumbnail planning, and publishing.",
    ],
    tags: ["Content Strategy", "Video Production", "Research", "Storytelling", "Editing"],
  },
];

function Emphasis({ text }: { text: string }) {
  return (
    <>
      {text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-medium text-white">
            {part}
          </strong>
        ) : (
          part
        )
      )}
    </>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 w-full">
      <div className="max-w-6xl mx-auto px-5 md:px-6">
        <SectionHeader
          index="02"
          label="Experience"
          title={
            <>
              Where I&apos;ve been <span className="text-accent1-light">shipping</span>.
            </>
          }
          description="Building real products, creating real impact."
        />

        <ol className="relative">
          {experiences.map((exp, idx) => {
            const c = colorStyles[exp.color];
            const isLast = idx === experiences.length - 1;
            return (
              <li key={exp.company} className="md:grid md:grid-cols-[200px_1fr] md:gap-10">
                {/* Meta column (desktop) */}
                <Reveal className="hidden md:block pt-1 text-right">
                  <p className="font-mono text-xs uppercase tracking-wider text-white/70">{exp.period}</p>
                  <p className="mt-2 inline-flex items-center gap-1 text-xs text-white/40">
                    <MapPin className="h-3 w-3" />
                    {exp.location}
                  </p>
                  <p className={`mt-1 font-mono text-[11px] uppercase tracking-wider ${c.text}`}>{exp.type}</p>
                </Reveal>

                {/* Content on the rail */}
                <div className={`relative border-l border-white/10 pl-7 md:pl-10 ${isLast ? "pb-0" : "pb-14 md:pb-16"}`}>
                  <span className={`absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full ring-4 ring-background ${c.dot}`} />
                  <Reveal delay={0.05}>
                    {/* Meta (mobile) */}
                    <p className="md:hidden font-mono text-[11px] uppercase tracking-wider text-white/50 mb-3">
                      {exp.period} <span className="text-white/25">·</span> {exp.location}
                    </p>

                    <div className="flex items-center gap-4">
                      <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border ${c.icon}`}>
                        <exp.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-white leading-tight">{exp.role}</h3>
                        <p className={`text-sm font-medium ${c.text}`}>{exp.company}</p>
                      </div>
                    </div>

                    <ul className="mt-5 space-y-3 max-w-3xl">
                      {exp.highlights.map((point) => (
                        <li key={point} className="flex gap-3 text-[15px] text-white/60 leading-relaxed">
                          <span className="mt-[0.65rem] h-1 w-1 shrink-0 rounded-full bg-white/30" />
                          <span>
                            <Emphasis text={point} />
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 font-mono text-[11px] text-white/55">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Reveal>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
