import * as React from "react"

interface TurtleAvatarProps {
  size?: number
  className?: string
}

export function TurtleAvatar({ size = 40, className = "" }: TurtleAvatarProps) {
  return (
    <img
      src="/logos/turtle.svg"
      alt="Turtle, the portfolio mascot"
      loading="lazy"
      width={size}
      height={Math.round((size * 241) / 319)}
      className={className}
      style={{ display: "block" }}
    />
  )
}
