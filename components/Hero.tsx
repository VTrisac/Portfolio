'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import GlitchText from './GlitchText'
import TypewriterText from './TypewriterText'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100])

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center section-padding overflow-hidden">
      {/* Massive section number background with parallax */}
      <motion.div
        style={{ opacity, scale }}
        className="absolute top-0 left-0 right-0 pointer-events-none select-none overflow-hidden"
      >
        <span className="section-number absolute -top-20 md:-top-32 left-8 md:left-16">01</span>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ y }}
        className="container-custom relative z-10 w-full"
      >
        {/* Editorial tag */}
        <motion.div variants={itemVariants} className="mb-12 md:mb-16">
          <span className="inline-block border-2 border-primary px-6 py-2 text-xs font-bold uppercase tracking-widest text-primary">
            <GlitchText text="AI Product Developer & Full-Stack Engineer" />
          </span>
        </motion.div>

        {/* Main content - asymmetric layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left column - Main headline */}
          <motion.div variants={itemVariants} className="lg:col-span-8">
            <h1 className="section-title mb-8 leading-[0.9] overflow-hidden">
              {['Transformo', 'ideas en', 'productos', 'que funcionan'].map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5 + i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`block ${i === 3 ? 'text-primary' : 'text-light-primary'}`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="editorial-line w-24 mb-8 origin-left"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight leading-tight max-w-2xl text-light-secondary"
            >
              <TypewriterText
                text="Desarrollo soluciones Full-Stack con Python e IA. Backend escalable, frontends modernos, automatización inteligente. De la arquitectura al deploy."
                delay={1600}
                speed={30}
              />
            </motion.p>
          </motion.div>

          {/* Right column - Info blocks */}
          <motion.div variants={itemVariants} className="lg:col-span-4 space-y-12">
            {/* Info block 1 */}
            <div>
              <div className="text-6xl font-black mb-3 text-warning">↓</div>
              <p className="text-base md:text-lg text-light-secondary leading-relaxed">
                Resuelvo problemas reales con código limpio y arquitecturas sólidas. Automatización empresarial, integraciones complejas, productos que escalan.
              </p>
            </div>

            {/* Info block 2 */}
            <div>
              <div className="editorial-line w-12 mb-4" />
              <p className="text-sm font-bold uppercase tracking-widest mb-2 text-light-tertiary">Especialidad</p>
              <p className="text-base text-light-secondary">
                APIs robustas • IA aplicada • Arquitectura escalable
              </p>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-12 md:mt-16 flex items-center gap-4 text-warning justify-center"
        >
          <motion.div
            animate={{ scaleX: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-px bg-warning w-16 origin-right"
          />
          <motion.span
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-xs font-medium uppercase tracking-wider"
          >
            Explora mi trabajo
          </motion.span>
        </motion.div>
      </motion.div>
    </section>
  )
}
