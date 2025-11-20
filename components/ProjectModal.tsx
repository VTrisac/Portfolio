'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Folder, File } from 'lucide-react'
import { useEffect } from 'react'

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    description: string
    detailedDescription?: string
    tags: string[]
    icon: any
    structure?: string[]
    features?: string[]
  }
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-dark-bg/95 backdrop-blur-md z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="min-h-screen px-4 py-8 md:py-16 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-dark-surface border-2 border-dark-border rounded-2xl max-w-4xl w-full relative shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 md:w-14 md:h-14 bg-primary hover:bg-primary/80 text-white flex items-center justify-center transition-all duration-300 z-10 shadow-lg rounded-lg"
                  aria-label="Cerrar modal"
                >
                  <X size={28} strokeWidth={2.5} />
                </button>

                {/* Content */}
                <div className="p-6 md:p-12 pr-16 md:pr-24">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                    <div className="text-primary">
                      <project.icon size={60} strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-4 leading-tight text-light-primary">
                        {project.title}
                      </h2>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-primary text-white text-xs font-bold uppercase tracking-wider rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="editorial-line w-full mb-8" />

                  {/* Description */}
                  <div className="mb-8">
                    <h3 className="text-lg md:text-xl font-black uppercase tracking-wider mb-4 text-light-primary">Descripción</h3>
                    <div className="text-light-secondary text-base md:text-lg leading-relaxed whitespace-pre-line">
                      {project.detailedDescription || project.description}
                    </div>
                  </div>

                  {/* Features */}
                  {project.features && project.features.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-lg md:text-xl font-black uppercase tracking-wider mb-4 text-light-primary">Características</h3>
                      <ul className="space-y-3">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-light-secondary text-sm md:text-base">
                            <span className="text-primary font-black mt-1">→</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Structure */}
                  {project.structure && project.structure.length > 0 && (
                    <div>
                      <h3 className="text-lg md:text-xl font-black uppercase tracking-wider mb-4 text-light-primary">Estructura</h3>
                      <div className="border-2 border-dark-border bg-dark-bg p-4 md:p-6 font-mono text-xs md:text-sm overflow-x-auto rounded-lg">
                        {project.structure.map((item, i) => {
                          const isFolder = item.endsWith('/')
                          const indent = (item.match(/^  /g) || []).length
                          const name = item.trim()

                          return (
                            <div
                              key={i}
                              className="flex items-center gap-2 text-light-secondary hover:text-light-primary transition-colors py-1"
                              style={{ paddingLeft: `${indent * 1.5}rem` }}
                            >
                              {isFolder ? (
                                <Folder size={14} className="text-primary flex-shrink-0" />
                              ) : (
                                <File size={14} className="text-light-tertiary flex-shrink-0" />
                              )}
                              <span className="break-all">{name}</span>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
