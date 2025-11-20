'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface SectionNumberProps {
  number: string
  className?: string
}

export default function SectionNumber({ number, className = '' }: SectionNumberProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <div ref={ref} className={`absolute top-0 left-0 right-0 pointer-events-none select-none overflow-hidden ${className}`}>
      <motion.span
        style={{ y, opacity, scale }}
        className="section-number absolute -top-20 md:-top-32 left-8 md:left-16"
      >
        {number}
      </motion.span>
    </div>
  )
}
