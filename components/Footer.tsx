'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Youtube, Facebook, Instagram, Clapperboard, MessageCircle } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-8 mt-12 relative z-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-blue-300">NardMoney</h3>
            <p className="text-sm text-gray-300">Tu guía confiable para oportunidades de ingresos en línea.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-blue-300">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-gray-300 hover:text-blue-200 transition-colors">Inicio</Link></li>
              <li><Link href="#" className="text-sm text-gray-300 hover:text-blue-200 transition-colors">Categorías</Link></li>
              <li><Link href="#" className="text-sm text-gray-300 hover:text-blue-200 transition-colors">Sobre Nosotros</Link></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-blue-300">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-200 transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-200 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-200 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-200 transition-colors">
                <Clapperboard size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-200 transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="mt-8 pt-8 border-t border-blue-800 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-sm text-gray-400">&copy; 2024 NardMoney. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

