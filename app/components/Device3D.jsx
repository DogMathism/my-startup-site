'use client' // обязательно для клиентских компонентов

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, Environment, OrbitControls } from '@react-three/drei'
import { useScroll } from 'framer-motion' // используем framer-motion для отслеживания скролла
import { useTransform } from 'framer-motion'

export default function Device3D() {
  const groupRef = useRef()
  // Загружаем модель
  const { scene } = useGLTF('/device.glb') // путь к твоей модели
  
  // Отслеживаем прогресс скролла
  const { scrollYProgress } = useScroll()
  
  // Преобразуем прогресс скролла (от 0 до 1) в угол поворота (от 0 до 2PI)
  const rotation = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 2])
  
  // Применяем поворот к модели при каждом кадре
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = rotation.get()
    }
  })

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <group ref={groupRef} position={[0, 0, 0]}>
        <primitive object={scene} scale={2} />
      </group>
      <OrbitControls enableZoom={false} />
    </>
  )
}