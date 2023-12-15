"use client"

import FormHandler from '@/components/formhandler'
import React from 'react'
import { Changa } from 'next/font/google';
import { animateVariant } from '@/components/hero';
import { motion } from 'framer-motion';
import { RiTwitterXLine } from "react-icons/ri";
import ContactLinks from '@/components/contactlinks';

const changa  = Changa({subsets : ['latin']})

export default function Contact() {
  const contactInfo = [
    { name : "twitter", link : "https://twitter.com/_jidex", icon : "https://cdn2.iconfinder.com/data/icons/threads-by-instagram/24/x-logo-twitter-new-brand-512.png"},
    { name : "linkedIn", link : "https://www.linkedin.com/in/abimbola-babajide-9585a0198/", icon : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" },
    { name : "github", link : "https://github.com/abimbola7", icon : "https://cdn-icons-png.flaticon.com/256/25/25231.png" }
  ]
  return (
    <motion.div 
    variants={animateVariant}
    initial="hidden"
    animate="visible"
    className="flex-1">
      <h1 className="mt-5 font-thin text-center text-3xl">CONTACT ME</h1>
      <p className={`mt-5 text-lg md:text-xl lg:text-3xl tracking-wider text-center font-bold ${changa.className}`}>If you have any exicting opportunity for me, feel free to reach out!</p>
      <FormHandler />
      <ContactLinks contactInfo={contactInfo} changa={changa}/>
    </motion.div>
  )
}
