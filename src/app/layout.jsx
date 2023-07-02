import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import { Karla } from 'next/font/google'
import './globals.css'

const karla = Karla({ subsets: ['latin'] })

export const metadata = {
  title: 'WebDev Blogs',
  description: 'Blogs about the web development.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={karla.className}>
        <header>
          <Navbar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  )
}
