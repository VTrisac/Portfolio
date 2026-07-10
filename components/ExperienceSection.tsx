'use client'

import FadeIn from './FadeIn'
import SectionHeading from './SectionHeading'
import { useLang } from '@/lib/i18n'
import { dictionary } from '@/content/dictionary'
import { experience } from '@/content/experience'

export default function ExperienceSection() {
  const { lang } = useLang()
  const t = dictionary.experience

  return (
    <section id="experiencia" className="section-pad border-t border-line">
      <div className="container-page">
        <SectionHeading path="/experiencia" title={t.title[lang]} />

        <ol className="divide-y divide-line">
          {experience.map((role, i) => (
            <li key={`${role.company}-${role.start}`}>
              <FadeIn delay={Math.min(i * 0.05, 0.2)}>
                <div className="grid md:grid-cols-[200px_1fr] gap-2 md:gap-8 py-8">
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
