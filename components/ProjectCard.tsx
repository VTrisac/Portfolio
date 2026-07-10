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

  const blocks = [
    { label: t.problem[lang], text: project.problem[lang] },
    { label: t.solution[lang], text: project.solution[lang] },
    { label: t.result[lang], text: project.result[lang] },
  ]

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
            <motion.div
              className="relative mb-10 md:ml-[232px] max-w-3xl pl-6 md:pl-8 space-y-6"
              initial={reduce ? false : 'hidden'}
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } } }}
            >
              {/* raíl que se dibuja — mismo lenguaje que el timeline de experiencia */}
              <span aria-hidden="true" className="absolute left-0 top-1 bottom-1 w-px bg-line" />
              <motion.span
                aria-hidden="true"
                className="absolute left-0 top-1 bottom-1 w-px bg-accent origin-top"
                variants={{
                  hidden: { scaleY: 0 },
                  show: { scaleY: 1, transition: { duration: 0.8, ease: 'easeOut' } },
                }}
              />
              {blocks.map((block) => (
                <motion.div
                  key={block.label}
                  variants={{
                    hidden: { opacity: 0, x: -18 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
                  }}
                >
                  <h4 className="font-mono text-xs tracking-widest text-accent mb-2">
                    {block.label.toUpperCase()}
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">{block.text}</p>
                </motion.div>
              ))}
              <motion.p
                className="font-mono text-xs text-muted/70"
                variants={{
                  hidden: { opacity: 0, x: -18 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
                }}
              >
                {project.stack.join(' · ')}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  )
}
