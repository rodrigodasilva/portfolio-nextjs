import { GoogleAnalytics } from '@next/third-parties/google'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rodrigo Ribeiro',
  description: 'Web Developer'
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#020817' },
    { media: '(prefers-color-scheme: dark)', color: '#020817' }
  ]
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.classvaame}>{children}</body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
    </html>
  )
}
