'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MessageCircle, MapPin, Send, Linkedin, Twitter } from 'lucide-react'

export default function Contacts() {
  const contacts = [
    { icon: Mail, label: 'Email', value: 'hello@startup.com', href: 'mailto:hello@startup.com' },
    { icon: Phone, label: 'Телефон', value: '+1 (234) 567-890', href: 'tel:+1234567890' },
    { icon: MessageCircle, label: 'Telegram', value: '@startup_support', href: 'https://t.me/startup_support' },
    { icon: MapPin, label: 'Офис', value: 'San Francisco, CA', href: '#' },
  ]

  const socials = [
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Send, label: 'Telegram канал', href: '#' },
  ]

  return (
    <section id="Контакты" className="py-24 bg-[#F5F5F7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Контакты
          </h2>
          <p className="text-xl text-[#1D1D1F]/60">
            Всегда на связи. Выбери удобный способ.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Левая колонка — контакты */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {contacts.map((contact, i) => (
              <a
                key={i}
                href={contact.href}
                className="flex items-center gap-5 bg-white rounded-2xl px-6 py-4 hover:shadow-md transition group"
              >
                <contact.icon className="w-6 h-6 text-[#007AFF] group-hover:scale-110 transition" />
                <div>
                  <div className="text-sm text-[#1D1D1F]/40">{contact.label}</div>
                  <div className="font-medium text-[#1D1D1F]">{contact.value}</div>
                </div>
              </a>
            ))}

            <div className="flex gap-3 mt-6">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="bg-white p-3 rounded-2xl hover:shadow-md transition group"
                >
                  <social.icon className="w-5 h-5 text-[#1D1D1F]/60 group-hover:text-[#007AFF] transition" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Правая колонка — форма обратной связи */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-4">Напиши нам</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Твоё имя"
                className="w-full border border-[#1D1D1F]/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#007AFF] transition"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-[#1D1D1F]/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#007AFF] transition"
              />
              <textarea
                placeholder="Сообщение"
                rows={4}
                className="w-full border border-[#1D1D1F]/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#007AFF] transition resize-none"
              />
              <button
                type="submit"
                className="w-full bg-[#007AFF] text-white rounded-xl py-3 font-medium hover:opacity-80 transition"
              >
                Отправить
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}