import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { GithubIcon } from "@/components/ui/icons";

type Project = {
  title: string;
  description: string;
  stack: string[];
  image: string;
  liveUrl: string | null;
  githubUrl: string;
};

const projects: Project[] = [
  {
    title: "NextFlow",
    description:
      "A visual AI workflow builder — compose LLM pipelines as drag-and-drop node graphs, run them with async execution, and share workflows as portable JSON. Full-stack: auth, persistence, and live execution.",
    stack: ["Next.js", "TypeScript", "React Flow", "Prisma", "PostgreSQL", "Groq API", "Clerk"],
    image: "/nextflow.jpg",
    liveUrl: "https://next-flow-liart.vercel.app/",
    githubUrl: "https://github.com/IshanMaheshwari-777/NextFlow",
  },
  {
    title: "Dishcover",
    description:
      "Recipe discovery app that suggests dishes from the ingredients you already have, with nutrition breakdowns generated via the Gemini API.",
    stack: ["React", "JavaScript", "Gemini API"],
    image: "/dishcover.jpg",
    liveUrl: "https://dishcover-lemon.vercel.app/home",
    githubUrl: "https://github.com/IshanMaheshwari-777/Dishcover",
  },
  {
    title: "DropZone",
    description:
      "Lost & found platform where users report, browse, and claim items — with authenticated accounts and item status tracking end to end.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    image: "/dropzone.jpg",
    liveUrl: "https://drop-zone-beta.vercel.app/",
    githubUrl: "https://github.com/IshanMaheshwari-777/DropZone",
  },
  {
    title: "Road Traffic Analysis",
    description:
      "Data analysis of road traffic accident severity (Addis Ababa, 2017–2020) — temporal patterns, vehicle types, and environmental factors, summarized in a safety dashboard.",
    stack: ["EDA", "Data Cleaning", "Statistical Analysis", "Dashboarding"],
    image: "/road-traffic.png",
    liveUrl: null,
    githubUrl: "https://github.com/IshanMaheshwari-777/Data-Driven-Analysis-of-Road-Traffic-Accident-Severity",
  },
];

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-2">
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-background text-sm font-medium hover:bg-white/90 transition-colors"
        >
          Live site
          <ArrowUpRight className="h-4 w-4" />
        </a>
      )}
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/15 text-white text-sm font-medium hover:bg-white/5 hover:border-white/25 transition-colors"
      >
        <GithubIcon className="h-4 w-4" />
        Source
      </a>
    </div>
  );
}

function Stack({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((tech) => (
        <li key={tech} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 font-mono text-[11px] text-white/55">
          {tech}
        </li>
      ))}
    </ul>
  );
}

function Screenshot({ project, sizes, className }: { project: Project; sizes: string; className: string }) {
  return (
    <div className={`relative overflow-hidden bg-white/5 ${className}`}>
      <Image
        src={project.image}
        alt={`${project.title} screenshot`}
        fill
        sizes={sizes}
        className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
      />
    </div>
  );
}

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="py-24 md:py-32 w-full">
      <div className="max-w-6xl mx-auto px-5 md:px-6">
        <SectionHeader
          index="03"
          label="Projects"
          title={
            <>
              Selected <span className="text-accent1-light">work</span>.
            </>
          }
          description="Things I've designed, built, and shipped end to end."
        />

        {/* Featured */}
        <Reveal>
          <article className="group grid md:grid-cols-[1.25fr_1fr] rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-white/20 transition-colors">
            <Screenshot
              project={featured}
              sizes="(max-width: 768px) 100vw, 60vw"
              className="aspect-[16/10] md:aspect-auto md:min-h-[380px] border-b md:border-b-0 md:border-r border-white/10"
            />
            <div className="flex flex-col p-6 md:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent2 mb-3">Featured</p>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">{featured.title}</h3>
              <p className="mt-3 text-white/60 leading-relaxed">{featured.description}</p>
              <div className="mt-6">
                <Stack items={featured.stack} />
              </div>
              <div className="mt-8 md:mt-auto md:pt-8">
                <ProjectLinks project={featured} />
              </div>
            </div>
          </article>
        </Reveal>

        {/* The rest */}
        <div className="mt-5 grid md:grid-cols-3 gap-5">
          {rest.map((project, idx) => (
            <Reveal key={project.title} delay={idx * 0.08} className="h-full">
              <article className="group h-full flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-white/20 transition-colors">
                <Screenshot
                  project={project}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="aspect-[16/10] border-b border-white/10"
                />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold tracking-tight text-white">{project.title}</h3>
                  <p className="mt-2 text-sm text-white/55 leading-relaxed">{project.description}</p>
                  <div className="mt-5">
                    <Stack items={project.stack} />
                  </div>
                  <div className="mt-auto pt-6">
                    <ProjectLinks project={project} />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
