'use client'

import { useState, useEffect } from 'react'

const links = ['О продукте', 'Команда', 'Инвесторам', 'Партнерам', 'Достижения', 'Контакты']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-semibold tracking-tight">Лого</div>
        <ul className="hidden md:flex gap-8 text-sm text-[#1D1D1F]/70">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link}`} className="hover:text-[#007AFF] transition">
                {link}
              </a>
            </li>
          ))}
        </ul>
        <button className="bg-[#007AFF] text-white px-5 py-2 rounded-full text-sm hover:opacity-80 transition">
          Связаться
        </button>
      </div>
    </nav>
  )
}