'use client'

import { motion } from 'framer-motion'
import { Linkedin, Mail } from 'lucide-react'

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/victortrisac/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:Victorperez694@gmail.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="bg-dark-light border-t border-white/10">
      <div className="container-custom px-6 md:px-12 lg:px-24 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm"
          >
            © {new Date().getFullYear()} Victor Trisac · AI Product Developer
            <br className="md:hidden" />
            <span className="hidden md:inline"> · </span>
            Construido con Next.js, TailwindCSS y café ☕
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ scale: 1.2, color: '#10B981' }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-primary transition-colors duration-300"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
