'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import ProjectCard from '@/components/ProjectCard'
import ProjectModal from '@/components/ProjectModal'

const projects = [
  {
    title: 'Chatbot IA Empresarial',
    description:
      'Sistema de chatbot inteligente integrado con OpenAI GPT-4 para soporte al cliente 24/7. Incluye base de conocimiento personalizada, historial de conversaciones y panel de analytics en tiempo real.',
    detailedDescription:
      'Desarrollo completo de un sistema de chatbot empresarial utilizando GPT-4 de OpenAI. Implementé una arquitectura escalable con FastAPI para el backend, React para el frontend, y WebSocket para comunicación en tiempo real. El sistema incluye una base de conocimiento vectorial con embeddings, permitiendo respuestas contextuales precisas. También desarrollé un panel de analytics completo para monitorear conversaciones, métricas de satisfacción y patrones de uso.',
    tags: ['Python', 'FastAPI', 'OpenAI API', 'React', 'PostgreSQL', 'WebSocket'],
    image: '🤖',
    features: [
      'Integración con OpenAI GPT-4 y embeddings para base de conocimiento',
      'WebSocket para respuestas en tiempo real',
      'Panel de analytics con métricas de conversación',
      'Sistema de feedback y mejora continua',
      'Arquitectura escalable con caché Redis',
      'API REST documentada con Swagger'
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
      'docker-compose.yml'
    ]
  },
  {
    title: 'Plataforma de Automatización n8n',
    description:
      'Sistema completo de automatización empresarial con flujos n8n personalizados. Integraciones con Slack, Google Sheets, CRM y generación automática de reportes. Reduce 10+ horas semanales de trabajo manual.',
    detailedDescription:
      'Implementación de una plataforma de automatización robusta usando n8n como motor de workflows. Desarrollé un sistema de orquestación que conecta múltiples servicios empresariales: Slack para notificaciones, Google Sheets para reporting, varios CRMs para sincronización de datos, y generación automática de reportes PDF. El backend en Django gestiona usuarios, permisos y monitoreo de workflows. La solución redujo significativamente el tiempo dedicado a tareas manuales repetitivas.',
    tags: ['n8n', 'Python', 'Django', 'PostgreSQL', 'REST APIs', 'Webhooks'],
    image: '⚡',
    features: [
      'Flujos n8n personalizados para automatización empresarial',
      'Integraciones con Slack, Google Sheets, y múltiples CRMs',
      'Sistema de webhooks para triggers automáticos',
      'Generación automática de reportes en PDF',
      'Panel de monitoreo de workflows',
      'Sistema de notificaciones multi-canal'
    ],
    structure: [
      'n8n/',
      '  workflows/',
      '    crm_sync.json',
      '    report_generator.json',
      '  credentials/',
      'backend/',
      '  automation/',
      '    models/',
      '      workflow.py',
      '      execution.py',
      '    api/',
      '      views/',
      '        workflow_views.py',
      '    services/',
      '      n8n_service.py',
      '      notification_service.py',
      '  manage.py',
      'docker-compose.yml'
    ]
  },
  {
    title: 'API REST Multi-tenant',
    description:
      'API robusta para SaaS con arquitectura multi-tenant, autenticación JWT, rate limiting y documentación automática con Swagger. Escalable a miles de usuarios concurrentes.',
    detailedDescription:
      'Diseño e implementación de una API REST escalable con Django REST Framework, preparada para aplicaciones SaaS. Arquitectura multi-tenant con separación de datos por organización, autenticación JWT segura, rate limiting por usuario/organización, y documentación automática con Swagger/OpenAPI. Incluye sistema de permisos granular, caché con Redis, y optimizaciones de queries para soportar miles de usuarios concurrentes.',
    tags: ['Django', 'DRF', 'PostgreSQL', 'Redis', 'Docker', 'JWT'],
    image: '🔌',
    features: [
      'Arquitectura multi-tenant con aislamiento de datos',
      'Autenticación JWT con refresh tokens',
      'Rate limiting por usuario y organización',
      'Documentación automática con Swagger/OpenAPI',
      'Sistema de permisos granular basado en roles',
      'Caché Redis para optimización de performance',
      'Logging y monitoreo con Sentry',
      'Containerizado con Docker y Docker Compose'
    ],
    structure: [
      'api/',
      '  apps/',
      '    tenants/',
      '      models.py',
      '      middleware.py',
      '    users/',
      '      models.py',
      '      serializers.py',
      '      views.py',
      '    core/',
      '      permissions.py',
      '      throttling.py',
      '  config/',
      '    settings/',
      '      base.py',
      '      production.py',
      '  requirements/',
      '    base.txt',
      '    production.txt',
      'docker-compose.yml',
      'Dockerfile',
      '.env.example'
    ]
  },
  {
    title: 'Dashboard Analytics en Tiempo Real',
    description:
      'Panel de control interactivo con métricas empresariales en tiempo real. Gráficos personalizables, exportación de datos y sistema de alertas. Backend en Django, frontend en Next.js.',
    detailedDescription:
      'Desarrollo full-stack de un dashboard analytics moderno con actualizaciones en tiempo real. Backend en Django con WebSocket para streaming de datos, frontend en Next.js con gráficos interactivos usando Chart.js. Los usuarios pueden personalizar dashboards, configurar alertas automáticas basadas en métricas, y exportar datos en múltiples formatos. Implementé optimizaciones para manejar grandes volúmenes de datos y agregaciones complejas.',
    tags: ['Next.js', 'Django', 'Chart.js', 'TailwindCSS', 'WebSocket'],
    image: '📊',
    features: [
      'Métricas en tiempo real con WebSocket',
      'Gráficos interactivos y personalizables con Chart.js',
      'Sistema de alertas configurables',
      'Exportación de datos en CSV, PDF y Excel',
      'Dashboards personalizables por usuario',
      'Agregaciones complejas optimizadas',
      'Diseño responsive con TailwindCSS'
    ],
    structure: [
      'frontend/',
      '  app/',
      '    dashboard/',
      '      page.tsx',
      '    components/',
      '      charts/',
      '        LineChart.tsx',
      '        BarChart.tsx',
      '  hooks/',
      '    useWebSocket.ts',
      '    useChartData.ts',
      'backend/',
      '  analytics/',
      '    models/',
      '      metric.py',
      '    consumers/',
      '      metrics_consumer.py',
      '    services/',
      '      aggregation_service.py',
      '  manage.py',
      'docker-compose.yml'
    ]
  },
  {
    title: 'Sistema de Scraping Inteligente',
    description:
      'Herramienta de extracción automatizada de datos web con sistema de colas, manejo de errores robusto y almacenamiento eficiente. Procesa miles de páginas diarias con rate limiting inteligente.',
    detailedDescription:
      'Sistema completo de web scraping empresarial construido con Scrapy y Celery. Implementé un sistema de colas distribuido que permite procesar miles de páginas diarias con rate limiting inteligente para respetar los servidores objetivo. Incluye manejo robusto de errores con reintentos automáticos, almacenamiento eficiente en MongoDB, detección de cambios en la estructura HTML, y alertas cuando falla el scraping. Todo containerizado y listo para escalar horizontalmente.',
    tags: ['Python', 'Scrapy', 'Celery', 'Redis', 'MongoDB', 'Docker'],
    image: '🕷️',
    features: [
      'Scrapy con spiders personalizables',
      'Sistema de colas distribuido con Celery',
      'Rate limiting inteligente y respetuoso',
      'Manejo robusto de errores con reintentos',
      'Detección de cambios en estructura HTML',
      'Almacenamiento optimizado en MongoDB',
      'Sistema de alertas por email/Slack',
      'Escalable horizontalmente con Docker'
    ],
    structure: [
      'scraper/',
      '  spiders/',
      '    base_spider.py',
      '    product_spider.py',
      '  items/',
      '    product.py',
      '  pipelines/',
      '    mongodb_pipeline.py',
      '    validation_pipeline.py',
      '  settings.py',
      'tasks/',
      '  scraping_tasks.py',
      '  celeryconfig.py',
      'monitoring/',
      '  alerts.py',
      'requirements.txt',
      'docker-compose.yml',
      'Dockerfile'
    ]
  },
  {
    title: 'Plataforma E-Learning',
    description:
      'Aplicación web full-stack para cursos online con sistema de pagos Stripe, gestión de usuarios, progreso de cursos y certificados. Diseño responsive y optimizado para mobile.',
    detailedDescription:
      'Plataforma completa de e-learning desarrollada con React y Django. Sistema de gestión de cursos con contenido multimedia (videos, documentos, quizzes), tracking de progreso del estudiante, generación automática de certificados PDF, y pasarela de pagos integrada con Stripe. Implementé un sistema de roles (estudiante, instructor, admin), dashboard para instructores con analytics, y diseño responsive optimizado para experiencia mobile-first.',
    tags: ['React', 'Django', 'Stripe', 'PostgreSQL', 'TailwindCSS'],
    image: '📚',
    features: [
      'Gestión completa de cursos y lecciones',
      'Reproductor de video con marcadores de progreso',
      'Sistema de quizzes y evaluaciones',
      'Generación automática de certificados PDF',
      'Integración con Stripe para pagos',
      'Dashboard de instructor con analytics',
      'Sistema de roles y permisos',
      'Diseño responsive mobile-first',
      'Notificaciones por email'
    ],
    structure: [
      'frontend/',
      '  src/',
      '    pages/',
      '      Course/',
      '        VideoPlayer.jsx',
      '        Quiz.jsx',
      '      Dashboard/',
      '        StudentDashboard.jsx',
      '        InstructorDashboard.jsx',
      '    components/',
      '      CourseCard/',
      '      ProgressBar/',
      'backend/',
      '  courses/',
      '    models/',
      '      course.py',
      '      enrollment.py',
      '    views/',
      '      course_views.py',
      '    services/',
      '      stripe_service.py',
      '      certificate_service.py',
      '  manage.py',
      'docker-compose.yml'
    ]
  },
]

const skills = [
  {
    title: 'Desarrollo Web Full-Stack',
    description: 'Aplicaciones web completas con Django/FastAPI en backend y React/Next.js en frontend. Experiencia en arquitectura escalable y código mantenible.',
    icon: '💻',
  },
  {
    title: 'Chatbots con IA',
    description: 'Desarrollo de asistentes virtuales con GPT-4, Claude y modelos personalizados. Integración de embeddings y bases de conocimiento vectoriales.',
    icon: '🤖',
  },
  {
    title: 'Automatización Empresarial',
    description: 'Implementación de workflows con n8n, integraciones entre sistemas y automatización de procesos. Reducción de tareas manuales repetitivas.',
    icon: '⚡',
  },
  {
    title: 'APIs & Integraciones',
    description: 'Diseño de APIs REST robustas, webhooks, y arquitecturas multi-tenant. Experiencia con autenticación JWT, rate limiting y documentación OpenAPI.',
    icon: '🔌',
  },
  {
    title: 'Scraping & Data Engineering',
    description: 'Extracción y procesamiento de datos web con Scrapy y Celery. Pipelines de datos automatizados y almacenamiento optimizado.',
    icon: '📊',
  },
  {
    title: 'DevOps & Deployment',
    description: 'Containerización con Docker, CI/CD, y deployment en cloud. Experiencia con PostgreSQL, Redis, MongoDB y servicios AWS.',
    icon: '🎯',
  },
]

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container-custom text-center"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Proyectos <span className="text-gradient">Destacados</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Muestra de mi experiencia técnica y capacidad para entregar soluciones robustas
          </p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-dark-light">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
                index={index}
                onClick={() => handleProjectClick(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Stack <span className="text-gradient">Técnico</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Tecnologías y áreas en las que tengo experiencia comprobada
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass p-8 rounded-2xl hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
                <p className="text-gray-400 leading-relaxed">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark-light">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container-custom text-center"
        >
          <div className="glass rounded-3xl p-12 md:p-16 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Buscas un desarrollador Full-Stack?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Estoy abierto a nuevas oportunidades laborales. Si tu empresa busca un desarrollador con experiencia en Python, Django, React y automatización con IA, conversemos.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-block"
            >
              Ver información de contacto
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          project={selectedProject}
        />
      )}
    </div>
  )
}
