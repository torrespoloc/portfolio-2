export function SectionDivider({ className = "" }: { className?: string }) {
  return <div className={`h-px bg-hero-border ${className}`} aria-hidden="true" />;
}
