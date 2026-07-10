import type { Metadata } from 'next'
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/lib/i18n'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const display = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['opsz'],
  variable: '--font-display',
})

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://victortrisac.netlify.app'),
  title: 'Víctor Trisac — Full Stack Engineer · Python, FastAPI e IA',
  description:
    'Full Stack Engineer especializado en Python, FastAPI y automatización con IA. Desarrollo de sistemas escalables en cloud. Barcelona.',
  authors: [{ name: 'Víctor Trisac' }],
  openGraph: {
    title: 'Víctor Trisac — Full Stack Engineer',
    description:
      'Python, FastAPI y automatización con IA. Sistemas escalables en cloud.',
    type: 'website',
    locale: 'es_ES',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" id="top" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="overflow-x-hidden">
        <LanguageProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}
