'use client'

import { motion, AnimatePresence } from 'framer-motion'

export default function JoinModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-2xl font-bold mb-2">Присоединяйся!</h3>
          <p className="text-[#1D1D1F]/60 mb-6">
            Мы ищем талантливых разработчиков и дизайнеров. 
            Анкета появится здесь чуть позже. А пока — напиши нам!
          </p>
          
          <div className="space-y-3">
            <input 
              type="text" 
              placeholder="Имя" 
              className="w-full border border-[#1D1D1F]/20 rounded-xl px-4 py-3"
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full border border-[#1D1D1F]/20 rounded-xl px-4 py-3"
            />
            <textarea 
              placeholder="Расскажи о себе"
              rows={4}
              className="w-full border border-[#1D1D1F]/20 rounded-xl px-4 py-3"
            />
            <button className="w-full bg-[#007AFF] text-white rounded-xl py-3 font-medium hover:opacity-80 transition">
              Отправить
            </button>
          </div>

          <button 
            onClick={onClose}
            className="mt-4 text-sm text-[#1D1D1F]/40 hover:text-[#1D1D1F] transition"
          >
            Закрыть
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}