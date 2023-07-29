import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import ProfilePic from './components/ProfilePic'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `Edoardo's Amazing Blog`,
  description: 'App created by Edoardo Busano',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className + ' dark:bg-slate-800'}>
        <Navbar />
        <ProfilePic />
        {children}
      </body>
    </html>
  )
}
