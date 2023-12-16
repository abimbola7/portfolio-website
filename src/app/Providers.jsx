"use client"
import ParticleHeader from '@/components/particle-header'
import { ThemeProvider } from 'next-themes'
import React from 'react'

const Providers = ({ children }) => {
  return (
    <ThemeProvider
    enableSystem={true}
    attribute="class"
    >
      <div
      className='transition-colors duration-500 select-none dark:text-[#a5ffc9] text-[#3a3a3a] overflow-hidden'
      >
        {children}

      </div>
      <ParticleHeader />
    </ThemeProvider>
  )
}

export default Providers