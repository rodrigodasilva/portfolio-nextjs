import { Inter } from 'next/font/google'

import './globals.css'
import { AOSInit } from './components/aos-init'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rodrigo Ribeiro',
  description: 'Web Developer'
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: 1,
  shrinkToFit: 'no'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <AOSInit />
      <body className={inter.classvaame}>{children}</body>
    </html>
  )
}
