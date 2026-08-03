"use client"

import { motion, type Variants } from "framer-motion"
import { EXPERIENCE } from "@/lib/data/home"

const fadeUp: Variants = {
 hidden: { opacity: 0, y: 24 },
 show: {
 opacity: 1,
 y: 0,
 transition: { type: "spring", stiffness: 120, damping: 14, mass: 0.6 },
 },
}

const dotReveal: Variants = {
 hidden: { scale: 0, opacity: 0 },
 show: {
 scale: 1,
 opacity: 1,
 transition: { type: "spring", stiffness: 300, damping: 12, mass: 0.3 },
 },
}

const logoReveal: Variants = {
 hidden: { opacity: 0, scale: 0.9, rotate: -4 },
 show: {
 opacity: 1,
 scale: 1,
 rotate: 0,
 transition: { type: "spring", stiffness: 180, damping: 14, mass: 0.5 },
 },
}

export function Experience() {
 return (
 <div>
 <div className="bg-accent px-6 py-10 sm:py-12">
 <motion.div
 initial="hidden"
 whileInView="show"
 viewport={{ once: false, amount: 0.15 }}
 className="border-b border-white/15 pb-8"
 >
 <motion.div variants={fadeUp} className="max-w-[1000px]">
 <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
 Experience
 </p>
 <h2 className="mt-3 font-heading text-[24px] font-semibold leading-[1.1] tracking-[-0.03em] text-white sm:text-[36px] lg:text-[54px]">
 Product work with a bias toward shipping systems, not just screens.
 </h2>
 </motion.div>
 </motion.div>

 <div className="mt-10 md:mt-14 lg:mt-16 space-y-4 md:space-y-10">
 {EXPERIENCE.map((entry, i) => (
 <motion.div
 key={i}
 initial="hidden"
 whileInView="show"
 viewport={{ once: false, amount: 0.2 }}
 transition={{ staggerChildren: 0.08, delayChildren: i * 0.04 }}
 className="grid gap-y-4 border-b border-white/15 pb-4 md:pb-8 last:border-b-0 last:pb-0 md:grid-cols-[160px_minmax(0,1fr)] md:gap-x-16"
 >
 <motion.div variants={fadeUp} className="flex items-center gap-2.5 pt-1">
 <motion.span
 variants={dotReveal}
 className="h-3 w-3 shrink-0 rounded-full bg-chartreuse"
 />
 <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-white">
 {entry.period}
 </span>
 </motion.div>

 <div className="grid gap-4 md:gap-6 lg:gap-10 md:grid-cols-[minmax(0,400px)_minmax(0,1fr)] md:gap-x-12 lg:gap-x-16">
 <motion.div variants={fadeUp} className="flex items-start gap-4">
 <motion.div
 variants={logoReveal}
 className="mt-1 flex h-11 w-[76px] shrink-0 items-center justify-center overflow-hidden rounded-md bg-white/90 shadow-sm border border-black/5 md:h-14 md:w-24 lg:h-16 lg:w-28"
 >
 <img
 src={entry.logo}
 alt={entry.company}
 loading="lazy"
 className="dropdown-logo h-full w-full object-contain p-2 md:p-2"
 style={{ filter: "none" }}
 />
 </motion.div>
 <div>
 <h3 className="text-base sm:text-body-lg font-semibold leading-tight text-white">
 {entry.role}
 </h3>
 <p className="text-body font-medium text-white">{entry.company}</p>
 </div>
 </motion.div>

 <motion.p
 variants={fadeUp}
 className="max-w-[60ch] text-xs sm:text-body-lg leading-relaxed text-white"
 >
 {entry.description}
 </motion.p>
 </div>
 </motion.div>
 ))}
 </div>
 </div>
 </div>
 )
}
