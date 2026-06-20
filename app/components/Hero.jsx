'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6 pt-20 bg-[#F5F5F7]">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
          Меняем будущее <br />
          <span className="text-[#007AFF]">уже сегодня</span>
        </h1>
        <p className="text-xl md:text-2xl text-[#1D1D1F]/60 mt-6 max-w-2xl mx-auto">
          Наш продукт решает задачи, с которыми не справились другие
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-[#007AFF] text-white px-8 py-3 rounded-full text-lg hover:scale-105 transition">
            Попробовать
          </button>
          <button className="border border-[#1D1D1F]/20 px-8 py-3 rounded-full text-lg hover:bg-black/5 transition">
            Узнать больше
          </button>
        </div>
      </motion.div>
    </section>
  )
}