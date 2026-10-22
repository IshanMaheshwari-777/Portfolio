import { Briefcase, GraduationCap, Clapperboard, Globe } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

const now = [
  { icon: Briefcase, title: "SDE Intern", org: "DegreeBaba", note: "AI platforms & a cross-platform CRM" },
  { icon: GraduationCap, title: "SDE-TA", org: "Newton School", note: "Mentoring CS undergraduates" },
  { icon: Clapperboard, title: "@IshanDecodes", org: "YouTube", note: "Business, tech & AI explainers" },
  { icon: Globe, title: "Freelance Studio", org: "Independent", note: "Open to new projects" },
];

const offKeyboard = ["University cricket team", "Neutron Fest organiser"];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 w-full">
      <div className="max-w-6xl mx-auto px-5 md:px-6">
        <SectionHeader
          index="01"
          label="About"
          title={
            <>
              Engineer by trade,{" "}
              <span className="text-accent1-light">storyteller</span> on the side.
            </>
          }
        />

        <div className="grid md:grid-cols-5 gap-12 md:gap-16">
          <Reveal className="md:col-span-3 space-y-6 text-base md:text-lg text-white/60 leading-relaxed">
            <p>
              I&apos;m a 3rd-year B.Tech CS student at Newton School of Technology, Rishihood University (CGPA 8.6).
              At <span className="text-white font-medium">DegreeBaba</span> I build and ship AI-powered platforms end
              to end — from a cross-platform CRM to an AI publishing pipeline that cut content processing costs by
              about 60%.
            </p>
            <p>
              I&apos;m also an <span className="text-white font-medium">SDE-TA at Newton School</span>, mentoring
              undergraduates through CS fundamentals and programming — which keeps my own basics sharp.
            </p>
            <p>
              Outside of work I make research-driven videos as{" "}
              <span className="text-white font-medium">@IshanDecodes</span>, play cricket for my university, and help
              organise fests. The through-line is consistency:{" "}
              <span className="text-white font-medium">900+ DSA problems</span> and a{" "}
              <span className="text-white font-medium">700+ day LeetCode streak</span>.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-7">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/40 mb-5">Right now</p>
              <ul className="space-y-4">
                {now.map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-accent2">
                      <item.icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-white">
                        {item.title} <span className="text-white/40 font-normal">· {item.org}</span>
                      </p>
                      <p className="text-sm text-white/50">{item.note}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/40 mb-3">Off the keyboard</p>
                <div className="flex flex-wrap gap-2">
                  {offKeyboard.map((item) => (
                    <span key={item} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/70">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
