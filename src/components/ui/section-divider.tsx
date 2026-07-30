export function SectionDivider({ className = "" }: { className?: string }) {
  return <div className={`h-px bg-hero-border/35 ${className}`} aria-hidden="true" />;
}
