"use client";
import { motion } from "framer-motion";
import { Mail, Code2, Terminal } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.6a5.6 5.6 0 0 0-1.5-3.9 5.6 5.6 0 0 0-.1-3.8s-1.3-.4-4 1.5a13.3 13.3 0 0 0-7 0C6.2 1.5 5 1.9 5 1.9a5.6 5.6 0 0 0-.1 3.8A5.6 5.6 0 0 0 3.4 9.6c0 3.6 3 5.6 6 5.6a4.8 4.8 0 0 0-1 3.2v4" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Contact() {
  const socials = [
    { icon: <LinkedinIcon className="w-6 h-6" />, href: "https://www.linkedin.com/in/ishan-maheshwari-4b6154323/", label: "LinkedIn" },
    { icon: <GithubIcon className="w-6 h-6" />, href: "https://github.com/IshanMaheshwari-777", label: "GitHub" },
    { icon: <Code2 className="w-6 h-6" />, href: "https://leetcode.com/u/ishanmaheshwari2004/", label: "LeetCode" },
    { icon: <Terminal className="w-6 h-6" />, href: "https://codeforces.com/profile/Ishan07M", label: "Codeforces" },
    { icon: <Terminal className="w-6 h-6" />, href: "https://www.codechef.com/users/ishan_18_7", label: "CodeChef" },
  ];

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-accent1/10 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-32 bg-accent1/20 blur-[80px] -z-10" />
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Let&apos;s Build Something</h2>
          <p className="text-xl text-white/70 font-light mb-10 max-w-2xl mx-auto">
            I&apos;m open to projects, collaborations, and ideas. 
            Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>

          <a 
            href="mailto:ishan.maheshwari2024@nst.rishihood.edu.in"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent1 text-white font-bold hover:bg-accent1/90 transition-all shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:shadow-[0_0_50px_rgba(124,58,237,0.6)] hover:-translate-y-1 mb-16"
            data-magnetic
          >
            <Mail className="w-5 h-5" />
            ishan.maheshwari2024@nst.rishihood.edu.in
          </a>

          <div className="flex flex-wrap justify-center gap-6">
            {socials.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/30 transition-colors"
                title={social.label}
                data-magnetic
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
        
        <p className="mt-16 text-white/30 text-sm">
          © {new Date().getFullYear()} Ishan Maheshwari. Designed with intention.
        </p>
      </div>
    </section>
  );
}
