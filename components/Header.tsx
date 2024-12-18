import Link from 'next/link'
import { Sparkles } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-4 shadow-lg relative z-20">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold flex items-center space-x-2 hover:text-blue-300 transition-colors">
          <Sparkles className="w-6 h-6" />
          <span>NardMoney</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#" className="hover:text-blue-300 transition-colors">Inicio</Link></li>
            <li><Link href="#" className="hover:text-blue-300 transition-colors">Categorías</Link></li>
            <li><Link href="#" className="hover:text-blue-300 transition-colors">Sobre Nosotros</Link></li>
          </ul>
        </nav>
        
        <script type='text/javascript' src='//filthygracefulspinach.com/0a/18/46/0a1846067f8ae6ca687bee688e0fdc40.js'></script>
        
      </div>
      
    </header>
  )
}

