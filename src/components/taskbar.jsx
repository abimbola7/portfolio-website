import React from 'react'
import { FaUserNinja } from "react-icons/fa6";
import { IoIosCode } from "react-icons/io";
import { CiHome } from "react-icons/ci";
import { CiChat1 } from "react-icons/ci";
import Link from 'next/link';

export default function Taskbar() {
  const taskItems = [
    { name : "home", link : "/", icon : <CiHome key={1} className="text-lg"/>},
    { name : "about", link : "/about", icon : <FaUserNinja key={2} className="text-lg"/>},
    { name : "projects", link : "/projects", icon :  <IoIosCode key={3} className="text-lg"/>},
    { name : "contact", link : "/contact", icon :  <CiChat1 key={4} className="text-lg"/>},
  ]
  return (
    <div className='fixed bottom-0 flex w-[90%] py-3 mx-auto backdrop-blur-2xl md:hidden rounded-3xl items-center justify-evenly'>
      {
        taskItems.map((items)=>(
          <Link
          key={items.name}
          href={items.link}
          className='flex flex-col items-center justify-between space-x-2 text-center'
          >
            <p className='text-xs'>{items.name}</p>
            {items.icon}
          </Link>
        ))
      }
    </div>
  )
}
