"use client"
import Link from 'next/link';
import React from 'react';
import Switch from './switch';
import { usePathname } from 'next/navigation';
import { GoTriangleDown } from "react-icons/go";
import { CiHome } from "react-icons/ci";


export default function Nav() {
  const pathname = usePathname()
  const [ name, setName ] = React.useState("abimbola.dev")
  const [ icon, setIcon ] = React.useState()
  return (
    <header className='flex items-center justify-between pt-10 md:pt-20'>
      <div className=''>
        <Link 
        className='flex flex-row items-center space-x-1'
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
            className={`items-center hidden space-x-2 md:flex relative hover:before:absolute hover:before:w-full hover:before:h-2 hover:before:bg-[#f7801e] hover:before:bg-opacity-40 hover:before:rounded-sm ${ pathname === url && "text-[#f7801e]" }`}
            >
            {
              pathname === url && (
                <GoTriangleDown className='text-xl '/>
              )
            }
            {item}
            </Link>
          ))
        }
        
        <Switch />
      </div>
    </header>
  )
}
