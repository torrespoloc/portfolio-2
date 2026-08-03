"use client"

import { motion, type Variants } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionDivider } from "@/components/ui/section-divider"
import { UxChatsVideo } from "@/components/about/ux-chats-video"

const fadeUp: Variants = {
 hidden: { opacity: 0, y: 28 },
 show: {
 opacity: 1,
 y: 0,
 transition: { type: "spring", stiffness: 100, damping: 14, mass: 0.7 },
 },
}

const headingReveal: Variants = {
 hidden: { opacity: 0, y: 32, scale: 0.97 },
 show: {
 opacity: 1,
 y: 0,
 scale: 1,
 transition: { type: "spring", stiffness: 80, damping: 12, mass: 0.8 },
 },
}

const buttonReveal: Variants = {
 hidden: { opacity: 0, scale: 0.85 },
 show: {
 opacity: 1,
 scale: 1,
 transition: { type: "spring", stiffness: 200, damping: 12, mass: 0.4 },
 },
}

const logoReveal: Variants = {
 hidden: { opacity: 0, rotate: -18, scale: 0.7 },
 show: {
 opacity: 1,
 rotate: 6,
 scale: 1,
 transition: { type: "spring", stiffness: 150, damping: 10, mass: 0.5 },
 },
}

const videoReveal: Variants = {
 hidden: { opacity: 0, x: 40 },
 show: {
 opacity: 1,
 x: 0,
 transition: { type: "spring", stiffness: 80, damping: 16, mass: 0.8 },
 },
}

export function AboutSneakPeek() {
 return (
 <motion.div
 initial="hidden"
 whileInView="show"
 viewport={{ once: false, amount: 0.1 }}
 transition={{ staggerChildren: 0.1, delayChildren: 0.05 }}
 >
 <div className="py-10 sm:py-12 mb-6 flex flex-col items-center text-center px-6">
 <motion.p
 variants={fadeUp}
 className="text-xs font-semibold uppercase tracking-[0.2em] text-hero-muted"
 >
 Sneak Peak: About me
 </motion.p>
 <motion.h2
 variants={headingReveal}
 className="mt-3 w-full font-heading text-[24px] font-semibold leading-[1.1] tracking-[-0.03em] text-hero-text-dark sm:text-[30px] lg:text-[54px]"
 >
 There&rsquo;s more to a designer than their portfolio
 </motion.h2>
 </div>

 <SectionDivider />

 <div className="flex flex-col md:flex-row md:gap-6 lg:gap-8 items-stretch">
 <motion.div
 variants={fadeUp}
 className="flex-1 px-5 md:px-8 py-5 md:py-6 relative"
 >
 <h2 className="font-heading text-about-h2 sm:text-about-h2-sm lg:text-about-h2-lg font-semibold tracking-[-0.03em] text-hero-text-dark mb-3">
 I founded <span className="text-accent">The UX Chats</span> in 2024.
 30 strangers showed up on the first meet.
 </h2>
 <p className="text-hero-text text-body mb-4">
 Before UX, I was an architectural designer making the leap into product
 design. Like most career switchers, I had no clue what I was doing, so
 I started talking to people. Those conversations gave me energy, clarity,
 and human connection. I posted on LinkedIn inviting people to share, vent,
 and connect. 30 strangers showed up. And it was magic.
 </p>

 <div className="flex flex-wrap gap-3">
 <motion.div variants={buttonReveal}>
 <Button
 render={<a href="https://www.theuxchats.co" target="_blank" rel="noopener noreferrer" />}
 variant="outline"
 className=" h-11 px-5"
 >
 Visit theuxchats.co <ExternalLink className="h-4 w-4 inline-block" />
 </Button>
 </motion.div>
 <motion.div variants={buttonReveal}>
 <Button
 render={<a href="/about" />}
 variant="outline"
 className=" h-11 px-5 text-accent border-accent"
 >
 More about me →
 </Button>
 </motion.div>
 </div>

 <motion.img
 variants={logoReveal}
 src="/the-ux-chats-logo.png"
 alt=""
 aria-hidden="true"
 loading="lazy"
 className="absolute bottom-0 right-6 md:right-10 w-12 h-12 object-contain rotate-6 pointer-events-none"
 />
 </motion.div>

 <motion.div variants={videoReveal} className="w-full md:w-[40%] shrink-0 self-stretch [&>div]:!w-full">
 <UxChatsVideo />
 </motion.div>
 </div>
 </motion.div>
 )
}
