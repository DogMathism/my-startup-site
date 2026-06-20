'use client'

import { motion } from 'framer-motion'
import { Award, Trophy, Users, DollarSign, Star, Medal } from 'lucide-react'

export default function Achievements() {
  const achievements = [
    { 
      icon: Award, 
      title: 'Премия "Технология года"', 
      desc: 'Признание на международной конференции TechCrunch 2024',
      year: '2024'
    },
    { 
      icon: Trophy, 
      title: 'Победители акселератора Y Combinator', 
      desc: 'Прошли отбор из 5000+ стартапов',
      year: '2023'
    },
    { 
      icon: Users, 
      title: 'Сообщество 15 000+ разработчиков', 
      desc: 'Активные пользователи из 40 стран мира',
      year: '2024'
    },
    { 
      icon: DollarSign, 
      title: 'Привлечено $2.5M инвестиций', 
      desc: 'Раунд Seed от ведущих фондов Силиконовой долины',
      year: '2024'
    },
    { 
      icon: Star, 
      title: '4.9/5 на Trustpilot', 
      desc: 'Более 200 отзывов от клиентов и партнёров',
      year: '2024'
    },
    { 
      icon: Medal, 
      title: 'Патент № 1234567', 
      desc: 'Запатентованная технология обработки данных',
      year: '2023'
    },
  ]

  return (
    <section id="Достижения" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Достижения
          </h2>
          <p className="text-xl text-[#1D1D1F]/60">
            Нас уже заметили — и это только начало
          </p>
        </motion.div>

        {/* Сетка достижений */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-[#F5F5F7] rounded-3xl p-6 hover:shadow-xl transition group"
            >
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-2xl shadow-sm group-hover:shadow-md transition">
                  <item.icon className="w-8 h-8 text-[#007AFF]" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-[#1D1D1F]">{item.title}</h3>
                    <span className="text-xs font-medium text-[#007AFF] bg-[#007AFF]/10 px-2 py-0.5 rounded-full">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-sm text-[#1D1D1F]/60 mt-1">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Дополнительная статистика */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto bg-[#007AFF]/5 rounded-3xl p-8 border border-[#007AFF]/10 text-center"
        >
          <p className="text-lg text-[#1D1D1F]/80">
            🎯 <strong>Главная цель на 2025 год:</strong> выход на IPO и масштабирование 
            в Азию. Мы ищем сильных партнёров и инвесторов.
          </p>
        </motion.div>
      </div>
    </section>
  )
}