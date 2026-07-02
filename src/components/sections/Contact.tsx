"use client";
import { motion } from "framer-motion";
import { Mail, Code2 } from "lucide-react";

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

function CodeforcesIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M4.5 7.5A1.5 1.5 0 0 1 6 6h2a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 8 18H6a1.5 1.5 0 0 1-1.5-1.5zm6.75-4.5A1.5 1.5 0 0 1 12.75 1.5h2a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-2a1.5 1.5 0 0 1-1.5-1.5zm6.75 7.5A1.5 1.5 0 0 1 19.5 9h2a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-2a1.5 1.5 0 0 1-1.5-1.5z"/>
    </svg>
  );
}

function CodeChefIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M11.257 0C6.304.085 2.89 3.055 2.89 3.055s-.73.542-1.046 1.907C1.531 6.327 1.99 7.4 1.99 7.4s-.76.896-.76 2.588c0 1.694.76 2.588.76 2.588s-.459 1.073-.146 2.438c.316 1.365 1.046 1.907 1.046 1.907S6.303 19.915 11.257 20c4.953-.085 8.368-3.079 8.368-3.079s.73-.542 1.046-1.907c.315-1.365-.146-2.438-.146-2.438s.76-.894.76-2.588c0-1.692-.76-2.588-.76-2.588s.461-1.073.146-2.438C20.355 3.597 19.625 3.055 19.625 3.055S16.21.085 11.257 0zm0 1.385c4.47.073 7.55 2.736 7.55 2.736s.572.436.83 1.546c.197.857-.07 1.644-.07 1.644a4.252 4.252 0 0 0-1.087-.138c-2.35 0-4.253 1.913-4.253 4.274 0 2.36 1.904 4.273 4.253 4.273.38 0 .748-.05 1.1-.14.072.394.072.803-.048 1.305-.258 1.11-.83 1.546-.83 1.546s-3.08 2.663-7.55 2.736c-4.47-.073-7.55-2.736-7.55-2.736s-.572-.436-.83-1.546c-.12-.502-.12-.91-.047-1.304.35.089.718.14 1.098.14 2.35 0 4.253-1.913 4.253-4.274 0-2.36-1.903-4.273-4.253-4.273-.38 0-.748.05-1.1.139.196-.857-.07-1.644-.07-1.644.258-1.11.83-1.546.83-1.546s3.08-2.663 7.55-2.736zm4.396 5.617a2.888 2.888 0 0 1 2.888 2.888 2.888 2.888 0 0 1-2.888 2.889 2.888 2.888 0 0 1-2.889-2.889 2.888 2.888 0 0 1 2.889-2.888zm-8.792 0A2.888 2.888 0 0 1 5.75 9.89a2.888 2.888 0 0 1-2.888-2.888A2.888 2.888 0 0 1 5.75 4.113z"/>
    </svg>
  );
}

export default function Contact() {
  const socials = [
    { icon: <LinkedinIcon className="w-6 h-6" />, href: "https://www.linkedin.com/in/ishan-maheshwari-4b6154323/", label: "LinkedIn" },
    { icon: <GithubIcon className="w-6 h-6" />, href: "https://github.com/IshanMaheshwari-777", label: "GitHub" },
    { icon: <Code2 className="w-6 h-6" />, href: "https://leetcode.com/u/ishanmaheshwari2004/", label: "LeetCode" },
    { icon: <CodeforcesIcon className="w-5 h-5" />, href: "https://codeforces.com/profile/Ishan07M", label: "Codeforces" },
    { icon: <CodeChefIcon className="w-5 h-5" />, href: "https://www.codechef.com/users/ishan_18_7", label: "CodeChef" },
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
