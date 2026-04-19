"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.6a5.6 5.6 0 0 0-1.5-3.9 5.6 5.6 0 0 0-.1-3.8s-1.3-.4-4 1.5a13.3 13.3 0 0 0-7 0C6.2 1.5 5 1.9 5 1.9a5.6 5.6 0 0 0-.1 3.8A5.6 5.6 0 0 0 3.4 9.6c0 3.6 3 5.6 6 5.6a4.8 4.8 0 0 0-1 3.2v4" />
    </svg>
  );
}

const projects = [
  {
    title: "Dishcover",
    description: "Recipe app based on ingredients + nutrition.",
    stack: ["React", "JS", "Gemini API"],
    liveUrl: "https://dishcover-lemon.vercel.app/home",
    githubUrl: "https://github.com/IshanMaheshwari-777/Dishcover",
    color: "from-accent1/20 to-transparent",
  },
  {
    title: "DropZone",
    description: "Lost & Found platform with authentication and tracking.",
    stack: ["MERN"],
    liveUrl: "https://drop-zone-beta.vercel.app/",
    githubUrl: "https://github.com/IshanMaheshwari-777/DropZone",
    color: "from-accent2/20 to-transparent",
  },
  {
    title: "Analysis-of-Road-Traffic-Accident-Severity",
    description: "This project analyzes road traffic accident data (Addis Ababa, 2017–2020) to identify drivers of accident severity — including temporal patterns, vehicle types, environmental conditions, and driver characteristics — and to support a data-driven dashboard for safety decision-making.",
    stack: ["Sheets", "EDA", "Data Cleaning", "Statistical Analysis"],
    liveUrl: "https://github.com/IshanMaheshwari-777/Data-Driven-Analysis-of-Road-Traffic-Accident-Severity/blob/main/Dashboard/RTA_Dashboard.png",
    githubUrl: "https://github.com/IshanMaheshwari-777/Data-Driven-Analysis-of-Road-Traffic-Accident-Severity",
    color: "from-accent2/20 to-transparent",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-accent1">Projects</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md p-8 shadow-2xl transition-all duration-500 hover:border-white/20"
            >
              <div className={`absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br ${project.color} blur-[60px] rounded-full mix-blend-screen opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-3xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-white/60 mb-8 flex-1 text-lg leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-accent2 group-hover:border-accent2/30 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center p-3 rounded-full bg-white text-background hover:bg-white/90 transition-colors" data-magnetic>
                    <ExternalLink className="w-5 h-5" />
                  </a>}
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center p-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors" data-magnetic>
                    <GithubIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
