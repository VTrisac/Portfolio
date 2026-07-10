'use client'

import FadeIn from './FadeIn'
import { useLang } from '@/lib/i18n'
import { dictionary } from '@/content/dictionary'

export default function Hero() {
  const { lang } = useLang()
  const t = dictionary.hero

  return (
    <section className="min-h-[92vh] flex items-center">
      <div className="container-page pt-14">
        <FadeIn>
          <p className="font-mono text-xs tracking-widest text-accent mb-6">
            GET / <span className="text-muted">— {t.eyebrow[lang]}</span>
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="font-serif text-display max-w-3xl">{t.headline[lang]}</h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-8 text-lg text-muted max-w-xl leading-relaxed">{t.sub[lang]}</p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center gap-8">
            <a
              href="#proyectos"
              className="font-mono text-sm text-accent hover:text-cream transition-colors"
            >
              {t.ctaProjects[lang]} →
            </a>
            <a
              href="#contacto"
              className="font-mono text-sm text-muted hover:text-cream transition-colors"
            >
              {t.ctaContact[lang]}
            </a>
          </div>
        </FadeIn>
        <FadeIn delay={0.4}>
          <p className="mt-20 font-mono text-xs text-muted">
            <span className="inline-block w-2 h-2 rounded-full bg-accent mr-2 align-middle" />
            {t.availability[lang]}
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
