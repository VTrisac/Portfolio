'use client'

import { motion } from 'framer-motion'
import {
  Code2,
  Layers,
  Database,
  Server,
  Zap,
  Briefcase,
  Bot,
  Cloud,
  Rocket,
} from 'lucide-react'

const skillCategories = [
  {
    icon: Code2,
    category: 'Lenguajes',
    skills: ['Python', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SQL', 'Bash'],
  },
  {
    icon: Layers,
    category: 'Frontend',
    skills: ['React', 'Next.js', 'Vue.js', 'TailwindCSS', 'Framer Motion'],
  },
  {
    icon: Database,
    category: 'Backend & DB',
    skills: ['Django', 'FastAPI', 'PostgreSQL', 'Redis', 'MongoDB'],
  },
  {
    icon: Server,
    category: 'DevOps & Cloud',
    skills: ['Docker', 'GitHub Actions', 'Azure', 'GCP', 'Linux'],
  },
  {
    icon: Zap,
    category: 'IA & Automatización',
    skills: ['OpenAI API', 'LangChain', 'n8n', 'Selenium', 'Web Scraping'],
  },
  {
    icon: Briefcase,
    category: 'Tools',
    skills: ['Git', 'VS Code', 'Postman', 'Figma', 'Jira'],
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

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen section-padding">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container-custom text-center mb-24 relative z-10"
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-6 text-light-primary">
          Hola, soy Victor
        </h1>
        <p className="text-xl text-light-secondary max-w-3xl mx-auto">
          AI Product Developer que convierte desafíos técnicos en soluciones escalables
        </p>
      </motion.div>

      {/* Profile Section */}
      <div className="container-custom mb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-64 h-64 mx-auto md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-2xl opacity-30 animate-pulse" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30">
                <img
                  src="/profile.jpg"
                  alt="Victor Trisac"
                  className="w-full h-full object-cover"
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
            <p className="text-light-secondary text-lg leading-relaxed">
              Empecé desarrollando pequeñas automatizaciones que ahorraban horas de trabajo manual.
              Ese impacto inmediato me enganchó: <strong className="text-primary">código que resuelve problemas reales</strong>.
            </p>
            <p className="text-light-secondary text-lg leading-relaxed">
              Hoy desarrollo productos Full-Stack completos, desde APIs empresariales hasta
              sistemas de IA que procesan miles de requests. Mi enfoque: <strong className="text-primary">arquitecturas sólidas,
              código mantenible, soluciones que escalan</strong>.
            </p>
            <p className="text-light-secondary text-lg leading-relaxed">
              Me especializo en <strong className="text-primary">Python (Django/FastAPI)</strong>, automatización inteligente con IA,
              y en construir infraestructuras que aguantan el golpe. También domino el frontend
              (React/Vue), porque un gran backend merece una gran experiencia de usuario.
            </p>
            <p className="text-light-secondary text-lg leading-relaxed">
              Lo que más disfruto: ese momento cuando todo el sistema funciona en armonía,
              cuando el código hace exactamente lo que debe hacer, sin excusas.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-warning/10 border border-warning/20 rounded-full text-warning text-sm flex items-center gap-2">
                <Bot size={16} /> IA & Automatización
              </span>
              <span className="px-4 py-2 bg-warning/10 border border-warning/20 rounded-full text-warning text-sm flex items-center gap-2">
                <Cloud size={16} /> Cloud & DevOps
              </span>
              <span className="px-4 py-2 bg-warning/10 border border-warning/20 rounded-full text-warning text-sm flex items-center gap-2">
                <Rocket size={16} /> Python Expert
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-light-primary">
            Stack <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Tecnológico</span>
          </h2>
          <p className="text-light-secondary text-lg">
            Las herramientas que uso para construir soluciones que funcionan
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
              className="bg-dark-surface border border-dark-border p-8 rounded-2xl hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group"
            >
              <div className="mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                <category.icon size={40} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-light-primary">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-primary/5 border border-primary/10 rounded-lg text-light-secondary text-sm hover:bg-warning/20 hover:text-warning hover:border-warning/30 transition-colors"
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
  )
}
