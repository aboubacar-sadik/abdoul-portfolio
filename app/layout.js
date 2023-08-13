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
  title: 'Illiassou Issoufou Abdoul Hayyou',
  description: `Hello! My name is Illiassou Issoufou Abdoul Hayyou, and I am a professional
  virtual assistant (a Top Rated Upwork Freelancer) with over 3 years of experience
  providing various services as outlined in the services section.`,
  applicationName: {
    default: `Illissou Issoufou's Portfolio`
  },
  colorScheme: {
    default: 'dark'
  },
  referrer: 'origin-when-cross-origin',
  keywords: {
    default: ['Virtual assistant', 'Web reasearch', 'Data entry']
  },
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
