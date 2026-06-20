'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1D1D1F] text-white/60 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm">
            © {currentYear} Название стартапа. Все права защищены.
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-white transition">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition">Условия использования</a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-1 text-sm"
          >
            Сделано с <Heart className="w-4 h-4 text-red-500 fill-red-500" /> в 2026
          </motion.div>
        </div>
      </div>
    </footer>
  )
}