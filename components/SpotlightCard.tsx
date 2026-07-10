'use client'

import { useRef } from 'react'

export default function SpotlightCard({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--sx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--sy', `${e.clientY - rect.top}px`)
  }

  return (
    <div ref={ref} onMouseMove={onMouseMove} className={`relative group ${className ?? ''}`}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            'radial-gradient(220px circle at var(--sx, 50%) var(--sy, 50%), rgba(163,81,57,0.16), transparent 65%)',
        }}
      />
      {children}
    </div>
  )
}
