'use client'

import { motion } from 'framer-motion'
import {
  Code2,
  Layers,
  Database,
  Server,
  Zap,
  Briefcase,
  Award,
  Workflow,
} from 'lucide-react'
import Image from 'next/image'

const skillCategories = [
  {
    icon: Code2,
    category: 'Lenguajes',
    skills: ['Python', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SQL', 'Bash'],
  },
  {
    icon: Layers,
    category: 'Frameworks & Libraries',
    skills: ['Django', 'React', 'Next.js', 'FastAPI', 'TailwindCSS', 'Node.js', 'Express'],
  },
  {
    icon: Database,
    category: 'Bases de Datos',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQLite', 'Supabase'],
  },
  {
    icon: Server,
    category: 'DevOps & Herramientas',
    skills: ['Docker', 'Git', 'GitHub Actions', 'Netlify', 'Vercel', 'Railway', 'Linux', 'Nginx'],
  },
  {
    icon: Zap,
    category: 'IA & Automatización',
    skills: ['n8n', 'OpenAI API', 'LangChain', 'Chatbots', 'Web Scraping', 'APIs REST', 'Webhooks'],
  },
  {
    icon: Workflow,
    category: 'Otras Tecnologías',
    skills: ['REST APIs', 'GraphQL', 'WebSockets', 'Stripe', 'OAuth', 'JWT', 'Pytest'],
  },
]

const timeline = [
  {
    icon: Zap,
    title: 'DevOps / Full Stack Developer',
    company: 'EASO MAGNO',
    period: 'Actualidad',
    description:
      'Automatización de procesos empresariales mediante IA y microservicios. Diseño e implementación de flujos inteligentes usando Python, FastAPI, n8n y OpenAI. Integración con servicios cloud (Azure, GCP) y despliegues CI/CD con Docker y GitHub Actions.',
  },
  {
    icon: Briefcase,
    title: 'AI Developer / Full Stack Engineer',
    company: 'Kauai',
    period: 'Proyecto',
    description:
      'Desarrollo de soluciones basadas en IA y automatización de tareas internas. Implementación de APIs inteligentes con FastAPI y Python, integrando modelos de IA y análisis de datos. Desarrollo frontend en Vue.js y despliegue en entornos Docker / GCP.',
  },
  {
    icon: Award,
    title: 'Full Stack Developer',
    company: 'Proaltus Capital Partners',
    period: 'Proyecto',
    description:
      'Diseño y desarrollo de una wallet personalizada para gestión financiera. Backend en Django REST Framework, frontend con Vue.js, y autenticación segura con JWT. Integración con APIs externas y base de datos PostgreSQL, despliegue en entorno Dockerizado.',
  },
  {
    icon: Server,
    title: 'Software Engineer / Backend Developer',
    company: 'Solé Diesel',
    period: 'Proyecto',
    description:
      'Diseño y desarrollo de un ERP interno completo en Python, sin frameworks, optimizando procesos de gestión y producción. Gestión de datos industriales, control de inventarios y módulos de trazabilidad. Automatización de informes y procesos internos.',
  },
  {
    icon: Code2,
    title: 'Web Developer',
    company: 'Majestic Hotel Group',
    period: 'Proyecto',
    description:
      'Desarrollo de webs corporativas y herramientas internas de gestión hotelera. Implementación de paneles administrativos en Django y JavaScript. Optimización de rendimiento, mantenimiento y experiencia de usuario.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function AboutPage() {
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
            Sobre <span className="text-gradient">Mí</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            AI Product Developer especializado en Python. Desarrollo backend y frontend con soluciones de inteligencia artificial.
          </p>
        </motion.div>
      </section>

      {/* Profile Section */}
      <section className="section-padding bg-dark-light">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-64 h-64 mx-auto md:w-80 md:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark rounded-full blur-2xl opacity-30 animate-pulse" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30">
                  <img
                    src="/profile.jpg"
                    alt="Victor Trisac"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 40%' }}
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                AI Product Developer & Full-Stack Engineer
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Soy <strong className="text-white">AI Product Developer</strong> y programador Full-Stack especializado en <strong className="text-white">Python</strong>.
                Combino desarrollo backend y frontend con soluciones de <strong className="text-white">inteligencia artificial</strong> para
                crear sistemas escalables, eficientes e innovadores.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Mi expertise incluye <strong className="text-white">automatización empresarial con IA</strong> usando n8n,
                desarrollo de <strong className="text-white">APIs inteligentes con FastAPI</strong>,
                y despliegues <strong className="text-white">CI/CD con Docker y GitHub Actions</strong> en entornos cloud (Azure, GCP).
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Stack principal: Django/FastAPI + PostgreSQL en backend, Vue.js/React en frontend.
                Integración con modelos de IA (OpenAI), microservicios, y arquitecturas escalables.
                De la idea al deploy, con enfoque en soluciones que generan valor real.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm">
                  🤖 IA & Automatización
                </span>
                <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm">
                  ☁️ Cloud & DevOps
                </span>
                <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm">
                  🚀 Python Expert
                </span>
              </div>
            </motion.div>
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
              Stack <span className="text-gradient">Tecnológico</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Herramientas con las que construyo soluciones reales
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass p-8 rounded-2xl hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group"
              >
                <div className="mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                  <category.icon size={40} />
                </div>
                <h3 className="text-xl font-bold mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/5 border border-primary/10 rounded-lg text-gray-400 text-sm hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-dark-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Mi <span className="text-gradient">Experiencia</span>
            </h2>
            <p className="text-gray-400 text-lg">
              De dónde vengo y qué he construido
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                {/* Timeline line */}
                {index !== timeline.length - 1 && (
                  <div className="absolute left-[15px] top-12 w-0.5 h-full bg-gradient-to-b from-primary to-transparent" />
                )}

                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/50">
                  <item.icon size={16} className="text-dark" />
                </div>

                {/* Content */}
                <div className="glass p-6 rounded-2xl ml-6 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <span className="text-primary text-sm font-medium">{item.period}</span>
                  </div>
                  <p className="text-gray-400 font-medium mb-2">{item.company}</p>
                  <p className="text-gray-500">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
