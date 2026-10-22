import { Globe, BrainCircuit, Building2, Smartphone, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

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
    <section id="freelance" className="py-24 md:py-32 w-full">
      <div className="max-w-6xl mx-auto px-5 md:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-accent1/[0.12] via-white/[0.02] to-accent2/[0.06] p-6 sm:p-10 md:p-14">
            <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent1/20 blur-[100px]" />

            <div className="relative grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-14">
              <div className="flex flex-col">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent2 mb-4">
                  <span className="text-white/30">05</span>
                  <span className="text-white/20 mx-2">/</span>
                  Freelance
                </p>
                <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white leading-[1.1]">
                  Need something built? <span className="text-accent1-light">Let&apos;s talk.</span>
                </h2>
                <p className="mt-4 text-base md:text-lg text-white/60 leading-relaxed">
                  Alongside my internships, I build custom software, AI products and web apps for businesses —
                  end to end, one person, start to finish.
                </p>
                <div className="mt-6 inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-white/70">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  Available for new projects
                </div>
                <div className="mt-8 lg:mt-auto lg:pt-10">
                  <a
                    href="https://freelance-portfolio-alpha-eight.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-background font-medium hover:bg-white/90 transition-colors"
                  >
                    View Freelance Studio
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {capabilities.map((cap) => (
                  <div key={cap.title} className="rounded-2xl border border-white/10 bg-background/40 p-5 backdrop-blur-sm">
                    <cap.icon className="h-5 w-5 text-accent2 mb-4" />
                    <h3 className="text-base font-semibold text-white mb-1.5">{cap.title}</h3>
                    <p className="text-sm text-white/55 leading-relaxed">{cap.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
