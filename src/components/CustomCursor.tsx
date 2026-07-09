"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer) return;

    document.documentElement.classList.add("custom-cursor-active");

    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(
        target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.closest("a") !== null ||
          target.closest("button") !== null
      );
    };

    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  return (
    <>
      {/* Outer ring — always visible, expands on hover, contracts on press */}
      <div
        className="pointer-events-none fixed z-[9999]"
        style={{
          left: pos.x,
          top: pos.y,
          width: pressed ? 28 : hovering ? 48 : 36,
          height: pressed ? 28 : hovering ? 48 : 36,
          borderRadius: "50%",
          border: pressed
            ? "2px solid var(--accent)"
            : "2px solid var(--accent)",
          backgroundColor: pressed ? "var(--accent)" : "transparent",
          opacity: pressed ? 0.5 : 0.85,
          transform: "translate(-50%, -50%)",
          transition:
            "width 0.12s ease, height 0.12s ease, background-color 0.12s ease, opacity 0.12s ease",
          willChange: "transform, width, height",
          boxShadow: "0 0 0 1.5px rgba(255,255,255,0.5)",
        }}
      />
      {/* Core dot */}
      <div
        className="pointer-events-none fixed z-[9999]"
        style={{
          left: pos.x,
          top: pos.y,
          width: pressed ? 6 : 10,
          height: pressed ? 6 : 10,
          borderRadius: "50%",
          backgroundColor: pressed ? "white" : "var(--accent)",
          transform: "translate(-50%, -50%)",
          transition: "width 0.12s ease, height 0.12s ease, background-color 0.12s ease",
          willChange: "transform",
        }}
      />
    </>
  );
}
