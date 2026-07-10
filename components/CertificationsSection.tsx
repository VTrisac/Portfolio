'use client'

import FadeIn from './FadeIn'
import SectionHeading from './SectionHeading'
import SpotlightCard from './SpotlightCard'
import { useLang } from '@/lib/i18n'
import { dictionary } from '@/content/dictionary'
import { certifications, education, verifyUrl } from '@/content/certifications'

export default function CertificationsSection() {
  const { lang } = useLang()
  const t = dictionary.certifications

  return (
    <section id="certificaciones" className="section-pad border-t border-line">
      <div className="container-page">
        <SectionHeading path="/certificaciones" title={t.title[lang]} sub={t.sub[lang]} />

        <FadeIn>
          <ul className="grid md:grid-cols-2 gap-px bg-line border border-line">
            {certifications.map((cert) => (
              <li key={cert.credentialId}>
                <SpotlightCard className="bg-ink p-6 h-full">
                  <h3 className="text-sm text-cream">{cert.name}</h3>
                  <p className="mt-2 font-mono text-xs text-muted">
                    Anthropic · {t.issued[lang]} · {cert.credentialId}
                  </p>
                  <a
                    href={verifyUrl(cert.credentialId)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative mt-3 inline-block font-mono text-xs text-accent hover:text-cream transition-colors"
                  >
                    {t.verify[lang]} ↗
                  </a>
                </SpotlightCard>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-16">
          <h3 className="font-mono text-xs tracking-widest text-accent mb-6">
            {t.educationTitle[lang].toUpperCase()}
          </h3>
          <ul className="divide-y divide-line">
            {education.map((entry) => (
              <li
                key={`${entry.school}-${entry.years}`}
                className="grid md:grid-cols-[200px_1fr] gap-1 md:gap-8 py-4"
              >
                <p className="font-mono text-xs text-muted pt-0.5">{entry.years}</p>
                <p className="text-sm text-cream">
                  {entry.degree[lang]}{' '}
                  <span className="text-muted">
                    — {entry.school}
                    {entry.note && ` · ${entry.note}`}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  )
}
