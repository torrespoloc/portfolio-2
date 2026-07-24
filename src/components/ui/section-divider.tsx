export function SectionDivider({ className = "" }: { className?: string }) {
  return <div className={`h-px bg-hero-border opacity-70 ${className}`} aria-hidden="true" />;
}
