'use client'

import { motion } from 'framer-motion'
import { Handshake, Shield, Zap, Globe, ArrowRight } from 'lucide-react'

export default function Partners() {
  const benefits = [
    { 
      icon: Handshake, 
      title: 'Честные условия', 
      desc: 'Прозрачная модель: ты получаешь 20% с каждого приведённого клиента' 
    },
    { 
      icon: Shield, 
      title: 'Надёжность', 
      desc: 'Работаем с 2023 года, имеем 100+ довольных партнёров' 
    },
    { 
      icon: Zap, 
      title: 'Быстрый старт', 
      desc: 'Онбординг за 24 часа — и ты уже зарабатываешь' 
    },
    { 
      icon: Globe, 
      title: 'Международный рынок', 
      desc: 'Продаём в 15 странах, поможем выйти на новые рынки' 
    },
  ]

  return (
    <section id="Партнерам" className="py-24 bg-[#F5F5F7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Партнерам
          </h2>
          <p className="text-xl text-[#1D1D1F]/60">
            Строим долгосрочные отношения. Выгода для тебя и для нас.
          </p>
        </motion.div>

        {/* Преимущества */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition flex gap-5"
            >
              <benefit.icon className="w-10 h-10 text-[#007AFF] flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-1">{benefit.title}</h3>
                <p className="text-[#1D1D1F]/60 text-sm">{benefit.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm text-center"
        >
          <h3 className="text-2xl font-semibold mb-3">Стань нашим партнёром</h3>
          <p className="text-[#1D1D1F]/60 mb-6">
            Получи доступ к эксклюзивным условиям, обучению и поддержке 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:partners@startup.com"
              className="bg-[#007AFF] text-white px-8 py-3 rounded-full font-medium hover:scale-105 transition"
            >
              Стать партнёром
            </a>
            <a 
              href="tel:+1234567890"
              className="border border-[#1D1D1F]/20 px-8 py-3 rounded-full font-medium hover:bg-black/5 transition"
            >
              +1 (234) 567-890
            </a>
          </div>
          <p className="text-sm text-[#1D1D1F]/40 mt-4">
            Или напиши нам: partners@startup.com
          </p>
        </motion.div>
      </div>
    </section>
  )
}