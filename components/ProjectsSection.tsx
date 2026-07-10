'use client'

import FadeIn from './FadeIn'
import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'
import { useLang } from '@/lib/i18n'
import { dictionary } from '@/content/dictionary'
import { projects } from '@/content/projects'

export default function ProjectsSection() {
  const { lang } = useLang()
  const t = dictionary.projects

  return (
    <section id="proyectos" className="section-pad border-t border-line">
      <div className="container-page">
        <SectionHeading path="/proyectos" title={t.title[lang]} sub={t.sub[lang]} />

        <FadeIn>
          <div className="divide-y divide-line border-y border-line">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
