import { cn } from "@/lib/utils"

type FlatEdge = "top" | "bottom" | "left" | "right"

interface SemicircleProps {
 size?: number // diameter in px, snapped to 8px grid (default 144)
 color?: string // tailwind bg class (default 'bg-chartreuse')
 flatEdge?: FlatEdge // which edge is flat (default 'top')
 className?: string // for absolute positioning
 style?: React.CSSProperties // for dynamic positioning (e.g. from getBoundingClientRect)
 children?: React.ReactNode // optional text content
}

const isVertical = (e: FlatEdge) => e === "top" || e === "bottom"

export function Semicircle({
 size = 144,
 color = "bg-chartreuse",
 flatEdge = "top",
 className,
 style,
 children,
}: SemicircleProps) {
 const snapped = Math.round(size / 8) * 8
 const half = snapped / 2
 const vertical = isVertical(flatEdge)

 // Parent clip dimensions: narrow dimension × full dimension
 const clipW = vertical ? snapped : half
 const clipH = vertical ? half : snapped

 // Circle positioning inside clip
 const circlePos: Record<FlatEdge, string> = {
 top: "top-0 left-0",
 bottom: "bottom-0 left-0",
 left: "top-0 left-0",
 right: "top-0 right-0",
 }

 // Text offset from the flat edge
 const textClass: Record<FlatEdge, string> = {
 top: "mt-2",
 bottom: "mb-2",
 left: "ml-2",
 right: "mr-2",
 }

 return (
 <div
 className={cn("absolute overflow-hidden pointer-events-none", className)}
 style={{ width: clipW, height: clipH, ...style }}
 aria-hidden={!children}
 >
 <div
 className={cn(
 "absolute flex items-center justify-center",
 color,
 circlePos[flatEdge],
 )}
 style={{
 width: snapped,
 height: snapped,
 borderRadius: "50%",
 }}
 >
 {children && (
 <span
 className={cn(
 "text-xs font-semibold text-chartreuse-foreground text-center px-3 max-w-full pointer-events-auto",
 textClass[flatEdge],
 )}
 >
 {children}
 </span>
 )}
 </div>
 </div>
 )
}
