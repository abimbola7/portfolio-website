"use client"
import React from 'react'

import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

export default function PageTransitionLayout({ children }) {
  const pathname = usePathname();
  const uniqueId = `${pathname}_${Math.random().toString(36).substring(2, 15)}`
  console.log(pathname)
  const router = useRouter(); 
  return (
    <AnimatePresence mode={"popLayout"}>
      <motion.div
      key={uniqueId}
      initial={"initialState"}
      animate={"animateState"}
      exit={"exitState"}
      transition={{
        type : "tween",
        duration : .5
      }}
      variants={{
        initialState: {
        x: "100vw"
        },
        animateState: {
        x: 0
        },
        exitState : {
        x : "-100vw"
        }
      }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
