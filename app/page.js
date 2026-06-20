'use client'

import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Product from './components/Product'
import Team from './components/Team'
import Investors from './components/Investors'
import Partners from './components/Partners'
import Achievements from './components/Achievements'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <Hero />
      <Product />
      <Team />
      <Investors />
      <Partners />
      <Achievements />
      <Contacts />
      <Footer />
    </motion.div>
  )
}