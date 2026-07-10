'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import type { Lang } from '@/content/types'

const LanguageContext = createContext<{ lang: Lang; toggle: () => void }>({
  lang: 'es',
  toggle: () => {},
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // ES se renderiza en servidor; EN solo tras hidratar (evita hydration mismatch)
  const [lang, setLang] = useState<Lang>('es')

  useEffect(() => {
    if (localStorage.getItem('lang') === 'en') {
      setLang('en')
      document.documentElement.lang = 'en'
    }
  }, [])

  const toggle = () =>
    setLang((prev) => {
      const next: Lang = prev === 'es' ? 'en' : 'es'
      localStorage.setItem('lang', next)
      document.documentElement.lang = next
      return next
    })

  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)
