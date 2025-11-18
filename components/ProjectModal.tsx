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
    image: string
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
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-3xl max-w-4xl w-full my-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Cerrar modal"
              >
                <X size={24} />
              </button>

              {/* Content */}
              <div className="p-8 md:p-12">
                {/* Header */}
                <div className="flex items-start gap-6 mb-8">
                  <div className="text-6xl">{project.image}</div>
                  <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      {project.title}
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-3">Descripción</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {project.detailedDescription || project.description}
                  </p>
                </div>

                {/* Features */}
                {project.features && project.features.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-3">Características Principales</h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-400">
                          <span className="text-primary mt-1">▪</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Structure */}
                {project.structure && project.structure.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold mb-3">Estructura del Proyecto</h3>
                    <div className="glass-dark rounded-xl p-6 font-mono text-sm">
                      {project.structure.map((item, i) => {
                        const isFolder = item.endsWith('/')
                        const indent = (item.match(/^  /g) || []).length
                        const name = item.trim()

                        return (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors py-1"
                            style={{ paddingLeft: `${indent * 1.5}rem` }}
                          >
                            {isFolder ? (
                              <Folder size={16} className="text-primary" />
                            ) : (
                              <File size={16} className="text-gray-500" />
                            )}
                            <span>{name}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
