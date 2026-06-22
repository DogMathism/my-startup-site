'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import JoinModal from './JoinModal'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const teamMembers = [
  { 
    name: 'Алексей Иванов', 
    role: 'CEO & Founder', 
    exp: '10 лет в IT-продуктах', 
    photo: '/team/alexey.jpg',
    bio: 'Экс-директор по продукту в Яндекс.Cloud'
  },
  { 
    name: 'Мария Петрова', 
    role: 'CTO', 
    exp: '8 лет full-stack разработки', 
    photo: '/team/maria.jpg',
    bio: 'Архитектор распределённых систем'
  },
  { 
    name: 'Дмитрий Смирнов', 
    role: 'Lead Designer', 
    exp: '7 лет в UX/UI', 
    photo: '/team/dmitry.jpg',
    bio: 'Дизайнер года 2023 по версии Behance'
  },
  { 
    name: 'Екатерина Козлова', 
    role: 'Head of Product', 
    exp: '6 лет управления продуктами', 
    photo: '/team/ekaterina.jpg',
    bio: 'Запустила 5 успешных стартапов'
  },
  { 
    name: 'Сергей Морозов', 
    role: 'Tech Lead Backend', 
    exp: '9 лет разработки на Python', 
    photo: '/team/sergey.jpg',
    bio: 'Специалист по высоким нагрузкам'
  },
  { 
    name: 'Анна Соколова', 
    role: 'Frontend Team Lead', 
    exp: '6 лет React-разработки', 
    photo: '/team/anna.jpg',
    bio: 'Входит в топ-50 React-разработчиков'
  },
  { 
    name: 'Игорь Васильев', 
    role: 'DevOps Engineer', 
    exp: '8 лет в инфраструктуре', 
    photo: '/team/igor.jpg',
    bio: 'Сертифицированный AWS-инженер'
  },
  { 
    name: 'Ольга Новикова', 
    role: 'Marketing Director', 
    exp: '7 лет в IT-маркетинге', 
    photo: '/team/IMG_2755.jpeg',
    bio: 'Вывела на рынок 10+ продуктов'
  },
]

export default function Team() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const swiperRef = useRef(null)

  return (
    <section id="Команда" className="py-24 bg-[#F5F5F7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Команда
          </h2>
          <p className="text-xl text-[#1D1D1F]/60">
            Наши люди — наша главная ценность
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="pb-12"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-3xl p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center"
                >
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover bg-[#F5F5F7] ring-2 ring-[#007AFF]/10 group-hover:ring-[#007AFF]/30 transition"
                      sizes="(max-width: 768px) 128px, 128px"
                      onError={(e) => {
                        const target = e.target
                        if (target instanceof HTMLImageElement) {
                          target.style.display = 'none'
                          const parent = target.parentElement
                          if (parent) {
                            const fallback = document.createElement('span')
                            fallback.className = 'w-full h-full flex items-center justify-center text-6xl bg-[#F5F5F7] rounded-full'
                            fallback.textContent = '😊'
                            parent.appendChild(fallback)
                          }
                        }
                      }}
                    />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-[#1D1D1F]">{member.name}</h3>
                  <p className="text-[#007AFF] font-medium text-sm">{member.role}</p>
                  <p className="text-sm text-[#1D1D1F]/60 mt-1">{member.exp}</p>
                  <p className="text-xs text-[#1D1D1F]/40 mt-2 italic">"{member.bio}"</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-8"
        >
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-[#007AFF] text-white px-8 py-3 rounded-full text-lg font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Присоединиться к команде
          </button>
          <p className="text-sm text-[#1D1D1F]/40 mt-4">
            Мы всегда ищем талантливых людей
          </p>
        </motion.div>

        <JoinModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </section>
  )
}