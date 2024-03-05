"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Changa } from 'next/font/google';
import Link from 'next/link';

const changa  = Changa({subsets : ['latin']})

export const animateVariant = {
  hidden : {
    opacity : 0,
    y : 200
  },
  visible : {
    opacity : 1,
    y :0,
    transition : {
      type : "tween",
      duration : 1,
      ease : "easeOut"
    }
  },
  exitVariant : {
    x : "-100vw"
  }
}

export default function Hero() {
  return (
    <motion.div 
    variants={animateVariant}
    initial="hidden"
    animate="visible"
    exit={"exitVariant"}
    className='flex flex-col items-center justify-center flex-1 w-full py-10'>
      <p className='text-lg tracking-widest uppercase md:text-2xl font-extralight'>
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

      <div className='max-w-lg mt-10 text-sm font-light whitespace-pre-line sm:text-lg'>
          <p className='text-center whitespace-pre-line'>
          I&apos;m an experienced frontend developer dedicated to crafting visually appealing and user-centric interfaces and also committed to clean, efficient code and continuous learning to stay abreast of industry trends.
          </p>
      </div>

      <div className='mt-5 text-[#f9f9f9] dark:text-[#a5ffc9]'>
        <Link 
        target="_blank"
        href="https://docs.google.com/document/d/e/2PACX-1vRy2WcQiLE_-MZHnMpQYYzNSigftUNrdAxi7ugqnq7HXJglHqhDIvzyq6Pveidqt3j_AZn-r8s7Lyxt/pub" 
         className='w-fit bg-[#f7801e] px-4 py-2'>
          View resume
        </Link>
      </div>
    </motion.div>
  )
}
