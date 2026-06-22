'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const navLinks = ['О продукте', 'Команда', 'Инвесторам', 'Партнерам', 'Достижения', 'Контакты']

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-xl border-b border-[#1D1D1F]/5 shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Логотип */}
        <div className="relative flex items-center cursor-pointer group">
          <div className="relative z-10">
            <Image 
              src="/photo-output.png" 
              alt="ArDent" 
              width={140} 
              height={40} 
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Навигация */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-[#1D1D1F]/70">
          {navLinks.map((link) => (
            <li key={link}>
              <a 
                href={`#${link}`} 
                className="hover:text-[#007AFF] transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#007AFF] after:transition-all hover:after:w-full"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Кнопка */}
        <button className="bg-[#007AFF] text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-80 transition">
          Связаться
        </button>
      </div>
    </nav>
  )
}