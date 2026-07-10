'use client'

import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { useLang } from '@/lib/i18n'

type Line = { t: string; c: string; pause?: number }

const linesFor = (lang: 'es' | 'en'): Line[] =>
  lang === 'es'
    ? [
        { t: '$ POST /agents/run', c: 'text-cream', pause: 500 },
        { t: '  { "objetivo": "automatizar proceso" }', c: 'text-muted', pause: 700 },
        { t: '→ planificando tarea…', c: 'text-muted', pause: 800 },
        { t: '✓ contexto analizado', c: 'text-muted', pause: 400 },
        { t: '✓ tools: fastapi · openai · n8n', c: 'text-muted', pause: 400 },
        { t: '✓ pipeline desplegado en cloud', c: 'text-muted', pause: 700 },
        { t: '200 OK · 1.2s', c: 'text-accent', pause: 500 },
        { t: '» sistema en producción', c: 'text-cream' },
      ]
    : [
        { t: '$ POST /agents/run', c: 'text-cream', pause: 500 },
        { t: '  { "goal": "automate process" }', c: 'text-muted', pause: 700 },
        { t: '→ planning task…', c: 'text-muted', pause: 800 },
        { t: '✓ context analyzed', c: 'text-muted', pause: 400 },
        { t: '✓ tools: fastapi · openai · n8n', c: 'text-muted', pause: 400 },
        { t: '✓ pipeline deployed to cloud', c: 'text-muted', pause: 700 },
        { t: '200 OK · 1.2s', c: 'text-accent', pause: 500 },
        { t: '» system in production', c: 'text-cream' },
      ]

export default function Terminal() {
  const reduce = useReducedMotion()
  const { lang } = useLang()
  const lines = linesFor(lang)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (reduce) {
      setCount(lines.length)
      return
    }
    let i = 0
    let timer: ReturnType<typeof setTimeout>
    const tick = () => {
      i += 1
      setCount(i)
      if (i < lines.length) {
        timer = setTimeout(tick, lines[i - 1].pause ?? 450)
      } else {
        timer = setTimeout(() => {
          i = 0
          setCount(0)
          timer = setTimeout(tick, 500)
        }, 4200)
      }
    }
    setCount(0)
    timer = setTimeout(tick, 700)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduce, lang])

  return (
    <div
      aria-hidden="true"
      className="rounded-lg border border-line bg-surface/80 shadow-[0_0_80px_-20px_rgba(163,81,57,0.3)] overflow-hidden"
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-line">
        <span className="w-2.5 h-2.5 rounded-full bg-line" />
        <span className="w-2.5 h-2.5 rounded-full bg-line" />
        <span className="w-2.5 h-2.5 rounded-full bg-accent/60" />
        <span className="ml-3 font-mono text-[11px] text-muted">victor@weai — agents</span>
      </div>
      <div className="p-5 h-[248px] font-mono text-xs leading-6">
        {lines.slice(0, count).map((line, i) => (
          <p key={i} className={line.c}>
            {line.t}
          </p>
        ))}
        <span className="inline-block w-[7px] h-[14px] translate-y-[2px] bg-accent animate-blink" />
      </div>
    </div>
  )
}
