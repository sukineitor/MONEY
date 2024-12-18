import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NardMoney',
  description: 'Descubre las mejores formas de generar ingresos desde la comodidad de tu hogar.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
        <Script
          src="//filthygracefulspinach.com/0a/18/46/0a1846067f8ae6ca687bee688e0fdc40.js"
          strategy="lazyOnload"
          onError={(e) => {
            console.error('Error loading script:', e)
          }}
        />
      </body>
    </html>
  )
}


