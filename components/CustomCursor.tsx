'use client'

import { useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 400 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      setIsVisible(true)
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Track interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea')

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter as any)
      el.addEventListener('mouseleave', handleMouseLeave as any)
    })

    window.addEventListener('mousemove', moveCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter as any)
        el.removeEventListener('mouseleave', handleMouseLeave as any)
      })
    }
  }, [cursorX, cursorY])

  // Hide default cursor
  useEffect(() => {
    document.body.style.cursor = 'none'
    return () => {
      document.body.style.cursor = 'auto'
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Main cursor - square editorial style */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          animate={{
            width: isHovering ? 60 : 20,
            height: isHovering ? 60 : 20,
            marginLeft: isHovering ? -30 : -10,
            marginTop: isHovering ? -30 : -10,
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          className="bg-magazine-cream border-2 border-magazine-cream"
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 0 : 1,
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          className="w-1 h-1 -ml-0.5 -mt-0.5 bg-accent-red"
        />
      </motion.div>
    </>
  )
}
