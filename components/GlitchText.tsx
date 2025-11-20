'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface GlitchTextProps {
  text: string
  className?: string
}

export default function GlitchText({ text, className = '' }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false)

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsGlitching(true)}
      onMouseLeave={() => setIsGlitching(false)}
    >
      {/* Main text */}
      <span className="relative z-10">{text}</span>

      {/* Glitch layers */}
      {isGlitching && (
        <>
          <motion.span
            className="absolute top-0 left-0 text-accent-red mix-blend-multiply"
            animate={{
              x: [-2, 2, -2, 2, 0],
              y: [2, -2, 2, -2, 0],
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatDelay: 0.1,
            }}
          >
            {text}
          </motion.span>
          <motion.span
            className="absolute top-0 left-0 text-accent-navy mix-blend-multiply"
            animate={{
              x: [2, -2, 2, -2, 0],
              y: [-2, 2, -2, 2, 0],
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatDelay: 0.15,
            }}
          >
            {text}
          </motion.span>
        </>
      )}
    </div>
  )
}
