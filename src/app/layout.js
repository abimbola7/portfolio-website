import React, { useContext, Ref } from 'react';
import Nav from '@/components/nav'
import ParticleHeader from '@/components/particle-header'
import Taskbar from '@/components/taskbar';
import ReduxProvider from '@/store/provider';
import { Inter, Space_Mono, BioRhyme, Eczar, Space_Grotesk } from 'next/font/google';
import './globals.css'
import Providers from './Providers';

import { motion, AnimatePresence } from 'framer-motion';

const inter = Inter({ subsets: ['latin'] })
// export const changa = Changa({ subsets: ['latin'] })
const spacegrotesk = Space_Grotesk({ subsets: ['latin'] })
const ezcar = Eczar({ subsets: ['latin'] })
const biorhyme = BioRhyme({ subsets: ['latin'] })
const spacemono = Space_Mono({ 
  subsets: ['latin'] ,
  weight : ["400", "700"]
})

export const metadata = {
  title: 'abimbola.dev',
  description: 'Frontend Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spacegrotesk.className}>
        <ReduxProvider>
          <Providers>
            <div className='min-h-screen pb-20 md:pb-0 w-[90%] min-w-[90%] mx-auto flex flex-col text-[#a5ffc9]'>
              <Nav />
              {children}
              <Taskbar />
              <ParticleHeader />
            </div>
          </Providers>
        </ReduxProvider>
      </body>
    </html>
  )
}
