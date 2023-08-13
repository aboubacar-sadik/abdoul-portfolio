import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'
import { Analytics } from '@vercel/analytics/react';

import { Poppins } from '@next/font/google'

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"]
})

export const metadata = {
  title: 'Home',
  description: 'tomess.',
}



export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
