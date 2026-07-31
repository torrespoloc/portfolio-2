export function SectionDivider({ className = "" }: { className?: string }) {
  return <div className={`h-px bg-hero-border/60 ${className}`} aria-hidden="true" />;
}
