'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Home, User, Briefcase } from 'lucide-react'

const sections = [
  { id: 'home', label: 'Home', icon: Home, number: '01' },
  { id: 'about', label: 'About', icon: User, number: '02' },
  { id: 'projects', label: 'Projects', icon: Briefcase, number: '03' },
]

export default function ScrollNav() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-6">
      {sections.map((section) => {
        const Icon = section.icon
        const isActive = activeSection === section.id

        return (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group relative flex items-center justify-end gap-4"
          >
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{
                opacity: isActive ? 1 : 0,
                x: isActive ? 0 : 10
              }}
              className="absolute right-16 px-3 py-1.5 bg-dark-surface border border-dark-border rounded-lg whitespace-nowrap"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-light-primary">
                {section.label}
              </span>
            </motion.div>

            {/* Dot/Icon Container */}
            <div className="relative">
              {/* Background ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2"
                animate={{
                  borderColor: isActive ? '#BB9AF7' : '#414868',
                  scale: isActive ? 1.2 : 1,
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Icon/Dot */}
              <motion.div
                className="relative w-10 h-10 rounded-full flex items-center justify-center"
                animate={{
                  backgroundColor: isActive ? '#BB9AF7' : '#24283B',
                }}
                transition={{ duration: 0.3 }}
              >
                {isActive ? (
                  <Icon size={18} className="text-dark-bg" />
                ) : (
                  <span className="text-xs font-black text-light-tertiary">
                    {section.number}
                  </span>
                )}
              </motion.div>

              {/* Hover effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-warning opacity-0 group-hover:opacity-20"
                transition={{ duration: 0.2 }}
              />
            </div>
          </button>
        )
      })}

      {/* Progress line */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-dark-border -z-10">
        <motion.div
          className="w-full bg-primary origin-top"
          style={{
            height: `${((sections.findIndex(s => s.id === activeSection) + 1) / sections.length) * 100}%`,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  )
}
