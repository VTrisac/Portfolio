'use client'

import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import FadeIn from './FadeIn'
import SectionHeading from './SectionHeading'
import { useLang } from '@/lib/i18n'
import { dictionary } from '@/content/dictionary'
import { experience } from '@/content/experience'

export default function ExperienceSection() {
  const { lang } = useLang()
  const t = dictionary.experience
  const reduce = useReducedMotion()
  const listRef = useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ['start 0.8', 'end 0.5'],
  })
  const scaleY = useSpring(scrollYProgress, { stiffness: 60, damping: 20 })

  return (
    <section id="experiencia" className="section-pad border-t border-line">
      <div className="container-page">
        <SectionHeading path="/experiencia" title={t.title[lang]} />

        <ol ref={listRef} className="relative divide-y divide-line border-l border-line pl-6 md:pl-10">
          {/* línea que se dibuja con el scroll */}
          <motion.span
            aria-hidden="true"
            style={{ scaleY: reduce ? 1 : scaleY }}
            className="absolute left-[-1px] top-0 bottom-0 w-px bg-accent origin-top"
          />
          {experience.map((role, i) => (
            <li key={`${role.company}-${role.start}`}>
              <FadeIn delay={Math.min(i * 0.05, 0.2)}>
                <div className="grid md:grid-cols-[180px_1fr] gap-2 md:gap-8 py-8">
                  <p className="font-mono text-xs text-muted pt-1">
                    {role.start} — {role.end ?? t.present[lang]}
                  </p>
                  <div>
                    <h3 className="text-cream">
                      {role.role[lang]}{' '}
                      <span className="font-serif italic text-accent">· {role.company}</span>
                    </h3>
                    <p className="font-mono text-xs text-muted mt-1">{role.mode[lang]}</p>
                    <ul className="mt-3 space-y-1.5 text-sm text-muted leading-relaxed">
                      {role.highlights[lang].map((h, j) => (
                        <li key={j}>{h}</li>
                      ))}
                    </ul>
                    <p className="mt-3 font-mono text-xs text-muted/70">
                      {role.stack.join(' · ')}
                    </p>
                  </div>
                </div>
              </FadeIn>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
