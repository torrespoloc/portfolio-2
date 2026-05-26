import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio Presentation — Jacki Torres Poloc",
  description: "Portfolio walkthrough deck",
};

export default function PresentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="presentation-root">
      {children}
    </div>
  );
}
