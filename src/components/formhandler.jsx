"use client"
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css'

export default function FormHandler() {
  const [ name, setName ] = React.useState("")
  const [ email, setEmail ] = React.useState("")
  const [ content, setContent ] = React.useState("")
  const [ isLoading, setIsLoading ] = React.useState(false);
  
  const submitHandler = async (e) => {
    e.preventDefault()
    console.log(name, email, content) 
    setIsLoading(true)
    const res = await fetch("/api/send", {
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({name, email, content})
    });

    const json = await res.json();
    if (json.status === 200) {
      toast.success("Email Sent Successfully",{
        position : "top-center",
        className : "w-full"
      })
    } else{
      toast.error("Error sending Email",{
        position : "top-center",
        className : "w-full"
      })
    }
    setIsLoading(false)
  }
  return (
    <>
      <ToastContainer  />
      <form
      onSubmit={submitHandler}
      className="text-left mt-10 mx-auto max-w-4xl"
      >
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 justify-items-start'>
          <div className='w-full sm:w-fit'>
            <label className="text-md md:text-lg">Your Name</label>
            <input
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className='border-b placeholder:text-xs py-2 placeholder:font-thin bg-transparent focus:outline-none block w-full'
            placeholder='Enter your name'
            />
          </div>
          <div className='w-full sm:w-fit'>
            <label className='text-md md:text-lg'>Your Email Address</label>
            <input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            type='email'
            className='border-b placeholder:text-xs py-2 placeholder:font-thin bg-transparent focus:outline-none block w-full'
            placeholder='Enter your email address'
            />
          </div>
          <div className='sm:col-span-2 flex flex-col w-full'>
            <label className='text-md md:text-lg'>Your Message</label>
            <input
            value={content}
            onChange={(e)=>setContent(e.target.value)}
            className='border-b placeholder:text-xs py-2 placeholder:font-thin bg-transparent focus:outline-none block flex-1'
            placeholder='Hey i would like to work with you'
            />
          </div>
        </div>
        <div className='text-center mt-6'>
          <button
          disabled={isLoading}
          className={`bg-[#f7801e] px-4 py-2 font-semibold relative focus:outline-none`}
          >
          {
            isLoading && (
              <div className='absolute w-full h-full bg-[#f7801e] inset-0 bg-opacity-80 flex items-center justify-center'>
                <img src="/loader.svg" className='w-10'/>
              </div>
            )
          }
          Send Message</button>
        </div>
      </form>
    </>
  )
}
