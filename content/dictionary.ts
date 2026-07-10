import type { Localized } from './types'

type Dictionary = {
  hero: {
    eyebrow: Localized
    headline: Localized
    sub: Localized
    availability: Localized
    ctaProjects: Localized
    ctaContact: Localized
  }
  about: {
    title: Localized
    bio: Localized<string[]>
    skillsTitle: Localized
  }
  experience: {
    title: Localized
    present: Localized
  }
  projects: {
    title: Localized
    sub: Localized
    problem: Localized
    solution: Localized
    result: Localized
    open: Localized
    close: Localized
  }
  certifications: {
    title: Localized
    sub: Localized
    verify: Localized
    issued: Localized
    educationTitle: Localized
  }
  contact: {
    title: Localized
    text: Localized
    emailCta: Localized
    location: Localized
  }
}

export const dictionary: Dictionary = {
  hero: {
    eyebrow: {
      es: 'víctor trisac — full stack engineer',
      en: 'víctor trisac — full stack engineer',
    },
    headline: {
      es: 'Construyo sistemas que trabajan solos.',
      en: 'I build systems that run themselves.',
    },
    sub: {
      es: 'Especializado en Python, FastAPI y automatización con IA. Sistemas escalables en cloud, de la arquitectura al deploy.',
      en: 'Specialized in Python, FastAPI and AI automation. Scalable cloud systems, from architecture to deploy.',
    },
    availability: {
      es: 'Barcelona · híbrido / presencial',
      en: 'Barcelona · hybrid / on-site',
    },
    ctaProjects: { es: 'Ver proyectos', en: 'View projects' },
    ctaContact: { es: 'Contactar', en: 'Get in touch' },
  },
  about: {
    title: { es: 'Sobre mí', en: 'About me' },
    bio: {
      es: [
        'Empecé construyendo webs y herramientas internas para un grupo hotelero, y desde entonces he pasado por un ERP industrial escrito en Python puro, una wallet fintech con Django y Vue, y sistemas de recomendación con IA para e-commerce.',
        'Hoy trabajo como Ingeniero de IA Senior en WeAi, donde diseño y llevo a producción sistemas basados en agentes y automatización inteligente.',
        'Mi enfoque no ha cambiado: backend sólido, código mantenible y soluciones que resuelven un problema real sin adornos.',
      ],
      en: [
        'I started out building websites and internal tools for a hotel group, and since then I have shipped an industrial ERP written in pure Python, a fintech wallet with Django and Vue, and AI recommendation systems for e-commerce.',
        'Today I work as a Senior AI Engineer at WeAi, designing and shipping agent-based systems and intelligent automation to production.',
        'My approach has not changed: solid backend, maintainable code, and solutions that fix a real problem without decoration.',
      ],
    },
    skillsTitle: { es: 'Stack', en: 'Stack' },
  },
  experience: {
    title: { es: 'Experiencia', en: 'Experience' },
    present: { es: 'actualidad', en: 'present' },
  },
  projects: {
    title: { es: 'Proyectos', en: 'Projects' },
    sub: {
      es: 'Casos reales de mi trayectoria profesional. Sin métricas infladas: qué problema había, qué construí y qué quedó funcionando.',
      en: 'Real cases from my professional track record. No inflated metrics: the problem, what I built, and what was left running.',
    },
    problem: { es: 'Problema', en: 'Problem' },
    solution: { es: 'Solución', en: 'Solution' },
    result: { es: 'Resultado', en: 'Result' },
    open: { es: 'Ver caso', en: 'View case' },
    close: { es: 'Cerrar', en: 'Close' },
  },
  certifications: {
    title: { es: 'Certificaciones', en: 'Certifications' },
    sub: {
      es: 'Formación certificada por Anthropic en Claude, MCP y sistemas de agentes. Cada credencial es verificable.',
      en: 'Anthropic-certified training in Claude, MCP and agent systems. Every credential is verifiable.',
    },
    verify: { es: 'Verificar credencial', en: 'Verify credential' },
    issued: { es: 'may. 2026', en: 'May 2026' },
    educationTitle: { es: 'Formación', en: 'Education' },
  },
  contact: {
    title: { es: 'Contacto', en: 'Contact' },
    text: {
      es: '¿Tienes un proyecto o un equipo donde encaje? Hablemos.',
      en: 'Got a project or a team where I would fit? Let’s talk.',
    },
    emailCta: { es: 'Escríbeme', en: 'Email me' },
    location: {
      es: 'Begues / Barcelona — híbrido o presencial',
      en: 'Begues / Barcelona — hybrid or on-site',
    },
  },
}
