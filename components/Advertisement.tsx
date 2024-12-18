'use client'

import { useEffect, useRef } from 'react'

export default function Advertisement() {
  const adContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Aquí puedes agregar lógica adicional para manejar la inicialización del anuncio
    if (adContainerRef.current) {
      // El contenedor está listo para mostrar anuncios
    }
  }, [])

  return (
    <div 
      ref={adContainerRef}
      className="w-full min-h-[100px] flex items-center justify-center bg-gray-100 my-4"
    >
      {/* Los anuncios se cargarán aquí */}
    </div>
  )
}

