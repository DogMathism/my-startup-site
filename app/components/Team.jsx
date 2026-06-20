'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import JoinModal from './JoinModal'

const team = [
  { name: 'Алексей Иванов', role: 'CEO & Founder', exp: '10 лет в IT-продуктах', photo: '/team1.jpg' },
  { name: 'Мария Петрова', role: 'CTO', exp: '8 лет full-stack разработки', photo: '/team2.jpg' },
  { name: 'Дмитрий Смирнов', role: 'Lead Designer', exp: '7 лет в UX/UI', photo: '/team3.jpg' },
]

export default function Team() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="Команда" className="py-24 bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Команда
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl p-6 text-center shadow-sm hover:shadow-xl transition"
            >
              <div className="w-32 h-32 mx-auto bg-[#F5F5F7] rounded-full mb-4 flex items-center justify-center text-6xl">
                😊
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-[#007AFF] font-medium">{member.role}</p>
              <p className="text-sm text-[#1D1D1F]/60 mt-2">{member.exp}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-[#007AFF] text-white px-8 py-3 rounded-full text-lg hover:scale-105 transition"
          >
            Присоединиться к команде
          </button>
        </div>

        <JoinModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </section>
  )
}