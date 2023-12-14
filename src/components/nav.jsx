"use client"
import Link from 'next/link';
import React from 'react';
import Switch from './switch';
import { usePathname } from 'next/navigation';
import { GoTriangleDown } from "react-icons/go";
import { CiHome } from "react-icons/ci";
import { motion } from 'framer-motion';


export default function Nav() {
  const itemBtnVariant = {
    normal: { scale: 1 },
    action: { scale: 1.2 },
  };
  
  const underBarVariant = {
    normal: { y : 10, height : 0 },
    action: { y : 0 , height : ".5rem", transition : {
      type : "tween",
    }},
  };
  
  const pathname = usePathname()
  const [ name, setName ] = React.useState("abimbola.dev")
  const [ icon, setIcon ] = React.useState()
  return (
    <header className='flex items-center justify-between pt-10 md:pt-20'>
      <div className=''>
        <Link 
        className={`flex flex-row items-center space-x-1 ${name === "back to home" && "hover:text-[#f7801e]"}`}
        onMouseOver={()=>{
            pathname !== "/" ? setName("back to home") : setName("abimbola.dev");
            pathname !== "/" ? setIcon(<CiHome className='text-xl'/>) : setIcon(null);
            
        }}
        onMouseLeave={()=>{
          setName("abimbola.dev")
          setIcon(null)
        }}
        href="/">
          <p className=''>{name}</p>
          {icon}
        </Link>  
      </div>
      
      <div className='flex items-center space-x-12'>
        {
          [
            ["about", "/about"],
            ["projects", "/projects"],
            ["contact", "/contact"],
          ].map(([item, url])=>(
            <Link 
            key={item} 
            href={url}
            className={`items-center hidden  md:flex ${ pathname === url && "text-[#f7801e]" }`}
            >
            {
              pathname === url && (
                <img src="/blob.svg" className='w-8 h-8 object-cover'/>
              )
            }
            <motion.span
            variants={itemBtnVariant} 
            whileHover="action" 
            initial="normal"
            className='relative group overflow-hidden'
            >
              <motion.div
              variants={underBarVariant}
              // initial="normal"
              // animate="action"
               className='hidden group-hover:block absolute w-full h-2 bg-[#f7801e] bg-opacity-40 top-3 z-[10000] left-0'></motion.div>
              {item}
            </motion.span>
            </Link>
          ))
        }
        
        <Switch />
      </div>
    </header>
  )
}
