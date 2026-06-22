'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const navLinks = ['О продукте', 'Команда', 'Инвесторам', 'Партнерам', 'Достижения', 'Контакты']

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showWaves, setShowWaves] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWaves(false)
    }, 7800) // 4.5 секунды — 2 цикла
    return () => clearTimeout(timer)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-xl border-b border-[#1D1D1F]/5 shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
        <div className="relative flex items-center cursor-pointer group">
          
          {/* Логотип */}
          <div className="relative z-10">
            <Image 
              src="/0597C500-C3E1-440D-9DC8-123BBA8CC955.png" 
              alt="ArDent" 
              width={120} 
              height={40} 
              className="object-contain"
              priority
            />
          </div>

          {/* Волны — улетают вправо (CSS-анимация) */}
          {showWaves && (
            <>
              {/* Волна 1 — оранжевая */}
              <div
                className="absolute rounded-r-full border-[3px] border-[#FF6B00] wave1"
                style={{
                  width: 10,
                  height: 10,
                  top: '50%',
                  left: '100%',
                  transform: 'translateY(-10%)',
                  borderLeft: 'none',
                  backgroundColor: 'transparent',
                  marginLeft: -75,
                }}
              />

              {/* Волна 2 — золотистая */}
              <div
                className="absolute rounded-r-full border-[3px] border-[#D4A574] wave2"
                style={{
                  width: 5,
                  height: 5,
                  top: '50%',
                  left: '100%',
                  transform: 'translateY(-10%)',
                  borderLeft: 'none',
                  backgroundColor: 'transparent',
                  marginLeft: -75,
                }}
              />
            </>
          )}
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

        <button className="bg-[#007AFF] text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-80 transition">
          Связаться
        </button>
      </div>

      {/* CSS-анимация */}
      <style jsx>{`
        .wave1 {
          animation: waveExpand 2.0s ease-out 4;
          animation-delay: 0s;
        }

        .wave2 {
          animation: waveExpand 2.0s ease-out 4;
          animation-delay: 0.4s;
        }

        @keyframes waveExpand {
          0% {
            width: 40px;
            height: 40px;
            opacity: 1;
            transform: translateY(-50%) translateX(0px) scaleX(0.3);
          }
          30% {
            opacity: 0.9;
          }
          60% {
            opacity: 0.5;
          }
          100% {
            width: 150px;
            height: 150px;
            opacity: 0;
            transform: translateY(-50%) translateX(120px) scaleX(1.5);
          }
        }
      `}</style>
    </nav>
  )
}