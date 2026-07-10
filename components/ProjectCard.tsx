'use client'

import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useLang } from '@/lib/i18n'
import { dictionary } from '@/content/dictionary'
import type { Project } from '@/content/projects'

export default function ProjectCard({ project }: { project: Project }) {
  const { lang } = useLang()
  const t = dictionary.projects
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()

  return (
    <article>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full text-left py-8 px-3 -mx-3 group hover:bg-surface/40 transition-colors duration-300"
      >
        <div className="grid md:grid-cols-[200px_1fr_auto] gap-2 md:gap-8 items-baseline">
          <p className="font-mono text-xs text-muted">
            {project.year} · {project.company}
          </p>
          <div>
            <h3 className="font-serif text-2xl group-hover:text-accent transition-colors">
              {project.title[lang]}
            </h3>
            <p className="mt-2 text-sm text-muted leading-relaxed">{project.summary[lang]}</p>
          </div>
          <span
            className="font-mono text-xs text-accent justify-self-start md:justify-self-end"
            aria-hidden="true"
          >
            {open ? `— ${t.close[lang]}` : `+ ${t.open[lang]}`}
          </span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="pb-10 md:pl-[232px] max-w-3xl space-y-6">
              <div>
                <h4 className="font-mono text-xs tracking-widest text-accent mb-2">
                  {t.problem[lang].toUpperCase()}
                </h4>
                <p className="text-sm text-muted leading-relaxed">{project.problem[lang]}</p>
              </div>
              <div>
                <h4 className="font-mono text-xs tracking-widest text-accent mb-2">
                  {t.solution[lang].toUpperCase()}
                </h4>
                <p className="text-sm text-muted leading-relaxed">{project.solution[lang]}</p>
              </div>
              <div>
                <h4 className="font-mono text-xs tracking-widest text-accent mb-2">
                  {t.result[lang].toUpperCase()}
                </h4>
                <p className="text-sm text-muted leading-relaxed">{project.result[lang]}</p>
              </div>
              <p className="font-mono text-xs text-muted/70">{project.stack.join(' · ')}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  )
}
