"use client"

import { motion, type Variants } from "framer-motion"
import { useReducedMotion } from "@/hooks/useReducedMotion"

const pageVariants: Variants = {
 hidden: { opacity: 0, x: 24 },
 visible: {
 opacity: 1,
 x: 0,
 transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
 },
}

export default function Template({ children }: { children: React.ReactNode }) {
 const reducedMotion = useReducedMotion()

 if (reducedMotion) return <>{children}</>

 return (
 <motion.div initial="hidden" animate="visible" variants={pageVariants}>
 {children}
 </motion.div>
 )
}
