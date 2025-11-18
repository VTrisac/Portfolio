'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Check, AlertCircle } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'El asunto es requerido'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setStatus('sending')

    // Simular envío (en producción, aquí irías a tu API)
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Simular éxito
    setStatus('success')
    setFormData({ name: '', email: '', subject: '', message: '' })

    // Reset status después de 3 segundos
    setTimeout(() => {
      setStatus('idle')
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Limpiar error del campo al escribir
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-dark-light border ${
            errors.name ? 'border-red-500' : 'border-white/10'
          } rounded-lg focus:outline-none focus:border-primary transition-colors`}
          placeholder="Tu nombre"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
            <AlertCircle size={14} />
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-dark-light border ${
            errors.email ? 'border-red-500' : 'border-white/10'
          } rounded-lg focus:outline-none focus:border-primary transition-colors`}
          placeholder="tu@email.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
            <AlertCircle size={14} />
            {errors.email}
          </p>
        )}
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2">
          Asunto
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-dark-light border ${
            errors.subject ? 'border-red-500' : 'border-white/10'
          } rounded-lg focus:outline-none focus:border-primary transition-colors`}
          placeholder="Sobre qué quieres hablar"
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
            <AlertCircle size={14} />
            {errors.subject}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className={`w-full px-4 py-3 bg-dark-light border ${
            errors.message ? 'border-red-500' : 'border-white/10'
          } rounded-lg focus:outline-none focus:border-primary transition-colors resize-none`}
          placeholder="Tu mensaje aquí..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
            <AlertCircle size={14} />
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={status === 'sending' || status === 'success'}
        whileHover={{ scale: status === 'idle' ? 1.02 : 1 }}
        whileTap={{ scale: status === 'idle' ? 0.98 : 1 }}
        className={`w-full py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
          status === 'success'
            ? 'bg-green-600 text-white'
            : status === 'sending'
            ? 'bg-primary/50 text-dark cursor-not-allowed'
            : 'bg-primary hover:bg-primary-dark text-dark'
        }`}
      >
        {status === 'sending' && (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="w-5 h-5 border-2 border-dark border-t-transparent rounded-full"
            />
            Enviando...
          </>
        )}
        {status === 'success' && (
          <>
            <Check size={20} />
            Mensaje enviado
          </>
        )}
        {status === 'idle' && (
          <>
            Enviar mensaje
            <Send size={20} />
          </>
        )}
      </motion.button>

      {status === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-green-600/10 border border-green-600/20 rounded-lg text-green-500 text-center"
        >
          ¡Gracias por tu mensaje! Te responderé pronto.
        </motion.div>
      )}
    </motion.form>
  )
}
