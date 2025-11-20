'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TypewriterTextProps {
  text: string
  delay?: number
  speed?: number
  className?: string
}

export default function TypewriterText({ text, delay = 0, speed = 50, className = '' }: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      } else {
        setShowCursor(false)
      }
    }, currentIndex === 0 ? delay : speed)

    return () => clearTimeout(timeout)
  }, [currentIndex, text, delay, speed])

  return (
    <span className={className}>
      {displayedText}
      {showCursor && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
          className="inline-block w-0.5 h-[1em] bg-current ml-1"
        />
      )}
    </span>
  )
}
