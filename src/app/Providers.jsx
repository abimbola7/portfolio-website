"use client"
import { ThemeProvider } from 'next-themes'
import React from 'react'

const Providers = ({ children }) => {
  return (
    <ThemeProvider
    enableSystem={true}
    attribute='class'
    >
      <div
      className='transition-colors duration-300 select-none'
      >
        {children}
      </div>
    </ThemeProvider>
  )
}

export default Providers