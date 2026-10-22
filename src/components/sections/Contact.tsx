"use client";
import { useState } from "react";
import { ArrowUpRight, Check, Code2, Copy, Mail } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { CodeChefIcon, CodeforcesIcon, GithubIcon, LinkedinIcon } from "@/components/ui/icons";

const EMAIL = "ishan.maheshwari2024@nst.rishihood.edu.in";

const socials = [
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/ishan-maheshwari-4b6154323/", label: "LinkedIn" },
  { icon: GithubIcon, href: "https://github.com/IshanMaheshwari-777", label: "GitHub" },
  { icon: Code2, href: "https://leetcode.com/u/ishanmaheshwari2004/", label: "LeetCode" },
  { icon: CodeforcesIcon, href: "https://codeforces.com/profile/Ishan07M", label: "Codeforces" },
  { icon: CodeChefIcon, href: "https://www.codechef.com/users/ishan_18_7", label: "CodeChef" },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="contact" className="pt-24 md:pt-32 pb-10 w-full">
      <div className="max-w-6xl mx-auto px-5 md:px-6">
        <SectionHeader
          index="06"
          label="Contact"
          title={
            <>
              Let&apos;s build something <span className="text-accent1-light">together</span>.
            </>
          }
          description="Open to internships, projects, and collaborations. Whether you have a question or just want to say hi, my inbox is open."
        />

        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="group inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-accent1 text-white font-medium hover:bg-accent1/90 transition-colors shadow-[0_0_40px_rgba(124,58,237,0.35)] min-w-0"
            >
              <Mail className="h-5 w-5 shrink-0" />
              <span className="truncate">{EMAIL}</span>
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-2xl border border-white/15 text-white/80 hover:text-white hover:bg-white/5 transition-colors"
              aria-live="polite"
            >
              {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copied" : "Copy email"}
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-white/75 hover:text-white hover:border-white/25 hover:bg-white/[0.06] transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <social.icon className="h-5 w-5" />
                    <span className="text-sm font-medium">{social.label}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-white/30 transition-all group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <footer className="mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-2 justify-between text-sm text-white/35">
          <p>© {new Date().getFullYear()} Ishan Maheshwari</p>
          <p>Designed with intention · Built with Next.js</p>
        </footer>
      </div>
    </section>
  );
}
