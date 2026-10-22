// Brand icons (lucide no longer ships brand marks).
type IconProps = { className?: string };

export function GithubIcon({ className }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.6a5.6 5.6 0 0 0-1.5-3.9 5.6 5.6 0 0 0-.1-3.8s-1.3-.4-4 1.5a13.3 13.3 0 0 0-7 0C6.2 1.5 5 1.9 5 1.9a5.6 5.6 0 0 0-.1 3.8A5.6 5.6 0 0 0 3.4 9.6c0 3.6 3 5.6 6 5.6a4.8 4.8 0 0 0-1 3.2v4" />
    </svg>
  );
}

export function LinkedinIcon({ className }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function CodeforcesIcon({ className }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4.5 7.5A1.5 1.5 0 0 1 6 6h2a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 8 18H6a1.5 1.5 0 0 1-1.5-1.5zm6.75-4.5A1.5 1.5 0 0 1 12.75 1.5h2a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-2a1.5 1.5 0 0 1-1.5-1.5zm6.75 7.5A1.5 1.5 0 0 1 19.5 9h2a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-2a1.5 1.5 0 0 1-1.5-1.5z" />
    </svg>
  );
}

export function CodeChefIcon({ className }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M11.257 0C6.304.085 2.89 3.055 2.89 3.055s-.73.542-1.046 1.907C1.531 6.327 1.99 7.4 1.99 7.4s-.76.896-.76 2.588c0 1.694.76 2.588.76 2.588s-.459 1.073-.146 2.438c.316 1.365 1.046 1.907 1.046 1.907S6.303 19.915 11.257 20c4.953-.085 8.368-3.079 8.368-3.079s.73-.542 1.046-1.907c.315-1.365-.146-2.438-.146-2.438s.76-.894.76-2.588c0-1.692-.76-2.588-.76-2.588s.461-1.073.146-2.438C20.355 3.597 19.625 3.055 19.625 3.055S16.21.085 11.257 0zm0 1.385c4.47.073 7.55 2.736 7.55 2.736s.572.436.83 1.546c.197.857-.07 1.644-.07 1.644a4.252 4.252 0 0 0-1.087-.138c-2.35 0-4.253 1.913-4.253 4.274 0 2.36 1.904 4.273 4.253 4.273.38 0 .748-.05 1.1-.14.072.394.072.803-.048 1.305-.258 1.11-.83 1.546-.83 1.546s-3.08 2.663-7.55 2.736c-4.47-.073-7.55-2.736-7.55-2.736s-.572-.436-.83-1.546c-.12-.502-.12-.91-.047-1.304.35.089.718.14 1.098.14 2.35 0 4.253-1.913 4.253-4.274 0-2.36-1.903-4.273-4.253-4.273-.38 0-.748.05-1.1.139.196-.857-.07-1.644-.07-1.644.258-1.11.83-1.546.83-1.546s3.08-2.663 7.55-2.736zm4.396 5.617a2.888 2.888 0 0 1 2.888 2.888 2.888 2.888 0 0 1-2.888 2.889 2.888 2.888 0 0 1-2.889-2.889 2.888 2.888 0 0 1 2.889-2.888zm-8.792 0A2.888 2.888 0 0 1 5.75 9.89a2.888 2.888 0 0 1-2.888-2.888A2.888 2.888 0 0 1 5.75 4.113z" />
    </svg>
  );
}
