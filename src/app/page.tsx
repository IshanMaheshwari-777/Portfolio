import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import MotionProvider from "@/components/MotionProvider";
import ParticleBackground from "@/components/ParticleBackground";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <MotionProvider>
      <main className="relative min-h-screen selection:bg-accent1 selection:text-white">
        <CustomCursor />
        <ParticleBackground />
        <Navbar />

        {/* Sections Wrapper with some relative positioning ensuring stacking context */}
        <div className="relative z-10 flex flex-col items-center overflow-x-hidden">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </main>
    </MotionProvider>
  );
}
