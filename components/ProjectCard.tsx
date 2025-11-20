'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  icon: any
  index: number
  onClick: () => void
}

export default function ProjectCard({
  title,
  description,
  tags,
  icon: Icon,
  index,
  onClick,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="relative group cursor-pointer"
      onClick={onClick}
    >
      {/* Animated blob background */}
      <div
        className="absolute top-1/2 left-1/2 w-[200px] h-[200px] rounded-full animate-blobBounce z-10"
        style={{
          background: 'radial-gradient(circle, rgba(187, 154, 247, 1) 0%, rgba(187, 154, 247, 0.8) 40%, rgba(187, 154, 247, 0) 70%)',
          filter: 'blur(30px)',
        }}
      ></div>

      {/* Card content with backdrop blur */}
      <div className="relative bg-dark-surface/90 backdrop-blur-sm border-2 border-dark-border rounded-xl overflow-hidden z-20 shadow-lg hover:border-primary transition-colors duration-300">
        <style jsx>{`
          @keyframes blobBounce {
            0% {
              transform: translate(-100%, -100%) translate3d(0, 0, 0);
            }
            25% {
              transform: translate(-100%, -100%) translate3d(100%, 0, 0);
            }
            50% {
              transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
            }
            75% {
              transform: translate(-100%, -100%) translate3d(0, 100%, 0);
            }
            100% {
              transform: translate(-100%, -100%) translate3d(0, 0, 0);
            }
          }
          .animate-blobBounce {
            animation: blobBounce 5s infinite ease;
          }
        `}</style>
      {/* Icon Section */}
      <div className="relative h-48 md:h-64 bg-dark-light overflow-hidden border-b-2 border-dark-border">
        {/* Icon with animation */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="text-light-primary group-hover:text-primary transition-colors duration-500"
            whileHover={{ scale: 1.15, rotate: 5 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Icon size={80} strokeWidth={1.5} />
          </motion.div>
        </div>

        {/* Hover overlay - glass morphism effect */}
        <div className="absolute inset-0 backdrop-blur-md bg-dark-bg/80 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6">
            {/* Grid pattern background */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `linear-gradient(#3F3F46 1px, transparent 1px), linear-gradient(90deg, #3F3F46 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }} />

            {/* "Explorar proyecto" text */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              className="text-warning text-xl md:text-2xl font-black uppercase tracking-wider flex items-center gap-3 relative z-10"
            >
              Explorar proyecto
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              >
                <ArrowUpRight size={24} strokeWidth={3} />
              </motion.div>
            </motion.div>

            {/* Icon on hover */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 0.2 }}
              className="text-light-primary absolute"
            >
              <Icon size={120} strokeWidth={1} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-3 text-light-primary group-hover:text-primary transition-colors leading-tight">
          {title}
        </h3>
        <p className="text-light-secondary mb-4 line-clamp-3 text-sm md:text-base">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag, i) => (
            <span
              key={i}
              className="px-2 md:px-3 py-1 border border-dark-border text-light-tertiary text-xs font-bold uppercase tracking-wider hover:border-warning hover:text-warning transition-colors"
            >
              {tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span className="px-2 md:px-3 py-1 bg-warning text-dark-bg text-xs font-bold uppercase tracking-wider">
              +{tags.length - 3}
            </span>
          )}
        </div>
      </div>
      </div>
    </motion.div>
  )
}
