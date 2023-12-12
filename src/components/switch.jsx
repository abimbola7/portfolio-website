"use client"
import React from 'react';
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useTheme } from 'next-themes';

export default function Switch() {
  const { theme,  setTheme, systemTheme} = useTheme();
  const [ mounted, setMounted ] = React.useState(false);
  const [ themes, setThemes ] = React.useState(false);

  React.useEffect(()=>setMounted(true),[])
  return (
    <>
      {
        mounted && (
          <div 
          onClick={()=>theme === "light" ? setTheme("dark") : setTheme("light")}
          className='w-16 px-1 py-1 bg-black cursor-pointer rounded-3xl relative'>
            <div 
            className={`bg-red-500 rounded-full w-7 h-7 transition-transform duration-300 ${theme === "dark" ? "translate-x-full" : "translate-x-0"} flex justify-between items-center`}
            >
            </div>
            <div className='absolute flex top-0 w-full h-full justify-between items-center pr-2 text-xl'>
              <MdDarkMode className={`duration-700 transition-opacity ${theme === "light" ? "invisible opacity-0" : "visible opacity-100"}`}/>
              <MdLightMode className={`duration-700 transition-opacity ${theme === "light"  ? "visible opacity-100" : "invisible opacity-0"}`}/>
            </div>
          </div>
        )
      }
    </>
  )
}
