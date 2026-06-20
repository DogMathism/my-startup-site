'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Rocket, Calendar, ArrowRight } from 'lucide-react'

export default function Investors() {
  const stats = [
    { label: 'Привлечено инвестиций', value: '$2.5M', icon: TrendingUp, color: 'text-[#007AFF]' },
    { label: 'Рост выручки (YoY)', value: '320%', icon: Rocket, color: 'text-[#007AFF]' },
    { label: 'Активных пользователей', value: '15K+', icon: Users, color: 'text-[#007AFF]' },
    { label: 'Средний чек', value: '$149', icon: Calendar, color: 'text-[#007AFF]' },
  ]

  return (
    <section id="Инвесторам" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Инвесторам
          </h2>
          <p className="text-xl text-[#1D1D1F]/60 mb-12">
            Мы строим компанию, которая изменит рынок. Присоединяйся к нам на ранней стадии.
          </p>
        </motion.div>

        {/* Статистика */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#F5F5F7] rounded-3xl p-6 text-center hover:shadow-lg transition"
            >
              <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
              <div className="text-2xl md:text-3xl font-bold text-[#1D1D1F]">{stat.value}</div>
              <div className="text-sm text-[#1D1D1F]/60">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Потенциал */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold">Потенциал для инвестора</h3>
            <ul className="space-y-3 text-[#1D1D1F]/80">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#007AFF] rounded-full mt-2.5 flex-shrink-0" />
                <span>Рынок оценивается в <strong>$50B</strong> и растёт на 25% ежегодно</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#007AFF] rounded-full mt-2.5 flex-shrink-0" />
                <span><strong>Уже работаем</strong> с 3 корпоративными клиентами из Fortune 500</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#007AFF] rounded-full mt-2.5 flex-shrink-0" />
                <span><strong>Прогноз окупаемости:</strong> 3-5 лет, IRR — 40%+</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#007AFF] rounded-full mt-2.5 flex-shrink-0" />
                <span><strong>Раунд:</strong> Seed, открыт для синдикатов и бизнес-ангелов</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#007AFF]/5 rounded-3xl p-8 border border-[#007AFF]/10"
          >
            <h4 className="text-xl font-semibold mb-3">Свяжись с нами</h4>
            <p className="text-[#1D1D1F]/60 mb-6">
              Напиши нам — обсудим детали, проведём презентацию и ответим на все вопросы.
            </p>
            <div className="space-y-3">
              <a 
                href="mailto:invest@startup.com" 
                className="flex items-center justify-between bg-white rounded-xl px-5 py-3 hover:shadow-md transition"
              >
                <span className="text-[#1D1D1F]">invest@startup.com</span>
                <ArrowRight className="w-5 h-5 text-[#007AFF]" />
              </a>
              <a 
                href="tel:+1234567890" 
                className="flex items-center justify-between bg-white rounded-xl px-5 py-3 hover:shadow-md transition"
              >
                <span className="text-[#1D1D1F]">+1 (234) 567-890</span>
                <ArrowRight className="w-5 h-5 text-[#007AFF]" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}