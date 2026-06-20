'use client'

import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment } from '@react-three/drei'

function Model() {
  const { scene } = useGLTF('/model.glb') // замени на свою модель
  return <primitive object={scene} scale={2} />
}

export default function Product() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const rotation = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 2])

  return (
    <section id="О продукте" ref={containerRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Текст */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">О продукте</h2>
          
          <div className="space-y-6 text-[#1D1D1F]/80">
            <div>
              <h3 className="text-xl font-semibold text-[#1D1D1F]">Проблема</h3>
              <p>Разработчики тратят 70% времени на рутину вместо творчества</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#1D1D1F]">Решение</h3>
              <p>AI-ассистент, который берет на себя 90% рутинных задач</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#1D1D1F]">Технический стек</h3>
              <p className="text-sm font-mono bg-[#F5F5F7] p-3 rounded-lg">
                Next.js · TypeScript · Python · FastAPI · PostgreSQL · Docker · AWS
              </p>
            </div>
          </div>
        </motion.div>

        {/* 3D-сцена */}
        <div className="h-[500px] w-full relative">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <Environment preset="city" />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} color="#007AFF" />
            <motion.group rotation-y={rotation}>
              <Model />
            </motion.group>
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>

      </div>
    </section>
  )
}