'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import { Bot, Zap, Plug, BarChart3, Bug, BookOpen } from 'lucide-react'

const projects = [
  {
    title: 'Asistente Virtual Empresarial con IA',
    description:
      'Problema: Equipos de soporte saturados con preguntas repetitivas 24/7. Solución: Sistema de chatbot inteligente con GPT-4 que aprende del negocio y responde con precisión humana. Reducción del 70% en tickets de soporte.',
    detailedDescription:
      '🎯 EL DESAFÍO\n\nLos equipos de soporte pasaban 60% de su tiempo respondiendo las mismas preguntas. Sin cobertura nocturna, clientes esperaban hasta 12 horas.\n\n💡 LA SOLUCIÓN\n\nDesarrollé un sistema completo de chatbot empresarial con OpenAI GPT-4:\n• Backend escalable con FastAPI y arquitectura event-driven\n• Base de conocimiento personalizada con embeddings vectoriales\n• WebSocket para respuestas en tiempo real (latencia <1s)\n• Panel analytics para monitoreo y mejora continua\n\n🚀 EL IMPACTO\n\n• 70% reducción en tickets de soporte nivel 1\n• Disponibilidad 24/7 sin coste adicional de personal\n• 4.8/5 satisfacción de clientes en respuestas automáticas\n• ROI positivo en 3 meses\n\n👨‍💻 MI ROL\n\nArquitectura completa, desarrollo backend/frontend, integración OpenAI, deploy en producción con Docker/Azure.',
    tags: ['Python', 'FastAPI', 'OpenAI API', 'React', 'PostgreSQL', 'WebSocket'],
    icon: Bot,
    features: [
      'Integración con OpenAI GPT-4 y embeddings',
      'WebSocket para respuestas en tiempo real',
      'Panel de analytics con métricas',
      'Sistema de feedback y mejora continua',
    ],
    structure: [
      'backend/',
      '  app/',
      '    api/',
      '      endpoints/',
      '        chat.py',
      '        analytics.py',
      '    core/',
      '      config.py',
      '      security.py',
      '    services/',
      '      openai_service.py',
      '      vector_store.py',
      '    models/',
      '      conversation.py',
      '  requirements.txt',
      '  Dockerfile',
      'frontend/',
      '  src/',
      '    components/',
      '      Chat/',
      '      Analytics/',
      '    hooks/',
      '      useWebSocket.ts',
      '  package.json',
      'docker-compose.yml',
    ],
  },
  {
    title: 'Motor de Automatización Empresarial',
    description:
      'Problema: Procesos manuales repetitivos consumían 15h/semana por empleado. Solución: Plataforma de automatización con n8n que conecta Slack, CRM, Google Sheets y genera reportes automáticos. 80% de tiempo ahorrado.',
    detailedDescription:
      '🎯 EL DESAFÍO\n\nEquipos perdiendo días enteros en copiar datos entre sistemas, generar reportes manualmente, enviar notificaciones repetitivas.\n\n💡 LA SOLUCIÓN\n\nSistema robusto de orquestación de procesos empresariales:\n• Workflows n8n personalizados para cada caso de uso\n• Integración bidireccional con Slack, Google Sheets, CRMs\n• Sistema de webhooks para eventos en tiempo real\n• Generación automática de reportes complejos\n\n🚀 EL IMPACTO\n\n• 80% reducción en tiempo de tareas administrativas\n• Cero errores humanos en transferencia de datos\n• 15h/semana ahorradas por empleado\n• Procesos que antes tomaban días, ahora en minutos\n\n👨‍💻 MI ROL\n\nDiseño de arquitectura, desarrollo de workflows, integración de APIs, backend Django para gestión y monitoreo.',
    tags: ['n8n', 'Python', 'Django', 'PostgreSQL', 'REST APIs', 'Webhooks'],
    icon: Zap,
    features: [
      'Flujos n8n personalizados',
      'Integraciones con Slack y Google Sheets',
      'Sistema de webhooks',
      'Generación automática de reportes',
    ],
    structure: [
      'n8n/',
      '  workflows/',
      '    crm_sync.json',
      '    report_generator.json',
      '    slack_notifications.json',
      '  credentials/',
      'backend/',
      '  automation/',
      '    models/',
      '      workflow.py',
      '      execution.py',
      '    api/',
      '      webhooks.py',
      '      triggers.py',
      '    services/',
      '      n8n_client.py',
      '      report_service.py',
      '  settings.py',
      '  requirements.txt',
      'docker-compose.yml',
      'README.md',
    ],
  },
  {
    title: 'API SaaS Multi-Tenant de Alto Rendimiento',
    description:
      'Problema: SaaS necesitaba escalar a miles de clientes sin comprometer seguridad. Solución: API robusta con arquitectura multi-tenant, autenticación JWT, rate limiting inteligente. Escala a 10K requests/seg con latencia <50ms.',
    detailedDescription:
      '🎯 EL DESAFÍO\n\nUn SaaS en crecimiento enfrentaba límites técnicos: arquitectura monolítica, problemas de aislamiento entre clientes, latencias crecientes, seguridad frágil.\n\n💡 LA SOLUCIÓN\n\nAPI REST enterprise-grade con FastAPI/Django:\n• Arquitectura multi-tenant con aislamiento de datos por tenant\n• Sistema de autenticación JWT + OAuth2 + refresh tokens\n• Rate limiting adaptativo por plan de cliente\n• Caché distribuido con Redis (hit rate >90%)\n• Documentación automática OpenAPI/Swagger\n\n🚀 EL IMPACTO\n\n• Escalado de 500 a 10,000 requests/seg\n• Latencia promedio <50ms (p95 <120ms)\n• Zero downtime en últimos 6 meses\n• Onboarding de nuevos clientes en <5 min\n\n👨‍💻 MI ROL\n\nArquitectura completa, desarrollo de middlewares custom, implementación de caché y seguridad, optimización de queries.',
    tags: ['Django', 'DRF', 'PostgreSQL', 'Redis', 'JWT', 'Swagger'],
    icon: Plug,
    features: [
      'Arquitectura multi-tenant',
      'Autenticación JWT y OAuth2',
      'Rate limiting y throttling',
      'Documentación automática con Swagger',
    ],
    structure: [
      'api/',
      '  app/',
      '    models/',
      '      tenant.py',
      '      user.py',
      '    api/',
      '      v1/',
      '        auth.py',
      '        users.py',
      '        tenants.py',
      '    core/',
      '      security.py',
      '      middleware.py',
      '      rate_limit.py',
      '    schemas/',
      '      auth.py',
      '      user.py',
      '  main.py',
      '  requirements.txt',
      'tests/',
      '  test_auth.py',
      '  test_tenants.py',
      'docker-compose.yml',
    ],
  },
  {
    title: 'Dashboard Analytics con Updates Live',
    description:
      'Problema: Decisiones basadas en datos obsoletos (actualizados cada 24h). Solución: Dashboard interactivo con visualizaciones D3.js y WebSocket para updates en tiempo real. Decisiones en segundos, no en días.',
    detailedDescription:
      '🎯 EL DESAFÍO\n\nLos equipos tomaban decisiones con datos de hace 24h. Dashboards lentos, visualizaciones estáticas, frustración generalizada.\n\n💡 LA SOLUCIÓN\n\nDashboard analytics moderno con updates en vivo:\n• Visualizaciones interactivas custom con D3.js\n• Backend FastAPI + WebSocket para streaming de datos\n• Procesamiento eficiente con pipeline de agregación\n• Exportación a PDF/Excel con diseño profesional\n\n🚀 EL IMPACTO\n\n• Datos actualizados cada segundo en lugar de cada 24h\n• 90% reducción en tiempo de análisis\n• Detección instantánea de anomalías\n• Aumento del 40% en eficiencia de toma de decisiones\n\n👨‍💻 MI ROL\n\nDiseño UX del dashboard, desarrollo frontend React, backend de procesamiento, implementación WebSocket.',
    tags: ['React', 'D3.js', 'FastAPI', 'WebSocket', 'PostgreSQL', 'Redis'],
    icon: BarChart3,
    features: [
      'Visualizaciones interactivas con D3.js',
      'Updates en tiempo real con WebSocket',
      'Procesamiento de datos eficiente',
      'Exportación a PDF/Excel',
    ],
    structure: [
      'frontend/',
      '  src/',
      '    components/',
      '      Charts/',
      '        LineChart.tsx',
      '        BarChart.tsx',
      '      Dashboard/',
      '    hooks/',
      '      useWebSocket.ts',
      '      useChartData.ts',
      '  package.json',
      'backend/',
      '  app/',
      '    api/',
      '      websocket.py',
      '      analytics.py',
      '    services/',
      '      data_processor.py',
      '  main.py',
      '  requirements.txt',
    ],
  },
  {
    title: 'Framework de Testing y CI/CD Enterprise',
    description:
      'Problema: Bugs en producción costaban tiempo y reputación. Solución: Framework completo de testing automatizado (unit/integration/E2E) con CI/CD. Cobertura >90%, bugs en producción reducidos 85%.',
    detailedDescription:
      '🎯 EL DESAFÍO\n\nBugs llegando a producción cada semana. Tests manuales inconsistentes. Deploy cada 2 semanas por miedo a romper cosas. Clientes frustrados.\n\n💡 LA SOLUCIÓN\n\nSistema robusto de testing y continuous deployment:\n• Suite completa: tests unitarios, integración, E2E (Selenium)\n• Cobertura de código >90% con coverage reporting\n• CI/CD con GitHub Actions (test → build → deploy)\n• Dockerizado para reproducibilidad perfecta\n\n🚀 EL IMPACTO\n\n• 85% reducción de bugs en producción\n• Deploy continuo: de 2 semanas a múltiples veces al día\n• Confianza total en refactoring\n• Detección de regresiones en <5 minutos\n\n👨‍💻 MI ROL\n\nArquitectura de testing, implementación de suites completas, configuración CI/CD, evangelización de cultura de testing en el equipo.',
    tags: ['Pytest', 'Selenium', 'GitHub Actions', 'Docker', 'Coverage'],
    icon: Bug,
    features: [
      'Tests unitarios y de integración',
      'Tests E2E con Selenium',
      'Cobertura de código >90%',
      'CI/CD con GitHub Actions',
    ],
    structure: [
      'tests/',
      '  unit/',
      '    test_models.py',
      '    test_services.py',
      '  integration/',
      '    test_api.py',
      '    test_db.py',
      '  e2e/',
      '    test_flows.py',
      '  conftest.py',
      '.github/',
      '  workflows/',
      '    ci.yml',
      '    deploy.yml',
      'pytest.ini',
      'coverage.ini',
      'docker-compose.test.yml',
    ],
  },
  {
    title: 'Portal de Documentación con Búsqueda Inteligente',
    description:
      'Problema: Developers perdiendo horas buscando información en docs desactualizadas. Solución: Plataforma de documentación con búsqueda avanzada, ejemplos ejecutables, versionado. Developer Experience transformada.',
    detailedDescription:
      '🎯 EL DESAFÍO\n\nDocumentación técnica fragmentada, desactualizada, imposible de navegar. Developers perdiendo horas buscando APIs, ejemplos obsoletos, frustración.\n\n💡 LA SOLUCIÓN\n\nPortal moderno de documentación técnica:\n• Next.js + MDX para contenido dinámico e interactivo\n• Búsqueda avanzada con Algolia (resultados instantáneos)\n• Code playground integrado (ejemplos ejecutables)\n• Versionado completo de documentación por release\n\n🚀 EL IMPACTO\n\n• 70% reducción en tiempo de búsqueda\n• 90% de developers encuentran lo que buscan en <1 minuto\n• Ejemplos de código siempre actualizados y testeados\n• Feedback loop: usuarios sugieren mejoras en vivo\n\n👨‍💻 MI ROL\n\nArquitectura de contenido, desarrollo frontend Next.js, integración Algolia, sistema de versionado, workflow de actualización.',
    tags: ['Next.js', 'MDX', 'TypeScript', 'Algolia', 'Vercel'],
    icon: BookOpen,
    features: [
      'Búsqueda avanzada con Algolia',
      'Ejemplos de código interactivos',
      'Versionado de documentación',
      'Deploy automático con Vercel',
    ],
    structure: [
      'docs/',
      '  pages/',
      '    getting-started.mdx',
      '    api-reference.mdx',
      '  components/',
      '    CodeBlock.tsx',
      '    SearchBar.tsx',
      '  versions/',
      '    v1/',
      '    v2/',
      'next.config.js',
      'package.json',
      'vercel.json',
    ],
  },
]

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <section id="projects" className="min-h-screen section-padding">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 relative"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-6 text-light-primary">
            Proyectos
          </h1>
          <p className="text-xl text-light-secondary max-w-3xl mx-auto">
            Soluciones reales que generan impacto medible
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              index={index}
              onClick={() => setSelectedProject(index)}
            />
          ))}
        </div>

        {/* Project Modal */}
        <ProjectModal
          isOpen={selectedProject !== null}
          project={selectedProject !== null ? projects[selectedProject] : projects[0]}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  )
}
