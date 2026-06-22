'use client'

import { motion } from 'framer-motion'
import { Cpu, Zap, Globe } from 'lucide-react'
import Device3D from './Device3D'
import { Canvas } from '@react-three/fiber'

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
                  До 90% людей чистят зубы неправильно. Труднодоступные зоны остаются неочищенными, а брекеты, импланты и чувствительность делают традиционную гигиену болезненной и неэффективной.
                </p>

              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1D1D1F] flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#007AFF] rounded-full" />
                  Решение
                </h3>
                <p className="text-[#1D1D1F]/70 ml-4">
                  Мы убрали механику. Устройство в форме полукапы генерирует ультразвуковые волны, создающие эффект кавитации. Микропузырьки в жидкости схлопываются и удаляют налёт и бактерии без контакта с эмалью.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1D1D1F] flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#007AFF] rounded-full" />
                  Технический стек
                </h3>
                <div className="ml-4 flex flex-wrap gap-2 mt-2">
                  <span className="bg-[#F5F5F7] px-3 py-1 rounded-full text-sm">Пьезоэлектрический излучатель</span>
                  <span className="bg-[#F5F5F7] px-3 py-1 rounded-full text-sm">Микроконтроллер с 3 режимами работы</span>
                  <span className="bg-[#F5F5F7] px-3 py-1 rounded-full text-sm">Генератор сигналов</span>
                  <span className="bg-[#F5F5F7] px-3 py-1 rounded-full text-sm">Литий-ионный аккумулятор с зарядкой USB-C</span>
                  <span className="bg-[#F5F5F7] px-3 py-1 rounded-full text-sm">Водонепроницаемый корпус из медицинского силикона</span>
                  <span className="bg-[#F5F5F7] px-3 py-1 rounded-full text-sm">Docker</span>
                  <span className="bg-[#F5F5F7] px-3 py-1 rounded-full text-sm">AWS</span>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="h-[500px] w-full relative">
            <Canvas camera={{ position: [0, 0, 5] }}>
              <Device3D />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  )
}