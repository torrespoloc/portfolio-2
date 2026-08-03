import { TurtleAvatar } from "@/components/TurtleAvatar"

export function TurtleSignature() {
 return (
 <div className="flex items-center gap-2 text-xs text-muted-foreground/60">
 <TurtleAvatar size={16} className="opacity-50" />
 <span>built by Jacki</span>
 </div>
 )
}
