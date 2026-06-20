'use client'

import { motion } from 'framer-motion'
import { Cpu, Zap, Globe } from 'lucide-react'

export default function Product() {
  return (
    <section id="О продукте" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Левая часть — текст */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              О продукте
            </h2>
            <p className="text-xl text-[#1D1D1F]/60 mb-8">
              Инновационное решение, которое меняет правила игры
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[#1D1D1F] flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#007AFF] rounded-full" />
                  Проблема
                </h3>
                <p className="text-[#1D1D1F]/70 ml-4">
                  Разработчики тратят 70% времени на рутину вместо творчества
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1D1D1F] flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#007AFF] rounded-full" />
                  Решение
                </h3>
                <p className="text-[#1D1D1F]/70 ml-4">
                  AI-ассистент, который берет на себя 90% рутинных задач
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1D1D1F] flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#007AFF] rounded-full" />
                  Технический стек
                </h3>
                <div className="ml-4 flex flex-wrap gap-2 mt-2">
                  <span className="bg-[#F5F5F7] px-3 py-1 rounded-full text-sm">Next.js</span>
                  <span className="bg-[#F5F5F7] px-3 py-1 rounded-full text-sm">TypeScript</span>
                  <span className="bg-[#F5F5F7] px-3 py-1 rounded-full text-sm">Python</span>
                  <span className="bg-[#F5F5F7] px-3 py-1 rounded-full text-sm">FastAPI</span>
                  <span className="bg-[#F5F5F7] px-3 py-1 rounded-full text-sm">PostgreSQL</span>
                  <span className="bg-[#F5F5F7] px-3 py-1 rounded-full text-sm">Docker</span>
                  <span className="bg-[#F5F5F7] px-3 py-1 rounded-full text-sm">AWS</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Правая часть — заглушка */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square w-full max-w-md mx-auto bg-gradient-to-br from-[#007AFF]/5 via-[#007AFF]/10 to-[#007AFF]/20 rounded-3xl p-8 flex flex-col items-center justify-center border border-[#007AFF]/10 shadow-xl">
              
              {/* Анимированный фон */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#007AFF]/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#007AFF]/10 rounded-full blur-3xl animate-pulse delay-1000" />
              </div>

              {/* Иконки */}
              <div className="relative z-10 text-center">
                <div className="text-7xl mb-4">🚀</div>
                <h3 className="text-2xl font-semibold text-[#1D1D1F] mb-2">
                  3D-модель устройства
                </h3>
                <p className="text-[#1D1D1F]/40 text-sm max-w-xs mx-auto">
                  Здесь будет интерактивная 3D-модель с вращением при скролле
                </p>
                
                {/* Технические детали */}
                <div className="mt-6 flex justify-center gap-6 text-xs text-[#1D1D1F]/30">
                  <div className="flex items-center gap-1">
                    <Cpu className="w-3 h-3" />
                    <span>GLB</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    <span>3D</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Globe className="w-3 h-3" />
                    <span>WebGL</span>
                  </div>
                </div>

                {/* Кнопка-подсказка */}
                <div className="mt-8 inline-block bg-[#1D1D1F]/5 px-4 py-2 rounded-full text-xs text-[#1D1D1F]/40">
                  💡 Добавь /public/model.glb
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}