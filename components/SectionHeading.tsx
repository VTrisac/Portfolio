'use client'

import FadeIn from './FadeIn'

export default function SectionHeading({
  path,
  title,
  sub,
}: {
  path: string
  title: string
  sub?: string
}) {
  return (
    <FadeIn className="mb-14 md:mb-20">
      <p className="font-mono text-xs tracking-widest text-accent mb-4" aria-hidden="true">
        GET {path}
      </p>
      <h2 className="font-serif text-4xl md:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-muted max-w-2xl leading-relaxed">{sub}</p>}
    </FadeIn>
  )
}
