"use client"

import * as React from "react"
import { motion } from "framer-motion"

interface BurgundySectionProps {
  children: React.ReactNode
  className?: string
}

export function BurgundySection({ children, className = "" }: BurgundySectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`px-6 sm:px-10 lg:px-16 xl:px-24 py-20 lg:py-24 bg-burgundy text-white ${className}`}
    >
      <div className="max-w-4xl mx-auto">
        {children}
      </div>
    </motion.section>
  )
}
