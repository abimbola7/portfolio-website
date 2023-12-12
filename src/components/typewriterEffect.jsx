"use client"
import React from 'react'
import TypewriterComponent from 'typewriter-effect'

export default function TypewriterEffect() {
  const sentArr = React.useMemo(() => [
    "My name is Oladosu Abimbola", 
    "I study Electronics and Electrical Engineering at OAU", 
    "My learnt how to code at SQI College"
  ], [])
  
  
  return (
    <div className='text-2xl text-white'>
      <TypewriterComponent
      options={{
        strings: sentArr,
        autoStart: true,
        loop: true,
      }}
      />
    </div>
  )
}
