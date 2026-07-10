'use client'

import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'

export default function Stat({
  n,
  suffix,
  label,
}: {
  n: number
  suffix?: string
  label: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const reduce = useReducedMotion()
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reduce) {
      setVal(n)
      return
    }
    const controls = animate(0, n, {
      duration: 1.2,
      ease: 'easeOut',
      onUpdate: (v) => setVal(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, n, reduce])

  return (
    <div ref={ref}>
      <p className="font-serif text-4xl md:text-5xl">
        {val}
        {suffix && <span className="text-accent">{suffix}</span>}
      </p>
      <p className="mt-2 font-mono text-xs text-muted">{label}</p>
    </div>
  )
}
