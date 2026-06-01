"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export function ScrollChevron() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={[
        "absolute bottom-6 left-1/2 -translate-x-1/2",
        "transition-opacity duration-700 ease-out",
        "pointer-events-none select-none",
        visible ? "opacity-100" : "opacity-0",
      ].join(" ")}
      aria-hidden="true"
    >
      <ChevronDown
        className="w-5 h-5 text-hero-muted animate-chevron-bounce"
        strokeWidth={2}
      />
    </div>
  );
}
