'use client'

import Image from 'next/image'
import FadeIn from './FadeIn'
import SectionHeading from './SectionHeading'
import { useLang } from '@/lib/i18n'
import { dictionary } from '@/content/dictionary'

export default function ContactSection() {
  const { lang } = useLang()
  const t = dictionary.contact

  return (
    <section id="contacto" className="relative section-pad border-t border-line overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <Image
          src="/art-agents.jpg"
          alt=""
          fill
          className="object-cover opacity-30 [mask-image:linear-gradient(to_bottom,transparent,black_45%)]"
        />
      </div>
      <div className="container-page relative">
        <SectionHeading path="/contacto" title={t.title[lang]} />

        <FadeIn from="right">
          <p className="font-serif text-3xl md:text-4xl max-w-2xl leading-snug">
            {t.text[lang]}
          </p>
        </FadeIn>

        <FadeIn delay={0.1} from="left">
          <div className="mt-10 flex flex-wrap items-center gap-8">
            <a
              href="mailto:Victorperez694@gmail.com"
              className="font-mono text-sm text-accent hover:text-cream transition-colors"
            >
              {t.emailCta[lang]} → Victorperez694@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/victortrisac/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-muted hover:text-cream transition-colors"
            >
              linkedin ↗
            </a>
          </div>
          <p className="mt-8 font-mono text-xs text-muted">{t.location[lang]}</p>
        </FadeIn>
      </div>
    </section>
  )
}
