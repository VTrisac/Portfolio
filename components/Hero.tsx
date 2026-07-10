'use client'

import { motion, useReducedMotion } from 'framer-motion'
import FadeIn from './FadeIn'
import Terminal from './Terminal'
import { useLang } from '@/lib/i18n'
import { dictionary } from '@/content/dictionary'

export default function Hero() {
  const { lang } = useLang()
  const reduce = useReducedMotion()
  const t = dictionary.hero
  const words = t.headline[lang].split(' ')

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* fondo: grid de puntos + glow */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-dots [mask-image:radial-gradient(65%_65%_at_38%_40%,black,transparent)]" />
        <div className="absolute -top-48 right-[-12%] w-[620px] h-[620px] rounded-full bg-accent/[0.07] blur-[120px] animate-breathe motion-reduce:animate-none" />
      </div>

      <div className="container-page pt-14 relative grid lg:grid-cols-[minmax(0,1fr)_400px] gap-14 lg:gap-20 items-center">
        <div>
          <FadeIn>
            <p className="font-mono text-xs tracking-widest text-accent mb-6">
              GET / <span className="text-muted">— {t.eyebrow[lang]}</span>
            </p>
          </FadeIn>

          <h1 key={lang} className="font-serif text-display max-w-3xl flex flex-wrap gap-x-[0.28em]">
            {words.map((word, i) => {
              const highlight = word.startsWith('solos') || word.startsWith('themselves')
              return (
                <span key={i} className="inline-block overflow-hidden py-[0.1em] -my-[0.1em]">
                  <motion.span
                    className={`inline-block ${highlight ? 'italic text-accent' : ''}`}
                    initial={reduce ? false : { y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.65, delay: 0.15 + i * 0.07, ease: [0.2, 0.65, 0.3, 1] }}
                  >
                    {word}
                  </motion.span>
                </span>
              )
            })}
          </h1>

          <FadeIn delay={0.35}>
            <p className="mt-8 text-lg text-muted max-w-xl leading-relaxed">{t.sub[lang]}</p>
          </FadeIn>
          <FadeIn delay={0.45}>
            <div className="mt-10 flex flex-wrap items-center gap-8">
              <a
                href="#proyectos"
                className="group font-mono text-sm text-accent hover:text-cream transition-colors"
              >
                {t.ctaProjects[lang]}{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#contacto"
                className="font-mono text-sm text-muted hover:text-cream transition-colors"
              >
                {t.ctaContact[lang]}
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={0.55}>
            <p className="mt-14 font-mono text-xs text-muted">
              <span className="inline-block w-2 h-2 rounded-full bg-accent mr-2 align-middle animate-pulse motion-reduce:animate-none" />
              {t.availability[lang]}
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.5}>
          <Terminal />
        </FadeIn>
      </div>
    </section>
  )
}
