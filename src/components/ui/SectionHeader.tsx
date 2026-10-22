import Reveal from "./Reveal";

export default function SectionHeader({
  index,
  label,
  title,
  description,
}: {
  index: string;
  label: string;
  title: React.ReactNode;
  description?: React.ReactNode;
}) {
  return (
    <Reveal className="mb-12 md:mb-16 max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent2 mb-4">
        <span className="text-white/30">{index}</span>
        <span className="text-white/20 mx-2">/</span>
        {label}
      </p>
      <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-white/55 leading-relaxed">{description}</p>
      )}
    </Reveal>
  );
}
