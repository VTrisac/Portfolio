'use client'

import { useLang } from '@/lib/i18n'

const links = [
  '/sobre-mi',
  '/proyectos',
  '/experiencia',
  '/certificaciones',
  '/contacto',
]

export default function Header() {
  const { lang, toggle } = useLang()

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-ink/85 backdrop-blur border-b border-line">
      <div className="container-page flex items-center justify-between h-14">
        <a href="#top" className="font-serif italic text-lg leading-none">
          V<span className="text-accent">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-6" aria-label="Secciones">
          {links.map((path) => (
            <a
              key={path}
              href={`#${path.slice(1)}`}
              className="font-mono text-xs text-muted hover:text-cream transition-colors"
            >
              {path}
            </a>
          ))}
        </nav>

        <button
          onClick={toggle}
          className="font-mono text-xs tracking-wider"
          aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a español'}
        >
          <span className={lang === 'es' ? 'text-cream' : 'text-muted'}>es</span>
          <span className="text-muted"> / </span>
          <span className={lang === 'en' ? 'text-cream' : 'text-muted'}>en</span>
        </button>
      </div>
    </header>
  )
}
