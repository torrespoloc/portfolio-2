"use client"

import type { CSSProperties, ReactNode } from "react"
import { motion } from "framer-motion"

export function FlipCard({
  isFlipped,
  onToggle,
  front,
  back,
  className = "",
  style,
}: {
  isFlipped: boolean;
  onToggle: () => void;
  front: ReactNode;
  back: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={className}
      style={{ perspective: "1200px" }}
    >
      <motion.div
        className="relative rounded-none"
        style={{
          transformStyle: "preserve-3d",
          WebkitTransformStyle: "preserve-3d",
          ...style,
        }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{
          type: "spring",
          stiffness: 90,
          damping: 14,
          mass: 0.8,
        }}
      >
        {/* Front face */}
        <div
          className="relative"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            visibility: isFlipped ? "hidden" : "visible",
          }}
        >
          {front}
        </div>

        {/* Back face */}
        <div
          className="absolute inset-0"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            visibility: isFlipped ? "visible" : "hidden",
          }}
        >
          {back}
        </div>
      </motion.div>
    </div>
  )
}
