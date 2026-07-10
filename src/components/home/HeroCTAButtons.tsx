"use client"

import { motion, type Variants } from "framer-motion"
import { CopyEmail } from "./CopyEmail"
import { Button } from "@/components/ui/button"

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
      className="mt-10 sm:mt-14 flex flex-col items-center gap-6"
    >
      <div className="flex flex-wrap justify-center gap-4">
        <Button
          render={<a href="/about" />}
          className="bg-accent text-white hover:opacity-85 hover:bg-accent rounded-[12px] h-11 px-5"
        >
          About me
        </Button>
        <Button
          render={<a href="https://www.linkedin.com/in/jackelinetorres/" target="_blank" rel="noopener noreferrer" />}
          variant="outline"
          className="rounded-[12px] h-11 px-5"
        >
          LinkedIn
        </Button>
      </div>
      <div className="hidden md:flex">
        <CopyEmail />
      </div>
    </motion.div>
  )
}
