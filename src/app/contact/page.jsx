"use client"

import FormHandler from '@/components/formhandler'
import React from 'react'
import { Changa } from 'next/font/google';
import { animateVariant } from '@/components/hero';
import { motion } from 'framer-motion';

const changa  = Changa({subsets : ['latin']})

export default function Contact() {
  return (
    <motion.div 
    variants={animateVariant}
    initial="hidden"
    animate="visible"
    className="flex-1">
      <p className={`mt-5 text-lg md:text-xl lg:text-3xl tracking-wider text-center font-bold ${changa.className}`}>If you have any exicting opportunity for me, feel free to reach out!</p>
      <FormHandler />
    </motion.div>
  )
}
