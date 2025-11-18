import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Victor Trisac | Full-Stack Developer',
  description: 'Desarrollador Full-Stack especializado en Python, Django, React y automatización con IA. Construyo APIs robustas, chatbots inteligentes y flujos n8n que resuelven problemas reales.',
  keywords: ['full-stack developer', 'python', 'django', 'react', 'next.js', 'chatbots IA', 'n8n', 'automatización', 'APIs REST', 'FastAPI'],
  authors: [{ name: 'Victor Trisac' }],
  openGraph: {
    title: 'Victor Trisac | Full-Stack Developer',
    description: 'Desarrollador Full-Stack: Python, Django, React. Chatbots IA y automatización n8n.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
