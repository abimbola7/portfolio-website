"use client"
import React from 'react'
import { FaUserNinja } from "react-icons/fa6";
import { IoIosCode } from "react-icons/io";
import { CiHome } from "react-icons/ci";
import { CiChat1 } from "react-icons/ci";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { itemBtnVariant, underBarVariant } from './nav';
import { motion } from 'framer-motion';

export default function Taskbar() {
  const pathname = usePathname()
  const taskItems = [
    { name : "home", link : "/", icon : <CiHome key={1} className="text-lg group-hover:text-[#f7801e] duration-200 transition-colors"/>},
    { name : "about", link : "/about", icon : <FaUserNinja key={2} className="text-lg group-hover:text-[#f7801e] duration-200 transition-colors"/>},
    { name : "projects", link : "/projects", icon :  <IoIosCode key={3} className="text-lg group-hover:text-[#f7801e] duration-200 transition-colors"/>},
    { name : "contact", link : "/contact", icon :  <CiChat1 key={4} className="text-lg group-hover:text-[#f7801e] duration-200 transition-colors"/>},
  ]
  return (
    <div className={`fixed bottom-0 flex w-[90%] py-4 mx-auto backdrop-blur-2xl md:hidden rounded-3xl items-center justify-evenly`}>
      {
        taskItems.map((items)=>(
          <Link
          key={items.name}
          href={items.link}
          className={`flex flex-col items-center justify-between group space-y-1 text-center relative ${ pathname === items.link && "text-[#f7801e]" }`}
          >
            <motion.span 
            variants={itemBtnVariant} 
            whileHover="action" 
            initial="normal"
            className='hidden xs:block text-sm relative overflow-hidden'>
              <motion.div
              variants={underBarVariant}
               className='hidden group-hover:block absolute w-full h-2 bg-[#f7801e] bg-opacity-40 top-2 z-[10000] left-0'/>
              {items.name}
            </motion.span>
            {items.icon}
            {
              pathname === items.link && (
                <div className='absolute -bottom-5'>
                  <img src="/blob.svg" className='w-5 h-5 transition-transform rotate-90 duration-200'/>
                </div>
              )
            }
          </Link>
        ))
      }
    </div>
  )
}
