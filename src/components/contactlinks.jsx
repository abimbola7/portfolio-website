import React from 'react'
import { Changa } from 'next/font/google'
import Link from 'next/link'


const changa  = Changa({subsets : ['latin']})

export default function ContactLinks({ contactInfo}) {
  return (
    <div className={`mt-16`}>
      <h1 className={`${ changa.className } text-xl text-center`}>You Can Also Contact Me Through:</h1>
      <div className="flex flex-row space-x-3 items-center w-fit mx-auto my-5">
        {
          contactInfo.map((contact)=>(
            <Link href={contact.link} target="_blank" key={contact.name} className=''> 
              <img src={contact.icon} className='w-10 sm:w-16 md:w-20 mr-3'/>
            </Link>
          ))
        }
      </div>
    </div>
  )
}
