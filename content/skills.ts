import type { Localized } from './types'

export type SkillGroup = { label: Localized; items: string[] }

export const skills: SkillGroup[] = [
  {
    label: { es: 'Backend', en: 'Backend' },
    items: ['Python', 'FastAPI', 'Django', 'PostgreSQL', 'Redis', 'MongoDB'],
  },
  {
    label: { es: 'IA y automatización', en: 'AI & automation' },
    items: ['OpenAI', 'Claude', 'LangChain', 'n8n', 'MCP', 'Web Scraping'],
  },
  {
    label: { es: 'Frontend', en: 'Frontend' },
    items: ['TypeScript', 'React', 'Next.js', 'Vue.js', 'Tailwind CSS'],
  },
  {
    label: { es: 'Cloud y DevOps', en: 'Cloud & DevOps' },
    items: ['Azure', 'GCP', 'Docker', 'GitHub Actions', 'CI/CD', 'Linux'],
  },
]
