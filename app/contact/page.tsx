'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'Victorperez694@gmail.com',
    link: 'mailto:Victorperez694@gmail.com',
  },
  {
    icon: MapPin,
    title: 'LinkedIn',
    value: 'linkedin.com/in/victortrisac',
    link: 'https://www.linkedin.com/in/victortrisac/',
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container-custom text-center"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Hablemos de <span className="text-gradient">Oportunidades</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Abierto a nuevas oportunidades laborales. Conversemos sobre cómo puedo aportar valor a tu equipo.
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-dark-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Contáctame
                </h2>
                <p className="text-gray-400 text-lg">
                  Estoy disponible para conversar sobre oportunidades laborales, colaboraciones técnicas o posiciones full-time. Respondo con rapidez.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass p-6 rounded-2xl hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-dark transition-all">
                        <item.icon size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-gray-400 hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-gray-400">{item.value}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="glass p-6 rounded-2xl"
              >
                <h3 className="font-bold mb-3">Disponibilidad</h3>
                <p className="text-gray-400">
                  Buscando nuevos retos profesionales en desarrollo Full-Stack. Abierto a colaboraciones técnicas y desarrollo de productos.
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="glass p-8 rounded-2xl"
            >
              <h2 className="text-2xl font-bold mb-6">Envíame un mensaje</h2>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map or CTA Section */}
      <section className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container-custom"
        >
          <div className="glass rounded-3xl p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Conectemos en LinkedIn
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              También puedes contactarme directamente por LinkedIn para oportunidades profesionales
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <motion.a
                href="https://www.linkedin.com/in/victortrisac/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                LinkedIn
              </motion.a>
              <motion.a
                href="mailto:Victorperez694@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Enviar Email
              </motion.a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
