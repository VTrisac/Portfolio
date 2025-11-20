'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        {/* Sliding curtain effect */}
        <motion.div
          className="fixed inset-0 bg-magazine-black z-[100] origin-top"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className="fixed inset-0 bg-magazine-black z-[100] origin-bottom"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Page number indicator during transition */}
        <motion.div
          className="fixed inset-0 z-[101] flex items-center justify-center pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <div className="text-[200px] font-black text-magazine-cream opacity-10">
            {pathname === '/' ? '01' : pathname === '/about' ? '02' : pathname === '/projects' ? '03' : '04'}
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
