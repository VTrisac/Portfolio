'use client'

import { useEffect, useState } from 'react'
import { useLang } from '@/lib/i18n'

const sections = ['sobre-mi', 'proyectos', 'experiencia', 'certificaciones', 'contacto']

export default function Header() {
  const { lang, toggle } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? window.scrollY / max : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    // Sección activa: la que cruza la banda central del viewport
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-30% 0px -60% 0px' }
    )
    for (const id of sections) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 border-b ${
        scrolled ? 'bg-ink/85 backdrop-blur border-line' : 'bg-transparent border-transparent'
      }`}
    >
      <div className="container-page flex items-center justify-between h-14">
        <a href="#top" className="group font-serif italic text-lg leading-none">
          V
          <span className="text-accent transition-opacity group-hover:animate-pulse">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-7" aria-label="Secciones">
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? 'true' : undefined}
              className={`group relative py-1 font-mono text-xs transition-colors duration-300 ${
                active === id ? 'text-cream' : 'text-muted hover:text-cream'
              }`}
            >
              /{id}
              <span
                aria-hidden="true"
                className={`absolute bottom-0 left-0 h-px w-full bg-accent origin-left transition-transform duration-300 ${
                  active === id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
              />
            </a>
          ))}
        </nav>

        <button
          onClick={toggle}
          className="font-mono text-xs tracking-wider"
          aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a español'}
        >
          <span className={`transition-colors duration-300 ${lang === 'es' ? 'text-cream' : 'text-muted'}`}>es</span>
          <span className="text-muted"> / </span>
          <span className={`transition-colors duration-300 ${lang === 'en' ? 'text-cream' : 'text-muted'}`}>en</span>
        </button>
      </div>

      {/* progreso de lectura */}
      <span
        aria-hidden="true"
        className="absolute bottom-[-1px] left-0 h-px bg-accent"
        style={{ width: `${progress * 100}%` }}
      />
    </header>
  )
}
