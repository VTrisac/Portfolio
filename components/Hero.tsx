'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Download } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-custom relative z-10 text-center"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
            Full-Stack Developer
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          Desarrollo productos digitales{' '}
          <span className="text-gradient">robustos y escalables</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl lg:text-3xl text-gray-400 mb-8 max-w-3xl mx-auto font-light"
        >
          Full-Stack con Python, Django y React. De la idea al deploy, con enfoque en calidad.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-gray-500 mb-12 max-w-2xl mx-auto"
        >
          Experiencia en APIs, automatización con IA, integraciones n8n y soluciones empresariales. Código limpio, arquitectura sólida.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link href="/projects" className="btn-primary flex items-center gap-2">
            Ver Proyectos
            <ArrowRight size={20} />
          </Link>

          <Link href="/contact" className="btn-secondary flex items-center gap-2">
            Contacto
          </Link>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-20 flex items-center justify-center gap-3 text-gray-500"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gray-700" />
          <span className="text-sm">Scroll para explorar</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gray-700" />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
