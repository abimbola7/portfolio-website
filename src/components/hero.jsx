"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Changa } from 'next/font/google'

const changa  = Changa({subsets : ['latin']})
export default function Hero() {
  
  return (
    <div className='w-full flex items-center flex-1 justify-center flex-col py-10'>
      <p className='uppercase text-lg md:text-2xl font-extralight tracking-widest'>
        <span className='font-bold'>hello! </span>
        my name is
      </p>

      <div className={`border-none font-extrabold text-5xl sm:text-6xl md:text-8xl tracking-widest mt-16 ${changa.className}`}>
        <motion.p 
        className='uppercase cursor-text'>
          {
            "oladosu".split("").map((letter, index)=>(
              <motion.span
              className='inline-block'
              whileHover={{
                origin : 0,
                rotate : -2,
                scale : 1.1,
                x : -3,
                y : -5,
              }}
              transition={{
                duration : .2
              }}
              key={index}
              >{letter}</motion.span>
            ))
          }
        </motion.p>
        <motion.p 
        className='uppercase cursor-text'>
          {
            "abimbola".split("").map((letter, index)=>(
              <motion.span
              className='inline-block'
              whileHover={{
                origin : 0,
                rotate : -2,
                scale : 1.1,
                x : -3,
                y : -5
              }}
              key={index}
              >{letter}</motion.span>
            ))
          }
        </motion.p>
      </div>

      <div className='whitespace-pre-line max-w-lg mt-10 text-sm sm:text-lg font-light'>
          <p className='whitespace-pre-line text-center'>
          I&apos;m an experienced frontend developer dedicated to crafting visually appealing and user-centric interfaces and also committed to clean, efficient code and continuous learning to stay abreast of industry trends.
          </p>
      </div>
    </div>
  )
}
