'use client'

import { motion } from 'framer-motion'
import { Eye } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  index: number
  onClick: () => void
}

export default function ProjectCard({
  title,
  description,
  tags,
  image,
  index,
  onClick,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="glass rounded-2xl overflow-hidden group cursor-pointer"
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative h-64 bg-gradient-to-br from-primary/20 to-primary-dark/20 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-6xl">
          {image}
        </div>
        <div className="absolute inset-0 bg-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-white/10 rounded-full hover:bg-primary transition-colors"
          >
            <Eye size={24} />
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-3">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
