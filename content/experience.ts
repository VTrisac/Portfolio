import type { Localized } from './types'

export type Role = {
  company: string
  role: Localized
  start: string // 'YYYY.MM' — se muestra en mono
  end: string | null // null = actualidad
  mode: Localized
  stack: string[]
  highlights: Localized<string[]>
}

export const experience: Role[] = [
  {
    company: 'WeAi',
    role: { es: 'Ingeniero de IA Senior', en: 'Senior AI Engineer' },
    start: '2026.02',
    end: null,
    mode: { es: 'Barcelona · híbrido', en: 'Barcelona · hybrid' },
    stack: ['Python', 'FastAPI', 'LLMs', 'Agentes', 'Cloud'],
    highlights: {
      // ponytail: sin descripción en LinkedIn — borrador conservador, Victor debe validar
      es: [
        'Diseño y desarrollo de sistemas basados en agentes de IA y automatización inteligente.',
        'Puesta en producción de soluciones LLM con integraciones empresariales.',
      ],
      en: [
        'Design and development of AI-agent-based systems and intelligent automation.',
        'Shipping LLM solutions with enterprise integrations to production.',
      ],
    },
  },
  {
    company: 'EASO MAGNO',
    role: { es: 'Programador full stack', en: 'Full stack developer' },
    start: '2025.07',
    end: '2025.11',
    mode: { es: 'Jornada completa', en: 'Full time' },
    stack: ['Python', 'FastAPI', 'OpenAI', 'n8n', 'Cloud'],
    highlights: {
      es: [
        'Soluciones de automatización basadas en IA para optimizar procesos internos.',
        'Integración de APIs, modelos de machine learning y flujos automatizados.',
        'Pipelines en entornos cloud y despliegue de servicios escalables.',
      ],
      en: [
        'AI-based automation solutions to streamline internal processes.',
        'Integration of APIs, machine learning models and automated flows.',
        'Cloud pipelines and deployment of scalable services.',
      ],
    },
  },
  {
    company: 'Freelance',
    role: { es: 'Programador full stack', en: 'Full stack developer' },
    start: '2025.05',
    end: '2025.07',
    mode: { es: 'Remoto', en: 'Remote' },
    stack: ['Python', 'FastAPI', 'Django', 'DevOps', 'CI/CD'],
    highlights: {
      es: ['Proyectos a medida para clientes: APIs, automatización y despliegue.'],
      en: ['Custom client projects: APIs, automation and deployment.'],
    },
  },
  {
    company: 'kauai.es',
    role: { es: 'Programador full stack', en: 'Full stack developer' },
    start: '2025.02',
    end: '2025.05',
    mode: { es: 'Barcelona · híbrido', en: 'Barcelona · hybrid' },
    stack: ['FastAPI', 'Vue.js', 'OpenAI', 'NLP', 'PostgreSQL'],
    highlights: {
      es: [
        'Sistemas inteligentes de recomendación y análisis mediante IA.',
        'Microservicios con FastAPI y frontend en Vue.js.',
        'Integración de modelos NLP y servicios OpenAI para automatización de tareas.',
      ],
      en: [
        'Intelligent recommendation and analysis systems powered by AI.',
        'FastAPI microservices with a Vue.js frontend.',
        'NLP models and OpenAI services integrated for task automation.',
      ],
    },
  },
  {
    company: 'Freelance',
    role: { es: 'Programador full stack', en: 'Full stack developer' },
    start: '2024.11',
    end: '2025.01',
    mode: { es: 'Remoto', en: 'Remote' },
    stack: ['Python', 'Django'],
    highlights: {
      es: ['Desarrollo web a medida para clientes.'],
      en: ['Custom web development for clients.'],
    },
  },
  {
    company: 'Proaltus Capital Partners',
    role: { es: 'Full-stack developer', en: 'Full-stack developer' },
    start: '2024.07',
    end: '2024.11',
    mode: { es: 'Remoto', en: 'Remote' },
    stack: ['Django', 'Vue.js', 'PostgreSQL', 'Microservicios', 'CI/CD'],
    highlights: {
      es: [
        'Wallet personalizada con Django y Vue.js.',
        'Integración con APIs externas y optimización del rendimiento de base de datos.',
        'Arquitectura basada en microservicios y despliegue continuo.',
      ],
      en: [
        'Custom wallet built with Django and Vue.js.',
        'External API integrations and database performance tuning.',
        'Microservices architecture and continuous deployment.',
      ],
    },
  },
  {
    company: 'Solé Diesel',
    role: { es: 'Programador full stack', en: 'Full stack developer' },
    start: '2023.05',
    end: '2023.09',
    mode: { es: 'Presencial', en: 'On-site' },
    stack: ['Python', 'SQL', 'Excel'],
    highlights: {
      es: [
        'Diseño y desarrollo de un ERP interno completo en Python, sin frameworks.',
        'Gestión de datos industriales, inventarios y flujos logísticos.',
      ],
      en: [
        'Design and build of a complete internal ERP in pure Python, no frameworks.',
        'Industrial data, inventory and logistics flow management.',
      ],
    },
  },
  {
    company: 'Majestic Hotel Group',
    role: { es: 'Desarrollador web', en: 'Web developer' },
    start: '2022.06',
    end: '2023.05',
    mode: { es: 'Presencial', en: 'On-site' },
    stack: ['Django', 'JavaScript', 'Python'],
    highlights: {
      es: [
        'Webs corporativas y herramientas internas para la gestión hotelera.',
        'Desarrollo en Django y JavaScript con foco en usabilidad y mantenimiento.',
      ],
      en: [
        'Corporate websites and internal tools for hotel management.',
        'Django and JavaScript development focused on usability and maintenance.',
      ],
    },
  },
]
