import React from 'react'
import OpportunityGrid from '../components/OpportunityGrid'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 bg-grid">
      <div className="absolute inset-0 bg-blue-500 opacity-5 animate-pulse"></div>
      <Header />
      <main className="container mx-auto px-4 py-8 relative z-10">
        <section className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-white text-glow animate-float">
            Oportunidades para Ganar Dinero Online
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Descubre las mejores formas de generar ingresos desde la comodidad de tu hogar, 
            con opciones disponibles en toda Latinoamérica y el mundo.
          </p>
        </section>
        <OpportunityGrid />
      </main>
      <Footer />
    </div>
  )
}

export default Home

