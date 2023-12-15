"use client"
import React from 'react';
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { MdOutlineNightlightRound } from "react-icons/md";
import { useTheme } from 'next-themes';

export default function Switch() {
  const { theme,  setTheme, systemTheme} = useTheme();
  const [ mounted, setMounted ] = React.useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme

  React.useEffect(()=>setMounted(true),[])
  return (
    <>
      {
        mounted && (
          <div 
          onClick={()=>currentTheme === "light" ? setTheme("dark") : setTheme("light")}
          className='w-14 px-1 py-1 bg-white dark:bg-black cursor-pointer rounded-3xl relative'>
            <div 
            className={`bg-[#f7801e] rounded-full w-6 h-6 transition-transform duration-300 ${currentTheme === "dark" ? "translate-x-full" : "translate-x-0"} flex justify-between items-center`}
            >
            </div>
            <div className='absolute flex top-0 w-full h-full justify-between items-center pr-2 text-xl text-[#f7801e]'>
              <MdOutlineNightlightRound className={`duration-700 transition-opacity ${currentTheme === "light" ? "invisible opacity-0" : "visible opacity-100"} transition-transform rotate-180`}/>
              <MdLightMode className={`duration-700 transition-opacity ${currentTheme === "light"  ? "visible opacity-100" : "invisible opacity-0"}`}/>
            </div>
          </div>
        )
      }
    </>
  )
}
