'use client'

import Image from 'next/image'
import FadeIn from './FadeIn'
import SectionHeading from './SectionHeading'
import Stat from './Stat'
import { useLang } from '@/lib/i18n'
import { dictionary } from '@/content/dictionary'
import { skills } from '@/content/skills'

export default function AboutSection() {
  const { lang } = useLang()
  const t = dictionary.about

  return (
    <section id="sobre-mi" className="section-pad border-t border-line">
      <div className="container-page">
        <SectionHeading path="/sobre-mi" title={t.title[lang]} />

        <div className="grid md:grid-cols-[200px_1fr] gap-10 md:gap-16 items-start">
          <FadeIn>
            <Image
              src="/profile.jpg"
              alt="Víctor Trisac"
              width={200}
              height={200}
              className="rounded-full grayscale hover:grayscale-0 transition-all duration-500 border border-line"
            />
          </FadeIn>

          <FadeIn delay={0.1} className="space-y-5 text-muted leading-relaxed max-w-2xl">
            {t.bio[lang].map((p, i) => (
              <p key={i} className={i === t.bio[lang].length - 1 ? 'text-cream' : undefined}>
                {p}
              </p>
            ))}
          </FadeIn>
        </div>

        <FadeIn delay={0.1} className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-line py-10">
          <Stat n={4} suffix="+" label={lang === 'es' ? 'años de experiencia' : 'years of experience'} />
          <Stat n={8} label={lang === 'es' ? 'posiciones' : 'roles'} />
          <Stat n={6} label={lang === 'es' ? 'casos de estudio' : 'case studies'} />
          <Stat n={10} label={lang === 'es' ? 'certificaciones' : 'certifications'} />
        </FadeIn>

        <FadeIn delay={0.15} className="mt-16 md:mt-20">
          <h3 className="font-mono text-xs tracking-widest text-accent mb-6">
            {t.skillsTitle[lang].toUpperCase()}
          </h3>
          <dl className="space-y-3">
            {skills.map((group) => (
              <div
                key={group.label.es}
                className="grid md:grid-cols-[200px_1fr] gap-1 md:gap-8 py-3 border-b border-line"
              >
                <dt className="text-sm text-cream">{group.label[lang]}</dt>
                <dd className="font-mono text-xs text-muted leading-relaxed">
                  {group.items.join(' · ')}
                </dd>
              </div>
            ))}
          </dl>
        </FadeIn>
      </div>
    </section>
  )
}
