'use client'

import { motion, useReducedMotion } from 'framer-motion'

const initials = {
  up: { opacity: 0, y: 16, x: 0 },
  left: { opacity: 0, x: -32, y: 0 },
  right: { opacity: 0, x: 32, y: 0 },
}

export default function FadeIn({
  children,
  delay = 0,
  className,
  from = 'up',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
  from?: 'up' | 'left' | 'right'
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      initial={reduce ? false : initials[from]}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay, ease: [0.2, 0.65, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
