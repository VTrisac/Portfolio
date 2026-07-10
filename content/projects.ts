import type { Localized } from './types'

export type Project = {
  id: string
  art: string
  company: string
  year: string
  title: Localized
  summary: Localized
  problem: Localized
  solution: Localized
  stack: string[]
  result: Localized
}

// Casos derivados de experiencia real (LinkedIn). Sin métricas inventadas.
export const projects: Project[] = [
  {
    id: 'weai-agentes',
    art: '/projects/weai.jpg',
    company: 'WeAi',
    year: '2026',
    title: {
      es: 'Sistemas de agentes de IA en producción',
      en: 'AI agent systems in production',
    },
    summary: {
      es: 'Automatización empresarial basada en agentes LLM, del diseño al despliegue.',
      en: 'Enterprise automation built on LLM agents, from design to deployment.',
    },
    problem: {
      es: 'Los procesos que requieren interpretar contexto —correo, documentos, conversaciones— quedan fuera del alcance de la automatización clásica basada en reglas.',
      en: 'Processes that require interpreting context —email, documents, conversations— fall outside the reach of classic rule-based automation.',
    },
    solution: {
      es: 'Sistemas basados en agentes LLM con orquestación, herramientas conectadas a los sistemas del cliente y guardarraíles para operar de forma fiable en producción.',
      en: 'LLM-agent-based systems with orchestration, tools wired into client systems, and guardrails to operate reliably in production.',
    },
    stack: ['Python', 'FastAPI', 'LLMs', 'Agentes', 'Cloud'],
    result: {
      es: 'Sistemas en producción para clientes de la compañía. (Rol actual: el detalle se ampliará a medida que los proyectos sean públicos.)',
      en: 'Systems in production for company clients. (Current role: details will grow as projects become public.)',
    },
  },
  {
    id: 'easo-automatizacion',
    art: '/projects/easo.jpg',
    company: 'EASO MAGNO',
    year: '2025',
    title: {
      es: 'Motor de automatización interna con IA',
      en: 'Internal AI automation engine',
    },
    summary: {
      es: 'Procesos internos automatizados combinando APIs, modelos ML y flujos n8n.',
      en: 'Internal processes automated by combining APIs, ML models and n8n flows.',
    },
    problem: {
      es: 'Procesos internos manuales y repetitivos que consumían tiempo del equipo y no escalaban con el negocio.',
      en: 'Manual, repetitive internal processes that drained team time and did not scale with the business.',
    },
    solution: {
      es: 'Soluciones de automatización basadas en IA: integración de APIs, modelos de machine learning y flujos automatizados en Python y FastAPI, con pipelines en cloud.',
      en: 'AI-based automation: API integrations, machine learning models and automated flows in Python and FastAPI, with cloud pipelines.',
    },
    stack: ['Python', 'FastAPI', 'OpenAI', 'n8n', 'Cloud'],
    result: {
      es: 'Servicios escalables desplegados que ejecutan procesos internos sin intervención manual.',
      en: 'Scalable services deployed, running internal processes without manual intervention.',
    },
  },
  {
    id: 'kauai-recomendacion',
    art: '/projects/kauai.jpg',
    company: 'kauai.es',
    year: '2025',
    title: {
      es: 'Recomendación y análisis con IA',
      en: 'AI recommendation and analysis',
    },
    summary: {
      es: 'Microservicios FastAPI + Vue.js con NLP y OpenAI integrados en la plataforma.',
      en: 'FastAPI microservices + Vue.js with NLP and OpenAI wired into the platform.',
    },
    problem: {
      es: 'La plataforma necesitaba recomendaciones inteligentes y análisis automatizado, sin frenar el desarrollo del producto.',
      en: 'The platform needed smart recommendations and automated analysis without slowing product development.',
    },
    solution: {
      es: 'Sistemas de recomendación y análisis mediante IA sobre una arquitectura de microservicios FastAPI, frontend en Vue.js e integración de modelos NLP y servicios OpenAI.',
      en: 'AI recommendation and analysis systems on a FastAPI microservices architecture, Vue.js frontend, and NLP models with OpenAI services integrated.',
    },
    stack: ['FastAPI', 'Vue.js', 'OpenAI', 'NLP', 'PostgreSQL'],
    result: {
      es: 'Recomendadores y automatización de tareas integrados en la plataforma en producción.',
      en: 'Recommenders and task automation integrated into the production platform.',
    },
  },
  {
    id: 'proaltus-wallet',
    art: '/projects/proaltus.jpg',
    company: 'Proaltus Capital Partners',
    year: '2024',
    title: {
      es: 'Wallet digital para gestión de capital',
      en: 'Digital wallet for capital management',
    },
    summary: {
      es: 'Wallet a medida con Django y Vue.js sobre microservicios con despliegue continuo.',
      en: 'Custom wallet with Django and Vue.js on microservices with continuous deployment.',
    },
    problem: {
      es: 'La firma necesitaba una wallet propia integrada con servicios financieros externos, con rendimiento fiable sobre datos sensibles.',
      en: 'The firm needed its own wallet integrated with external financial services, performing reliably over sensitive data.',
    },
    solution: {
      es: 'Wallet personalizada con Django y Vue.js: integración con APIs externas, optimización del rendimiento de base de datos y arquitectura de microservicios con despliegue continuo.',
      en: 'Custom wallet with Django and Vue.js: external API integrations, database performance tuning, and a microservices architecture with continuous deployment.',
    },
    stack: ['Django', 'Vue.js', 'PostgreSQL', 'Microservicios', 'CI/CD'],
    result: {
      es: 'Wallet operativa entregada al cliente con pipeline de despliegue continuo.',
      en: 'Working wallet delivered to the client with a continuous deployment pipeline.',
    },
  },
  {
    id: 'sole-erp',
    art: '/projects/sole.jpg',
    company: 'Solé Diesel',
    year: '2023',
    title: {
      es: 'ERP industrial a medida en Python',
      en: 'Custom industrial ERP in Python',
    },
    summary: {
      es: 'ERP interno completo escrito en Python puro para un fabricante de motores marinos.',
      en: 'Complete internal ERP written in pure Python for a marine engine manufacturer.',
    },
    problem: {
      es: 'Un fabricante industrial gestionaba inventarios, datos de producción y logística con procesos dispersos que no encajaban en un ERP genérico.',
      en: 'An industrial manufacturer managed inventory, production data and logistics with scattered processes that no generic ERP fit.',
    },
    solution: {
      es: 'Diseño y desarrollo de un ERP interno completo en Python, sin frameworks: gestión de datos industriales, inventarios y flujos logísticos adaptados a su operativa real.',
      en: 'Design and build of a complete internal ERP in pure Python, no frameworks: industrial data, inventory and logistics flows shaped to their real operations.',
    },
    stack: ['Python', 'SQL', 'Excel'],
    result: {
      es: 'ERP en uso por los equipos internos para la operativa diaria.',
      en: 'ERP in daily use by the internal teams.',
    },
  },
  {
    id: 'majestic-herramientas',
    art: '/projects/majestic.jpg',
    company: 'Majestic Hotel Group',
    year: '2022–2023',
    title: {
      es: 'Webs y herramientas de gestión hotelera',
      en: 'Hotel management websites and tools',
    },
    summary: {
      es: 'Webs corporativas y herramientas internas en Django y JavaScript para un grupo hotelero.',
      en: 'Corporate websites and internal tools in Django and JavaScript for a hotel group.',
    },
    problem: {
      es: 'El grupo necesitaba presencia web corporativa y herramientas internas mantenibles para la operativa hotelera diaria.',
      en: 'The group needed corporate web presence and maintainable internal tools for daily hotel operations.',
    },
    solution: {
      es: 'Creación de webs corporativas y herramientas internas en Django y JavaScript, con foco en usabilidad y facilidad de mantenimiento.',
      en: 'Corporate websites and internal tools built with Django and JavaScript, focused on usability and ease of maintenance.',
    },
    stack: ['Django', 'JavaScript', 'Python'],
    result: {
      es: 'Webs y herramientas entregadas y mantenidas durante un año de operación.',
      en: 'Websites and tools delivered and maintained through a year of operation.',
    },
  },
]
