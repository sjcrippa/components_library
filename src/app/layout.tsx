import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Components Library',
  description: 'Building a components-library with Next JS .14 and TypeScript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-screen-lg mx-auto bg-dark`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
