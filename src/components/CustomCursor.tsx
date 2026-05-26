"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
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

    document.body.style.cursor = "none";

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <>
      {/* Expanding ring on hover */}
      <div
        className="pointer-events-none fixed z-[9999]"
        style={{
          left: pos.x,
          top: pos.y,
          width: hovering ? 56 : 0,
          height: hovering ? 56 : 0,
          borderRadius: "50%",
          border: "1.5px solid #485bfc",
          opacity: hovering ? 1 : 0,
          transform: "translate(-50%, -50%)",
          transition: "width 0.3s ease, height 0.3s ease, opacity 0.2s ease",
        }}
      />
      {/* Core dot */}
      <div
        className="pointer-events-none fixed z-[9999]"
        style={{
          left: pos.x,
          top: pos.y,
          width: 20,
          height: 20,
          borderRadius: "50%",
          backgroundColor: "#485bfc",
          filter: "blur(2px)",
          transform: "translate(-50%, -50%)",
          transition: "width 0.15s, height 0.15s",
        }}
      />
    </>
  );
}
