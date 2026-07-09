"use client"

import { motion, type Variants } from "framer-motion"
import { CopyEmail } from "./CopyEmail"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const sectionUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 14,
      mass: 0.8,
    },
  },
}

export function HeroCTAButtons() {
  return (
    <motion.div
      variants={sectionUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mt-16 flex flex-col items-center gap-5"
    >
      <div className="flex flex-wrap justify-center gap-3">
        <a
          href="/about"
          className={cn(buttonVariants({ size: "sm" }), "bg-accent text-white hover:opacity-85 hover:bg-accent rounded-[12px] h-[38px]")}
        >
          About me
        </a>
        <a
          href="https://www.linkedin.com/in/jackelinetorres/"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "outline", size: "sm" }), "rounded-[12px] h-[38px]")}
        >
          LinkedIn
        </a>
      </div>
      <CopyEmail />
    </motion.div>
  )
}
